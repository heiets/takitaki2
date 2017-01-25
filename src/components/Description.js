import React, { Component } from 'react'

export default class Description extends Component {
    handleDesc() {
        this.props.handleDesc();
    }
    render() {
        const { cards , i} = this.props;
        return <div className={ this.props.showDesc  === true ? 'rightbar rightshow' : 'rightbar'} onClick={::this.handleDesc}>
            <h5>{cards[i].cardName}</h5>
            <p>{cards[i].cardDesc}</p>
        </div>
    }
}