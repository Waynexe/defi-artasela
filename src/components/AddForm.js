import React, { useState } from "react";
import FormDataService from "../services/FormService";
const AddForm = () => {
  const initialFormState = {
    id: null,
    civility: "",
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    postal: "",
    city: "",
    country: "",
    job: "",
    message: ""
    /* published: false */
  };
  const [form, setForm] = useState(initialFormState);
  const [submitted, setSubmitted] = useState(false);
  const handleInputChange = event => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };
  const saveForm = () => {
    var data = {
      civility: form.civility,
      firstname: form.firstname,
      lastname: form.lastname,
      email: form.email,
      address: form.address,
      postal: form.postal,
      city: form.city,
      country: form.country,
      job: form.job,
      message: form.message,
    };
    FormDataService.create(data)
      .then(response => {
        setForm({
          id: response.data.id,
          civility: response.data.civility,
          firstname: response.data.firstname,
          lastname: response.data.lastname,
          email: response.data.email,
          address: response.data.address,
          postal: response.data.postal,
          city: response.data.city,
          country: response.data.country,
          job: response.data.job,
          message: response.data.message,
          /* published: response.data.published */
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  const newForm = () => {
    setForm(initialFormState);
    setSubmitted(false);
  };
  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>Votre requête est bien envoyée</h4>
          <button className="btn btn-success" onClick={newForm}>
            Ok
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="civility">Civilité</label>
            <input
              type="text"
              className="form-control"
              id="civility"
              required
              value={form.civility}
              onChange={handleInputChange}
              name="civility"
            />
          </div>
          <div className="form-group">
            <label htmlFor="firstname">Prénom</label>
            <input
              type="text"
              className="form-control"
              id="firstname"
              required
              value={form.firstname}
              onChange={handleInputChange}
              name="firstname"
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastname">Nom</label>
            <input
              type="text"
              className="form-control"
              id="lastname"
              required
              value={form.lastname}
              onChange={handleInputChange}
              name="lastname"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              required
              value={form.email}
              onChange={handleInputChange}
              name="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Adresse</label>
            <input
              type="text"
              className="form-control"
              id="address"
              required
              value={form.address}
              onChange={handleInputChange}
              name="address"
            />
          </div>
          <div className="form-group">
            <label htmlFor="postal">Code Postal</label>
            <input
              type="number"
              className="form-control"
              id="postal"
              required
              value={form.postal}
              onChange={handleInputChange}
              name="postal"
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">Ville</label>
            <input
              type="text"
              className="form-control"
              id="city"
              required
              value={form.city}
              onChange={handleInputChange}
              name="city"
            />
          </div>
          <div className="form-group">
            <label htmlFor="country">Pays</label>
            <input
              type="text"
              className="form-control"
              id="country"
              required
              value={form.country}
              onChange={handleInputChange}
              name="country"
            />
          </div>
          <div className="form-group">
            <label htmlFor="job">Profession</label>
            <input
              type="text"
              className="form-control"
              id="job"
              required
              value={form.job}
              onChange={handleInputChange}
              name="job"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              type="text"
              className="form-control"
              id="message"
              required
              value={form.message}
              onChange={handleInputChange}
              name="message"
            />
          </div>
          <button onClick={saveForm} className="btn btn-success">
            Envoyer
          </button>
        </div>
      )}
    </div>
  );
};
export default AddForm;