import React, {useState} from 'react';
import Style from './Weekly.module.scss'
import Search from '../../componets/search/Search'
const Weekly = () => {
    const [load, setLoad] = useState(false)
    const [update, setUpdate] = useState([])
    
    function getData(path) {
        return (path.map((item, ind) => <th key={ind} className={Style.Daylist}>{item}</th>))
    }

    return (
        <div className={Style.container}>
            <h1>Погода в {} на 7 дней</h1>
            <Search load={setLoad} update={setUpdate} />
            <div className={Style.tableCon}>
                {load && <table className={Style.table}>
                    
                    <thead>
                        <tr className={Style.tableName}>
                            <td></td>
                            {update[2].daily.time.map((item, ind) => <th key={ind} className={Style.Daylist}>{item}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        <tr className={Style.tableHead}>
                            <td>Температура</td>
                        </tr>
                        <tr className={Style.tableHead}>
                            <td>Текущая температура</td>
                        </tr>
                        <tr className={Style.tableHead}>
                            <td >Максимальная температура</td>
                            {getData(update[2].daily.temperature_2m_max)}
                        </tr>
                        <tr className={Style.tableHead}>
                            <td>Минимальная температура</td>
                            {getData(update[2].daily.temperature_2m_min)}
                        </tr>
                        <tr className={Style.tableHead}>
                            <td>Влажность</td>
                        </tr>
                        <tr className={Style.tableHead}>
                            <td>Скорость ветра</td>
                        </tr>
                        <tr className={Style.tableHead}>
                            <td>Направление ветра</td>
                        </tr>
                        <tr className={Style.tableHead}>
                            <td>Давление</td>
                        </tr>
                        <tr className={Style.tableHead}>
                            <td>Рассвет</td>
                        </tr>
                        <tr className={Style.tableHead}>
                            <td>Закат</td>
                        </tr>
                        <tr className={Style.tableHead}>
                            <td>Снег</td>
                        </tr>
                        <tr className={Style.tableHead}>
                            <td>Дождь</td>
                        </tr>
                    </tbody>
                </table>}
            </div>
        </div>
    );
};

export default Weekly;