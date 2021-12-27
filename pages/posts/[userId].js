import Layout from "@/components/Layout";
import axios from "axios";
import styles from "@/styles/Posts.module.css";
import Showcase from "@/components/Showcase";
import { BsPencilSquare } from "react-icons/bs";
import {
  HiOutlineArrowCircleDown,
  HiOutlineArrowCircleUp,
} from "react-icons/hi";
import PostItem from "@/components/PostItem";
import { useEffect, useState } from "react";
import postsStore from "lib/posts";
import { useRouter } from "next/router";
import AddPost from "@/components/AddPost";
export default function Posts({ data }) {
  const { setPosts, posts } = postsStore();
  const [isChange, setIsChange] = useState(false);
  const [itemToShow, setItemToShow] = useState(3);
  const [isExpanded, setIsExpanded] = useState(false);
  useEffect(() => {
    setPosts(data);
  }, []);
  const showMore = () => {
    if (itemToShow + 3 <= posts.length) {
      setItemToShow(itemToShow + 3);
    } else {
      setItemToShow(posts.length);
      setIsExpanded(true);
      if (isExpanded) {
        setItemToShow(3);
        setIsExpanded(false);
      }
    }
  };
  return (
    <Layout>
      <Showcase bg="/images/bg1.png" title="Your Valuable Posts" />
      <div className={`container ${styles.article}`}>
        <div className={styles.postsContainer}>
          {!isChange && (
            <p className={styles.link}>
              <span onClick={() => setIsChange(!isChange)}>
                {" "}
                <BsPencilSquare />
                Write new Post
              </span>
            </p>
          )}
          {isChange ? (
            <AddPost change={() => setIsChange(!isChange)} />
          ) : (
            <>
              {posts.slice(0, itemToShow).map((post) => (
                <PostItem post={post} key={post.id} />
              ))}
              <div className={styles.showMore}>
                <span onClick={showMore}>
                  {isExpanded ? (
                    <>
                      <HiOutlineArrowCircleUp />
                      Show Less
                    </>
                  ) : (
                    <>
                      <HiOutlineArrowCircleDown />
                      Show More
                    </>
                  )}
                </span>
              </div>
            </>
          )}
        </div>
      </div>
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
