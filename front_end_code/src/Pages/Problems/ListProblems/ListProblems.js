

import { Container, Table } from 'react-bootstrap';
import './ListProblems.scss';

function ListProblems() {
    const listproblems = [
        {
            status: '1',
            title: 'vo tien dat',
            solution: ' 10',
            acceptance: '100',
            difficult: 'easy'
        },
        {
            status: '1',
            title: 'vo tien dat',
            solution: ' 10',
            acceptance: '100',
            difficult: 'easy'
        },
        {
            status: '1',
            title: 'vo tien dat',
            solution: ' 10',
            acceptance: '100',
            difficult: 'easy'
        },
        {
            status: '1',
            title: 'vo tien dat',
            solution: ' 10',
            acceptance: '100',
            difficult: 'easy'
        },
    ]
    return (
        <Container className="form-problems" fluid>
            <Table size="sm">
                <thead>
                    <tr>
                        <th>status</th>
                        <th>Title</th>
                        <th> Solution </th>
                        <th> Acceptance</th>
                        <th>Difficult</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listproblems.map(
                            (problem, index) => {
                                const { status, title, solution, acceptance, difficult } = problem;
                                return (
                                    <tr>
                                        <td>{status}</td>
                                        <td>{title}</td>
                                        <td>{solution}</td>
                                        <td>{acceptance}</td>
                                        <td>{difficult}</td>
                                    </tr>
                                )
                            }
                        )
                    }
                </tbody>
            </Table>
        </Container>
    )
}

export default ListProblems;