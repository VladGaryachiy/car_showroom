let React = require('react');
let Tween = require('rc-tween-one/lib/TweenOne');
let ScrollOverPack = require('rc-scroll-anim/lib/ScrollOverPack');


function UKRGAZBANK() {
    return(
        <React.Fragment>
            <div className="main container">
                <div className="row">
                    <div className="col-md-12 col-xs-12 col-sm-12">
                        {/* <div>
                    <b>Спеціальні умови кредитування</b>
                </div>*/}
                        <br/>

                    </div>
                    <div className="special-GMC-container col-md-12 col-sm-12 col-xs-6">
                        <p className="special-GMC ">
                            Спеціальні умови GMC
                            <span className = "bank-logo-right">
                                АБ «УКРГАЗБАНК»
                            </span>
                        </p>
                    </div>
                    <div className="tableWrap section col-md-12">
                        <div className="tableFix col-md-6 col-xs-6 col-sm-6 table-block" >
                            <table className="fixArea" >
                                <tbody>

                                <tr><th className="tableTh3">Клієнт</th></tr>

                                <tr><th className="tableTh3">Предмет кредитування</th></tr>

                                <tr><th className="tableTh3">Аванс</th></tr>

                                <tr><th className="tableTh3">Строк кредитування</th></tr>

                                <tr><th className="tableTh3">Строк кредитування</th></tr>

                                <tr><th className="tableTh3">12 міс.</th></tr>

                                <tr><th className="tableTh3">24 міс.</th></tr>

                                <tr><th className="tableTh3">36 міс.</th></tr>

                                <tr><th className="tableTh3">48 міс.</th></tr>

                                <tr><th className="tableTh3">60 міс.</th></tr>

                                <tr><th className="tableTh3">72 міс.</th></tr>

                                <tr><th className="tableTh3">84 міс.</th></tr>

                                <tr><th className="tableTh3">Разова комісія</th></tr>

                                <tr><th className="tableTh3">Страхування КАСКО</th></tr>

                                <tr><th className="tableTh3">Страхування від нещасного випадку</th></tr>

                                <tr><th className="tableTh3">Схема погашення</th></tr>

                                <tr><th className="tableTh3">Страхова компанія партнер</th></tr>

                                <tr><th className="tableTh3" height="56px">Максимальна сума кредитування</th></tr>

                                <tr height="357.5px"><th className="tableTh3" >Примітки</th></tr>

                                </tbody>
                            </table>
                        </div>
                        <div className="tableFix col-md-6 col-xs-6 col-sm-6 table-block" id="">
                            <table className="scrollArea" width="100%" cellSpacing="0" cellPadding="1" border="1">
                                <tbody>
                                <tr><td colSpan="6">Фізичні особи</td></tr>
                                <tr><td colSpan="6">весь модельний ряд автомобілів GMC</td></tr>
                                <tr><td height="20" width="50">10%</td>
                                    <td width="50">20%</td>
                                    <td width="92">30%</td>
                                    <td width="54">40%</td>
                                    <td width="54">50%</td>
                                    <td width="97">60%</td>
                                </tr><tr><td colSpan="6">12, 24, 36, 48, 60, 72, 84 місяці</td>
                                </tr><tr><td colSpan="6">Річна фіксована ставка</td>
                                </tr><tr><td>6,99%</td>
                                    <td>5,99%</td>
                                    <td>4,99%</td>
                                    <td>3,99%</td>
                                    <td>0,001%</td>
                                    <td>0,001%</td>
                                </tr><tr><td>8,99%</td>
                                    <td>8,49%</td>
                                    <td>7,99%</td>
                                    <td>6,99%</td>
                                    <td>5,49%</td>
                                    <td>3,99%</td>
                                </tr><tr><td>10,49%</td>
                                    <td>10,49%</td>
                                    <td>9,99%</td>
                                    <td>8,99%</td>
                                    <td>7,99%</td>
                                    <td>5,49%</td>
                                </tr><tr><td>11,49%</td>
                                    <td>10,99%</td>
                                    <td>10,49%</td>
                                    <td>9,99%</td>
                                    <td>8,99%</td>
                                    <td>6,99%</td>
                                </tr><tr><td>11,99%</td>
                                    <td>11,49%</td>
                                    <td>10,99%</td>
                                    <td>10,49%</td>
                                    <td>9,99%</td>
                                    <td>7,99%</td>
                                </tr><tr><td>11,99%</td>
                                    <td>11,99%</td>
                                    <td>11,49%</td>
                                    <td>10,99%</td>
                                    <td>9,99%</td>
                                    <td>7,99%</td>
                                </tr><tr><td>11,99%</td>
                                    <td>11,99%</td>
                                    <td>11,49%</td>
                                    <td>10,99%</td>
                                    <td>10,49%</td>
                                    <td>8,99%</td>
                                </tr><tr><td colSpan="6">0%</td>
                                </tr><tr><td colSpan="6">5,99% (за умови франшиз 0,5% та 7%)</td>
                                </tr><tr><td colSpan="6">2,9% (щорічно від суми кредиту за рахунок власних коштів клієнта)</td>
                                </tr><tr><td colSpan="6">Ануїтет/стандарт</td>
                                </tr><tr><td colSpan="6">ТДВ &quot;Експрес-страхування&quot; (КАСКО, ОСЦПВ)</td>
                                </tr><tr height="56px"><td colSpan="6">1 500 000 грн. Сума кредиту, більша за&nbsp;1 500 000 грн. погоджується з Банком індивідуально</td>
                                </tr><tr><td colSpan="6"><p>Авто в кредит можна придбати на наступних умовах: максимальний строк кредитування – 84 міс., максимальна сума кредитування –&nbsp;1 500 000 гривень, реальна відсоткова ставка становить від 0,001% до 12,67% річних і залежить від обраних споживачем умов кредитування. Орієнтовні загальні витрати по кредиту (платежі за додаткові і супутні послуги банку, пов’язані з отриманням, обслуговуванням і поверненням кредиту) складають 82,86 грн. на кожну 1000 грн. кредитних коштів при терміні кредитування 24 місяці, авансі 30% і стандартній схемі погашення (класична). При цьому реальна відсоткова ставка становить 8,29% річних.</p>
                                    <p>Кредитує АБ «УКРГАЗБАНК» ліцензія НБУ №123 від 06.10.2011 р. Кредит видається у відділеннях Банку по всій території України за винятком тимчасово окупованої території АР Крим та зони проведення АТО.&nbsp;</p>
                                    <p>Банк залишає за собою право змінювати умови кредитування. Детальніше про зазначений кредитний продукт АБ «УКРГАЗБАНК» на&nbsp;<a href="http://www.kia.com/ua/shopping-tools/financing/financing.html" _href="http://www.kia.com/ua/shopping-tools/financing/financing.html">www.ukrgasbank.com</a>&nbsp;або за телефоном 0 800 309 000</p>
                                </td>
                                </tr></tbody></table>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}


function GLOBUSBANK() {
    return(
        <React.Fragment>

            <div className="main container">
                <div className="row">
                    <div className="col-md-12 col-xs-12 col-sm-12">
                        <br/>
                    </div>
                    <div className="special-GMC-container col-md-12 col-sm-12 col-xs-6">
                        <p className="special-GMC ">
                            Спеціальні умови GMC
                            <span className = "bank-logo-right">
                                ПАТ КБ "ГЛОБУС БАНК"
                            </span>
                        </p>
                    </div>
                    <div className="tableWrap section col-md-12">
                        <div className="tableFix col-md-6 col-xs-6 col-sm-6 table-block" >
                            <table className="fixArea" >
                                <tbody>

                                <tr><th className="tableTh3">Клієнт</th></tr>

                                <tr><th className="tableTh3">Предмет кредитування</th></tr>

                                <tr><th className="tableTh3">Аванс</th></tr>

                                <tr><th className="tableTh3">Строк кредитування</th></tr>

                                <tr><th className="tableTh3">Строк кредитування</th></tr>

                                <tr><th className="tableTh3">12 міс.</th></tr>

                                <tr><th className="tableTh3">24 міс.</th></tr>

                                <tr><th className="tableTh3">36 міс.</th></tr>

                                <tr><th className="tableTh3">48 міс.</th></tr>

                                <tr><th className="tableTh3">60 міс.</th></tr>

                                <tr><th className="tableTh3">72 міс.</th></tr>

                                <tr><th className="tableTh3">84 міс.</th></tr>

                                <tr><th className="tableTh3">Разова комісія</th></tr>

                                <tr><th className="tableTh3">Страхування КАСКО</th></tr>

                                <tr><th className="tableTh3">Страхування від нещасного випадку</th></tr>

                                <tr><th className="tableTh3">Схема погашення</th></tr>

                                <tr><th className="tableTh3">Страхова компанія партнер</th></tr>

                                <tr><th className="tableTh3" height="56px">Максимальна сума кредитування</th></tr>

                                <tr height="375.5px"><th className="tableTh3" >Примітки</th></tr>

                                </tbody>
                            </table>
                        </div>
                        <div className="tableFix col-md-6 col-xs-6 col-sm-6 table-block" id="">
                            <table className="scrollArea" width="100%" cellSpacing="0" cellPadding="1" border="1">
                                <tbody>
                                <tr><td colSpan="6">Фізичні особи</td></tr>
                                <tr><td colSpan="6">весь модельний ряд автомобілів GMC</td></tr>
                                <tr><td height="20" width="50">10%</td>
                                    <td width="50">20%</td>
                                    <td width="92">30%</td>
                                    <td width="54">40%</td>
                                    <td width="54">50%</td>
                                    <td width="97">60%</td>
                                </tr><tr><td colSpan="6">12, 24, 36, 48, 60, 72, 84 місяці</td>
                                </tr><tr><td colSpan="6">Річна фіксована ставка</td>
                                </tr><tr><td>12,30%</td>
                                    <td >11,50%</td>
                                    <td >10,50%</td>
                                    <td>9,20%</td>
                                    <td>7,40%</td>
                                    <td>4,60%</td>
                                </tr><tr><td>14,20%</td>
                                    <td >13,60%</td>
                                    <td>12,80%</td>
                                    <td>11,70%</td>
                                    <td>10,20%</td>
                                    <td>7,90%</td>
                                </tr><tr><td >15,00%</td>
                                    <td>14,40%</td>
                                    <td>13,70%</td>
                                    <td>12,80%</td>
                                    <td>11,40%</td>
                                    <td>9,40%</td>
                                </tr><tr><td>15,50%</td>
                                    <td>15,00%</td>
                                    <td>14,30%</td>
                                    <td>13,40%</td>
                                    <td>12,20%</td>
                                    <td>10,40%</td>
                                </tr><tr><td>15,90%</td>
                                    <td>15,40%</td>
                                    <td>14,80%</td>
                                    <td>14,00%</td>
                                    <td>12,80%</td>
                                    <td>11,10%</td>
                                </tr><tr><td>16,10%</td>
                                    <td>15,70%</td>
                                    <td>15,10%</td>
                                    <td>14,30%</td>
                                    <td>13,30%</td>
                                    <td>11,70%</td>
                                </tr><tr><td>16,40%</td>
                                    <td>15,90%</td>
                                    <td>15,40%</td>
                                    <td>14,70%</td>
                                    <td>13,70%</td>
                                    <td>12,10%</td>
                                </tr><tr><td colSpan="6">0%</td>
                                </tr><tr><td colSpan="6">5,99% (за умови франшиз 0,5% та 7%)</td>
                                </tr><tr><td colSpan="6">Відсутня</td>
                                </tr><tr><td colSpan="6">Ануїтет/стандарт</td>
                                </tr><tr><td colSpan="6">ТДВ &quot;Експрес-страхування&quot; (КАСКО, ОСЦПВ)</td>
                                </tr><tr><td colSpan="6">1 000 000 грн. Сума кредиту, більша за&nbsp;1 000 000 грн. погоджується з Банком індивідуально</td>
                                </tr><tr><td colSpan="6"><p>Авто в кредит можна придбати на наступних умовах: максимальний строк кредитування – 84 міс., максимальна сума кредитування –&nbsp;1 000 000 гривень, реальна відсоткова ставка становить від 4.6% до 16,4% річних і залежить від обраних споживачем умов кредитування. Орієнтовні загальні витрати по кредиту (платежі за додаткові і супутні послуги банку, пов’язані з отриманням, обслуговуванням і поверненням кредиту) складають 120,27 грн. на кожну 1000 грн. кредитних коштів при терміні кредитування 24 місяці, авансі 30% і стандартній схемі погашення (класична). При цьому реальна відсоткова ставка становить 12,41% річних.</p>
                                    <p>Кредитує ПАТ КБ «ГЛОБУС-БАНК» ліцензія НБУ №240 від 26.10.2011 р. Кредит видається у відділеннях Банку по всій території України за винятком тимчасово окупованої території АР Крим та зони проведення АТО.&nbsp;</p>
                                    <p>Банк залишає за собою право змінювати умови кредитування. Детальніше про зазначений кредитний продукт ПАТ КБ «ГЛОБУС-БАНК»на http://www.globusbank.com.ua або за телефоном 044 392 00 00</p>
                                </td>
                                </tr></tbody></table>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>

    )
}



class Finance extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            ukrgaz:false,
            globus:false
        };

        this.Ukrgaz = this.Ukrgaz.bind(this);
        this.Globus = this.Globus.bind(this);
    }

    Ukrgaz(){
        
        this.setState({
            ukrgaz:true,
            globus:false
        })

    }
    Globus(){
        this.setState({
            ukrgaz:false,
            globus:true
        })
    }




    render() {

        let table = null;

        if(this.state.ukrgaz === true && this.state.globus === false ){
                table = (
                    <Tween
                        key='1'
                        animation={{ y:40, type: 'from', ease: 'easeOutQuart', opacity: 0  }}
                    >
                        <UKRGAZBANK/>
                    </Tween>
                )
        }
        else if(this.state.ukrgaz === false && this.state.globus === true ){
            table =  (
                <Tween
                key='1'
                animation={{ y:40, type: 'from', ease: 'easeOutQuart', opacity: 0  }}
                >
                     <GLOBUSBANK/>
                </Tween>
            )
        }
        else{

        }

        return(
            <React.Fragment>

                <div className="container-fluid credit-main-container">
                    <div className="row">
                        <Tween
                            animation={{
                                type: 'from',
                                ease: 'easeOutQuart',
                                opacity: 0 ,
                                translateX: '-300px',
                                duration:900,
                            }}
                        >
                            <h1 className="finance-main-name">Фінансування</h1>
                        </Tween>
                        <br/>
                        <Tween
                            animation={{
                                type: 'from',
                                ease: 'easeOutQuart',
                                opacity: 0 ,
                                translateY: '300px',
                                duration:900,
                            }}>

                            <div className="bank-button-container">
                                <h2 className="select-bank-name">
                                    Оберіть банк для отримання інформації щодо, кредитування
                                </h2>
                                <div className="img-bank-group-block">
                                    <img className="img-ukrgas img-bank" onClick={this.Ukrgaz} src="../img/bank/Ukrgasbank.png"></img>
                                    <img className="img-globus img-bank" onClick={this.Globus} src="../img/bank/Globusbank.png" ></img>
                                </div>
                            </div>
                        </Tween>
                        {/*----BANK INFO TABLE----*/}
                        {table}











                        <br/>
                        <br/>
                        <br/>
                        <br/>

                    </div>
                </div>




            </React.Fragment>
        )
    }
}

module.exports.Finance = Finance;