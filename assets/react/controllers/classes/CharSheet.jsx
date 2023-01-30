import React from 'react'
import AbilityModule from './AbilityModule'
import InfoModule from './InfoModule'

//TODO: create InfoBlock component
//TODO: (planned) do skill, drvd and health module

class CharSheet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            infos: props.charsheet.infos,
            //drvd
            masteryScore: props.charsheet.masteryScore,
            abilities: props.charsheet.abilities
        }
    }

    updateAbilities(abilities) {
        let newState = this.state;
        newState.abilities = abilities;

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
                    abilities={this.state.abilities}
                    masteryScore={this.state.masteryScore}
                    updateAbilities={(abilities) => this.updateAbilities(abilities)}
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