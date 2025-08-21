
function Footer(){
    return (
        <>
        <div className="border h-35 w-full flex flex-col ">
            <div className=" flex flex-col h-[50%]  gap-3">
            <div className="upper  w-[60%] h-[40%] flex gap-10 text-blue-400 ml-13 mt-2 items-end">
                <p className="cursor-pointer hover:underline border-l-1 border-gray-400 pl-1 ">About</p>
                <p className="cursor-pointer hover:underline border-l-2 border-gray-400 pl-1">Contact</p>
                <p className="cursor-pointer hover:underline border-l-2 border-gray-400 pl-1">Advertise</p>
                <p className="cursor-pointer hover:underline border-l-2 border-gray-400 pl-1">Sitemap</p>
            </div>
            <div className="upper  w-[55%] h-[40%] flex gap-2  ml-10 justify-evenly items-center  text-blue-400">
                <p className="hover:underline border-l-2 border-gray-400 pl-1">Terms and conditions</p>
                <p className="hover:underline border-l-2 border-gray-400 pl-1">Cookie policy</p>
                <p className="hover:underline border-l-2 border-gray-400 pl-1">Privacy policy</p>
                <p className="hover:underline border-l-2 border-gray-400 pl-1">Legal information</p>
                <p className="hover:underline border-l-2 border-gray-400 pl-1">Cookie settings</p>
            </div>
            </div>
            <div className="buttom bg-blue-500 w-full h-[60%] mt-2 flex items-center justify-center">
                <div className="w-120 text-[13px] text-wrap text-center">
                    <p className="text-white cursor-cell">Softonic International, S.A. holds the license to use the name and logo of Filehippo.
                       All rights reserved to their respective owners.
                       </p>
                </div>
            </div>
        </div>
        </>
    )
}
export default Footer