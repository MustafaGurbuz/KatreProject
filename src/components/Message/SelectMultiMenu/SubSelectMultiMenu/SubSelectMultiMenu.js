import React, { Component } from 'react';
import classes from './SubSelectMultiMenu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks, faTags } from "@fortawesome/free-solid-svg-icons";
import Link from './Link';

class SubSelectMultiMenu extends Component {
    constructor(props) {
        super(props);
        this.state = { value: 'genel bakış' };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        return (

            <form>
                <div className={classes.SubSelectMultiMenu}>
                    <p>Şuraya git</p>
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="genel bakış">Genel Bakış</option>
                        <option value="deneme 1">Deneme 1</option>
                        <option value="deneme 2">Deneme 2</option>
                        <option value="deneme 3">Deneme 3</option>
                    </select>
                    <Link link="/" active>
                        <FontAwesomeIcon icon={faTasks} size="3x" />
                    </Link>
                    <Link link="/">
                        <FontAwesomeIcon icon={faTags} size="3x" />
                    </Link>
                </div>
            </form>
        );
    }
}

export default SubSelectMultiMenu;