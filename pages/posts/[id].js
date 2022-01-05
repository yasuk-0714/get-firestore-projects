import { db } from "../../firebase/firebase"
import Link from "next/link"
// import { doc, getDoc } from "firebase/firestore"

export default function post({ post }) {
  return (
    <div>
      <h3 style={{color: "green"}}>POST(投稿)[id]{post.id}</h3>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <Link href="/">
        <a>ホームへ戻る</a>
      </Link>
    </div>
  );
}

export async function getServerSideProps({params}) {
  const post = params
  // const userDocumentRef = doc(db, 'posts', `${post.id}`);
  // getDoc(userDocumentRef).then((documentSnapshot) => {
  //   console.log(documentSnapshot.data());
  // }).catch((e) => {
  //   console.log(e.message)
  // });
  // if (!Object.keys(post).length) {
  //   return {
  //     notFound: true,
  //   };
  // }
  return { props: { post } };
}