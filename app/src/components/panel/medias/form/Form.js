import React, { Component } from "react";
import { Form as ReactForm } from "react-final-form";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { edit, save } from "./../../../../actions/media";

import Data from "./../../form/data/Data";
import NavBar from "./../../nav_bar/NavBar";
import Panel from "./../../../../containers/panel/Panel";
import Actions from "./../../form/actions/Actions";

import "./Form.css";

class Form extends Component {

    constructor() {
        super();

        this.chooseFile = this.chooseFile.bind(this);
        this.download = this.download.bind(this);
        this.processFile = this.processFile.bind(this);
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
                            <input accept="image/jpeg,image/png" className="pl-form__data is-hide" onChange={ this.processFile } ref={ input => this.file = input } type="file"/>
                            <section className="pl-form__body">
                                <div className={`pl-form__elements ${ this.checkMethodIsEdit() ? "" : "is-full"}`}>
                                    <Data component="input" id="id" name="_id" type="hidden"/>
                                    <Data autoFocus={ this.checkAutoFocus() } component="input" id="title" maxLength="120" name="title" required type="text"/>
                                    <Data component="textarea" id="describe" maxLength="120" name="describe" required type="text"/>
                                </div>
                                <div className={`pl-form__source ${ this.checkMethodIsEdit() ? "is-show" : "is-hide"}`}>
                                    <button className="pl-form__trigger" onClick={ this.chooseFile } type="button"><img alt={ this.props.media.title } className="pl-form__img" ref={ input => this.image = input } src={ this.download() }/></button>
                                </div>
                            </section>
                            <Actions collection="medias"/>
                        </form>
                    )}/>
                </section>
            </Panel>
        );
    }

    buildBody(file) {
        const data = new FormData();
        data.append("_id", this.props.media._id);
        data.append("file", file);
        return data;
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

    download() {
        if (this.props.media !== undefined && this.props.media.image !== undefined)
            return `http://localhost:3000/miniflix/api/file/download/${this.props.media.image}?token=${sessionStorage.getItem("access-token")}`
        return "";
    }

    processFile(event) {
        const file = event.target.files[0];
        fetch("http://localhost:3000/miniflix/api/file/upload", {
            method : "POST",
            headers : {
                "x-access-token" : sessionStorage.getItem("access-token")
            },
            body : this.buildBody(file)
        }).then(response => {
            if (!response.ok) {
                throw new Error("An error was raised on trying upload a file to API");
            }
            this.image.src = URL.createObjectURL(file);
        }).catch(error => console.error(error));
    }

}

Form.propTypes = {

    edit : PropTypes.func.isRequired,
    save : PropTypes.func.isRequired

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