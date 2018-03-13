let React = require('react');
let $ = require('jquery');

let line = 'https://www.google.com.ua/search?q=rfhnbyrb&rlz=1C1CHBD_ruUA768UA768&tbm=isch&source=iu&ictx=1&fir=Ww8-5bW7cBGhQM%253A%252C703lE2099ryQ3M%252C_&usg=__xd-k77DHnA1eqwgZqMDsVt9rlUQ%3D&sa=X&ved=0ahUKEwix5I2TqdPZAhXCh6YKHZ3FAtAQ9QEILjAC#imgrc=65HTbrU4oYctQM:';


let Tween = require('rc-tween-one/lib/TweenOne');
let ScrollOverPack = require('rc-scroll-anim/lib/ScrollOverPack');

class AboutCar extends React.Component{
    constructor(props) {
        super(props);



        this.NavigationUp = this.NavigationUp.bind(this);
        this.NavigationOut = this.NavigationOut.bind(this);
        this.TestDriveForm = this.TestDriveForm.bind(this);
        this.LowSpeed = this.LowSpeed.bind(this);
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

    TestDriveForm(event){
        event.preventDefault();
        let nameClient,surnameClient,phoneClient,emailClient,cityClient,driveClientOne,driveClientTwo,dateClient,nameCar;
        let arr  = []; let checkedDrive;
        nameCar = event.currentTarget.children[0].children[0].textContent;
        let drive;
        if(event.currentTarget[6].name === "driveRadio"){
             nameClient = event.currentTarget[0].value;
             surnameClient = event.currentTarget[1].value;
             phoneClient = event.currentTarget[2].value;
             emailClient = event.currentTarget[3].value;
             cityClient = event.currentTarget[4].value;
             driveClientOne = event.currentTarget[5];
             driveClientTwo = event.currentTarget[6];
             dateClient = event.currentTarget[7].value;

            arr.push(driveClientOne,driveClientTwo);
                checkedDrive = arr.filter(function (item) {
                    return item.checked === true ;
                });

                 drive = checkedDrive[0].value;

        }
        else{
            nameClient = event.currentTarget[0].value;
            surnameClient = event.currentTarget[1].value;
            phoneClient = event.currentTarget[2].value;
            emailClient = event.currentTarget[3].value;
            cityClient = event.currentTarget[4].value;
            driveClientOne = event.currentTarget[5].value;
            dateClient = event.currentTarget[6].value;

            drive = driveClientOne;

        }
        let importData = {
            'name':         nameClient,
            'surname':      surnameClient,
            'phone':        phoneClient,
            'email':        emailClient,
            'city':         cityClient,
            'drive':        drive,
            'date':         dateClient,
            'carName':      nameCar
        };

            $.ajax({
                method:'POST',
                url:'/test-drive',
                data: JSON.stringify(importData),
                contentType: "application/json; charset=utf-8",
                cache: false,
                success: function (result) {
                    $('#result-message').text('Дані успішно відправлені, всі подальші інструкції відправлені вам на пошту');
                    $('#result-message').toggleClass('success');


                    setTimeout(function () {

                        $('#result-message').removeClass('success');
                        $('#result-message').text('');
                    },10000)

                },
                error: function (error) {
                    $('#result-message').text('Помилка відправки даних, провірте правильність оформлення заявки');
                    $('#result-message').toggleClass('error');

                    setTimeout(function () {

                        $('#result-message').removeClass('error');
                        $('#result-message').text('');
                    },10000)
                }

            });
    }







    LowSpeed(event){
        event.preventDefault();
        let id = event.currentTarget.attributes[1].nodeValue;
        let top = $('#'+id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 600); // время, за которое будет осуществлена прокрутка.
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

                    <a name="home" id="home"></a>
                    <br/>
                    <div className="container-fluid one-part">
                        <div className="row ">
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
                                    <h1 className='carName-price'>Ціна від - {data[0].price} грн</h1>
                                    <h1 className='carName-year'>{data[0].year}р. </h1>
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
                                        <li  className="element-menu" data-home="Головна"  >
                                            <a href="#home" data-name="home" onClick={this.LowSpeed}>
                                                <span  className="part-ico "><i onMouseOver={this.NavigationUp} onMouseOut={this.NavigationOut} className="fa fa-home fa-2x icons" aria-hidden="true" ></i></span>
                                                <span className="part-name" data-name-zero>Головна</span>
                                            </a>
                                        </li>
                                        <li  className="element-menu" data-drive="Двигун"  >
                                            <a href="#motor" data-name="motor" onClick={this.LowSpeed}>
                                                <span  className="part-ico "><i onMouseOver={this.NavigationUp} onMouseOut={this.NavigationOut} className="fa fa-car fa-2x icons" aria-hidden="true" ></i></span>
                                                <span className="part-name" data-name-one>Двигун</span>
                                            </a>
                                        </li>
                                        <li className="element-menu" data-size="Габарити">
                                            <a href="#size"  data-name="size" onClick={this.LowSpeed} >
                                                <span  className="part-ico"><i onMouseOver={this.NavigationUp} onMouseOut={this.NavigationOut} className="fa fa-arrows-h fa-2x icons" aria-hidden="true"></i></span>
                                                <span className="part-name" data-name-two>Габарити</span>
                                            </a>
                                        </li>
                                        <li className="element-menu" data-transmission="Коробка передач" >
                                            <a href="#transmission" data-name="transmission" onClick={this.LowSpeed}>
                                                <span  className="part-ico"><i onMouseOver={this.NavigationUp} onMouseOut={this.NavigationOut} className="fa fa-cogs  fa-2x icons" aria-hidden="true"></i></span>
                                                <span className="part-name" data-name-three>Коробка передач</span>
                                            </a>
                                        </li>
                                        <li className="element-menu"  data-fuel="Витрата пального">
                                            <a href="#test-drive" data-name="test-drive" onClick={this.LowSpeed}>
                                                <span  className="part-ico"><i onMouseOver={this.NavigationUp} onMouseOut={this.NavigationOut} className="fa fa-tachometer  fa-2x icons" aria-hidden="true"></i></span>
                                                <span className="part-name" data-name-four>Тест-драйв</span>
                                            </a>
                                        </li>
                                    </ul>
                               </div>
                            </div>
                        </div>
                    </div>


{/*---------------------------------------------Drive Container----------------------------------------------------------*/}
                    <a name="motor" id="motor"></a>
                    <br/>
                    <br/>
                    <div className="container-fluid three-part" key={data[0].key}>
                      <ScrollOverPack >
                          <Tween
                              key='1'
                              animation={{  type: 'from', ease: 'easeOutQuart', opacity: 0, translateX: '-300px'  }}
                          >
                              <h1 className='info-drive-name'>Двигун</h1>
                          </Tween>
                      </ScrollOverPack>
                             <div className="row " key="2">
                                 <div className="col-md-5 col-sm-5 col-xs-5">
                                         <div>
                                             <ul className = "full-event-drive" >
                                                 <li className="drive-event-container" key='1'>
                                                        <span className="part-ico-two">
                                                           <ScrollOverPack className='ScrollContainer' >
                                                             <Tween
                                                                 style={{height:'35px'}}
                                                                 key='1'
                                                                 animation={{ type: 'from', rotate: '-480deg',duration:1000,width:'35px',height:'35px'}}
                                                             >
                                                             <i  className="glyphicon glyphicon-cog"></i>
                                                            </Tween>
                                                           </ScrollOverPack>
                                                        </span>
                                                     <span className="part-name-two">
                                                         <ScrollOverPack>
                                                                 <Tween
                                                                     key='1'
                                                                     animation={{ type: 'from', translateX:'-45px',duration:1000, opacity:0,fontSize:'19px'}}
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
                                                                 animation={{ type: 'from', rotate: '-480deg',duration:1000,width:'35px',height:'35px'}}
                                                             >
                                                             <i  className="glyphicon glyphicon-cog"></i>
                                                            </Tween>
                                                           </ScrollOverPack>
                                                        </span>
                                                     <span className="part-name-two">
                                                         <ScrollOverPack>
                                                             <Tween
                                                                 key='1'
                                                                 animation={{ type: 'from', translateX:'-45px',duration:1000, opacity:0,fontSize:'19px'}}
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
                                                                 animation={{ type: 'from', rotate: '-480deg',duration:1000,width:'35px',height:'35px'}}
                                                             >
                                                             <i  className="glyphicon glyphicon-cog"></i>
                                                            </Tween>
                                                           </ScrollOverPack>
                                                        </span>
                                                     <span className="part-name-two">
                                                         <ScrollOverPack>
                                                             <Tween
                                                                 key='1'
                                                                 animation={{ type: 'from', translateX:'-45px',duration:1000, opacity:0,fontSize:'19px'}}
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
                                                                 animation={{ type: 'from', rotate: '-480deg',duration:1000,width:'35px',height:'35px'}}
                                                             >
                                                             <i  className="glyphicon glyphicon-cog"></i>
                                                            </Tween>
                                                           </ScrollOverPack>
                                                        </span>
                                                     <span className="part-name-two">
                                                         <ScrollOverPack>
                                                             <Tween
                                                                 key='1'
                                                                 animation={{ type: 'from', translateX:'-45px',duration:1000, opacity:0,fontSize:'19px'}}
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
                                                                 animation={{ type: 'from', rotate: '-480deg',duration:1000,width:'35px',height:'35px'}}
                                                             >
                                                             <i  className="glyphicon glyphicon-cog"></i>
                                                            </Tween>
                                                           </ScrollOverPack>
                                                        </span>
                                                     <span className="part-name-two">
                                                         <ScrollOverPack>
                                                             <Tween
                                                                 key='1'
                                                                 animation={{ type: 'from', translateX:'-45px',duration:1000, opacity:0,fontSize:'19px'}}
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
                                                                 animation={{ type: 'from', rotate: '-480deg',duration:1000,width:'35px',height:'35px'}}
                                                             >
                                                             <i  className="glyphicon glyphicon-cog"></i>
                                                            </Tween>
                                                           </ScrollOverPack>
                                                        </span>
                                                     <span className="part-name-two">
                                                         <ScrollOverPack>
                                                             <Tween
                                                                 key='1'
                                                                 animation={{ type: 'from', translateX:'-45px',duration:1000, opacity:0,fontSize:'19px'}}
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
                                                                 animation={{ type: 'from', rotate: '-480deg',duration:1000,width:'35px',height:'35px'}}
                                                             >
                                                             <i  className="glyphicon glyphicon-cog"></i>
                                                            </Tween>
                                                           </ScrollOverPack>
                                                        </span>
                                                     <span className="part-name-two">
                                                         <ScrollOverPack>
                                                             <Tween
                                                                 key='1'
                                                                 animation={{ type: 'from', translateX:'-45px',duration:1000, opacity:0,fontSize:'19px'}}
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
                                                                 animation={{ type: 'from', rotate: '-480deg',duration:1000,width:'35px',height:'35px'}}
                                                             >
                                                             <i  className="glyphicon glyphicon-cog"></i>
                                                            </Tween>
                                                           </ScrollOverPack>
                                                        </span>
                                                     <span className="part-name-two">
                                                         <ScrollOverPack>
                                                             <Tween
                                                                 key='1'
                                                                 animation={{ type: 'from', translateX:'-45px',duration:1000, opacity:0,fontSize:'19px'}}
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
                                                                 animation={{ type: 'from', rotate: '-480deg',duration:1000,width:'35px',height:'35px'}}
                                                             >
                                                             <i  className="glyphicon glyphicon-cog"></i>
                                                            </Tween>
                                                           </ScrollOverPack>
                                                        </span>
                                                     <span className="part-name-two">
                                                         <ScrollOverPack>
                                                             <Tween
                                                                 key='1'
                                                                 animation={{ type: 'from', translateX:'-45px',duration:1000, opacity:0,fontSize:'19px'}}
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
                                                                 animation={{ type: 'from', rotate: '-480deg',duration:1000,width:'35px',height:'35px'}}
                                                             >
                                                             <i  className="glyphicon glyphicon-cog"></i>
                                                            </Tween>
                                                           </ScrollOverPack>
                                                        </span>
                                                     <span className="part-name-two">
                                                         <ScrollOverPack>
                                                             <Tween
                                                                 key='1'
                                                                 animation={{ type: 'from', translateX:'-45px',duration:1000, opacity:0,fontSize:'19px'}}
                                                             >
                                                                          Крутящий момент: <span className="about-drive">{data[0].targue}</span>
                                                             </Tween>
                                                         </ScrollOverPack>
                                                     </span>
                                                 </li>
                                             </ul>
                                         </div>
                                 </div>
                            <ScrollOverPack>
                                <div className="col-md-7 col-sm-7 col-xs-7" key="3">
                                     <Tween
                                         key="3"
                                         animation={{ type: 'from', scale: 0.2,duration:400,opacity:0}}
                                     >
                                         <div className="img-drive-container">
                                             <div className="img-drive">
                                                 <img src={data[0].img_motor} className="info-drive-img" alt=""/>
                                             </div>
                                         </div>
                                     </Tween>
                                 </div>
                            </ScrollOverPack>
                             </div>
                    </div>
                    <a name="size" id="size"></a>
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
                                       <ScrollOverPack>
                                           <Tween
                                               key='1'
                                               animation={{  type: 'from', ease: 'easeOutQuart',  translateX: '1200px',duration:800  }}
                                               reverseDelay={300}
                                           >
                                               <div className="img-size-container">
                                                   <div className="img-size">
                                                       <img src={data[0].img1} className="info-size-img" alt=""/>
                                                   </div>

                                               </div>
                                           </Tween>
                                           <Tween key='2' className="review-car-container">
                                                <div className="col-md-12 col-sm-12 col-xs-12">
                                                    <div className="row">
                                                        <div className="col-md-6 col-sm-12 col-xs-12">
                                                            <div className="review-one">
                                                                <img src={data[0].img3} className="review-size-one" alt=""/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 col-sm-12 col-xs-12">
                                                            <div className="review-two">
                                                                <img src={data[0].img5} className="review-size-two" alt=""/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                           </Tween>
                                       </ScrollOverPack>
                                       <ScrollOverPack>
                                           <Tween
                                               key='1'
                                               animation={{  type: 'from', ease: 'easeOutQuart',  translateY: '300px',duration:600  }}
                                           >
                                               <div className="col-md-12 col-sm-12 col-xs-12 parent-container-size">
                                                   <div className="row event-size-container">
                                                       <div className="col-md-1 col-sm-3 col-xs-3 event-size-element grey">
                                                           <p className="icon"><img className="img-place ico-size" src="../img/icons/place-ico.png" alt=""/></p>
                                                           <p className="size-element-property-name">Кількість <br/> місць </p>
                                                           <hr className="size-property-line"/>
                                                           <p className="size-element-description">{data[0].places} </p>
                                                       </div>
                                                       <div className="col-md-1 col-sm-3 col-xs-3  event-size-element">
                                                           <p className="icon"><img className="img-length ico-size" src="../img/icons/car-length-ico.png" alt=""/></p>
                                                           <p className="size-element-property-name padding-size-element">Довжина</p>
                                                           <hr className="size-property-line"/>
                                                           <p className="size-element-description">{data[0].length} см.</p>
                                                       </div>
                                                       <div className="col-md-1 col-sm-3 col-xs-3  event-size-element grey">
                                                           <p className="icon"><img className="img-width ico-size" src="../img/icons/width-ico.png" alt=""/></p>
                                                           <p className="size-element-property-name padding-size-element">Ширина</p>
                                                           <hr className="size-property-line"/>
                                                           <p className="size-element-description">{data[0].width} см.</p>
                                                       </div>
                                                       <div className="col-md-1 col-sm-3 col-xs-3  event-size-element">
                                                           <p className="icon"><img className="img-height ico-size" src="../img/icons/height-ico.png" alt=""/></p>
                                                           <p className="size-element-property-name padding-size-element">Висота</p>
                                                           <hr className="size-property-line"/>
                                                           <p className="size-element-description">{data[0].height} см.</p>
                                                       </div>
                                                       <div className="col-md-1 col-sm-3 col-xs-3 event-size-element grey">
                                                           <p className="icon"><img className="img-trunck ico-size" src="../img/icons/trunck-size-ico.png" alt=""/></p>
                                                           <p className="size-element-property-name">Вантажне <br/> відділення</p>
                                                           <hr className="size-property-line"/>
                                                           <p className="size-element-description">{data[0].amount_cargo_cell}</p>
                                                       </div>
                                                       <div className="col-md-1 col-sm-3 col-xs-3 event-size-element">
                                                           <p className="icon"><img className="img-canister ico-size" src="../img/icons/fuel-ico.png" alt=""/></p>
                                                           <p className="size-element-property-name">Об'єм <br/> баку</p>
                                                           <hr className="size-property-line"/>
                                                           <p className="size-element-description">{data[0].amount_fuel_tank} л.</p>
                                                       </div>
                                                       <div className="col-md-1 col-sm-3 col-xs-3 event-size-element grey">
                                                           <p className="icon"><img className="img-weight ico-size" src="../img/icons/weight-ico.jpg" alt=""/></p>
                                                           <p className="size-element-property-name padding-size-element">Вага</p>
                                                           <hr className="size-property-line"/>
                                                           <p className="size-element-description">{data[0].amount_fuel_tank} л.</p>
                                                       </div>
                                                   </div>
                                               </div>
                                           </Tween>
                                       </ScrollOverPack>
                                   </div>
                               </div>
                           </div>
                       </Tween>
                    </ScrollOverPack>
                    {/*-----------------------Transmission-----------------------------*/}
                    <a name="transmission" id="transmission"></a>
                    <br/>
                    <br/>
                    <ScrollOverPack>
                        <Tween
                            key='1'
                            animation={{  type: 'from', ease: 'easeOutQuart', opacity: 0, translateX: '-300px'  }}
                        >
                            <h1 className='info-drive-name'>Коробка передач і привід</h1>
                        </Tween>
                        <Tween
                            key='2'>

                            <div className="container-fluid">
                                <div className="row">
                                    <br/>
                                    <div className="col-md-5 col-xs-5 col-sm-5 transmission-container-image" style={{
                                        backgroundImage:'url('+data[0].img6+')'

                                    }}>

                                    </div>
                                    <div className="col-md-7 col-xs-7 col-sm-7 main-props-transs-container" style={{
                                        backgroundImage:'url('+data[0].banner+')'
                                    }} >
                                        <div className="banner-car" >
                                            <ScrollOverPack>
                                                <Tween
                                                    key='1'
                                                    animation={{ y:40, type: 'from', ease: 'easeOutQuart', opacity: 0  }}
                                                >
                                                    <ul className = "full-event-transs" >
                                                        <li className="transs-event-container" key='0'>
                                                            <span className="description-transs-block">
                                                                <ScrollOverPack>
                                                                    <Tween
                                                                        key='2'
                                                                    >
                                                                            Коробка передач: <span className="about-transs">{data[0].transmission}</span>
                                                                     </Tween>
                                                                </ScrollOverPack>
                                                            </span>
                                                        </li>
                                                        <li  className="transs-event-container" key='2'>
                                                              <span className="description-transs-block ">
                                                                 <ScrollOverPack>
                                                                     <Tween
                                                                         key='2'
                                                                     >
                                                                                     Тип коробки передач: <span className="about-transs">{data[0].type_trans}</span>
                                                                     </Tween>
                                                                </ScrollOverPack>
                                                             </span>
                                                        </li>
                                                        <li  className="transs-event-container" key='3'>
                                                            <span className="description-transs-block">
                                                             <ScrollOverPack>
                                                                 <Tween
                                                                     key='2'
                                                                 >
                                                                               Кількість передач: <span className="about-transs">{data[0].amount_gears}</span>
                                                                 </Tween>
                                                             </ScrollOverPack>
                                                            </span>
                                                        </li>

                                                        <li  className="transs-event-container" key='4'>
                                                            <span className="description-transs-block">
                                                             <ScrollOverPack>
                                                                 <Tween
                                                                     key='2'
                                                                 >

                                                                             Привід: <span className="about-transs">
                                                                         {
                                                                             data.length > 1 ? <span>{data[0].drive} / {data[1].drive}</span> : <span>{data[0].drive}</span>
                                                                         }
                                                                     </span>
                                                                 </Tween>
                                                             </ScrollOverPack>
                                                             </span>
                                                        </li>

                                                        <li  className="transs-event-container" key='5'>
                                                                <span className="description-transs-block">
                                                                     <ScrollOverPack>
                                                                         <Tween
                                                                             key='2'
                                                                             style={{
                                                                                 width:"430px"
                                                                             }}
                                                                         >
                                                                              <h3 className="fuel_consumption">Витрата пального</h3>

                                                                             {
                                                                                 data.length > 1 ?
                                                                                     <div className="col-md-12 about-fuel_consumption ">
                                                                                         <div className="row">
                                                                                             <div className="one inCity col-md-6">
                                                                                                 <p className="drive-type-description"><span className="type_drive">{data[0].drive} привід</span>:</p>
                                                                                                 <div className="padding-fuel">
                                                                                                     <span className="city">по місту</span> - {data[0].consumption_in_city}
                                                                                                 </div>
                                                                                                 <div className="padding-fuel">
                                                                                                     <span className="city">за містом</span> - {data[0].consumption_out_city}
                                                                                                 </div>
                                                                                             </div>
                                                                                             <div className="two outCity col-md-6">
                                                                                                 <p className="drive-type-description"><span className="type_drive">{data[1].drive} привід</span>:</p>
                                                                                                 <div className="padding-fuel">
                                                                                                     <span className="city">по місту</span> - {data[1].consumption_in_city}
                                                                                                 </div>
                                                                                                 <div className="padding-fuel">
                                                                                                     <span className="city">за містом</span> - {data[1].consumption_out_city}
                                                                                                 </div>
                                                                                             </div>
                                                                                         </div>
                                                                                     </div>

                                                                                     :

                                                                                     <div className="one inCity">
                                                                                         <p className="drive-type-description"><span className="type_drive">{data[0].drive} привід</span>:</p>
                                                                                         <div className="padding-fuel">
                                                                                             <span className="city">по місту</span> - {data[0].consumption_in_city}
                                                                                         </div>
                                                                                         <div className="padding-fuel">
                                                                                             <span className="city">за містом</span> - {data[0].consumption_out_city}
                                                                                         </div>
                                                                                     </div>
                                                                             }
                                                                         </Tween>
                                                                     </ScrollOverPack>
                                                                 </span>
                                                            </li>
                                                    </ul>
                                                </Tween>
                                            </ScrollOverPack>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tween>
                    </ScrollOverPack>
                    <br/>
                    <br/>
                    <a name="test-drive" id="test-drive"></a>
                    <div className="container-fluid test-drive-main-container">

                        <div className="row">
                            <div className="test-drive-container">
                                <button className="test-drive-button" type="button" data-toggle="modal" data-target="#formModal">Записатися на тест-драйв</button>
                                <br/>
                                <br/>
                                <br/>
                            </div>
                                <div className="modal fade" id="formModal" tabIndex="-1" role="dialog" aria-labelledby="formModalLabel">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div id="result-message" className="result-message"></div>
                                            <form action="/test-drive" method="post" id="test-drive" className="test-drive-form" onSubmit={this.TestDriveForm}>
                                                <h3 className="name-car-in-form" name="car_name_form">Авто: <span className="logo-name-two">GMC {data[0].name}</span> </h3>
                                                <input type="text" name="name" placeholder="Ваше ім'я" id="clientName" className=" form-control"/><br/>
                                                <input type="text" name="surname" placeholder="Ваше прізвище" id="clientSurname" className=" form-control"/><br/>
                                                <input type="text" name="phone" placeholder="Ваший номер телефону" id="clientPhone" className=" form-control"/><br/>
                                                <input type="text" name="email" placeholder="Ваший email"  id="clientEmail" className=" form-control"/><br/>
                                                <input type="text" name="city" placeholder="Місто"  id="clientCity" className=" form-control"/><br/>
                                                <div className="radio-container">
                                                    {
                                                        data.length > 1 ?
                                                            <React.Fragment>
                                                                <span className="drive-radio">Привід: </span>

                                                                <input type="radio" id="driveOne"
                                                                       name="driveRadio"  className="radio-style" value={data[0].drive} defaultChecked/>
                                                                <label htmlFor="driveOne" className="label-form">{data[0].drive}</label>

                                                                <input type="radio" id="driveTwo"
                                                                       name="driveRadio" className="radio-style second-radio" value={data[1].drive}/>
                                                                <label htmlFor="driveTwo" className="label-form">{data[1].drive}</label>
                                                            </React.Fragment>

                                                            :

                                                            <React.Fragment>
                                                                <span className="drive-radio">Привід: </span>
                                                                <input type="radio" id="driveOne"
                                                                       name="driveOne" value={data[0].drive} defaultChecked/>
                                                                <label htmlFor="driveOne" className="label-form">{data[0].drive}</label>
                                                            </React.Fragment>

                                                    }
                                                </div>
                                                <span className="dateName">Бажана дата та час</span>
                                                <div className="input-group" id="datetimepicker1">
                                                    <input type="text" className="form-control " />
                                                    <span className="input-group-addon">
                                                        <span className="glyphicon glyphicon-calendar calendar"></span>
                                                    </span>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-default" data-dismiss="modal">Вийти</button>
                                                    <button type="submit" className="btn btn-success">Надіслати</button>
                                                </div>
                                            </form>
                                        </div>
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