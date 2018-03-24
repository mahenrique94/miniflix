import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import I18nHelper from "../../helpers/I18nHelper";

class BrandText extends Component {

    static propTypes = {
        className : PropTypes.string.isRequired
    };

    render() {
        return <span className={ this.props.className }>{ I18nHelper.translate("title.app") }</span>;
    }

}

const StyledBrandText = styled(BrandText)`
    font-family: Arial, sans-serif;
`;

export default StyledBrandText;
