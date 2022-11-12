import React from 'react';


class Card extends React.Component {
    constructor(props) {
        super(props);
    }
    //handle click
    handleClick = () => {
        this.props.handleChoice(this.props.cardText)
    }
    render() {
        if (!this.props.flipped) {
            return (
                <div className="cardback" onClick={this.handleClick}></div>
            )
        } else {
            return (
                <div className='cardup'> {this.props.cardText.name} </div>);
        }
    }
}

export default Card;