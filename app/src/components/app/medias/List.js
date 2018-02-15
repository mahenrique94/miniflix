import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Dashboard from "./../Dashboard";
import Media from "./../Media";

import { list } from "./../../../actions/media";

class Medias extends Component {

    componentDidMount() {
        this.props.list();
    }

    render() {
        return(
            <Dashboard>
                { this.props.medias.map(media => <Media key={ media._id } describe={ media.describe } title={ media.title } image={ media.image } slug={ media.slug }/>) }
            </Dashboard>
        );
    }

}

Medias.propTypes = {

    medias : PropTypes.array.isRequired,
    list : PropTypes.func.isRequired
    
}

const mapStateToProps = state => {

    return {
        medias : state.success
    }

}

const mapDispatchToProps = dispatch => {

    return {
        list : () => dispatch(list())
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Medias);