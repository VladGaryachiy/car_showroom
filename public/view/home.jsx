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
                    <div id="test">
                        <h2>Home Page</h2>

                        {/*Carousel*/}
                        {/*     <Carousel/>*/}


                    </div>

                )
            }
        }


        module.exports.Home = Home;










