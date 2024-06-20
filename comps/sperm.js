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

const breakpoints = {
    tablet: '768px',
    mobile: '480px',
};

const ImageCont = styled.img`
position:absolute;
width: ${ props => props.width};
top: ${ props => props.top};
bottom: ${ props => props.bottom};
left: ${ props => props.left};
right: ${ props => props.right};
opacity:1;


    ${props => css`
        @media (max-width: ${breakpoints.tablet}) {
            width: calc(${props.width} / 1.5);
        }
        @media (max-width: ${breakpoints.mobile}) {
            width: calc(${props.width} / 1.5);
        }
    `}
`

export function Sperm({
top="",
left="",
bottom="",
right="",
width='200px',
name=''

}) {
    
    return (
        <ImageCont src='/sperm.PNG' className={name} width={width} top={top} left={left} bottom={bottom} right={right}></ImageCont>
        )
}