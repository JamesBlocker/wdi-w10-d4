import React from 'react'
// import HttpClient from './httpClient.js'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
         
const UserItem = (props) => {
    const { user } = props
    return (
        <Card>
            <CardImg top src={user.avatar} alt={user.name} />
            <CardBody>
                <CardTitle>{user.name}</CardTitle>
                <CardSubtitle>{user.email}</CardSubtitle>
                <CardText>{user.bio}</CardText>
                <Button onClick={this.handleDelete}>Button</Button>
            </CardBody>
        </Card>
    )
}

export default UserItem