import Layout from "@/components/Layout";
import UserItem from "@/components/UserItem";
import styles from "@/styles/Home.module.css";

export default function Home({ users }) {
  return (
    <Layout>
      <h1 className={styles.title}>Hello Users</h1>
      {users.map((user) => (
        <UserItem user={user} key={user.id} />
      ))}
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users = await res.json();
  return {
    props: { users },
  };
}
