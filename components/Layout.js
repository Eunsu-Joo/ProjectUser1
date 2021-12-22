import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header/Header";
import Showcase from "./Showcase";

export default function Layout({ title, description, keywords, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
}

Layout.defaultProps = {
  title: "Hello Users",
  description: "make a User Using JsonPlaceholder Dummy data",
  keywords: "users,jsonplaceholder,nextjs",
};
