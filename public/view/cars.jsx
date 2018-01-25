let React = require('react');

let cars = [];


(function () {
    $.ajax({
        url:'/cars',
        method:'GET',
        contentType: "application/json; charset=utf-8",
        cache: false,
        success: function (result) {
            
            for(let i = 0; i < result.result.length; i++){
                cars.push(result.result[i]);
            }
        },
        error: function (error) {
            return error;
        }
    });

})();



class Cars extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <React.Fragment>
                {cars.map(item=>
                    <div className="car">
                        <h3>Назва : {item.name} id: {item.id}</h3>
                        <hr/>
                        <h1>Двигун</h1>
                        <p>Тип : {item.type_car}</p>
                        <p>Тип пального : {item.fuel_type}</p>
                        <p>Об'єм двигуна : {item.engine_capecity}</p>
                        <p>Кількість циліндрів : {item.numb_cylinder}</p>
                        <p>Кількість клапанів : {item.numb_valves}</p>
                        <p>Потужність : {item.power} л.с</p>
                        <p>Обороти максимальної швидкоcті : {item.turnovers_max_power}</p>
                        <p>Крутящий момент : {item.targue}</p>
                        <hr/>
                        <h1>Габарити</h1>
                        <p>Кількість місць: {item.places}</p>
                        <p>Довжина: {item.length}</p>
                        <p>Ширина: {item.width}</p>
                        <p>Висота: {item.height}</p>
                        <p>Вантажне відділення : {item.amount_cargo_cell}</p>
                        <p>Об'єм баку : {item.amount_fuel_tank}</p>
                        <hr/>
                        <h1>Коробка передач і привід</h1>
                        <p>Коробка передач : {item.transmission}</p>
                        <p>Тип коробки передач: {item.type_trans}</p>
                        <p>Кількість передач: {item.amount_gears}</p>
                        <p>Привід: {item.drive}</p>
                    </div>




                )}
            </React.Fragment>
        )
    }
}

module.exports.Cars = Cars;