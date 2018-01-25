let pg = require('pg');
let connect = "postgres://eduonix:1111@localhost/cars";

module.exports = function (req,res) {

        pg.connect(connect,function (err,client,done) {
            if(err){
                return console.error('Error',err);
            }
            client.query(
                'SELECT * FROM all_cars JOIN type ON all_cars.type_id =  type.id\n' +
                'JOIN amount_places ON all_cars.amount_places_id = amount_places.id\n' +
                'JOIN drive ON all_cars.drive_id = drive.id\n' +
                'JOIN numbers_cylinders ON all_cars.number_cylinders_id = numbers_cylinders.id\n' +
                'JOIN numbers_valves ON all_cars.number_valves_id = numbers_valves.id\n' +
                'JOIN type_transmission ON all_cars.type_transmission_id = type_transmission.id',function (err,result) {
                if(err){
                    return console.error('Error',err);
                }
                result;

                res.status(200).json({result:result.rows});
                done();
            })
        });
};