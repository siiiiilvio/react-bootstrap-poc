import React, { Component } from 'react';
import DropdownButton from 'react-bootstrap/lib/DropdownButton.js';
import MenuItem from 'react-bootstrap/lib/MenuItem.js'; 

class DropdownButtonGroup extends Component {
    render() {
        const BUTTONS = ['Default', 'Primary', 'Success', 'Info', 'Warning', 'Danger'];
        return (
            BUTTONS.map((title, i) => {
                return (
                    <DropdownButton
                        bsStyle={title.toLowerCase()}
                        title={title}
                        key={i}
                        id={`dropdown-basic-${i}`}
                    >
                        <MenuItem eventKey="1">Action</MenuItem>
                        <MenuItem eventKey="2">Another action</MenuItem>
                        <MenuItem eventKey="3" active>
                            Active Item
                        </MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey="4">Separated link</MenuItem>
                    </DropdownButton>
                )
            })
        )
    }
}

export default DropdownButtonGroup;
