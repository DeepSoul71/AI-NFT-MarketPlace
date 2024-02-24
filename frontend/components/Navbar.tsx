'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

export default function ConnectButton() {
  const pathname = usePathname();
  const router = useRouter();
  return (
    // <nav className='z-10 fixed top-0 flex justify-between items-center w-full px-8 py-4 backdrop-blur-xl bg-white/20'>
    <nav className='z-10 fixed top-0 flex justify-between items-center w-full px-8 py-4 bg-transparent'>
      <div>
        <img src='./logo.png' width='100px' onClick={()=>router.push('/')} className="m-10 cursor-pointer"/>
      </div>
      <div>
        <h1 className="font-medium text-center sm:text-start text-lg md:text-xl lg:text-2xl xl:text-3xl leading-loose text-white">
          HONESTY | TRANSPARENCY | SIMPLICITY | TRUST
        </h1>
        <div className="h-px my-2 mx-auto rounded-full  bg-gradient-to-r from-blue-400 via-pink-400 to-indigo-400"></div>
        <h3 className="text-center text-white text-2xl font-light">WE GROW TOGETHER</h3>
      </div>
      <div>
        <w3m-button/>
      </div>
    </nav>
  );
}
