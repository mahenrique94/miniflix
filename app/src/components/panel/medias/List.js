import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import MediaAPI from "./../../../actions/media";

import NavBar from "./../NavBar";
import Panel from "./../../../containers/Panel";
import Table from "./../Table";

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

Medias.propTypes = {

    delete : PropTypes.func.isRequired,
    list : PropTypes.func.isRequired,
    medias : PropTypes.array.isRequired

}

const mapStateToProps = state => {

    return {
        medias : state.list
    }

}

const mapDispatchToProps = dispatch => {

    return {
        delete: id => dispatch(MediaAPI.del(id)),
        list : () => dispatch(MediaAPI.list())
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Medias);