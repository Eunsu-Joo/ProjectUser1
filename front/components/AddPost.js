import { useRouter } from "next/router";
import postsStore from "lib/posts";
import { BackBtn } from "./Btn";
import { BsCheckCircle } from "react-icons/bs";
import styles from "@/styles/Posts.module.css";
import useStore from "lib/default";
import useInput from "hooks/useInput";

export default () => {
  const { updatePosts } = postsStore();
  const { isPage, setIsPage } = useStore();
  const router = useRouter();
  const {
    query: { userId },
  } = router;
  const [inputs, onChange] = useInput({ title: "", body: "" });
  const handleUpdate = () => {
    updatePosts(inputs, userId);
    alert("포스팅 완료!");
    setIsPage(!isPage);
  };
  return (
    <div className={styles.newPost}>
      <div className="postContainer">
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
        <BackBtn func={() => setIsPage(!isPage)} />
        <button className="btn" onClick={handleUpdate}>
          {" "}
          <BsCheckCircle />
          Submit
        </button>
      </div>
    </div>
  );
};
