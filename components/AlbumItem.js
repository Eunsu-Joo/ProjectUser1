import { useState } from "react";

import styles from "@/styles/Albums.module.css";

export default ({ data }) => {
  const { userId, title } = data;

  return (
    <>
      <div className={styles.albumItem}>
        <div className={styles.imgBox}>
          <img src={`/images/user${userId}.jpg`} alt="" />
        </div>
        <div className={styles.desc}>
          <h3>
            UserID :<span>{userId}</span>
          </h3>
          <h4>{title}</h4>
        </div>
      </div>
    </>
  );
};
