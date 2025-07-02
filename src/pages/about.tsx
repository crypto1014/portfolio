import Head from "next/head";
import Link from "next/link";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ScrollTop } from "../components/ScrollTop";
import { Links } from "../components/Links";
import { BiUserPin } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import { RiTelegramFill, RiWhatsappFill } from "react-icons/ri";
import { BsLinkedin } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { FaDiscord } from "react-icons/fa";
import * as S from "../styles/about";
import { ButtonAlt, Section, Title } from "../styles/styles";

export default function About() {
  return (
    <>
      <Head>
        <title>About | Emil Harjula </title>
        <meta
          name="description"
          content="My name is Emil Harjula. I am a senior full stack developer."
        />
        <meta property="og:title" content="About | Emil Harjula" />
        <meta
          property="og:description"
          content="My name is Emil Harjula. I am a senior full stack developer."
        />
      </Head>

      <Header />
      <Links />
      <ScrollTop />
      <Section>
        <S.AboutContainer>
          <Title>
            About
            <span>
              <BiUserPin /> About
            </span>
          </Title>

          <S.AboutContent>
            <S.AboutImage>
              {/* <img
                className="AboutImg"
                src="/emiharjula.jpg"
                alt="Imagem de perfil Evander"
              /> */}

              <div className="links">
                <ul>
                  <Link href={"https://github.com/crypto1014"}>
                    <a target="_blank" aria-label="Link to my GitHub">
                      <AiFillGithub size={25} /> @crypto1014
                    </a>
                  </Link>
                  <Link
                    href={"https://www.linkedin.com/in/emil-harjula-b818b5362/"}
                  >
                    <a target="_blank" aria-label="Link via Linkedin">
                      <BsLinkedin size={25} /> @ Emil Harjula
                    </a>
                  </Link>
                  <Link
                    href={"https://api.whatsapp.com/send?phone=14706968158"}
                  >
                    <a target="_blank" aria-label="Link via WhatsApp">
                      <RiWhatsappFill size={25} /> +1 (470) 696 8158
                    </a>
                  </Link>
                  <Link href={"https://t.me/@kdrilling"}>
                    <a target="_blank" aria-label="Link via Telegram">
                      <RiTelegramFill size={25} /> @kdrilling
                    </a>
                  </Link>
                  <Link
                    href={"https://www.discordapp.com/users/evander_inacio"}
                  >
                    <a
                      className="dc"
                      target="_blank"
                      aria-label="Link para o Discord"
                    >
                      <FaDiscord size={25} /> @emilharjula
                    </a>
                  </Link>
                  <Link href={"mailto:emilharjula@gmail.com"}>
                    <a
                      className="email"
                      target="_blank"
                      aria-label="Link via email"
                    >
                      <GrMail size={25} /> emilharjula@gmail.com
                    </a>
                  </Link>
                </ul>
              </div>

              <S.AboutContact>
                <h3>
                  Let's talk, who knows, maybe we can create an incredible project together?
                </h3>
                <p>Send me a message! 😉</p>
                <Link href={"/contact"}>
                  <a>
                    <ButtonAlt>Contact</ButtonAlt>
                  </a>
                </Link>
              </S.AboutContact>
            </S.AboutImage>
            <S.AboutDescription>
              <p style={{ lineHeight: "30px", letterSpacing: "0.2px" }}>
                Dynamic Full Stack and Blockchain Developer with over 6 years of
                experience in React, Next.js, Python and NodeJS developing Web3
                Dapp and fintech systems. Passionate about crafting
                user-friendly interfaces and optimizing performance.
              </p>
              <p style={{ lineHeight: "30px", letterSpacing: "0.2px" }}>
                Contributed to increasing user participation and satisfaction
                through smart and userfriendly UI/UX design. Proficient in using
                React, Vue.js, Svelte, Node.js and Django, Ruby on Rails
                frameworks and has extensive experience building and deploying
                web applications on the AWS, Digital Ocean.
              </p>
              <p style={{ lineHeight: "30px", letterSpacing: "0.2px" }}>
                Also, I have rich experience and deep knowledge in EVM based
                chains and Solana chain. Participated in several blockchain
                projects like ICO (Initial Coin Offering) launchpad, and DEX
                (Decentralized Exchange) integration, Smart contract development
                using hardhat frameworks for EVM chains and Anchor frameworks
                for Solana.
              </p>
              <p style={{ lineHeight: "30px", letterSpacing: "0.2px" }}>
                Flexible communication skills with technical and non-technical
                colleagues and strong technical problemsolving skills.
              </p>
            </S.AboutDescription>
          </S.AboutContent>
        </S.AboutContainer>
      </Section>
      <Footer />
    </>
  );
}
