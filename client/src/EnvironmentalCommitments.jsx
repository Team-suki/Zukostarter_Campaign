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
        <TitleH4>{this.props.data.title1}</TitleH4>
        <TextP>{this.props.data.text1}</TextP>
        <TitleH4>{this.props.data.title2}</TitleH4>
        <TextP>{this.props.data.text2}</TextP>
        <TextP>{this.props.data.text3}</TextP>
        <TextP>{this.props.data.text4}</TextP>
        <TitleH4>{this.props.data.title5}</TitleH4>
        <TextP>{this.props.data.text5}</TextP>
      </div>
    )
  }
}

export default EnvironmentalCommitments