import React from 'react'
import { Link } from 'react-router-dom'
const Login = ({setuser,setpass,login}) => { 
    console.log(login)
  return (
    <div> 
    <section class=" text-center text-lg-start">
 
  <div class="card mb-3">
    <div class="row g-0 d-flex align-items-center">
      <div class="col-lg-4 d-none d-lg-flex">
        <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg" alt="Trendy Pants and Shoes"
          class="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5" />
      </div>
      <div class="col-lg-8">
        <div class="card-body py-5 px-md-5">

          <form>
          
            <div data-mdb-input-init class="form-outline mb-4">
              <input type="email" id="form2Example1" class="form-control" onChange={(e)=>setuser(e.target.value)} />
              <label class="form-label" for="form2Example1">Email address</label>
            </div>

           
            <div data-mdb-input-init class="form-outline mb-4">
              <input type="password" id="form2Example2" class="form-control" onChange={(e)=>setpass(e.target.value)}/>
              <label class="form-label" for="form2Example2">Password</label>
            </div>

            
            <div class="row mb-4">
              <div class="col d-flex justify-content-center">
                
               
              </div>

              <div class="col">
              
              <Link to="/">LOGIN</Link>
              </div>
            </div>

            
            <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-block mb-4" onClick={()=>login()}>Register</button>

          </form>

        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Login