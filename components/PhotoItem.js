import Image from "next/image";
import styled from "styled-components";
const Item = styled.div`
  img {
    width: 200px;
    height: 200px;
  }
  p {
    fontsize: 0.5em;
  }
`;
export default function PhotoItem({ photo }) {
  const { url, title } = photo;
  return (
    <Item>
      <img src={url} alt="" />
    </Item>
  );
}
