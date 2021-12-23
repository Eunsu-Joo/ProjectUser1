import Layout from "@/components/Layout";
import styles from "@/styles/Signup.module.css";
import Showcase from "@/components/Showcase";
import useInput from "hooks/useInput";
import { validatorEdit } from "common/validator";
import { useState } from "react";
import useStore from "lib/default";
import useModal from "@/hooks/useModal";
import UpdateModal from "portal/UpdateModal";
import { EditBtn } from "@/components/Btn";
export default function Edit() {
  const [error, setError] = useState(null);
  const { user } = useStore();
  const { open, onOpenModal, closeModal } = useModal();
  const [attributes, onChange] = useInput({
    name: user && user.attributes.name,
    username: user && user.attributes.username,
    phone: user && user.attributes.phone,
    website: user && user.attributes.website,
    email: user && user.attributes.email,
    company: user && user.attributes.company,
  });

  let { formValid, errors } = validatorEdit(attributes);
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(errors);
    if (formValid) {
      onOpenModal(!open);
    }
  };
  return (
    <Layout title="User Edit page" description="edit">
      <Showcase bg="/images/bg2.png" title="User Edit page Right Now" />
      <div className={styles.wrap}>
        <div className={`container ${styles.container}`}>
          <h2>Signup Our Users and Enjoy your Life.</h2>
          <form action="" onSubmit={handleSubmit}>
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
              <div className={styles.inputBox}>
                <input
                  type="text"
                  placeholder="company"
                  name="company"
                  onChange={onChange}
                />
                {error ? <p>{errors.company}</p> : null}
              </div>
              <EditBtn />
            </div>
          </form>
        </div>
      </div>
      {open && (
        <UpdateModal id={user.id} close={closeModal} attributes={attributes} />
      )}
    </Layout>
  );
}
