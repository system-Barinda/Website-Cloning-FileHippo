
function Footer(){
    return (
        <>
        <div className="border h-35 w-full flex flex-col ">
            <div className=" flex flex-col h-[50%]  gap-3">
            <div className="upper  w-[60%] h-[40%] flex gap-10 text-blue-400 ml-13 mt-2 items-end">
                <p className="cursor-pointer">About</p>
                <p className="cursor-pointer">Contact</p>
                <p className="cursor-pointer">Advertise</p>
                <p className="cursor-pointer">Sitemap</p>
            </div>
            <div className="upper  w-[55%] h-[40%] flex gap-2  ml-10 justify-evenly items-center">
                <p>Terms and conditions</p>
                <p>Cookie policy</p>
                <p>Privacy policy</p>
                <p>Legal information</p>
                <p>Cookie settings</p>
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