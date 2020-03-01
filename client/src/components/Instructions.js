import React, { Component } from 'react';
import { Dropdown, Container, Row, Col, Button, FormGroup } from 'react-bootstrap';
import { Animated } from 'react-animated-css';
import Slider from 'react-slick';
import Form from 'react-bootstrap/Form';

class Instructions extends Component {

    constructor(props) {
        super(props);

        this.state = {
            choice1: 'Buy/Sell',
            choice2: 'Buy/Sell',
            choice3: 'Buy/Sell',
            choice4: 'Buy/Sell',
            choice5: 'Buy/Sell',
        }
    }

    getChoiceOne(e) {
        this.setState({choice1: e.currentTarget.textContent});
    }

    getChoiceTwo(e) {
        this.setState({choice2: e.currentTarget.textContent});
    }

    getChoiceThree(e) {
        this.setState({choice3: e.currentTarget.textContent});
    }

    getChoiceFour(e) {
        this.setState({choice4: e.currentTarget.textContent});
    }

    getChoiceFive(e) {
        this.setState({choice5: e.currentTarget.textContent});
    }

    render() {

        const settings = {
            arrows: true,
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            vertical: true,
            verticalSwiping: true,
            swipeToSlide: true,
            centerPadding: '50px'
        }


        return (
            <div>
                <Animated animationIn="fadeInUp" animationOut="fadeOutUp" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                    <Container fluid={true}>
                        <Row>
                            <Col>
                                <Slider id="instruction-slider" {...settings}>
                                    <div id="slider-div">
                                        <p id="instruction-card">
                                            If the temperature is above<div className="div-inline"><Form><input type="text" name="name" placeholder="Degrees Fahrenheit"/></Form></div> then, 
                                                <div className="div-inline">    
                                                    <Dropdown>
                                                    <Dropdown.Toggle variant="info">
                                                        {this.state.choice1}
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                    <Dropdown.Item onClick={this.getChoiceOne.bind(this)}>Buy</Dropdown.Item>
                                                    <Dropdown.Item onClick={this.getChoiceOne.bind(this)}>Sell</Dropdown.Item>
                                                    </Dropdown.Menu></Dropdown>
                                                </div>
                                                <div className="div-inline"><Form><input size="6" type="text" name="name" placeholder="Number"/></Form></div>
                                                <div className="div-inline"><Form><input type="text" name="name" placeholder="Stock Name"/></Form></div>
                                                shares.
                                                <br></br>
                                                <br></br>
                                                <Button id="submitButton">Submit</Button> 
                                        </p> 
                                    </div>
                                    <div id="slider-div">
                                        <p id="instruction-card">
                                            If the temperature is below<div className="div-inline"><Form><input type="text" name="name" placeholder="Degrees Fahrenheit"/></Form></div> then, 
                                            <div className="div-inline">    
                                                <Dropdown>
                                                <Dropdown.Toggle variant="info">
                                                    {this.state.choice2}
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item onClick={this.getChoiceTwo.bind(this)}>Buy</Dropdown.Item>
                                                    <Dropdown.Item onClick={this.getChoiceTwo.bind(this)}>Sell</Dropdown.Item>
                                                </Dropdown.Menu></Dropdown>
                                            </div>
                                                <div className="div-inline"><Form><input type="text" name="name" placeholder="Number"/></Form></div>
                                                <div className="div-inline"><Form><input type="text" name="name" placeholder="Stock Name"/></Form></div>
                                                shares.
                                                <br></br>
                                                <br></br>
                                                <Button id="submitButton">Submit</Button> 
                                        </p>
                                    </div>
                                    <div id="slider-div">
                                        <p id="instruction-card">
                                            If<div className="div-inline"><Form><input type="text" name="name" placeholder="Stock Name"/></Form></div> is lower than,
                                                <div className="div-inline"><Form><input type="text" name="name" placeholder="Price"/></Form></div>dollars,  
                                                <div className="div-inline">    
                                                    <Dropdown>
                                                    <Dropdown.Toggle variant="info">
                                                        {this.state.choice3}
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item onClick={this.getChoiceThree.bind(this)}>Buy</Dropdown.Item>
                                                        <Dropdown.Item onClick={this.getChoiceThree.bind(this)}>Sell</Dropdown.Item>
                                                    </Dropdown.Menu></Dropdown>
                                                </div>
                                                <div className="div-inline"><Form><input type="text" name="name" placeholder="Number"/></Form></div>
                                                <div className="div-inline"><Form><input type="text" name="name" placeholder="Stock Name"/></Form></div>
                                                shares.
                                                <br></br>
                                                <br></br>
                                                <Button id="submitButton">Submit</Button> 
                                        </p>
                                    </div>
                                    <div id="slider-div">
                                        <p id="instruction-card">
                                        If<div className="div-inline"><Form><input type="text" name="name" placeholder="Stock Name"/></Form></div> is higher than,
                                                <div className="div-inline"><Form><input type="text" name="name" placeholder="Price"/></Form></div>dollars,  
                                                <div className="div-inline">    
                                                    <Dropdown>
                                                    <Dropdown.Toggle variant="info">
                                                        {this.state.choice4}
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item onClick={this.getChoiceFour.bind(this)}>Buy</Dropdown.Item>
                                                        <Dropdown.Item onClick={this.getChoiceFour.bind(this)}>Sell</Dropdown.Item>
                                                    </Dropdown.Menu></Dropdown>
                                                </div>
                                                <div className="div-inline"><Form><input type="text" name="name" placeholder="Number"/></Form></div>
                                                <div className="div-inline"><Form><input type="text" name="name" placeholder="Stock Name"/></Form></div>
                                                shares.
                                                <br></br>
                                                <br></br>
                                                <Button id="submitButton">Submit</Button> 
                                        </p>
                                    </div>
                                    <div id="slider-div">
                                        <p id="instruction-card">
                                            If <div className="div-inline"><Form><input type="text" name="name" placeholder="Number"/></Form></div> is trending on Twitter, 
                                            <div className="div-inline">    
                                                    <Dropdown>
                                                    <Dropdown.Toggle variant="info">
                                                        {this.state.choice5}
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item onClick={this.getChoiceFive.bind(this)}>Buy</Dropdown.Item>
                                                        <Dropdown.Item onClick={this.getChoiceFive.bind(this)}>Sell</Dropdown.Item>
                                                    </Dropdown.Menu></Dropdown>
                                            </div>
                                            <div className="div-inline"><Form><input type="text" name="name" placeholder="Number"/></Form></div> 
                                            <div className="div-inline"><Form><input type="text" name="name" placeholder="Stock Name"/></Form></div>
                                            shares.
                                        </p>
                                    </div>
                                </Slider>
                            </Col>

                            <Col>
                                <div>
                                    <h1 id="title-text">Configure your Trading Bot</h1>

                                    <Container fluid={true}>
                                        <Row>
                                            <Col md={5}>
                                                <Dropdown id="instruction-dropdown">
                                                    <Dropdown.Toggle variant="info">
                                                        Select a Bot
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <Dropdown.Item>Bot 1</Dropdown.Item>
                                                        <Dropdown.Item>Bot 2</Dropdown.Item>
                                                        <Dropdown.Item>Bot 3</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </Col>

                                            <Col md={1}>
                                                <Button id="trash-button" variant="danger">
                                                    <img src={require("../res/trash.png")}/>
                                                </Button>
                                            </Col>

                                            <Col md={6}>
                                                <Button id="add-button" variant="success">+</Button>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Animated>
            </div>
        );
    }
}

export default Instructions;