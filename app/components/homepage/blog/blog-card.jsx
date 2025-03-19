// @flow strict
import { timeConverter } from '@/utils/time-converter';
import Image from 'next/image'; 
import Link from 'next/link'; 



function BlogCard({ blog }) {

  return (
    <div id='blogs' className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>

      <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group"
    >
   <div>
     <iframe width="560" height="315" src="https://www.youtube.com/embed/RaGS1wuR6GQ?si=vInIX7L3Jcjla1j2" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    
</div>
<div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group"
    >
<div className="h-44 lg:h-52 w-auto cursor-pointer overflow-hidden rounded-t-lg">

  <div>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/KcKg5gn0Pqc?si=vSCMmaSiIBVgDJzh" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
<div>
<iframe width="560" height="315" src="https://www.youtube.com/embed/g_OtOgnhSP8?si=i4Dp6oAgD3WWRXtX" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
<div>
<iframe width="560" height="315" src="https://www.youtube.com/embed/FQvQ-_wLIR0?si=GNM_hK4YuO5sJ1Vz" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
<div>
<iframe width="560" height="315" src="https://www.youtube.com/embed/aU1jDsUsgAs?si=BpbfoJy2JMOoq13N" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
<div>
<iframe width="560" height="315" src="https://www.youtube.com/embed/Ql3s3twBDFc?si=hu5K4ApRIeQJ_6z4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
<div>
<iframe width="560" height="315" src="https://www.youtube.com/embed/s8NGt4W_rHQ?si=cCEyXeGx36-GNfzm" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
<div>
<iframe width="560" height="315" src="https://www.youtube.com/embed/d_fXinmskPo?si=dxIallyI9kiwV5gw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<Link target='_blank' href={blog.url}>
          <p className='my-2 lg:my-3 cursor-pointer text-lg text-white sm:text-xl font-medium hover:text-violet-500'>
            {blog.title}
          </p>
          </Link>
<p className='text-sm lg:text-base text-[#d3d8e8] pb-3 lg:pb-6 line-clamp-3'>
          {blog.description}
        </p>
  </div>       
  </div>
  
   {/* <div className="">
          <Link target='_blank' href={blog.url}>
            <button className='bg-violet-500 text-white px-3 py-1.5 rounded-full text-xs'>
              Read More
            </button>
          </Link>
        </div> */}
      </div>
      </div>
      </div>
      </div>
  );
};

export default BlogCard;