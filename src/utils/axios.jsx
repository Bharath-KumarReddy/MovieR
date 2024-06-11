import axios from 'axios';


const instance = axios.create({

    baseURL: "https://api.themoviedb.org/3",
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZDBkMTY4MTk4NGNlYTI5MTcyYTdiZjYzOTMyOWE3YyIsInN1YiI6IjY2Mzc4NDRmOTRkOGE4MDEyMzMzMTk1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QPdrIQlv4oub_e1NVddphV2hc2KPTImdKd0TeOcim9I'
    }
    
})



// const fetch = require('node-fetch');

// const url = 'https://api.themoviedb.org/3/account/21252964/watchlist/tv?language=en-US&page=1&sort_by=created_at.asc';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZDBkMTY4MTk4NGNlYTI5MTcyYTdiZjYzOTMyOWE3YyIsInN1YiI6IjY2Mzc4NDRmOTRkOGE4MDEyMzMzMTk1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QPdrIQlv4oub_e1NVddphV2hc2KPTImdKd0TeOcim9I'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error('error:' + err));

export default instance;