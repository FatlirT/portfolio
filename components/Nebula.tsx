const Nebula = () => {
    return (
        <div id="backdrop" className="hidden place-items-center bg-center justify-center before:absolute before:h-[300px] before:w-[480px] before:rounded-full before:bg-gradient-radial before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:bg-gradient-conic after:blur-2xl after:content-[''] before:from-transparent before:to-my-blue/70 before:opacity-10 after:from-my-blue/90 after:via-blue-700 after:opacity-40 before:lg:h-[360px] z-[-1]">
        </div>
    );
};

export default Nebula;
