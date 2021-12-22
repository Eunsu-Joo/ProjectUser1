import styled from "styled-components";

const Comment = styled.div`
  margin-bottom: 0.5rem;
  .title {
    font-weight: 700;
    margin-bottom: 0.5em;
  }
`;
export default function CommentItem({ isCheck, comment }) {
  const { name, email, body } = comment;
  return (
    <>
      {isCheck ? (
        <Comment>
          <p className="title">Name : {name}</p>
          <p>Email : {email}</p>
          <p>{body}</p>
        </Comment>
      ) : null}
    </>
  );
}
