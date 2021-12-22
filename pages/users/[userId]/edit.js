import { DeleteBtn, EditBtn, EnrollBtn } from "@/components/Btn";
import Layout from "@/components/Layout";
import styles from "@/styles/Signup.module.css";
import { MdErrorOutline } from "react-icons/md";
import Showcase from "@/components/Showcase";
import useInput from "hooks/useInput";
import validator from "common/validator";
import { useState } from "react";
import useStore from "lib/default";
export default function Edit() {
  const [error, setError] = useState(null);
  const { user } = useStore();
  const [data, onChange] = useInput({
    name: "",
    username: user && user.attributes.username,
    phone: "",
    website: "",
    email: "",
  });
  let { formValid, errors } = validator(data);
  const handleSUbmit = (e) => {
    e.preventDefault();
    setError(errors);
    if (formValid) {
      const updateUser = async () => {};
    }
  };
  return (
    <Layout title="User Signup page" description="sign up">
      <Showcase bg="/images/bg2.png" title="Join us Our Members" />
      <div className={styles.wrap}>
        <div className={`container ${styles.container}`}>
          <h2>Signup Our Users and Enjoy your Life.</h2>
          <form action="" onSubmit={handleSUbmit}>
            <div className={styles.inputContainer}>
              <div className={styles.inputBox}>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  onChange={onChange}
                />
                {error ? <p>{errors.name}</p> : null}
              </div>
              <div className={styles.inputBox}>
                <input
                  type="text"
                  name="username"
                  placeholder={user && user.attributes.username}
                  onChange={onChange}
                  disabled
                />
                <button className="btn" disabled style={{ marginLeft: "1rem" }}>
                  Check Id
                </button>
                {error ? <p> {errors.username}</p> : null}
              </div>
              <div className={styles.inputBox}>
                <input
                  type="text"
                  placeholder="Phone"
                  name="phone"
                  onChange={onChange}
                />
                {error ? <p>{errors.phone}</p> : null}
              </div>
              <div className={styles.inputBox}>
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  onChange={onChange}
                />
                {error ? <p>{errors.email}</p> : null}
              </div>
              <div className={styles.inputBox}>
                <input
                  type="text"
                  placeholder="Website"
                  name="website"
                  onChange={onChange}
                />
                {error ? <p>{errors.website}</p> : null}
              </div>
              <div className={styles.btns}>
                <EditBtn />
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
