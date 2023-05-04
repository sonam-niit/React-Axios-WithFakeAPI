import axios from "axios";
import React, { useState,useEffect } from "react";
import {useParams} from "react-router-dom";

export function Details(){

    const [user,setUser]= useState({});
    const params= useParams();

    const getUserDetails=async ()=>{
        const resp= await axios.get(`https://jsonplaceholder.typicode.com/users/${params.id}`)
        setUser(resp.data)
    }

    useEffect(()=>{
        getUserDetails()
    })

    return(
        <div>
            <h1>User Details Page</h1>
            <hr></hr>
            <div className="row m-3">
                <div className="col-md-4 offset-4">
                    <ul className="list-group">
                        <li className="list-group-item">Name: {user.name}</li>
                        <li className="list-group-item">UserName: {user.username}</li>
                        <li className="list-group-item">Email: {user.email}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}