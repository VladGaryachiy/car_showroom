let React = require('react');
let ReactDOM = require('react-dom');
let AboutCar = require('../aboutcar').AboutCar;

let Route = require('react-router-dom').Route;
let Link = require('react-router-dom').Link;
let Switch = require('react-router-dom').Switch;

let Tween = require('rc-tween-one/lib/TweenOne');
let ScrollOverPack = require('rc-scroll-anim/lib/ScrollOverPack');

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
        url:'/pickupsData',
        method:'GET',
        contentType: "application/json; charset=utf-8",
        cache: false,
        async: false,
        success: function (result) {
            dataParser(result);
        },
        error: function (error) {
            return error;
        }
    });

})();

function dataParser(result){
    for(let i = 0; i < result.result.length; i++) {
        DataPickups.pickups.push(result.result[i]);
    }
}

class AllPickups extends React.Component{

    constructor(props){
        super(props);
        this.UpScroll = this.UpScroll.bind(this);
    }
    UpScroll(){
        window.scrollTo(0, 0);
    }
    render(){
        let drive = DataPickups.pickups.filter((item ) => {
            return item.drive === 'Повний'
        });
        return(
            <div className="cars-container-one-type" id="cars-container">
                <div className="container">
                    <div className="row">
                        {
                            drive.map((item,i) =>
                                <Tween
                                    key={i}
                                    animation={{ y: 50, type: 'from', ease: 'easeOutQuart', opacity: 0  }}
                                    reverseDelay={200}
                                >
                                    <Link to={`/pickups/${item.name}`}  key={item.key} onClick={this.UpScroll} >
                                        <div className={"col-md-5 col-sm-12   pickupBlock"+i} key={item.key}  data-name={item.name}>
                                            <div className="block">
                                                <h2 className="carName"><span className="GMC">GMC</span> {item.name}</h2>
                                                <h3 className="price">Ціна від - {item.price} грн</h3>
                                            </div>
                                            <div className='logo' style={{
                                                backgroundImage:'url('+item.logo+')',
                                                height:'500px',

                                            }}>

                                            </div>
                                        </div>
                                    </Link>
                                </Tween>

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
                <div className="aboutCars-container" id="aboutCars-container">
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
                    <Route  path='/pickups/:pickup' component={Pickup}/>
                </Switch>
            </div>
        )
    }

}


module.exports.Pickups = Pickups;



