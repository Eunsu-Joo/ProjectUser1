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
    router.push(`/edit/${id}`);
    setUser(data);
  };
  return (
    <button className="btn" onClick={id ? handleEdit : null}>
      <FiEdit />
      Edit
    </button>
  );
};

export const EnrollBtn = () => {
  const router = useRouter();
  return (
    <button className="staticBtn" onClick={() => router.push(`/signup`)}>
      <FaRegHeart />
      Enroll
    </button>
  );
};

export const TopBtn = () => {
  return (
    <div className="top">
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
