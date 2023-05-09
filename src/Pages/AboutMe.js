import React, { useEffect } from 'react';
import {Header} from "../Objects/Header";
import {Footer} from "../Objects/Header";
import { Skills_Title } from '../Objects/Sections';
import styled from 'styled-components';
import { colorPalette } from '../Objects/Context';
import projects from '../Data/Projects.json'


const Choice__Container = styled.div`
background-color: ${colorPalette.darkBlue};

    height: 90vh;
    width: 98vw;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    button{
        width:50%;
        height: 100%;
    }
    .Choice__Programming{
        width: 50%;
        height: 100%;
        text-align: center;
        background-color: transparent;
        border: ${colorPalette.green} 3px solid;
        color: ${colorPalette.green};
        font-size: 2em;
        font-weight: bold;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.5s;
        &:hover{
            background-color: ${colorPalette.green};
            color: ${colorPalette.darkBlue};
        }
        a{
            text-decoration: none;
            color: inherit;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    .Choice__Design{
        width: 50%;
        height: 100%;
        background-color: transparent;
        border: ${colorPalette.lightGrey} 3px solid;
        color: ${colorPalette.lightGrey};
        font-size: 2em;
        font-weight: bold;
        cursor: pointer;



        transition: 0.5s;
        &:hover{
            background-color: ${colorPalette.lightGrey};
            color: ${colorPalette.darkBlue};
        }

        a{
            text-decoration: none;
            color: inherit;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

        }
    }

`;

const About_Me__Container = styled.div`

    @font-face {
        font-family: 'lulo font';
        src: url(../Assets/Fonts/LuloCleanW01OneBold.ttf);
    }
    @font-face {
        font-family: 'small thin font';
        src: url(../Assets/Fonts/FontsFree-Net-Avenir-Light.ttf);
    }

    background-color: ${colorPalette.darkBlue};
  
    width: 98vw;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: 'small thin font'; 
        color: white;
        text-align: center;
    h1 h2{
        font-family: 'lulo font';
        color: white;
    }
    h2{
        font-size: 2em;
    }
    p{
        font-family: 'small thin font';
        color: white;
        font-size: 1.5em;
        width: 80%;
    }

    ul{
        font-family: 'small thin font';
        color: white;

        width: 60%;

        margin: 0;
        padding: 0;
        justify-content: center;
        align-items: center;
        display: flex;
        flex-direction: column;
        li{
            margin: 10px;
        }
    }



`;


function AboutMe(){
    useEffect(() => {
        console.log(projects);
    }, []);

    return(
        <>
        <Header PageNumber={6} />
            <About_Me__Container>
                
                <Skills_Title  title={"About ME"}  id={"e"}> About Me </Skills_Title>
                <p>My name is Yassin Younes and I am a Full-stack developer. I hold a Bachelor's degree in Computer Science from IUT d'Arles and I am currently working on my final year project. I am a dynamic and motivated individual who is passionate about technology and computer programming. I am capable of working independently and adapting quickly to new demands. I also enjoy working in a team environment and collaborating with my colleagues to exchange ideas.</p>
                <p>In addition to my work, I enjoy reading and learning new things. I am particularly interested in psychology and the history of humanity, and I enjoy discovering new cultures and perspectives. I also manage my own YouTube channel with 650k+ subscribers since 2016. Outside of my intellectual pursuits, I enjoy running and participating in various outdoor sports. I also enjoy developing simple video games using programming languages such as C++ and Java.</p>
                <h2>Education and Skills</h2>
                <ul>
                <li>Bachelor's degree in Computer Science - IUT d'Arles (2021 - 2022)</li>
                <li>Skilled in programming languages such as C++ and Java</li>
                <li>Proficient in web technologies including PHP, HTML, CSS, JavaScript, React.js, Node.js, MongoDB, and Angular</li>
                <li>Experienced in developing both relational and NoSQL databases</li>
                <li>Skilled in using Git for version control</li>
                <li>Excellent communication and teamwork skills</li>
                <li>Experience developing cross-platform desktop applications with QT and JAVAFX</li>
                </ul>
                <h2>Final Year Project</h2>
                <p>For my final year project, I am working on creating a web application for time and task management. My goal is to develop a simple and intuitive solution to help users effectively plan and manage their time. I am using HTML, CSS, JavaScript, and PHP to develop the application's interface and functionality. The application allows users to create tasks, assign them to categories, and set reminders to complete them on time, with a notification system via email.</p>
                <h2>Contact Information</h2>
                <ul>
                <li>Email: yassin.younes@etu.univ-amu.fr</li>
                <li>Phone: +33 7 85 00 85 13</li>
                <li>Website: www.YassinYounes.com</li>
                <li>Address: 5 Rond point des arènes - Arles</li>
                </ul>
                <h2>Work Experience</h2>
                <ul>
                <li>1 year in dessert sales (Vendeur)</li>
                <li>1 year in a Syrian bakery as a cleaner</li>
                <li>2 months in a Turkish boutique as a salesperson</li>
                <li>3 months internship at ENSP as a back-end developer using PHP/MySQL</li>
                <li>3 months in a clothing boutique as a salesperson</li>
                </ul>
                <h2>Languages</h2>
                <ul>
                    <li>Arabic - Native</li>
                    <li>English - Fluent</li>
                    <li>French - Fluent</li>
                </ul>
            </About_Me__Container>
        <Footer />
        </>

    );
}

export default AboutMe;