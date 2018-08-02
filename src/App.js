import React, { Component } from 'react';
import './App.css';
import Pontuacao from './Pontuacao';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      time1: '',
      time2: '',
      placar1: 0,
      placar2: 0
    }
  }

  reiniciar = () => {
    this.setState({
      placar1: 0,
      placar2: 0
    });
  }

  incrementar = time => {
    let novoState = {};
    novoState[`placar${time}`] = this.state[`placar${time}`] + 1;
    this.setState(novoState);
  }

  render() {
    return (
      <div>
      <div className="placar">
        <Pontuacao cliqueBotao={this.incrementar} nomeDoTime={this.state.time1} gols={this.state.placar1} numero="1"/>
        X
        <Pontuacao cliqueBotao={this.incrementar} nomeDoTime={this.state.time2} gols={this.state.placar2} numero="2" visitante="true"/>
      </div>
      <div className="controles">
        <label>Time da casa</label>
        <input name="1" onChange={evento => this.setState({time1: evento.target.value})} type="text" placeholder="Digite o nome do time da casa" value={this.state.time1} />
        <label>Time visitante</label>
        <input name="2" onChange={evento => this.setState({time2: evento.target.value})} type="text" placeholder="Digite o nome do time visitante" value={this.state.time2} />
        <button onClick={this.reiniciar}>Reiniciar</button>
      </div>
      </div>
    );
  }
}

export default App;
