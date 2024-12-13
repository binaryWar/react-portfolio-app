import { useEffect, useState } from "react";

function Navbar({ homeRef, skillRef, projectRef }) {
    const [activeHeader, setActiveHeader] = useState('home');
    const onHeaderClick = (tab) => {
        setActiveHeader(tab);
        if (tab === 'exp') {
            scrollToProject();
        } else if (tab === 'skill') {
            scrollToSkill();
        } else {
            scrollToHome();
        }
    }

    const scrollToHome =() => homeRef.current.scrollIntoView({ behavior: 'auto', block: "start"});
    const scrollToSkill = () => skillRef.current.scrollIntoView({ behavior: 'auto',block:"start"})
    const scrollToProject=() => projectRef.current.scrollIntoView({ behavior: 'auto',block:"start" })
    
    const handleScroll = () => {
        if (!homeRef.current || !skillRef.current || !projectRef.current) return;
      
        const homePosition = homeRef.current.getBoundingClientRect().top;
        const skillPosition = skillRef.current.getBoundingClientRect().top;
        const projectPosition = projectRef.current.getBoundingClientRect().top;
      
        if (homePosition <= 70 && skillPosition > 70) {
            setActiveHeader('home');
        } else if (skillPosition <= 70 && projectPosition > 70) {
            setActiveHeader('skill');
        } else if (projectPosition <= 70) {
            setActiveHeader('exp');
        }
    };
      

    useEffect(() => {
        if (homeRef.current && skillRef.current && projectRef.current) {
            document.getElementById("main-container").addEventListener("scroll",handleScroll)
        }
        return ()=>{
            document.getElementById("main-container").removeEventListener("scroll",handleScroll)
        };
    }, []); 
      

    return (
        <>
            <div className="navbarWrapper">
                <div className={`title ${activeHeader === 'home' ? 'active' : ''}`} onClick={() => onHeaderClick('home')}>
                    <span>
                        /
                    </span>
                </div>
                <div className={`title ${activeHeader === 'skill' ? 'active' : ''}`} onClick={() => onHeaderClick('skill')}>
                    <span>
                        Skill
                    </span>
                </div>
                <div className={`title ${activeHeader === 'exp' ? 'active' : ''}`} onClick={() => onHeaderClick('exp')}>
                    <span>
                        Work
                    </span>
                </div>
            </div>
            {/* <div className="cv-wrapper">
                CV
            </div> */}
        </>
    )
}
export default Navbar;