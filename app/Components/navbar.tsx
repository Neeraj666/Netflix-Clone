'use client';
import React from 'react';
import style from  './style.module.css';
import { Grid } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../public/R.jpg'
import {Typography, TextField} from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';


const NavBar=()=>{

    return(
        <div className={style.main}>
        <Grid container className={style.container}>
            <Grid lg={4}>
                <Image 
                src={Logo} width={250} height={82} alt=''
                />
                {/* <img  src='../../public/R.jpg'/> */}
            </Grid>
            <Grid lg={5}>
                <ul>
                    <li><Link href='/'>Home</Link></li>
                    <li><Link href='/tvshow'>Tv Show</Link></li>
                    <li><Link href='/movies'>Movies</Link></li>
                    <li><Link href='/recentlyadded'>Recently Added</Link></li>
                </ul>
            </Grid>
            <Grid lg={3}>
                {/* <SearchIcon /> */}
                <i className='bx bx-search-alt-2'></i>
            </Grid>
        </Grid>
        </div>
    );
}
export default NavBar;