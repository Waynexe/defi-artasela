import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import FormDataService from "../services/FormService";
const Form = props => {
  const { id }= useParams();
  let navigate = useNavigate();
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
    message: "",
  };
  const [currentForm, setCurrentForm] = useState(initialFormState);
  const [message, setMessage] = useState("");
  const getForm = id => {
    FormDataService.get(id)
      .then(response => {
        setCurrentForm(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  useEffect(() => {
    if (id)
      getForm(id);
  }, [id]);
  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentForm({ ...currentForm, [name]: value });
  };
  /* const updatePublished = status => {
    var data = {
      id: currentForm.id,
      civility: currentForm.civility,
      firstname: currentForm.firstname,
      published: status
    };
    FormDataService.update(currentForm.id, data)
      .then(response => {
        setCurrentForm({ ...currentForm, published: status });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }; */
  const updateForm = () => {
    FormDataService.update(currentForm.id, currentForm)
      .then(response => {
        console.log(response.data);
        setMessage("The tutorial was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };
  const deleteForm = () => {
    FormDataService.remove(currentForm.id)
      .then(response => {
        console.log(response.data);
        navigate("/forms");
      })
      .catch(e => {
        console.log(e);
      });
  };
  return (
    <div>
      {currentForm ? (
        <div className="edit-form">
          <h4>Formulaire</h4>
          <form>
            <div className="form-group">
              <label htmlFor="civility">Civilité</label>
              <input
                type="text"
                className="form-control"
                id="civility"
                name="civility"
                value={currentForm.civility}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="firstname">Prénom</label>
              <input
                type="text"
                className="form-control"
                id="firstname"
                name="firstname"
                value={currentForm.firstname}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastname">Nom</label>
              <input
                type="text"
                className="form-control"
                id="lastname"
                name="lastname"
                value={currentForm.lastname}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                id="email"
                name="email"
                value={currentForm.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Adresse</label>
              <input
                type="text"
                className="form-control"
                id="address"
                name="address"
                value={currentForm.address}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="postal">Code Postal</label>
              <input
                type="number"
                className="form-control"
                id="postal"
                name="postal"
                value={currentForm.postal}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="city">Ville</label>
              <input
                type="text"
                className="form-control"
                id="city"
                name="city"
                value={currentForm.city}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="country">Pays</label>
              <input
                type="text"
                className="form-control"
                id="country"
                name="country"
                value={currentForm.country}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="job">Profession</label>
              <input
                type="text"
                className="form-control"
                id="job"
                name="job"
                value={currentForm.job}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                type="text"
                className="form-control"
                id="message"
                name="message"
                value={currentForm.message}
                onChange={handleInputChange}
              />
            </div>
            {/* <div className="form-group">
              <label>
                <strong>Status:</strong>
              </label>
              {currentForm.published ? "Published" : "Pending"}
            </div> */}
          </form>
          {/* {currentForm.published ? (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updatePublished(false)}
            >
              UnPublish
            </button>
          ) : (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updatePublished(true)}
            >
              Publish
            </button>
          )} */}
          <button className="badge badge-danger mr-2" onClick={deleteForm}>
            Delete
          </button>
          <button
            type="submit"
            className="badge badge-success"
            onClick={updateForm}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Selectionnez un formulaire...</p>
        </div>
      )}
    </div>
  );
};
export default Form;