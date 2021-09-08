import React from "react";
class App extends React.Component{
    constructor(props){
        super(props);
    

this.state={msg:""}
    }
    handleClick=()=>{
        this.setState({msg:'book world'})
    }
    render()
    {
        return (
            <div>
                <p>{this.state.msg}</p>
                <button onClick={this.handleClick}>Refresh</button>
            </div>
        )
    }

}
export default App;

