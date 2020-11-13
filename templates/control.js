var accessToken = null;

var signIn = new OktaSignIn({
    baseUrl: 'http://${yourOktaDomain}',
    clientId: '${yourClientId}',
    redirectUri: window.location.origin,
    authParams: {
        issuer: 'https://${yourOktaDomain}/oauth2/default',
        responseType: ['token', 'id_token']
    }
});

signIn.renderEl({
    el: '#widget-container'
}, function success(res) {
    if (res.status === 'SUCCESS') {
        accessToken = res.tokens.accessToken.accessToken;
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