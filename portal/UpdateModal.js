import ModalLayout from "./Modal";
import styles from "@/styles/Modal.module.css";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react/cjs/react.development";
import { routeToHome } from "common";
import { API_URL } from "config";
import axios from "axios";
export default function UpdateModal({ id, attributes, close }) {
  const [message, setMessage] = useState("정말 수정하시겠습니까?");
  const [isSuccess, setIsSuccess] = useState(false);
  const handleUpdate = async () => {
    await axios
      .put(`${API_URL}/api/users/${id}`, { data: attributes })
      .then((res) => {
        if (res.status === 200) {
          setMessage("정상적으로 처리되었습니다.");
          setIsSuccess(true);
        }
      })
      .catch((error) => {
        console.log(error.response);
        setMessage(
          `Error Code ${error.response.status}. 콘솔창을 확인해주세요.`
        );
      });
  };
  return (
    <ModalLayout>
      <div className={styles.alert}>
        <AiOutlineClose className={styles.icon} onClick={close} />
        <p>{message}</p>
        <button
          className={styles.btn}
          onClick={isSuccess ? routeToHome : handleUpdate}
        >
          OK
        </button>
      </div>
    </ModalLayout>
  );
}
