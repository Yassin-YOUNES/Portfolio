
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
   
.videos-Container{

    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;

    margin: 0;
    padding: 0;
    iframe{

    }
}
    iframe{
        margin: 10px;
        margin-top: 30px;
        padding: 0;
        /* green outline with glow */
        outline: 4px solid ${colorPalette.green};
        outline-offset: 2px;
        box-shadow: 0 0px 20px white;

        /* center */
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 80%;
    }
`;



function Videos() {


  return (
   
   <App>
      <Header PageNumber={4} />
      
        <div className="videos-Container">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/8-nS6wqrjYM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/b1_Bcq4IM7g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Gh7CW4CgMCY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/K_k7XS1C8YQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/owKOLz9Edr0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/j0wOxaeDpzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        <iframe width="560" height="315" src="https://www.youtube.com/embed/EBT2biY1W2g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/uNt25kDKmDM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        <iframe width="560" height="315" src="https://www.youtube.com/embed/F5LvoCoPUrc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Q_8-BrcxbwE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/rP8DYs_fCCw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/kabs-O1N730" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
       
      <div className="Margin"></div>
      <Footer />
   </App>


  );
}

export default Videos;
