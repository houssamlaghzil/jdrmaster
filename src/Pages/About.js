import React from "react";

export default function About() {

    let pic = "https://media-exp1.licdn.com/dms/image/C4D03AQEhNg0QTdYyxw/profile-displayphoto-shrink_800_800/0/1611063083326?e=1657756800&v=beta&t=sIhKexXwlZ1kJxqQeleYRenKn8vubFHp_aMOxEOPS1c";
    const linkgit ="" ;
    const linkmsgs ="" ;

    return (
        <>
            <div className="container">
                <a href="/">About</a>
                <div className="card">
                    <img src={pic}
                         alt="Person" className="card__image"/>
                    <p className="card__name">Houssam LAGHZIL</p>

                    <a href={linkgit} className="btn draw-border">Follow</a>
                    <a href={linkmsgs} className="btn draw-border">Message</a>

                </div>
            </div>
        </>
    );
}
