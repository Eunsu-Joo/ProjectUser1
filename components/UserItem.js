import styles from "@/styles/UserItem.module.css";
import useStore from "lib/default";
import { useRouter } from "next/router";
import { DeleteBtn, EditBtn } from "./Btn";
export default function UserItem({ user }) {
  const router = useRouter();
  const { setUser } = useStore();
  const {
    id,
    attributes: { username, name, phone, email },
  } = user;
  const handleClick = () => {
    router.push(`/users/${id}`);
    setUser(user);
  };
  return (
    <div className={styles.users}>
      <div className={styles.img}>
        <img src={`/images/user${id > 10 ? id - 10 : id}.jpg`} />
      </div>
      <h3 onClick={handleClick}>
        {name} / {username}
      </h3>
      <p>{phone}</p>
      <p>{email}</p>
      <div className={styles.link}>
        <DeleteBtn id={id} />
        <EditBtn id={id} data={user} />
      </div>
    </div>
  );
}
