function ContainerApp(){
    return (
        <>
        <div className="container-box-App border h-200 w-full flex">
             <div className="cotegories  m-1 h-auto w-1/2 flex flex-col">
               <h1 className="ml-8 font-bold text-2xl">Categories</h1>
               <div className="App-menu  h-[40%] mt-4">

                   <table  className="w-[90%] border-none m-1">

                    <tr className="border-b-2 border-b-gray-200 h-10 m-1">
                        <td className="cursor-pointer hover:underline">Browsers</td>
                        <td className="cursor-pointer hover:underline">Desktop</td>
                    </tr>

                    <tr className="border-b-2 border-b-gray-200 h-10 m-1">
                        <td className="cursor-pointer hover:underline">File sharing</td>
                        <td className="cursor-pointer hover:underline">Games</td>
                    </tr>
                   <tr className="border-b-2 border-b-gray-200 h-10 m-1">
                        <td className="cursor-pointer hover:underline">Learning</td>
                        <td className="cursor-pointer hover:underline">Leisure</td>
                    </tr>
                    <tr className="border-b-2 border-b-gray-200 h-10 m-1">
                        <td className="cursor-pointer hover:underline">Maps & Travel</td>
                        <td className="cursor-pointer hover:underline">Multimedia</td>
                    </tr>
                    <tr className="border-b-2 border-b-gray-200 h-10 m-1">
                        <td className="cursor-pointer hover:underline">Office & News</td>
                        <td className="cursor-pointer hover:underline">Personalization</td>
                    </tr>
                    <tr className="">
                        <td className="border-b-2 border-b-gray-200 h-10 m-1 cursor-pointer hover:underline">Security & VPN</td>
                        <td className="border-b-2 border-b-gray-200 h-10 m-1 cursor-pointer hover:underline ">Social & Messaging</td>
                    </tr>
                    <tr >
                        <td className="border-b-2 border-b-gray-200 h-10 m-1 cursor-pointer hover:underline">System Tuning & Utilities</td>
                        
                    </tr>
                   </table>
               </div>
             </div>
             <div className="popular border m-1 h-auto w-1/2 flex flex-col">
             <h1 className="ml-8 font-bold text-2xl">Popular</h1>
             <div className="App-menu  h-[60%] mt-4 border">

             </div>

             </div>
        </div>
        </>
    );
}
export default ContainerApp;