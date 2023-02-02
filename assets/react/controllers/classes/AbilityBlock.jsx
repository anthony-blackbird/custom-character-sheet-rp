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
            <div className={'ability-block --' + this.props.ability.code}>
                <span className='ability-block__name'>{this.props.ability.name}</span>
                <input
                    name={this.props.ability.code + '-input'}
                    type='text'
                    className='ability-block__input'
                    placeholder='Valeur'
                    defaultValue={this.props.ability.value}
                    onChange={(e) => this.updateAbilityScore(e.target.value)}
                />
                <input
                    name={this.props.ability.code + '-mastery-check'}
                    type='checkbox'
                    className='ability-block__mastery-check'
                    defaultChecked={this.props.ability.hasMastery}
                    onChange={(e) => this.updateMastery(e.target.checked)}
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