import React, { useEffect, useState } from "react";
import Jumbotron from "../components/Jumbotron";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

const Gratitudes=()=> {
  // Setting our component's initial state
  const [gratitudes, setGratitudes] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all books and store them with setGratitudes
  useEffect(() => {
    loadGratitudes()
  }, [])

  // Loads all gratitudes and sets them to gratitudes
  const loadGratitudes=()=> {
    API.getgratitudes()
      .then(res => 
        setGratitudes(res.data)
      )
      .catch(err => console.log(err));
  };


    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What am I grateful for?</h1>
            </Jumbotron>
            <form>
              <Input
                onChange={() => {}}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                onChange={() => {}}
                name="author"
                placeholder="Author (required)"
              />
              <TextArea
                onChange={() => {}}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              />
              <FormBtn
                disabled={!(formObject.author && formObject.title)}
                onClick={() => {}}
              >
                Submit Gratitude
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>My gratitude list</h1>
            </Jumbotron>
            {gratitudes.length ? (
              <List>
                {gratitudes.map(gratitude => {
                  return (
                    <ListItem key={gratitude._id}>
                      <a href={"/gratitudes/" + gratitude._id}>
                        <strong>
                          {gratitude.title} by {gratitude.author}
                        </strong>
                      </a>
                      <DeleteBtn onClick={() =>{}} />
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }


export default Gratitudes;
