import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bulma/bulma';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'



class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        bar_checkin : "",
        date_checkin : "",
        card_checkout : "",
        bar_checkout : "",
        date_checkout: ""
      };
      this.checkin = this.checkin.bind(this);
      this.checkout= this.checkout.bind(this);
      this.handleBar_checkin= this.handleBar_checkin.bind(this);
      this.handleDate_checkin= this.handleDate_checkin.bind(this);
      this.handleCard_checkout= this.handleCard_checkout.bind(this);
      this.handleBar_checkout= this.handleBar_checkout.bind(this);
      this.handleDate_checkout= this.handleDate_checkout.bind(this);
    }

    handleBar_checkin(e) {
        this.setState({bar_checkin: e.target.value});
    }
    handleDate_checkin(e) {
        this.setState({date_checkin: e.target.value});
    }
    handleCard_checkout(e) {
        this.setState({card_checkout: e.target.value});
    }
    handleBar_checkout(e) {
        this.setState({bar_checkout: e.target.value});
    }
    handleDate_checkout(e) {
        this.setState({date_checkout: e.target.value});
    }




  
  
    render() {
      return (
          
        <div className="content">
        <h1>Book Circulation</h1>
        <div align='right'><button onclick="logout()">logout</button> </div>
        <hr />
        <Container>
            <Row>
                <Col>
                <div align='center'>
                    <h2 align='center'> CHECKIN</h2>
                    <form name='check_in'>
                        Book Code <input type='text' name='bar_checkin' placeholder="Please enter book code" value={this.state.bar_checkin} onChange={this.handleBar_checkin} /><br/> <br/>
                        Date <input type='text' name='date_checkin' placeholder="dd/mm/yy" value={this.state.date_checkin} onChange={this.handleDate_checkin} /><br/> <br/>
                        <button type="button" onClick={this.checkin}>CHECKIN</button>  
                        <br/><br/> 
                        <br/><br/><br/>
                    </form>

                     </div>           
                </Col>
                
                <Col>
                <div align='center'>
                    <h2 align='center'> CHECKOUT</h2>
                    <form name='checkout'>
                        Card No. <input type="text" name="card_checkout" placeholder="Enter card no." value={this.state.card_checkout} onChange={this.handleCard_checkout} /> <br/><br/>
                        Book Code <input type='text' name='bar_checkout' placeholder="Please enter book code" value={this.state.bar_checkout} onChange={this.handleBar_checkout} /><br/> <br/>
                        Date <input type='text' name='date_checkout' placeholder="dd/mm/yy" value={this.state.date_checkout} onChange={this.handleDate_checkout} /><br/> <br/>
                        <button type="button" onClick={this.checkout}>CHECKOUT</button>  
                        <br/><br/> 
                        <br/><br/><br/>
                    </form>

                     </div>        
                
                </Col>


            </Row>
            
            
            
            
            
            
            
            
            
            </Container>          
          
        </div>
        
      );
    }
    checkin(){
        alert("BOOK: " + this.state.bar_checkin + "DATE: "+ this.state.date_checkin);
    }

    checkout(){
        alert("CARD: " +this.state.card_checkout+ "BOOK: " + this.state.bar_checkout + "DATE: "+ this.state.date_checkout);

    }



  }
  


  
  ReactDOM.render(<App />, document.getElementById("app"));
