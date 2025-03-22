// @flow strict
import { timeConverter } from '@/utils/time-converter';
import Image from 'next/image'; 
import Link from 'next/link'; 



function BlogCard({ blog }) {

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
        <Link target='_blank' href={blog.url}>
          <p className='my-2 lg:my-3 cursor-pointer text-lg text-white sm:text-xl font-medium hover:text-violet-500'>
            {blog.title}
          </p>
        </Link>
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

      </div>
      </div>
      </div>
      </div>
  );
};

export default BlogCard; 