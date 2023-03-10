import Container from "react-bootstrap/Container";
import Table from 'react-bootstrap/Table';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { deleteUserRedux, fetchAllUser } from "../action/actions";

const TableUser = (props) => {

    const dispatch = useDispatch()
    const listData = useSelector((state) => state.user.listUsers)
    const isLoading = useSelector((state) => state.user.isLoading)
    const isError = useSelector((state) => state.user.isError)

    useEffect(() => {
        // fetchAllUser()
        dispatch(fetchAllUser())
    }, [])

    const handleDeleteUser = (user) => {
        dispatch(deleteUserRedux(user.id))
    }

    if (isError === false && isLoading === true) {
        return (
            <Container>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Email</th>
                            <th>Username</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Loading data...</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        )
    }

    if (isError === false && isLoading === false) {
        return (
            <Container>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Email</th>
                            <th>Username</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            listData && listData.length > 0 &&
                            listData.map((item, index) => {
                                return (
                                    <tr key={`user-${index}`}>
                                        <td>{item.id}</td>
                                        <td>{item.email}</td>
                                        <td>{item.username}</td>
                                        <td>
                                            <button
                                                className="btn btn-danger"
                                                onClick={() => handleDeleteUser(item)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </Container>
        )
    }

    if (isError === true && isLoading === false) {
        return (
            <Container>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Email</th>
                            <th>Username</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        <>
                            <tr>
                                <td>Some thing wrong , please try again...</td>
                            </tr>
                        </>
                    </tbody>
                </Table>
            </Container>
        )
    }

    return (
        <></>
    )
}

export default TableUser;