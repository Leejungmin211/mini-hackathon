
import React from 'react';
import { Link } from "react-router-dom";

export default function BottomNav(){
    return(
        <nav>
            <div>
            <Link to="/"><img src="../home-gray.png" alt="user" /></Link>
            </div>
            <div>
            <Link to="/todolist"><img src="../todolist-gray.png" alt="todolist" /></Link>
            </div>
            <div>
            <Link to="/userpage"><img src="../user-gray.png" alt="todolist" /></Link>
            </div>
        </nav>
    )
}