import React from "react";

const Footer = () => {
  return <>
  <div className="mt-10 bg-orange-400 pt-10 pb-10">
   <div className="flex justify-around items-center"> 
     {/* upper div */}
     <div>
       {/* u1 */}
       <img className="h-24" src="https://gdurl.com/0PTl" alt="Aahar logo" />
       <p className="font-semibold text-xl">+1 (7635) 547-12-97</p>
       <p>support@aahar.agency</p>
     </div>
     <div className="w-64">
       {/* u2 */}
       <p className="font-semibold text-xl">QUICK LINKS</p>
      <div className="flex justify-start">
        <p>Product</p>
        <p className="ml-16">Company</p>
      </div>
      <div className="flex justify-start">
        <p>Add Restorant</p>
        <p className="ml-5">Aahar Media</p>
      </div>
     </div>
     <div>
       {/* u3 */}
       <p className="font-semibold text-xl">Subscribe</p>
       <div className="flex items-center mt-1">
         <div className="bg-gray-800 text-white h-12 p-2 "><p className="mt-1">Get Product Updates</p></div>
         <div className="bg-sky-600 p-4">
           <img className="h-4" src="https://gdurl.com/f0Iu" alt="Arrow" />
         </div>
       </div>
     </div>
   </div>
   <div className="h-px bg-black max-w-screen-xl ml-32 mt-5">
     {/* line */}

   </div>
   <div className="flex justify-around mt-5">
     {/* lower div */}
     <div className="flex justify-around items-center w-24">
       {/* l1 */}
       <img className="h-6" src="https://gdurl.com/Fzvi" alt="linkedIn" />
       <img className="h-7" src="https://gdurl.com/q5l0" alt="facebook" />
       <img className="h-6" src="https://gdurl.com/RYFa" alt="twitter" />
     </div>
     <div className="flex flex-col items-center">
       {/* l2 */}
       <p>A product of</p>
       <img className="h-16" src="https://gdurl.com/0PTl" alt="Aahar logo" />
     </div>
     <div>
       {/* l3 */}
       <p>© 2022 Aahar Media</p>
       <p>All Rights Reserved</p>
     </div>
   </div>
  </div>
  </>;
};

export default Footer;
