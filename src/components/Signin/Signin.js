import React from 'react';
import InputGroup from '../Form/Form';
const baseUrl = process.env.REACT_APP_BASE_URL;
class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signEmail: '',
      signPassword: '',
      errorMsg: '',
    };
  }
  onEmailChange = (e) => {
    this.setState({ signEmail: e.target.value });
  };
  onPasswordChange = (e) => {
    this.setState({ signPassword: e.target.value });
  };
  onSubmitSignIn = () => {
    fetch(`${baseUrl}/signin`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: this.state.signEmail,
        password: this.state.signPassword,
      }),
    })
      .then((res) => res.json())
      .then((user) => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange('home');
          this.setState({ errorMsg: '' });
        } else {
          this.setState({ errorMsg: user });
        }
      });
  };
  render() {
    const { onRouteChange } = this.props;
    return (
      <article className='br3 ba dark-gray b--black-10 mv5 w-100 w-80-m w-50-l mw6 shadow-5 center bg-white o-80 pa4'>
        <main className='black-80 w-60 center'>
          <div className=''>
            <fieldset id='sign_up' className='ba b--transparent ph0 mh0'>
              <legend className='f1 fw6 ph0 mh0 mb4'>Sign In</legend>
              <div className='mb2 f5 fw6 red'>{this.state.errorMsg}</div>
              <div className='mb3 tl'>
                <InputGroup
                  labelName='Email'
                  id='email-address'
                  type='email'
                  handleChange={this.onEmailChange}
                ></InputGroup>
              </div>
              <div className='mb4 tl'>
                <InputGroup
                  labelName='Password'
                  id='password'
                  type='password'
                  handleChange={this.onPasswordChange}
                ></InputGroup>
              </div>
            </fieldset>
            <div className=''>
              <input
                className='b ph3 pv2 input-reset ba btn btn-primary pointer f4 dib'
                type='submit'
                value='Sign in'
                onClick={this.onSubmitSignIn}
              />
            </div>
            <div className='lh-copy mt3'>
              <p
                onClick={() => onRouteChange('register')}
                className='f6 link dim black db pointer'
              >
                Register
              </p>
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default Signin;
