import Image from 'next/image';
import { ImgHTMLAttributes } from "react";

interface props extends ImgHTMLAttributes<HTMLImageElement> {
    className: string,
    skillImageUrl: string,
    skillName: string;
    skillFuture: boolean;
}


const SkillCard = ({ skillImageUrl, skillName, skillFuture, className }: props) => {
    return (
        <>
            <div className={className + " justify-center md:space-y-4 space-y-2 shadow-lg shadow-dark-acc/30 bg-light-acc/35 rounded-3xl flex flex-col text-center items-center md:p-4 p-2 text-2xl " + (skillFuture ? 'saturate-0 opacity-70' : 'hover:bg-light-acc/45 active:opacity-80 cursor-pointer')}>
                <div className="image-container md:w-36 aspect-square w-[100%] h-fit md:h-40 flex flex-col justify-center md:pt-5 md:pb-5 items-center text-center center drop-shadow-[0_1.5px_6px_rgba(0,0,0,0.3)]">
                    <Image
                        src={skillImageUrl}
                        width={500}
                        height={500}
                        alt="Picture of skill"
                        style={{ objectFit: "contain", maxWidth: '75%', maxHeight: '75%' }}
                    />
                </div>
                <div className="caption-container leading-none items-center pb-1 md:pb-5 text-center flex flex-col font-black drop-shadow-[0_1.5px_6px_rgba(0,0,0,0.3)]">{skillName}</div>
            </div >
        </>
    );
};

export default SkillCard;
