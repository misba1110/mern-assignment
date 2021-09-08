import React from "react";

class components extends React.Component {
    constructor(props) {
        super(props)
        
        
      this.handleClick=this.onClickForward.bind(this);
      
      const image={
          image1:"https://unsplash.com/photos/9DaOYUYnOls",
          image2:""
      }
      this.handleClick=this.onClickForward.bind(this);
      
      this.state={
          index:0,
          imageList:[image]
      }
    }
    
    handleClick = () => {
        if(this.state.index+1===this.state.imageList.length){
            this.setState({index:0})
        }else{this.setState({index:this.state.index+1})}
    }
    render() {
         return(
             <div>
        <imag src={this.state.imageList[this.state.index]} alt=""/><br/>


            <button onClick={this.handleClick}>refresh</button>
            </div>
    



            
         )
    }
}




export default components;
