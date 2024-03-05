import axios from 'axios'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
const Post = ({ data, action = false }) => {
    let userId = useSelector(e => e.user?.userId);
    return (
        <div className="text-gray-500 card w-96 bg-[#ffffff] shadow">
            <div className="card-body p-5">
                <div className="flex items-center gap-x-3">
                    <div>
                        <div className="avatar ">
                            <div className="w-10 mask mask-squircle">

                                <div title={data?.author} className='bg-[#23a8fa] cursor-pointer text-white  w-10 h-10 flex justify-center items-center shadow-xl'>
                                    <p className='text-xl font-bold w-fit m-0 p-0 text-center uppercase'>{data?.author[0]}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="card-title capitalize">{data?.author.split(' ')[0]}</h2>
                    </div>
                </div>
                <div>
                    <p className="">Desc : {data?.post}</p>
                </div>

                <p>post on : {new Date(data?.created_date).toDateString()}</p>
                <p>last updated : {new Date(data?.update_date).toDateString()}</p>
                {
                    !action
                        === userId ? <div className="flex justify-end gap-x-4">
                        <div className="card-actions justify-end">
                            <button className="btn btn-neutral btn-sm" onClick={() => document.getElementById('my_modal_3').showModal()}>Edit</button>
                        </div>
                        <div className="card-actions justify-end">

                            <button className="btn btn-error btn-sm" onClick={() => document.getElementById('my_modal_1').showModal()}>Delete</button >
                        </div>
                    </div> : <></>
                }


            </div>
        </div>
    )
}

export default Post