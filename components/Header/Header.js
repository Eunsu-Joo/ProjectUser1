import Image from "next/image";
import logo from "@/public/next.js.png";
import Nav from "./Nav";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
    return () => {
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);
  return (
    <header
      className={`header ${scrollPosition > 450 ? `activeHeader` : null} `}
    >
      <nav>
        <h1 className={`logo`}>
          <Link href="/">
            <a>
              {" "}
              <Image src={logo} />
            </a>
          </Link>
        </h1>
        <Nav />
      </nav>
    </header>
  );
};

export default Header;
