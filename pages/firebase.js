import Link from "next/link";
import useFetchAllPosts from "../components/hooks/useFetchAllPosts";

export default function Firebase() {

  const { posts } = useFetchAllPosts();

  return (
    <>
      <div>
        {posts.map((post) => (
          <div key={post.id}>
            <ul>
              <Link href={`/posts/${post.id}`}><a><li>{post.title}</li></a></Link>
              <li>{post.content}</li>
            </ul>
          </div>
        ))}
      </div>
      <div>
        <Link href="/">
          <a>ホームへ戻る</a>
        </Link>
      </div>
    </>
  )
}
