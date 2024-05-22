import React, { useEffect, useState } from 'react'
import './Form.css'
import { useTelegram } from '../../hooks/useTelegram'

const Form = () => {

    const [country, setCoutry] = useState("")
    const [street, setStreet] = useState("")
    const [subject, setSubject] = useState("physical")

    const {tg} = useTelegram()

    useEffect(() => {
        tg.MainButton.setParam({
            text: 'Оформити заявку',
        })
    })

    useEffect(() => {
        if(!street || !country) {
            tg.MainButton.hide()
        } else {
            tg.MainButton.show()
        }
    }, [country, street])
    
    const onChangeCountry = (e) => {
        setCoutry(e.target.value)
    }

    const onChangeStreet = (e) => {
        setStreet(e.target.value)
    }

    const onChangeSubject = (e) => {
        setSubject(e.target.value)
    }
  return (
    <div className={"form"}>
        <h3>Введіть ваші дані</h3>
        <input className={"input"} type="text" placeholder='Країна' value={country} onChange={onChangeCountry}/>
        <input className={"input"} type="text" placeholder='Вулиця' value={street} onChange={onChangeStreet}/>

        <select className={"select"} value={subject} onChange={onChangeSubject}>
            <option value={"physical"}>Фіз особа</option>
            <option value={"legal"}>Юридична особа</option>
        </select>
    </div>
  )
}

export default Form