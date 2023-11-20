import { Col, Row, Form } from "react-bootstrap";
import format from "date-fns/format";

const Sidebar = ({ serieA }) => {
  return (
    <Col className="col-12 col-md-3 p-4 bg-white mt-5 rounded-5">
      <p className="fw-bold">Live data</p>
      <Row className="flex-column sidebar p-4 rounded-4">
        <Col>
          <Form>
            <Col>
              <Form.Control
                type="text"
                placeholder="Search events"
                className="rounded-5"
              />
            </Col>
          </Form>
        </Col>
        <Col className="d-flex justify-content-around mt-5">
          <div className="bg-white p-2 rounded-4">
            <img
              width="45"
              height="45"
              src="https://img.icons8.com/ios-filled/50/football.png"
              alt="football"
            />
            <p className="m-0">Football</p>
          </div>
          <div className="bg-white p-2 rounded-4 mx-2">
            <img
              width="45"
              height="45"
              src="https://img.icons8.com/ios-filled/50/tennis-2.png"
              alt="tennis-2"
            />
            <p className="m-0">Tennis</p>
          </div>
          <div className="bg-white p-2 rounded-4">
            <img
              width="45"
              height="45"
              src="https://img.icons8.com/ios-filled/50/basketball-2.png"
              alt="basketball-2"
            />
            <p className="m-0">Basket</p>
          </div>
        </Col>
      </Row>
      {serieA && (
        <Row className="flex-column ">
          <p className="fw-bold mt-3">Incoming Matches for Serie A</p>
          {serieA.slice(0, 3).map((game, index) => {
            const startDate = game.commence_time;
            const formattedDate = format(new Date(startDate), "dd/MM HH:mm");

            return (
              <Col
                key={index}
                className="border rounded-4 my-3 p-2 d-flex sidebar"
              >
                <div>
                  <p>{formattedDate}</p>

                  <p>{game.home_team}</p>
                  <p>{game.away_team}</p>
                </div>
                <div>results</div>
              </Col>
            );
          })}
        </Row>
      )}
    </Col>
  );
};

export default Sidebar;
