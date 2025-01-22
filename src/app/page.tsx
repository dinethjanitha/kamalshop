import Link from "next/link";

export default function Home() {
  return (
    <div className="area">
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
    <div className="flex h-screen justify-center flex-col items-center">
         <h1 className="  text-lg">Hello world!</h1>
         <h1 className=" text-white italic underline "><Link href="/shop">Go to Shop &#8594; </Link></h1>
      </div>
  </div>
      
   
  );
}
