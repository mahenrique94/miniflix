import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Media.css";

export default class Media extends Component {

    render() {
        return(
            <div className="c-media">
                <header className="c-media__header">
                    <div className="c-media__picture" style={{ backgroundImage : "url(http://1.images.southparkstudios.com/blogs/southparkstudios.com/files/2017/05/Untitled-1_1.jpg?quality=0.8)" }}></div>
                    <Link className="c-media__title" to={ `/detail/${this.props.slug}` }>{ this.props.title }</Link>
                </header>
                <section className="c-media__content">Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando...</section>
                <footer className="c-media__footer">
                    <a className="c-media__link" href="#"><i className="fas fa-eye c-media__icon"></i>Assistir</a>
                </footer>
            </div>
        );
    }

}