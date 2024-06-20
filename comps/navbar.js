import styled from "styled-components";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../src/app/page.module.css";
import { useRouter } from "next/navigation";

const NavCont = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width:100%;
    justify-content:center;
`

const LogoImage = styled.img`
width:650px;
z-index:3;

@media (max-width: 769px) {
    width:400px;
  }
`

const NavList = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 50px;
    color:#2A2A2A;
    cursor:pointer;
    font-weight:600;
    `

const NavItem = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size:24px;
    font-family: Kinder, sans-serif;
    &:hover{
    transition: all 0.35s ease-out;
    color:#FFD63D;
    }
    `

const NavRight = styled.div`
display: flex;
flex-direction: row;
gap:50px;
width:100%;
justify-content:flex-end;
`

const Socials = styled.div`
display:flex;
    flex-direction: row;
justify-content:center;
    align-items:center;
    gap:20px;
    width:100px;
    height:100px;
    
`

const Buy = styled.button`
    background-color:#FFD63D;
    padding:10px 15px;
    font-weight:600;
    font-size:18px;
    border: 3px solid #1E152A;
    color:#1E152A;
    font-family: Kinder, sans-serif;
`


export function NavBar() {
    const router = useRouter();
    return (
        <NavCont>
            <a onClick={()=>router.push('/home')}><LogoImage src='/logo.PNG'/></a>
            
{/* 
            <NavRight>
                <NavList>
                    <a onClick={() => router.push('/about')}><NavItem>ABOUT</NavItem></a>
                    <a onClick={() => router.push('/tokenomics')}><NavItem>TOKENOMICS</NavItem></a>
                    <a onClick={() => router.push('/links')}><NavItem>LINKS</NavItem></a>
                </NavList>

            </NavRight> */}
            {/* <Buy>BUY $WOJCUM</Buy> */}
            
        </NavCont>
    )
}