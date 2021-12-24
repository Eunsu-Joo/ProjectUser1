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
  const [postItem, setPostItem] = useState({ itemNumber: 3, startNumber: 0 });
  const { itemNumber, startNumber } = postItem;
  const [isCheck, setIsCheck] = useState(false);
  const postsArray = posts.slice(startNumber, (startNumber + 1) * itemNumber);
  const showMore = () => {
    if (itemNumber === 6) {
      setPostItem({
        ...postItem,
        itemNumber: itemNumber + 3,
      });
    } else {
      setPostItem({
        ...postItem,
        itemNumber: itemNumber + 3,
      });
    }
  };
  const showLess = () => {
    setPostItem({
      ...postItem,
      itemNumber: itemNumber - 3,
    });
  };

  useEffect(() => {
    setPosts(data);
  }, []);
  return (
    <Layout>
      <Showcase bg="/images/bg1.png" title="Your Valuable Posts" />
      <div className={`container ${styles.article}`}>
        <div className={styles.postsContainer}>
          {!isChange && (
            <p className={styles.link} onClick={() => setIsChange(!isChange)}>
              <span>
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
              {postsArray.map((post) => (
                <PostItem post={post} key={post.id} />
              ))}
              <div className={styles.showMore}>
                {" "}
                {isCheck ? (
                  <span onClick={showLess}>
                    <HiOutlineArrowCircleUp />
                    Show Less
                  </span>
                ) : (
                  <span onClick={showMore}>
                    <HiOutlineArrowCircleDown />
                    Show More
                  </span>
                )}
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
