import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { MergerBannerText, MergerRoute, MergerTitle } from '../data/MergerData';

const Merger = ({open} : {open: boolean}) => {

    const [isOpen, setOpen] = useState(open);

    if (isOpen) {
        return (
            <div className="mt-16 p-10 items-center flex flex-col">
                <div className="h-40 overflow-hidden">
                    <div className="relative h-80 w-80 -mt-20">
                        <Image src="/images/ADG-Blatt-Once.gif" layout="fill" alt="Merger Gif" />
                    </div>
                </div>
                <h1 className="text-xl">{MergerTitle}</h1>
                <p className="text-sm lg:w-1/2 text-center m-2">{MergerBannerText}</p>
                <p className="mb-2 text-sm">- Tony Blatt, President Blatt Architects</p>
                <LinkItem location={"/press#" + MergerRoute} text="Read More" />
                <div className="absolute top-20 right-10">
                    <svg className="block h-6 w-6 hover:text-gray-400 cursor-pointer" onClick={() => setOpen(false)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" > <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /> </svg>
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <div className="mt-16 p-1 text-center">
                    <h1 className="hover:underline cursor-pointer" onClick={() => setOpen(true)}>{MergerTitle} - Click to View</h1>
                </div>
            </div>
        )
    }
}

const LinkItem = ({ location, text }: { location: string, text: string }) => {
    return (
        <Link href={location} passHref>
            <p className="no-underline hover:underline block cursor-pointer">{text}</p>
        </Link>
    );
}

export default Merger;
