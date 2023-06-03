import Link from "next/link";

export default function Home() {
  return ( <>
  <header>
    <h1 className="text-2x1">Todos</h1>
  <Link href="/new">New</Link>
    </header>
  <ul></ul>
  </>
  )
}
