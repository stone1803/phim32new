import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div>
        <header className="ht-header">
          <div className="container">
            <nav className="navbar navbar-default navbar-custom">
              {/* Brand and toggle get grouped for better mobile display */}
              <div className="navbar-header logo">
                <div
                  className="navbar-toggle"
                  data-toggle="collapse"
                  data-target="#bs-example-navbar-collapse-1"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <div id="nav-icon1">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
                <a href="">
                  <img
                    className="logo"
                    src="images/logo1.png"
                    alt
                    width={119}
                    height={58}
                  />
                </a>
              </div>
              {/* Collect the nav links, forms, and other content for toggling */}
              <div
                className="collapse navbar-collapse flex-parent"
                id="bs-example-navbar-collapse-1"
              >
                <ul className="nav navbar-nav flex-child-menu menu-left">
                  <li className="hidden">
                    <a href="#page-top" />
                  </li>
                  <li className="">
                    <a
                      className="btn btn-default dropdown-toggle lv1"
                      data-toggle="dropdown"
                    >
                      Trang chủ
                    </a>
                  </li>
                  <li className="dropdown first">
                    <a
                      className="btn btn-default dropdown-toggle lv1"
                      data-toggle="dropdown"
                      data-hover="dropdown"
                    >
                      Danh Sách Phim
                    </a>
                  </li>
                  <li className="dropdown first">
                    <a
                      className="btn btn-default dropdown-toggle lv1"
                      data-toggle="dropdown"
                      data-hover="dropdown"
                    >
                      Cụm Rạp Chiếu
                    </a>
                  </li>
                </ul>
                <ul className="nav navbar-nav flex-child-menu menu-right">
                  
                  <li className="loginLink">
                    <a href="#">LOG In</a>
                  </li>
                  <li className="btn signupLink">
                    <a href="#">sign up</a>
                  </li>
                </ul>
              </div>
              {/* /.navbar-collapse */}
            </nav>
            {/* top search form */}
            <div className="top-search">
              <select>
                <option value="united">TV show</option>
                <option value="saab">Others</option>
              </select>
              <input
                type="text"
                placeholder="Search for a movie, TV Show or celebrity that you are looking for"
              />
            </div>
          </div>
        </header>
        <div>
            
            <div className="login-wrapper" id="login-content">
              <div className="login-content">
                <a href="#" className="close">
                  x
                </a>
                <h3>Login</h3>
                <form method="post" action="#">
                  <div className="row">
                    <label htmlFor="username">
                      Username:
                      <input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Hugh Jackman"
                        pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{8,20}$"
                        required="required"
                      />
                    </label>
                  </div>
                  <div className="row">
                    <label htmlFor="password">
                      Password:
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="******"
                        pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                        required="required"
                      />
                    </label>
                  </div>
                  <div className="row">
                    <div className="remember">
                      <div>
                        <input
                          type="checkbox"
                          name="remember"
                          defaultValue="Remember me"
                        />
                        <span>Remember me</span>
                      </div>
                      <a href="#">Forget password ?</a>
                    </div>
                  </div>
                  <div className="row">
                    <button type="submit">Login</button>
                  </div>
                </form>
                <div className="row">
                  <p>Or via social</p>
                  <div className="social-btn-2">
                    <a className="fb" href="#">
                      <i className="ion-social-facebook" />
                      Facebook
                    </a>
                    <a className="tw" href="#">
                      <i className="ion-social-twitter" />
                      twitter
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/*end of login form popup*/}
            {/*signup form popup*/}
            <div className="login-wrapper" id="signup-content">
              <div className="login-content">
                <a href="#" className="close">
                  x
                </a>
                <h3>sign up</h3>
                <form method="post" action="#">
                  <div className="row">
                    <label htmlFor="username-2">
                      Username:
                      <input
                        type="text"
                        name="username"
                        id="username-2"
                        placeholder="Hugh Jackman"
                        pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{8,20}$"
                        required="required"
                      />
                    </label>
                  </div>
                  <div className="row">
                    <label htmlFor="email-2">
                      your email:
                      <input
                        type="password"
                        name="email"
                        id="email-2"
                        placeholder
                        pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                        required="required"
                      />
                    </label>
                  </div>
                  <div className="row">
                    <label htmlFor="password-2">
                      Password:
                      <input
                        type="password"
                        name="password"
                        id="password-2"
                        placeholder
                        pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                        required="required"
                      />
                    </label>
                  </div>
                  <div className="row">
                    <label htmlFor="repassword-2">
                      re-type Password:
                      <input
                        type="password"
                        name="password"
                        id="repassword-2"
                        placeholder
                        pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                        required="required"
                      />
                    </label>
                  </div>
                  <div className="row">
                    <button type="submit">sign up</button>
                  </div>
                </form>
              </div>
            </div>
            {/*end of signup form popup*/}
          </div>
  
  
      </div>
    );
  }
}
