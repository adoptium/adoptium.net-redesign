import React from 'react';

const Banner = () => {
  // return null;
  
  // The following is an example that can be used for future code freezes
  // Comment Out The Above Line ( return null ; ) and uncomment the below
  
  return (
    <div className="alert text-white alert-dismissible fade show mb-0 text-center" style={{ backgroundColor: '#ff1464' }} role="alert">
     <strong className='p-1'>20th of March 2023:</strong>
        We are creating the March 2023 CPU binaries for Eclipse Temurin 20+36
        You can track progress
        <a
          href="https://github.com/adoptium/adoptium/issues/218"
          target='_blank'
          rel='noopener noreferrer'
          className="alert-link p-1 text-white"
        >by platforms</a>.
     <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  );
};

export default Banner;
