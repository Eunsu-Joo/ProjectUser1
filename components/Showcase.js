import styled from "styled-components";

const Wrap = styled.div`
  height: 500px;
  width: 100%;
  background: url(${(props) => props.bg}) no-repeat center center;
  color: #fff;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  &::before {
    content: "";
    position: absolute;
    top: -10px;
    left: 0;
    width: 100%;
    height: 510px;
    background-color: rgba(0, 0, 0, 0.7);
  }
  * {
    z-index: 20;
  }
  h1 {
    font-size: 40px;
    margin-bottom: 0;
  }
`;

export default function Showcase({ bg, title }) {
  return (
    <Wrap bg={bg}>
      <h1>{title}</h1>
      <h2>Find the posts and some information</h2>
    </Wrap>
  );
}
