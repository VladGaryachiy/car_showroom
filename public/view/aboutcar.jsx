let React = require('react');


let Tween = require('rc-tween-one/lib/TweenOne');
let ScrollOverPack = require('rc-scroll-anim/lib/ScrollOverPack');

class AboutCar extends React.Component{
    constructor(props) {
        super(props);
    }
        render(){
            let data = this.props.infoCar;
            return(
                <React.Fragment>
                    {/*Navigation*/}
                   {/* <div className="container anchor-container">
                        <div className="row">
                            <a href="#motor">
                                <div className="col-md-2 anchor">
                                    <p>Двигун</p>
                                    <br/>
                                    <i className="fa fa-car  fa-2x" aria-hidden="true" ></i>
                                </div>
                            </a>
                            <a href="#dimensions">
                                <div className="col-md-2 anchor">
                                    <p>Габарити</p>
                                    <br/>
                                    <i className="fa fa-arrows-h  fa-2x" aria-hidden="true"></i>
                                </div>
                            </a>
                            <a href="#transmission ">
                                <div className="col-md-2 anchor">
                                    <p>Коробка передач</p>
                                    <i className="fa fa-cogs  fa-2x" aria-hidden="true"></i>
                                </div>
                            </a>
                            <a href="#fuel ">
                                <div className="col-md-2 anchor">
                                    <p>Витрата пального</p>
                                    <i className="fa fa-battery-half  fa-2x" aria-hidden="true"></i>
                                </div>
                            </a>
                        </div>
                    </div>*/}

                    <div className="container-fluid">
                        <div className="row">
                            <Tween
                                key="1"
                                animation={{
                                    type: 'from',
                                    ease: 'easeOutQuart',
                                    opacity: 0 ,
                                    translateX: '-300px',
                                    duration:900,
                                }}
                                reverseDelay={200}
                                style={{
                                    position:'relative',
                                    zIndex:100
                                }}>
                                <h1 className='carName-main'> {data[0].name}</h1>
                            </Tween>
                            <div className="col-md-7"  style={{
                                position:'relative',
                                zIndex:20
                            }}>
                            <Tween
                                key="1"
                                animation={{
                                    type: 'from',
                                    ease: 'easeOutQuart',
                                    opacity: 0 ,
                                    translateX: '700px',
                                    translateY:'-300px',
                                    scale:0.2,
                                    duration:1000,
                                }}
                                reverseDelay={100}
                            >
                                <div className="prev-car" style={{
                                    backgroundImage:'url('+data[0].logo+')',
                                    height:'500px',

                                }}>

                                </div>
                            </Tween>
                            </div>
                            <Tween
                                key="1"
                                animation={{
                                    type: 'from',
                                    ease: 'easeOutQuart',
                                    opacity: 0 ,
                                    translateX: '300px',
                                    duration:900,
                                }}
                                reverseDelay={200}
                                style={{
                                    position:'relative',
                                    zIndex:100
                                }}>
                                <h1 className='carName-price'>Ціна від - {data[0].price}</h1>
                            </Tween>
                        </div>
                    </div>

                    <div className="container-fluid" key={data[0].key}>
                        <div className="row">
                            <hr/>
                            <div className="col-md-6">
                                <h1 className='info-name'>Двигун</h1>
                            </div>
                            <div className="col-md-6">
                                <div className="info-img" style={{
                                    backgroundImage:'url('+data[0].img2+')',
                                    height:'500px',
                                }}>

                                </div>

                            </div>
                        </div>
                    </div>


                        








                   {/* <a name="motor"> </a>
                        <div className="container-fluid motors">
                            <br/>
                            <br/>
                            <div className="row">
                                <div className="col-md-6 aboutMotors">
                                    <h2>Двигун</h2>
                                    <p>Двигун:  {data[0].motor}</p>
                                    <p>Код двигуна : {data[0].motor_code}</p>
                                    <p>Тип двигуна : {data[0].motor_type}</p>
                                    <p>Тип пального : {data[0].fuel_type}</p>
                                    <p>Об'єм двигуна : {data[0].engine_capecity}</p>
                                    <p>Кількість циліндрів : {data[0].numb_cylinder}</p>
                                    <p>Кількість клапанів : {data[0].numb_valves}</p>
                                    <p>Потужність : {data[0].power} л.с</p>
                                    <p>Обороти максимальної швидкоcті : {data[0].turnovers_max_power}</p>
                                    <p>Крутящий момент : {data[0].targue}</p>
                                </div>
                                <div className="col-md-6 imgMotors">
                                    <img src={data[0].img_motor} alt="" height={350} width={470}/>
                                </div>
                            </div>
                        </div>
                    <a name="dimensions"> </a>
                        <div className="container-fluid aboutDimensions" >
                            <br/>
                            <br/>
                            <div className="row">
                                <div className="col-md-6 aboutDimensionsData">
                                    <h2>Габарити</h2>
                                    <p>Кількість місць: {data[0].places}</p>
                                    <p>Довжина: {data[0].length}</p>
                                    <p>Ширина: {data[0].width}</p>
                                    <p>Висота: {data[0].height}</p>
                                    <p>Вантажне відділення : {data[0].amount_cargo_cell}</p>
                                    <p>Об'єм баку : {data[0].amount_fuel_tank}</p>
                                </div>
                            </div>
                        </div>

                    <a name="transmission"> </a>
                    <div className="container">
                        <br/>
                        <br/>
                        <div className="row">
                            <div className="col-md-6">
                                <h2>Коробка передач і привід</h2>
                                <p>Коробка передач : {data[0].transmission}</p>
                                <p>Тип коробки передач: {data[0].type_trans}</p>
                                <p>Кількість передач: {data[0].amount_gears}</p>
                                <p>Привід: {data[0].drive} </p>
                            </div>
                            <div className="col-md-6">
                                <img src={data[0].img1} alt="" height={400} width={550}/>
                            </div>
                        </div>
                    </div>

                    <a name="fuel"> </a>
                    <div className="container">
                        <br/>
                        <br/>
                        <div className="row">
                            <div className="col-md-6">
                                <h2>Витрата пального</h2>

                                  <table>
                                    <tr>
                                        <td>
                                            <b>{data[0].drive} привід</b>
                                            <p>По місту: {data[0].consumption_in_city}</p>
                                            <p>За містом: {data[0].consumption_out_city}</p>
                                        </td>



                                    </tr>
                                </table>

                                <hr/>
                                <h3>Рік : {data[0].year}</h3>
                                <h3>Країна : {data[0].country}</h3>
                                <hr/>
                                <h2>Ціна</h2>
                                <h1>{data[0].price} грн</h1>
                            </div>
                        </div>
                    </div>*/}

                </React.Fragment>

            )
        }


}


module.exports.AboutCar = AboutCar;