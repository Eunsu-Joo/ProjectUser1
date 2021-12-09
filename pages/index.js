import Layout from "@/components/Layout";
import { userSelector, userState } from "lib/store";
import { useRecoilState, useRecoilValueLoadable,useRecoilValue } from "recoil";
const [data,setData]= useRecoilState(userState);
export default function Home() {

  return <Layout>Hello</Layout>;
}

// export async function getStaticProps(){
//   const res= await fetch(`https://jsonplaceholder.typicode.com/users`);
//   const users= await res.json();
//   return {
//     props:{users}
//   }
// }
