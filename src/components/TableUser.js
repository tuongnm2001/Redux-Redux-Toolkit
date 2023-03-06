import Container from "react-bootstrap/Container";
import Table from 'react-bootstrap/Table';
import axios from 'axios'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUser } from "../action/actions";

const TableUser = (props) => {

    const dispatch = useDispatch()
    const listData = useSelector((state) => state.user.listUsers)
    const isLoading = useSelector((state) => state.user.isLoading)
    const isError = useSelector((state) => state.user.isError)

    useEffect(() => {
        // fetchAllUser()
        dispatch(fetchAllUser())
    }, [])

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
                        isError === true ?
                            <>
                                <div>Some thing wrong , please try again...</div>
                            </>
                            :
                            <>
                                {
                                    isLoading === true ?
                                        <>
                                            <div>Loading data...</div>
                                        </>
                                        :
                                        <>
                                            {
                                                listData && listData.length > 0 &&
                                                listData.map((item, index) => {
                                                    return (
                                                        <tr key={`user-${index}`}>
                                                            <td>{item.id}</td>
                                                            <td>{item.email}</td>
                                                            <td>{item.username}</td>
                                                            <td>
                                                                <button className="btn btn-danger">Delete</button>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </>
                                }
                            </>
                    }
                </tbody>
            </Table>
        </Container>
    )
}

export default TableUser;