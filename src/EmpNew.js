import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EmpCreate = () => {

    const[id,idchange]=useState("");
    const[name,namechange]=useState("");
    const[email,emailchange]=useState("");
    const[phone,phonechange]=useState("");
    const[active,activechange]=useState(true);
    const[validation,valchange]=useState(false);




    const navigate=useNavigate();

    const handlesubmit=(e)=>{
e.preventDefault();
const empdata={name,email,phone,active};


fetch("http://localhost:3000/employee",{
  method:"POST",
  headers:{"content-type":"application/json"},
  body:JSON.stringify(empdata)
}).then((res)=>{
  alert('Saved successfully.')
  navigate('/');
}).catch((err)=>{
  console.log(err.message)
})}

    


    return (
  <div>

<div className="row">
    <div className="offset-lg-3 col-lg-6">
  <form className="container" onSubmit={handlesubmit}>

<div className="card" style={{"textAlign":"left"}}>
    <div className="card-title">
  <h2>Employee Create</h2>
    </div>
    <div className="card-body">

  <div className="row">

<div className="col-lg-12">
    <div className="form-group">
  <label>ID</label>
  <input value={id} disabled="disabled" className="form-control"></input>
    </div>
</div>

<div className="col-lg-12">
    <div className="form-group">
  <label>Name</label>
  <input  pattern="^[A-za-z0-9]{3,16}$"  required value={name} onMouseDown={e=>valchange(true)} onChange={e=>namechange(e.target.value)} className="form-control" placeholder="enter the name  "></input>
  {name.length===0 && validation && <span className="text-danger"> 3-16 charcters</span>}
    </div>
</div>

<div className="col-lg-12">
    <div className="form-group">
    <label>Email</label>

<input required value={email} onChange={e=>emailchange(e.target.value)} className="form-control" placeholder="entrer the email"></input>
{email.length===0  &&validation && <span className="text-danger"> it should be a valid email </span>}


  </div>
</div>

<div className="col-lg-12">
    <div className="form-group">
  <label>Phone</label>
  <input pattern="^[z0-9]{8}$"  required value={phone}onMouseDown={e=>valchange(true)}  onChange={e=>phonechange(e.target.value)} className="form-control" placeholder="entrer the phone" ></input>
{phone.length===0 && validation && <span className="text-danger">it should be a number</span>}
    </div>
</div>

<div className="col-lg-12">
    <div className="form-check">
    <input checked={active} onChange={e=>activechange(e.target.checked)} type="checkbox" className="form-check-input"></input>
  <label  className="form-check-label">Is Active</label>
  
    </div>
</div>
<div className="col-lg-12">
    <div className="form-group">
 <button className="btn btn-success" type="submit">Save</button>
 <Link to="/" className="btn btn-danger">Back</Link>
    </div>
</div>

  </div>

    </div>

</div>

  </form>

    </div>
</div>
  </div>
    );
}


 export default EmpCreate;