let React = require('react');
let ReactDOM = require('react-dom');
let BrowserRouter = require('react-router-dom').BrowserRouter;
let Route = require('react-router-dom').Route;
let Link = require('react-router-dom').Link;


/*Pages*/

let Cars = require('./cars').Cars;
let Home = require('./home').Home;
let Finance = require('./finance').Finance;
let Services = require('./services').Services;
let Contacts = require('./contact').Contacts;

/*Components*/

let Navbar = require('./component/navbar').Navbar;



class MainComponent extends React.Component{
    constructor(props){
        super(props);
    }

render(){
    return(
        <BrowserRouter>
          <React.Fragment>
            <Navbar/>

            <div className="container-fluid" id="content">
                <div className="row">
                    <Route exact path = "/" component={Home}/>
                    <Route exact path = "/cars" component={Cars}/>
                    <Route exact path = "/services" component={Services}/>
                    <Route exact path = "/finance" component={Finance}/>
                    <Route exact path = "/contacts" component={Contacts}/>
                </div>
            </div>
          </React.Fragment>
        </BrowserRouter>
        )
    }
}

module.exports.MainComponent = MainComponent;

