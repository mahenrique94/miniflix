import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import I18nHelper from "./../../helpers/I18nHelper";

import Delete from "./form/FormDelete";

export default class Table extends Component {

    static propTypes = {
        list : PropTypes.array.isRequired,
        columns : PropTypes.array.isRequired
    };

    render() {
        return( this.createTable() );
    }

    createTable() {
        if (this.props.list.length > 0) {
            return (
                <table className="pl-table">
                    <thead className="pl-table__header">
                    <tr className="pl-table__header___row">
                        { this.props.columns.map(column => <th className="pl-table__header___column" key={ column }>{ I18nHelper.translate(`label.${column}`) }</th>)}
                        <th></th>
                    </tr>
                    </thead>
                    <tbody className="pl-table__body">
                    { this.props.list.map(item =>
                        <tr className="pl-table__body___row" key={ item._id }>
                            { this.props.columns.map(column => <td className="pl-table__body___column" key={ column }>{ item[column] }</td>) }
                            <td className="pl-table__body___column">
                                <Link className="pl-table__link pl-table__link--edit" to={`/panel/${this.props.type}/${item._id}`}><i className="fas fa-pencil-alt pl-table__icon"></i>{ I18nHelper.translate("button.edit") }</Link>
                                <Delete delete={ this.props.delete } id={ item._id }/>
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            );
        }
        return <table></table>;
    }

}