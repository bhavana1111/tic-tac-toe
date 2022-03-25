import React, { useEffect, useState } from "react"
/*const[data,setData]=useState("");
export default function Form()
{
return(
    <form>
    <input type="number" placeholder="Enter the number" onChange={handleCLick}/> 
    </form>
    
);

}*/
import React from "react";


class Forms extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={value:''};

        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(event)
    {
        this.setState({value:event.target.value});
    }
    handleSubmit(event)
    {
       console.log(this.state.value);
        event.preventDefault();
    }
render()
{
    return(
      <>
      <form onSubmit={this.handleSubmit}>
      <input type="text" name='animal' value={this.state.value} onChange={this.handleChange} placeholder='Give Name of the Image' className='input-box'/>
      <br/>
      <button className='button'>Submit</button>
      </form>
      </>
    );
}
}
export default Forms;
