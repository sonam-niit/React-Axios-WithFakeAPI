import axios from "axios";
import React, { useEffect, useState } from "react";

export function UserList(){

    const [users,setUsers]= useState([]);

    const getData= async()=>{
        const resp= await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(resp.data);
    }
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
                    </tr>
                </thead>
                <tbody>
                    {tabRow}
                </tbody>
            </table>
        </div>
    );
}