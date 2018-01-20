import React, { Component } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, FormControl, Button } from 'react-bootstrap'
import AgeStats from './components/AgeStats'

class App extends Component {
  constructor() {
    super()

    this.state = {
      newDate: '',
      birthDay: '10/12/1994',
      showStats: false
    }
  }
  onGetDate(e) {
    this.setState({
      newDate: e.target.value
    })
  }
  showDate() {
    this.setState({
      birthday: this.state.newDate,
      showStats: !this.state.showStats
    })
  }
  render() {
    return (
      <div className="row">
        <div className="container">
          <h2>Input Your Birthday!</h2>
          <Form>
            <FormControl
              type="date"
              onChange={this.onGetDate.bind(this)}
              value={this.state.newDate}
            />
            <Button onClick={this.showDate.bind(this)}>Submit</Button>
          </Form>
          {
            this.state.showStats ?
              <div className="fade age-stats">
                <AgeStats date={this.state.birthday} />
              </div>
              :
              <div></div>
          }
        </div>
      </div>
    )
  }
}

export default App
