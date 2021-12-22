import Layout from "@/components/Layout";
import axios from "axios";
import styles from "@/styles/Posts.module.css";
import Showcase from "@/components/Showcase";
import useInput from "hooks/useInput";
import { BackBtn } from "@/components/Btn";
import { BsCheckCircle } from "react-icons/bs";
import { useEffect, useState } from "react";
import postsStore from "lib/posts";
import { TopBtn } from "@/components/Btn";
import { useRouter } from "next/router";
export default function Posts({ data, params }) {
  const router = useRouter();
  const { setPosts, posts } = postsStore();
  const { updatePosts } = postsStore();
  const {
    query: { userId },
  } = router;
  const [inputs, onChange] = useInput({ title: "", body: "" });
  const handleUpdate = () => {
    updatePosts(inputs, userId);
    alert("포스팅 완료!");
  };
  useEffect(() => {
    setPosts(data);
  }, []);
  return (
    <Layout>
      <Showcase bg="/images/bg1.png" title="Your Valuable Posts" />
      <div className={`container ${styles.article}`}>
        <h2 className={styles.title}>Posts</h2>
        <div className={styles.newPost}>
          <div className="inputBox">
            <input
              type="text"
              placeholder="write here title"
              name="title"
              onChange={onChange}
            />
          </div>
          <textarea
            placeholder="write here contents"
            name="body"
            onChange={onChange}
          ></textarea>
        </div>
        <div className={styles.btns}>
          <BackBtn func={() => router.push(`/posts/${userId}`)} />
          <button className="btn" onClick={handleUpdate}>
            {" "}
            <BsCheckCircle />
            Submit
          </button>
        </div>
      </div>
      <TopBtn />
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await res.data;
  const paths = posts.map((post) => ({
    params: { userId: post.userId.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?userId=${params.userId}`
  );
  const data = await res.data;
  return { props: { data: data, params: params.userId } };
}
