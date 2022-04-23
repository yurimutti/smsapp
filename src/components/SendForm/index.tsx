
import { FormEvent, useState } from 'react';
import axios from 'axios'

const SendForm = () => {
  const [number, setNumber] = useState('')
  const [text, setText] = useState('')

  async function handleSendMessage(event: FormEvent){
    event.preventDefault()

    let APIkey = "VFhSYTFrUm02Y0xoME5GN2ZWVkVSaFdXQ0huaU9jSE4="
    let BaseURL = "https://api.nvoip.com.br/v2/sms"
    let URL = BaseURL + '?napikey=' + APIkey 

    var body = JSON.stringify({
        'numberPhone': number,
        'message': text,
        'flashSms': false
    })

    const response = await axios.post(URL, body, {
      headers: {
        'Content-Type': 'application/json',
      }
    })

    return response
  }

  function handleChange(event: FormEvent){
    const target = event.target as HTMLInputElement

    if(target.name === 'text') {
      setText(target.value)
    } else {
      setNumber(target.value)
    }
  }

  return(
    <form onSubmit={handleSendMessage}>
      <input type="text" onChange={handleChange} name="number"/>
      <textarea onChange={handleChange} name="text" />
      <button>Enviar</button>
    </form>
  )
}

export default SendForm