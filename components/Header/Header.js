import Image from "next/image";
import logo from "@/public/next.js.png";
import styles from "@/styles/Header.module.css";
import Nav from "./Nav";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header}>
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
