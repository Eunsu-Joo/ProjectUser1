import Layout from "@/components/Layout";
import styles from "@/styles/Details.module.css";
import Image from "next/image";
export default function Details({ user }) {
  return (
    <Layout title="user Detail Information">
      <h1 className={styles.title}>
        {user.name} / {user.username}
      </h1>
      <div className={styles.img}>
        <img src={`/images/user${user.id}.jpg`} />
      </div>
      <div className={styles.info}>
        <h2>phone : {user.phone}</h2>
        <h3>Email : {user.email}</h3>
        <h4>Website : {user.website}</h4>
        <p>
          Address : {user.address.city} at {user.address.street}
        </p>
      </div>
      <div className={styles.btns}>
        <button className="btn mg">Delete</button>
        <button className="btn">Edit</button>
      </div>
    </Layout>
  );
}
// export async function getStaticPaths() {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
//   const users = await res.json();
//   const paths = users.map((user) => ({
//     params: { userId: user.id },
//   }));
//   return { paths, fallback: false };
// }

export async function getServerSideProps({ params: { userId } }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const user = await res.json();
  return {
    props: { user },
  };
}
