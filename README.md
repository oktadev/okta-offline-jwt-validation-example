# Offline JWT validation in Go

This repository shows how to locally validate a JWT with Go. 
Please read https://developer.okta.com/blog/2021/01/04/offline-jwt-validation-with-go to see how this example was created.

**Prerequisites:** 

- **Go**: [OpenJDK website](https://golang.org/doc/install). 

> [Okta](https://developer.okta.com/) has Authentication and User Management APIs that reduce development time with instant-on, scalable user infrastructure. Okta's intuitive API and expert support make it easy for developers to authenticate, manage, and secure users and roles in any application.

* [Getting Started](#getting-started)
* [Links](#links)
* [Help](#help)
* [License](#license)

## Getting Started

To install this example, run the following commands:

```bash
git clone https://github.com/oktadeveloper/okta-offline-jwt-validation-example.git
cd okta-offline-jwt-validation-example
go get github.com/gin-gonic/gin
go get github.com/dgrijalva/jwt-go
```

### Create an Application in Okta

Log in to your Okta Developer account (or [sign up](https://developer.okta.com/signup/) if you don’t have an account).

1. From the **Applications** page, choose **Add Application**.
2. On the Create New Application page, select **Single-Page App**.
3. Give your app a memorable name, add `http://localhost:8080` as a Login redirect URI, then click **Done**.

There are two pieces of information that you need to obtain from the Okta Developer Console. 
These are your Okta domain name (e.g. `dev-12345.okta.com`) and your client id (e.g. `0ab1c2defg3AB4Chi567`).

Edit the file `client/control.js` and replace `${yourOktaDomain}` and `${yourClientId}` with the values you created above.

Return to your terminal and set the `$OKTA_DOMAIN` environment variable to your Okta domain name.
Replace `okta12345.okta.com` with your Okta domain name. 

``` bash
export OKTA_DOMAIN="dev-12345.okta.com"
```

Then use this command to run the example:

``` bash
go run main.go
```

Next, point a web browser at http://localhost:8080.

Enter a message and hit the submit button. You should get an authorization error.

Now, login and try sending another message. This should send a token that gets validated correctly. Your message should be displayed.

Learn more by reading the [blog post](https://developer.okta.com/blog/2021/01/04/offline-jwt-validation-with-go).

## Links

This example uses the following open source libraries:

* [Gin Web Framework](https://github.com/gin-gonic/gin) 
* [jwt-go](https://github.com/dgrijalva/jwt-go)

## Help

Please post any questions as comments on the [blog post](https://developer.okta.com/blog/2021/01/04/offline-jwt-validation-with-go), or on the [Okta Developer Forums](https://devforum.okta.com/).

## License

Apache 2.0, see [LICENSE](LICENSE).
