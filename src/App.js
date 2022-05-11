import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Component} from 'react';
import Card from './Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withStyles } from '@material-ui/styles';
import {Grid} from '@material-ui/core';
// import Header from './Header'
import { makeStyles } from "@material-ui/core/styles";
let num=0;
const useStyles = {
    marginLeft: '5.5%',
    paddingLeft: "40px",
    paddingRight: "40px"
};
var g;
class App extends React.Component {
   
  // Constructor 
  constructor(props) {
      super(props);
      this.state = {
          items: [],
          DataisLoaded: false
      };
  }
 
  // ComponentDidMount is used to
  // execute the code 
  componentDidMount() {
      fetch(
"https://jsonplaceholder.typicode.com/posts")
          .then((res) => res.json())
          .then((json) => {
              this.setState({
                  items: json,
                  DataisLoaded: true
              });
          })
  }
  render() {
      const { DataisLoaded, items } = this.state;
      if (!DataisLoaded) return <div>
          <h1> Pleses wait some time.... </h1> </div> ;
 
      return (
      <div className = "App"> 
        {/* <Header /> */}
        <Grid container spacing={4} style={useStyles}>
          {
              items.map((it) => ( 
                  <Grid item xs={12} sm={6} md={4}>
                    <Card id={it.id} user_id={it.userId} title={it.title} body={it.body} imgs={"https://picsum.photos/200/300?random="+it.id} />
                  </Grid>
              ))
          }
        </Grid>
      </div>
  );
}
}
 
export default App;