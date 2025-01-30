import image from "./image-01.jpg";
import Image from "next/image";
import image2 from "./images/image-02.jpg"
export default function Home() {
  return (
    <div>
      {/* <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      
      </div> */}
      {/* <div className="flex h-screen justify-center flex-col items-center">
         <h1 className="  text-lg">Hello world!</h1>
         <h1 className=" text-white italic underline "><Link className="link link-info " href="/shop">Go to Shop &#8594; </Link></h1>
      </div> */}
      

      <div className=" grid grid-cols-3 gap-3 m-7 ">
        <div className="relative col-span-2  bg-slate-400 flex justify-center items-center">
          <div className="h-full w-full object-cover object-center">
            <Image
              src={image}
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className=" absolute top-0 left-0 flex flex-col w-full h-full gap-4 justify-center p-10 ">
            
              <div className="flex flex-col gap-4 w-[600]">
                <p className=" text-3xl font-bold">Mega sale up to 50% Off All</p>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
                  sit inventore minima quaerat sequi magnam libero excepturi
                </p>
                <p>
                  <button className="btn btn-primary"> Visit Shop</button>
                </p>
              </div>
            
          </div>
        </div>

        <div className=" col-span-1 flex flex-col gap-3">
       
          <div className="h-2/4 relative  bg-blue-300 flex items-center ">
              <div className="h-full w-full object-cover object-center">
                <Image src={image2} alt=""  className="h-full w-full object-cover object-center"/>
              </div>
              <div className=" absolute top-0 left-0 flex flex-col w-full h-full justify-center text-end items-end pr-4 font-bold">
                <div>
                Buy Today !<br />
                And Grap Discounts
                </div>
                <span className=" link-primary font-mono mt-2">
                    Click Heree...
                </span>
              </div>
            
          </div>

          <div className="h-2/4 relative  bg-blue-300 flex items-center ">
              <div className="h-full w-full object-cover object-center">
                <Image src={image2} alt=""  className="h-full w-full object-cover object-center"/>
              </div>
              <div className=" absolute top-0 left-0 flex flex-col w-full h-full justify-center text-end items-end pr-4 font-bold">
                <div>
                Buy Today!<br />
                And Grap Discounts
                </div>
                <span className=" link-primary mt-2 font-mono">
                    Click Heree...
                </span>
              </div>
            
          </div>
          
        </div> 
      </div>
      <div className="flex mt-5 flex-col h-[200px] w-full justify-center items-center">
            <button className="btn btn-primary">Explora More</button>
      </div>
      
    </div>
  );
}
