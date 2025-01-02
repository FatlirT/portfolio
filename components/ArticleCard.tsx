import Image from "next/image";

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
                <div className="relative aspect-square h-full  w-full flex flex-col justify-center items-center text-center center">
                    <Image layout="fill" objectFit="cover" src={splashImageUrl} alt={splashImageUrl}>
                    </Image>
                </div>

                <div>{title}</div>
                <div>{author}</div> . <div>{date}</div>
            </div>
        </>

    );
};

export default ArticleCard;;