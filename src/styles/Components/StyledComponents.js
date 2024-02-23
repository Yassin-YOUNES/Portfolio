// StyledComponents.js
import styled from 'styled-components';
import { colorPalette } from '../../Objects/Context'; // Adjust the path as necessary

export const ProjectsContainer = styled.div`
    background-color: ${colorPalette.darkGrey};
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 5px;


   
`;

export const ProjectSquare = styled.div`
    background-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5%;
    border: ${colorPalette.green} 3px solid;
    transition: 0.5s;
    color: white;
    
    cursor: pointer;
   
   
    &:hover {
        background-color: ${colorPalette.green};
        color: ${colorPalette.darkBlue};
    }
    img{
        width: 80%;
        height: 60%;
        object-fit: cover;
        margin: auto;
    }
`;

export const ProjectDetail = styled.div`
    font-family: 'small thin font';
    position: fixed;
    width: 90%;
    height: 90%;
    top: 5%;
    left: 5%;
    background-color: ${colorPalette.darkBlue};
    color: white;
    display: flex;
    flex-direction: column;
    border: ${colorPalette.green} 3px solid;
    transition: 0.5s;
    overflow-y: scroll;
    .Cover__Image {
        width: 90%;
        height: 300px;
        object-fit: cover;
        margin: auto;
        box-shadow: 0 0 10px 10px ${colorPalette.darkBlue};
        z-index: -1000;
    }
    .Markdown__Container {
        width: 80%;
        margin: auto;
        transition: 0.5s;
        h1 {
            font-family: 'lulo font';
        }
        a {
            color: ${colorPalette.green};
            &:hover {
                color: ${colorPalette.lightGrey};
            }
        }
        img {
            margin: auto;
        }
        hr{
            border: ${colorPalette.green} 3px solid;
            width: 80vh;
            margin: auto;
        }
    }
    button {
        position: absolute;
        top: 0;
        right: 0;
        width: 50px;
        height: 50px;
        background-color: ${colorPalette.darkBlue};
        color: white;
        border: #ff2525 3px solid;
        transition: 0.5s;
        cursor: pointer;
        &:hover {
            background-color: #ff2525;
            color: ${colorPalette.darkBlue};
        }
    }
`;
