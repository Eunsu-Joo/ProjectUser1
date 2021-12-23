import _, { range } from "lodash";
import styles from "@/styles/Pagination.module.css";

export default function Pagination({ ...pages }) {
  const { pageNumber, handlePagination, currentPage, data } = pages;
  const paginationNumber = Math.ceil(data.length / pageNumber);
  const numbers = range(1, paginationNumber + 1);
  return (
    <div className={styles.pagination}>
      <span
        onClick={() =>
          currentPage === 1 ? false : handlePagination(currentPage - 1)
        }
      >
        ◀
      </span>
      {numbers.map((page) => (
        <span
          key={page}
          className={page === currentPage ? `${styles.current}` : null}
          onClick={() => handlePagination(page)}
        >
          {page}
        </span>
      ))}
      <span
        onClick={() =>
          currentPage < numbers.length
            ? handlePagination(currentPage + 1)
            : false
        }
      >
        ▶
      </span>
    </div>
  );
}
