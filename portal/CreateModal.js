import ModalLayout from "./Modal";
import styles from "@/styles/Modal.module.css";
import { AiOutlineClose } from "react-icons/ai";
export default function CreateModal({ children }) {
  return (
    <ModalLayout>
      <div className={styles.alert}>
        <AiOutlineClose className={styles.icon} />
        <p>{children}</p>
        <button className={styles.btn}>OK</button>
      </div>
    </ModalLayout>
  );
}
