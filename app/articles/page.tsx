import ArticleCard from '@/components/ArticleCard';
import SearchBar from '@/components/SearchBar';
import articles from '@/data/articles';

export default function Articles() {

    // fetch list of articles of page only.
    // new server request fetch cycle per page.
    // search bar request fetch cycle per search, affects parent component.

    return (
        <>
            <div className='w-full sm:w-3/4 justify-start items-start mb-16 flex flex-row'>
                <SearchBar></SearchBar>
            </div>
            <div id="articles" className="w-full flex flex-col mb-16 justify-center text-center md:text-start items-center ">
                <h1 className='text-4xl font-bold mb-16 drop-shadow-xl w-full'>All Articles</h1>
                <div className="flex flex-row w-full justify-center items-center md:justify-start md:items-start">
                    <div className="text-wrap gap-y-28 gap-x-28 grid md:grid-cols-3 items-center justify-center text-center grid-rows-auto grid-cols-1 ">
                        {
                            articles.map((article) =>
                                <ArticleCard key={article.title} title={article.title} author={article.author} date={article.date} splashImageUrl={article.splashImageUrl} ></ArticleCard>
                            )
                        }
                    </div>
                </div>
            </div >
        </>
    );
}