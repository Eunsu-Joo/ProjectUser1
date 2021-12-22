import ModalLayout from "./Modal";
import styles from "@/styles/Modal.module.css";
import { AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/router";
export default function DeleteModal({ close, children }) {
  const router = useRouter();
  const closeModal = () => {
    close();
    router.push("/");
  };
  return (
    <ModalLayout>
      <div className={styles.alert}>
        <AiOutlineClose className={styles.icon} />
        <p>{children}</p>
        <button className={styles.btn} onClick={closeModal}>
          OK
        </button>
      </div>
    </ModalLayout>
  );
}
