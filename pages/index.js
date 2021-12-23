import Layout from "@/components/Layout";
import UserItem from "@/components/UserItem";
import styles from "@/styles/Home.module.css";
import useStore from "lib/default";
import { useEffect, useState } from "react";
import Showcase from "@/components/Showcase";
import { TopBtn } from "@/components/Btn";
import { API_URL } from "../config";
import axios from "axios";
import usePagination from "@/hooks/usePagination";
import Pagination from "@/components/Pagination";
export default function Home({ users }) {
  const { setData, data } = useStore();
  const [pageArray, handlePagination, currentPage, pageNumber] = usePagination(
    6,
    users.data
  );
  const pages = { handlePagination, currentPage, pageNumber, data };
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
              {pageArray.map((user) => (
                <UserItem user={user} key={user.id} />
              ))}
            </div>
            <Pagination {...pages} />
          </div>
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
