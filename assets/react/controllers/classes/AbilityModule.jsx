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

    updateAbility(ability) {
        ability.modValue = Math.floor((ability.value - 10) / 2);
        ability.saveValue = ability.modValue + this.props.masteryScore * ability.hasMastery;

        let newAbilitiesState = this.props.abilities;
        newAbilitiesState[ability.code] = ability;

        this.props.updateAbilities(newAbilitiesState);
    }

    //TODO : loop on props.abilities to render an AbiltyBlock for every ability instead of manually declaring them in render

    render() {
        return (
            <div className='ability-module'>
                <AbilityBlock
                    ability={this.props.abilities.strength}
                    updateAbility={(ability) => this.updateAbility(ability)}
                />
                <AbilityBlock
                    ability={this.props.abilities.dexterity}
                    updateAbility={(ability) => this.updateAbility(ability)}
                />
                <AbilityBlock
                    ability={this.props.abilities.constitution}
                    updateAbility={(ability) => this.updateAbility(ability)}
                />
                <AbilityBlock
                    ability={this.props.abilities.intelligence}
                    updateAbility={(ability) => this.updateAbility(ability)}
                />
                <AbilityBlock
                    ability={this.props.abilities.wisdom}
                    updateAbility={(ability) => this.updateAbility(ability)}
                />
                <AbilityBlock
                    ability={this.props.abilities.charisma}
                    updateAbility={(ability) => this.updateAbility(ability)}
                />
            </div>
        );
    }
}

export default AbilityModule;