import Layout from "@/components/Layout";
import styles from "@/styles/Users.module.css";
import { IoIosArrowUp } from "react-icons/io";
import { BsMouse, BsCardList, BsPencilSquare, BsGrid3X3 } from "react-icons/bs";
import { MdOutlineInsertComment } from "react-icons/md";
import React, { useEffect } from "react";
import ReactFullpage from "@fullpage/react-fullpage/dist/react-fullpage";
import { BackBtn, DeleteBtn, EditBtn, TopBtn } from "@/components/Btn";
import { useRouter } from "next/router";
import useStore from "lib/default";
import { API_URL } from "config";
import axios from "axios";

export default function Details({ user }) {
  const router = useRouter();
  const {
    id,
    attributes: { username, name, phone, website, email, company },
  } = user;
  return (
    <Layout title="user Detail Information">
      <ReactFullpage
        licenseKey="OPEN-SOURCE-GPLV3-LICENSE"
        afterLoad={(origin) => {
          const header = document.body.children[0].children[0];
          if (!document.body.className.includes("fp-viewing-0")) {
            header.classList.add("activeHeader");
          } else {
            header.classList.remove("activeHeader");
          }
        }}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className={`section project--one `}>
                <div
                  className={`${styles.first} ${styles.bg}`}
                  style={{ backgroundImage: `url(/images/user${id}.jpg)` }}
                >
                  <h1 className={styles.title}>
                    <span>Hello , </span>
                    {name} / {username}
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
                    <p>{id} . Love yourself.</p>
                    <h2>
                      {name} / {username}
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
                        <span>{company}</span>
                      </li>
                      <li>
                        <p>Email</p>
                        <span>{email}</span>
                      </li>
                      <li>
                        <p>Phone</p>
                        <span>{phone}</span>
                      </li>
                    </ul>
                    <BackBtn func={() => router.back()} />
                    <DeleteBtn />
                    <EditBtn id={user.id} data={user} />
                  </div>
                  <div className={styles.img}>
                    <img src={`/images/user${id}.jpg`} />
                  </div>
                </div>
              </div>
              <div className={`section project--three ${styles.third}`}>
                <div className={styles.container}>
                  <ul className={styles.list}>
                    <li>
                      <span>love what you have.</span>
                      <img src="/images/todo.png" />
                      <h2>Posts</h2>
                      <p>
                        {" "}
                        If you are going to use a passage of Lorem Ipsum, you
                        need to be sure there isn't anything embarrassing hidden
                        in the middle of text.
                      </p>
                      <p className={styles.icons}>
                        <BsCardList
                          onClick={() => router.push(`/posts/${id}`)}
                        />
                        <BsPencilSquare
                          onClick={() => {
                            router.push(`/posts/${id}/new`);
                          }}
                        />
                      </p>
                    </li>
                    <li>
                      <span>Better late than never.</span>
                      <img src="/images/post.png" />
                      <h2>Todos</h2>
                      <p>
                        {" "}
                        If you are going to use a passage of Lorem Ipsum, you
                        need to be sure there isn't anything embarrassing hidden
                        in the middle of text.
                      </p>
                      <p className={styles.icons}>
                        <BsCardList
                          onClick={() => router.push(`/todos/${id}`)}
                        />
                      </p>
                    </li>
                    <li>
                      <span>Better the last smile</span>
                      <img src="/images/album.png" />
                      <h2>Albums</h2>
                      <p>
                        {" "}
                        If you are going to use a passage of Lorem Ipsum, you
                        need to be sure there isn't anything embarrassing hidden
                        in the middle of text.
                      </p>
                      <p className={styles.icons}>
                        <BsGrid3X3
                          onClick={() => router.push(`/albums/${id}`)}
                        />
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

export async function getServerSideProps({ query: { userId } }) {
  const res = await axios.get(`${API_URL}/api/users/${userId}`);
  const user = await res.data;
  return {
    props: { user: user.data },
  };
}
