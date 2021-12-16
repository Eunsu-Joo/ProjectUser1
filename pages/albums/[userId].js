import AlbumItem from "@/components/AlbumItem";
import { TopBtn } from "@/components/Btn";
import Layout from "@/components/Layout";
import Showcase from "@/components/Showcase";
import styles from "@/styles/Albums.module.css";
import axios from "axios";
export default function Albums({ data }) {
  return (
    <Layout>
      <Showcase bg="/images/bg4.png" title="Show your Images" />
      <div className="container">
        <div className={styles.albumsContainer}>
          {data.map((album) => (
            <AlbumItem data={album} key={album.id} />
          ))}
        </div>
      </div>
      <TopBtn />
    </Layout>
  );
}
export async function getStaticPaths() {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/albums`);
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
    `https://jsonplaceholder.typicode.com/albums?userId=${params.userId}`
  );
  const data = await res.data;
  return { props: { data } };
}
