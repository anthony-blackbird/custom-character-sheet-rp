import React from 'react'

class InfoBlock extends React.Component {
    updateInfoValue(value) {
        let newState = this.props.info;
        newState.value = value;
        this.props.updateInfo(newState)
    }

    render() {
        return (
            <div className={'info-block --' + this.props.info.code}>
                <span className='info-block__name'>{this.props.info.name}</span>
                <input
                    name={this.props.info.code + '-input'}
                    type='text'
                    className='info-block__input'
                    defaultValue={this.props.info.value}
                    onChange={(e) => this.updateInfoValue(e.target.value)}
                />
            </div>
        );
    }
}

export default InfoBlock;