import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import Button from "../Components/Button";
import M from "materialize-css";

const ContactUser = (props) => {
  const history = useHistory();
  const { id } = useParams();
  const [fetching, setFetching] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`https://simple-contact-crud.herokuapp.com/contact/${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setFetching(true);
        if(result.data === undefined) {
            history.push("/");
            return M.toast({html: result.message, classes: "#c62828 red darken-3"});
        }
        setUser(result.data);
      });
  }, []);

  return (
    <div>
      {fetching ? (
        <div
          className="card input-field"
          style={{
            margin: "10px auto",
            maxWidth: "500px",
            padding: "20px",
            textAlign: "center",
          }}
        >
          <img src={user.photo} alt={`${user.firstName} ${user.lastName}`} width="160px" />
          <h5>
            Username : {user.firstName} {user.lastName}
          </h5>
          <h5>Age : {user.age}</h5>
          <Button
            className="btn waves-effect waves-light #64bf56 blue darken-1"
            type="link"
            href="/"
          >
            back to home
          </Button>
        </div>
      ) : (
        <h1>loading...</h1>
      )}
    </div>
  );
};

export default ContactUser;
