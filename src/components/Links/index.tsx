import Link from "next/link";
import { Icons } from "./styles";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export function Links() {
  return (
    <>
      <Icons>
        <Link href={"https://github.com/crypto1014"}>
          <a target="_blank" aria-label="Link para o Github">
            <FiGithub />
          </a>
        </Link>
        <Link href={"https://www.linkedin.com/in/emil-harjula-b818b5362/"}>
          <a target="_blank" aria-label="Link para o Linkedin">
            <FiLinkedin />
          </a>
        </Link>
        <Link href={"https://api.whatsapp.com/send?phone=14706968158"}>
          <a
            target="_blank"
            aria-label="Link para entrar em contato via whatsapp"
          >
            <FaWhatsapp />
          </a>
        </Link>
        <div className="barra"></div>
      </Icons>
    </>
  );
}
