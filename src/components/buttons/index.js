import React, { Component } from "react";
import { Button } from "react-bootstrap";
import './buttons.css';


class Buttons extends Component {

    render() {
        return ( 
            <div className="buttonArea">
                <a href="http://discord.gg/FkWM4Mj"><Button type="DISC">Discord</Button></a>
                <a href="http://twitter.com/mikeyhaggard"><Button type="TWT">Twitter</Button></a>
                <a href="http://rateyourmusic.com/~zxcv1337x"><Button type="RYM">RateYourMusic</Button></a>
                <a href="http://myanimelist.net/profile/zxcv1337x"><Button type="MAL">MyAnimeList</Button></a>
                <a href="http://teamzxcv.com/"><Button type="WEB">Blog</Button></a>
                <a href="http://mjh-portfolio.herokuapp.com/"><Button type="PORT">Portfolio</Button></a>
                <a href="https://github.com/MichaelH94"><Button type="GIT">Github</Button></a>
                <a href="https://www.twitch.tv/zxcv1337x"><Button type="TTV">Twitch</Button></a>
                <a href="https://www.youtube.com/channel/UCGSl-5K88IFIprSgiwoO1rQ"><Button type="YT">YouTube</Button></a>
                <a href="https://www.reddit.com/user/zxcv1337x/"><Button type="RED">Reddit</Button></a>
            </div>
        )
    }
}

export default Buttons;