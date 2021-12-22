import styles from "@/styles/Footer.module.css";
import logo from "@/public/next.js.png";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.title}>
          <span>Hello Users with </span>
          <Image
            src={logo}
            width={100}
            height={50}
            objectFit="cover"
            className={styles.logo}
          />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
