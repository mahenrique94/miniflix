import React, { Component } from "react";
import PropTypes from "prop-types";

import App from "./../../containers/App";

export default class Detail extends Component {

    static propTypes = {
        children : PropTypes.any.isRequired
    };

    render() {
        return(
            <App>
                <div>
                    { this.props.children }
                </div>
            </App>
        );
    }

}