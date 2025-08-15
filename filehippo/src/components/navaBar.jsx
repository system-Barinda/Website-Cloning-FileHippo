import logo from '../images/logo-filehipo.png'
function HeaderMenu(){
    return(
        <>
           <header className="h-17 w-full bg-cyan-500 text-white">
               
            <div className="subHeadr-container">
                <img src={logo} />
                <div>
                    <h3>filehipo</h3>
                    <h6>software that matters</h6>
                </div>
            </div>
    {/* now below the menu detail of filehipo */}

            <div className="subHeadr-container">
                <div className="menu-box">news</div>
                <div className="menu-box">reviews</div>
                <div className="menu-box">Top programs</div>
            </div>
 {/* the box of the search box of filehippo */}
            <div className="subHeadr-container">
                <input type="search" placeholder='search softwars' />
                <button>s</button>
            </div>
{/* the details of the left menus of en and differents of operating system are now used in all sector */}
            <div className="subHeadr-container"></div>
             <div className="subleft-munu">
                <p>window</p>
             </div>
             <div className="subleft-munu">
                <p>EN</p>
             </div>
           </header>
        </>
    );
}
export default HeaderMenu;