import Head from "next/head";
import { useEffect } from "react/cjs/react.development";
import { TopBtn } from "./Btn";
import Footer from "./Footer";
import Header from "./Header/Header";

export default function Layout({ title, description, keywords, children }) {
  useEffect(() => {
    if (document.body.clientHeight > 1500) {
      console.log("needs top");
    }
  }, []);
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
      <div id="modal-root"></div>
    </>
  );
}

Layout.defaultProps = {
  title: "Hello Users",
  description: "make a User Using JsonPlaceholder Dummy data",
  keywords: "users,jsonplaceholder,nextjs",
};
