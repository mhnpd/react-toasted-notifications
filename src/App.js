import { useState } from "react";
import { useNotification, Notification } from "react-toasted-notifications";
import { notifications } from "./data";

import "./css/App.css";

function App() {
  const [, action] = useNotification();
  const [type, setType] = useState("success");
  const [location, setLocation] = useState("topRight");

  const handleClickButton = (e) => {
    e.preventDefault();
    let notification = notifications[type];
    action.addNotification({ ...notification });
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  return (
    <div className="App container card p-5">
      <h3> Settings</h3>
      <hr />
      <div className="row mt-3">
        <div className="col">
          <div className="form-group">
            <h5>Notification type</h5>
            <select
              onChange={handleTypeChange}
              className="form-control"
              id="exampleFormControlSelect1"
              defaultValue="success"
            >
              <option>info</option>
              <option>warning</option>
              <option>error</option>
              <option>success</option>
            </select>
          </div>
        </div>
        <div className="col">
          <div className="form-group">
            <h5>Location on the screen</h5>
            <select
              onChange={handleLocationChange}
              className="form-control"
              id="exampleFormControlSelect1"
              defaultValue="topRight"
            >
              <option>topLeft</option>
              <option>bottomLeft</option>
              <option>topRight</option>
              <option>bottomRight</option>
            </select>
          </div>
        </div>
      </div>
      <hr />
      
      <div>
        <button onClick={handleClickButton} className="btn btn-primary ml-2">
          Show Notification
        </button>
      </div>
      <Notification position={location} timeout="5000" />
    </div>
  );
}

export default App;
