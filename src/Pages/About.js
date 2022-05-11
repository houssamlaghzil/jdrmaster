import React, {Component, useState} from "react";
import {initializeApp} from 'firebase/app';
import {getDatabase, ref, set} from "firebase/database";
import {getByTestId, render} from "@testing-library/react";

export default class About extends React.Component {
    state = {
        datavalue: "",
    }


    render() {
        let pic = "https://media-exp1.licdn.com/dms/image/C4D03AQEhNg0QTdYyxw/profile-displayphoto-shrink_800_800/0/1611063083326?e=1657756800&v=beta&t=sIhKexXwlZ1kJxqQeleYRenKn8vubFHp_aMOxEOPS1c";
        const linkgit = "";
        const linkmsgs = "";
        var databdd;

        databdd = document.getElementById("input").innerText;
        console.log(this.state.datavalue)
        return (
            <>
                <div className="container">
                    <a href="/">About</a>
                    <div className="card">
                        <img src={pic}
                             alt="Person" className="card__image"/>
                        <p className="card__name">Houssam LAGHZIL</p>
                        <input id="input" value="" onChange={e => this.setState({datavalue: e.target.value})}/>
                        <p>{databdd}</p>

                        <a href={linkgit} className="btn draw-border">Follow</a>
                        <a href={linkmsgs} className="btn draw-border">Message</a>

                    </div>
                </div>
            </>
        );
    }
}

