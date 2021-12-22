import Layout from "@/components/Layout";
import Showcase from "@/components/Showcase";
import styles from "@/styles/Todos.module.css";
import { AiFillCheckCircle, AiOutlineCheckCircle } from "react-icons/ai";
import { useState } from "react";
import axios from "axios";
import TodoItem from "@/components/TodoItem";
import { TopBtn } from "@/components/Btn";
export default function Todos({ data }) {
  const [isCheck, setIsCheck] = useState(false);
  return (
    <Layout>
      <Showcase bg={"/images/bg0.png"} title="Your Todo's List" />
      <div className="container" style={{ position: "relative" }}>
        <div className={styles.imgBox}>
          <img src="/images/signupBg.png" />
        </div>
        <div className={styles.contents}>
          <div className={styles.contentsContainer}>
            <p className={styles.check} onClick={() => setIsCheck(!isCheck)}>
              {isCheck ? (
                <>
                  {" "}
                  <AiFillCheckCircle />
                  <span> Show All</span>
                </>
              ) : (
                <>
                  {" "}
                  <AiOutlineCheckCircle />
                  <span> Show Completed</span>
                </>
              )}
            </p>
            {isCheck
              ? data
                  .filter((todo) => todo.completed === true)
                  .map((todo) => <TodoItem todo={todo} key={todo.id} />)
              : data.map((todo) => <TodoItem todo={todo} key={todo.id} />)}
          </div>
        </div>
      </div>
      <TopBtn />
    </Layout>
  );
}
export async function getStaticPaths() {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/todos`);
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
    `https://jsonplaceholder.typicode.com/todos?userId=${params.userId}`
  );
  const data = await res.data;
  return { props: { data } };
}
