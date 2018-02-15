import React, { Component } from "react";

import App from "./../../containers/App";

export default class Detail extends Component {

    render() {
        return(
            <App>
                <div className="mf-container">
                    { this.props.children }
                </div>
            </App>
        );
    }

}