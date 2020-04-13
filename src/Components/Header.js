import React, { Component } from 'react'


class Header extends Component {
   constructor(props){
       super(props)
       this.state ={
           dropView: false
       }
   } 

   handleToggle = () => {
       this.setState({dropView: !this.state.dropView})
   }
    
    
    render() {
        return (
        
            <div className='header' >
                <h1 className='title' >Start Bootstrap</h1>
                <div className='dropdown-button' onClick={this.handleToggle} >
                    <button className='menu-button' >Menu</button>         
                </div>
                {
                this.state.dropView
                ?(
                    <nav className='dropdown-menu' >
                    <span>Services</span>
                    <span>Portfolio</span>
                    <span>About</span>
                    <span>Team</span>
                    <span>Contact</span>
                    </nav>
                )
                :
                null
                }
                <nav className='desktop-links' >
                    <span>Services</span>
                    <span>Portfolio</span>
                    <span>About</span>
                    <span>Team</span>
                    <span>Contact</span>
                </nav>
            </div>
            
        )
    }
}

export default Header
