
const Post = () => {
    return (
        <div className="text-gray-500 card w-96 bg-[#ffffff] shadow">
            <div className="card-body p-5">
                <div className="flex items-center gap-x-3">
                    <div>
                        <div className="avatar">
                            <div className="w-10 mask mask-squircle">
                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="card-title">Post...</h2>
                    </div>
                </div>
                <div>
                    <p className="">Desc : Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, dolores.</p>
                </div>

                <p>post on : 26/11/2020</p>
                <p>last updated : 23/11/2020</p>
                <div className="flex justify-end gap-x-4">
                    <div className="card-actions justify-end">
                        <button className="btn btn-neutral btn-sm" onClick={() => document.getElementById('my_modal_3').showModal()}>Edit</button>
                    </div>
                    <div className="card-actions justify-end">

                        <button className="btn btn-error btn-sm" onClick={() => document.getElementById('my_modal_1').showModal()}>Delete</button >
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Post