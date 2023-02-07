import React from 'react'
import InfoBlock from "./InfoBlock";

class InfoModule extends React.Component {

    experienceForLv = [
        0, 300, 900, 2700, 6500, 14000, 23000, 34000, 48000, 64000,
        85000, 100000, 120000, 140000, 165000, 195000, 225000, 265000, 305000, 355000
    ];

    constructor(props) {
        super(props);
        self = this;
        Object.values(props.infos).forEach(function(info) {
            self.updateInfo(props.infos[info.code]);
        });
    }

    experienceUpdate(infoState) {
        let levelValue = 1;

        while (levelValue < this.experienceForLv.length) {
            if (infoState.data.value < this.experienceForLv[levelValue]) {
                break;
            }
            levelValue++;
        }

        infoState.data.level = levelValue; //setting value to state to be exported to define other values

        infoState.additionnal['level'] = {
            'code' : 'level',
            'name' : 'Level',
            'value' : infoState.data.level,
        };
    }

    updateInfo(infoState) {
        infoState.additionnal = {};

        if(infoState.code === 'experience') {
            this.experienceUpdate(infoState);
        }

        let newInfosState = this.props.infos;
        newInfosState[infoState.code] = infoState;

        this.props.updateInfos(newInfosState);
    }

    render() {
        return (
            <div className='info-module'>
                {
                    Object.values(this.props.infos).map((info) => {
                        return (<InfoBlock
                            info={info}
                            updateInfo={(infoState) => this.updateInfo(infoState)}
                        />)
                    })
                }
            </div>
        );
    }
}

export default InfoModule;