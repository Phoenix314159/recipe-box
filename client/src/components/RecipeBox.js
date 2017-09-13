import React, {Component} from 'react';

export default class RecipeBox extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="dropdown">
                <button className="btn btn-primary dropdown-toggle"
                        type="button" data-toggle="dropdown">Dropdown
                </button>
                <ul className="dropdown-menu">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                </ul>
            </div>
        )
    }
}
