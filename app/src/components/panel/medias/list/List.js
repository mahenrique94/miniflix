import React, { Component } from "react";
import { connect } from "react-redux";

import { remove, list } from "./../../../../actions/media";

import NavBar from "./../../nav_bar/NavBar";
import Panel from "./../../../../containers/panel/Panel";
import Table from "./../../table/Table";

class Medias extends Component {

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

const mapStateToProps = state => {

    return {
        medias : state.success
    }

}

const mapDispatchToProps = dispatch => {

    return {
        delete: id => dispatch(remove(id)),
        list : () => dispatch(list())
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Medias);