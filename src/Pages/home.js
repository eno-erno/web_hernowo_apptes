import React, { useEffect } from "react";
import Button from "../Components/Button";
import { connect } from "react-redux";
import M from "materialize-css";
import { getUser, editUser } from "../Redux/Action";

const Home = (props) => {
  useEffect(() => {
    props.getUser();
  }, []);
  if (!props.contacts[0]) {
    return <h4>Loading...</h4>;
  }

  const deleteContact = (id) => {
    fetch(`https://simple-contact-crud.herokuapp.com/contact/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(response => {
        console.log(response);
        if(response.message === "contact unavailable"){
          return  M.toast({html: response.message, classes: "#c62828 red darken-3"});
        }
        // M.toast({html: response.message, classes: "#c62828 red darken-3"});
        window.location .reload();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container">
      <table className="highlight">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            {/* <th>Last Name</th> */}
            <th>Age</th>
            <th>Photo</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {props.contacts[0]
            ? props.contacts[0].map((contact, index) => (
                <tr key={contact.id}>
                  <td>{index + 1}</td>
                  <td>
                    {contact.firstName} {contact.lastName}
                  </td>
                  <td>{contact.age}</td>
                  <td>
                    <img
                      src={contact.photo}
                      alt={contact.firstName}
                      width="60px"
                    />
                  </td>
                  <td>
                    <Button type="link" href={`/edit-contact/${contact.id}`}>
                      <i
                        className="material-icons"
                        style={{ color: "#9e9e9e", cursor: "pointer" }}
                      >
                        edit
                      </i>
                    </Button>
                    <Button type="link" href={`/contact/${contact.id}`}>
                      <i
                        className="material-icons"
                        style={{ color: "#9e9e9e", cursor: "pointer" }}
                      >
                        pageview
                      </i>
                    </Button>
                    <i
                      className="material-icons"
                      style={{ color: "#9e9e9e", cursor: "pointer" }}
                      onClick={() => deleteContact(contact.id)}
                    >
                      delete_forever
                    </i>
                  </td>
                </tr>
              ))
            : "Loading..."}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => ({
  contacts: state.contact,
});

export default connect(mapStateToProps, { getUser })(Home);
