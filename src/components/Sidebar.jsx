import { Col, Row, Form } from "react-bootstrap";
import format from "date-fns/format";
import { useEffect, useState } from "react";

const Sidebar = () => {
  const [leagueData, setLeagueData] = useState([]);

  const getAllFixtures = (param) => {
    fetch(
      "https://odds.p.rapidapi.com/v4/sports/" + param + "/scores",

      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "",
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
        console.log(data, "select data");
        setLeagueData(data);
      })

      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllFixtures("soccer_italy_serie_a");
  }, []);

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
      {leagueData && (
        <Row className="flex-column">
          <p className="fw-bold mt-3 text-center">Choose league</p>
          <Form.Select
            aria-label="Default select example"
            onChange={(e) => {
              getAllFixtures(e.target.value);
            }}
          >
            <option value="soccer_italy_serie_a">Serie A</option>
            <option value="soccer_italy_serie_b">Serie B</option>
            <option value="soccer_epl">Premier League</option>
            <option value="soccer_england_league1">Ligue One UK</option>
            <option value="soccer_spain_la_liga">La Liga ES</option>
            <option value="soccer_spain_segunda_division">
              Segunda Liga ES
            </option>
            <option value="soccer_germany_bundesliga">Bundesliga</option>
            <option value="soccer_germany_bundesliga2">Bundesliga 2</option>
            <option value="soccer_france_ligue_one">Ligue 1 FR</option>
            <option value="soccer_france_ligue_two">Ligue 2 FR</option>
            <option value="soccer_uefa_champs_league">
              Uefa Champions League
            </option>
            <option value="soccer_uefa_europa_league">
              Uefa Europa League
            </option>
            <option value="soccer_uefa_europa_conference_league">
              Uefa conference League
            </option>
          </Form.Select>
          {leagueData.slice(0, 10).map((game, index) => {
            const startDate = game.commence_time;
            const formattedDate = format(new Date(startDate), "dd/MM");
            const formattedTime = format(new Date(startDate), "HH:mm");

            return (
              <Col
                key={index}
                className="border rounded-4 my-3 p-2 d-flex sidebar align-items-center"
              >
                <div className="fw-bold me-2">
                  <p className="m-0">{formattedDate}</p>
                  <p className="m-0">{formattedTime}</p>
                </div>
                <div>
                  <p className="m-0">{game.home_team}</p>
                  <p className="m-0">{game.away_team}</p>
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
