import React, { Component } from "react";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";

import { save } from "../../../../actions/media";

import Data from "../../form/data/Data";
import NavBar from "../../nav_bar/NavBar";
import Panel from "../../../../containers/panel/Panel";
import Actions from "../../form/actions/Actions";

class Form extends Component {

    render() {
        return(
            <Panel>
                <NavBar collection="medias" type="form"/>
                <section className="pl-container">
                    <form className="pl-form" onSubmit={ this.props.handleSubmit }>
                        <Data component="input" id="title" maxLength="120" name="title" required type="text"/>
                        <Data component="textarea" id="describe" maxLength="120" name="describe" required type="text"/>
                        <Actions collection="medias"/>
                    </form>
                </section>
            </Panel>
        );
    }

}

const mapDispatchToProps = dispatch => {

    return {
        onSubmit : values => dispatch(save(values))
    }

}

export default connect(null, mapDispatchToProps)(reduxForm({ form : "formmedias" })(Form));