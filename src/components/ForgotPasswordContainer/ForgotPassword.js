import React, { Component } from "react";

class ForgotPassword extends Component {
    render() {
        return (
            <form>
                <h3>ForgotPassword</h3>

                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="Enter username" />
                </div>

                 <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>
                <form action="Email-sent">
                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                </form>
            </form>
        );
    }
}

export default ForgotPassword;