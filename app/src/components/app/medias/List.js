import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import App from "./../../../containers/App";
import Media from "./../Media";

import { list } from "./../../../actions/media";

class Medias extends Component {

    componentDidMount() {
        this.props.list();
    }

    render() {
        return(
            <App>
                <div className="mf-container">
                    { this.props.medias.map(media => <Media key={ media._id } describe={ media.describe } title={ media.title } image={ media.image } slug={ media.slug }/>) }
                </div>
            </App>
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