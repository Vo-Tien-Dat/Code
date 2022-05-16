

import { Container, InputGroup, FormControl, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Home.scss';
import Navbars from '../../Components/Navbar/Navbar';
import { useEffect, useState } from 'react';



function Home() {
    const [listNotification, setListNotification] = useState(undefined);
    const [listRate, setListRate] = useState(undefined);
    useEffect(() => {

    }, []);


    return (
        <>
            <Navbars />
        </>
    )
}

export default Home;
