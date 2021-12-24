import Head from "next/head";
import { useEffect, useState } from "react";
import { TopBtn } from "./Btn";
import Footer from "./Footer";
import Header from "./Header/Header";

export default function Layout({ title, description, keywords, children }) {
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    if (window.innerHeight * 1.2 < document.body.clientHeight) {
      setIsShow(true);
    }
  });
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
      {isShow && <TopBtn />}
      <div id="modal-root"></div>
    </>
  );
}

Layout.defaultProps = {
  title: "Hello Users",
  description: "make a User Using JsonPlaceholder Dummy data",
  keywords: "users,jsonplaceholder,nextjs",
};
