import React,{useEffect, useState} from 'react'
import Sidenav from './partials/Sidenav'
import TopNav from './partials/TopNav'
import axios from '../utils/axios'
import Header from './partials/Header'
import Horizontal from './partials/Horizontal'
import DropDown from './partials/DropDown'
import Loading from './Loading'
const Home = () => {

  document.title = "HomePage ";
  const [wallpaper,setWallpaper] = useState(null);
  const [trending,setTrending] = useState(null);
  const [category,setCategory] = useState("all");

  const GetHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      let randomdata = data.results[(Math.random()*data.results.length).toFixed()];

      // console.log(data.results);
      setWallpaper(randomdata);
      // console.log(wallpaper);
    } catch (error) {
      console.log("An error occurred:", error.message);
    }
  }

  // console.log(wallpaper);
  const GetTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      

      // let randomdata = data.results[(Math.random()*data.results.length).toFixed()];
      setTrending(data.results);
      // console.log(data.results);
      // console.log(data);
      // settrending(data.results);
      // console.log(wallpaper);
    } catch (error) {
      console.log("An error occurred:", error.message);
    }
   }
  
  useEffect(() => {
    !wallpaper && GetHeaderWallpaper();
    GetTrending();
  }, [category]);

  console.log(trending);

  return wallpaper && trending ? (
<>

   <Sidenav />    

    <div className='w-[80%] h-full overflow-auto overflow-x-hidden'>
       
       <TopNav/>
       <Header data={wallpaper}/>
       <div className="mt-4 p-4 flex justify-between">
        <h1 className="text-3xl mb-5 text-zinc-400 font-semibold">Trending</h1>

        <DropDown title='Filter' options={['tv','movie','all']} func={(e)=>setCategory(e.target.value)} />
      </div>
       <Horizontal data={trending} />

    </div>




</>

  ) : <Loading/>



}

export default Home