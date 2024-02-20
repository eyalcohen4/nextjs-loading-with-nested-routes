export const Subroute = async () => {
  await sleep(2000)

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div>Static Subroute</div>
    </section>
  )
}

export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms))

export default Subroute
