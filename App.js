import React from 'react'

import Linkive from './Components/Linkive'
import LinkStorage from './Storages/LinkStorage';

export default class App extends React.Component {

  constructor(props) {
    super(props)

    this.linkstorage = new LinkStorage()
  }

  render() {
    return (
      <Linkive 
        linkstorage={this.linkstorage} />
    )
  }
}