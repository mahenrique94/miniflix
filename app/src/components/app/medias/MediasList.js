import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import MediaAction from "../../../actions/MediaAction";

import Dashboard from "./../Dashboard";
import Media from "./../Media";

class Medias extends Component {

    static propTypes = {
        medias : PropTypes.array.isRequired,
        list : PropTypes.func.isRequired
    };

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

const mapStateToProps = state => ({
    medias : state.mediaReducer.list
});

const mapDispatchToProps = dispatch => ({
    list : () => dispatch(MediaAction.list())
});

export default connect(mapStateToProps, mapDispatchToProps)(Medias);