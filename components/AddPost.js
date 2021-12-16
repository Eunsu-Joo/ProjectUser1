import { useRouter } from "next/router";
import postsStore from "lib/posts";
import styled from "styled-components";
import { BackBtn } from "./Btn";
import { BsCheckCircle } from "react-icons/bs";
import styles from "@/styles/Posts.module.css";
const AddPosts = styled.div``;

export default () => {
  const router = useRouter();
  const { updatePosts, posts } = postsStore();
  const { userId } = router.query;
  console.log(posts);
  return (
    <div className={styles.newPost}>
      <div className="postContainer">
        <div className="inputBox">
          <input type="text" placeholder="write here title" name="title" />
        </div>
        <textarea placeholder="write here contents" name="body"></textarea>
      </div>
      <div className={styles.btns}>
        <BackBtn func={() => router.push(`/posts/${userId}`)} />
        <button className="btn">
          {" "}
          <BsCheckCircle />
          Submit
        </button>
      </div>
    </div>
  );
};
