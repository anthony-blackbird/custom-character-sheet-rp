import React from 'react'
import GenericBlock from './GenericBlock'
import TextInput from './Inputs/TextInput'

class InfoBlock extends GenericBlock {
    render() {
        return (
            <div className={this.props.blockData.blockCode + '-block --' + this.props.blockData.code}>
                <span className={this.props.blockData.blockCode + '-block__name'}>{this.props.blockData.name}</span>
                <TextInput
                    input={this.props.blockData.inputs['value']}
                    updateValue={(code, value) => this.updateValue(code, value)}
                />
                {
                    Object.values(this.props.blockData.additionnal).map((additionnal) => {
                        return (<span className={this.props.blockData.blockCode + '-block__' + additionnal.code + '__value'}>
                            {additionnal.name} : {additionnal.value}
                        </span>)
                    })
                }
            </div>
        );
    }
}

export default InfoBlock;