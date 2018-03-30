import React from 'react'
// import HttpClient from './httpClient.js'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
    
// function truncateString(str, num) {
//     return str.length > num ? (str.substring(0, num) + "..." : (str))
// }

const UserItem = (props) => {
    const { user } = props
    // const truncatedBio = truncateString(user.bio)
    return (
        <Card>
            <CardImg top src={user.avatar} alt={user.name} />
            <CardBody>
                <CardTitle>{user.name}</CardTitle>
                <CardSubtitle>{user.email}</CardSubtitle>
                <CardText>{user.bio}</CardText>
                <Button color="danger" onClick={props.onDeleteClick}>Delete</Button>
            </CardBody>
        </Card>
    )
}

export default UserItem