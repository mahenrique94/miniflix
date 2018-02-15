import React, { Component } from "react";

import Header from "./../components/panel/Header";

export default class Panel extends Component {

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