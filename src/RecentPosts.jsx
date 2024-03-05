import Post from "./Post"
import axios from "axios";
import { useState, useEffect } from "react";
const RecentPosts = () => {
    let [popularPost, setPopularPost] = useState();

    async function fetchPost() {
        let res = await axios.get('http://localhost:8000/post/all');
        setPopularPost(res.data.posts)
    }
    useEffect(() => {
        fetchPost()
    }, [])

    return (
        <section className="py-10 flex flex-col justify-center bg-slate-100 gap-y-7 pt-0">
            <h1 className="text-center font-black text-3xl m-0 p-0">Popular Posts</h1>
            <div className="flex px-3 flex-wrap gap-3 justify-center">
                {
                    popularPost && popularPost.map((e) => <Post key={e._id} data={e} />)
                }
            </div>
        </section>
    )
}

export default RecentPosts