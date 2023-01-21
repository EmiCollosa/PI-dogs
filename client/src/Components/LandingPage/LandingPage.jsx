import React from "react";
import {Link} from 'react-router-dom'
import style from '../LandingPage/LandingPage.module.css'

export default function LandingPage () {
    return (
        <div className= {style.background}> 
         <div className={style.divStyle}>
           
         <div className={style.info}>
                    <h1>WELCOME TO THE DOG API </h1>
                    <h2> Here you can see and create different dogs </h2>
                    <h2> FILTER THEM BY WEIGHT AND NAME </h2>
                </div>
                <Link to='/home'>
                <button className={style.button}>WOAF!</button>
                </Link>
            </div>
        </div>
      
    )
}