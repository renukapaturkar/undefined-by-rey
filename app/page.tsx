import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Renuka Paturkar
      </h1>
      <p className="mb-4">
        {`I build interfaces and think a lot about how people experience them.
I work in frontend engineering, with a focus on UI/UX, clarity, and good product judgment.
I also write and research — mostly to make sense of technology, design, and the systems we build around them.`}

      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
