import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import MediaAction from "../../../actions/MediaAction";

import NavBar from "./../NavBar";
import Panel from "./../../../containers/Panel";
import Table from "./../Table";

class Medias extends Component {

    static propTypes = {
        delete : PropTypes.func.isRequired,
        list : PropTypes.func.isRequired,
        medias : PropTypes.array.isRequired
    };

    componentDidMount() {
        this.props.list();
    }

    render() {
        return(
            <Panel>
                <NavBar collection="medias" type="list"/>
                <section className="pl-container">
                    <Table columns={["title"]} list={ this.props.medias } delete={ this.props.delete } type="medias"/>
                </section>
            </Panel>
        );
    }

}

const mapStateToProps = state => ({
    medias : state.mediaReducer.list
});

const mapDispatchToProps = dispatch => ({
    delete: id => dispatch(MediaAction.remove(id)),
    list : () => dispatch(MediaAction.list())
});

export default connect(mapStateToProps, mapDispatchToProps)(Medias);