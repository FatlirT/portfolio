import React from 'react';

const SearchBar = () => {
    return (

        <form className='w-full'>
            <label className="mb-2 text-sm font-medium text-white sr-only">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
                <input id="default-search" className="block w-full p-4 ps-10 text-sm text-white rounded-lg bg-light-acc/10 focus:ring-blue-500 focus:border-blue-500 placeholder-white" placeholder="Search Articles" required />
                <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-dark-acc/30 hover:bg-dark-acc/50 focus:ring-[3px] focus:outline-none focus:ring-light-acc/70 active:bg-dark-acc font-medium rounded-lg text-sm px-4 py-2">Search</button>
            </div>
        </form>

    );
};

export default SearchBar;