import React, {  Component } from 'react'
export default class History extends Component {
    handleHistory() {
        this.props.handleHistory();
    }
    render() {
        const { historyCards, cards } = this.props;
        var arr = historyCards.map((v,i) => (
            <li key={i} className="animated flash">
                <h5>{ v.cardName }</h5>
                <p>{ v.cardDesc }</p>
            </li>
        )
    );
        return <div className={ this.props.showHistory  === true ? 'leftbar leftshow' : 'leftbar'} onClick={::this.handleHistory}>
            <p className="cardsLeft">Осталось {cards.length - historyCards.length} карт.</p>
            <ul>
                { arr }
            </ul>
        </div>
    }
}
