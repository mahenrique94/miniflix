import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default class MediaLink extends Component {

    static propTypes = {
        children : PropTypes.any.isRequired,
        to : PropTypes.string.isRequired
    };

    render() {
        return (
            <Link to={ this.props.to }>
                { this.props.children }
            </Link>
        );
    }

}