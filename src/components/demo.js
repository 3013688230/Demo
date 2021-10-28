import Auth0 from 'react-native-auth0';

const Demo = () => {

const auth0 = new Auth0({ domain: 'mining-rights-holder.us.auth0.com', clientId: 'WHo0tWGRIMAfzFEt0U1gnUA6ysFLjI5l' });

auth0
    .webAuth
    .authorize({scope: 'openid profile email'})
    .then(credentials =>
      // Successfully authenticated
      // Store the accessToken
      this.setState({ accessToken: credentials.accessToken })
    )
    .catch(error => console.log(error));

    auth0.webAuth
    .clearSession({})
    .then(success => {
        Alert.alert(
            'Logged out!'
        );
        this.setState({ accessToken: null });
    })
    .catch(error => {
        console.log('Log out cancelled');
    });

}

export default Demo;
