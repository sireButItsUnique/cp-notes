import Image from "next/image";

export default function Blur() {
    return (
    <>
        <Image
            className={`fixed blur-[2rem] right-[5rem] top-[5rem] z-40`}
            src="/images/logo.png"
            width="50"
            height="50"
        />
        <Image
            className={`fixed blur-[2rem] right-[50rem] top-[25rem] z-40`}
            src="/images/logo.png"
            width="50"
            height="50"
        />
        <Image
            className={`fixed blur-[2rem] right-[35rem] top-[35rem] z-40`}
            src="/images/logo.png"
            width="50"
            height="50"
        />
        <Image
            className={`fixed blur-[2rem] right-[80rem] top-[25rem] z-40`}
            src="/images/logo.png"
            width="50"
            height="50"
        />
        <Image
            className={`fixed blur-[2rem] right-[75rem] top-[8rem] z-40`}
            src="/images/logo.png"
            width="50"
            height="50"
        />
        <Image
            className={`fixed blur-[2rem] right-[25rem] top-[12rem] z-40`}
            src="/images/logo.png"
            width="50"
            height="50"
        />
        <Image
            className={`fixed blur-[2rem] right-[8rem] bottom-[4rem] z-40`}
            src="/images/logo.png"
            width="50"
            height="50"
        />
    </>
    );
}