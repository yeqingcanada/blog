import React, { Component } from 'react';

import Aux from '../../../hoc/A';
import classes from './Layout.css';
import Navbar from '../NavBar/NavBar';

class Layout extends Component {
    render () {
        return (
            <Aux>
                <Navbar />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;