import Image from "next/image";
import Btn from "./components/Btn";
import Link from "next/link";
export default function Home() {
  return (
    <main className="h-[84vh] relative bg-gray-300">
      {/* <Image src={`/secondbg2.png`} alt={"Background"} fill={true} className="z-0 brightness-90" /> */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center z-10">
        <div className="absolute top-0 left-0 w-full h-full flex flex-col z-10 items-center">
          <div className="top-section h-1/2 w-[90vw] flex ">
            <div className="first-section w-1/2 h-full flex flex-col justify-center items-center gap-4">
              <h1 className="text-3xl font-bold text-center">The best URL shortener in the market</h1>
              <p className="text-lg text-center">Shorten your URLs and manage your links effortlessly with Linkly. <br/>Create clean, shareable links with a fast, reliable, and easy-to-use platform built for you.</p>
              <span className="flex gap-4">
                <Link href="/shortner" >
                  <Btn name="Try now" arrow={false}  />
                </Link>
                <Link href="https://github.com/HULK-CODDER" target="_blank">
                  <Btn name="GitHub" arrow={false} />
                </Link>

              </span>
            </div>
            <div className="second-section w-1/2 h-[70vh] relative">
              <Image src={`/finalbg.png`} alt={"Second Background"} fill={true} className="z-1" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
