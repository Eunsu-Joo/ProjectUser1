import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import { TiArrowBack } from "react-icons/ti";
import { useRouter } from "next/router";
import useStore from "lib/default";
export const DeleteBtn = ({ id, mg }) => {
  const { remove } = useStore();
  return (
    <button
      className="btn"
      style={mg ? { marginRight: "1rem" } : null}
      onClick={() => remove(id)}
    >
      <RiDeleteBin6Line /> Delete
    </button>
  );
};

export const EditBtn = ({ data, id }) => {
  const router = useRouter();
  const { setUser } = useStore();
  const handleEdit = () => {
    router.push(`/users/${id}/edit`);
    setUser(data);
  };
  return (
    <button className="btn" onClick={id && handleEdit}>
      <FiEdit />
      Edit
    </button>
  );
};

export const EnrollBtn = () => {
  const router = useRouter();
  return (
    <button className="btn" onClick={() => router.push(`/signup`)}>
      <FaRegHeart />
      Enroll
    </button>
  );
};

export const TopBtn = () => {
  const handleToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="top" onClick={handleToTop}>
      <IoIosArrowUp />
      TOP
    </div>
  );
};
export const BackBtn = ({ func }) => {
  return (
    <div className="btn" onClick={func}>
      <TiArrowBack />
      Back
    </div>
  );
};
