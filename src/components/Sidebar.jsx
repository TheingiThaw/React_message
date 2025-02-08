import Conversation from './Conversation';
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'

const Sidebar = () => {

    console.log('sidebar');

    return (
        <>
            <div className='w-96 h-[89vh] flex flex-col'>
                <div className=' w-9/12 mx-auto text-base-content flex justify-between'>
                    <h1 className='text-2xl font-bold'>Chat</h1>
                    <EllipsisVerticalIcon className='h-5 w-5' />
                </div>

                <div className="w-9/12 my-5 mx-auto">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input w-24 md:w-auto bg-slate-100" />
                    </div>
                </div>

                <div className='overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200'>
                    {[...Array(15)].map((_, index) => (
                        <Conversation key={index} />

                    ))}

                </div>
            </div>
        </>
    )
}

export default Sidebar;