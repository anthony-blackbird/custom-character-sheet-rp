import React from 'react'
import AbilityModule from './AbilityModule'
import InfoModule from './InfoModule'

//TODO: create InfoBlock and AbilityBlock components with multiple instance inside of it inside their respective modules
//TODO: (planned) do skill, drvd and health module

class CharSheet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //info
            infos: props.charsheet.infos,
            //drvd
            masteryScore: props.charsheet.masteryScore,
            //ability
            strength: props.charsheet.strength
        }
        this.updateAbility(this.state.strength);
    }

    updateAbility(ability) {
        ability.modValue = Math.floor((ability.value - 10) / 2);
        ability.saveValue = ability.modValue + this.state.masteryScore * ability.hasMastery;

        let newState = this.state;
        newState[ability.code] = ability;

        this.updateState(newState);
    }

    updateState(newState) {
        this.setState(newState);
    }

    render() {
        return (
            <div className='char-sheet'>
                <InfoModule
                    infos={this.state.infos}
                />
                <AbilityModule
                    ability={this.state.strength}
                    updateAbility={(ability) => this.updateAbility(ability)}
                />
                //TODO: other modules
                {/*<div className='skill-module'>*/}
                {/*    <div className='skill-block'>*/}

                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className='drvd-values-module'>*/}
                {/*    <div className='drvd-values-block'>*/}

                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className='health-module'>*/}
                {/*    <div className='health-block'>*/}

                {/*    </div>*/}
                {/*</div>*/}
            </div>
        );
    }
}

export default CharSheet;