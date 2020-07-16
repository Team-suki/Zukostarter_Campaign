import TitleH3 from './style/TitleH3.js'
import TitleH4 from './style/TitleH4.js'
import TextP from './style/TextP.js'
import StoryP from './style/SP.js'
import Gif from './style/Gif.js'

import React from 'react'

class Story extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    console.log(this.props.data);
    return(
      <div>
        <TitleH3>Story</TitleH3>
        <div><Gif src = {this.props.data.image1}  ></Gif></div><br></br><br></br>
        {/* <TextP>{this.props.data.title1}</TextP> */}
        <div><Gif src = {this.props.data.gif1} ></Gif></div><br></br>
        <StoryP>{this.props.data.storytext2}</StoryP>
        <div><Gif src = {this.props.data.gif2} ></Gif></div><br></br>
        <StoryP>{this.props.data.storytext3}</StoryP>
        <div><Gif src = {this.props.data.gif3} ></Gif></div><br></br><br></br>
        <StoryP>{this.props.data.storyt4}</StoryP>
        <StoryP>{this.props.data.storytext4}</StoryP>
        <div><Gif src = {this.props.data.image2}  ></Gif></div><br></br><br></br>
        <StoryP>{this.props.data.storytext5}</StoryP>
      </div>
    )
  }
}

export default Story