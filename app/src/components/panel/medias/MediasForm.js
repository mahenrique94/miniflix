import React, { Component } from "react";
import { Form as ReactForm } from "react-final-form";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import axios from "axios";
import config from "./../../../config";

import MediaAction from "./../../../actions/MediaAction";

import AuthHelper from "./../../../helpers/AuthHelper";

import Data from "../form/FormData";
import NavBar from "./../NavBar";
import Panel from "./../../../containers/Panel";
import Actions from "../form/FormActions";

class Form extends Component {

    static propTypes = {
        edit : PropTypes.func.isRequired,
        save : PropTypes.func.isRequired
    };

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
                                    <Data component="textarea" id="describe" minLength="200" name="describe" required type="text"/>
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
            return `${config.API_URL}/file/download/${this.props.media.image}?token=${AuthHelper.getToken()}`
        return "";
    }

    processFile(event) {
        const file = event.target.files[0];
        axios(`${config.API_URL}/file/upload`, {
            method : "POST",
            headers : {
                "x-access-token" : AuthHelper.getToken()
            },
            data : this.buildBody(file)
        }).then(response => {
            if (!response.status === 200) {
                throw new Error("An error was raised on trying upload a file to API");
            }
            this.image.src = URL.createObjectURL(file);
        }).catch(error => console.error(error));
    }

}

const mapStateToProps = state => ({
    media : state.mediaReducer.object
});

const mapDispatchToProps = dispatch => ({
    edit: id => dispatch(MediaAction.edit(id)),
    save : values => dispatch(MediaAction.save(values))
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);