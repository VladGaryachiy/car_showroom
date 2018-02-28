let React = require('react');
let $ = require('jquery');




let Tween = require('rc-tween-one/lib/TweenOne');
let ScrollOverPack = require('rc-scroll-anim/lib/ScrollOverPack');

class AboutCar extends React.Component{
    constructor(props) {
        super(props);
        this.NavigationUp = this.NavigationUp.bind(this);
        this.NavigationOut = this.NavigationOut.bind(this);
    }

    NavigationUp(event){

        let el = event.currentTarget.parentElement.nextSibling.attributes[1].name;

        $('['+el+']').animate({
            width: "210px",
            opacity:1

        },300,function () {
            console.log(1)
        });
    }

    NavigationOut(event){
            let el = event.currentTarget.parentElement.nextSibling.attributes[1].name;
            $('['+el+']').animate({
                width: "1px",
                opacity:0
            },300);
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
                        <div className="row one-part">
                            <div className="col-md-12 col-xs-12 col-sm-12">
                                <Tween
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
                                    <h1 className='carName-main'><span className="logo-name">GMC</span> {data[0].name}</h1>
                                </Tween>
                                <Tween
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
                    </div>

                    <div className="container-fluid two-part">
                        <div className="row ">

                            <div className="col-md-9 col-sm-9 col-xs-9"  style={{
                                position:'relative',
                                zIndex:20
                            }}>
                                <Tween
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

                            <div className="col-md-3 col-sm-3 col-xs-3" style={{
                                zIndex:30
                            }}>
                               <div className="navigation-container">
                                    <ul className="list-menu">
                                        <li  className="element-menu" data-drive="Двигун"  >
                                            <a href="#">
                                                <span  className="part-ico "><i onMouseOver={this.NavigationUp} onMouseOut={this.NavigationOut} className="fa fa-car fa-2x icons" aria-hidden="true" ></i></span>
                                                <span className="part-name" data-name-one>Двигун</span>
                                            </a>
                                        </li>
                                        <li className="element-menu" data-size="Габарити">
                                            <a href="#">
                                                <span  className="part-ico"><i onMouseOver={this.NavigationUp} onMouseOut={this.NavigationOut} className="fa fa-arrows-h fa-2x icons" aria-hidden="true"></i></span>
                                                <span className="part-name" data-name-two>Габарити</span>
                                            </a>
                                        </li>
                                        <li className="element-menu" data-transmission="Коробка передач" >
                                            <a href="#">
                                                <span  className="part-ico"><i onMouseOver={this.NavigationUp} onMouseOut={this.NavigationOut} className="fa fa-cogs  fa-2x icons" aria-hidden="true"></i></span>
                                                <span className="part-name" data-name-three>Коробка передач</span>
                                            </a>
                                        </li>
                                        <li className="element-menu"  data-fuel="Витрата пального">
                                            <a href="#">
                                                <span  className="part-ico"><i onMouseOver={this.NavigationUp} onMouseOut={this.NavigationOut} className="fa fa-battery-half  fa-2x icons" aria-hidden="true"></i></span>
                                                <span className="part-name" data-name-four>Витрата пального</span>
                                            </a>
                                        </li>
                                    </ul>
                               </div>
                            </div>
                        </div>
                    </div>


{/*---------------------------------------------Drive Container----------------------------------------------------------*/}
                    <div className="container-fluid three-part" key={data[0].key}>
                      <ScrollOverPack >
                          <Tween
                              key='1'
                              animation={{  type: 'from', ease: 'easeOutQuart', opacity: 0, translateX: '-300px'  }}
                          >
                              <h1 className='info-drive-name'>Двигун</h1>
                          </Tween>
                             <div className="row " key="2">
                                 <div className="col-md-5 col-sm-5 col-xs-5">
                                     <Tween>
                                         <div>
                                             <ul className = "full-event-drive" >
                                                 <li className="drive-event-container" key='1'>

                                                        <span className="part-ico-two">
                                                           <ScrollOverPack className='ScrollContainer' >
                                                             <Tween
                                                                 style={{height:'35px'}}
                                                                 key='1'
                                                                 animation={{ type: 'from', rotate: '-480deg',duration:1400,width:'35px',height:'35px'}}
                                                             >
                                                             <i  className="glyphicon glyphicon-cog"></i>
                                                            </Tween>
                                                           </ScrollOverPack>
                                                        </span>
                                                     <span className="part-name-two">
                                                         <ScrollOverPack>
                                                                 <Tween
                                                                     key='1'
                                                                     animation={{ type: 'from', translateX:'-45px',duration:1400, opacity:0,fontSize:'19px'}}
                                                                 >
                                                                        Двигун: <span className="about-drive">{data[0].motor}</span>
                                                                 </Tween>
                                                         </ScrollOverPack>
                                                     </span>

                                                 </li>
                                                 <li  className="drive-event-container" key='2'>
                                                     <span className="part-ico-two">
                                                           <ScrollOverPack  className='ScrollContainer' >
                                                             <Tween
                                                                 style={{height:'35px'}}
                                                                 key='1'
                                                                 animation={{ type: 'from', rotate: '-480deg',duration:1400,width:'35px',height:'35px'}}
                                                             >
                                                             <i  className="glyphicon glyphicon-cog"></i>
                                                            </Tween>
                                                           </ScrollOverPack>
                                                        </span>
                                                     <span className="part-name-two">
                                                         <ScrollOverPack>
                                                             <Tween
                                                                 key='1'
                                                                 animation={{ type: 'from', translateX:'-45px',duration:1400, opacity:0,fontSize:'19px'}}
                                                             >
                                                                             Код двигуна: <span className="about-drive">{data[0].motor_code}</span>
                                                             </Tween>
                                                        </ScrollOverPack>
                                                     </span>
                                                 </li>
                                                 <li  className="drive-event-container" key='3'>
                                                     <span className="part-ico-two">
                                                           <ScrollOverPack className='ScrollContainer' >
                                                             <Tween
                                                                 style={{height:'35px'}}
                                                                 key='1'
                                                                 animation={{ type: 'from', rotate: '-480deg',duration:1400,width:'35px',height:'35px'}}
                                                             >
                                                             <i  className="glyphicon glyphicon-cog"></i>
                                                            </Tween>
                                                           </ScrollOverPack>
                                                        </span>
                                                     <span className="part-name-two">
                                                         <ScrollOverPack>
                                                             <Tween
                                                                 key='1'
                                                                 animation={{ type: 'from', translateX:'-45px',duration:1400, opacity:0,fontSize:'19px'}}
                                                             >
                                                                           Тип двигуна: <span className="about-drive">{data[0].motor_type}</span>
                                                             </Tween>
                                                         </ScrollOverPack>
                                                     </span>
                                                 </li>
                                                 <li  className="drive-event-container" key='4'>
                                                     <span className="part-ico-two">
                                                           <ScrollOverPack className='ScrollContainer' >
                                                             <Tween
                                                                 style={{height:'35px'}}
                                                                 key='1'
                                                                 animation={{ type: 'from', rotate: '-480deg',duration:1400,width:'35px',height:'35px'}}
                                                             >
                                                             <i  className="glyphicon glyphicon-cog"></i>
                                                            </Tween>
                                                           </ScrollOverPack>
                                                        </span>
                                                     <span className="part-name-two">
                                                         <ScrollOverPack>
                                                             <Tween
                                                                 key='1'
                                                                 animation={{ type: 'from', translateX:'-45px',duration:1400, opacity:0,fontSize:'19px'}}
                                                             >
                                                                        Тип пального: <span className="about-drive">{data[0].fuel_type}</span>
                                                             </Tween>
                                                         </ScrollOverPack>
                                                     </span>
                                                 </li>
                                                 <li  className="drive-event-container" key='5'>
                                                     <span className="part-ico-two">
                                                           <ScrollOverPack className='ScrollContainer' >
                                                             <Tween
                                                                 style={{height:'35px'}}
                                                                 key='1'
                                                                 animation={{ type: 'from', rotate: '-480deg',duration:1400,width:'35px',height:'35px'}}
                                                             >
                                                             <i  className="glyphicon glyphicon-cog"></i>
                                                            </Tween>
                                                           </ScrollOverPack>
                                                        </span>
                                                     <span className="part-name-two">
                                                         <ScrollOverPack>
                                                             <Tween
                                                                 key='1'
                                                                 animation={{ type: 'from', translateX:'-45px',duration:1400, opacity:0,fontSize:'19px'}}
                                                             >
                                                                        Об'єм двигуна: <span className="about-drive">{data[0].engine_capecity}</span>
                                                             </Tween>
                                                         </ScrollOverPack>
                                                     </span>
                                                 </li>
                                                 <li  className="drive-event-container" key='6'>
                                                     <span className="part-ico-two">
                                                           <ScrollOverPack className='ScrollContainer' >
                                                             <Tween
                                                                 style={{height:'35px'}}
                                                                 key='1'
                                                                 animation={{ type: 'from', rotate: '-480deg',duration:1400,width:'35px',height:'35px'}}
                                                             >
                                                             <i  className="glyphicon glyphicon-cog"></i>
                                                            </Tween>
                                                           </ScrollOverPack>
                                                        </span>
                                                     <span className="part-name-two">
                                                         <ScrollOverPack>
                                                             <Tween
                                                                 key='1'
                                                                 animation={{ type: 'from', translateX:'-45px',duration:1400, opacity:0,fontSize:'19px'}}
                                                             >
                                                                         Кількість циліндрів: <span className="about-drive">{data[0].numb_cylinder}</span>
                                                             </Tween>
                                                         </ScrollOverPack>
                                                     </span>
                                                 </li>
                                                 <li  className="drive-event-container" key='7'>
                                                     <span className="part-ico-two">
                                                           <ScrollOverPack className='ScrollContainer' >
                                                             <Tween
                                                                 style={{height:'35px'}}
                                                                 key='1'
                                                                 animation={{ type: 'from', rotate: '-480deg',duration:1400,width:'35px',height:'35px'}}
                                                             >
                                                             <i  className="glyphicon glyphicon-cog"></i>
                                                            </Tween>
                                                           </ScrollOverPack>
                                                        </span>
                                                     <span className="part-name-two">
                                                         <ScrollOverPack>
                                                             <Tween
                                                                 key='1'
                                                                 animation={{ type: 'from', translateX:'-45px',duration:1400, opacity:0,fontSize:'19px'}}
                                                             >
                                                                        Кількість клапанів: <span className="about-drive">{data[0].numb_valves}</span>
                                                             </Tween>
                                                         </ScrollOverPack>
                                                     </span>
                                                 </li>
                                                 <li  className="drive-event-container" key='8'>
                                                     <span className="part-ico-two">
                                                           <ScrollOverPack className='ScrollContainer' >
                                                             <Tween
                                                                 style={{height:'35px'}}
                                                                 key='1'
                                                                 animation={{ type: 'from', rotate: '-480deg',duration:1400,width:'35px',height:'35px'}}
                                                             >
                                                             <i  className="glyphicon glyphicon-cog"></i>
                                                            </Tween>
                                                           </ScrollOverPack>
                                                        </span>
                                                     <span className="part-name-two">
                                                         <ScrollOverPack>
                                                             <Tween
                                                                 key='1'
                                                                 animation={{ type: 'from', translateX:'-45px',duration:1400, opacity:0,fontSize:'19px'}}
                                                             >
                                                                       Потужність: <span className="about-drive">{data[0].power} л.с</span>
                                                             </Tween>
                                                         </ScrollOverPack>
                                                     </span>
                                                 </li>
                                                 <li  className="drive-event-container" key='9'>
                                                     <span className="part-ico-two">
                                                           <ScrollOverPack className='ScrollContainer' >
                                                             <Tween
                                                                 style={{height:'35px'}}
                                                                 key='1'
                                                                 animation={{ type: 'from', rotate: '-480deg',duration:1400,width:'35px',height:'35px'}}
                                                             >
                                                             <i  className="glyphicon glyphicon-cog"></i>
                                                            </Tween>
                                                           </ScrollOverPack>
                                                        </span>
                                                     <span className="part-name-two">
                                                         <ScrollOverPack>
                                                             <Tween
                                                                 key='1'
                                                                 animation={{ type: 'from', translateX:'-45px',duration:1400, opacity:0,fontSize:'19px'}}
                                                             >
                                                                        Обороти макс. швидкості: <span className="about-drive">{data[0].turnovers_max_power}</span>
                                                             </Tween>
                                                         </ScrollOverPack>
                                                     </span>
                                                 </li>
                                                 <li  className="drive-event-container" key='10'>
                                                     <span className="part-ico-two">
                                                           <ScrollOverPack className='ScrollContainer' >
                                                             <Tween
                                                                 style={{height:'35px'}}
                                                                 key='1'
                                                                 animation={{ type: 'from', rotate: '-480deg',duration:1400,width:'35px',height:'35px'}}
                                                             >
                                                             <i  className="glyphicon glyphicon-cog"></i>
                                                            </Tween>
                                                           </ScrollOverPack>
                                                        </span>
                                                     <span className="part-name-two">
                                                         <ScrollOverPack>
                                                             <Tween
                                                                 key='1'
                                                                 animation={{ type: 'from', translateX:'-45px',duration:1400, opacity:0,fontSize:'19px'}}
                                                             >
                                                                          Крутящий момент: <span className="about-drive">{data[0].targue}</span>
                                                             </Tween>
                                                         </ScrollOverPack>
                                                     </span>
                                                 </li>
                                             </ul>
                                         </div>
                                     </Tween>
                                 </div>

                                 <div className="col-md-7">
                                     <Tween
                                         key="3"
                                         animation={{ type: 'from', scale: 0.2,duration:900,opacity:0,translateX:'300px'}}
                                     >
                                         <div className="img-drive-container">
                                             <div className="img-drive">
                                                 <img src={data[0].img_motor} className="info-drive-img" alt=""/>
                                             </div>
                                         </div>
                                     </Tween>
                                 </div>

                             </div>
                      </ScrollOverPack>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    {/*-----------------------Size--------------------------*/}
                    <ScrollOverPack>
                        <Tween
                            key='1'
                            animation={{  type: 'from', ease: 'easeOutQuart', opacity: 0, translateX: '-300px'  }}
                        >
                            <h1 className='info-drive-name'>Габарити</h1>
                        </Tween>
                       <Tween key='2'>
                           <div className="container-fluid">
                               <div className="row">

                                   <div className="col-md-12 col-sm-12 col-xs-12">
                                       <Tween
                                           key='2'>
                                           <div className="img-size-container">
                                               <div className="img-size">
                                                   <img src={data[0].img1} className="info-size-img" alt=""/>
                                               </div>

                                           </div>
                                       </Tween>
                                      <div className="col-md-12 col-sm-12 col-xs-12 parent-container-size">
                                          <div className="row event-size-container">
                                              <div className="col-md-2 col-sm-6 col-xs-12 event-size-element">
                                                  <p className="size-element-property-name">Кількість місць </p>
                                                  <p className="size-element-description">{data[0].places} </p>
                                              </div>
                                              <div className="col-md-2 col-sm-6 col-xs-12  event-size-element">
                                                  <p className="size-element-property-name">Довжина</p>
                                                  <p className="size-element-description">{data[0].length} см.</p>
                                              </div>
                                              <div className="col-md-2 col-sm-6 col-xs-12  event-size-element">
                                                  <p className="size-element-property-name">Ширина</p>
                                                  <p className="size-element-description">{data[0].width} см.</p>
                                              </div>
                                              <div className="col-md-2 col-sm-6 col-xs-12  event-size-element">
                                                  <p className="size-element-property-name">Висота</p>
                                                  <p className="size-element-description">{data[0].height} см.</p>
                                              </div>
                                              <div className="col-md-2 col-sm-6 col-xs-12 event-size-element">
                                                  <p className="size-element-property-name">Вантажне відділення</p>
                                                  <p className="size-element-description">{data[0].amount_cargo_cell}</p>
                                              </div>
                                              <div className="col-md-2 col-sm-6 col-xs-12 event-size-element">
                                                  <p className="size-element-property-name">Об'єм баку</p>
                                                  <p className="size-element-description">{data[0].amount_fuel_tank} л.</p>
                                              </div>
                                          </div>
                                      </div>
                                   </div>

                               </div>
                           </div>
                       </Tween>

                    </ScrollOverPack>










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