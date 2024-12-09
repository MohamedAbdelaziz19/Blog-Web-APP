import React from 'react';
import SignIn from '../app/(auth)/signin/page';  // Adjust the import paths as needed
import SignUp from '../app/(auth)/signup/page';
import { Session } from 'next-auth';

interface MobileMenuProps {
  isMenuOpen: boolean;
  handleNavigation: (path: string) => void;
  toggleModal: () => void;
  toggleModalReg: () => void;
  session: Session | null;
  isModalOpen: boolean;
  isModalRegOpen: boolean;
  modalRef: React.RefObject<HTMLDivElement>; // Ensure you have useRef if using
}

const MobileNavbar: React.FC<MobileMenuProps> = ({
  isMenuOpen,
  handleNavigation,
  toggleModal,
  toggleModalReg,
  session,
  isModalOpen,
  isModalRegOpen,
  modalRef,
}) => {
  return (
    <>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav aria-label="Global">
            <ul className="flex flex-col items-center gap-4 text-sm">
              <li>
                <span 
                  className="text-gray-800 text-lg transition hover:text-primary font-bold cursor-pointer"
                  onClick={() => handleNavigation('/')}
                >
                  Home
                </span>
              </li>
              <li>
                <span 
                  className="text-gray-800 text-lg transition hover:text-primary font-bold cursor-pointer"
                  onClick={() => handleNavigation('/about')}
                >
                  About Us
                </span>
              </li>
              <li>
                <span 
                  className="text-gray-800 text-lg transition hover:text-primary font-bold cursor-pointer"
                  onClick={() => handleNavigation('/blog')}
                >
                  Blog
                </span>
              </li>
              <li>
                <span 
                  className="text-gray-800 text-lg transition hover:text-primary font-bold cursor-pointer"
                  onClick={() => handleNavigation('/product')}
                >
                  Products
                </span>
              </li>
              <li>
                <span 
                  className="text-gray-800 text-lg transition hover:text-primary border-b-2 px-24 pb-4 font-bold cursor-pointer"
                  onClick={() => handleNavigation('/contact')}
                >
                  Contact
                </span>
              </li>
            </ul>
            <div className="flex flex-row gap-4 py-10 justify-center items-center">
              {!session ? (
                <>
                  <div>
                    <button
                      onClick={toggleModal} // Open modal
                      className="rounded-full bg-primary px-10 py-2.5 text-sm font-medium text-white shadow transition hover:bg-primary"
                    >
                      Login
                    </button>
                  </div>
                  <div>
                    <button
                      onClick={toggleModalReg} // Open modal
                      className="rounded-full px-10 py-2.5 text-sm font-medium text-primary transition hover:bg-gray-200"
                    >
                      Register
                    </button>
                  </div>
                </>
              ) : (
                <div>
                  {/* Optional: Add logged-in user options here */}
                </div>
              )}
            </div>
          </nav>
        </div>
      )}

      {/* Modal for SignIn */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div
            ref={modalRef}
            className="rounded-lg shadow-lg w-full max-w-md p-6 bg-white"
          >
            <button
              onClick={toggleModal}
              className="absolute top-4 right-6 text-white hover:text-orange-500 text-4xl"
            >
              &times;
            </button>
            <SignIn />
          </div>
        </div>
      )}

      {/* Modal for SignUp */}
      {isModalRegOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div
            ref={modalRef}
            className="rounded-lg shadow-lg w-full max-w-md p-6 bg-white"
          >
            <button
              onClick={toggleModalReg}
              className="absolute top-4 right-6 text-white hover:text-orange-500 text-4xl"
            >
              &times;
            </button>
            <SignUp />
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNavbar;
