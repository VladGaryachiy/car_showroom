let React = require('react');
let ReactDOM = require('react-dom');
let AboutCar = require('../aboutcar').AboutCar;

let Route = require('react-router-dom').Route;
let Link = require('react-router-dom').Link;
let Switch = require('react-router-dom').Switch;

let Tween = require('rc-tween-one/lib/TweenOne');
let ScrollOverPack = require('rc-scroll-anim/lib/ScrollOverPack');

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
        url:'/suvsData',
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

function dataParser(result) {
    for(let i = 0; i < result.result.length; i++) {
        DataSUVS.suvs.push(result.result[i]);
    }
}

class AllSUVS extends React.Component{

    constructor(props){
        super(props);
        this.UpScroll = this.UpScroll.bind(this);
    }
    UpScroll(){
        window.scrollTo(0, 0);

        let oneScript = $('#1').detach();
        let twoScript = $('#2').detach();
        let threeScript = $('#3').detach();


        $( "body" ).append( '<script src="/js/moment-with-locales.min.js" id="1"></script>'+
            '<script src="/js/bootstrap-datetimepicker.min.js" id="2"></script>'+
            '<script src="/js/datePicker.js"  id="3"></script>');
    }

    render(){
        let drive = DataSUVS.suvs.filter((item ) => {
            return item.drive === 'Передній'
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
                                    <Link to={`/suvs/${item.name}`}  key={item.key} onClick={this.UpScroll}>
                                        <div className={"col-md-5 col-sm-12   suvBlock"+i} key={item.key}  data-name={item.name}>
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

class SUV extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const SUV = DataSUVS.get(this.props.match.params.suv) ;
        return(
            <div className="aboutCars-container" id="aboutCars-container">
                <React.Fragment>
                    <AboutCar infoCar={SUV}/>
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



