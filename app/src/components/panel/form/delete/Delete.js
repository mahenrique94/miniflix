import React, { Component } from "react";

export default class Delete extends Component {

    constructor(props) {
        super(props);

        this.delete = this.delete.bind(this);
    }

    render() {
        return(
            <button className="pl-table__link pl-table__link--delete" onClick={ this.delete } type="button"><i className="fas fa-trash-alt pl-table__icon"></i>Delete</button>
        );
    }

    delete() {
        if (window.confirm("Do you wish delete the Media?")) {
            this.props.delete(this.props.id);
        }
    }

}