var accessToken = null;

var signIn = new OktaSignIn({
    baseUrl: 'http://dev-436256.okta.com',
    clientId: '0oaavsqp2YFRRTL5x5d5',
    authParams: {
        issuer: 'https://dev-436256.okta.com/oauth2/default',
        responseType: ['token', 'id_token']
    }
});

signIn.renderEl({
    el: '#widget-container'
}, function success(res) {
    if (res.status === 'SUCCESS') {
        accesstoken = res.tokens.accessToken.accessToken;
        document.getElementById('message').value += accesstoken;
        signIn.hide();
    } else {
        alert('fail);')
    }
}, function(error) {
    alert('error ' + error);
});

function onmessage() {
    const url = "/api/messages";
    var headers = {}
    if (accessToken != null) {
        headers = { 'Authorization': 'Bearer ' + accessToken }
    }
    fetch(url, {
        method : "POST",
        mode: 'cors',
        headers: headers,
        body: new URLSearchParams(new FormData(document.getElementById("messageForm"))),
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error(response.error)
        }
        return response.text();
    })
    .then(data => {
        var msgs = JSON.parse(data) 
        document.getElementById('messages').value = msgs.messages.join('\n');
    })
    .catch(function(error) {
        document.getElementById('messages').value = "Permission denied";
    });
}