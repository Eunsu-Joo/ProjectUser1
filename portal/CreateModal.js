import ModalLayout from "./Modal";
import styles from "@/styles/Modal.module.css";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react/cjs/react.development";
import axios from "axios";
import { API_URL } from "config";
import { routeToHome } from "common";
export default function CreateModal({ close, attributes }) {
  const [message, setMessage] = useState("회원등록을 하시겠습니까?");
  const [isSuccess, setIsSuccess] = useState(false);
  const handleCreate = async () => {
    await axios
      .post(`${API_URL}/api/users`, { data: attributes })
      .then((res) => {
        if (res.status === 200) {
          setMessage("정상적으로 처리되었습니다.");
          setIsSuccess(true);
        }
      })
      .catch((error) => {
        console.log(error);
        setMessage("애러가 발생했습니다. 콘솔창을 확인해주세요.");
      });
  };

  return (
    <ModalLayout>
      <div className={styles.alert}>
        <AiOutlineClose className={styles.icon} onClick={close} />
        <p>{message}</p>
        <button
          className={styles.btn}
          onClick={isSuccess ? routeToHome : handleCreate}
        >
          OK
        </button>
      </div>
    </ModalLayout>
  );
}
