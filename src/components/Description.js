import React, { Component } from 'react'

export default class Description extends Component {
    render() {
        const { cards , i} = this.props;
        return <div className={ this.props.showDesc  === true ? 'rightbar rightshow' : 'rightbar'}>
            <h5>{cards[i].cardName}</h5>
            <p>{cards[i].cardDesc}</p>
        </div>
    }
}