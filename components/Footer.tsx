import FT from "./svg/FT";
import GH from "./svg/GH";
import LI from "./svg/LI";

const Footer = () => {
    return (


        <footer className="bg-dark-acc/60">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between flex-row">
                    <a href="#" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <FT className="h-4 w-auto" />
                    </a>
                    <ul className="flex items-center mb-6 text-sm font-medium text-light-acc/40 sm:mb-0 space-x-4">
                        <li>
                            <a href="https://linkedin.com/in/FatlirT" target="_blank" className="fill-light-acc/40 hover:fill-light-acc"><LI className="h-5 w-auto" fill="#ffffff/70" />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/FatlirT" target="blank" className="fill-light-acc/40 hover:fill-light-acc"><GH className="h-5 w-auto" fill="#ffffff/70" /></a>
                        </li>
                        <li>
                            <a href="/#skills" className="hover:underline">Skills</a>
                        </li>
                        <li>
                            <a href="/#projects" className="hover:underline">Projects</a>
                        </li>
                        <li>
                            <a href="/articles" className="hover:underline">Articles</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-light-acc/40 sm:mx-auto lg:my-8" />
                <span className="block text-sm text-light-acc/50 sm:text-center">© 2025 <a href="#" className="hover:underline">@FatlirT</a>. All Rights Reserved.</span>
            </div>
        </footer >



    );
};

export default Footer;