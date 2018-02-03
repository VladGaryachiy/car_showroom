let React = require('react');
let ReactDOM = require('react-dom');
let AboutCar = require('./aboutcar').AboutCar;

let Route = require('react-router-dom').Route;
let Link = require('react-router-dom').Link;
let Switch = require('react-router-dom').Switch;


const DataCars = {
    cars : [

    ],

    get: function (name) {
        return this.cars.filter(function (item) {
            return item.name === name;
        })
    }

};





 let pickups = [];
 let SUVs = [];
 let vans = [];

(function () {
    $.ajax({
        url:'/cars',
        method:'GET',
        contentType: "application/json; charset=utf-8",
        cache: false,
        success: function (result) {
            
            for(let i = 0; i < result.result.length; i++){
                DataCars.cars.push(result.result[i]);
            }
            pickups = result.result.filter(function (item) {
                return item.type_car === 'Пікап'
            });
            SUVs = result.result.filter(function (item) {
                return item.type_car === 'Позашляховик'
            });
            vans = result.result.filter(function (item) {
                return item.type_car === 'Фургон'
            });

        },
        error: function (error) {
            return error;
        }
    });

})();


class Pickup extends React.Component{
    constructor(props){
        super(props);
    }



    render(){
        let data = this.props.info;
        let drive = data.filter((item ) => {
            return item.drive === 'Повний'
        });

        return(
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        {
                            drive.map((item,i) =>
                                <Link to={`/cars/${item.name}`}  key={item.key} >
                               {/*     <span className="carName">{item.name}</span>*/}
                                    <div className={"col-md-5 col-sm-12   pickupBlock"+i} key={item.key}  data-name={item.name}>
                                       <div className="block">
                                           <h2 className="carName"><span className="GMC">GMC</span> {item.name}</h2>
                                           <h3 className="price">Ціна від - {item.price}</h3>
                                       </div>
                                        <div className={" pickupImg"+i}>

                                        </div>
                                    </div>
                                </Link>
                            )
                        }
                    </div>
                </div>
            </React.Fragment>
        )

    }

}
class SUV extends React.Component{
    constructor(props){
        super(props);
    }



    render(){
        let data = this.props.info;
        let drive = data.filter((item) =>{
            return item.drive === 'Передній'
        });
        return(
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        {
                            drive.map((item,i) =>
                                <Link to={`/cars/${item.name}`}  key={item.key} >
                                    <div className={"col-md-5 col-sm-12   suvBlock"+i} key={item.key}  data-name={item.name}>
                                        <div className="block">
                                            <h2 className="carName"><span className="GMC">GMC</span> {item.name}</h2>
                                            <h3 className="price">Ціна від - {item.price}</h3>
                                        </div>
                                        <div className={" suvImg"+i}>

                                        </div>
                                    </div>
                                </Link>
                            )
                        }
                    </div>
                </div>
            </React.Fragment>
        )

    }
}
class Van extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        let data = this.props.info;

        return(
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        {
                            data.map((item, i) =>
                                <Link to={`/cars/${item.name}`} key={item.key} >
                                    <div className={"col-md-5 col-sm-12   vanBlock"+i} key={item.key}  data-name={item.name}>
                                        <div className="block">
                                            <h2 className="carName"><span className="GMC">GMC</span> {item.name}</h2>
                                            <h3 className="price">Ціна від - {item.price}</h3>
                                        </div>
                                        <div className={" vanImg"+i}>

                                        </div>
                                    </div>
                                </Link>
                            )
                        }
                    </div>
                </div>
            </React.Fragment>
        )

    }
}


class Car extends  React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const Car = DataCars.get(this.props.match.params.car) ;
        return(
            <div className="cars-container" id="cars-container">
                <React.Fragment>
                    <AboutCar infoCar={Car}/>
                    <Link to='/cars'>Back</Link>
                </React.Fragment>
            </div>

        )
    }

}


class AllCars extends React.Component{
    constructor(props){
        super(props);


    }



    render() {
        return(
            <div className="cars-container" id="cars-container">

                <h1 className="type_cars" >Пікапи</h1>
                <Pickup info={pickups}/>
                <br/>
                <br/>
                <br/>
                <h1 className="type_cars"  >Позашляховики</h1>
                <SUV info={SUVs}/>
                <br/>
                <br/>
                <br/>
                <h1 className="type_cars" id="type_cars">Фургони</h1>
                <Van info={vans}/>
            </div>
        )
    }
}


class Cars extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div>
                <Switch>
                    <Route exact path='/cars' component={AllCars}/>
                    <Route path='/cars/:car' component={Car}/>
                </Switch>
            </div>
        )
    }
}

module.exports.Cars = Cars;

