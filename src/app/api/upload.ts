import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/src/lib/db';
import Blog from '@/src/models/Blog';
import User from '@/src/models/User'; // Assuming you have a User model
import cloudinary from '@/src/lib/cloudinary';
import { IncomingForm, File } from 'formidable';
import fs from 'fs';

// Configuration pour l'API route
export const config = {
  api: {
    bodyParser: false, // Désactive le body parser par défaut pour gérer les données de formulaire multipart
  },
};

// Interfaces pour les champs et fichiers analysés depuis la soumission du formulaire
interface ParsedFields {
  [key: string]: any;
}

interface ParsedFiles {
  [key: string]: File[];
}

// Fonction pour gérer le téléchargement de fichiers, y compris l'upload des images vers Cloudinary
async function handleFileUpload(req: NextApiRequest, imageType: 'blog' | 'user' = 'blog'): Promise<{ fields: ParsedFields; imageUrls: string[] }> {
  return new Promise((resolve, reject) => {
    const form = new IncomingForm();
    form.parse(req, async (err, fields, files) => {
      if (err) {
        reject(err);
        return;
      }

      const parsedFields = fields as ParsedFields;
      const parsedFiles = files as ParsedFiles;

      const imageUrls: string[] = [];
      const imageField = imageType === 'blog' ? 'image' : 'userImage'; // Adjust based on your field names

      // Gestion de l'upload de l'image principale
      const imageFile = parsedFiles[imageField]?.[0];
      if (imageFile && imageFile.filepath) {
        try {
          const uploadResult = await cloudinary.uploader.upload(imageFile.filepath);
          imageUrls.push(uploadResult.secure_url);
        } catch (uploadError) {
          console.error('Upload error:', uploadError);
          reject(uploadError);
        } finally {
          if (imageFile.filepath) {
            fs.unlinkSync(imageFile.filepath);
          }
        }
      }

      resolve({ fields: parsedFields, imageUrls });
    });
  });
}

// Fonction principale pour gérer les différentes méthodes HTTP
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect(); // Connexion à la base de données

  switch (req.method) {
    case 'GET':
      try {
        const blogs = await Blog.find({}).sort({ date: -1 }); // Récupère tous les articles de blog depuis la base de données
        res.status(200).json(blogs); // Envoie les articles de blog en réponse JSON
      } catch (error) {
        res.status(500).json({ message: 'Server Error', error }); // Gestion des erreurs serveur
      }
      break;

    case 'POST':
      try {
        // Determine if the request is for user or blog image
        const isUserImageUpload = req.headers['x-image-type'] === 'user';
        const { fields, imageUrls } = await handleFileUpload(req, isUserImageUpload ? 'user' : 'blog');
        
        if (isUserImageUpload) {
          // Handle user image upload
          const newUser = new User({
            ...fields,
            image: imageUrls[0] || '', // URL de l'image utilisateur
          });

          await newUser.save(); // Sauvegarder la nouvelle entrée utilisateur dans la base de données
          res.status(201).json(newUser); // Envoyer la nouvelle entrée utilisateur en réponse JSON
        } else {
          // Handle blog image upload
          const newBlog = new Blog({
            ...fields,
            image: imageUrls[0] || '', // URL de l'image principale
            AddMoreBlog: fields.AddMoreBlog?.map((entry: any) => ({
              ...entry,
              image: '', // Assigner une chaîne vide pour les images supplémentaires qui ne sont plus gérées
            })) || [],
          });

          await newBlog.save(); // Sauvegarder la nouvelle entrée de blog dans la base de données
          res.status(201).json(newBlog); // Envoyer la nouvelle entrée de blog en réponse JSON
        }
      } catch (error) {
        console.error('Error creating resource:', error);
        res.status(400).json({ message: 'Bad Request', error }); // Gestion des erreurs de requête
      }
      break;

    case 'PUT':
      try {
        const { id } = req.query;
        if (!id) {
          return res.status(400).json({ message: 'Resource ID is required' });
        }

        // Determine if the request is for user or blog image
        const isUserImageUpdate = req.headers['x-image-type'] === 'user';
        const { fields, imageUrls } = await handleFileUpload(req, isUserImageUpdate ? 'user' : 'blog');

        if (isUserImageUpdate) {
          // Handle user image update
          const userToUpdate = await User.findById(id);
          if (!userToUpdate) {
            return res.status(404).json({ message: 'User not found' });
          }

          if (imageUrls.length > 0) {
            if (userToUpdate.image) {
              await cloudinary.uploader.destroy(userToUpdate.image);
            }
            userToUpdate.image = imageUrls[0];
          }

          await userToUpdate.save(); // Sauvegarder l'utilisateur mis à jour dans la base de données
          res.status(200).json(userToUpdate); // Envoyer l'utilisateur mis à jour en réponse JSON
        } else {
          // Handle blog update
          const blogToUpdate = await Blog.findById(id);
          if (!blogToUpdate) {
            return res.status(404).json({ message: 'Blog not found' });
          }

          if (imageUrls.length > 0) {
            if (blogToUpdate.image) {
              await cloudinary.uploader.destroy(blogToUpdate.image);
            }
            blogToUpdate.image = imageUrls[0];
          }

          blogToUpdate.AddMoreBlog = fields.AddMoreBlog?.map((entry: any) => ({
            ...entry,
            image: '', // Assigner une chaîne vide pour les images supplémentaires qui ne sont plus gérées
          })) || [];

          await blogToUpdate.save(); // Sauvegarder l'article de blog mis à jour dans la base de données
          res.status(200).json(blogToUpdate); // Envoyer l'article de blog mis à jour en réponse JSON
        }
      } catch (error) {
        console.error('Error updating resource:', error);
        res.status(400).json({ message: 'Bad Request', error }); // Gestion des erreurs de requête
      }
      break;

    case 'DELETE':
      try {
        const { id } = req.query;
        if (!id) {
          return res.status(400).json({ message: 'Resource ID is required' });
        }

        // Determine if the request is for user or blog resource
        const isUserDeletion = req.headers['x-resource-type'] === 'user';
        if (isUserDeletion) {
          // Handle user deletion
          const userToDelete = await User.findById(id);
          if (!userToDelete) {
            return res.status(404).json({ message: 'User not found' });
          }

          if (userToDelete.image) {
            await cloudinary.uploader.destroy(userToDelete.image);
          }

          await User.findByIdAndDelete(id); // Supprimer l'utilisateur de la base de données
          res.status(200).json({ message: 'User deleted successfully' }); // Envoyer une réponse de succès
        } else {
          // Handle blog deletion
          const blogToDelete = await Blog.findById(id);
          if (!blogToDelete) {
            return res.status(404).json({ message: 'Blog not found' });
          }

          if (blogToDelete.image) {
            await cloudinary.uploader.destroy(blogToDelete.image);
          }

          // Remove additional blog images during deletion
          for (const addMoreBlogEntry of blogToDelete.AddMoreBlog) {
            if (addMoreBlogEntry.image) {
              await cloudinary.uploader.destroy(addMoreBlogEntry.image);
            }
          }

          await Blog.findByIdAndDelete(id); // Supprimer l'article de blog de la base de données
          res.status(200).json({ message: 'Blog deleted successfully' }); // Envoyer une réponse de succès
        }
      } catch (error) {
        console.error('Error deleting resource:', error);
        res.status(400).json({ message: 'Bad Request', error }); // Gestion des erreurs de requête
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']); // Définir les méthodes HTTP autorisées
      res.status(405).end(`Method ${req.method} Not Allowed`); // Gérer les méthodes non supportées
      break;
  }
}
