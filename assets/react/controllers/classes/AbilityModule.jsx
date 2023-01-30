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
        abilityState.modValue = Math.floor((ability.value - 10) / 2);
        abilityState.saveValue = abilityState.modValue + this.props.masteryScore * abilityState.hasMastery;

        let newAbilitiesState = this.props.abilities;
        newAbilitiesState[ability.code] = abilityState;

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