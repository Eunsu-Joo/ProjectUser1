import Layout from "@/components/Layout";
import axios from "axios";
import styles from "@/styles/Posts.module.css";
import Showcase from "@/components/Showcase";
import { BsPencilSquare } from "react-icons/bs";
import PostItem from "@/components/PostItem";
import { useEffect, useState } from "react";
import postsStore from "lib/posts";
import { useRouter } from "next/router";
import { TopBtn } from "@/components/Btn";
import AddPost from "@/components/AddPost";
import useStore from "lib/default";
export default function Posts({ data, params }) {
  console.log(params);

  const { isPage, setIsPage } = useStore();
  const { setPosts, posts } = postsStore();
  useEffect(() => {
    setPosts(data);
  }, []);
  return (
    <Layout>
      <Showcase bg="/images/bg1.png" title="Your Valuable Posts" />
      <div className={`container ${styles.article}`}>
        <div className={styles.postsContainer}>
          {isPage && (
            <span className={styles.link} onClick={() => setIsPage(!isPage)}>
              {" "}
              <BsPencilSquare />
              Write new Post
            </span>
          )}

          {!isPage ? (
            <>
              <h2 className={styles.title}>Posts</h2>
              <AddPost />
            </>
          ) : (
            posts.map((post) => <PostItem post={post} key={post.id} />)
          )}
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
  return { props: { data: data, params: params } };
}
