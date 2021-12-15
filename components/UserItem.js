import styles from "@/styles/UserItem.module.css";
import useStore from "lib/default";
import { useRouter } from "next/router";
import { DeleteBtn, EditBtn } from "./Btn";
export default function UserItem({ user }) {
  const router = useRouter();
  const { setUser } = useStore();
  const handleClick = () => {
    router.push(`/users/${user.id}`);
    setUser(user);
  };
  return (
    <div className={styles.users}>
      <div className={styles.img}>
        <img src={`/images/user${user.id}.jpg`} />
      </div>
      <h3 onClick={handleClick}>
        {user.name} / {user.username}
      </h3>
      <p>{user.phone}</p>
      <p>{user.email}</p>
      <div className={styles.link}>
        <DeleteBtn id={user.id} />
        <EditBtn id={user.id} data={user} />
      </div>
    </div>
  );
}
