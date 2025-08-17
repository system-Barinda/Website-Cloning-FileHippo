import avastcleanuplogo from '../images/avast-cleanup-logo.png'
import projectigilogo from '../images/project-igi-logo.jpeg'
import vlc64bit from '../images/vlc-64-bit.png'
import chrome from '../images/chrome.png'
import adobeacrobate from '../images/adobe-acrobate.png'
import avgpctuneup from '../images/avg-pc-tuneup.jpeg'

function ContainerApp(){
    return (
        <>
        <div className="container-box-App border h-210 w-full flex">
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
             <div className="popular  m-1 h-auto w-1/2 flex flex-col">
             <h1 className="ml-8 font-bold text-2xl">Popular</h1>
             <div className="App-menu  h-auto mt-4  w-[60%]">
                  <table  className="w-[90%] border-none m-1">

                    <tr >
                        <td className="border-b-2 border-b-gray-200 h-10 m-1 cursor-pointer hover:underline flex gap-6  items-center"> <img src={avastcleanuplogo} className='h-8' /> <p>vast free Antivirus</p></td>
                        
                    </tr>

                      <tr >
                        <td className="border-b-2 border-b-gray-200 h-10 m-1 cursor-pointer hover:underline flex gap-6  items-center"> <img src={projectigilogo} className='h-8' /> <p>Project IGI</p></td>
                        
                    </tr>

                      <tr >
                        <td className="border-b-2 border-b-gray-200 h-10 m-1 cursor-pointer hover:underline flex gap-6  items-center"> <img src={vlc64bit} className='h-8' /> <p>VLS Media Players 64-bit</p></td>
                        
                    </tr>

                      <tr >
                        <td className="border-b-2 border-b-gray-200 h-10 m-1 cursor-pointer hover:underline flex gap-6  items-center"> <img src={avgpctuneup} className='h-8' /> <p>AVG Antivirus FREE</p></td>
                        
                    </tr>

                      <tr >
                        <td className="border-b-2 border-b-gray-200 h-10 m-1 cursor-pointer hover:underline flex gap-6  items-center"> <img src={avastcleanuplogo} className='h-8' /> <p>vast free Antivirus</p></td>
                        
                    </tr>

                      <tr >
                        <td className="border-b-2 border-b-gray-200 h-10 m-1 cursor-pointer hover:underline flex gap-6  items-center"> <img src={avastcleanuplogo} className='h-8' /> <p>2007 Microsoft Office Add-in</p></td>
                        
                    </tr>

                      <tr >
                        <td className="border-b-2 border-b-gray-200 h-10 m-1 cursor-pointer hover:underline flex gap-6  items-center"> <img src={avastcleanuplogo} className='h-8' /> <p>WinRar 64-bit</p></td>
                        
                    </tr>

                      <tr >
                        <td className="border-b-2 border-b-gray-200 h-10 m-1 cursor-pointer hover:underline flex gap-6  items-center"> <img src={avastcleanuplogo} className='h-8' /> <p>CCleaner</p></td>
                        
                    </tr>

                      <tr >
                        <td className="border-b-2 border-b-gray-200 h-10 m-1 cursor-pointer hover:underline flex gap-6  items-center"> <img src={chrome} className='h-8' /> <p>Google Chrome</p></td>
                        
                    </tr>
                    
                      <tr >
                        <td className="border-b-2 border-b-gray-200 h-10 m-1 cursor-pointer hover:underline flex gap-6  items-center"> <img src={adobeacrobate} className='h-8' /> <p>Adobe Acrobat Reader DC</p></td>
                        
                    </tr>

                      <tr >
                        <td className="border-b-2 border-b-gray-200 h-10 m-1 cursor-pointer hover:underline flex gap-6  items-center"> <img src={avastcleanuplogo} className='h-8' /> <p>Avast Secure Browser For Windows </p></td>
                        
                    </tr>

                      <tr >
                        <td className="border-b-2 border-b-gray-200 h-10 m-1 cursor-pointer hover:underline flex gap-6  items-center"> <img src={avastcleanuplogo} className='h-8' /> <p>AnyDesk</p></td>
                        
                    </tr>

                      <tr >
                        <td className="border-b-2 border-b-gray-200 h-10 m-1 cursor-pointer hover:underline flex gap-6  items-center"> <img src={avastcleanuplogo} className='h-8' /> <p>Adobe Reader</p></td>
                        
                    </tr>

                     <tr >
                        <td className="border-b-2 border-b-gray-200 h-10 m-1 cursor-pointer hover:underline flex gap-6  items-center"> <img src={avastcleanuplogo} className='h-8' /> <p>AVG Secure Browser</p></td>
                        
                    </tr>

                     <tr >
                        <td className="border-b-2 border-b-gray-200 h-10 m-1 cursor-pointer hover:underline flex gap-6  items-center"> <img src={avastcleanuplogo} className='h-8' /> <p>Avast Cleanup</p></td>
                        
                    </tr>

                     <tr >
                        <td className="border-b-2 border-b-gray-200 h-10 m-1 cursor-pointer hover:underline flex gap-6  items-center"> <img src={avastcleanuplogo} className='h-8' /> <p>AVG PC  TuneUp</p></td>
                        
                    </tr>
                 
                   </table>
             </div>

             </div>
        </div>
        </>
    );
}
export default ContainerApp;