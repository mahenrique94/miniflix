import React, { Component } from "react";

import Input from "../../form/input/Input";
import NavBar from "../../nav_bar/NavBar";
import Panel from "../../../../containers/panel/Panel";

export default class Form extends Component {

    render() {
        return(
            <Panel>
                <NavBar collection="medias" type="form"/>
                <section className="pl-container">
                    <form className="pl-form">
                        <Input id="title" maxlength="120" name="title" required type="text"/>
                    </form>
                </section>
            </Panel>
        );
    }

}