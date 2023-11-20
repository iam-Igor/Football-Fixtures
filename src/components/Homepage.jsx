import { useEffect, useState } from "react";
import {
  Col,
  Container,
  Row,
  Form,
  Accordion,
  ListGroup,
  Tabs,
  Tab,
} from "react-bootstrap";
import format from "date-fns/format";

import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { SERIE_A, PREMIER_UK, LIGA_ES } from "../redux/store/store";

const Homepage = () => {
  const dispatch = useDispatch();

  const serieA = useSelector((state) => state.serieA);
  const premierL = useSelector((state) => state.premierLeague);
  const laLigaEs = useSelector((state) => state.laLiga);

  console.log(serieA);

  const laLiga = "soccer_spain_la_liga";
  const premierLeague = "soccer_epl";
  const serieAEndpoint = "soccer_italy_serie_a";

  const getFixtures = () => {
    fetch(
      "https://odds.p.rapidapi.com/v4/sports/" + serieAEndpoint + "/scores",

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
        dispatch({ type: SERIE_A, payload: data });
        console.log(data);
      })

      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getFixtures();
  }, []);

  return (
    <Container>
      <Row className="justify-content-between">
        <Sidebar serieA={serieA[0]} />
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
            {serieA[0] && (
              <Col>
                <Tabs
                  defaultActiveKey="profile"
                  id="uncontrolled-tab-example"
                  className="mb-3"
                >
                  <Tab eventKey="home" title="Serie A">
                    <div className="sidebar w-100 rounded-4 p-3">
                      <ListGroup>
                        {serieA[0].slice(0, 10).map((game, index) => {
                          const startDate = game.commence_time;
                          const formattedDate = format(
                            new Date(startDate),
                            "dd/MM HH:mm"
                          );
                          return (
                            <ListGroup.Item key={index} className="text-center">
                              {game.home_team} vs {game.away_team} |{" "}
                              {formattedDate}
                            </ListGroup.Item>
                          );
                        })}
                      </ListGroup>
                    </div>
                  </Tab>
                  <Tab eventKey="profile" title="Profile">
                    Tab content for Profile
                  </Tab>
                  <Tab eventKey="contact" title="Contact">
                    Tab content for Contact
                  </Tab>
                </Tabs>
              </Col>
            )}

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
