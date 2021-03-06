import React from 'react'
import styled from 'styled-components'

const LoginBoxWrapepr = styled.div`
  padding: 40px 10px;
  background: #2d2a49;
  border: solid 1px #25223c;

  h2 {
    margin-left: 150px;
  }
  .input-container {
    margin-bottom: 16px;

    label {
      float: left;
      padding-top: 3px;
      width: 130px;
      text-align: right;
      color: #ffffff;
      margin-right: 20px;
    }
    input.text {
      width: 250px;
      background: #605d89;
      color: #ffffff;
      border-color: #24233a;
      padding: 3px;
      font-size: 1em;
      font-family: tahoma;
      color: #000000;
      border: solid 1px #24233a;
      -webkit-box-shadow: inset 1px 1px 2px #2c2a48;
      -moz-box-shadow: inset 1px 1px 2px #2c2a48;
      box-shadow: inset 1px 1px 2px #2c2a48;

      color: #fff;
    }
    input.submit {
      margin-left: 150px;
    }
  }
`

class SignupPage extends React.Component {
  state = {
    username: '',
    password: '',
  }

  onUsernameChange = e => {
    e.preventDefault()
    this.setState({ username: e.target.value })
  }

  onPassowrdChange = e => {
    e.preventDefault()
    this.setState({ password: e.target.value })
  }

  onFormSubmit = e => {
    e.preventDefault()
    console.log(this.state)
  }

  render() {
    return (
      <LoginBoxWrapepr>
        <h2>ลงทะเบียน</h2>
        <form onSubmit={this.onFormSubmit}>
          <div className="input-container">
            <label>ชื่อสมาชิก</label>
            <input
              className="text"
              name="username"
              type="text"
              value={this.state.username}
              onChange={this.onUsernameChange}
            />
          </div>
          <div className="input-container">
            <label>รหัสผ่าน</label>
            <input
              className="text"
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.onPassowrdChange}
            />
          </div>

          <div className="input-container">
            <input className="submit" type="submit" />
          </div>
        </form>
      </LoginBoxWrapepr>
    )
  }
}

export default SignupPage
