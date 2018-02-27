import React, { Component } from "react";
import PropTyes from "prop-types";

import Header from "./../components/app/Header";

export default class Home extends Component {

    static propTypes = {
        children : PropTyes.any.isRequired
    };

    render() {
        return (
            <div>
                <Header/>
                <main>
                    { this.props.children }
                </main>
            </div>
        );
    }

}