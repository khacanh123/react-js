import React, { Component } from 'react';
import NavBar from './PageLayout/NavBar';
import Footer from './PageLayout/Footer';
import './App.css';
class ThongBao extends Component {
    render() {
        return (
            <>
                <NavBar />
      <div className="col-lg-6 borded-over container">
        <h2>Font-end Reactjs</h2>
        <div className>
  <div className="container">
    <h2 className="pb-3 pt-2 border-bottom mb-5">Lộ trình học reactjs</h2>
    {/*first section*/}
    <div className="row align-items-center how-it-works d-flex">
      <div className="col-2 text-center bottom d-inline-flex justify-content-center align-items-center">
        <div className="circle font-weight-bold">1</div>
      </div>
      <div className="col-6">
        <h5>HTML, CSS</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor gravida aliquam. Morbi orci urna, iaculis in ligula et, posuere interdum lectus.</p>
      </div>
    </div>
    {/*path between 1-2*/}
    <div className="row timeline">
      <div className="col-2">
        <div className="corner top-right" />
      </div>
      <div className="col-8">
        <hr />
      </div>
      <div className="col-2">
        <div className="corner left-bottom" />
      </div>
    </div>
    {/*second section*/}
    <div className="row align-items-center justify-content-end how-it-works d-flex">
      <div className="col-6 text-right">
        <h5>Javascript</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor gravida aliquam. Morbi orci urna, iaculis in ligula et, posuere interdum lectus.</p>
      </div>
      <div className="col-2 text-center full d-inline-flex justify-content-center align-items-center">
        <div className="circle font-weight-bold">2</div>
      </div>
    </div>
    {/*path between 2-3*/}
    <div className="row timeline">
      <div className="col-2">
        <div className="corner right-bottom" />
      </div>
      <div className="col-8">
        <hr />
      </div>
      <div className="col-2">
        <div className="corner top-left" />
      </div>
    </div>
    {/*third section*/}
    <div className="row align-items-center how-it-works d-flex">
      <div className="col-2 text-center top d-inline-flex justify-content-center align-items-center">
        <div className="circle font-weight-bold">3</div>
      </div>
      <div className="col-6">
        <h5>Reactjs, redux, redux-saga</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor gravida aliquam. Morbi orci urna, iaculis in ligula et, posuere interdum lectus.</p>
      </div>
    </div>
    
  </div>
</div>

      </div>
      <Footer />   
            </>
        );
    }
}

export default ThongBao;