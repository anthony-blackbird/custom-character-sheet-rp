import React from 'react'

class CharSheet extends React.Component {
    render() {
        return (<div className='char-sheet'>CharSheet : {this.props.username}</div>);
    }
}

export default CharSheet;