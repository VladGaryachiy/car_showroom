let React = require('react');
let ReactDOM = require('react-dom');
let BrowserRouter = require('react-router-dom').BrowserRouter;
let Route = require('react-router-dom').Route;
let Link = require('react-router-dom').Link;
let Switch = require('react-router-dom').Switch;


/*Pages*/

let Cars = require('./cars').Cars;
let Home = require('./home').Home;
let Finance = require('./finance').Finance;
let Services = require('./services').Services;
let Contacts = require('./contact').Contacts;

/*Type cars*/

let Pickups = require('./type_cars/pickup').Pickups;
let SUVS = require('./type_cars/suv').SUVS;
let VANS = require('./type_cars/van').VANS;


/*Components*/

let Navbar = require('./component/navbar').Navbar;
let Footer = require('./component/footer').Footer;



class MainComponent extends React.Component{
    constructor(props){
        super(props);
    }

render(){
    return(
    <React.Fragment>
        <BrowserRouter>
          <React.Fragment>
           {/*NAVBAR*/}
            <Navbar/>
            {/*PAGES*/}
            <div className="container-fluid contentContainer" id="content" >
                <div className="row">

                    <Route exact path = "/" component={Home}/>
                    <Route path = "/cars" component={Cars}/>
                    <Route exact path = "/services" component={Services}/>
                    <Route exact path = "/finance" component={Finance}/>
                    <Route exact path = "/contacts" component={Contacts}/>

                        {/*Type cars pages*/}
                    <Route  path = "/pickups" component={Pickups}/>
                    <Route  path = "/suvs" component={SUVS}/>
                    <Route  path = "/vans" component={VANS}/>

                </div>
            </div>
          </React.Fragment>
        </BrowserRouter>


      {/*FOOTER*/}

    {/*  <Footer/>*/}

    </React.Fragment>
        )
    }
}

module.exports.MainComponent = MainComponent;

