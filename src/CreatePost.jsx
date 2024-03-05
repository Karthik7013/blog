import axios from "axios";
import { useSelector } from "react-redux";
import { useState } from "react"
const CreatePost = () => {
    let [post, setPost] = useState('')
    let author = useSelector(e => e.user?.username);
    let token = JSON.parse(localStorage.getItem('token'))?.token;

    const handlePost = async () => {
        if (token) {
            let res = await axios.post('http://localhost:8000/post/add', { post,author }, {
                headers: {
                    "authorization": "Bearer" + " " + token
                }
            })
            if (res.status === 200) {
                alert('post added !')
            }
        } else {
            console.log('token invalid')
        }

    }
    function handleChange(e) {
        let { name, value } = e.target;
        if (name === 'task') {
            setPost(value)
        }
    }
    return (<>

        <dialog id="create_post" className="modal">
            <div className="modal-box p-5">
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h3 className="font-bold text-center text-2xl">Create a Post</h3>
                <div className="mt-3 flex flex-col gap-y-3">
                    <textarea name="task" onChange={handleChange} value={post} placeholder="Bio" className="textarea textarea-bordered textarea-md w-full" ></textarea>
                    <div className="flex justify-end">
                        <button className="btn btn-neutral btn-block" onClick={handlePost}>Post</button>
                    </div>
                </div>

            </div>
        </dialog></>
    )
}

export default CreatePost