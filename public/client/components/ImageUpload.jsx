import React from "react";
import axios, { post } from "axios";

class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
    };
    // these will be on props 
    this.item = 'rose';
    this.user = 'coolguy';
    this.challenge = 'naturehunt';
    this.filepath = `${this.challenge}/${this.user}/${this.item}.jpg`;
  }

  render() {
    return (
      <div> 
        <form action="http://bnwrainbows.s3.amazonaws.com/" encType="multipart/form-data" method="post">
          <p>
            Please specify a file, or a set of files:
          <br />
            <input type="hidden" name="key" value={this.filepath} />
            <input type="file" name="file" />
          </p>
          <div>
            <input type="submit" value="Send" />
          </div>
        </form>
        <img src={`http://bnwrainbows.s3.amazonaws.com/${this.filepath}`} alt="where is the cat?"/>
      </div>
    )
  }
}

module.exports = ImageUpload;