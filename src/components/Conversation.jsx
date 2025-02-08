import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'

const Conversation = () => {
    return (
        <div className="hover:bg-slate-100 cursor-pointer py-2">
            <div className='w-11/12 mx-auto grid grid-cols-5'>
                <div>
                    <div className="avatar online">
                        <div className="w-12 rounded-full">
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                </div>

                <div className='block col-span-3'>
                    <div className='flex justify-between'>
                        <h2>John Doe</h2>
                        <p className=' text-xs mt-1 text-gray-500'>10:30 p.m</p>
                    </div>
                    <p>I will send the document</p>
                </div>

                <div className='flex my-auto justify-end'>
                    <EllipsisVerticalIcon className='h-6 w-6' />
                </div>
            </div>
        </div>
    )
}

export default Conversation