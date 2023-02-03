import React from 'react'
import TextInput from './Inputs/TextInput'
import CheckboxInput from './Inputs/CheckboxInput'

class AbilityBlock extends React.Component {
    constructor(props) {
        super(props);
        self = this;
        self.updateValue('value', this.props.ability.value);
        self.updateValue('hasMastery', this.props.ability.hasMastery);
    }

    updateValue(code, value) {
        let inputs = {};

        inputs['value'] = {
            name: this.props.ability.code + '-value',
            type: 'text',
            code: 'value',
            cssClass: 'ability-block__value',
            defaultValue: this.props.ability.value
        };
        inputs['hasMastery'] = {
            name: this.props.ability.code + '-hasMastery',
            type: 'checkBox',
            code: 'hasMastery',
            cssClass: 'ability-block__hasMastery',
            defaultValue: this.props.ability.hasMastery
        };

        let newState = this.props.ability;
        newState[code] = value;
        newState.inputs = inputs;

        this.props.updateAbility(newState)
    }

    render() {
        return (
            <div className={'ability-block --' + this.props.ability.code}>
                <span className='ability-block__name'>{this.props.ability.name}</span>
                <TextInput
                    input={this.props.ability.inputs['value']}
                    updateValue={(code, value) => this.updateValue(code, value)}
                />
                <CheckboxInput
                    input={this.props.ability.inputs['hasMastery']}
                    updateValue={(code, value) => this.updateValue(code, value)}
                />
                {
                    Object.values(this.props.ability.additionnal).map((additionnal) => {
                        return (<span className={'abilty-block__' + additionnal.code + '__value'}>
                            {additionnal.name} : {additionnal.value}
                        </span>)
                    })
                }
            </div>
        );
    }
}

export default AbilityBlock;