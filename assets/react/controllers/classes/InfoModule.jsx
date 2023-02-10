import React from 'react'
import GenericModule from "./GenericModule";
import InfoBlock from "./InfoBlock";

class InfoModule extends GenericModule {

    experienceForLv = [
        0, 300, 900, 2700, 6500, 14000, 23000, 34000, 48000, 64000,
        85000, 100000, 120000, 140000, 165000, 195000, 225000, 265000, 305000, 355000
    ];

    experienceUpdate(infoState) {
        let levelValue = 1;

        while (levelValue < this.experienceForLv.length) {
            if (infoState.data.value < this.experienceForLv[levelValue]) {
                break;
            }
            levelValue++;
        }

        infoState.data.level = levelValue;

        infoState.additionnal['level'] = {
            'code' : 'level',
            'name' : 'Level',
            'value' : infoState.data.level,
        };
    }

    updateAdditionnals(infoState) {
        if(infoState.code === 'experience') {
            this.experienceUpdate(infoState);
        }
    }

    render() {
        return (
            <div className='info-module'>
                {
                    Object.values(this.props.moduleData).map((info) => {
                        return (<InfoBlock
                            blockData={info}
                            updateBlock={(infoState) => this.updateBlock(infoState)}
                        />)
                    })
                }
            </div>
        );
    }
}

export default InfoModule;