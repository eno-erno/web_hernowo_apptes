import React, {useState, useEffect} from "react";
import { useHistory, useParams } from "react-router-dom"
import { connect } from "react-redux";
import { getUser, deleteRedux } from "../Redux/Action";
import M from "materialize-css";

const CreatePost = (props) => {
    const history = useHistory();
    const {id} = useParams();
    const [loading, setLoading] = useState(false);
    const [fetching, setFetching] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState("");
    const [photo, setPhoto] = useState([]);

    useEffect(() => {
        fetch(`https://simple-contact-crud.herokuapp.com/contact/${id}`, {
            method: "GET",
        }).then(res => res.json())
        .then(result => {
            console.log(result)
            setFirstName(result.data.firstName)
            setLastName(result.data.lastName)
            setAge(result.data.age)
            setPhoto(result.data.photo);
            setFetching(true);
        });
    }, [])

   const handleInputChange = (event) => {
        //    https://www.nicesnippets.com/blog/how-to-save-react-base64-image-in-php
        let files = event.target.files;
        let reader = new FileReader();
        reader.readAsDataURL(files[0]);

        reader.onload = (e) => {
            setPhoto(e.target.result)
        }

    }

    const newPost = async(e) => {
        e.preventDefault();
        setLoading(true);
        const newData = {
            firstName,
            lastName,
            age,
            photo
        }
        fetch(`https://simple-contact-crud.herokuapp.com/contact/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(newData)
        }).then(res => res.json())
        .then(response => {
            if(response.statusCode === 400) {
                setLoading(false);
               return M.toast({html: response.message, classes: "#c62828 red darken-3"});
            }
            setLoading(false);
            props.deleteRedux();
            M.toast({html: "Success update contact", classes: "#43a047 green darken-1"});
            history.push("/");
        }).catch(err=> console.log(err));
    }
   
    return (
        <div>
            {
                fetching ? (
                    <div className="card input-field"
                        style={{ 
                            margin: "10px auto",
                            maxWidth: "500px",
                            padding: "20px",
                            textAlign: "center"
                        }}
                    >   <form>
                            <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                            <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                            <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
                            <div className="file-field input-field">
                                <div className="btn #64bf56 blue darken-1">
                                    <span>Upload Image</span>
                                    <input type="file" onChange={handleInputChange} />
                                </div>
                                <div className="file-path-wrapper">
                                    <input className="file-path validate" type="text" />
                                </div>
                                <img src={photo ? photo : null} alt={photo} width="160px"/>
                            </div>
                            <button className="btn waves-effect waves-light #64bf56 blue darken-1" onClick={newPost} disabled={loading? true : false } >
                                Edit Contact
                            </button>
                        </form>
                    </div>

                ) : <h1>loading...</h1>
            }
        </div>
    )
}


export default connect(null, { getUser, deleteRedux })(CreatePost);