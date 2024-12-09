// SearchBar.tsx

"use client";
import React from 'react';

interface SearchBarProps {
    searchTerm: string;
    category: string;
    onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onCategoryChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, category, onSearchChange, onCategoryChange }) => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-center text-4xl text-orange-400 font-bold mb-4'>Our Collection Of Products</h1>
            <div className='flex items-center rounded-md gap-1 bg-gray-100 mb-8'>
                {/* Select Category */}
                <select
                    name="Category"
                    id="Category"
                    value={category}
                    onChange={onCategoryChange}
                    className="text-blue-600 sm:text-sm px-2 py-3 border-r-2 bg-gray-100 rounded-tl-md rounded-bl-md -mr-1"
                >
                    <option value="All Category">All Category</option>
                    <option value="SIDI BOUSAID">SIDI BOUSAID</option>
                    <option value="RADIAS">RADIAS</option> 
                    <option value="TUNIS">TUNIS</option>
                </select>
                <div className="relative w-full max-w-xs">
                    <label htmlFor="Search" className="sr-only">Search</label>
                    {/* Search Bar */}
                    <input
                        type="text"
                        id="Search"
                        placeholder="Search for..."
                        value={searchTerm}
                        onChange={onSearchChange}
                        className="w-full py-3 pe-16 sm:text-sm bg-gray-100 pl-2"
                    />
                </div>
                <span className="grid w-15">
                    <button type="button" className="bg-primary rounded-tr-md rounded-br-md text-white px-4 py-4 sm:py-4 md:py-3.5 lg:py-3.5 xl:py-3.5 -ml-1">
                        <span className="sr-only">Search</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-4 w-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                            />
                        </svg>
                    </button>
                </span>
            </div>
        </div>
    );
};

export default SearchBar;
