import React, {Component} from 'react';

class ErrorHandler extends Component {
  constructor() {
    super()

    this.state = {
      hasError: false
    }
  }

  componentDidCatch(error, info) {
    this.setState({hasError: true})
  }

  render() {
    if(this.state.hasError) {
      return (
        <div>Ya gots an error</div>
      )
    } else {
      return (
        this.props.children
      )
    } 
  }
}

export default ErrorHandler;