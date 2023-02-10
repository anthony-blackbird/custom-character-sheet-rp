import React from 'react'
import AbilityModule from './AbilityModule'
import InfoModule from './InfoModule'

//TODO: (planned) do drvd, skill and health module
//TODO: Find a way to specify an object of value dependencies from a module to another

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

    updateInfos(infos) {
        let newState = this.state;
        newState.infos = infos;

        this.updateState(newState);
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
                    moduleData={this.state.infos}
                    updateModule={(infos) => this.updateInfos(infos)}
                />
                <AbilityModule
                    moduleData={this.state.abilities}
                    masteryScore={this.state.masteryScore}
                    updateModule={(abilities) => this.updateAbilities(abilities)}
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