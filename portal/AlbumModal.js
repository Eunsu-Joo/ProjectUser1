import ModalLayout from "./Modal";
import styles from "@/styles/Modal.module.css";
import { AiOutlineClose } from "react-icons/ai";
export default function AlbumModal({ close, children }) {
  return (
    <ModalLayout>
      <div className={styles.albumContainer}>
        <AiOutlineClose className={styles.icon} onClick={close} />
        {children}
      </div>
    </ModalLayout>
  );
}
