import React from 'react'

class TextInput extends React.Component {
    render() {
        return (
            <input
                name={this.props.input.name}
                type={this.props.input.type}
                className={this.props.input.cssClass}
                defaultValue={this.props.input.defaultValue}
                onChange={(e) => this.props.updateValue(this.props.input.code, e.target.value)}
            />
        );
    }
}

export default TextInput;