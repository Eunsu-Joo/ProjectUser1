import { BackBtn } from "@/components/Btn";
import { BsCheckCircle } from "react-icons/bs";
import styles from "@/styles/Posts.module.css";
import useInput from "hooks/useInput";
import postsStore from "lib/posts";
import { useRouter } from "next/router";
export default function AddPost({ change }) {
  const router = useRouter();
  const { updatePosts } = postsStore();
  const {
    query: { userId },
  } = router;
  const [inputs, onChange] = useInput({ title: "", body: "" });
  const handleUpdate = () => {
    updatePosts(inputs, userId);
    alert("포스팅 완료!");
    change();
  };
  return (
    <>
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
        <BackBtn func={change} />
        <button className="btn" onClick={handleUpdate}>
          {" "}
          <BsCheckCircle />
          Submit
        </button>
      </div>
    </>
  );
}
