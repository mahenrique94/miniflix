import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import MediaAction from "../../../actions/MediaAction";

import Dashboard from "../Dashboard";

class Detail extends Component {

    static propTypes = {
        media : PropTypes.object,
        listBySlug : PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.listBySlug(this.props.match.params.slug);
    }

    render() {
        return(
            <Dashboard>
                <h1>{ this.props.media.title }</h1>
            </Dashboard>
        );
    }

}

const mapStateToProps = state => ({
    media : state.mediaReducer.object
});

const mapDispatchToProps = dispatch => ({
    listBySlug : slug => dispatch(MediaAction.listBySlug(slug))
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);