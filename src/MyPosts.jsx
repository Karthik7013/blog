import Post from "./Post"

const MyPosts = () => {
  return (
    <section className="py-10 flex flex-col justify-center bg-slate-100 gap-y-7 pt-0">
    <h1 className="text-center font-black text-3xl m-0 p-0">My Posts</h1>
    <div className="flex px-3 flex-wrap gap-3 justify-center">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
    </div>
</section>
  )
}

export default MyPosts