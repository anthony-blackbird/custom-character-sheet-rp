import React from 'react'

class GenericModule extends React.Component {

    updateAdditionnals(blockState) {}

    updateBlock(blockState) {
        blockState.additionnal = {};

        this.updateAdditionnals(blockState)

        let newBlockState = this.props.moduleData;
        newBlockState[blockState.code] = blockState;

        this.props.updateModule(newBlockState);
    }
}

export default GenericModule;