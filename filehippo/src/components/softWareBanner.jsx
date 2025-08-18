import laptop from '../images/laptop.jpeg'
function SoftWareBanner(){

    return(
        <>
        <div className="border h-200 w-full flex">
           <div className="soft h-auto w-[70%] border m-1 flex flex-wrap">
             
                       <div className="item h-100 w-100 border flex flex-col gap-2 m-1">
                          <img src={laptop} className='h-[60%] w-auto'/>
                          <p className=''>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta repellat 
                            nisi nostrum dolorum quidem vero veritatis consequatur porro possimus dolores voluptas
                             culpa doloremque ab voluptatem cum aspernatur, illo soluta excepturi?
                          </p>
                       </div>

                       <div className="item h-100 w-100 border flex flex-col gap-2 m-1">
                          <img src={laptop} className='h-[60%] w-auto'/>
                          <p className=''>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta repellat 
                            nisi nostrum dolorum quidem vero veritatis consequatur porro possimus dolores voluptas
                             culpa doloremque ab voluptatem cum aspernatur, illo soluta excepturi?
                          </p>
                       </div>

                       <div className="item h-100 w-100 border flex flex-col gap-2 m-1">
                          <img src={laptop} className='h-[60%] w-auto'/>
                          <p className=''>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta repellat 
                            nisi nostrum dolorum quidem vero veritatis consequatur porro possimus dolores voluptas
                             culpa doloremque ab voluptatem cum aspernatur, illo soluta excepturi?
                          </p>
                       </div>

           </div>
        </div>
        </>
        
    );
}
export default SoftWareBanner;