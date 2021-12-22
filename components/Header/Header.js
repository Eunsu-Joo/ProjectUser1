import Image from "next/image";
import logo from "@/public/next.js.png";
import Nav from "./Nav";
import Link from "next/link";
import styles from "@/styles/Header.module.css";
import { useEffect, useState } from "react";
import { EnrollBtn } from "../Btn";
import { useRouter } from "next/router";
const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  const {
    pathname,
    query: { userId },
  } = useRouter();
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
    return () => {
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);
  return (
    <header
      className={`${styles.header} ${
        scrollPosition > 450 ? `${styles.activeHeader}` : null
      } `}
    >
      <nav>
        <h1 className={styles.logo}>
          <Link href="/">
            <a>
              {" "}
              <Image src={logo} />
            </a>
          </Link>
        </h1>
        {userId ? <Nav /> : <EnrollBtn />}
      </nav>
    </header>
  );
};

export default Header;
