'use client';

import Image from 'next/image';
import { CldImage } from 'next-cloudinary';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import AddImage from '@/src/components/admin/UploadImage';

function Page() {
  const [image, setImage] = useState<File | null>(null);
  const [imageURL, setImageURL] = useState<string | null>(null);
  const [data, setData] = useState({
    title: "",
    description: "",
    Category: "Blue",
    userName: "Aziz Maaref",
    userImg: "https://res.cloudinary.com/dzo2bvw5a/image/upload/v1723116603/profileImage_npkuum.jpg",
    AddMoreBlog: [] as Array<{ title: string; description: string; imageUrl: string | null }>,
  });

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [errors, setErrors] = useState<string[]>([]);

  const handleUploadSuccess = (url: string) => {
    setImageUrl(url);
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(event.target.value);
  };

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewDescription(event.target.value);
  };

  const validateInputs = () => {
    const newErrors: string[] = [];
    if (!data.title) newErrors.push("Blog Title is required.");
    if (!data.description) newErrors.push("Blog Description is required.");
    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const addMoreBlog = () => {
    if (!newTitle || !newDescription) {
      setErrors(["Both title and description are required for additional blog entries."]);
      return;
    }

    setData(prevData => ({
      ...prevData,
      AddMoreBlog: [
        ...prevData.AddMoreBlog,
        {
          title: newTitle,
          description: newDescription,
          imageUrl: imageUrl 
        }
      ]
    }));
    setNewTitle("");
    setNewDescription("");
    setImageUrl(null);
    setIsAddModalOpen(false);
  };

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateInputs()) return;

    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('Category', data.Category);
    formData.append('userName', data.userName);
    formData.append('userImg', data.userImg);
    formData.append('AddMoreBlog', JSON.stringify(data.AddMoreBlog));

    if (image) {
      formData.append('image', image);
    }
    
    try {
      const response = await fetch('/api/blog/post', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        toast.success(result.msg);
        setData({
          title: "",
          description: "",
          Category: "Blue",
          userName: "Aziz Maaref",
          userImg: "https://res.cloudinary.com/dzo2bvw5a/image/upload/v1723116603/profileImage_npkuum.jpg",
          AddMoreBlog: [],
        });
        setImage(null);
        setImageURL(null);
      } else {
        toast.error("Error: " + result.error);
      }
    } catch (error) {
      toast.error("An unexpected error occurred.");
    }
  };

  const handleDelete = (index: number) => {
    setData(prevData => ({
      ...prevData,
      AddMoreBlog: prevData.AddMoreBlog.filter((_, i) => i !== index)
    }));
  };

  useEffect(() => {
    if (image) {
      const url = URL.createObjectURL(image);
      setImageURL(url);
      return () => URL.revokeObjectURL(url);
    }
  }, [image]);

  return (
    <section className="p-6 bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl">
        <h1 className='text-3xl font-bold text-orange-500 text-center mb-8'>Create New Blog</h1>
        
        {errors.length > 0 && (
  <div className='border border-red-500 bg-red-100 text-red-600 rounded-lg p-4 mb-6 animate-pulse'>
    <div className='flex items-center space-x-2 mb-2'>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
      <span className='font-semibold'>There were some errors:</span>
    </div>
    <ul className='list-disc list-inside space-y-1'>
      {errors.map((error, index) => (
        <li key={index} className='text-sm'>
          {error}
        </li>
      ))}
    </ul>
  </div>
)}


        <form onSubmit={onSubmitHandler} className='space-y-6'>
          <div className="space-y-2">
            <label htmlFor="image" className="block text-lg font-medium text-gray-700">Upload Image</label>
            <div className="flex items-center space-x-4">
              <CldImage
                src={imageURL || 'https://res.cloudinary.com/dzo2bvw5a/image/upload/v1723112258/upload-1_fo1ehn.png'}
                alt='image'
                width={100}
                height={100}
                className='border-2 border-gray-300 rounded'
              />
              <input
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    setImage(e.target.files[0]); 
                  }
                }}
                type="file"
                id='image'
                className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="title" className="block text-lg font-medium text-gray-700">Blog Title</label>
            <input
              name='title' onChange={onChangeHandler} value={data.title}
              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              type="text"
              placeholder='Enter blog title'
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="description" className="block text-lg font-medium text-gray-700">Blog Description</label>
            <textarea
              name='description' onChange={onChangeHandler} value={data.description}
              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='Write blog description' rows={6}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="Category" className="block text-lg font-medium text-gray-700">Blog Category</label>
            <select
              name="Category" onChange={onChangeHandler} value={data.Category}
              className='w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
            >
              <option value="Blue" className='text-blue-500'>Blue</option>
              <option value="Rouge"className='text-red-600'>Rouge</option>
              <option value="Jaune"className='text-yellow-500'>Jaune</option>
              <option value="Blanc"className='text-black'>Blanc</option>
              <option value="Orange"className='text-orange-500'>Orange</option>
              <option value="Noir"className='text-gray-900'>Noir</option>
              <option value="Vert"className='text-green-500'>Vert</option> 
              <option value="Gris"className='text-gray-500'>Gris</option>
            </select>
          </div>

          <div className='text-center'>
            <button type='button' onClick={() => setIsAddModalOpen(true)} className='inline-flex items-center justify-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'>
              Add More
            </button>
          </div>

          {isAddModalOpen && (
            <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
              <div className='bg-white p-5 rounded shadow-lg w-full max-w-md'>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Add More Blog</h2>
                <div className="space-y-4">
                  <input
                    value={newTitle}
                    onChange={handleTitleChange}
                    className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                    type="text"
                    placeholder='Additional Title'
                  />
                  <textarea
                    value={newDescription}
                    onChange={handleDescriptionChange}
                    className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                    placeholder='Additional Description'
                    rows={4}
                  />
                  <AddImage onUploadSuccess={handleUploadSuccess} />
                </div>
                <div className="mt-4 flex justify-end space-x-2">
                  <button onClick={() => setIsAddModalOpen(false)} className='bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 focus:outline-none'>Cancel</button>
                  <button onClick={addMoreBlog} className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'>Add</button>
                </div>
              </div>
            </div>
          )}

<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
  {data.AddMoreBlog.map((blog, index) => (
    <div 
      key={index} 
      className='border border-gray-200 p-6 rounded-lg bg-white shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl'
    >
      <h3 className='font-semibold text-xl text-gray-900 mb-2'>{blog.title}</h3>
      <p className='text-gray-700 mb-4'>{blog.description}</p>
      {blog.imageUrl && (
        <CldImage
          src={blog.imageUrl}
          alt='additional image'
          width={400}
          height={250}
          className='rounded-lg object-cover w-full h-48'
        />
      )}
    </div>
  ))}
</div>


          <div className="mt-8">
            <button type='submit' className='w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg'>
              Create Blog
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Page;
