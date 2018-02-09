import React, { Component } from "react";
import { Form as ReactForm } from "react-final-form";
import { connect } from "react-redux";

import { edit, save } from "../../../../actions/media";

import Data from "../../form/data/Data";
import NavBar from "../../nav_bar/NavBar";
import Panel from "../../../../containers/panel/Panel";
import Actions from "../../form/actions/Actions";

import "./Form.css";

class Form extends Component {

    constructor() {
        super();

        this.processFile = this.processFile.bind(this);
        this.chooseFile = this.chooseFile.bind(this);
    }

    componentDidMount() {
        if (this.checkMethodIsEdit()) {
            this.props.edit(this.props.match.params.id);
        }
    }

    render() {
        return(
            <Panel>
                <NavBar collection="medias" type="form"/>
                <section className="pl-container">
                    <ReactForm initialValues={ this.props.media } onSubmit={ this.props.save } render={ ({ handleSubmit }) => (
                        <form autoComplete="off" className="pl-form" encType="multipart/form-data" onSubmit={ handleSubmit }>
                            <input className="pl-form__data is-hide" onChange={ this.processFile } ref={ input => this.file = input } type="file"/>
                            <section className="pl-form__body">
                                <div className={`pl-form__elements ${ this.checkMethodIsEdit() ? "" : "is-full"}`}>
                                    <Data component="input" id="id" name="_id" type="hidden"/>
                                    <Data autoFocus={ this.checkAutoFocus() } component="input" id="title" maxLength="120" name="title" required type="text"/>
                                    <Data component="textarea" id="describe" maxLength="120" name="describe" required type="text"/>
                                </div>
                                <div className={`pl-form__source ${ this.checkMethodIsEdit() ? "is-show" : "is-hide"}`}>
                                    <button className="pl-form__trigger" onClick={ this.chooseFile } type="button"><img alt="" className="pl-form__img" ref={ input => this.image = input }/></button>
                                </div>
                            </section>
                            <Actions collection="medias"/>
                        </form>
                    )}/>
                </section>
            </Panel>
        );
    }

    checkAutoFocus() {
        return !this.checkMethodIsEdit();
    }

    checkMethodIsEdit() {
        if (this.props.match.params) {
            if (this.props.match.params.id !== undefined && this.props.match.params.id !== "" && this.props.match.params.id.length > 0) {
                return true;
            }
        }
        return false;
    }

    chooseFile() {
        this.file.click();
    }

    processFile(event) {
        this.image.src = URL.createObjectURL(event.target.files[0]);
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