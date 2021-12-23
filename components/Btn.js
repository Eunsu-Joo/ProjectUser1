import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import { TiArrowBack } from "react-icons/ti";
import { useRouter } from "next/router";
import useStore from "lib/default";
import useModal from "@/hooks/useModal";
import DeleteModal from "portal/DeleteModal";
import CreateModal from "portal/CreateModal";
export const DeleteBtn = ({ id }) => {
  const { onOpenModal, open, closeModal } = useModal();
  return (
    <>
      <button className="btn" onClick={() => onOpenModal(!open)}>
        <RiDeleteBin6Line /> Delete
      </button>
      {open && <DeleteModal close={closeModal} id={id} />}
    </>
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
  const routeToEdit = () => {
    router.push("/signup");
  };
  return (
    <button
      className="btn"
      onClick={router.pathname !== "/signup" ? routeToEdit : undefined}
    >
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
    <button className="btn" onClick={func}>
      <TiArrowBack />
      Back
    </button>
  );
};
