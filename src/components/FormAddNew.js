import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNewUserRedux } from "../action/actions";

const FormAddNew = (props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')

    const isCreating = useSelector(state => state.user.isCreating)
    const dispatch = useDispatch()

    const handleCreateNewUser = () => {
        dispatch(createNewUserRedux(email, password, username))
        setEmail('')
        setPassword('')
        setUsername('')

    }

    return (
        <>
            <Container>
                <Form>
                    <Form.Group className="mb-3" >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}

                        />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Password"
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                        />
                    </Form.Group>

                    <Button
                        variant="primary"
                        type="submit"
                        onClick={() => handleCreateNewUser()}
                        disabled={isCreating}
                    >
                        Submit
                    </Button>
                    <hr />
                </Form>
            </Container>
        </>
    )
}

export default FormAddNew;