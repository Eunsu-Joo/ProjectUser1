import { DeleteBtn, EnrollBtn } from "@/components/Btn";
import Layout from "@/components/Layout";
import styles from "@/styles/Signup.module.css";
import { MdErrorOutline } from "react-icons/md";
import Showcase from "@/components/Showcase";
import useInput from "hooks/useInput";
import validator from "common/validator";
import { useState } from "react";
import axios from "axios";
import { API_URL } from "config";
export default function Signup() {
  const [error, setError] = useState(null);
  const [isCheck, setIsCheck] = useState(false);
  const [inputs, onChange] = useInput({
    name: "",
    username: "",
    phone: "",
    website: "",
    email: "",
  });
  let { formValid, errors } = validator(inputs);
  const handleCheck = async (e) => {
    e.preventDefault();
    const data = await axios
      .get(`${API_URL}/api/users`)
      .then((res) => res.data.data);
    const users = data.map((user) => user.attributes.username);
    const userLowerCase = users.map((user) => user.toLowerCase());
    const { username } = inputs;
    if (!username) {
      return alert("유저네임을 입력해주세요");
    }
    if (username) {
      if (users.includes(username) || userLowerCase.includes(username)) {
        return alert("다른 유저네임을 입력해주세요");
      }
    }
    return alert("사용할 수 있는 유저네임입니다.");
  };
  const handleSUbmit = (e) => {
    e.preventDefault();
    setError(errors);
    if (formValid) {
      const sendUpdate = async () => {
        const res = await axios({
          url: API_URL,
          method: "put",
          data: inputs,
        });
        console.log(res);
      };
      sendUpdate();
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
                  placeholder={"user Name"}
                  onChange={onChange}
                />
                <button
                  className="btn"
                  style={{ marginLeft: "1rem" }}
                  onClick={handleCheck}
                >
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
                <EnrollBtn />
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
