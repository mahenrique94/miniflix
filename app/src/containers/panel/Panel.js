import React, { Component } from "react";

import Header from "../../components/panel/header/Header";

export default class Panel extends Component {

    render() {
        return(
            <div>
                <Header/>
                <main>
                    { this.props.children }
                </main>
            </div>
        );
    }

}