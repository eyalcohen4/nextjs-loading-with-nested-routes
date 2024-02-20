import { Suspense } from "react"
import Link from "next/link"


export default async function Page() {
  return <Content />
}

async function Content() {
  await sleep(2000)

  return (
    <section className="container grid items-center gap-8 pb-8 pt-6 md:py-10">
      <Link href={`/subroute/${Math.random()}`}>Dynamic</Link>
      <Link href={`/subroute`}>Static</Link>
    </section>
  )
}

export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms))
