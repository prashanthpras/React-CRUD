import React, { useState, useEffect } from "react";
import Axios from "../../apis/Axios";
import { Link } from "react-router-dom";

const Posts = () => {
  let [state, setState] = useState(null);
  let [loading, setLoading] = useState(false);


  let deletepost =async id =>{
    await Axios.delete(`/posts/${id}`)
    window.location.assign('/')
} 

  useEffect(() => {
    let fetchPosts = async () => {
      try {
        let { data } = await Axios.get("/posts");
        setLoading(true);
        setState(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPosts();
    setLoading(false);
  }, []);

  return (
    <div className="container my-4">
      <table className="table table-bordered table-hovered">
        <thead className="thead-dark text-capitalize">
          <tr>
            <th>titles</th>
            <th>details</th>
            <th>edit</th>
            <th>delete</th>
          </tr>
        </thead>

        <tbody>
          {state === null
            ? "loading"
            : state.map((post) => {
                return (
                  <tr key={post.id}>
                    <td>{post.title}</td>
                    <td>{post.details}</td>
                    <td>
                      <Link className="btn btn-primary btn-sm"
                       to={`/update-post/${post.id}`}>Edit</Link>
                    </td>
                    <td>
                      <button className="btn tn-danger btn-sm" onClick={()=>deletepost(post.id)}>Delete</button>
                    </td>
                  </tr>
                );
              })}
        </tbody>
      </table>
    </div>
  );
};

export default Posts;
