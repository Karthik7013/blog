

const EditPost = () => {
    return (
        <>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box p-5">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Edit</h3>
                    <div className="mt-3 flex flex-col gap-y-3">
                        <textarea placeholder="Bio" className="textarea textarea-bordered textarea-md w-full" ></textarea>
                        <div className="flex justify-end">
                            <button className="btn btn-neutral btn-sm">Update</button>
                        </div>
                    </div>

                </div>
            </dialog>
        </>
    )
}

export default EditPost