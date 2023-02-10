import React from 'react'
import TextInput from './Inputs/TextInput'
import CheckboxInput from './Inputs/CheckboxInput'

class GenericBlock extends React.Component {
    constructor(props) {
        super(props);
        self = this;
        this.initInputs();
    }

    initInputs() {
        self = this;

        let inputs = {};
        let data = {};
        let newState = this.props.blockData;

        for (const [code, inputData] of Object.entries(this.props.blockData.inputs)) {
            inputs[code] = {
                name: self.props.blockData.blockCode + '-' + code,
                type: inputData.type,
                code: code,
                cssClass: self.props.blockData.blockCode + '-block__' + code,
                defaultValue: inputData.defaultValue
            };

            data[code] = inputData.defaultValue;
        }

        newState.inputs = inputs;
        newState.data = data;

        this.props.updateBlock(newState);
    }

    updateValue(code, value) {
        let newState = this.props.blockData;
        newState.data[code] = value;
        this.props.updateBlock(newState);
    }
}

export default GenericBlock;