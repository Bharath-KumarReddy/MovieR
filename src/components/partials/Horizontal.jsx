import React from "react";
import { Link } from "react-router-dom";


const Horizontal = ({ data}) => {
  console.log(data);
  return (
    <div className="w-full  p-5">
      

      <div className="w-[100%] flex overflow-y-hidden ">
        {data.map((d) => (
          <div key={d.id} className="min-w-[15%] bg-zinc-900 mr-5 mb-3">

           <img className="w-full h-[45%] object-cover"  src={`https://image.tmdb.org/t/p/original/${d.backdrop_path || d.profile_path}`} alt="Image "/>

            <h1 className="mt-3 text-xl font-semibold text-red-400 mb-4">
              {d.name || d.title || d.original_name || d.original_title}
            </h1>

            
              <p className=" text-lg mb-6 text-white">
              {d.overview.slice(0, 20)}...
          <Link to={`/${d.media_type}/details/${d.id}`} className="text-orange-500 ml-1">
            more
          </Link>
              </p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Horizontal;