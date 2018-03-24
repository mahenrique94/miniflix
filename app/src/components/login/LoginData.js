import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import FormDataGroup from "../form/FormDataGroup";

class LoginData extends Component {

    static defaultProps = {
        autoFocus : false,
        required : false
    };

    static propTypes = {
        autoFocus : PropTypes.bool,
        className : PropTypes.string.isRequired,
        component : PropTypes.string.isRequired,
        icon : PropTypes.string.isRequired,
        id : PropTypes.string.isRequired,
        maxLength : PropTypes.string,
        name : PropTypes.string.isRequired,
        placeholder : PropTypes.string,
        required : PropTypes.bool,
        type : PropTypes.string.isRequired
    };

    render() {
        return (
            <div className={ this.props.className }>
                <FormDataGroup { ...this.props } className=""/>
            </div>
        );
    }

}

const StyledLoginData = styled(LoginData)`
    margin-bottom: 1rem;
`;

export default StyledLoginData;