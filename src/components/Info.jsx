function Info() {
    const expDifference = new Date() - new Date("2021-08-01T00:00:00+05:30");
    const expNum = expDifference / (365 * 24 * 60 * 60 * 1000);
    return (
        <section className="info-section">
            <div className="intro-wrapper">
                <div className = 'w_0_1_wrapper'>
                    <div className="w_0_1_wrapper_text">
                        <h1 className="welcome-text">Welcome</h1>
                        <p className="about-me">
                        Hi, I'm Satyam, a Full Stack Developer with over {expNum.toFixed(1)} years of experience based in India. I am passionate about crafting innovative web solutions and coding dynamic applications that make an impact.
                        </p>
                    </div>
                    <div className="img-wrapper">
                        <img src="/img/me.jpg" alt="its-me" height="180px"/>
                    </div>
                </div>
                <div className = "social-media-wrapper">
                    <div>
                        <a href="https://github.com/binaryWar?tab=repositories"  target="_blank" rel="noopener noreferrer">
                            <img src="/img/github.svg" alt="" />
                        </a>
                    </div>
                    <div>
                    <a href= "mailto: satyamsingh2004@gmail.com">
                        <img src="/img/mail.svg" alt="mail-image" />
                    </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Info;