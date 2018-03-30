import React, { Component } from 'react';
import httpClient from './httpClient.js'
import _ from 'lodash'
import UserItem from './UserItem.js'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import NavBar from './NavBar.js'

class App extends Component {

  state = {
    users: []
  }

  componentDidMount() {
    httpClient.getUsers().then((serverResponse) => {
      this.setState({
        users: serverResponse.data.users
      })
    })
  }

  handleFormSubmit(evt) {
    evt.preventDefault()
    const { name, email, bio, avatar } = this.refs
    const newUser = {
      name: name.refs.name.value,
      email: email.refs.email.value,
      bio: bio.refs.bio.value,
      avatar: avatar.refs.avatar.value
    }

    httpClient.postUser(newUser).then((serverResponse) => {
      const { data } = serverResponse
      if(data.success) {
        console.log(data)
        this.setState({
          users: [data.user, ...this.state.users]
        })
      }
    })
  }

  handleDeleteClick(id) {
    console.log("handling delete click")
    console.log(id)
    httpClient.deleteUser(id).then((serverResponse) => {
      console.log(serverResponse.data)
      this.setState({
        users: this.state.users.filter((u) => {
          return u._id !== id
        })
      })
    })
  }

  render() {
    // FINISH THIS MANUAL IMPLEMENTATION:
    // var arrays = [], size = 4
    // for(let i = 0; i < this.state.users.length; i += size) {
    //   arrays.push(this.state.users.slice(0, size))
    // }

    const userRows = _.chunk(this.state.users, 4)

    return (
      <Container className="App">
        <NavBar className="get-down"/>
        <Form onSubmit={this.handleFormSubmit.bind(this)}>
          <FormGroup>
            <Label for="exampleEmail">Name</Label>
            <Input ref="name" innerRef="name" type="text" placeholder="Name" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input ref="email" innerRef="email" type="text" placeholder="Email" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Bio</Label>
            <Input ref="bio" innerRef="bio" type="text" placeholder="Bio" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Avatar</Label>
            <Input ref="avatar" innerRef="avatar" type="text" placeholder="Avatar" />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
        {/* <form onSubmit={this.handleFormSubmit.bind(this)}>
          <input ref="name" type="text" placeholder="Name" />
          <input ref="email" type="text" placeholder="Email" />
          <input ref="bio" type="text" placeholder="Bio" />
          <input ref="avatar" type="text" placeholder="Avatar" />
          <button>Submit</button>
        </form> */}
        <div>
          {userRows.map((row, index) => {
            return (
              <Row key={index}>
                {row.map((u) => {
                  return (
                  <Col key={u._id} sm="3">
                    <UserItem user={u} 
                    onDeleteClick={this.handleDeleteClick.bind(this, u._id)} />
                  </Col>
                  )
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