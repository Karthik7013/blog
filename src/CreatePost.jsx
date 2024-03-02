
const CreatePost = () => {
    return (<>
     
        <dialog id="create_post" className="modal">
            <div className="modal-box p-5">
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h3 className="font-bold text-center text-2xl">Create a Post</h3>
                <div className="mt-3 flex flex-col gap-y-3">
                    <textarea placeholder="Bio" className="textarea textarea-bordered textarea-md w-full" ></textarea>
                    <div className="flex justify-end">
                        <button className="btn btn-neutral btn-block">Post</button>
                    </div>
                </div>

            </div>
        </dialog></>
    )
}

export default CreatePost