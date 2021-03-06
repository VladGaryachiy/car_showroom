
let nodemailer = require("nodemailer");



let smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "gmc.motors.ua@gmail.com",
        pass: "gmcmotors12345"
    }
});

module.exports = function (req,res) {
    req;
    let name = req.body.name;
    let surname = req.body.surname;
    let phone = req.body.phone;
    let email = req.body.email;
    let city = req.body.city;
    let drive = req.body.drive;
    let date = req.body.date;
    let carName = req.body.carName;

    let success = [], error = [];


    /*-------------------------VALIDATION FORM---------------*/


    /*--------------------------Name----------------------------*/
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
    /*--------------------SURNAME-------------------*/

    let vSurname;
    if(surname === ''){
        error.push({
            name:"surname",
            message:"Вкажіть ваше прізвище",
            class:"error"
        })
    }
    else if(vSurname = /[0-9]/.test(surname)){
        error.push({
            name:"surname",
            message:"Неправильний формат",
            class:"error"
        })

    }
    else if(vSurname = /[A-Z]/i.test(surname)){
        error.push({
            name:"surname",
            message:"Допустима мова (укр, рос)",
            class:"error"
        })
    }
    else{
        success.push({
            name:"surname",
            message:"Добре",
            class:"success"
        })

    }


    /*-----------------------PHONE-------------------------------*/

    let vPhone;
    if(phone === ''){
        error.push({
            name:"phone",
            message:"Вкажіть ваший номер телефону",
            class:"error"
        })
    }
    else if(vPhone = /[A-Z]/i.test(phone)){
        error.push({
            name:"phone",
            message:"Неправильний формат",
            class:"error"
        })

    }
    else if(vPhone = /^\+380\d{9}$/.test(phone)){
        success.push({
            name:"phone",
            message:"Добре",
            class:"success"
        })
    }
    else{
        error.push({
            name:"phone",
            message:"Непрвильний формат",
            class:"error"
        })

    }

    /*-----------------------EMAIL-------------------------------*/
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

    /*---------------------------City----------------------*/

    let vCity;
    if(city === ''){
        error.push({
            name:"city",
            message:"Вкажіть ваше місто",
            class:"error"
        })
    }
    else if(vCity = /[0-9]/.test(city)){
        error.push({
            name:"city",
            message:"Непрвильний формат",
            class:"error"
        })

    }
    else{
        success.push({
            name:"city",
            message:"Добре",
            class:"success"
        })

    }


    /*----------------------Date--------------*/

    let vDate;
    if(date === ''){
        error.push({
            name:"date",
            message:"Вкажіть дату та час",
            class:"error"
        })
    }
    else if(vDate = /[A-Z]/i.test(date)){
        error.push({
            name:"date",
            message:"Непрвильний формат",
            class:"error"
        })

    }
    else{
        success.push({
            name:"date",
            message:"Добре",
            class:"success"
        })

    }


    if(error.length>0){
        res.status(500).json({error:error})
    }
    else{
        res.status(200).json({success:success});
        let message = "Доброго дня " + name + " !\nВи подали заявку для участі в тест-драйві на автомобілі " + carName +
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
        });
    }





    /* let mailOptions={
         to : req.body.email,
         subject : "My firs message",
         text : "This is message , hi good working"
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


};