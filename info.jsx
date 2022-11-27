


export default function Profile(){
    return (
       <div className="profile">
            <img src="/solo-project/images/profile.jpg" className="pfp" />
            <div className="info-cont">
                <h1 className="name">Kyri</h1>
                <p className="job">Frontend Developer</p>
                <p className="address">kyri.website</p>
                <a href='mailto:seven.tears@bk.ru'>
                    <button className="bflex">
                        <img src="/solo-project/images/mail.png" className="mail" />
                        <p className="txt">Email</p>
                    </button>
                </a>                
                <div className="about">
                    <h3 className="headers">About</h3>
                    <p className="resume">
                        I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
                    </p>
                    <h3 className="headers">Interests</h3>
                    <p className="resume">
                        Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
                    </p>
                </div>
                <footer className="footer">
                    <a href="https://twitter.com/">
                        <img src="/solo-project/images/twitter.png" className="pngs" />
                    </a>
                    <a href="https://facebook.com/">
                        <img src="/solo-project/images/fb.png" className="pngs" />
                    </a>
                    <a href="https://instagram.com/">
                        <img src="/solo-project/images/inst.png" className="pngs" />
                    </a>
                    <a href="https://linkedin.com/">
                        <img src="/solo-project/images/in.png" className="pngs" />
                    </a>
                    <a href="https://github.com/">
                        <img src="/solo-project/images/git.png" className="pngs" />
                    </a>
                </footer>
            </div>
        </div>
    )
}