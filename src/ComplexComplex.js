import React, {Component}from 'react';

import Items from './contacts';
{/* import data from the fake API in the file data.json*/}
 export default class App1 extends Component {

      constructor(props) {

        super(props);
        this.state = {

        items: [],
        }

      }

        componentDidMount() {
        fetch('http://localhost:8000/home')
        .then(res => res.json())
        .then((data) => {
          this.setState({ items: data })
        })
        .catch(console.log)
      }
      

render() {
        return (
          <Items items={this.state.items} />
        )
      };



    }
