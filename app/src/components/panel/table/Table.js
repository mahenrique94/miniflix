import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Table.css";

export default class Table extends Component {

    render() {
        return(
            <table className="pl-table">
                <thead className="pl-table__header">
                    <tr className="pl-table__header___row">
                        { this.props.columns.map(column => <th className="pl-table__header___column" key={ column }>{ column }</th>)}
                        <th></th>
                    </tr>
                </thead>
                <tbody className="pl-table__body">
                    { this.props.list.map(item =>
                        <tr className="pl-table__body___row" key={ item._id }>
                            { this.props.columns.map(column => <td className="pl-table__body___column" key={ column }>{ item[column] }</td>) }
                            <td className="pl-table__body___column">
                                <Link className="pl-table__link pl-table__link--edit" to={`/panel/${this.props.type}/edit/${item._id}`}><i className="fas fa-pencil-alt pl-table__icon"></i>Editar</Link>
                                <button className="pl-table__link pl-table__link--delete" onClick={ this.props.delete(item._id) } type="button"><i className="fas fa-trash-alt pl-table__icon"></i>Deletar</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

}


