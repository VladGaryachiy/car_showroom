let React = require('react');

let Tween = require('rc-tween-one/lib/TweenOne');
let ScrollOverPack = require('rc-scroll-anim/lib/ScrollOverPack');

let driveArr = [
    'Бензин',
    'Бензин компресор',
    'Бензин турбіна',
    'Дизель',
    'Дизель турбіна'
];
let stateCar = [
    'Чудовий',
    'Хороший',
    'Потребує невеликого ремонту'
];

let typeBodyCar = [
    'Седан',
    'Універсал',
    'Мінівен',
    'Позашляховик',
    'Купе'
];

let typeTransmission = [
    'Механіка',
    'Автомат',
    'Варіатор'
];

let drive = [
    'Передній',
    'Задній',
    'Повний'
];
let yourNewCar = [
    'Sierra Regular Cab',
    'Sierra Extended Cab',
    'Acadia',
    'Terrain',
    'Yukon'


];


class TradeIn extends React.Component{

    constructor(props){
         super(props);
         this.TradeInForm = this.TradeInForm.bind(this)
    }

    TradeInForm(e){
        e.preventDefault();

        /*------Info your car------*/
        let car_mark_model = e.currentTarget[0].value;
        let car_complectation = e.currentTarget[1].value;
        let car_year_releaze = e.currentTarget[2].value;
        let car_mileage = e.currentTarget[3].value;
        let car_type_drive_fuel = e.currentTarget[4].value;
        let car_engine_capacity = e.currentTarget[5].value;
        let car_type_body = e.currentTarget[6].value;
        let car_transmission = e.currentTarget[7].value;
        let car_drive = e.currentTarget[8].value;
        let car_state = e.currentTarget[9].value;

        /*------ your new car------*/
        let your_new_car = e.currentTarget[10].value;

        /*------ your contacts------*/

        let name = e.currentTarget[11].value;
        let email = e.currentTarget[12].value;
        let phone = e.currentTarget[13].value;

        /*------ your commentation ----*/

        let commentation = e.currentTarget[14].value;

        let trade_in_export_data = {
                'yourCarInfo': {
                    'carMark_Model' :       car_mark_model,
                    'carComplectation':     car_complectation,
                    'carYearReleaze':       car_year_releaze,
                    'carMileage':           car_mileage,
                    'carDriveTypeFuel':     car_type_drive_fuel,
                    'carEngineCapacity':    car_engine_capacity,
                    'carTypeBody':          car_type_body,
                    'carTransmission':      car_transmission,
                    'carDrive':             car_drive,
                    'carState':             car_state
                },
                'yourNewCar' : your_new_car,
                'yourContacts' : {
                    'name':     name,
                    'email':    email,
                    'phone':    phone
                },
                'yourCommentation': commentation
        };
        $.ajax({
            method:'POST',
            url:'/trade-in-form',
            data: JSON.stringify(trade_in_export_data),
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
        return(
            <React.Fragment>
                <Tween>
                    <h1 className="tin-name-main">Trade-in</h1>
                </Tween>
                <div className="container tin-main-content-container">
                    <div className="row">
                        <div className="col-md-12 col-xs-12 col-sm-12 tin-main-banner" >
                            <h1 className="tin-banner-about">
                                <p className="tin-banner-line"></p>
                                <span className="tin-big-letters">ПРОГРАМА</span> утилізації і <br/>
                                <span className="tin-big-letters">ОНОВЛЕННЯ</span><br/> автомобілів GMC</h1>
                        </div>
                        <div className="col-md-12 col-xs-12 col-sm-12 tin-about-service">
                            <p>
                                Програма Trade-in в  - це максимально швидкий і зручний спосіб придбати новий автомобіль GMC,
                                першим внеском за який стає ваш автомобіль.
                            </p>
                            <p>
                                Наші фахівці оперативно проведуть оцінку вартості вашого автомобіля, яка піде в залік вартості
                                нового GMC. Більш того, вам не потрібно замислюватися про реалізацію власного автомобіля,
                                це завдання на себе візьмуть співробітники нашого дилерського центру.
                            </p>
                            <p>
                                І найголовніше: всі учасники програми Trade-in гарантовано
                                отримують перевагу у вигляді вигоди на покупку нового GMC.
                            </p>
                        </div>
                        <div className="col-md-12 col-xs-12 col-sm-12 tin-service-schema-img"></div>
                        <div className="col-md-12 col-xs-12 col-sm-12 tin-service-order-button">
                            <button className="tin-order-button" type="button" data-toggle="modal" data-target="#formModalTradeIn">
                                Записатися на оцінювання вашого авто
                            </button>


                            <div className="modal fade" id="formModalTradeIn" tabIndex="-1" role="dialog" aria-labelledby="formModalLabel">
                                <div className="modal-dialog tin-modal">
                                    <div className="modal-content">
                                        <form action="/trade-in-form" method="post" id="test-in" className="trade-in-form" onSubmit={this.TradeInForm}>
                                            <h2 className="trade-in-form-name-main">Оцінка авто TRADE-IN</h2>
                                            <div id="result-message" className="result-message"></div>
                                             <div className="tin-inputs-container container">
                                                 <div className="row">
                                                     <div className="col-md-6 col-sm-12 col-xs-12">
                                                         <h3 className="tin-point-name"><span className="number-position">1</span> Ваший автомобіль</h3>
                                                         <table className="table-for-form-tin-your-car">
                                                             <tbody className="tbody-for-form-tin-your-car">
                                                             <tr>
                                                                 <td>
                                                                     <span htmlFor="mark-model" className="tin-label-form">Марка, модель:</span>
                                                                 </td>
                                                                 <td>
                                                                     <input type="text" name="mark-model" placeholder="" id="mark-model" className="form-control tin-text-form "/>
                                                                 </td>
                                                             </tr>
                                                             <tr>
                                                                 <td>
                                                                     <span htmlFor="complectation" className="tin-label-form">Комплектація:</span>
                                                                 </td>
                                                                 <td>
                                                                     <input type="text" name="complectation" placeholder="" id="complectation" className="form-control tin-text-form "/>
                                                                 </td>
                                                             </tr>
                                                             <tr>
                                                                 <td>
                                                                     <span htmlFor='yearOfissue' className="tin-label-form">Рік випуску:</span>
                                                                 </td>
                                                                 <td>
                                                                     <input type="text" name="yearOfissue" placeholder="" id="yearOfissue" className="form-control tin-text-form "/>
                                                                 </td>
                                                             </tr>
                                                             <tr>
                                                                 <td>
                                                                     <span htmlFor='mileage' className="tin-label-form">Пробіг(км):</span>
                                                                 </td>
                                                                 <td>
                                                                     <input type="text" name="mileage" placeholder="" id="mileage" className="form-control tin-text-form "/>
                                                                 </td>
                                                             </tr>
                                                             <tr>
                                                                 <td>
                                                                     <span htmlFor='mileage' className="tin-label-form">Двигун:</span>
                                                                 </td>
                                                                 <td>
                                                                     <select name="driveCheck" id="driveCheck" className="driveCheck form-control tin-text-form">
                                                                         {
                                                                             driveArr.map((item,i) =>
                                                                                 <option value={item} key={i}>{item}</option>
                                                                             )
                                                                         }
                                                                     </select>
                                                                 </td>
                                                             </tr>
                                                             <tr>
                                                                 <td>
                                                                     <span htmlFor='engineСapacity' className="tin-label-form">Об'єм двигуна:</span>
                                                                 </td>
                                                                 <td>
                                                                     <input type="text" name="engineСapacity" placeholder="" id="engineСapacitye" className="form-control tin-text-form "/>
                                                                 </td>
                                                             </tr>
                                                             <tr>
                                                                 <td>
                                                                     <span htmlFor='typeBodyCar' className="tin-label-form">Кузов:</span>
                                                                 </td>
                                                                 <td>
                                                                     <select name="typeBodyCar" id="typeBodyCar" className="typeBodyCar form-control tin-text-form">
                                                                         {
                                                                             typeBodyCar.map((item,i) =>
                                                                                 <option value={item} key={i}>{item}</option>
                                                                             )
                                                                         }
                                                                     </select>
                                                                 </td>
                                                             </tr>
                                                             <tr>
                                                                 <td>
                                                                     <span htmlFor='transmission' className="tin-label-form">Трансмісія:</span>
                                                                 </td>
                                                                 <td>
                                                                     <select name="transmission" id="transmission" className="transmission form-control tin-text-form">
                                                                         {
                                                                             typeTransmission.map((item,i) =>
                                                                                 <option value={item} key={i}>{item}</option>
                                                                             )
                                                                         }
                                                                     </select>
                                                                 </td>
                                                             </tr>
                                                             <tr>
                                                                 <td>
                                                                     <span htmlFor='drive' className="tin-label-form">Привід:</span>
                                                                 </td>
                                                                 <td>
                                                                     <select name="drive" id="drive" className="drive form-control tin-text-form">
                                                                         {
                                                                             drive.map((item,i) =>
                                                                                 <option value={item} key={i}>{item}</option>
                                                                             )
                                                                         }
                                                                     </select>
                                                                 </td>
                                                             </tr>
                                                             <tr>
                                                                 <td>
                                                                     <span htmlFor='stateCar' className="tin-label-form">Стан:</span>
                                                                 </td>
                                                                 <td>
                                                                     <select name="stateCar" id="stateCar" className="stateCar form-control tin-text-form">
                                                                         {
                                                                             stateCar.map((item,i) =>
                                                                                 <option value={item} key={i}>{item}</option>
                                                                             )
                                                                         }
                                                                     </select>
                                                                 </td>
                                                             </tr>
                                                             </tbody>
                                                         </table>
                                                     </div>
                                                     <div className="col-md-6 col-sm-12 col-xs-12">
                                                         <h3 className="tin-point-name"><span className="number-position">2</span> Ваший новий автомобіль</h3>
                                                         <table className="table-for-form-tin-your-car">
                                                             <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <span htmlFor='stateCar' className="tin-label-form">Хочу замнінити на:</span>
                                                                    </td>
                                                                    <td>
                                                                        <select name="yourNewCar" id="yourNewCar" className="yourNewCar form-control tin-text-form">
                                                                            {
                                                                                yourNewCar.map((item,i) =>
                                                                                    <option value={item} key={i}>{item}</option>
                                                                                )
                                                                            }
                                                                        </select>
                                                                    </td>
                                                                </tr>
                                                             </tbody>
                                                         </table>
                                                         <h3 className="tin-point-name"><span className="number-position">3</span> Контактна інформація</h3>
                                                         <table className="table-for-form-tin-your-car">
                                                             <tbody>
                                                               <tr>
                                                                   <td>
                                                                       <span htmlFor='yourName' className="tin-label-form">Ім'я:</span>
                                                                   </td>
                                                                   <td>
                                                                       <input type="text" name="yourName" placeholder="" id="yourName" className="form-control tin-text-form "/>
                                                                   </td>
                                                               </tr>
                                                               <tr>
                                                                   <td>
                                                                       <span htmlFor='yourEmail' className="tin-label-form">Email:</span>
                                                                   </td>
                                                                   <td>
                                                                       <input type="text" name="yourEmail" placeholder="" id="yourEmail" className="form-control tin-text-form "/>
                                                                   </td>
                                                               </tr>
                                                               <tr>
                                                                   <td>
                                                                       <span htmlFor='yourPhone' className="tin-label-form">Телефон:</span>
                                                                   </td>
                                                                   <td>
                                                                       <input type="text" name="yourPhone" placeholder="" id="yourPhone" className="form-control tin-text-form "/>
                                                                   </td>
                                                               </tr>
                                                             </tbody>
                                                         </table>
                                                         <h3 className="tin-point-name"><span className="number-position">4</span> Коментарі та побажання</h3>
                                                         <table className="table-for-form-tin-your-car">
                                                             <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <span htmlFor='yourComments' className="tin-label-form">Коментарі:</span>
                                                                    </td>
                                                                    <td>
                                                                        <textarea className="cordComment form-control tin-text-form">

                                                                        </textarea>
                                                                    </td>
                                                                </tr>
                                                             </tbody>
                                                         </table>
                                                         <div className="tin-modal-footer">
                                                             <button type="submit" className="btn btn-success tin-send">Надіслати</button>
                                                             <button type="button" className="btn btn-default tin-exit" data-dismiss="modal">Вийти</button>
                                                         </div>
                                                     </div>
                                                 </div>

                                             </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </React.Fragment>

        )
    }
    

}



module.exports.TradeIn = TradeIn;