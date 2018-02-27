import React, { Component } from "react";
import PropTyes from "prop-types";

import Header from "./../components/panel/Header";

export default class Panel extends Component {

    static propTypes = {
        children : PropTyes.any.isRequired
    };

    render() {
        return(
            <div>
                <Header/>
                <main className="pl-content">
                    { this.props.children }
                </main>
            </div>
        );
    }

}