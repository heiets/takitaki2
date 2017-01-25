import React, {  Component } from 'react'
export default class Page extends Component {
    componentDidMount() {
        let a = [...this.props.cards];
        for (let i = a.length; i; i--) {
            let j = Math.floor(Math.random() * i);
            [a[i - 1], a[j]] = [a[j], a[i - 1]];
        }
        this.props.shuffle(a);
    }
    nextCardBtnClick() {
        let number = this.props.i;
        let progressNumber = this.props.progressNumber;
        let newProgressNumber = progressNumber;
        let arr = [...this.props.historyCards];
        arr.push(this.props.cards[number]);
        if (number === progressNumber && progressNumber !== this.props.cards.length - 1) {
            this.props.addToHistory(arr);
            newProgressNumber++;
        }
        number === this.props.cards.length-1 ? this.props.nextCard(number,progressNumber) : this.props.nextCard(number+1,newProgressNumber);
    }
    prevCardBtnClick() {
        let number = this.props.i;
        number === 0 ? this.props.prevCard(number) : this.props.prevCard(number-1);
    }
    handleHistory() {
        this.props.handleHistory();
    }
    handleDesc() {
        this.props.handleDesc();
    }
    render() {
        const { cards, i } = this.props;
        return <div>
            <div className="cardback" onClick={::this.nextCardBtnClick}>
                <span className="left"> {cards[i].cardName}</span>
                <span className="right"> {cards[i].cardName}</span>
            </div>
            <div className="cardButtons">
                <button className="prevBtn" onClick={::this.prevCardBtnClick}> {'<'} </button>
                <span>{this.props.i+1}</span>
                <button className="nextBtn" onClick={::this.nextCardBtnClick}> {'>'}  </button>
            </div>
            <div className="cardButtons">
                <button className="historyBtn" onClick={::this.handleHistory}>History</button>
                <button className="descBtn" onClick={::this.handleDesc}>Description</button>
            </div>
        </div>
    }
}
