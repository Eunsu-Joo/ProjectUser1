import ModalLayout from "./Modal";
import styles from "@/styles/Modal.module.css";
import { AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";
import { API_URL } from "config";
import { routeToHome } from "common";
export default function DeleteModal({ close, id }) {
  const router = useRouter();
  const [message, setMessage] = useState("정말 삭제하시겠습니까?");
  const [isSuccess, setIsSuccess] = useState(false);
  const handleDelete = async () => {
    await axios
      .delete(`${API_URL}/api/users/${id}`)
      .then((res) => {
        if (res.status === 200) {
          setMessage("정상적으로 처리되었습니다.");
          setIsSuccess(true);
        }
      })
      .catch((error) => {
        console.log(error);
        setMessage(`애러가 발생했습니다. 콘솔창을 확인해주세요`);
      });
  };
  // const routeToHome = () => {
  //   close();
  //   if (router.pathname === "/") {
  //     router.reload(window.location.pathname);
  //   } else {
  //     router.replace("/");
  //   }
  // };
  return (
    <ModalLayout>
      <div className={styles.alert}>
        <AiOutlineClose className={styles.icon} onClick={close} />
        <p>{message}</p>
        <button
          className={styles.btn}
          onClick={isSuccess ? routeToHome : handleDelete}
        >
          OK
        </button>
      </div>
    </ModalLayout>
  );
}
