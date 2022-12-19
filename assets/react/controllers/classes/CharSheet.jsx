import React from 'react'

//TODO: update hasMastery with checkbox
//TODO: create AbstractModule, InfoModule and AbilityModule components
//TODO: (planned) do skill, drvd and health module

class CharSheet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //info
            username: props.username,
            //drvd
            masteryScore: 3,
            //ability
            name: 'Force',
            value: props.value,
            hasMastery: props.hasMastery,
            modValue: 0,
            saveValue: 0,
        }
        this.updateAbilityScore(this.state.value);
    }

    updateAbilityScore(value) {
        let newState = this.state;
        newState.value = value;
        newState.modValue = Math.floor((this.state.value - 10) / 2);
        newState.saveValue = this.state.modValue + this.state.masteryScore * this.state.hasMastery;
        this.setState(newState);
    }

    render() {
        return (
            <div className='char-sheet'>
                <div className='info-module'>
                    <div className='info-block'>
                        Name : {this.state.username}
                    </div>
                </div>
                <div className='ability-module'>
                    <div className='ability-block --strength'>
                        <span className='ability-block__name'>{this.state.name}</span>
                        <input
                            name='strength-input'
                            type='text'
                            className='ability-block__input'
                            placeholder='Valeur'
                            defaultValue={this.state.value}
                            onChange={(e) => this.updateAbilityScore(e.target.value)}
                        />
                        <input
                            name='strength-mastery-check'
                            type='checkbox'
                            className='ability-block__mastery-check'
                            defaultValue={this.state.hasMastery}
                        />
                        <span className='ability-block__mod-value'>{this.state.modValue}</span>
                        <span className='ability-block__save-value'>{this.state.saveValue}</span>
                    </div>
                </div>
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