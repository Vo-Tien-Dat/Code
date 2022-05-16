
import { Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navbars from '../../Components/Navbar/Navbar';
import FindProblems from './FindProblems/FindProblems';
import ListProblems from './ListProblems/ListProblems';
import './Problems.scss';
function Problems() {
    return (
        <Fragment>
            <Navbars></Navbars>
            <Container style={{
                width: '70%',
                padding: '20px'
            }} fluid>
                <Row>
                    <Col sm={8}>
                        <ListProblems />
                    </Col>
                    <Col sm={4}>
                        <FindProblems />
                    </Col>
                </Row>

            </Container>
        </Fragment>

    )
}

export default Problems;