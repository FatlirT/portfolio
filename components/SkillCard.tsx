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
            <div className={className + " shadow-lg shadow-black/30 bg-light-acc/35 rounded-3xl flex flex-col text-center items-center p-8 text-2xl " + (skillFuture ? 'saturate-0 opacity-70' : 'hover:bg-light-acc/45 active:bg-light-acc/25 cursor-pointer')}>
                <div className="image-container flex flex-col justify-center h-full items-center text-center center pb-5">
                    <Image
                        src={skillImageUrl}
                        width={500}
                        height={500}
                        alt="Picture of skill"
                    />
                </div>
                <div className="caption-container items-center text-center flex flex-col font-black">{skillName}</div>
            </div >
        </>
    );
};

export default SkillCard;
