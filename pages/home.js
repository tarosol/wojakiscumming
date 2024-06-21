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
import { Banner } from "../comps/banner";
import { Sperm } from "../comps/sperm";
import { Team } from "../comps/team";

const Socials = styled.div`
display:flex;
flex-direction: row;
justify-content:center;
align-items:center;
gap:20px;
z-index:5;
  @media (max-width: 769px) {
gap:0px;
}
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width:100vw;
    height:100vh;
    padding:0;
    margin:0;
    background-color:#88B2D6 ;
    overflow-x: hidden;
`
const Context = createContext()


const TokenHead = styled.h1`
font-size:6rem;
font-family: Kinder, sans-serif;
color: #FFD63D;
font-weight:600;
color:white;
opacity:0.2;
font-size:20rem;
position:absolute;
z-index:0;
top:5%;

@media (max-width: 769px) {
font-size:4rem;
}
`

const SubHead = styled.h1`
font-size:2rem;
font-family: Kinder, sans-serif;
color: #FFD63D;
font-weight:600;
text-align:center;


`


const TokenCont = styled.div`
display:flex;
flex-direction:column;
align-items:center;
width:100%;
background-color:#111D4A;
height:auto;
position:relative;
` 

const LinkCont = styled.div`
display:flex;
flex-direction:column;
align-items:center;
width:100%;
height:auto;
position:relative;
margin-top:96px;
gap:3rem;
` 

const FooterCont = styled.div`
display:flex;
flex-direction:column;
align-items:center;
width:100%;
background-color:#88B2D6 ;
padding: 168px 48px 0px 48px;
position:relative;

  @media (max-width: 769px) {
    padding: 84px 0px 400px 0px;
    justify-content:center;
}
` 

const TokenSub = styled.div`
display:flex;
flex-direction:row;
justify-content:space-evenly;
align-items:center;
@media (max-width: 769px) {
flex-direction:column;
}

`


const WhiteText = styled.p`
color:white;
font-size:2rem;
font-family: Kinder, sans-serif;
width:100%;
`

const TokenHeadCont = styled.div`
display:flex;
flex-direction: column;
text-align:center;
display:relative;
`

const AboutCont2 = styled.div`
display:flex;
flex-direction:row;
align-items:center;
width:100%;
  background-color:#88B2D6 ;
padding: 168px 48px;
height:auto;
position:relative;
    @media (max-width: 769px) {
    padding:0;
    z-index:5;
  }

` 

const AboutMedia = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
width:100%;
    @media (max-width: 769px) {
flex-direction:column;
padding:0px 0px 250px 0px;
align-items:center;
  }
`

const LogoImage2 = styled.img`
width:200px;
z-index:1;
    @media (max-width: 769px) {
    position:absolute;
    bottom:10%;
  }
`

const FooterInner = styled.div`
display:flex;
flex-direction:row;
width:100vw;
justify-content:space-between;
align-items:center;
padding: 0px 96px;
text-align:right;
z-index:3;
@media (max-width: 769px) {
    flex-direction:column;
    justify-content:center;
}
`

const Salt = styled.img`
width:450px;
height:450px;
position:absolute;
bottom:0;
z-index:2;

@media (max-width: 769px) {
    width:400px;
    height:auto;
}
`

const Text = styled.p`
font-family: Kinder, sans-serif;
font-size:2rem;
color:#2A2A2A;
`

const AboutText1 = styled.p`
font-family: Kinder, sans-serif;
font-size:6rem;
color:black;
opacity:0.2;
width:100%;
font-weight:600;
    @media (max-width: 769px) {
    font-size:2rem;
  }
`

const AboutText2 = styled.p`
font-family: Kinder, sans-serif;
font-size:1.5rem;
color:#2A2A2A;
width:100%;
    @media (max-width: 769px) {
    font-size:1rem;
  }
`

const AboutTextCont = styled.div`
font-family: Kinder, sans-serif;
padding: 24px 60px 24px 120px;
width:100%;
display:flex;
flex-direction:column;
gap:3rem;
justify-content:flex-start;
align-items:flex-start;
width:100%;

    @media (max-width: 769px) {
    flex-direction:column;
    padding:0px 3rem;
    gap:1rem;
  }
`

const AboutInner = styled.div`
overflow-y:scroll;
z-index:1;
display:flex;
flex-direction:column;
gap:3rem;
height:500px;
`

const AssImage = styled.img`
width:850px;
height:100%;
position:absolute;
right:-30%;
transform:rotateY(180deg);

@media (max-width: 769px) {
    width:auto;
    height:1000px;
    transform:rotate(-20deg) rotateY(180deg);
    opacity:0.6;
    right:-85%;
    top:0%;
    z-index:0;
}
`

const Mug = styled.img`
width:400px;
position:absolute;
bottom:0%;
transform: rotate(20deg);
left:0%;
opacity:0.6;
// @media (max-width: 769px) {
//     bottom:15%;
// }
`

const Dex = styled.img`d
width:auto;
height:100px;
border:2px solid black;
padding:15px;
background-color:yellow;
background-color:#88B2D6;
color:#2A2A2A;
border: 3px solid #2A2A2A;
color:#1E152A;
box-shadow: 0.5em 0.5em black;
cursor:not-allowed;
&:hover{
  transform: translate(-0.05em, -0.05em);
  box-shadow: 0.75em 0.75em black;
  }

  @media (max-width: 769px) {
    width:250px;
    height:auto;
}
`

const DexButtonCont= styled.div`
display:flex;
flex-direction:row;
justify-content:center;
width:100px;
gap:2rem;
  @media (max-width: 769px) {
   justify-content:center;
   flex-direction:column;
   align-items:center;
}
`

const RayCont = styled.div`
display:flex;
flex-direction:column;
gap:1.5rem;


`

const FloatText = styled.h1`
opacity:0.2;
color:black;
font-family: Kinder, sans-serif;
font-size:320px;
text-align:center;
z-index:0;
overflow:hidden;
width:100%;
  @media (max-width: 769px) {
    ;font-size:4rem;
}
`

const FloatTextSmall = styled.h1`
opacity:0.2;
color:black;
font-family: Kinder, sans-serif;
font-size:90px;
text-align:center;
z-index:0;
overflow:hidden;
width:100%;
  @media (max-width: 769px) {
    font-size:2rem;
}
`

const TeamHead = styled.h1`
opacity:0.2;
color:white;
font-family: Kinder, sans-serif;
font-size:400px;
text-align:center;
width:100%;
position:absolute;
color:black;
z-index:0;
`

const TeamCont = styled.div`
display:flex;
flex-direction:row;
position:relative;
z-index:5;
justify-content:space-evenly;
padding:168px 48px 0px 48px;
`

const Candle = styled.img`
width:450px;
height:450px;
position:absolute;
left:-5%;
z-index:0;
bottom:0%;

@media (max-width: 769px) {
    width:300px;
    height:auto;
}
`

const Disclaimer = styled.div`
font-family: Kinder, sans-serif;
font-size:0.75rem;
color:#2A2A2A;
width:400px;
color:#2A2A2A;
@media (max-width: 769px) {
    width:350px;
    font-size:0.6rem;
    opacity:0.6;
    text-align:center;
    margin:40px 0px;
}

`

const FooterSocials = styled.img`
width:55px;
height:55px;
@media (max-width: 769px) {
    width:40px;
    height:auto;
    font-size:0.6rem;
}
`


export default function Home() {
    return (
        <Container>
            <Head>
                <title>Wojak Is Cumming - Home</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/profile.jpg" />
            </Head>
                {/* </AboutText> */}

            {/* <AboutCont>
                <NavBar/>
                <GunImage src='/candle.png' unoptimized></GunImage>
                    <AboutFooter>
                        <Pump>BUY ON PUMP.FUN</Pump>
                        <Socials>
                            <Link href='https://google.com'><Image src='/twitterwhite.svg' alt='twit' width={65} height={65} className={styles.socialsframe}></Image></Link>
                            <Link href='https://google.com'><Image src='/telegramwhite.svg' alt='tel' width={65} height={65} className={styles.socialsframe2}></Image></Link>
                        </Socials>
                    </AboutFooter>


            </AboutCont> */}
            <Banner>
            </Banner>
            
            <AboutCont2>

                <Candle src='/candle.gif' alt='candle'></Candle>
                <AboutMedia>
                    <AboutTextCont>
                        <AboutText1>"WHAT TF IS THIS?"</AboutText1>
                        <AboutInner>
                            <AboutText2>
                            Wojak was a shadow of a man, hunched over his computer in the dim glow of his room, surrounded by empty soda cans and half-eaten bags of chips. The outside world ceased to exist for him. Days, months, perhaps even years, had slipped by in a fog of digital hedonism. His fingers knew the keyboard not for creation, but for a never-ending cycle of clicks and scrolls, hunting the next fleeting thrill.
                            </AboutText2>
                            <AboutText2>
                            Each morning, if it could still be called morning in his perpetual night, Wojak awoke not with the rising sun but with the glow of his monitor. His bed was an afterthought, a tangled mess in the corner, far from the worn-in groove of his chair. Breakfast was a concept lost to him; sustenance came from greasy takeout and cold pizza, consumed without thought, merely fuel for his idle body.
                            </AboutText2>
                            <AboutText2>
                            The day’s highlight was a ritual of search and selection. His eyes, glazed and weary, combed through the endless sea of explicit content. The thrill had long since dulled, but the habit persisted, a grim parody of pleasure. He clicked through videos, galleries, and live streams, the content blending into a monotonous haze of flesh and fantasy.
                            </AboutText2>
                            <AboutText2>
                            Friends and family had long given up on trying to reach him. His phone lay silent, gathering dust like the neglected parts of his soul. Messages went unread, calls unanswered. Wojak’s world was confined to the screen, a self-imposed exile in a digital wasteland.
                            </AboutText2>
                            <AboutText2>
                            Night fell, though he barely noticed. The only clock he obeyed was his body’s aching need for sleep, which he fought off with caffeine and sheer will. His movements became mechanical, devoid of joy or desire, just a hollow repetition. His reflection in the darkened screen was a ghostly figure, eyes sunken, face pale and gaunt.
                            </AboutText2>
                            <AboutText2>
                            Time marched on without him. Seasons changed, but Wojak’s room remained a stagnant cave. The digital domain where he dwelled had become his universe, shrinking his existence to mere pixels and fantasies. The world outside moved on, but Wojak remained frozen in his endless loop, a prisoner to his own cravings.
                            </AboutText2>
                            <AboutText2>
                            And so, Wojak sat, lost in the infinite scroll of his screen, an automaton trapped in a purgatory of his own making. The thrill that once beckoned him had turned to chains, binding him to his chair, as the world beyond his window faded into a distant, forgotten dream.
                            </AboutText2>
                           
                        </AboutInner>
                    </AboutTextCont>

                    <Image src='/frost.GIF' alt='frost' unoptimized='yes' width={650} height={650} className={styles.frost}></Image>
                </AboutMedia>
            </AboutCont2>

            <TokenCont className={styles.tokencont}>
                <AssImage src='/ass.PNG' alt='ass'></AssImage>
                <Mug src='/mug.png' alt='ass'></Mug>
                 <TokenHead>
                    TOKENOMICS
                </TokenHead>
                <TokenHeadCont>

                <WhiteText>CA:BZzyLnKyC8WbaLx3CNoNwcfk6z6p61WoccvhZLWUpump</WhiteText>
                </TokenHeadCont>

                <TokenSub>

                    <TokenComp 
                    token_image="/avatar1.PNG" 
                    token_head="LIQUIDITY"
                    token_text="BURNED"
                    width='400'
                    height='400'
                    ></TokenComp>

                    <TokenComp 
                    token_image="/sperm.PNG" 
                    token_head="MINT & FREEZE"
                    token_text="REVOKED"
                    width='400'
                    height='400'
                    style={{transform:'rotate(90deg)'}}
                    ></TokenComp>

                    <TokenComp 
                    token_image="/avatar2.PNG" 
                    token_head="TOTAL SUPPLY"
                    token_text="1B"
                    width='400'
                    height='400'
                    ></TokenComp>
                {/* <GunImage src='/candle.png' unoptimized></GunImage> */}

                </TokenSub>
                
            <LinkCont>
                <SubHead>
                    PURCHASE $WOJCUM HERE
                </SubHead>
                <RayCont>
                    <DexButtonCont>
                        
                        <Link href=''><Dex src='/raydium.png'></Dex></Link>
                        <Link href=''><Dex src='/dexscreener.png'></Dex></Link>
                    </DexButtonCont>

                    <DexButtonCont>
                        
                    <Link href=''><Dex src='/bird.png'></Dex></Link>
                    </DexButtonCont>
                </RayCont>
            </LinkCont>


            </TokenCont>
            
            {/* <TeamCont>
                <TeamHead>
                    TEAM
                </TeamHead>
                <Team></Team>
                <Team></Team>
                <Team></Team>
            </TeamCont> */}

            <FooterCont> 
                <FloatTextSmall>JOIN THE</FloatTextSmall>
                <FloatText>CUMMUNITY</FloatText>
                <Socials>
                    <Link href='https://x.com/wojakiscumming'><FooterSocials src='/twitterwhite.svg' alt='twit' width={55} height={55} className={styles.socialsframe3}></FooterSocials></Link>
                    <Link href='t.me/wojiscumming'><FooterSocials src='/telegramwhite.svg' alt='tel' width={55} height={55} className={styles.socialsframe4}></FooterSocials></Link>
                    
                    <Link href='https://x.com/wojakiscumming'><FooterSocials src='/twit.svg' alt='twit' width={45} height={45} className={styles.socialsframe5}></FooterSocials></Link>
                    <Link href='t.me/wojiscumming'><FooterSocials src='/tel.svg' alt='tel' width={45} height={45} className={styles.socialsframe6}></FooterSocials></Link>
                </Socials>
                <FooterInner>

                    <LogoImage2 src='/logo.PNG' alt='logo'></LogoImage2>

                    <Disclaimer >DISCLAIMER <br></br>
                        $WOJCUM AND HAS NO REAL VALUE.
                        DON’T RISK MONEY YOU ARE AFRAID OF LOSING.
                        THE PRICE MAY GO UP OR IT MAY GO DOWN.
                        WE ARE NOT RESPONSIBLE FOR THE PRICE OF THE TOKEN.</Disclaimer>

                    
                </FooterInner>
                <Salt src='/saltt.gif' alt='salt'/>

            </FooterCont>

        </Container> 
    )
}