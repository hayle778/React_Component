import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import DishDetail from './DishDetailComponent';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = { selectedDish: null }
    }

    onDishSelect(dish) { this.setState({ selectedDish: dish }); }

    renderDish(dish) {
        if (dish != null)
            return (
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <DishDetail dish={dish} />
                        {/* <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText> */}
                    </CardBody>
                </Card>
            );
        else
            return (<div></div>);
    }

    render() {
        const menu = this.props.dishes.map(
            (dish) => {
                return (
                    <div className="col-12 col-md-5 m-1">
                        <Card
                            key={dish.id}
                            onClick={() => this.onDishSelect(dish)}>
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                            <CardImgOverlay>
                                <CardTitle heading>{dish.name}</CardTitle>
                            </CardImgOverlay>
                        </Card>
                    </div>
                );
            }
        );

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                    {this.renderDish(this.state.selectedDish)}
                </div>
            </div>
        );
    }
}

export default Menu;