// @flow strict

import { personalData } from "@/utils/data/personal-data";

import Link from 'next/link';


 async function getBlogs() {
  const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = await res.json();
  return data;
}; 

async function page() {
  const blogs = await getBlogs(); 
  return (
    <div className="py-8">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-2xl rounded-md">
            All Blog
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div id='blogs' className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
      </div>
      </div>
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md"></span>
          </div>
      <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group"
    >
      <div>
<iframe src="https://www.instagram.com/p/DGGATy1o9o8/embed" width="500" height="500" frameBorder="0" scrolling="no" allowFullScreen></iframe>

</div>
   <div>
     <iframe width="560" height="315" src="https://www.youtube.com/embed/RaGS1wuR6GQ?si=vInIX7L3Jcjla1j2" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

      </div>
      <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group"
    >
   <div>
<iframe src="https://www.instagram.com/p/DHENq9BIu2j/embed" width="500" height="500" frameBorder="0" scrolling="no" allowtransparency="true"></iframe>

</div>
</div>
<div>
  <iframe src="https://www.instagram.com/reel/DG7NeArozKr/embed" width="500" height="450" frameBorder="0" scrolling="yes" allowFullScreen></iframe>
  </div>
  <div>
<iframe src="https://www.instagram.com/reel/DHJYpu3orFR/embed" width="500" height="480" frameBorder="0" scrolling="no" allowtransparency="true"></iframe>

</div>
<div>
<iframe src="https://www.instagram.com/reel/DGasqBzIpyC/embed" width="500" height="480" frameBorder="0" scrolling="no" allowFullScreen></iframe>

</div>
<div>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/KcKg5gn0Pqc?si=vSCMmaSiIBVgDJzh" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
</div>
<div>
<iframe width="560" height="315" src="https://www.youtube.com/embed/g_OtOgnhSP8?si=i4Dp6oAgD3WWRXtX" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
</div>
<div>
<iframe width="560" height="315" src="https://www.youtube.com/embed/FQvQ-_wLIR0?si=GNM_hK4YuO5sJ1Vz" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
</div>
<div>
<iframe width="560" height="315" src="https://www.youtube.com/embed/aU1jDsUsgAs?si=BpbfoJy2JMOoq13N" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
</div>
<div>
<iframe width="560" height="315" src="https://www.youtube.com/embed/Ql3s3twBDFc?si=hu5K4ApRIeQJ_6z4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
</div>
<div>
<iframe width="560" height="315" src="https://www.youtube.com/embed/s8NGt4W_rHQ?si=cCEyXeGx36-GNfzm" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
</div>
<div>
<iframe width="560" height="315" src="https://www.youtube.com/embed/d_fXinmskPo?si=dxIallyI9kiwV5gw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>


  </div>       
<div>
  <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7223673799051780097?collapsed=1" height="399" width="504" frameBorder="0" allowFullScreen="" title="Embedded post"></iframe>
</div>

<div>
<iframe src="https://www.instagram.com/reel/DEc6O38TuY5/embed" width="500" height="480" frameBorder="0" scrolling="no" allowFullScreen></iframe>

</div>

<div className="flex justify-center  mt-5 lg:mt-12">
        <Link
          className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
          role="button"
          href="https://www.instagram.com/gaming_zone.world/?igsh=aHVkb3dhdnN1MDN1#"
        >
          <span>View More</span>
        </Link>
      </div>
</div>

      </div>
      </div>
      </div>
  );
};

export default page;