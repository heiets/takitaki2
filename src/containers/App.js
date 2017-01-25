import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import History from '../components/History'
import Description from '../components/Description'
import Page from '../components/Page'
import * as Actions from '../actions/Actions'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showHistory: false,
      showDesc: false
    };
  }
  toggleHistory() {
    this.state.showHistory === false ? this.setState({showHistory: true}) : this.setState({showHistory: false});
  }
  toggleDesc() {
    this.state.showDesc === false ? this.setState({showDesc: true}) : this.setState({showDesc: false});
  }
  render() {
    const { history, page } = this.props;
    const { nextCard , prevCard , shuffle , addToHistory } = this.props.Actions;
    return <div>
      <History historyCards={history.cards} cards={page.cards} handleHistory={ ::this.toggleHistory } showHistory={ this.state.showHistory } />
      <Description cards={page.cards} i={page.i} handleDesc={ ::this.toggleDesc }  showDesc={ this.state.showDesc }/>
      <Page handleHistory={ ::this.toggleHistory } handleDesc={ ::this.toggleDesc } cards={page.cards} i={page.i} progressNumber={page.progressNumber} historyCards={history.cards} nextCard={nextCard} prevCard={prevCard} shuffle={shuffle}  addToHistory={addToHistory}/>
    </div>
  }
}
function mapStateToProps(state) {
  return {
    history: state.history,
    page: state.page
  }
}
function mapDispatchToProps(dispatch) {
  return {
    Actions: bindActionCreators(Actions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
