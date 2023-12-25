const Splash = () => {
    return (

        <div className="w-full p-4 md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">Fatlir Topalli MSci <a href="#" className="hover:underline"></a>
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">GitHub</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">LinkedIn</a>
                </li>
            </ul>
        </div>

    );
};

export default Splash;