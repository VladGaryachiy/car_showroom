let React = require('react');
let ReactDOM = require('react-dom');
let Carousel = require('./component/carousel').Carousel;



let ReactCSSTransitionGroup = require('react-addons-css-transition-group');


        class Home extends React.Component{
            constructor(props){
                super(props);
            }

            render() {

                return(
                  <div className="container-fluid home-part-one">
                      <div className="row">
                          <div className="col-md-12 col-sm-12 col-xs-12">
                              <h1 className="home-main-title">Ласкаво просимо в світ <span className="home-logo">- GMC</span></h1>
                          </div>
                      </div>
                  </div>

                )
            }
        }


        module.exports.Home = Home;










