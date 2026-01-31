import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={"[url=https://ibb.co/jP3ghRJp][img]https://i.ibb.co/jP3ghRJp/Whats-App-Image-2026-01-31-at-2-40-21-PM.jpg[/img][/url]"}
          alt="Founder"
        />

        <h2>Minakshi</h2>
        <p>Nothing is permanent.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          
          <a href="https://www.linkedin.com/in/minakshi-punasiya-59b8712b5/" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/Minakshi620" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;