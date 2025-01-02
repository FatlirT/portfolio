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
            <Image src={splashImageUrl} alt={splashImageUrl}>
            </Image>
            <div>{title}</div>
            <div>{author}</div> . <div>{date}</div>
        </>

    );
};

export default ArticleCard;;