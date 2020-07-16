import TitleH3 from './style/TitleH3.js'
import TitleH4 from './style/TitleH4.js'
import TextP from './style/TextP.js'
import React from 'react'

class RisksAndChallenges extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div>
        <TitleH3>Risks And Commitments</TitleH3>
        <TitleH4>{this.props.data.risktitle1}</TitleH4>
        <TextP>{this.props.data.risktext1}</TextP>
        <TextP>{this.props.data.risktext2}</TextP>
        <TitleH4>{this.props.data.risktitle3}</TitleH4>
        <TextP>{this.props.data.risktext3}</TextP>
        <TitleH4>{this.props.data.risktitle4}</TitleH4>
        <TextP>{this.props.data.risktext4}</TextP>
        <TextP>{this.props.data.risktext5}</TextP>
      </div>
    )
  }
}

export default RisksAndChallenges