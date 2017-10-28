import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from 'forms/input';
import { signinUser } from 'store/modules/user/actions';

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    signinUser: attrs => signinUser(attrs),
  }
}

const Login = props => {
  return (
    <div className="row justify-content-md-center">
      <div className="col-6">
        <div className="card">
          <div className="card-block">
            <h2 className="card-title">Login</h2>
            <form onSubmit={props.signinUser}>
              <Input name="user" label="Email" type="email" />
              <Input name="password" label="Password" type="password" />
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  location: PropTypes.object,
  signinUser: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
