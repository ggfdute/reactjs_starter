import React, { Component } from "react";

class WelcomeScreen extends Component {
    render() {
        return (
            <div>
                <h3>The Email has been sent.</h3>
                <p className="forgot-password text-right">
                    Now go back and try again. <a href="Sign-in">Login</a>
                </p>
            </div>
        );
    }
}

export default WelcomeScreen;