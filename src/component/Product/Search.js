import React, {useState, Fragment } from 'react'
import './Search.css'
// import { } from "react-router-dom";
import MetaData from '../layout/MetaData';
const Search=({history}) =>{
    const[keyword,setKeyWord]=useState("");
// let history=useNavigate()
    const searchSubmitHandler=(e)=>{
        e.preventDefault();
        if(keyword.trim()){
            // history.pu
            history.push(`/products/${keyword}`);
        }else {
            history.push("/products");
        }
    }
  return <Fragment>
     <MetaData title="Search A Product--ECOMMERCE"/>
    <form className='searchBox' onSubmit={searchSubmitHandler}>
       <input
       type="text"
        placeholder="Search a Product..."
        onChange={(e)=>setKeyWord(e.target.value)}/>
    
    <input type="submit" value="Search"/>
    </form>
  </Fragment>
}

export default Search