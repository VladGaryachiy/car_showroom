let React = require('react');
let ReactDOM = require('react-dom');
let AboutCar = require('./aboutcar').AboutCar;

let cars = [];





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
            
         /*   for(let i = 0; i < result.result.length; i++){
                cars.push(result.result[i]);
            }*/
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
        this.ThisCar = this.ThisCar.bind(this);
    }

    ThisCar(e){
        let data = this.props.info;
        let car = data.filter(item=>{
            return item.name === e.currentTarget.attributes[1].nodeValue
        });
        ReactDOM.render(
            <AboutCar infoCar={car}/>,
            document.getElementById('cars-container')
        )
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
                                <div className={"col-md-5 car  pickup"+i} key={item.key} onClick={this.ThisCar} data-name={item.name}>
                                    <div className="banner">
                                        <div>
                                            <p className="carName">{item.name}</p>
                                        </div>
                                    </div>
                                </div>
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
        this.ThisCar = this.ThisCar.bind(this);
    }

    ThisCar(e){
        let data = this.props.info;
        let car = data.filter(item=>{
            return item.name === e.currentTarget.attributes[1].nodeValue
        });
        ReactDOM.render(
            <AboutCar infoCar={car}/>,
            document.getElementById('cars-container')
        )
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
                                <div className={"col-md-5 car  suv"+i} key={item.key} onClick={this.ThisCar} data-name={item.name}>
                                    <div className="banner">
                                        <div>
                                            <p className="carName">{item.name}</p>
                                        </div>
                                    </div>
                                </div>
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
        this.ThisCar = this.ThisCar.bind(this);
    }
    ThisCar(e){
        let data = this.props.info;
        let car = data.filter(item=>{
            return item.name === e.currentTarget.attributes[1].nodeValue
        });
        ReactDOM.render(
            <AboutCar infoCar={car}/>,
            document.getElementById('cars-container')
        )
    }

    render(){
        let data = this.props.info;

        return(
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        {
                            data.map((item, i) =>
                                <div className={"col-md-5 car  van"+i} key={item.key} onClick={this.ThisCar} data-name={item.name}>
                                     <div className="banner">
                                        <h1 className="carName">{item.name}</h1>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </React.Fragment>
        )

    }

}


class AllCars extends  React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return(
           <React.Fragment>
               <h1 data-name="Pickups">Пікапи</h1>
               <Pickup info={pickups}/>
               <hr/>
               <h1 data-name="SUV">Позашляховики</h1>
               <SUV info={SUVs}/>
               <h1 data-name="VAN">Фургони</h1>
               <Van info={vans}/>
           </React.Fragment>
        )
    }
}
module.exports.AllCars = AllCars;




class Cars extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
           <div className="cars-container" id="cars-container">
                <h1>Пікапи</h1>
                <Pickup info={pickups}/>
                <hr/>
                <h1>Позашляховики</h1>
                <SUV info={SUVs}/>
                <h1>Фургони</h1>
                <Van info={vans}/>
           </div>
        )
    }
}

module.exports.Cars = Cars;

/*
{pickups.map(item=>
    <div className="col-md-3 car">
        <h1>{item.name}</h1>
        <h3>{item.type_car}</h3>
    </div>
)}*/
