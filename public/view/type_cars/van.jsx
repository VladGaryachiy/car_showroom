let React = require('react');
let ReactDOM = require('react-dom');
let AboutCar = require('../aboutcar').AboutCar;

let Route = require('react-router-dom').Route;
let Link = require('react-router-dom').Link;
let Switch = require('react-router-dom').Switch;

let Tween = require('rc-tween-one/lib/TweenOne');
let ScrollOverPack = require('rc-scroll-anim/lib/ScrollOverPack');

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
        url:'/vansData',
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
        DataVans.vans.push(result.result[i]);
    }
}

class AllVans extends React.Component{

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

        return(
            <div className="cars-container-one-type" id="cars-container">
                <div className="container">
                    <div className="row">
                        {
                           DataVans.vans.map((item,i) =>
                               <Tween
                                   key={i}
                                   animation={{ y: 50, type: 'from', ease: 'easeOutQuart', opacity: 0  }}
                                   reverseDelay={200}
                               >
                                <Link to={`/vans/${item.name}`}  key={item.key} onClick={this.UpScroll} >
                                    <div className={"col-md-5 col-sm-12   vanBlock"+i} key={item.key}  data-name={item.name}>
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

class Van extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const Van = DataVans.get(this.props.match.params.van) ;
        return(
            <div className="aboutCars-container" id="aboutCars-container">
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



