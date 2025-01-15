import React from 'react';

const SearchBar = () => {
    return (

        <form className='w-full'>
            <label className="mb-2 text-sm font-medium text-white sr-only">Search</label>
            <div className="overflow-hidden w-full justify-between flex flex-row text-sm rounded-lg bg-light-acc/10 focus:ring:none py-2 px-3">
                <div className="flex items-center pointer-events-none">
                    <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
                <input id="default-search" className="w-full overflow-scroll text-sm text-white rounded-lg bg-transparent outline-none ring-0 focus:ring-0 focus:outline-none border-none placeholder-white sm:mx-3 mx-2 overflow-x-auto whitespace-nowrap touch-pan-x" placeholder="Search Articles" required />
                <button type="submit" className="text-white bg-dark-acc/30 hover:bg-dark-acc/50 focus:ring-[3px] focus:outline-none focus:ring-light-acc/70 active:bg-dark-acc font-medium rounded-lg text-sm px-4 py-2">Search</button>
            </div>
        </form>

    );
};

export default SearchBar;