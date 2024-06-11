import React from 'react';
import { Link } from 'react-router-dom';

const Sidenav = () => {
  return (
    <div className='w-[20%] h-full border-r-2 border-zinc-200 p-8'>
      <h1 className='text-2xl text-white font-bold'>
        <i className='text-[#6556CD] ri-tv-fill mr-2'></i>
        <span className='text-2xl'>SCSDB.</span>
      </h1>

      <nav className='flex flex-col gap-3 text-zinc-400 font-semibold text-xl nav-link'>
        <h1 className='text-white mt-10 mb-5'> New Feeds</h1>

        <Link
          className='hover:bg-[#6556CD] hover:text-white rounded-lg p-3  flex items-center transition-transform ease-in-out duration-300 transform hover:scale-110'
          style={{ display: 'flex', alignItems: 'center' }}

          to="/trending"
        >
          <i className='ri-fire-fill mr-2 transition-transform ease-in-out duration-300' style={{ color: 'red' }}></i>
          <span className='transition-transform ease-in-out duration-300'>Trending</span>
        </Link>

        <Link
          className='hover:bg-[#6556CD] hover:text-white rounded-lg p-3  flex items-center transition-transform ease-in-out duration-300 transform hover:scale-110'
          style={{ display: 'flex', alignItems: 'center' }}
          to="/popular"
        >
          <i className='ri-bard-fill  transition-transform ease-in-out duration-300 mr-2' style={{ color: 'blue' }}></i>
          <span className='transition-transform ease-in-out duration-300'>Popular</span>
        </Link>

        <Link
          className='hover:bg-[#6556CD] hover:text-white rounded-lg p-3  flex items-center transition-transform ease-in-out duration-300 transform hover:scale-110'
          style={{ display: 'flex', alignItems: 'center' }}
          to="/movie"
        >
          <i className='ri-movie-2-fill mr-2 transition-transform ease-in-out duration-300' style={{ color: 'pink' }}></i>
          <span className='transition-transform ease-in-out duration-300'>Movies</span>
        </Link>

        <Link
          className='hover:bg-[#6556CD] hover:text-white rounded-lg p-3  flex items-center transition-transform ease-in-out duration-300 transform hover:scale-110'
          style={{ display: 'flex', alignItems: 'center' }}
          to="/tv"
        >
          <i className='ri-tv-2-fill mr-2   transition-transform ease-in-out duration-300' style={{ color: 'orange' }}></i>
          <span className='transition-transform ease-in-out duration-300'>TV shows</span>
        </Link>

        <Link
          className='hover:bg-[#6556CD] hover:text-white rounded-lg p-3  flex items-center transition-transform ease-in-out duration-300 transform hover:scale-110'
          style={{ display: 'flex', alignItems: 'center' }}
          to="/person"
        >
          <i className='ri-team-fill  mr-2 transition-transform ease-in-out duration-300' style={{ color: 'red' }}></i>
          <span className='transition-transform ease-in-out duration-300'>People</span>
        </Link>
      </nav>

      <hr className='border-none bg-zinc-400 h-[1px] mt-3 mb-3' />

      <nav className='flex flex-col gap-3 text-zinc-400 font-semibold text-xl'>
        <Link
          className='hover:bg-slate-600 hover:text-white rounded-lg p-2  flex items-center transition-transform ease-in-out duration-300 transform hover:scale-110'
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <i className='ri-information-fill mr-1'></i>
          <span className='transition-transform ease-in-out duration-300'>About</span>
        </Link>

        <Link
          className='hover:bg-slate-600 hover:text-white rounded-lg p-2  flex items-center transition-transform ease-in-out duration-300 transform hover:scale-110'
          style={{ display: 'flex', alignItems: 'center' }}
          to="mailto::kalagotlabharathkumarreddy@gmail.com"
        >
          <i className='ri-phone-fill mr-1'></i>
          <span className='transition-transform ease-in-out duration-300'>Contact</span>
        </Link>
      </nav>
    </div>
  );
};

export default Sidenav;