import React from "react";
import { FormattedMessage } from "react-intl";

export default class I18nHelper {

    static translate(message) {
        return <FormattedMessage id={ message }/>;
    }

}
