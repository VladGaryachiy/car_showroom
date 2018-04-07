let nodemailer = require("nodemailer");



let smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "gmc.motors.ua@gmail.com",
        pass: "gmcmotors12345"
    }
});
/*req.body*/
module.exports = function (req,res) {

/*info car*/
    let your_car_mark_model = req.body.yourCarInfo.carMark_Model;
    let your_car_complectation = req.body.yourCarInfo.carComplectation;
    let your_car_releaze = req.body.yourCarInfo.carYearReleaze;
    let your_car_mileage = req.body.yourCarInfo.carMileage;
    let your_car_drive_type_fuel = req.body.yourCarInfo.carDriveTypeFuel;
    let your_car_engine_capacity = req.body.yourCarInfo.carEngineCapacity;
    let your_car_type_body = req.body.yourCarInfo.carTypeBody;
    let your_car_transmission = req.body.yourCarInfo.carTransmission;
    let your_car_drive = req.body.yourCarInfo.carDrive;
    let your_car_state = req.body.yourCarInfo.carState;
/*new car*/
    let your_new_car = req.body.yourNewCar;
/*contacts*/
    let name = req.body.yourContacts.name;
    let email = req.body.yourContacts.email;
    let phone = req.body.yourContacts.phone;
/*commentation*/
    let commentation = req.body.yourCommentation;

    let success = []; let error = [];


    if(your_car_mark_model === ''){
        error.push({
            name:"mark_model",
            message:"Вкажіть марку та модель",
            class:"error"
        })
    }
    else{
        success.push({
            name:"mark_model",
            message:"Добре",
            class:"success"
        })

    }


    if(your_car_complectation === ''){
        error.push({
            complectation:"complectation",
            name:"Вкажіть комплектацію вашого авто",
            class:"error"
        })
    }
    else{
        success.push({
            complectation:"complectation",
            name:"Добре",
            class:"success"
        })

    }

    if(your_car_releaze === ''){
        error.push({
            name:"releaze",
            message:"Вкажіть рік випуску вашого авто",
            class:"error"
        })
    }
    else{
        success.push({
            name:"releaze",
            message:"Добре",
            class:"success"
        })

    }

    if(your_car_mileage === ''){
        error.push({
            name:"mileage",
            message:"Вкажіть пробіг вашого авто",
            class:"error"
        })
    }
    else{
        success.push({
            name:"mileage",
            message:"Добре",
            class:"success"
        })

    }

    if(your_car_engine_capacity === ''){
        error.push({
            name:"engine_capacity",
            message:"Вкажіть пробіг вашого авто",
            class:"error"
        })
    }
    else{
        success.push({
            name:"engine_capacity",
            message:"Добре",
            class:"success"
        })

    }

                /*---------CONTACTS-----------*/
/*name*/
    let vName;
    if(name === ''){
        error.push({
            name:"name",
            message:"Вкажіть ваше ім'я",
            class:"error"
        })
    }
    else if(vName = /[0-9]/.test(name)){
        error.push({
            name:"name",
            message:"Неправильне ім'я",
            class:"error"
        })

    }
    else if(vName = /[A-Z]/i.test(name)){
        error.push({
            name:"name",
            message:"Допустима мова (укр, рос)",
            class:"error"
        })
    }
    else{
        success.push({
            name:"name",
            message:"Добре",
            class:"success"
        })

    }

/*email*/
    let vEmail;
    if(email === ''){
        error.push({
            name:"email",
            message:"Вкажіть ваший email",
            class:"error"
        })
    }
    else if(vEmail = /\w+@\w+\.\w{2,3}/.test(email)){
        success.push({
            name:"email",
            message:"Добре",
            class:"success"
        })

    }
    else{
        error.push({
            name:"email",
            message:"Непрвильний формат",
            class:"error"
        })

    }



    if(error.length>0){
        res.status(500).json({error:error})
    }
    else{
        res.status(200).json({success:success});
       /* let message = "Доброго дня " + name + " !\nВи подали заявку для участі в тест-драйві на автомобілі " + carName +
            " (Привід: " +drive+') ! \nВаша заявка була схвалена керівництвом, тож приходьте в центральний офіс ' +
            'вашого міста ('+city+')  в дату та час яку ви вказали ('+date+')\n' +
            'Вам потрібно при собі мати документ що засвідчує вашу особу та документ на право керування транспортними засобами даної категорії !';
        let mailOptions={
            to : email,
            subject : "Замовлення тест-драйв",
            text : message
        };
        console.log(mailOptions);
        smtpTransport.sendMail(mailOptions, function(error, response){
            if(error){
                console.log(error);
                res.end("error");
            }else{
                console.log("Message sent: " + response.message);
                res.end("sent");
            }
        });*/
    }

};