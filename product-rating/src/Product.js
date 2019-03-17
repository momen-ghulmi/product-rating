import React, { Component } from 'react';

class Product extends Component {
    state = {
        data: [],
    }
    componentDidMount() {
        const url = "http://localhost:8080/product/1";
        fetch(url)
            .then(result => result.json())
            .then(result => {
                this.setState({
                    data: result,
                })
            });
    }
    render() {
        const { data } = this.state;
        return (
            <div className="product-item__container">
                <div className="product-item__img--container">
                    <img className="product-item__img" alt="" src={ data.img }></img>
                </div>
                <div className="product-item__content--container">
                    <h1>{ data.name}</h1>
                    <div className="product-item__rating--container">
                    { product- }
                    </div>
                </div>
            </div>
        );
    }
}
export default Product;