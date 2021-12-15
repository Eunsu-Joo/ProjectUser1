import { devtools } from "zustand/middleware";
import create from "zustand";

const store = devtools(
  (set, get) => ({
    posts: [],
    setPosts: (data) => {
      set({ posts: data });
    },
    updatePosts: (values, userId) => {
      const { posts } = get((state) => state);
      const ids = posts.map((user) => user.id);
      const lastId = parseInt(ids[ids.length - 1]);
      set({ posts: [...posts, { ...values, id: lastId + 1, userId: userId }] });
    },
  }),
  "postStore"
);

const postsStore = create(store);

export default postsStore;
