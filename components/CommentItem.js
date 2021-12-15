import styled from "styled-components";

const CommentItem = styled.div`
  margin-bottom: 0.5rem;
  .title {
    font-weight: 700;
    margin-bottom: 0.5em;
  }
`;
export default ({ isCheck, comment }) => {
  const { name, email, body } = comment;
  return (
    <>
      {isCheck ? (
        <CommentItem>
          <p className="title">Name : {name}</p>
          <p>Email : {email}</p>
          <p>{body}</p>
        </CommentItem>
      ) : null}
    </>
  );
};
