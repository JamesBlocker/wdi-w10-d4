import React, { Component } from 'react';
import httpClient from './httpClient.js';
import UserItem from './UserItem.js'
import { Container, Row, Col } from 'reactstrap';
import _ from 'lodash'



class App extends Component {
  
  state = {
    users: []
  }

  // httpClient.deleteUser().then((serverResponse) => {
  //   const {data} = serverResponse
  //   if (data.success) {
  //     console.log(data)
  //     this.setState({
  //       users: data.user
  //     })
  //     console.log(serverResponse.data)
  //   }
  // })

  handleDelete(evt) {
    evt.preventDefault()
    console.log(this)
    const userId = this.state.users._id
    httpClient.deleteUser(userId).then((serverResponse) => {
      const {data} = serverResponse
      if (data.success) {
        console.log(data)
        this.setState({
          users: data.user
        })
        console.log(serverResponse.data)
      }
    })
  }

  handleFormSubmit(evt) {
    evt.preventDefault()
    console.log(this.refs)
    const {name, email, bio, avatar} = this.refs
    const newUser = {
      name: name.value,
      email: email.value,
      bio: bio.value,
      avatar: avatar.value
    }

    httpClient.postUser(newUser).then((serverResponse) => {
      const {data} = serverResponse
      if (data.success){
        console.log(data)
        this.setState({
          users: [ data.user, ...this.state.users ]
        })
      }
      console.log(serverResponse.data)
    })
  }


  componentDidMount() {
    httpClient.getUsers().then((serverResponse) => {
      console.log(serverResponse.data.users)
      this.setState({
        users: serverResponse.data.users
      })
    })
  }

  render() {
    console.log(this.state.users)

    // var arrays = [], size = 4;
    // while (this.state.users.length > 0)
    // arrays.push(this.state.users.splice(0, size));
    // console.log(arrays)

    const userRows = _.chunk(this.state.users, 4)
    console.log(userRows)

    return (
      <Container className="App">
        
        <form onSubmit={this.handleFormSubmit.bind(this)}>
          <input ref="name" type="text" placeholder="name"/>
          <input ref="email"type="text" placeholder="email"/>
          <input ref="bio" type="text" placeholder="bio"/>
          <input ref="avatar" type="text" placeholder="avtar"/>
          <button>Submit</button>
        </form>

        <div>

          {userRows.map((row, index) => {
            return (
              <Row key={index}>
                {row.map((u) => {
                  return <Col key={u._id} sm="3"><UserItem user={u}/></Col>
                })}
              </Row>
            )
          })}
        </div>
      </Container>
    );
  }
}

export default App;
