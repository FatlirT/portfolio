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
            <div className={className + " shadow-lg shadow-dark-acc/30 bg-light-acc/35 rounded-3xl flex flex-col text-center items-center p-8 text-2xl " + (skillFuture ? 'saturate-0 opacity-70' : 'hover:bg-light-acc/45 active:opacity-80 cursor-pointer')}>
                <div className="image-container w-40 h-40 flex flex-col justify-center items-center text-center center pb-5 drop-shadow-[0_1.5px_6px_rgba(0,0,0,0.3)]">
                    <Image
                        src={skillImageUrl}
                        width={500}
                        height={500}
                        alt="Picture of skill"
                        style={{ objectFit: "contain", maxWidth: '75%', maxHeight: '75%' }}
                    />
                </div>
                <div className="caption-container items-center text-center flex flex-col font-black drop-shadow-[0_1.5px_6px_rgba(0,0,0,0.3)]">{skillName}</div>
            </div >
        </>
    );
};

export default SkillCard;
