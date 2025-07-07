import Image from "next/image";
import Link from "next/link";
import { Button, Container, ButtonAlternatives } from "../../styles/styles";
import { AboutContainer } from "./styles";
import { ArrowRight, TelegramLogo } from "phosphor-react";

export function About() {
  return (
    <Container>
      <AboutContainer>
        <div className="AboutImg">
          <Image
            width={500}
            height={500}
            className="AboutImg"
            src="/about.svg"
            alt="Imagem de perfil"
          />
        </div>

        <div className="aboutContent">
          <div className="aboutDescription">
            <h2>About me</h2>
            <p>
              I'm a front-end developer with a passion for designing and coding.
              My specialty is creating interfaces and features for web
              applications using React.js and Next.js.
              <br />
              You can learn more about my profile and my work by browsing my
              website.
            </p>

            <strong>
              P.S. This site is open source and available on Github{" "}
              <Link href={"https://github.com/crypto1014/Portfolio"}>
                <a target="_blank">Github</a>
              </Link>
            </strong>
          </div>

          <div className="aboutButton">
            <Link href={"/contact"}>
              <a>
                <Button>
                  Get in touch with me
                  <TelegramLogo
                    style={{
                      marginBottom: "-0.1rem",
                      marginLeft: "0.2rem",
                    }}
                    size={16}
                    weight="bold"
                  />
                </Button>
              </a>
            </Link>
            <Link href={"/about"}>
              <a>
                <ButtonAlternatives>
                  Read more
                  <ArrowRight
                    style={{
                      marginBottom: "-0.1rem",
                      marginLeft: "0.2rem",
                    }}
                    weight="bold"
                    size={16}
                  />
                </ButtonAlternatives>
              </a>
            </Link>
          </div>
        </div>
      </AboutContainer>
    </Container>
  );
}
