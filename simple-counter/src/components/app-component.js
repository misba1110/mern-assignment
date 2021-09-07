import React from 'react';
import Display from './display-component';
import Button from './count-button-component';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1
        }
    }
    handleclick=(delta)=>{
         let count=this.state.count+delta;         
         
         this.setState({count});
    }
    render() {


        return (<div>
            <h1>hello</h1>
            <Display content={this.state.count} />
            <span >
                <Button handleclick={this.handleclick}   delta={10} />
                <Button handleclick={this.handleclick}   delta={1}  />
                <Button handleclick={this.handleclick}   delta={-1} />
                <Button handleclick={this.handleclick}   delta={-10} />

            </span>
        </div>
        )
    }
}
export default App;