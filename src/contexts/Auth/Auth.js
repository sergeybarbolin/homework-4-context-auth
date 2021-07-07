import React, { PureComponent } from 'react';

const { Provider, Consumer: AuthConsumer } = React.createContext('');

class AuthProvider extends PureComponent {
  state = {
    email: null,
    authorizeError: '',
    isAuthorized: false
  }

  authorize = (email, pass) => {
    if (email === 'stu@dent.com' && pass === '123') {
      this.setState(
        {
          isAuthorized: true,
          email,
          authorizeError: ''
        }
      )
    } else {
      this.setState({authorizeError: 'Email или пароль введён не верно'});
    }
  }

  logout = () => this.setState({isAuthorized: false})

  getProviderValue = () => {
    const {email, isAuthorized, authorizeError} = this.state;

    return { email, isAuthorized, authorizeError, authorize: this.authorize, logout: this.logout }
  }
  
  render() {
    const { children } = this.props;
    return <Provider value={this.getProviderValue()}>{children}</Provider>;
  }
}

const TestProvider = Provider;

export { AuthProvider, AuthConsumer, TestProvider };
