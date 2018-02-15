import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { listBySlug } from "./../../actions/media";

import Dashboard from "./Dashboard";

class Detail extends Component {

    componentDidMount() {
        this.props.listBySlug(this.props.match.params.slug);
    }

    render() {
        return(
            <Dashboard>
                
            </Dashboard>
        );
    }

}

Detail.propTypes = {

    media : PropTypes.object.isRequired,
    listBySlug : PropTypes.func.isRequired

}

const mapStateToProps = state => {

    return {
        media : state.success
    }

}

const mapDispatchToProps = dispatch => {

    return {
        listBySlug : slug => dispatch(listBySlug(slug))
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);