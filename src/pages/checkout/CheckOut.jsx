import React, { useState, useEffect } from 'react';
import './style.css';
import { GetPricingByIdAPI } from '~/api/pricing/pricing';
import AuthService from '~/service/auth/auth-service';
import { Link, useParams } from 'react-router-dom';

const CheckOut = () => {
    const { id } = useParams();
    const [currentUser, setCurrentUser] = useState(undefined);
    const [pricing, setPricing] = useState([]);
    const currentDate = new Date();
    const dateStart = new Date();
    dateStart.setDate(currentDate.getDate() + pricing.time);
    const formattedDateStart = `${dateStart.getDate()}/${dateStart.getMonth() + 1}/${dateStart.getFullYear()}`;
    const dateEnd = new Date(dateStart);
    dateEnd.setMonth(dateStart.getMonth() + pricing.time);
    const formattedDateEnd = `${dateEnd.getDate()}/${dateEnd.getMonth() + 1}/${dateEnd.getFullYear()}`;
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const pricingData = await GetPricingByIdAPI(id);
        setPricing(pricingData);
        console.log(pricingData);
        if (AuthService.getCurrentUser()) {
            setCurrentUser(await AuthService.getCurrentUser());
        }
    };
    return (
        <>
            <nav className="container-fluid">
                <strong className="title-checkout">LA Movies | Payment</strong>
            </nav>
            <main className="container">
                <div className="grid">
                    <section className="custom-form-section">
                        <form className="my-form container">
                            <ul className="ul-checkout">
                                <li>
                                    <select>
                                        <option disabled>-- Please choose an option --</option>
                                        <option>Paypal</option>
                                    </select>
                                </li>
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
                                    <textarea placeholder="Message"></textarea>
                                </li>

                                <li>
                                    <div className="grid grid-3 btn-checkout">
                                        <button className="btn-paypal" type="submit">
                                            PAYMENT WITH PAYPAL
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
                    {pricing ? (
                        <section className="custom-pricing-info">
                            <article className="custom-pricing-block">
                                <hgroup className="title-1">
                                    <h2>Information Pricing</h2>
                                </hgroup>
                                <p>
                                    <strong>Name:</strong> {pricing.name}
                                </p>
                                <p>
                                    <strong>Price:</strong> ${pricing.price}
                                </p>
                                <p>
                                    <strong>Time:</strong> {pricing.time} months
                                </p>
                                <p>
                                    <strong>Date Start:</strong> {formattedDateStart}
                                </p>
                                <p>
                                    <strong>Date End:</strong> {formattedDateEnd}
                                </p>
                                <p>
                                    <strong>Total:</strong> ${pricing.price}
                                </p>
                            </article>
                        </section>
                    ) : (
                        'no'
                    )}
                </div>
            </main>
        </>
    );
};

export default CheckOut;
