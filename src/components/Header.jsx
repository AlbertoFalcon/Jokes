import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Header = () =>{
    return(
      <Container fluid>
          <Row>
              <Col lg={'10'}>
                  <h1 className={'text-center font-italic font-weight-light'}>Random Jokes!!! Reload to watch a new joke.</h1>
              </Col>
          </Row>
      </Container>
    );
}
export default Header
