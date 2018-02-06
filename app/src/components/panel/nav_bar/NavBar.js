import React, { Component } from "react";
import { Link } from "react-router-dom";

import Breadcrumb from "../breadcrumb/Breadcrumb";

import "./NavBar.css";

export default class NavBar extends Component {

    render() {
        return(
            <div className="pl-navbar">
                <Breadcrumb title={ this.props.collection }/>
                { this.createButtons() }
            </div>
        );
    }

    createButtons() {
        if (this.props.type === "list") {
            return (<Link className="pl-navbar__link pl-navbar__link--new" to={`/panel/${this.props.collection}/new`}><i className="fas fa-plus pl-navbar__icon"></i>New</Link>);
        } else {
            return (
                <div>
                    <button className="pl-navbar__link pl-navbar__link--save" type="button"><i className="fas fa-save pl-navbar__icon"></i>Save</button>
                    <Link className="pl-navbar__link pl-navbar__link--new" to={`/panel/${this.props.collection}`}><i className="fas fa-search pl-navbar__icon"></i>Search</Link>
                </div>
            );
        }
    }

}