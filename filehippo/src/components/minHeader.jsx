import { PiStarHalfBold } from "react-icons/pi";
import { GrCheckboxSelected } from "react-icons/gr";
import { HiHandThumbUp } from "react-icons/hi2";
import loptop from '../images/laptop.jpeg'

import { LiaArrowAltCircleLeftSolid } from "react-icons/lia";
import { LiaArrowAltCircleRight } from "react-icons/lia";
function MinHeader(){
    return(
<>
  <div className="minHeader-container h-100 w-full bg-blue-700 flex justify-around">
              {/* this right side of minHeader   */}

        <div className="box-container-sub  w-[45%] h-auto mr-auto m-2 text-white flex flex-col justify-start">
            <h1 className="font-bold text-4xl m-3">The latest versions of the BEST & SAFE software</h1>
            <div className="sub m-2  h-40 flex flex-col justify-evenly">
              <div className="flex gap-5 items-center"><PiStarHalfBold /><p>Hand-picked software titles—only the best!</p></div>
              <div className="flex gap-5 items-center"><GrCheckboxSelected /><p>Tested for malware, adware and viruses</p></div>
              <div className="flex gap-5 items-center"><HiHandThumbUp /><p>No added bundles or toolbars</p></div>
            </div>
            <div className="button-container  h-15 w-1/2 flex justify-between m-1">
                <button className="border-[2px] border-cyan-500 h-auto m-1 rounded w-1/2 hover:bg-cyan-500 cursor-pointer ">popular software</button>
                <button className="border-[2px] border-cyan-500 h-auto m-1 rounded w-1/2  hover:bg-cyan-500 cursor-pointer ">latest update</button>
            </div>
        </div>


        <div className="box-container-sub  w-[55%] h-auto ml-auto m-2 flex justify-center">
           <LiaArrowAltCircleLeftSolid className="h-20 w-20 self-center text-white" />

            <div class="slideshow h-[85%] w-[90%]  mt-4">
                     
           </div>
           <LiaArrowAltCircleRight className="h-20 w-20 self-center text-white" />
        </div>

  </div>
</>
);
}
export default MinHeader;