'use client'
import { ChangeEventHandler, useState } from "react";

const DemoForm = () => {
  const [fields, setFields] = useState({name: "", fav_language: "", vehicle1: "", vehicle2: "", cars: ""})
  const onChange = (event: React.FormEvent) => {
    const target = event.target as HTMLInputElement
    const id = target.id
    const name = target.name
    const value = target.value
    setFields((preFields) => {
      console.log(preFields)
      return {...preFields, [name]: value}
    }
    )
  }
  return (
    <form>
      <label htmlFor="name">First name:</label><br/>
      <input type="text" id="name" name="name" onChange={onChange}/><br/>

      <input type="radio" id="html" name="fav_language" value="HTML" onChange={onChange}/>
      <label htmlFor="html">HTML</label><br/>
      <input type="radio" id="css" name="fav_language" value="CSS" onChange={onChange}/>
      <label htmlFor="css">CSS</label><br/>
      <input type="radio" id="javascript" name="fav_language" value="JavaScript" onChange={onChange}/>
      <label htmlFor="javascript">JavaScript</label><br/>

      <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" onChange={onChange}/>
      <label htmlFor="vehicle1"> I have a bike</label><br/>
      <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" onChange={onChange}/>
      <label htmlFor="vehicle2"> I have a car</label><br/>

      <label htmlFor="cars">Choose a car:</label>
      <select name="cars" id="cars" onChange={onChange}>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>

      <br/>
      <input type="submit" value="Submit" /> 
    </form> 
  )
}

export default DemoForm;