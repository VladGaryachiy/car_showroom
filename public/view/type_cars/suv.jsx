let React = require('react');
let ReactDOM = require('react-dom');
let AboutCar = require('../aboutcar').AboutCar;

let Route = require('react-router-dom').Route;
let Link = require('react-router-dom').Link;
let Switch = require('react-router-dom').Switch;

const DataSUVS = {
    suvs: [

    ],

    get:function (name) {
        return this.suvs.filter(function (item) {
            return item.name === name;
        })

    }


};

(function () {
    $.ajax({
        url:'/suvs',
        method:'GET',
        contentType: "application/json; charset=utf-8",
        cache: false,
        success: function (result) {

            for(let i = 0; i < result.result.length; i++) {
                DataSUVS.suvs.push(result.result[i]);
            }


        },
        error: function (error) {
            return error;
        }
    });

})();



class AllSUVS extends React.Component{

    constructor(props){
        super(props);
    }


    render(){
        let drive = DataSUVS.suvs.filter((item ) => {
            return item.drive === 'Передній'
        });
        return(
            <div className="cars-container" id="cars-container">
                <div className="container">
                    <div className="row">
                        {
                            drive.map((item,i) =>

                                <Link to={`/suvs/${item.name}`}  key={item.key} >
                                    <div className={"col-md-5 car  suv"+i} key={item.key}  data-name={item.name}>
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

class SUV extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const SUV = DataSUVS.get(this.props.match.params.suv) ;
        return(
            <div className="cars-container" id="cars-container">
                <React.Fragment>
                    <AboutCar infoCar={SUV}/>
                    <Link to='/suvs'>Back</Link>
                </React.Fragment>
            </div>
        )
    }

}





class SUVS extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <Switch>
                    <Route exact path='/suvs' component={AllSUVS}/>
                    <Route path='/suvs/:suv' component={SUV}/>
                </Switch>
            </div>
        )
    }

}


module.exports.SUVS = SUVS;



