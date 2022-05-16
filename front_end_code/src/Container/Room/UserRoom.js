
import { Container } from 'react-bootstrap';


function UserRoom() {
    const listUser = [
        'votiendat',
        'nguyen khac vinh',
        'tran van duc',

    ]
    return (
        <Container>
            {
                listUser.map(
                    (user, index) => {
                        return (
                            <Container key={index}>
                                <h6>{user}</h6>
                            </Container>
                        )
                    }
                )
            }
        </Container>
    )
}

export default UserRoom;