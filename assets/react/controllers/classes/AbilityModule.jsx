import React from 'react'
import GenericModule from "./GenericModule";
import AbilityBlock from './AbilityBlock'

class AbilityModule extends GenericModule {
    updateAdditionnals(abilityState) {
        let modValue = Math.floor((abilityState.data.value - 10) / 2);
        abilityState.data.mod = modValue;

        let saveValue = abilityState.data.mod + this.props.masteryScore * abilityState.data.hasMastery;
        abilityState.data.save = saveValue;

        abilityState.additionnal['mod'] = {
            'code' : 'mod',
            'name' : 'Modifier',
            'value' : abilityState.data.mod,
        };
        abilityState.additionnal['save'] = {
            'code' : 'save',
            'name' : 'Save value',
            'value' : abilityState.data.save,
        };
    }

    render() {
        return (
            <div className='ability-module'>
                {
                    Object.values(this.props.moduleData).map((ability) => {
                        return (<AbilityBlock
                            blockData={ability}
                            updateBlock={(abilityState) => this.updateBlock(abilityState)}
                        />)
                    })
                }
            </div>
        );
    }
}

export default AbilityModule;