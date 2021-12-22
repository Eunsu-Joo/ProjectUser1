import Layout from "@/components/Layout";
import UserItem from "@/components/UserItem";
import styles from "@/styles/Home.module.css";
import useStore from "lib/default";
import { useEffect } from "react";
import Showcase from "@/components/Showcase";
import { TopBtn } from "@/components/Btn";
import { API_URL } from "../config";
import axios from "axios";
export default function Home({ users }) {
  const { setData, data } = useStore();
  useEffect(() => {
    setData(users.data);
  }, []);
  return (
    <>
      {data && (
        <Layout>
          <Showcase title="Welcome To HelloUsers Page" bg="/images/bg3.png" />
          <div className="container">
            <div className={styles.gridContainer}>
              {data.map((user) => (
                <UserItem user={user} key={user.id} />
              ))}
            </div>
          </div>
          <TopBtn />
        </Layout>
      )}
    </>
  );
}
export async function getServerSideProps() {
  const users = await axios.get(`${API_URL}/api/users`).then((res) => res.data);
  return {
    props: { users },
  };
}
