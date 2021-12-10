import styles from "@/styles/Header.module.css";
import Link from "next/link";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { userState } from "lib/store";
export default function Nav() {
  const username = useRecoilValue(userState);
  console.log(username);
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
              <Link href={`/posts/1`}>
                <a className={pathname.includes("posts") ? `currentNav` : null}>
                  POSTS
                </a>
              </Link>
            </li>
            <li>
              <Link href={`/todos/1`}>
                <a className={pathname.includes("todos") ? `currentNav` : null}>
                  TODOS
                </a>
              </Link>
            </li>
            <li>
              <Link href={`/albums/1`}>
                <a
                  className={pathname.includes("albums") ? `currentNav` : null}
                >
                  ALBUMS
                </a>
              </Link>
            </li>
          </ul>
          <div className={styles.user}>
            <InsertEmoticonIcon className={styles.icon} />
            Hello {username}
          </div>
        </>
      ) : (
        <>
          <p className={styles.title}>Hello User's World!</p>
          <button className="btn" onClick={() => push("/signup")}>
            Enroll
          </button>
        </>
      )}
    </>
  );
}
