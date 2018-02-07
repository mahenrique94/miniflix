import React, { Component } from "react";
import { Form as ReactForm } from "react-final-form";
import { connect } from "react-redux";

import { edit, save } from "../../../../actions/media";

import Data from "../../form/data/Data";
import NavBar from "../../nav_bar/NavBar";
import Panel from "../../../../containers/panel/Panel";
import Actions from "../../form/actions/Actions";


class Form extends Component {

    componentDidMount() {
        if (this.props.match.params) {
            if (this.props.match.params.id !== undefined && this.props.match.params.id !== "" && this.props.match.params.id.length > 0) {
                this.props.edit(this.props.match.params.id);
            }
        }
    }

    render() {
        return(
            <Panel>
                <NavBar collection="medias" type="form"/>
                <section className="pl-container">
                    <ReactForm initialValues={ this.props.media } onSubmit={ this.props.save } render={ ({ handleSubmit }) => (
                        <form className="pl-form" onSubmit={ handleSubmit }>
                            <Data component="input" id="id" name="_id" type="hidden"/>
                            <Data component="input" id="title" maxLength="120" name="title" required type="text"/>
                            <Data component="textarea" id="describe" maxLength="120" name="describe" required type="text"/>
                            <Actions collection="medias"/>
                        </form>
                    )}/>
                </section>
            </Panel>
        );
    }

}

const mapStateToProps = state => {

    return {
        media : state.success
    }

}

const mapDispatchToProps = dispatch => {

    return {
        edit: id => dispatch(edit(id)),
        save : values => dispatch(save(values))
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Form);