import styles from "@/styles/Header.module.css";
import useStore from "lib/default";
import Link from "next/link";
import { useRouter } from "next/router";
import { EnrollBtn } from "../Btn";
export default function Nav() {
  const { user } = useStore();
  const {
    pathname,
    push,
    query: { userId },
  } = useRouter();
  return (
    <>
      {userId ? (
        <>
          {" "}
          <ul className={styles.gnb}>
            <li>
              <Link href={`/posts/${userId}`}>
                <a
                  className={
                    pathname.includes("posts") ? `${styles.currentNav}` : null
                  }
                >
                  POSTS
                </a>
              </Link>
            </li>
            <li>
              <Link href={`/todos/${userId}`}>
                <a
                  className={
                    pathname.includes("todos") ? `${styles.currentNav}` : null
                  }
                >
                  TODOS
                </a>
              </Link>
            </li>
            <li>
              <Link href={`/albums/${userId}`}>
                <a
                  className={
                    pathname.includes("albums") ? `${styles.currentNav}` : null
                  }
                >
                  ALBUMS
                </a>
              </Link>
            </li>
          </ul>
          <div className={styles.user}>
            Hello {user ? user.username : null}{" "}
          </div>
        </>
      ) : (
        <>
          <EnrollBtn />
        </>
      )}
    </>
  );
}
