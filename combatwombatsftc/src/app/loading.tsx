import Image from "next/image"

export default function Loading() {
    return (
        <div className="flex justify-center items-center h-screen">
            <Image src="/images/image-transformed.webp" alt="Combat Wombats logo" className="animate-bounce dark:invert" width={100} height={100} />
        </div>
    )
}