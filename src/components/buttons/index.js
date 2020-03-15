import React, { Component } from "react";
import { Button } from "react-bootstrap";
import './buttons.css';


class Buttons extends Component {

    render() {
        return ( 
            <div className="buttonArea">
                <Button>Discord</Button>
                <Button type="MAL">MyAnimeList</Button>
                <Button type="TWT">Twitter</Button>
                <Button type="RYM">RateYourMusic
                </Button>
                <Button>Blog</Button>
                <Button>Portfolio</Button>
                <Button>Hello</Button>
                <Button>Hello</Button>
            </div>
        )
    }
}

export default Buttons;