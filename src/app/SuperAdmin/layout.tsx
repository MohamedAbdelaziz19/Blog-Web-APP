import { ReactNode } from 'react';
import SideBar from '../../components/admin/SideBar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <ToastContainer theme='dark'/>
      <div className='flex'>
        {/* Sidebar */}
        <SideBar />

        {/* Main Content */}
        <main className='flex-1 p-4'>
          {children}
        </main>
      </div>
    </>
  );
}
