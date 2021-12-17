import useStore from "lib/default";
import Link from "next/link";
import { useRouter } from "next/router";
import { EnrollBtn } from "../Btn";
export default function Nav() {
  const { user } = useStore();
  const {
    pathname,
    query: { userId },
  } = useRouter();
  return (
    <>
      {userId ? (
        <>
          {" "}
          <ul className={`gnb`}>
            <li>
              <Link href={`/posts/${userId}`}>
                <a className={pathname.includes("posts") ? `currentNav` : null}>
                  POSTS
                </a>
              </Link>
            </li>
            <li>
              <Link href={`/todos/${userId}`}>
                <a className={pathname.includes("todos") ? `currentNav` : null}>
                  TODOS
                </a>
              </Link>
            </li>
            <li>
              <Link href={`/albums/${userId}`}>
                <a
                  className={pathname.includes("albums") ? `currentNav` : null}
                >
                  ALBUMS
                </a>
              </Link>
            </li>
          </ul>
          <div className={`user`}>
            Hello {user && user.attributes.username}{" "}
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
