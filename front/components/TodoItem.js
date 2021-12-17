import styles from "@/styles/Todos.module.css";

const TodoItem = ({ todo }) => {
  const { userId, title } = todo;
  return (
    <div className={styles.todo}>
      <span>{userId}</span>
      <p>{title}</p>
    </div>
  );
};
export default TodoItem;
