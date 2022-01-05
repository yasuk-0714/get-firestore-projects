import Link from "next/link"

export default function user({ user }) {
  return (
    <div>
      <h1>ユーザー{user.id}</h1>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <Link href="/">
        <a>ホームへ戻る</a>
      </Link>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const userId = params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  const user = await res.json();
  if (!Object.keys(user).length) {
    return {
      notFound: true,
    };
  }
  return { props: { user } };
}