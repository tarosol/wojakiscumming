'use client'
import Image from "next/image";
import styles from "../src/app/page.module.css";
import { NavBar } from "../comps/navbar";
import styled from "styled-components";
import { createContext } from 'react';
import Link from "next/link";

const Container = styled.div`
display:flex;
    flex-direction: column;
justify-content:center;
align-items:center;
z-index:1;

`

const Box = styled.div`
display:flex;
flex-direction:column;
text-align:center;
margin-top:-50px;
`

const Head = styled.h1`
font-family: Kinder, sans-serif;
font-size:1.5rem;
color:#927796;
@media (max-width: 769px) {
    font-size:1rem;
}
`


const Text = styled.h1`
font-family: Kinder, sans-serif;
font-size:3rem;
color:#DBA1E6;
@media (max-width: 769px) {
    font-size:2rem;
}
`

export function TokenComp({
    token_head="",
    token_text="",
    token_image="",
    width=100,
    height=100
}) {
    return (
        <Container>
            <Image src={token_image} width={width} height={height} className={styles.tokenimage}></Image>

            <Box>
                <Head>{token_head}</Head>
                <Text>{token_text}</Text>
            </Box>

        </Container>
    )
}