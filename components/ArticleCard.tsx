import Image from "next/image";
import Link from "next/link";

interface props {
    title: string,
    author: string,
    date: string,
    splashImageUrl: string,
};


const ArticleCard = ({ title, author, date, splashImageUrl }: props) => {
    return (
        <>
            <div className={"justify-center flex flex-col text-center items-center"}>
                <Link href={`/article/${title}`} className="relative aspect-square h-full  w-full flex flex-col justify-center items-center text-center center">
                    <Image layout="fill" objectFit="cover" src={splashImageUrl} alt={splashImageUrl}>
                    </Image>
                </Link>

                <Link href={`/article/${title}`} className="hover:text-my-blue">{title}</Link>
                <div>{author}</div> . <div>{date}</div>
            </div>
        </>

    );
};

export default ArticleCard;;