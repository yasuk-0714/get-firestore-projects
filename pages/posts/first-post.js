import Link from "next/link";

export default function FirstPost() {
  return (
    <>
      <div>
        <h2>First post</h2>
        <Link href="/">
          <a>ホーム</a>
        </Link>
      </div>
    </>
  )
}