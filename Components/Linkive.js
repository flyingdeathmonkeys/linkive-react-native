import React from 'react'
import Splash from './Splash'
import Navigation from './Navigation'

export default class Linkive extends React.Component {
    
  	state = {
    	ready: false
	}
	  
	constructor (props) {
		super(props)
		this.linkstorage = props.linkstorage
	}

    async componentDidMount () {
        setTimeout(() => {
			this.setState({ 
				ready: true,
			})
		}, 1200)
    }

    render () { 
        if (this.state.ready === false) {
            return (<Splash />)
        }
      
        return (
			<Navigation
				screenProps={{
					linkstorage: this.linkstorage
				}} />
		)
    }
}