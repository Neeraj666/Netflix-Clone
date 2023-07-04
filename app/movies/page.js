'use client';
import { Grid } from '@mui/material';
import style from './sty.module.css';
import Image from 'next/image';
import Link from 'next/link';

import axios from "axios";


async function productList() {
    let data = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=77279a6a46d5ef6408401c3803a5fed5");
    data = await data.json();
    return data.results
}

const Page = async() => {
    let results = await productList();
    console.log(results);

    return (
        <div className={style.main}>
            <Grid container className={style.container}>
                <Grid className={style.heading} lg={12}>
                    <h1>Movies Shows</h1>
                    {/* <p>View All</p> */}
                    <Link href='/'>View All</Link>
                </Grid>
                {
                    results.map((item,i)=>(
                        <div key={i}>
                            <h3>title : {item.title}</h3>
                            <p>Id : {item.id}</p>
                            <img src={"http://image.tmdb.org/t/p/w500"+item.poster_path} alt='' />
                            <p>Average : {item.vote_average}</p>
                        </div>
                    ))
                }
            </Grid>
        </div>
    );
}
export default Page;



// async function fetchUsers() {
//     console.log('I am here form fetchUsers');
//     try {
//       const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=77279a6a46d5ef6408401c3803a5fed5');
//       console.log(response.results);
//       return response.results;
//     } 
//     catch (error) {
//     }
// }

// const Page= async()=>{
//     const result = await fetchUsers();

//     return(
//         <>
//             <h1>Users</h1>
//             {/* {
//                     results.map((item,i)=>(
//                         <div key={i}>
//                             <h3>title : {item.title}</h3> */}
//                             {/* <p>Id : {item.id}</p> */}
//                             {/* <p>Average : {item.vote.average}</p> */}
//                             {/* <img src={item.backdrop_path} alt='' /> */}
//                             {/* <p>Average : {item.vote_average}</p> */}
//                         {/* </div>
//                     ))
//                 } */}
//         </>
//     );
// }
// export default Page;