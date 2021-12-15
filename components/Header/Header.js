import Image from "next/image";
import logo from "@/public/next.js.png";
import styles from "@/styles/Header.module.css";
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
    return window.addEventListener("scroll", updateScroll);
  }, []);
  return (
    <header
      className={`${styles.header} ${
        scrollPosition > 500 ? `${styles.active}` : null
      } `}
    >
      <nav className={styles.container}>
        <h1 className={styles.logo}>
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
