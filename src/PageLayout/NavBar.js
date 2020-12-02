import React, { Component } from 'react';
import './Layout.css';
import { Link } from 'react-router-dom';
class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark fixed-top">
  <Link className="navbar-brand" to="/">No title</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">
          <i className="fa fa-home" />
          Trang chủ
          <span className="sr-only">(current)</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/mess">
          <i className="fa fa-envelope-o">
            <span className="badge badge-danger">11</span>
          </i>
          Tin nhắn
        </Link>
      </li>
      {/* <li className="nav-item">
        <a className="nav-link disabled" href="#">
          <i className="fa fa-envelope-o">
            <span className="badge badge-warning">11</span>
          </i>
          Disabled
        </a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i className="fa fa-envelope-o">
            <span className="badge badge-primary">11</span>
          </i>
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider" />
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li> */}
    </ul>
    <ul className="navbar-nav ">
      <li className="nav-item">
        <Link className="nav-link" to="/info">
          <i className="fa fa-bell">
            <span className="badge badge-info">11</span>
          </i>
          Thông báo
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/post">
          <i className="fa fa-globe">
            <span className="badge badge-success">11</span>
          </i>
          Bài viết mới
        </Link>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="text" placeholder="Nhập keyword" aria-label="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="button">Tìm kiếm</button>
    </form>
  </div>
</nav>
        );
    }
}

export default NavBar;