import React from 'react'
import InfoBlock from "./InfoBlock";

class InfoModule extends React.Component {
    constructor(props) {
        super(props);
        self = this;
        Object.values(props.infos).forEach(function(info) {
            self.updateInfo(props.infos[info.code]);
        });
    }

    updateInfo(infoState) {
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