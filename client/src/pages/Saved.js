import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import gratitude from "../components/Gratitude";
import Footer from "../components/Footer";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/GratitudeItems";

class Saved extends Component {
  state = {
    gratitudes: []
  };

  componentDidMount() {
    this.getSavedGratitudes();
  }

  getSavedgratitudes = () => {
    API.getSavedGratitudes()
      .then(res =>
        this.setState({
          gratitudes: res.data
        })
      )
      .catch(err => console.log(err));
  };

  handleGratitudeDelete = id => {
    API.deletegratitude(id).then(res => this.getSavedGratitudes());
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="text-center">
                <strong>(React) Gratitude Search</strong>
              </h1>
              <h2 className="text-center">
                Search for and Save Gratitudes of Interest.
              </h2>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card title="Saved Gratitudes" icon="download">
              {this.state.gratitude.length ? (
                <List>
                  {this.state.gratitudes.map(gratitude => (
                    <gratitude
                      key={gratitude._id}
                      title={gratitude.title}
                      subtitle={gratitude.subtitle}
                      link={gratitude.link}
                      authors={gratitude.authors.join(", ")}
                      description={gratitude.description}
                      image={gratitude.image}
                      Button={() => (
                        <button
                          onClick={() =>
                            this.handlegratitudeDelete(gratitude._id)
                          }
                          className="btn btn-danger ml-2"
                        >
                          Delete
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                <h2 className="text-center">No Saved Gratitudes</h2>
              )}
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default Saved;
