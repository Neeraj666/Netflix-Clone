'use client';
import style from './style.module.css';
import { Grid } from '@mui/material';

const Footer=()=>{

    return(
        <div className={style.main} style={{textAlign: 'center'}}>
            <Grid container className={style.container}>
                <Grid lg={12}>
                    <ul className='ul' style={{justifyContent: 'center'}}>
                        <li><a href="">Terms of Use</a></li>
                        <li><a href="">Privacy-Policy</a></li>
                        <li><a href="">FAQ</a></li>
                        <li><a href="">Watchlist</a></li>
                        <li><a href="">Fav Show</a></li>
                    </ul>
                    <p className={style.para}>
                    © 2023 STREAMIT. All Rights Reserved. All videos and shows on this platform are trademarks of, and all related images and content are the property of, Streamit Inc. Duplication and copy of this is strictly prohibited. All rights reserved.
                    </p>
                </Grid>
                {/* <Grid lg={6}>klasfj</Grid> */}
            </Grid>
        </div>
    );
}
export default Footer;