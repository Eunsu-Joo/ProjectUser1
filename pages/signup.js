import { DeleteBtn, EnrollBtn } from "@/components/Btn";
import Layout from "@/components/Layout";
import styles from "@/styles/Signup.module.css";
import { MdErrorOutline } from "react-icons/md";
import Showcase from "@/components/Showcase";
export default function signup() {
  return (
    <Layout title="User Signup page" description="sign up">
      <Showcase bg="/images/bg2.png" title="Join us Our Members" />
      <div className={styles.wrap}>
        <div className={`container ${styles.container}`}>
          <h2>Signup Our Users and Enjoy your Life.</h2>
          <form action="">
            <div className={styles.inputContainer}>
              <div className={styles.inputBox}>
                <input type="text" placeholder="name" />
                <p>
                  <MdErrorOutline />
                  Check your name
                </p>
              </div>
              <div className={styles.inputBox}>
                <input type="text" placeholder="username" />
                <button className="btn">Check Id</button>
                <p>Error</p>
              </div>
              <div className={styles.inputBox}>
                <input type="text" placeholder="phone" />
                <p>Error</p>
              </div>
              <div className={styles.inputBox}>
                <input type="text" placeholder="email" />
                <p>Error</p>
              </div>
              <div className={styles.inputBox}>
                <input type="text" placeholder="website" />
                <p>Error</p>
              </div>
              <div className={styles.btns}>
                <DeleteBtn />
                <EnrollBtn />
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
