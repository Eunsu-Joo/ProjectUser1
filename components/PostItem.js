import styled from "styled-components";
import axios from "axios";
import { useRef, useState } from "react";
import postsStore from "lib/posts";
import CommentItem from "./CommentItem";
const PostItem = styled.div`
  margin-bottom: 1rem;
  background-color: #f9f9f9;
  display: flex;
  position: relative;
  h3 {
    width: 30%;
    height: 100%;
    background-color: #636e72;
    color: #fff;
    text-align: left;
    font-size: 1.3rem;
    font-family: "Playfair Display", serif;
    margin-top: 2rem;
    span {
      font-size: 7rem;
    }
  }
  input {
    width: 70%;
  }
  .contents {
    width: 70%;
    padding: 2rem 0rem 2rem 2rem;
    h4 {
      margin: 1rem 0;
      font-size: 1.2rem;
      font-weight: 700;
    }
    p {
      margin-bottom: 1rem;
    }
    .btn {
      margin-left: 1rem;
    }
    .comment {
      font-weight: 700;
      display: inline-block;
      margin: 1rem 0;
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

export default ({ post }) => {
  const { id, body, title } = post;
  const [isCheck, setIsCheck] = useState(false);
  const [isSend, setIsSend] = useState(false);
  const [comments, setComments] = useState(null);
  const sendRequest = async () => {
    console.log(comments);
    setIsCheck(!isCheck);
    if (isSend) return;
    await axios
      .get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      .then((res) => setComments(res.data))
      .then(() => {
        setIsSend(true);
      });
  };
  return (
    <PostItem>
      <h3>
        Post Number / <span>{id}</span>{" "}
      </h3>
      <div className="contents">
        <h4>{title}</h4>
        <p>{body}</p>
        <form action="" autoComplete="off">
          <input type="text" placeholder="name" name="name" />
          <input type="text" placeholder="email" name="email" />
          <input type="text" placeholder="comment" name="body" />
          <button className="btn">Comment</button>
        </form>
        <span className="comment" onClick={sendRequest}>
          {isCheck ? `Hide Comments` : `Show Comments`}
        </span>
        {comments &&
          comments.map((comment) => (
            <CommentItem comment={comment} key={comment.id} isCheck={isCheck} />
          ))}
      </div>
    </PostItem>
  );
};
