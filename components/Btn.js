import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import { TiArrowBack } from "react-icons/ti";
import { useRouter } from "next/router";
import useStore from "lib/default";
import useModal from "@/hooks/useModal";
import DeleteModal from "portal/DeleteModal";
import axios from "axios";
import { API_URL } from "config";
import { useState } from "react";
export const DeleteBtn = ({ id, data }) => {
  const { remove } = useStore();
  const { onOpenModal, open, closeModal } = useModal();
  const [message, setMessage] = useState(null);
  const removeData = async () => {
    const response = await axios
      .delete(`${API_URL}/api/users/${id}`)
      .then((res) => {
        if (res.status === 200) {
          setMessage("정상적으로 처리되었습니다.");
        } else if (res.status === 404) {
          setMessage("애러가 발생했습니다. 콘솔창을 확인해주세요.");
        }
      })
      .then(() => onOpenModal(!open));
  };
  const removeItem = () => {
    remove(id);
  };
  return (
    <>
      <button className="btn" onClick={data ? removeData : removeItem}>
        <RiDeleteBin6Line /> Delete
      </button>
      {open && <DeleteModal close={closeModal}>{message}</DeleteModal>}
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
    <button className="btn" onClick={func}>
      <TiArrowBack />
      Back
    </button>
  );
};
