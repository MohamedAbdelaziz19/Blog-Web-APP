// src/components/BlogList.server.tsx
import mongoose from 'mongoose';
import Blog from '@/src/models/Blog';
import Image from 'next/image';
import BlogActions from './BlogActions.client';

export interface BlogType {
    _id: string;
    userImg: string;
    userName: string;
    image: string;
    title: string;
    category: string;
    date: string;
}

const BlogListServer = async () => {
    try {
        if (mongoose.connection.readyState !== 1) {
            await mongoose.connect(process.env.MONGODB_URI || '');
        }

        const blogs: BlogType[] = await Blog.find().lean();

        return (
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <h1 className='text-4xl font-semibold text-orange-400 text-center py-6'>
                    Blog Liste
                </h1>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-lg">User</th>
                            <th scope="col" className="px-6 py-3 text-lg">Image</th>
                            <th scope="col" className="px-6 py-3 text-lg">Title</th>
                            <th scope="col" className="px-6 py-3 text-lg">Category</th>
                            <th scope="col" className="px-6 py-3 text-lg">Date</th>
                            <th scope="col" className="px-6 py-3 text-lg">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {blogs.map((blog) => (
                            <tr key={blog._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="px-6 py-4 flex items-center">
                                    <input type="checkbox" className="mr-4" />
                                    <Image 
                                        src={blog.userImg} 
                                        alt={blog.userName} 
                                        className="w-8 h-8 rounded-full mr-2" 
                                        width={32} 
                                        height={32} 
                                    />
                                    {blog.userName}
                                </td>
                                <td className="px-6 py-4">
                                    <Image 
                                        src={blog.image} 
                                        alt={blog.title} 
                                        className="w-16 h-16 object-cover rounded-full" 
                                        width={64} 
                                        height={64} 
                                    />
                                </td>
                                <td className="px-6 py-4">{blog.title}</td>
                                <td className="px-6 py-4">{blog.category}</td>
                                <td className="px-6 py-4">{new Date(blog.date).toLocaleDateString()}</td>
                                <td className="px-6 py-4 flex space-x-2">
                                    <BlogActions params={{ id: blog._id }} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    } catch (error) {
        console.error('Error fetching blogs:', error);
        return <div>Error fetching blogs</div>;
    }
};

export default BlogListServer;
