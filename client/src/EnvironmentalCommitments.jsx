import TitleH3 from './style/TitleH3.js'
import TitleH4 from './style/TitleH4.js'
import TextP from './style/TextP.js'
import React from 'react'

class EnvironmentalCommitments extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div>
        <TitleH3>Environmental Commitments</TitleH3>
        <TitleH4>{this.props.data.committitle1}</TitleH4>
        <TextP>{this.props.data.committext1}</TextP>
        <TitleH4>{this.props.data.committitle2}</TitleH4>
        <TextP>{this.props.data.committext2}</TextP>
        <TextP>{this.props.data.committext3}</TextP>
        <TextP>{this.props.data.committext4}</TextP>
        <TitleH4>{this.props.data.committitle5}</TitleH4>
        <TextP>{this.props.data.committext5}</TextP>
      </div>
    )
  }
}

export default EnvironmentalCommitments