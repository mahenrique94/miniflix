import React, { Component } from "react";
import { connect } from "react-redux";

import App from "../../../../containers/app/App";
import Media from "../../media/Media";

import { list } from "../../../../actions/media";

class Medias extends Component {

    componentDidMount() {
        this.props.list();
    }

    render() {
        return(
            <App>
                <div className="mf-container">
                    { this.props.medias.map(media => <Media key={ media._id } title={ media.title } describe={ media.describe } slug={ media.slug }/>) }
                </div>
            </App>
        );
    }

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