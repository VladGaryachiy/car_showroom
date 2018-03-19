let React = require('react');

let Tween = require('rc-tween-one/lib/TweenOne');
let ScrollOverPack = require('rc-scroll-anim/lib/ScrollOverPack');




let cars = [];
let pickups = [];
let SUVs = [];
let vans = [];


(function () {
    $.ajax({
        url:'/carsData',
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
    for(let i = 0; i < result.result.length; i++){
        cars.push(result.result[i]);
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

}




class TestDrive extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectedCar:[{name:"name",drive:"drive"}]
        };

        this.getCarInfo = this.getCarInfo.bind(this);
        this.TestDriveForm = this.TestDriveForm.bind(this);
        this.OpenCloseRead = this.OpenCloseRead.bind(this);
    }


    OpenCloseRead(event){
        let checkClass = $( "#td-form-about-container" )[0].className;
        let SearchClass;

        if(SearchClass = /close-text/.test(checkClass)){
            event.currentTarget.textContent = 'Читати далі';
            $( "#td-form-about-container" ).removeClass('close-text');
            $( "#td-form-about-container" ).animate({
                height:'98px',
                overflow:'hidden'
            },400);
        }
        else{
            event.currentTarget.textContent = 'Згорнути';
            $( "#td-form-about-container" ).toggleClass('close-text');
            $( "#td-form-about-container" ).animate({
                height:'495px',
                overflow:'visible'
            },400);
        }
        console.dir( $( "#td-form-about-container" ));

    };



    getCarInfo(e){
       let nameCar =  e.currentTarget.attributes[3].nodeValue;

       let searchCar = cars.filter(item=>{
           return item.name === nameCar;
       });

       this.setState({
            selectedCar:searchCar
       })

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
            url:'/tdServices',
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
    render(){

        let oneTypePickups = pickups.filter(item=>{
               return item.drive === 'Повний'
        });

        let oneTypeSUVS = SUVs.filter(item=>{
           return item.drive === 'Передній';
        });

        return(
           <React.Fragment>


               <div className="container-fluid td-name-main-container">
                   <Tween
                       animation={{
                           type: 'from',
                           ease: 'easeOutQuart',
                           opacity: 0 ,
                           translateX: '-300px',
                           duration:900,
                       }}
                   >
                       <h1 className="td-name-main">Оберіть авто для тест-драйву</h1>
                   </Tween>

               </div>
               
               <Tween
                   animation={{
                       type: 'from',
                       ease: 'easeOutQuart',
                       opacity: 0 ,
                       translateY: '300px',
                       duration:900,
                   }}>
                   <div className="container td-main-container">
                       <div className="row">
                           {
                               oneTypePickups.map((item,i) =>
                                   <div className={"col-md-3 col-sm-12 td-car-block"} onClick={this.getCarInfo} key={item.key} data-toggle="modal" data-target="#formModal" data-name={item.name} style={{

                                   }}>
                                       <div className="td-name-block">
                                           <h2 className="td-car-name"><span className="td-car-logo">GMC</span> {item.name}</h2>
                                           <p className="td-year-car">{item.year}р.</p>
                                       </div>
                                       <div className='td-car-img' style={{
                                           backgroundImage:'url('+item.logo+')'
                                       }}>
                                       </div>
                                   </div>
                               )

                           }

                           {
                               oneTypeSUVS.map((item,i) =>
                                   <div className={"col-md-3 col-sm-12 td-car-block"} onClick={this.getCarInfo} key={item.key}  data-toggle="modal" data-target="#formModal" data-name={item.name} style={{

                                   }}>
                                       <div className="td-name-block">
                                           <h2 className="td-car-name"><span className="td-car-logo">GMC</span> {item.name}</h2>
                                           <p className="td-year-car">{item.year}р.</p>
                                       </div>
                                       <div className='td-car-img' style={{
                                           backgroundImage:'url('+item.logo+')'
                                       }}>
                                       </div>
                                   </div>
                               )

                           }

                           {
                               vans.map((item,i) =>
                                   <div className={"col-md-3 col-sm-12 td-car-block"} onClick={this.getCarInfo} key={item.key} data-toggle="modal" data-target="#formModal" data-name={item.name} style={{

                                   }}>
                                       <div className="td-name-block">
                                           <h2 className="td-car-name"><span className="td-car-logo">GMC</span> {item.name}</h2>
                                           <p className="td-year-car">{item.year}р.</p>
                                       </div>
                                       <div className='td-car-img' style={{
                                           backgroundImage:'url('+item.logo+')'
                                       }}>
                                       </div>
                                   </div>
                               )

                           }
                       </div>
                   </div>
               </Tween>
               <div className="modal fade" id="formModal" tabIndex="-1" role="dialog" aria-labelledby="formModalLabel">
                   <div className="modal-dialog">
                       <div className="modal-content">
                           <form action="/tdServices" method="post" id="test-drive" className="test-drive-form" onSubmit={this.TestDriveForm}>
                               <h3 className="name-car-in-form" name="car_name_form">Авто: <span className="logo-name-two">GMC {this.state.selectedCar[0].name}</span> </h3>
                                <div className="td-form-img-container ">
                                    <img className="td-form-img" src = {this.state.selectedCar[0].logo} ></img>
                                </div>
                               <div className="td-form-about-container " id="td-form-about-container">
                                   <p  className="td-about-car-info">{this.state.selectedCar[0].about}</p>
                               </div>
                               <div className="button-read-container">
                                   <button onClick={this.OpenCloseRead} type="button"  id="read-button"  className="read-info two-class">Читати далі</button>
                               </div>
                               <hr/>
                               <div id="result-message" className="result-message"></div>
                               <input type="text" name="name" placeholder="Ваше ім'я" id="clientName" className=" form-control"/><br/>
                               <input type="text" name="surname" placeholder="Ваше прізвище" id="clientSurname" className=" form-control"/><br/>
                               <input type="text" name="phone" placeholder="Ваший номер телефону" id="clientPhone" className=" form-control"/><br/>
                               <input type="text" name="email" placeholder="Ваший email"  id="clientEmail" className=" form-control"/><br/>
                               <input type="text" name="city" placeholder="Місто"  id="clientCity" className=" form-control"/><br/>
                               <div className="radio-container">
                                   {
                                       this.state.selectedCar.length > 1 ?
                                           <React.Fragment>
                                               <span className="drive-radio">Привід: </span>

                                               <input type="radio" id="driveOne"
                                                      name="driveRadio"  className="radio-style" value={this.state.selectedCar[0].drive} defaultChecked/>
                                               <label htmlFor="driveOne" className="label-form">{this.state.selectedCar[0].drive}</label>

                                               <input type="radio" id="driveTwo"
                                                      name="driveRadio" className="radio-style second-radio" value={this.state.selectedCar[1].drive}/>
                                               <label htmlFor="driveTwo" className="label-form">{this.state.selectedCar[1].drive}</label>
                                           </React.Fragment>

                                           :

                                           <React.Fragment>
                                               <span className="drive-radio">Привід: </span>
                                               <input type="radio" id="driveOne"
                                                      name="driveOne" value={this.state.selectedCar[0].drive} defaultChecked/>
                                               <label htmlFor="driveOne" className="label-form">{this.state.selectedCar[0].drive}</label>
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
           </React.Fragment>
        )
    }


}

module.exports.TestDrive = TestDrive;