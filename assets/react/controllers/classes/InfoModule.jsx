import React from 'react'

class InfoModule extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.infos
    }

    render() {
        return (
            <div className='info-module'>
                <div className='info-block'>
                    Name : {this.state.username}
                </div>
            </div>
        );
    }
}

export default InfoModule;