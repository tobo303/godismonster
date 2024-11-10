import { Card } from "react-bootstrap";
import { IMAGE_404_URL } from "../scripts/candyConfig";

function NotFound() {
  return (
    <>
        <div className="align-content-center" style={{ height: '100vh' }}>
            <div className="d-flex bd-highlight justify-content-center">
                <Card>
                    <Card.Header className="text-center">SMÄRTA OCH DÖD!</Card.Header>
                    <Card.Img variant="top" src={IMAGE_404_URL} />
                    <Card.Body className="text-center">
                        Vi kunde inte hitta det du sökte efter 😭
                    </Card.Body>
                </Card>
            </div>
        </div>
    </>
  )
}

export default NotFound;