import React from 'react';

const Loader = () => (
    <svg className="animate-spin h-5 w-5 text-white mx-auto" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.965 7.965 0 014 12H0c0 4.418 3.582 8 8 8v-2.709z"></path>
    </svg>
);

export default Loader;
