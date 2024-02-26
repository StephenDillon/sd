import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Guess({ word, guess, isGuessed }) {
    return (
        <Row>
            {new Array(5).fill(0).map((_, i) => {
                const bgColor = !isGuessed
                    ? 'bg-dark'
                    : guess[i] === word[i]
                        ? 'bg-success'
                        : word.includes(guess[i])
                            ? 'bg-warning'
                            : 'bg-dark'
                return (
                    <Col key={i} style={{ height: '4rem', width: '4rem', borderColor: '#CBD5E0', fontSize: '2rem' }} className={`d-flex align-items-center justify-content-center border fw-bold text-uppercase text-white ${bgColor}`}>
                        {guess[i]}
                    </Col>)
            })}
        </Row>
    );
}