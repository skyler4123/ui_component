const DemoForm = () => {
  return (
    <form>
      <label htmlFor="fname">First name:</label><br/>
      <input type="text" id="fname" name="fname" /><br/>
      <input type="radio" id="html" name="fav_language" value="HTML"/>
      <label htmlFor="html">HTML</label><br/>
      <input type="radio" id="css" name="fav_language" value="CSS"/>
      <label htmlFor="css">CSS</label><br/>
      <input type="radio" id="javascript" name="fav_language" value="JavaScript"/>
      <label htmlFor="javascript">JavaScript</label><br/>
      <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
      <label htmlFor="vehicle1"> I have a bike</label><br/>
      <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
      <label htmlFor="vehicle2"> I have a car</label><br/>
      <label htmlFor="cars">Choose a car:</label>
      <select name="cars" id="cars">
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