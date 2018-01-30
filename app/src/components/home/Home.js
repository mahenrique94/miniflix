import React, { Component } from "react";

import App from "../../App";
import Media from "../media/Media";

import { list } from "../../actions/media";

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {medias : []};
    }

    componentDidMount() {
        this.props.store.dispatch(list());
    }

    render() {
        return (
            <App>
                <Media/>
            </App>
        );
    }

}