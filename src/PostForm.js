import React, { Component } from 'react'
import "./App1.css"; 
import axios from 'axios';
export class PostForm extends Component {
  
  constructor(props) {
      super(props);
      this.state = {
        userId: '',
        id: '',
        title:'',
        body: ''
        }
   }     
  changeHandler = e => {    
    this.setState({[e.target.name]:e.target.value })
    }
  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
    .then(response => {
        console.log(response);
        alert('Data created successfully');
    })
    .catch(error => {
        console.log(error);
        alert(error);
    })

  }
  render() {
    const { userId, id, title, body } = this.state;
    return (
        <div className="App">
        <form onSubmit={this.submitHandler}>
          <input
            required="required"
            type="number"
            name='userId'
            value={userId}
            placeholder="UserId"
            onChange={this.changeHandler}
          />
          <input
           required="required"
            type="number"
            name='id'
            value={id}
            placeholder="Id"
            onChange={this.changeHandler}
          />
          <input
            name='title'
            type="text"
            required="required"
            value={title}
            placeholder="Title"
            onChange={this.changeHandler}
          />
          <input
            name='body'
            type="text"
            required="required"
            value={body}
            placeholder="Body"
            onChange={this.changeHandler}
          />
          <button type="submit">Create</button>
  
          {/* <div className="message">{msg ? <p>{msg}</p> : null}</div> */}
        </form>
      </div>
    )
  }
}

export default PostForm