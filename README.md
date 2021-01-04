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
