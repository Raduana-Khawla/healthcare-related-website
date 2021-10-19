import React from 'react';
import BannerImage from '../../images/Banner.jpg';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';

const Login = () => {
    const {signInUsingGoogle} = useAuth()||{};
    return (
        <div className=" container">
            <div className="row align-items-center" style={{ height: "100vh" }}>
              <div className="col-md-6 col-sm-12 shadow p-5 bg-warning">
                <h3>Login</h3>
                    <div className="form-group">
                        <label htmlFor="">User Name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Password</label>
                        <input type="password" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="" className="text-danger">Forgot your password?</label>
                    </div>
                    <div className="mt-3">
                        <input className="bg-danger" type="submit" value="submit" />
                    </div>
                    <p className="mt-3">new to dental-clinic?<Link to="/register"><span className="text-white">Create Account</span></Link></p>
                    <br />
                    <div className="from-group mt-3">
                        <button className="btn btn-primary" onClick={signInUsingGoogle} >Google Sign in</button>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 d-none d-md-block">
                    <img className="img-fluid" src={BannerImage} alt="" />
                </div>
              </div>
            </div>
    );
};

export default Login;