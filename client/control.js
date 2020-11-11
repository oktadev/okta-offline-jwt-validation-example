var accesstoken = null;

var signIn = new OktaSignIn({
    baseUrl: 'http://dev-436256.okta.com',
    clientId: '0oaavsqp2YFRRTL5x5d5',
    authParams: {
        issuer: 'https://dev-436256.okta.com/oauth2/default',
        responseType: ['token', 'id_token']
    }
});

signIn.renderEl({
    el: '#login-container'
}, function success(res) {
    if (res.status === 'SUCCESS') {
        accesstoken = res.tokens.accessToken.accessToken;
        document.getElementById('token').value += accesstoken;
    } else {
        alert('fail);')
    }
}, function(error) {
    alert('error ' + error);
});

function message() {
    const url = "/api/messages";
    fetch(url, {
        method : "POST",
        mode: 'cors',
        body: new URLSearchParams(new FormData(document.getElementById("messageForm"))),
    })
    .then((response) => {
        return response.text();
    })
    .then(data => {
        document.getElementById('messages').value = data;
    })
    .catch(function(error) {
        alert("Error " + error);
    });
}