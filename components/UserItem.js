import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/UserItem.module.css";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { userState } from "lib/store";

export default function UserItem({ user }) {
  const router = useRouter();
  const [username, setUsernameState] = useRecoilState(userState);
  const handleClick = () => {
    router.push(`/users/${user.id}`);
    setUsernameState(user.username);
  };

  return (
    <div className={styles.users}>
      <div className={styles.img}>
        <img src={`/images/user${user.id}.jpg`} />
      </div>

      <div className={styles.info}>
        <h3 onClick={handleClick}>
          {user.name} / {user.username}
        </h3>
        <p>{user.phone}</p>
        <p>{user.email}</p>
      </div>

      <div className={styles.link}>
        <Link href={`/edit/${user.id}`}>
          <a className="btn">Edit</a>
        </Link>
      </div>
      <div className={styles.link}>
        <button className="btn">Delete</button>
      </div>
    </div>
  );
}
