import { useState } from "react";
import axios from "axios";
import "./form.css";

function Form() {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    gender: "",
    contact: "",
    subject: "",
    resume: null,
    url: "",
    about: "",
  });

  const handleChanges = (e) => {
    const { name, value, files } = e.target;

    setValues({
      ...values,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    axios.post("URL_HERE", values);
  };

  const ResetFun = () => {
    setValues({
      firstname: "",
      lastname: "",
      email: "",
      gender: "",
      contact: "",
      subject: "",
      resume: null,
      url: "",
      about: "",
    });
  };

  return (
    <div className="container">
      <h1>Form in React</h1>

      <form onSubmit={handleSubmit}>
        <label>First Name*</label>
        <input
          type="text"
          name="firstname"
          value={values.firstname}
          onChange={handleChanges}
          required
        />

        <label>Last Name*</label>
        <input
          type="text"
          name="lastname"
          value={values.lastname}
          onChange={handleChanges}
          required
        />

        <label>Email*</label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChanges}
          required
        />

        <label>Contact*</label>
        <input
          type="number"
          name="contact"
          value={values.contact}
          onChange={handleChanges}
          required
        />

        <label>Gender</label>
        <input type="radio" name="gender" value="Male" onChange={handleChanges} /> Male
        <input type="radio" name="gender" value="Female" onChange={handleChanges} /> Female
        <input type="radio" name="gender" value="Other" onChange={handleChanges} /> Other

        <label>Subject*</label>
        <select name="subject" value={values.subject} onChange={handleChanges}>
          <option value="">Select</option>
          <option value="math">Math</option>
          <option value="physics">Physics</option>
          <option value="chemistry">Chemistry</option>
        </select>

        <label>Resume</label>
        <input type="file" name="resume" onChange={handleChanges} />

        <label>URL</label>
        <input type="text" name="url" onChange={handleChanges} />

        <label>About</label>
        <textarea name="about" onChange={handleChanges}></textarea>

        <button type="reset" onClick={ResetFun}>Reset</button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
