import React from 'react';


class Card extends React.Component {
    constructor(props) {
        super(props);
    }
    //handle click
    handleClick = () => {
        if (!this.props.disable) {
            this.props.handleChoice(this.props.cardText)
        }
    }
    handleMatched = () => {
        alert('Card already Matched')
    }
    render() {
        if (!this.props.flipped) {
            return (
                <div className="cardback" onClick={this.handleClick}></div>
            )
        } else {
            return (
                <div className='cardup' onClick={this.handleMatched}> {this.props.cardText.name} </div>);
        }
    }
}

export default Card;