
import { borderTop } from '@mui/system';
import { Container, Form } from 'react-bootstrap';
import './FindProblems.scss';

function FindProblems() {
    return (
        <Container style={{
            padding: '0px',
            borderRadius: '5px',
            overflow: 'hidden',
        }} fluid>
            <Container style={{
                padding: '4px',
                paddingLeft: '10px',
                textAlign: 'left',
                backgroundColor: '#333333',
                color: 'white',
                fontWeight: '500'
            }}>
                {`tìm kiếm bài tập`}
            </Container>
            <Container style={{
                border: '2px solid rgb(215, 215, 215)',
                borderTop: '2px solid white',
                paddingTop: '5px',
                paddingBottom: '5px'
            }}>
                <Container style={{
                    padding: '0px',
                    textAlign: 'left'
                }} >
                    <label className="form-find-label">Tim kiếm tên bài </label>
                    <input className="form-find-input" />
                </Container>
                <Container style={{
                    padding: '0px',
                    textAlign: 'left'
                }} >
                    <label className="form-find-label"> Dạng bài </label>
                    <input className="form-find-input" />
                </Container>
                <Container style={{
                    marginTop: '10px',
                    padding: '0px'
                }}>
                    <Form>
                        {
                            ['easy', 'medium', 'hard'].map(
                                (selection, index) => {
                                    return (
                                        <Form.Check
                                            key={index}
                                            label={selection}
                                            type='checkbox'
                                            style={{
                                                fontWeight: '500',
                                                textAlign: 'left'
                                            }}

                                        />
                                    )
                                }
                            )
                        }
                    </Form>
                </Container>
            </Container>
        </Container>
    )
}

export default FindProblems;