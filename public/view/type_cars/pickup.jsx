let React = require('react');
let ReactDOM = require('react-dom');
let AboutCar = require('../aboutcar').AboutCar;

let Route = require('react-router-dom').Route;
let Link = require('react-router-dom').Link;
let Switch = require('react-router-dom').Switch;

const DataPickups = {
    pickups: [

    ],

    get:function (name) {
        return this.pickups.filter(function (item) {
            return item.name === name;
        })

    }


};

(function () {
    $.ajax({
        url:'/pickups',
        method:'GET',
        contentType: "application/json; charset=utf-8",
        cache: false,
        success: function (result) {

              for(let i = 0; i < result.result.length; i++) {
                  DataPickups.pickups.push(result.result[i]);
              }


        },
        error: function (error) {
            return error;
        }
    });

})();



class AllPickups extends React.Component{

    constructor(props){
        super(props);
    }


    render(){
        let drive = DataPickups.pickups.filter((item ) => {
            return item.drive === 'Повний'
        });
        return(
            <div className="cars-container" id="cars-container">
                <div className="container">
                    <div className="row">
                        {
                            drive.map((item,i) =>

                                <Link to={`/pickups/${item.name}`}  key={item.key} >
                                    <div className={"col-md-5 car  pickup"+i} key={item.key}  data-name={item.name}>
                                        <div className="banner">
                                            <div>
                                                <p className="carName">{item.name}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>


                            )
                        }
                    </div>
                </div>
            </div>

        )
    }

}

class Pickup extends React.Component{
        constructor(props){
            super(props)
        }
        render(){
            const Pickup = DataPickups.get(this.props.match.params.pickup) ;
            return(
                <div className="cars-container" id="cars-container">
                    <React.Fragment>
                        <AboutCar infoCar={Pickup}/>
                        <Link to='/pickups'>Back</Link>
                    </React.Fragment>
                </div>
        )
    }

}





class Pickups extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <Switch>
                    <Route exact path='/pickups' component={AllPickups}/>
                    <Route path='/pickups/:pickup' component={Pickup}/>
                </Switch>
            </div>
        )
    }

}


module.exports.Pickups = Pickups;



