const Splash = () => {
    return (
        <div className="splash flex min-h-screen flex-col items-center justify-between">
            <video width="100%" height="100%" autoPlay muted>
                <source src="/videos/splash.webm" type="video/webm" />
            </video>
        </div>
    );
};

export default Splash;