import React from "react";

const DetailList = (props) => {
  return (
    <div className="detail-container">
      <h2>user detail</h2>

      {props.data ? (
        <div className="list-container">
          <div className="property">
            <div className="field">Id:</div>
            <div className="field1">
              <input
                type="text"
                disabled={true}
                value={props.data ? props.data.id : ""}
              ></input>
            </div>
          </div>
          <div className="property">
            <div className="field"> MaidenName:</div>
            <div className="field1">
              <input
                type="text"
                disabled={true}
                value={props.data ? props.data.maidenName : ""}
              ></input>
            </div>
          </div>
          <div className="property">
            <div className="field"> Password:</div>
            <div className="field1">
              <input
                type="text"
                disabled={true}
                value={props.data ? props.data.password : ""}
              ></input>
            </div>
          </div>
          <div className="property">
            <div className="field">FirstName: </div>
            <div className="field1">
              <input
                type="text"
                disabled={true}
                value={props.data ? props.data.firstName : ""}
              ></input>
            </div>
          </div>
          <div className="property">
            <div className="field"> LastName:</div>
            <div className="field1">
              <input
                type="text"
                disabled={true}
                value={props.data ? props.data.lastName : ""}
              ></input>
            </div>
          </div>
          <div className="property">
            <div className="field"> Username: </div>
            <div className="field1">
              <input
                type="text"
                disabled={true}
                value={props.data ? props.data.username : ""}
              ></input>
            </div>
          </div>
          <div className="property">
            <div className="field"> Email:</div>
            <div className="field1">
              <input
                type="text"
                disabled={true}
                value={props.data ? props.data.email : ""}
              ></input>
            </div>
          </div>
          <div className="property">
            <div className="field">Gender: </div>
            <div className="field1">
              <input
                type="text"
                disabled={true}
                value={props.data ? props.data.gender : ""}
              ></input>
            </div>
          </div>
          <div className="property">
            <div className="field"> Phone number:</div>
            <div className="field1">
              <input
                type="text"
                disabled={true}
                value={props.data ? props.data.phone : ""}
              ></input>
            </div>
          </div>
          <div className="property">
            <div className="field">Company name:</div>
            <div className="field1">
              <input
                type="text"
                disabled={true}
                value={props.data ? props.data.company.name : ""}
              ></input>
            </div>
          </div>
          <div className="property">
            <div className="field"> Date of birth:</div>
            <div className="field1">
              <input
                type="text"
                disabled={true}
                value={props.data ? props.data.birthDate : ""}
              ></input>
            </div>
          </div>
          <div className="property">
            <div className="field"> title:</div>
            <div className="field1">
              <input
                type="text"
                disabled={true}
                value={props.data ? props.data.company.title : ""}
              ></input>
            </div>
          </div>
          <div className="property">
            <div className="field"> Age:</div>
            <div className="field1">
              <input
                type="text"
                disabled={true}
                value={props.data ? props.data.age : ""}
              ></input>
            </div>
          </div>
          <div className="property">
            <div className="field">Address:</div>
            <div className="field1">
              <input
                type="text"
                disabled={true}
                value={
                  props.data
                    ? `${
                        props.data.address.address +
                        +props.data.address.city +
                        props.data.address.street_address +
                        props.data.address.postalCode +
                        props.data.address.state +
                        props.data.address.country
                      }`
                    : ""
                }
              ></input>
            </div>
          </div>
          <div className="property">
            <div className="field">coordinates:</div>
            <div className="field1">
              <input
                type="text"
                disabled={true}
                value={
                  props.data
                    ? `${
                        props.data.address.coordinates.lat +
                        props.data.address.coordinates.lng
                      }`
                    : ""
                }
              ></input>
            </div>
          </div>
        </div>
      ) : (
        "No user selected"
      )}
    </div>
  );
};

export default DetailList;
