import useStore from "lib/default";
import Link from "next/link";
import { useRouter } from "next/router";
import { EnrollBtn } from "../Btn";
import styles from "@/styles/Header.module.css";
export default function Nav() {
  const { user } = useStore();
  const {
    pathname,
    query: { userId },
  } = useRouter();
  return (
    <>
      {userId <= 10 && (
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
        </>
      )}
      <div className={styles.user}>
        Hello {user && user.attributes.username}{" "}
      </div>
    </>
  );
}
