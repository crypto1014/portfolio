/* eslint-disable-next-line import/no-anonymous-default-export */
import Link from "next/link";
import { Form } from "./Form";
import { Description, Section, Title } from "../../styles/styles";
import { ContainerContact, ContactContent } from "./styles";
import { BsLinkedin, BsTelegram, BsWhatsapp } from "react-icons/bs";
import { Envelope, TelegramLogo } from "phosphor-react";
import { GrMail } from "react-icons/gr";

export function Contact() {
  return (
    <Section>
      <Title>
        Contact
        <span>
          <Envelope /> Contact
        </span>
      </Title>
      <Description>
        I'm always open to new work opportunities or collaborating on some new
        amazing projects. Just fill out the form and I'll get back to you 💪
      </Description>

      <ContainerContact>
        <ContactContent>
          <div className="contact-content">
            <h4>
              <BsWhatsapp size={22} color="#00fffb" /> WhatsApp{" "}
            </h4>
            <Link href="https://api.whatsapp.com/send?phone=14706968158">
              <a target="_blank">
                <span>+1 470 696 8158</span>
              </a>
            </Link>
          </div>
          <div className="contact-content">
            <h4>
              <BsTelegram size={22} color="#00fffb" /> Telegram{" "}
            </h4>
            <Link href="https://t.me/@kdrilling">
              <a target="_blank">
                <span>@kdrilling</span>
              </a>
            </Link>
          </div>

          <div className="contact-content">
            <h4>
              {" "}
              <GrMail size={22} color="#00fffb" /> Email{" "}
            </h4>
            <Link href="mailto:emilharjula@gmail.com">
              <a target="_blank">
                <span>emilharjula@gmail.com</span>
              </a>
            </Link>
          </div>
          <div className="contact-content">
            <h4>
              {" "}
              <BsLinkedin size={22} color="#00fffb" /> LinkedIn{" "}
            </h4>
            <Link href="https://www.linkedin.com/in/emil-harjula-b818b5362/">
              <a target="_blank">
                <span>Go to LinkedIn</span>
              </a>
            </Link>
          </div>
        </ContactContent>

        <Form />
      </ContainerContact>
    </Section>
  );
}
