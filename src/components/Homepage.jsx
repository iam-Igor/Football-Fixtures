import { useEffect } from "react";
import { Col, Container, Row, Form } from "react-bootstrap";

const Homepage = () => {
  const getFixtures = () => {
    fetch(
      "https://odds.p.rapidapi.com/v4/sports/soccer_italy_serie_a/scores",

      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "146b3484dfmsh6a74755abd8268bp1e6739jsnaa8d50dd6aae",
          "X-RapidAPI-Host": "odds.p.rapidapi.com",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          console.log("res ok!");
          return res.json();
        } else {
          throw new Error();
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //   useEffect(() => {
  //     getFixtures();
  //   }, []);

  return (
    <Container>
      <Row>
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
              <div className="bg-white p-2 rounded-4">
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
          <Row className="flex-column">
            <p className="fw-bold">Incoming Matches</p>
            <Col className="border rounded-4 my-3">
              <p>sat 24 20.45</p>
              <div>
                <p>team 1</p>
                <p>team2</p>
              </div>
            </Col>
            <Col className="border rounded-4">
              <p>sat 24 20.45</p>
              <div>
                <p>team 1</p>
                <p>team2</p>
              </div>
            </Col>
            <Col className="border rounded-4 my-3">
              <p>sat 24 20.45</p>
              <div>
                <p>team 1</p>
                <p>team2</p>
              </div>
            </Col>
          </Row>
        </Col>
        <Col className="mt-5 col-md-8 d-none d-md-block ms-3">
          <Row className="flex-column">
            <Col className="d-flex flex-column align-items-end col-12">
              <ul className="list-unstyled d-flex align-items-center">
                <li className="mx-2">Home</li>
                <li>About</li>
                <li className="mx-2">Fixtures</li>
                <li>Leagues</li>
                <li>
                  <i className="bi bi-person-circle fs-3 ms-2"></i>
                </li>
              </ul>
            </Col>
            <p className="fw-bold fs-4">Featured Football Matches</p>
            <Col className="bg-white rounded-4 p-4 d-flex">
              <div className="sidebar w-75 rounded-4 p-3">
                <div className="d-flex">
                  <p className="fw-bold">team 1</p>
                  <p>VS</p>
                  <p className="fw-bold">team2</p>
                </div>
                <p>sat 24 20.45</p>
              </div>
              <div className="w-25">
                <img
                  src="https://png.pngtree.com/png-clipart/20230527/original/pngtree-the-great-save-by-goalkeeper-emi-martinez-png-image_9171858.png"
                  style={{ width: "100%", zIndex: "2" }}
                  alt="soccer"
                />
              </div>
            </Col>
            <Col className="bg-white rounded-4 p-4 d-flex my-4">
              <div className="sidebar w-75 rounded-4 p-3">
                <div className="d-flex">
                  <p className="fw-bold">team 1</p>
                  <p>VS</p>
                  <p className="fw-bold">team2</p>
                </div>
                <p>sat 24 20.45</p>
              </div>
              <div className="w-25">
                <img
                  src="https://png.pngtree.com/png-clipart/20230527/original/pngtree-the-great-save-by-goalkeeper-emi-martinez-png-image_9171858.png"
                  style={{ width: "100%", zIndex: "2" }}
                  alt="soccer"
                />
              </div>
            </Col>
            <p className="fw-bold fs-4">Other Leagues</p>
            <Col className="rounded-4 p-4 d-flex justify-content-around">
              <div className="bg-white rounded-5 d-flex align-items-center justify-content-center">
                <img
                  className="rounded-5"
                  src="https://play-lh.googleusercontent.com/LLsEDmSXQRRkY57Ww72cL7OyH7c-mWsh9VP1aHCi-JfbRpJcRgXXvXmiSgKc0UdNwTY=w240-h480-rw"
                  style={{ width: "90%" }}
                />
              </div>

              <div className="bg-white rounded-5 d-flex align-items-center justify-content-center">
                <img
                  src="https://cdn.icon-icons.com/icons2/1637/PNG/256/laliga_109475.png"
                  style={{ width: "70%" }}
                />
              </div>
              <div className="bg-white w-25 rounded-5 d-flex align-items-center">
                <img
                  className="rounded-5"
                  src="https://cdn.dribbble.com/users/4140/screenshots/2901037/epl-icon_2x.jpg"
                  style={{ width: "100%" }}
                />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Homepage;
