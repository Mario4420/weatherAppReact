import Form from "react-bootstrap/Form"
import React, { useState } from "react";


function App() {

  const [temp, setTemp] = useState("");
  const [location, setLocation] = useState("");

  const formSubmitted = (event) => {
    event.preventDefault();
    fetch(`http://api.weatherapi.com/v1/current.json?key=c621479ed6a34ab0baa162013222006&q=${location}&aqi=yes`)
      .then(response => response.json())
      .then(data => {
        setTemp(data.current.temp_c)
        console.log(data);
      });
  }

  return (
    <div>
      <h1>Weather App</h1>
      <Form onSubmit={formSubmitted}>
        <Form.Label>Location</Form.Label>
        <Form.Control value={location} type="location" placeholder="Enter Location" onChange={event => {
          setLocation(event.target.value);
        }} />
        <Form.Text className="text-muted">
          preferably a city :)
        </Form.Text>
      </Form>
      {temp && (
        <h1>{temp}°</h1>
      )}
    </div>
  );
}

export default App;