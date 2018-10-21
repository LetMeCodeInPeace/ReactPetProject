import React, {Component} from 'react'
class Header extends Component{
state = {
    keywords: "Default text goes here!",
}

    render(){

        return(<header> 
                    <div className='logo'>Logo</div>
                    <input onChange={this.inputChangeHandler} type='text'/>
                    <div id='texthere'>{this.state.keywords}</div>
                    
                </header>
            )}

    inputChangeHandler = (event) =>
        {
            this.setState({
                keywords: event.target.value
            })
            document.getElementById('texthere').innerHTML = this.state.keywords
        }
}

export default Header;