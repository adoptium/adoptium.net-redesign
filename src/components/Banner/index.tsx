import React from 'react';

const Banner = () => {
  // return null;

  // The following is an example that can be used for future code freezes
  // Comment Out The Above Line ( return null ; ) and uncomment the below

   return (
     <div className="alert text-white alert-dismissible fade show mb-0 text-center" style={{ backgroundColor: '#ff1464' }} role="alert">
     <strong className='p-1'>25th of September 2023:</strong>
         We are awaiting access to the new Java 21's specification tests
         before formally releasing Temurin 21. In the meantime
         <a href="https://adoptium.net/blog/2023/08/early-access-builds/"> early
         access builds</a> (untested and not for production use) can be downloaded
         from <a href="https://adoptium.net/temurin/nightly/?version=21">here</a> or
         from <a href="http://api.adoptium.net/">our API</a>.
      <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
     </div>
   );
};

export default Banner;
