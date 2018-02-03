let React = require('react');
let ReactDOM = require('react-dom');
let AboutCar = require('../aboutcar').AboutCar;

let Route = require('react-router-dom').Route;
let Link = require('react-router-dom').Link;
let Switch = require('react-router-dom').Switch;

const DataVans = {
    vans: [

    ],

    get:function (name) {
        return this.vans.filter(function (item) {
            return item.name === name;
        })

    }


};

(function () {
    $.ajax({
        url:'/vans',
        method:'GET',
        contentType: "application/json; charset=utf-8",
        cache: false,
        success: function (result) {

            for(let i = 0; i < result.result.length; i++) {
                DataVans.vans.push(result.result[i]);
            }


        },
        error: function (error) {
            return error;
        }
    });

})();



class AllVans extends React.Component{

    constructor(props){
        super(props);
    }


    render(){

        return(
            <div className="cars-container-one-type" id="cars-container">
                <div className="container">
                    <div className="row">
                        {
                           DataVans.vans.map((item,i) =>
                                <Link to={`/vans/${item.name}`}  key={item.key} >
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
            </div>

        )
    }

}

class Van extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const Van = DataVans.get(this.props.match.params.van) ;
        return(
            <div className="cars-container" id="cars-container">
                <React.Fragment>
                    <AboutCar infoCar={Van}/>
                    <Link to='/vans'>Back</Link>
                </React.Fragment>
            </div>
        )
    }

}





class VANS extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <Switch>
                    <Route exact path='/vans' component={AllVans}/>
                    <Route path='/vans/:van' component={Van}/>
                </Switch>
            </div>
        )
    }

}


module.exports.VANS = VANS;



