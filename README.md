# MERN Plaid

<p align="center">
  <img src="MERN_Plaid.gif" alt="MERN Plaid">
</p>

`YouTube Link` https://youtu.be/znrBfD8d0SY

Full-stack banking web app built with [Plaid's API](https://plaid.com) and the MERN stack.

This project uses the following technologies:

- [React](https://reactjs.org) and [React Router](https://reacttraining.com/react-router/) for the frontend
- [Express](http://expressjs.com/) and [Node](https://nodejs.org/en/) for the backend
- [MongoDB](https://www.mongodb.com/) for the database
- [Redux](https://redux.js.org/introduction/getting-started) for global state management
- [Plaid](https://plaid.com) for bank account linkage and transaction data
- [Passport](http://www.passportjs.org) for user authentication

## Our Plaid flow will go as follows.

- User links a bank account within app, causing our app’s **public key** to be sent to Plaid.
- Plaid responds with a **public token**, which is unique for each sign in and expires in 30 minutes.
- We send our public token to our back-end server, exchanging it for an **access token** and **item id** (each bank account has a unique access token and item id).
- We’ll save this access token, item id and a few other fields in our database (while checking for duplicate accounts).
- We’ll send our **access token, client id, and client secret** to Plaid to get the user’s **transactions.**

## Configuration

### Mongo

Make sure to add your own `MONGOURI` from your [mLab](https://mlab.com) database in `config/keys.js`.

```javascript
module.exports = {
  mongoURI: "YOUR_MONGO_URI_HERE",
  secretOrKey: "secret"
};
```

### Plaid

Also, add your own [Plaid API](https://plaid.com) keys (`PLAID_CLIENT_ID`, `PLAID_SECRET`, and `PLAID_PUBLIC_KEY`) in

1. `routes/api/plaid.js`

```
const PLAID_CLIENT_ID = "YOUR_CLIENT_ID";
const PLAID_SECRET = "YOUR_SECRET";
const PLAID_PUBLIC_KEY = "YOUR_PUBLIC_KEY";
```

2. `client/src/components/dashboard/Dashboard.js` and `client/src/components/dashboard/Accounts.js`

```
<PlaidLinkButton
                buttonProps={{
                  className:
                    "btn btn-large waves-effect waves-light hoverable blue accent-3 main-btn"
                }}
                plaidLinkProps={{
                  clientName: "YOUR_APP_NAME",
                  key: "YOUR_PUBLIC_KEY",
                  env: "sandbox",
                  product: ["transactions"],
                  onSuccess: this.handleOnSuccess
                }}
                onScriptLoad={() => this.setState({ loaded: true })}
              >
                Link Account
</PlaidLinkButton>
```

## Quick Start

```javascript
// Install dependencies for server & client
npm install && cd client && npm install

// Run client & server with concurrently
npm run dev

// Server runs on http://localhost:5000 and client on http://localhost:3000
```
