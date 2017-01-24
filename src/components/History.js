import React, {  Component } from 'react'
export default class History extends Component {
    render() {
        const { historyCards, cards } = this.props;
        var arr = historyCards.map((v,i) => (
            <li key={i}>
                <h5>{ v.cardName }</h5>
                <p>{ v.cardDesc }</p>
            </li>
        )
    );
        return <div className={ this.props.showHistory  === true ? 'leftbar leftshow' : 'leftbar'}>
            <p className="cardsLeft">Осталось {cards.length - historyCards.length} карт.</p>
            <ul>
                { arr }
            </ul>
        </div>
    }
}
