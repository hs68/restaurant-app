import React, { useState } from "react";
export default function AddDish(props) {
  const [name, setname] = useState("");
    const [time, settime] = useState("");
    const submit = (e) => {
        e.preventDefault();
        let dish = {
            name: name,
            time: time,
        }
        props.Add(dish);

        settime("");
        setname("");
    }
  return (
    <div className="container">
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="nsmr" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="time" className="form-label">
            Time
          </label>
          <input
            type="text"
            className="form-control"
            id="time"
            value={time}
            onChange={(e) => {
              settime(e.target.value);
            }}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          {props.text=="add"?"Submit":"Edit"}
        </button>
      </form>
    </div>
  );
}
