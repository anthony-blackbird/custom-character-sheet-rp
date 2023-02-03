import React from 'react'
import TextInput from './Inputs/TextInput'

class InfoBlock extends React.Component {
    constructor(props) {
        super(props);
        self = this;
        self.updateValue('value', this.props.info.value);
    }
    updateValue(code, value) {
        let inputs = {};

        inputs['value'] = {
            name: this.props.info.code + '-value',
            type: 'text',
            code: 'value',
            cssClass: 'info-block__value',
            defaultValue: this.props.info.value
        };

        let newState = this.props.info;
        newState[code] = value;
        newState.inputs = inputs;

        this.props.updateInfo(newState)
    }

    render() {
        return (
            <div className={'info-block --' + this.props.info.code}>
                <span className='info-block__name'>{this.props.info.name}</span>
                <TextInput
                    input={this.props.info.inputs['value']}
                    updateValue={(code, value) => this.updateValue(code, value)}
                />
                {
                    Object.values(this.props.info.additionnal).map((additionnal) => {
                        return (<span className={'experience-block__' + additionnal.code + '__value'}>
                            {additionnal.name} : {additionnal.value}
                        </span>)
                    })
                }
            </div>
        );
    }
}

export default InfoBlock;