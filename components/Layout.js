import Head from "next/head";
import Header from "./Header/Header";
import styles from "@/styles/Layout.module.css";
import Showcase from "./Showcase";
import { useRouter } from "next/router";
export default function Layout({ title, description, keywords, children }) {
  const { pathname } = useRouter();
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      {pathname === "/" && <Showcase />}
      <div className={styles.container}>{children}</div>
    </>
  );
}

Layout.defaultProps = {
  title: "Hello Users",
  description: "make a User Using JsonPlaceholder Dummy data",
  keywords: "users,jsonplaceholder,nextjs",
};
