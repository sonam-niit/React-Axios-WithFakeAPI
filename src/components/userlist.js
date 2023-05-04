import axios from "axios";
import React, { useEffect, useState  } from "react";
import {useNavigate} from "react-router-dom";

export function UserList(){

    const navigate= useNavigate();
    const [users,setUsers]= useState([]);

    const getData= async()=>{
        const resp= await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(resp.data);
    }
    // const viewUser=(id)=>{
    //     navigate(`/details/${id}`)
    // }
    useEffect(()=>{
        getData();
    },[])

    const tabRow=users.map((user,i)=>{
        return(
            <tr key={i}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                    <button className="btn btn-success" onClick={()=>{navigate(`/details/${user.id}`)}}>
                        View
                    </button>
                </td>
            </tr>
        );
    })
    return(
        <div>
            <h1>UserList Page</h1>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>UserName</th>
                        <th>Email</th>
                        <th>Operations</th>
                    </tr>
                </thead>
                <tbody>
                    {tabRow}
                </tbody>
            </table>
        </div>
    );
}