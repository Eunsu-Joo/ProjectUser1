import Layout from "@/components/Layout";
import styles from "@/styles/Users.module.css";
import { IoIosArrowUp } from "react-icons/io";
import { BsMouse, BsCardList, BsPencilSquare, BsGrid3X3 } from "react-icons/bs";
import { MdOutlineInsertComment } from "react-icons/md";
import React, { useEffect } from "react";
import ReactFullpage from "@fullpage/react-fullpage/dist/react-fullpage";
import { BackBtn, DeleteBtn, EditBtn, TopBtn } from "@/components/Btn";
import { useRouter } from "next/router";
const opts = {
  licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
};
export default function Details(props) {
  const user = props.user;
  const router = useRouter();
  return (
    <Layout title="user Detail Information" full>
      <ReactFullpage
        {...opts}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              {props.children && (
                <div className="section section--home ">{props.children}</div>
              )}
              <div className={`section project--one `}>
                <div
                  className={`${styles.first} ${styles.bg}`}
                  style={{ backgroundImage: `url(/images/user${user.id}.jpg)` }}
                >
                  <h1 className={styles.title}>
                    <span>Hello , </span>
                    {user.name} / {user.username}
                  </h1>
                  <p className={styles.scroll}>
                    <BsMouse />
                    scroll
                  </p>
                </div>
              </div>
              <div className={`section project--two ${styles.secondary}`}>
                <div className={styles.container}>
                  <div className={styles.info}>
                    <p>{user.id} . Love yourself.</p>
                    <h2>
                      {user.name} / {user.username}
                    </h2>
                    <p className={styles.desc}>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged.
                    </p>
                    <ul>
                      <li>
                        <p>Company</p>
                        <span>
                          {user.company.name} / {user.company.bs}
                        </span>
                      </li>
                      <li>
                        <p>Address</p>
                        <span>
                          {user.address.city} / {user.address.street}
                        </span>
                      </li>
                      <li>
                        <p>Contact</p>
                        <span>
                          {user.email} / {user.phone}
                        </span>
                      </li>
                    </ul>
                    <BackBtn func={() => router.back()} />
                    <DeleteBtn />
                    <EditBtn id={user.id} url />
                  </div>
                  <div className={styles.img}>
                    <img src={`/images/user${user.id}.jpg`} />
                  </div>
                </div>
              </div>
              <div className={`section project--three ${styles.third}`}>
                <div className={styles.container}>
                  <ul className={styles.list}>
                    <li>
                      <span>love what you have.</span>
                      <img src={`/images/todo.png`} />
                      <h2>Posts</h2>
                      <p>
                        {" "}
                        If you are going to use a passage of Lorem Ipsum, you
                        need to be sure there isn't anything embarrassing hidden
                        in the middle of text.
                      </p>
                      <p className={styles.icons}>
                        <BsCardList />
                        <BsPencilSquare />
                        <MdOutlineInsertComment />
                      </p>
                    </li>
                    <li>
                      <span>Better late than never.</span>
                      <img src={`/images/post.png`} />
                      <h2>Todos</h2>
                      <p>
                        {" "}
                        If you are going to use a passage of Lorem Ipsum, you
                        need to be sure there isn't anything embarrassing hidden
                        in the middle of text.
                      </p>
                      <p className={styles.icons}>
                        <BsCardList />
                        <BsPencilSquare />
                      </p>
                    </li>
                    <li>
                      <span>Better the last smile</span>
                      <img src={`/images/album.png`} />
                      <h2>Albums</h2>
                      <p>
                        {" "}
                        If you are going to use a passage of Lorem Ipsum, you
                        need to be sure there isn't anything embarrassing hidden
                        in the middle of text.
                      </p>
                      <p className={styles.icons}>
                        <BsGrid3X3 />
                        <BsCardList />
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="top" onClick={() => fullpageApi.moveTo(1, 0)}>
                <IoIosArrowUp />
                TOP
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users = await res.json();
  const paths = users.map((user) => ({
    params: { userId: user.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.userId}`
  );
  const user = await res.json();
  return {
    props: { user },
  };
}
