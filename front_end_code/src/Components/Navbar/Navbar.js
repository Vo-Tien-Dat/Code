
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import classnames from 'classnames';
import { useState } from 'react';
function Navbars() {
    const [active, setActive] = useState(false);
    const handleClickMenu = () => {
        setActive(!active);
        console.log(active);
    }


    return (
        <Fragment>
            <div className="navbar-form">
                <i className="fa fa-bars navbar-icon"
                    onClick={handleClickMenu}
                ></i>
                <div className="navbar-brand">
                    Coding
                </div>
                <div className="navbar-items">
                    <div className="navbar-item">
                        <Link to='/home' style={{
                            textDecoration: 'none',
                            color: 'white'
                        }}>
                            <div className="navbar-text">
                                Home
                            </div>
                        </Link>
                    </div>
                    <div className="navbar-item">
                        <Link to='/problem' style={{
                            textDecoration: 'none',
                            color: 'white'
                        }} className='Navbar-link'>
                            <div className="navbar-text">
                                Problem
                            </div>
                        </Link>
                    </div>
                    <div className="navbar-item" >
                        <Link to='/contest' style={{
                            textDecoration: 'none',
                            color: 'white'
                        }}>
                            <div className="navbar-text">
                                Contest
                            </div>
                        </Link>
                    </div>
                    <div className="navbar-item">
                        <Link to='/rating' style={{
                            textDecoration: 'none',
                            color: 'white'
                        }}  >
                            <div className="navbar-text">
                                Rating
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={classnames('navbar-dropdown-form', { 'active': active })}>
                <div className="navbar-dropdown-items">
                    <div className="navbar-dropdown-item">
                        <i class="fa-solid fa-house navbar-dropdown-item-icon"></i>
                        <div className="navbar-dropdown-text">
                            home
                        </div>
                    </div>
                    <div className="navbar-dropdown-item">
                        <i class="fa-solid fa-table navbar-dropdown-item-icon"></i>
                        <div className="navbar-dropdown-text">
                            problem
                        </div>
                    </div>

                    <div className="navbar-dropdown-item">
                        <i class="fa-solid fa-trophy navbar-dropdown-item-icon"></i>
                        <div className="navbar-dropdown-text">
                            contest
                        </div>
                    </div>

                    <div className="navbar-dropdown-item">
                        <i class="fa-solid fa-star navbar-dropdown-item-icon"></i>
                        <div className="navbar-dropdown-text">
                            rating
                        </div>
                    </div>
                </div>
            </div>
        </Fragment >

    )
}

export default Navbars;