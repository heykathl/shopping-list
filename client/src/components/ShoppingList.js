import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { v4 as uuid } from 'uuid';

class ShoppingList extends Component {
  state = {
    items: [
      { id: uuid(), name: 'Milk' },
      { id: uuid(), name: 'Apple' },
      { id: uuid(), name: 'Bread' }
    ]
  }

  render() {
    const { items } = this.state;
    return (
      <Container>
        <Button
          color="dark"
          style={{marginBottom:"2rem"}}
          onClick={() => {
            const name = prompt('Enter Item');
            if(name){
              this.setState(state => ({
                items: [...state.items, { id: uuid(), name: name }]
              }));
            }
          }}
        >Add Item</Button>
        
      </Container>
    )
  }
}

export default ShoppingList

