import React, { Component } from "react";
import { Button } from "react-bootstrap";
import './buttons.css';


class Buttons extends Component {

    render() {
        return ( 
            <div className="buttonArea">
                <Button type="DISC">Discord</Button>
                <Button type="MAL">MyAnimeList</Button>
                <Button type="TWT">Twitter</Button>
                <Button type="RYM">RateYourMusic</Button>
                <Button type="WEB">Blog</Button>
                <Button type="PORT">Portfolio</Button>
                <Button type="RED">Reddit</Button>
                <Button type="YT">YouTube</Button>
                <Button type="TTV">Twitch</Button>
                <Button type="GIT">Github</Button>
            </div>
        )
    }
}

export default Buttons;