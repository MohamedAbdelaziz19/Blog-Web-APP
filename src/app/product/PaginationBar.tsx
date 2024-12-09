import React from 'react';

interface PaginationBarProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const PaginationBar: React.FC<PaginationBarProps> = ({ currentPage, totalPages, onPageChange }) => {
    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            onPageChange(page);
        }
    };

    return (
        <div className="flex justify-center mt-6">
            <ol className="flex items-center space-x-2">
                <li>
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        className={`px-4 py-2 text-blue-700 border rounded-md hover:bg-blue-100 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={currentPage === 1}
                    >
                        &lt; {/* Left arrow */}
                    </button>
                </li>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <li key={page}>
                        <button
                            onClick={() => handlePageChange(page)}
                            className={`px-4 py-2 text-blue-700 border rounded-md hover:bg-blue-100 ${currentPage === page ? 'bg-blue-100 font-extrabold' : ''}`}
                        >
                            {page}
                        </button>
                    </li>
                ))}
                <li>
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        className={`px-4 py-2 text-blue-700 border rounded-md hover:bg-blue-100 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={currentPage === totalPages}
                    >
                        &gt; {/* Right arrow */}
                    </button>
                </li>
            </ol>
        </div>
    );
};

export default PaginationBar;
