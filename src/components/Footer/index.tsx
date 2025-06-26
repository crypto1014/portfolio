import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FooterContainer } from "./styles";

export function Footer() {
  return (
    <FooterContainer>
      <h4> &copy; {new Date().getFullYear()} Emil Harjula</h4>
      <div className="links">
        <Link href={"https://github.com/crypto1014"}>
          <a target="_blank" aria-label="Link via Github">
            <FiGithub />
          </a>
        </Link>
        <Link href={"https://www.linkedin.com/in/emil-harjula-b818b5362/"}>
          <a target="_blank" aria-label="Link via Linkedin">
            <FiLinkedin />
          </a>
        </Link>
        <Link href={"https://api.whatsapp.com/send?phone=14706968158"}>
          <a target="_blank" aria-label="Link via whatsapp">
            <FaWhatsapp />
          </a>
        </Link>
      </div>
    </FooterContainer>
  );
}
