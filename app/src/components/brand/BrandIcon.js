import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

class BrandIcon extends Component {

    static propTypes = {
        className : PropTypes.string.isRequired
    };

    render() {
        return <i className={ `fab fa-cloudversify ${this.props.className}` }/>;
    }

}

const StyledBrandIcon = styled(BrandIcon)`
    margin-right: .5rem;
    vertical-align: middle;
`;

export default StyledBrandIcon;
