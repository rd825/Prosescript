import React, { Component } from "react";
import queryString from "query-string";
import axios from "axios";
import { Redirect } from "react-router-dom";
import styled from "@emotion/styled";
import Container from "./Container";

class Callback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      email: "",
      success: false
    };
  }

  componentDidMount() {
    const values = queryString.parse(this.props.location.search);
    if (values.error === "access_denied") {
      this.setState({ error: true });
    } else if (values.state && values.state !== "opensesame") {
      this.setState({ error: true });
    }
  }

  changeHandler = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  submitHandler = event => {
    event.preventDefault();
    const values = queryString.parse(this.props.location.search);

    if (this.state.email === "") {
      alert("Please enter the email address you wish to use.");
    } else {
      axios
        .post("https://prosescript.herokuapp.com/api/auth", {
          code: values.code,
          email: this.state.email
        })
        .then(res => {
          console.log(res.data);
          this.setState({ email: "", success: true });
          console.log("then fired");
        })
        .catch(err => this.setState({ error: true, err }));
    }
    event.target.reset();
    console.log("reset fired");
  };

  render() {
    if (this.state.success === true) {
      return <Redirect to="/" />;
    } else if (this.state.error) {
      return (
        <Container>
          <div id="error">
            <h1 className="hero">Hmm, something went wrong.</h1>
            <h4>Here are a couple things you could try:</h4>
            <ol>
              <li>
                You've already signed up for Prosescript with that Medium
                account.
              </li>
              <li>
                Make sure you have a{" "}
                <a className="href" href="https://medium.com/">
                  Medium account
                </a>
                .
              </li>

              <li>Log out of and back into your Medium account.</li>

              <li>Clear your browser history, cookies, etc.</li>

              <li>
                If none of those things work, contact{" "}
                <a className="href" href="https://twitter.com/RDesai01">
                  @RDesai01
                </a>{" "}
                on Twitter with your issue.
              </li>
            </ol>
          </div>
        </Container>
      );
    } else {
      return (
        <Container>
          <div id="register">
            <h1 className="hero">You're almost signed up!</h1>

            <h4>
              Please read all of the following for the best Prosescript
              experience:
            </h4>

            <ol>
              <li>
                You are participating in an <mark>alpha test</mark> of
                Prosescript. It is quite likely you will encounter bugs. Please
                report them to{" "}
                <a className="href" href="https://twitter.com/RDesai01">
                  @RDesai01
                </a>{" "}
                on Twitter.
              </li>

              <li>
                Now that you've signed up, you're ready to go. In fact, you'll
                never need to visit our website again.
              </li>

              <li>
                When you have writing that you want to publish, simply email it
                to <mark>prosescript(at)outlook(dot)com</mark> (replace the
                words in parentheses with the corresponding characters).
              </li>

              <li>
                The subject line of your email will be your post's title and the
                text of your email will be your post.
              </li>

              <li>
                We will parse your copy as if it is HTML. We do not support
                Markdown at this time. Generally, this means that your posts
                cannot have images and will render without formatting.
              </li>

              <li>
                Just one more thing...{" "}
                <mark>
                  You need to register an email below or we won't know it's you!
                </mark>
              </li>

              <li>
                That's it. Just make sure you're sending your posts to us from
                the email you register with.
              </li>
            </ol>

            <h1 className="hero">We just need your email.</h1>

            <h4>
              You should enter the email address you will be sending your
              writing from. This is how we process your emails and post
              appropriately to your Medium account. Without your email, we won't
              be able to link up your posts to your account, meaning you won't
              get published!
            </h4>

            <h4>
              <mark>
                Once you're successfully signed up, we'll redirect you back to
                the homepage.
              </mark>
            </h4>

            <Form onSubmit={this.submitHandler}>
              <input
                type="email"
                name="email"
                placeholder="Please enter your email here."
                value={this.props.value}
                onChange={this.changeHandler}
              />
              <input type="submit" value="Complete Signup" />
            </Form>
          </div>
        </Container>
      );
    }
  }
}

export default Callback;

const Form = styled.form`
  margin: 60px 0 50px;
  font-family: "Lato", sans-serif;
  display: flex;
  flex-flow: column nowrap;

  @media (max-width: 800px) {
    margin: 30px 0;
    align-items: center;
  }

  input[type="email"] {
    padding: 20px 10px;
    border: 2px solid #e2e6e5;
    border-bottom: 2px solid #123;
    background: transparent;
    color: #123;
    font-size: 20px;
    height: 50px;
    width: 500px;

    @media (max-width: 800px) {
      font-size: 15px;
      width: 100%;
    }
  }

  input[type="email"]:focus {
    outline: none;
    border-bottom: 2px solid #00ab6b;
    transition: all 0.3s;
  }

  input[type="submit"] {
    margin-top: 75px;
    width: 250px;
    border-radius: 50px;
    border: transparent;
    background: #00ab6b;
    color: white;
    font-size: 16px;
    text-decoration: none;
    padding: 15px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

    @media (max-width: 500px) {
      margin-top: 30px;
    }
  }

  input[type="submit"]:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }
`;
