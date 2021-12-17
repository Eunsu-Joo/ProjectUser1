import axios from "axios";
import create from "zustand";

const useStore = create((set, get) => ({
  data: null,
  isLoading: true,
  error: null,
  user: null,
  isPage: true,
  setIsPage: () => {
    const { isPage } = get((state) => state);
    set({ isPage: !isPage });
  },
  setUser: (user) => {
    set({ user: user });
  },
  setData: (users) => {
    set({ data: users });
  },
  remove: (userId) => {
    const { data } = get((state) => state);
    set({ data: data.filter((user) => user.id !== userId) });
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
