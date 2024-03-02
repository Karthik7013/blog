
const DeletePost = () => {
    return (
        <>
                 <dialog id="my_modal_1" className="modal">
                <div className="modal-box p-5">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Delete</h3>
                    <div className="mt-3 flex flex-col gap-y-3">
             <p className="py-4">Press Confirm to Delete Post</p>
                        <div className="flex justify-end">
                            <button className="btn btn-error btn-sm">Confirm</button>
                        </div>
                    </div>

                </div>
            </dialog>
        </>

    )
}

export default DeletePost