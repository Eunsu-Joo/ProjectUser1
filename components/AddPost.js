import { useRouter } from "next/router";
import postsStore from "lib/posts";
import styled from "styled-components";
import { BackBtn } from "./Btn";
import { BsCheckCircle } from "react-icons/bs";
const AddPosts = styled.div`
  padding: 2rem 0 0;
  width: 60%;
  margin: 0 auto;
  h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  .inputBox {
    input {
      width: 100%;
      margin-bottom: 1rem;
      background-color: #dfe6e9;
      &:focus {
        background-color: #f1f6f7;
      }
    }
  }
  .btns {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }
  textarea {
    background-color: #dfe6e9;
    width: 100%;
    height: 300px;
    border-radius: 4px;
    padding-left: 1rem;
    font-size: 1rem;
    border: 0;
    padding-top: 1rem;
    font-family: "Poppins", sans-serif;
    &:focus {
      outline: 0;
    }
  }
  textarea:focus {
    background-color: #f1f6f7;
  }
`;

export default ({ change }) => {
  const router = useRouter();
  const { updatePosts } = postsStore();

  return (
    <AddPosts>
      <h3>Add Posts</h3>
      <div className="postContainer">
        <div className="inputBox">
          <input type="text" placeholder="write here title" name="title" />
        </div>
        <textarea placeholder="write here contents" name="body"></textarea>
      </div>
      <div className="btns">
        <BackBtn func={() => change()} />
        <button className="btn">
          {" "}
          <BsCheckCircle />
          Submit
        </button>
      </div>
    </AddPosts>
  );
};
