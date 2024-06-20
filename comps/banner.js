'use client'
import Image from "next/image";
import styles from "../src/app/page.module.css";
import { NavBar } from "../comps/navbar";
import styled from "styled-components";
import { createContext } from 'react';
import Head from "next/head";
import Link from "next/link";
import { TokenComp } from "../comps/tokencomp";
import { About } from "../comps/about";
import { Sperm } from "./sperm";
import {useEffect, useState} from'react';

const Container = styled.div`
width:100vw;
position:relative;
display:flex;
justify-content:center;
`

const AboutCont = styled.div`
display:flex;
flex-direction:column;
align-items:center;
width:100%;
justify-content:space-between;
position:relative;
max-height:100vh;
height:100vh;
padding: 25px 0px;

    @media (max-width: 769px) {
    padding:100px 0px;
  }
`


const GunImage = styled.img`
    width:600px;
    position:absolute;
    top:175px;

    @media (max-width: 769px) {
    width:450px;
    top:150px;
  }
`


const AboutFooter = styled.div`
display:flex;
width:100%;
justify-content:center;
align-items:center;
gap:2rem;
margin-top:70px;
flex-direction: column;

    @media (max-width: 769px) {
    margin-top:25px;
  }
`

const Pump = styled.button`
font-family: Kinder, sans-serif;
padding:15px;
font-size:1.75rem;
font-weight:900;
width:300px;
background-color:#FFD63D;
color:#2A2A2A;
transform:rotate(5deg);
border: 3px solid #2A2A2A;
color:#1E152A;
box-shadow: 0.2em 0.2em #2A2A2A;
&:hover{
  transform: translate(-0.05em, -0.05em) rotate(5deg);
  box-shadow: 0.35em 0.35em #2A2A2A;
  }

      @media (max-width: 769px) {
    font-size:1.25rem;
  }
`


const Socials = styled.div`
display:flex;
flex-direction: row;
justify-content:center;
align-items:center;
gap:20px;
z-index:5;
`

export function Banner() {

    return (
        <Container>

            <Sperm right='5px' bottom='160px' width='200px' name={styles.sperm}/>
            <Sperm right='420px' top='380px' width='150px' name={styles.sperm1}/>
            <Sperm right='230px' top='120px' width='190px' name={styles.sperm2}/>
            <Sperm right='600px' bottom='90px' width='160px' name={styles.sperm3}/>

            
            <Sperm left='0px' width='220px' name={styles.sperm4}/>
            <Sperm left='250px' bottom='450px' width='190px' name={styles.sperm5}/>
            <Sperm left='160px' bottom='65px' width='200px' name={styles.sperm6}/>

            <AboutCont>
                <NavBar/>
                <GunImage src='/candle.PNG' unoptimized></GunImage>

                <AboutFooter>
                    <Pump>BUY ON PUMP.FUN</Pump>
                    <Socials>
                        <Link href='https://google.com'><Image src='/twitterwhite.svg' alt='twit' width={55} height={55} className={styles.socialsframe}></Image></Link>
                        <Link href='https://google.com'><Image src='/telegramwhite.svg' alt='tel' width={55} height={55} className={styles.socialsframe2}></Image></Link>
                    </Socials>
                </AboutFooter>
            </AboutCont>
        </Container>
    )
}