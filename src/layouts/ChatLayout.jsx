import Message from "../components/Message"
import MessageInput from "../components/MessageInput"

const ChatLayout = () => {
    return (
        <>
            <div className="bg-slate-100 rounded-md mx-auto h-[88vh] flex flex-col">
                <div className="flex gap-3 p-2">
                    <div className=" flex items-center">
                        <div className="avatar">
                            <div className="w-8 rounded-full">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <h1>User Name</h1>
                    </div>
                </div>

                <div className="flex-grow overflow-y-auto px-3 py-2 space-y-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                </div>

                <MessageInput />
            </div>
        </>
    )
}

export default ChatLayout