'use client'
import Image from "next/image";
import styles from "../src/app/page.module.css";
import { NavBar } from "../comps/navbar";
import styled from "styled-components";
import { createContext } from 'react';
import Link from "next/link";

const AboutHead = styled.h1`
font-size:6rem;
font-family: Kinder, sans-serif;
color: #2A2A2A;
font-weight:600;
text-align:center;
`
const AboutContent = styled.h2`
font-size:3rem;
font-family: Kinder, sans-serif;
color: #2A2A2A;
font-weight:300;
gap:5rem;
text-align:center;
`

const Container = styled.div`
width: 80%;
text-align:center;
`


const Color = styled.span`
color:#FFD63D;
`

export function About() {
    return (
        <Container>
        <AboutHead>
        $WOJCUM
        </AboutHead>

        <AboutContent>
        <Color>$WOJCUM</Color> IPSUM
        LOREM IPSUM
        LOREM IPSUM
        LOREM <Color>NIGGA </Color>
        LOREM IPSUM
        </AboutContent>
        </Container>
    )
}

