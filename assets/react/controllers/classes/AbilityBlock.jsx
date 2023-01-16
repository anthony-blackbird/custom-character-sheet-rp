import React from 'react'

class AbilityBlock extends React.Component {
    updateAbilityScore(value) {
        let newState = this.props.ability;
        newState.value = value;
        this.props.updateAbility(newState)
    }

    updateMastery(value) {
        let newState = this.props.ability;
        newState.hasMastery = value;
        this.props.updateAbility(newState)
    }

    render() {
        return (
            <div className='ability-block --strength'>
                <span className='ability-block__name'>{this.props.ability.name}</span>
                <input
                    name='strength-input'
                    type='text'
                    className='ability-block__input'
                    placeholder='Valeur'
                    defaultValue={this.props.ability.value}
                    onChange={(e) => this.updateAbilityScore(e.target.value)}
                />
                <input
                    name='strength-mastery-check'
                    type='checkbox'
                    className='ability-block__mastery-check'
                    defaultChecked={this.props.ability.hasMastery}
                    onChange={(e) => this.updateMastery(e.target.checked)}
                />
                <span className='ability-block__mod-value'>{this.props.ability.modValue}</span>
                <span className='ability-block__save-value'>{this.props.ability.saveValue}</span>
            </div>
        );
    }
}

export default AbilityBlock;