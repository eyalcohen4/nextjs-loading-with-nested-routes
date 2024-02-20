export const Subroute = async ({ params: { id } }) => {
  await sleep(2000)

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div>Dynamic Subroute {id}</div>
    </section>
  )
}

export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms))

export default Subroute
