import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GetMovieByID, GetURLOddMovie } from '~/api/homes/home';
import { CheckPricing } from '~/api/pricing/pricing';
import AuthService from '~/service/auth/auth-service';
import './style.css';
import Peer from 'peerjs';
import Modal from 'react-modal'; // Import thư viện react-modal
import { HubConnectionBuilder } from '@microsoft/signalr';
const Room = () => {
    const connection = new HubConnectionBuilder().withUrl('https://localhost:7279/meeting').build();
    const startSignal = async () => {
        await connection.start();
        await connection.invoke('JoinRoom', 1, '10');
        connection.on('user-connected', (id) => {
            console.log(`User connected: ${id}`);
        });
    };
    startSignal();
    return <div></div>;
};

export default Room;
