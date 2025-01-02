import Link from "next/link";
import articles from '@/data/articles';
import ArticleCard from "@/components/ArticleCard";

export default function Article() {

    // Fetch article by unique title.
    // Implement Article ViewCount.

    return (
        <>
            <div className="w-full flex flex-row items-start justify-start">
                <Link href={`/articles`} className="hover:text-my-blue mb-2 font-bold"> &lt; Back to All Articles</Link>
            </div>



            <div className="relative w-full bg-my-blue mb-8">
                {/* Placeholder for Main Content */}
                <div className="w-full h-[400px]"></div>

                {/* Title on Bottom */}
                <div className="break-words absolute bottom-0 left-0 w-full px-7 py-6 bg-dark-acc/35 text-white leading-tight space-y-1">
                    <h1 className="w-full mb-1 text-xs">by <u><b>Fatlir Topalli</b></u> on <u><b>10/10/2035</b></u></h1>

                    <h1 className="md:text-2xl text-md font-black">Security best practices when working with Tedsadas dsadsadsd sadsadsrra form.</h1>
                </div >
            </div >





            <div className="mb-8"> BODY Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio consequatur minima, in porro aliquam atque, odit eveniet obcaecati enim itaque unde ipsa molestiae ea illum incidunt reiciendis dolor omnis delectus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Et veniam, non corporis iure, ratione consequuntur ex totam cum cumque nobis doloribus. Incidunt temporibus deserunt dolorum eaque nobis! Quod, perferendis libero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate totam maiores harum ducimus repellendus officia incidunt, distinctio quibusdam mollitia veniam ipsam! Veniam dolores aut id natus laudantium dolor cumque autem. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse dolorem, expedita tenetur, corporis animi porro voluptate blanditiis maiores mollitia aspernatur sequi quo perspiciatis alias. Delectus, possimus. Harum quae neque non. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique cumque, hic laborum deleniti libero at placeat accusamus laudantium, quo nemo aut? Alias, et officia corrupti iure tempore atque eveniet incidunt? </div>



            <div className="w-full font-extralight text-sm mb-8">
                <h1>References:</h1>
                <br />
                <ol className="list-decimal list-inside space-y-2">
                    <li>
                        dsadsdasdasdssddasdas @ <u><b>https://www.dsadsadas.com/dsaaadsj</b></u>
                    </li>
                    <li>
                        dsadsdddasdas @ <u><b>https://www.aadsadas.com/dsj</b></u>
                    </li>
                    <li>
                        dsadsdasdasdssddasdas @ <u><b>https://www.daasadas.com/dssssadsj</b></u>
                    </li>
                    <li>
                        dsadsdasdasdssdda @ <u><b>https://www.dssaadas.com/dsassdsj</b></u>
                    </li>
                    <li>
                        dasdasdssddasdas @ <u><b>https://www.dsadfas.com/dsadsj</b></u>
                    </li>

                </ol>
            </div>



            <div className="w-full mb-8">
                <ol className="list-none flex flex-row gap-x-3 flex-wrap">
                    <li><b>#TERRAFORM</b></li><li><b>#TERRAFORM</b></li><li><b>#TERRAFORM</b></li><li><b>#TERRAFORM</b></li><li><b>#TERRAFORM</b></li><li><b>#TERRAFORM</b></li><li><b>#TERRAFORM</b></li><li><b>#TERRAFORM</b></li><li><b>#TERRAFORM</b></li><li><b>#TERRAFORM</b></li>
                </ol>
            </div>

            <div className="w-full mb-8">
                <hr className="border-t-1 border-light-acc/40" />
            </div>


            <div className="w-full flex flex-col mb-16">
                <h1 className="mb-16 md:mb-8 md:no-underline md:font-bold underline font-black md:text-sm text-2xl w-full md:text-start text-center">RELATED ARTICLES:</h1>
                <div className="flex flex-row w-full justify-center items-center md:justify-start md:items-start">
                    <div className="text-wrap gap-y-28 gap-x-28 grid md:grid-cols-3 items-center justify-center text-center grid-rows-auto grid-cols-1 ">
                        {
                            articles.map((article) =>
                                <ArticleCard key={article.title} title={article.title} author={article.author} date={article.date} splashImageUrl={article.splashImageUrl} ></ArticleCard>
                            )
                        }
                    </div>
                </div>

            </div>

            <div className="w-full flex flex-row justify-between">
                <Link href={`/articles/ds`} className="hover:text-my-blue font-extralight">&lt; Previous Article</Link> <Link href={`/articles/ds`} className="hover:text-my-blue mb-2 font-extralight"> Next Article &gt; </Link>
            </div >
        </>
    );
};