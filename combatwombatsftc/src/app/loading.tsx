import Image from "next/image"

export default function Loading() {
    return (
        <div className="flex justify-center items-center h-screen">
            <Image src="/images/image-transformed.webp" alt="Combat Wombats logo" className="animate-bounce dark:invert" width={100} height={100} />
        </div>
    )
            {/*https://codepen.io/catalinmortan/pen/JjVKqby gotta finish              <span className=" w-12 h-12 block mx-auto relative text-slate-500 animate-spin after:content-none after:absolute after:w-6 after:h-6 after:top-2/4 after:left-2/4 scale-50 translate-x-0 translate-y-0 bg-"></span>*/}

}