import React from 'react'
import AbilityBlock from './AbilityBlock'

class AbilityModule extends React.Component {
    constructor(props) {
        super(props);
        self = this;
        Object.values(props.abilities).forEach(function(ability) {
            self.updateAbility(props.abilities[ability.code]);
        });
    }

    updateAbility(abilityState) {
        abilityState.additionnal = {};

        let modValue = Math.floor((abilityState.value - 10) / 2);
        abilityState.modValue = modValue; //setting value to state to be exported to define other values

        let saveValue = abilityState.modValue + this.props.masteryScore * abilityState.hasMastery;

        abilityState.additionnal['mod'] = {
            'code' : 'mod',
            'name' : 'Modifier',
            'value' : modValue,
        };
        abilityState.additionnal['save'] = {
            'code' : 'save',
            'name' : 'Save value',
            'value' : saveValue,
        };

        let newAbilitiesState = this.props.abilities;
        newAbilitiesState[abilityState.code] = abilityState;

        this.props.updateAbilities(newAbilitiesState);
    }

    render() {
        return (
            <div className='ability-module'>
                {
                    Object.values(this.props.abilities).map((ability) => {
                        return (<AbilityBlock
                            ability={ability}
                            updateAbility={(abilityState) => this.updateAbility(abilityState)}
                        />)
                    })
                }
            </div>
        );
    }
}

export default AbilityModule;