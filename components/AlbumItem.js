import useModal from "@/hooks/useModal";
import styles from "@/styles/Albums.module.css";
import axios from "axios";
import AlbumModal from "portal/AlbumModal";
import { useState } from "react";
import PhotoItem from "./PhotoItem";
export default function AlbumItem({ data }) {
  const { userId, title, id } = data;
  const { open, onOpenModal, closeModal } = useModal();
  const [isSend, setIsSend] = useState(false);
  const [photos, setPhotos] = useState(null);
  const sendPhotos = async () => {
    if (isSend) return;
    await axios
      .get(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
      .then((res) => setPhotos(res.data))
      .then(() => setIsSend(true))
      .catch((error) => console.log(error));
  };
  const handleClick = () => {
    onOpenModal(!open);
    if (isSend) false;
    sendPhotos();
  };
  return (
    <>
      <div className={styles.albumItem} onClick={handleClick}>
        <div
          className={styles.imgBox}
          style={{
            backgroundImage: `url(/images/user${
              id < 10 ? id : id.toString().slice(-1)
            }.jpg)`,
          }}
        ></div>
        <div className={styles.desc}>
          <h3>
            UserID :<span>{userId}</span>
          </h3>
          <h4>{title}</h4>
        </div>
      </div>
      {open && (
        <AlbumModal close={closeModal} active>
          {photos ? (
            photos.map((photo) => <PhotoItem key={photo.id} photo={photo} />)
          ) : (
            <img
              src="/loading.gif"
              alt=""
              width={300}
              style={{ textAlign: "center" }}
            />
          )}
        </AlbumModal>
      )}
    </>
  );
}
