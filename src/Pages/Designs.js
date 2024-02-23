
import {Header} from "../Objects/Header";
import {Footer} from "../Objects/Header";

import styled from "styled-components";
import React, { useEffect } from "react";
import { isMouseOverAComboBox , colorPalette } from '../Objects/Context';
import { GalleryImages } from "../Objects/GalleryImages";


import '../styles/Home.scss';
/**
 * The color pallet of this website is:
 * #00d646 : green
 * #2f2e2e : dark grey
 * #333b50 : dark blue
 */
const App = styled.div`
   background-color: ${colorPalette.darkBlue};
   color: #fff;
   padding: 0;
   margin: 0;

   #videos-a{
    background-color: ${colorPalette.darkBlue};
    color: ${colorPalette.lightGrey};
    border: ${colorPalette.lightGrey} 3px solid;
    font-size: 2em;
    font-weight: bold;
    cursor: pointer;
    transition: 0.5s;
    margin: 10px;
    padding: 10px;
    &:hover{

        background-color: ${colorPalette.lightGrey};
        color: ${colorPalette.darkBlue};
        border: ${colorPalette.darkBlue} 3px solid;
    }
    /* center */
    display: block;
    margin-left: auto;

    margin-right: auto;
    width: 80%; 

    /* remove underline */
    text-decoration: none;
    text-align: center;
   }
`;



function Designs() {


  return (
   
   <App>
      <Header PageNumber={4} />
      <a id="videos-a" href='#/Videos'>Videos</a>
        <GalleryImages />
        <iframe width="560" height="315" src="https://www.youtube.com/embed/m4AZT8vf4SE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <div className="Margin"></div>
      <Footer />
   </App>


  );
}

export default Designs;
