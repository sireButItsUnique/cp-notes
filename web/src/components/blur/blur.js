import Image from "next/image";

export default function Blur() {
    return (
    <>
        <Image
            className={`fixed blur-[3rem] right-[5rem] top-[5rem] z-[-10]`}
            src="/images/logo.png"
            width="150"
            height="150"
        />
        <Image
            className={`fixed blur-[2.5rem] left-[18rem] bottom-[4rem] z-[-10]`}
            src="/images/logo.png"
            width="100"
            height="100"
        />
        <Image
            className={`fixed blur-[2rem] right-[50rem] top-[25rem] z-[-10]`}
            src="/images/logo.png"
            width="50"
            height="50"
        />
        <Image
            className={`fixed blur-[2rem] right-[35rem] top-[35rem] z-[-10]`}
            src="/images/logo.png"
            width="50"
            height="50"
        />
        <Image
            className={`fixed blur-[2rem] right-[80rem] top-[25rem] z-[-10]`}
            src="/images/logo.png"
            width="50"
            height="50"
        />
        <Image
            className={`fixed blur-[2rem] right-[75rem] top-[8rem] z-[-10]`}
            src="/images/logo.png"
            width="50"
            height="50"
        />
        <Image
            className={`fixed blur-[2rem] right-[25rem] top-[12rem] z-[-10]`}
            src="/images/logo.png"
            width="50"
            height="50"
        />
        <Image
            className={`fixed blur-[2rem] right-[8rem] bottom-[4rem] z-[-10]`}
            src="/images/logo.png"
            width="50"
            height="50"
        />
    </>
    );
}