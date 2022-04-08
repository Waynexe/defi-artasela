import React, { useState, useEffect } from "react";
import FormDataService from "../services/FormService";
import { Link } from "react-router-dom";
const FormsList = () => {
  const [forms, setForms] = useState([]);
  const [currentForm, setCurrentForm] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchFirstname, setSearchFirstname] = useState("");
  useEffect(() => {
    retrieveForms();
  }, []);
  const onChangeSearchFirstname = e => {
    const searchFirstname = e.target.value;
    setSearchFirstname(searchFirstname);
  };
  const retrieveForms = () => {
    FormDataService.getAll()
      .then(response => {
        setForms(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  const refreshList = () => {
    retrieveForms();
    setCurrentForm(null);
    setCurrentIndex(-1);
  };
  const setActiveForm = (form, index) => {
    setCurrentForm(form);
    setCurrentIndex(index);
  };
  const removeAllForms = () => {
    FormDataService.removeAll()
      .then(response => {
        console.log(response.data);
        refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  };
  const findByFirstname = () => {
    FormDataService.findByFirstname(searchFirstname)
      .then(response => {
        setForms(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  return (
    <div className="list row">
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by firstname"
            value={searchFirstname}
            onChange={onChangeSearchFirstname}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByFirstname}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <h4>Liste de Formulaires</h4>
        <ul className="list-group">
          {forms &&
            forms.map((form, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActiveForm(form, index)}
                key={index}
              >
                {form.firstname}
              </li>
            ))}
        </ul>
        <button
          className="m-3 btn btn-sm btn-danger"
          onClick={removeAllForms}
        >
          Tout supprimer
        </button>
      </div>
      <div className="col-md-6">
        {currentForm ? (
          <div>
            <h4>Form</h4>
            <div>
              <label>
                <strong>Civilité:</strong>
              </label>{" "}
              {currentForm.civility}
            </div>
            <div>
              <label>
                <strong>Prénom:</strong>
              </label>{" "}
              {currentForm.firstname}
            </div>
            <div>
              <label>
                <strong>Nom:</strong>
              </label>{" "}
              {currentForm.lastname}
            </div>
            <div>
              <label>
                <strong>Email:</strong>
              </label>{" "}
              {currentForm.email}
            </div>
            <div>
              <label>
                <strong>Adresse:</strong>
              </label>{" "}
              {currentForm.address}
            </div>
            <div>
              <label>
                <strong>Code Postal:</strong>
              </label>{" "}
              {currentForm.postal}
            </div>
            <div>
              <label>
                <strong>Ville:</strong>
              </label>{" "}
              {currentForm.city}
            </div>
            <div>
              <label>
                <strong>Pays:</strong>
              </label>{" "}
              {currentForm.country}
            </div>
            <div>
              <label>
                <strong>Profession:</strong>
              </label>{" "}
              {currentForm.job}
            </div>
            <div>
              <label>
                <strong>Message:</strong>
              </label>{" "}
              {currentForm.message}
            </div>
            {/* <div>
              <label>
                <strong>Status:</strong>
              </label>{" "}
              {currentForm.published ? "Published" : "Pending"}
            </div> */}
            <Link
              to={"/forms/" + currentForm.id}
              className="badge badge-warning"
            >
              Edit
            </Link>
          </div>
        ) : (
          <div>
            <br />
            <p>Selectionnez un formulaire...</p>
          </div>
        )}
      </div>
    </div>
  );
};
export default FormsList;