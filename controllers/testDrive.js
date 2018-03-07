
let nodemailer = require("nodemailer");



/*
let smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "vladosikhot@gmail.com",
        pass: "popaaa12345"
    }
});
*/

module.exports = function (req,res) {
    let name = req.body.name;
    let email = req.body.email;











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