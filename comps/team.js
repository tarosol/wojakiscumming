'use client'
import Image from "next/image";
import styles from "../src/app/page.module.css";
import { NavBar } from "../comps/navbar";
import styled, {css} from "styled-components";
import { createContext } from 'react';
import Head from "next/head";
import Link from "next/link";
import { TokenComp } from "../comps/tokencomp";
import { About } from "../comps/about";

const TeamCont = styled.div`
display:flex;
background-color:#DBA1E6;
justify-content:center;
flex-direction:column;
z-index:3;
`

const Avatar = styled.img`
position:relative;
object-fit:cover;
width:350px;
height:350px;
padding:36px;

// border:3px solid black;
// box-shadow: 0.5em 0.5em black;
// &:hover {
//   box-shadow: 0.75em 0.75em black;
//     transform: translate(-0.05em, -0.05em);
// }
`

const Text = styled.div`
font-size:2rem;
font-family: Kinder, sans-serif;
font-weight:900;
display:flex;
justify-content:center;
text-transform:uppercase
`

const Sub = styled.p`
font-size:1rem;
color:gray;
`

const TextCont = styled.div`
display:flex;
flex-direction:column;
background-color: white;
color:black;
padding:15px 30px;
width:100%;
justify-content:center;
align-items:flex-start;
font-family: Kinder, sans-serif;
`


export function Team({
    imgsrc="/catrider2.png",
    text="name",
    sub="name",
}){

    return (
        <TeamCont>
            <Avatar src={imgsrc}></Avatar>

            <TextCont>
                           <Text>{text}</Text> 
                           <Sub>{sub}</Sub>
            </TextCont>


        </TeamCont>
    )
}