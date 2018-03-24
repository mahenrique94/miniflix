import React, { Component } from "react";

import BrandIcon from "./BrandIcon";
import BrandText from "./BrandText";

export default class Brand extends Component {

    render() {
        return (
            <span>
                <BrandIcon/>
                <BrandText/>
            </span>
        );
    }

}
