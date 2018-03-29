import React, { Component } from "react";
import PropTyes from "prop-types";
import styled from "styled-components";

import Header from "./../components/app/Header";

class App extends Component {

    static propTypes = {
        children : PropTyes.any.isRequired,
        className : PropTyes.string.isRequired
    };

    render() {
        return (
            <div>
                <Header/>
                <main className={ this.props.className }>
                    { this.props.children }
                </main>
            </div>
        );
    }

}

const StyledApp = styled(App)`
    display: flex;
    flex-wrap: wrap;
    padding: 3rem;
`;

export default StyledApp;