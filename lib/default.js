import axios from "axios";
import create from "zustand";

const useStore = create((set, get) => ({
  data: null,
  isLoading: true,
  error: null,
  user: null,
  setUser: (user) => {
    set({ user: user });
  },
  setData: (users) => {
    set({ data: users });
  },
  create: (userInfo, imgUrl) => {
    const { data } = get((state) => state);
    const ids = data.map((user) => user.id);
    const lastId = parseInt(ids[ids.length - 1]);
    set({ data: [...data, { ...userInfo, id: lastId + 1, img: imgUrl }] });
  },
  remove: (userId) => {
    const { data } = get((state) => state);
    set({ data: data.filter((user) => user.id !== userId) });
  },
  update: (info, id) => {
    const { data } = get((state) => state);
    const newData = data.map((user) =>
      user.id === parseInt(id) ? { ...user, ...info } : user
    );
    set({ data: newData });
  },
  updateImg: (id, url) => {
    const { data } = get((state) => state);
    const newData = data.map((user) =>
      user.id === parseInt(id) ? { ...user, img: url } : user
    );
    set({ data: newData });
  },
}));

export default useStore;
