// import React, { Component } from 'react'
import React from "react";


export default function Login(){
// export default class Login extends Component {
//   render() {
    return (
      <div>
        <section className="text-center text-lg-start">
                    <div className="container py-4">
                        <div className="row g-0 align-items-center">
                            <div className="col-lg-6 mb-5 mb-lg-0">
                                <div className="card cascading-right" style={{ "background": "hsla(0, 0%, 100%, 0.55)", "backdrop-filter": "blur(30px)" }}>
                                    <div className="card-body p-5 shadow-5 text-center">
                                        <h2 className="fw-bold mb-5">Login now</h2>
                                        <form>
                                          
                                            <div className="form-outline mb-4">
                                                <input type="email" id="form3Example3" className="form-control" />
                                                <label className="form-label" for="form3Example3">Email address</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="password" id="form3Example4" className="form-control" />
                                                <label className="form-label" for="form3Example4">Password</label>
                                            </div>

                                            <div className="form-check d-flex justify-content-center mb-4">
                                                <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
                                                <label className="form-check-label" for="form2Example33">
                                                    Remember password
                                                </label>
                                            </div>

                                            <button type="submit" className="btn btn-primary btn-block mb-4">
                                                Sign in
                                            </button>

                                            
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 mb-5 mb-lg-0">
                                <img src="https://images.unsplash.com/photo-1604709493838-a68123bd5d79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" className="w-100 rounded-4 shadow-4"
                                    alt="" />
                            </div>
                        </div>
                    </div>
                </section>
        
      </div>
    )
  }
// }
