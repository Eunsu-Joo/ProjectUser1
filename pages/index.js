import Layout from "@/components/Layout";
import UserItem from "@/components/UserItem";
import styles from "@/styles/Home.module.css";
import useStore, { userState } from "lib/default";
import { useEffect } from "react";
import Showcase from "@/components/Showcase";
export default function Home({ users }) {
  const { data, setData } = useStore();
  useEffect(() => {
    setData(users);
  }, []);
  return (
    <>
      {data && (
        <Layout>
          <Showcase
            title="Welcome To HelloUsers Page"
            bg="/images/showcase.jpg"
          />
          <div className="container">
            <h1 className={styles.title}>Hello Users</h1>
            <div className={styles.gridContainer}>
              {data.map((user) => (
                <UserItem user={user} key={user.id} />
              ))}
            </div>
          </div>
        </Layout>
      )}
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users = await res.json();
  return {
    props: { users },
  };
}
