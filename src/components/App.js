import React from 'react'
import {connect} from 'react-redux'
import './../App.scss'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.props.dispatch({
      type: 'SET_SOMETHING',
      data: 'Works',
    })
  }

  render() {
    return (
      <div className="QuizApp">
        <pre>{JSON.stringify(this.props, null, 2)}</pre>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    state,
  }
}

export default connect(mapStateToProps)(App)
