import React from 'react'

import './sign-in.styles.scss'

class SignIn extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault()

    this.setState({ email: '', password: '' })
  }

  handleChange = event => {
    const { value, name } = event.target

    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <label>Email</label>
          <input name='email'
            type='email'
            value={this.state.email}
            onChange={this.handleChange}
            required>
          </input>
          <label>Password</label>
          <input
            name='password'
            type='password'
            value={this.state.password}
            onChange={this.handleChange}
            required>
          </input>

          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default SignIn