import React, { Component } from "react";
import PropTypes from "prop-types";

export default class MenuList extends Component {

    static propTypes = {
        children : PropTypes.any.isRequired
    };

    render() {
        return <ul>{ this.props.children }</ul>;
    }

}