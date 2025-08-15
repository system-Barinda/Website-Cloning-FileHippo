import logo from '../images/logo-filehipo.png'
import { FaSearch } from "react-icons/fa";
import { IoLogoWindows } from "react-icons/io5";
import { TbSelect } from "react-icons/tb";
function HeaderMenu(){
    return(
        <>
           <header className="h-17 w-full bg-cyan-500 text-white flex justify-center">
               
            <div className="subHeadr-container  flex w-[16%] h-auto  m-2 items-center mr-auto">
                <img src={logo} className="h-10 rounded " />
                <div className='m-1'>
                    <h3 className='text-[20px] font-bold'>filehipo</h3>
                    <h6 className='text-[10px]'>software that matters</h6>
                </div>
            </div>
    {/* now below the menu detail of filehipo */}

            <div className="subHeadr-container  h-auto w-[27%] flex justify-evenly text-[20px] items-center">
                <div className="menu-box cursor-pointer">news</div>
                <div className="menu-box cursor-pointer">reviews</div>
                <div className="menu-box cursor-pointer">Top programs</div>
            </div>
 {/* the box of the search box of filehippo */} 
            <div className="subHeadr-container  w-[35%] bg-amber-50 h-10 flex self-center m-1">
                <input type="search" placeholder='search softwars' className="text-black grow  m-1 outline-none h-auto text-[14px]" />
                <button className='text-black h-auto w-10 m-2   rounded-2xl ml-auto flex items-center justify-center'><FaSearch /></button>
            </div>
{/* the details of the left menus of en and differents of operating system are now used in all sector */}
            <div className="subHeadr-container ml-auto w-[20%] border flex h-auto">
             <div className="subleft-munu flex border w-1/2 justify-around items-center">
                <IoLogoWindows />
                <p>window</p>
                <TbSelect />
             </div>
             <div className="subleft-munu flex  items-center gap-5 border">
                <p className='m-3'>EN</p>
                <TbSelect className='m-1' />
             </div>
             </div>
           </header>
        </>
    );
}
export default HeaderMenu;