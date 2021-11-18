import React, { Component } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default class FilesUploadComponent extends Component {
  constructor(props) {
    super(props);
    this.onFileChange = this.onFileChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      picture: "",
    };
  }

  onFileChange(e) {
    this.setState({ picture: e.target.files[0] });
  }
  onSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("picture", this.state.picture);
    axios.post("http://localhost:4000/picture/", formData, {}).then((res) => {
      console.log(res);
      window.location.href = "/pictures";
    });
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <input type="file" onChange={this.onFileChange} />
            </div>
            <div className="form-group">
              <button className="btn btn-primary" type="submit">
                Upload
              </button>
            </div>
          </form>
        </div>
        <div></div>
      </div>
    );
  }
}
