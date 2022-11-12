import React from 'react';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFlipped: false,
        }
    }
    //handle click
    handleClick = () => {
        this.setState(state => ({ isFlipped: !state.isFlipped }))
        this.props.handleChoice(this.props.cardText)
    }
    render() {
        if (!this.state.isFlipped) {
            return (
                <div className="card" onClick={this.handleClick}></div>
            )
        } else {
            return (
                <div className='cardup'> {this.props.cardText.name} </div>);
        }
    }
}

export default Card;