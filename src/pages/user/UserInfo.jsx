import React, { useState, useEffect } from 'react';
import './style.css';
import { GetPricingByIdAPI } from '~/api/pricing/pricing';
import AuthService from '~/service/auth/auth-service';
import { Link, useParams } from 'react-router-dom';

const UserInfo = () => {
    const [currentUser, setCurrentUser] = useState(undefined);
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        if (AuthService.getCurrentUser()) {
            setCurrentUser(await AuthService.getCurrentUser());
        }
    };
    return (
        <>
            <nav className="container-fluid">
                <strong className="title-checkout">LA Movies | Infomation Account</strong>
            </nav>
            <main className="container">
                <div className="grid">
                    <section className="custom-form-section">
                        <form className="my-form container">
                            <ul className="ul-checkout">
                                <li>
                                    <div className="grid grid-2">
                                        <input
                                            type="text"
                                            placeholder="Full Name"
                                            required
                                            value={currentUser ? currentUser.FullName : ''}
                                        />
                                        <input
                                            type="text"
                                            placeholder="Username"
                                            required
                                            value={currentUser ? currentUser.Username : ''}
                                        />
                                    </div>
                                </li>
                                <li>
                                    <div className="grid grid-2">
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            required
                                            value={currentUser ? currentUser.Email : ''}
                                        />
                                        <input
                                            type="text"
                                            placeholder="Date Birthday"
                                            value={currentUser ? currentUser.Date : ''}
                                        />
                                    </div>
                                </li>
                                <li>
                                    <div className="grid grid-3 btn-checkout">
                                        <button className="btn-paypal" type="submit">
                                            CHANGE PASSWORD
                                        </button>
                                        <Link to="/">
                                            <button className="btn-grid" type="reset">
                                                BACK
                                            </button>
                                        </Link>
                                    </div>
                                </li>
                            </ul>
                        </form>
                    </section>
                </div>
            </main>
        </>
    );
};

export default UserInfo;
