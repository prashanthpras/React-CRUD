import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "../../apis/Axios";

const CreatePost = () => {
  let [title, setTitle] = useState("");
  let [details, setDetails] = useState("");
  let [loading, SetLoading] = useState(false);

 

  let navigate = useNavigate();

  let handleSubmit =  e => {
    e.preventDefault();
    try {
      //http request payload
      let payload = { title, details };
       Axios.post("/posts", payload);
      navigate("/");
    } catch (error) {}
  };
  return (
    <section id="authBlock">
      <article className="card-body col-4 mx-auto bg-light my-4">
        <h2 className="text-center font-weight-bold text-dark text-uppercase my-2">
          create post
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="">Title</label>
            <input
              type="text"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        

          <div className="form-group">
            <label htmlFor="">details</label>
            <textarea id="details" cols="30" rows="10"
            value={details}
            className="form-control"
            onChange={e=>setDetails(e.target.value)}
            ></textarea>
          </div>

          <div className="form-group">
            <button className="btn btn-success btn-block my-2">{loading===true? "loading" : "Creat post" }</button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default CreatePost;
