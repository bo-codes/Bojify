import React, { Component } from 'react';
import figlet from 'figlet';
import colossal from 'figlet/importable-fonts/Colossal.js'

class BojifyForm extends Component {

  state = {name: '', bojifiedName: ''}

  onSubmit = (e) => {

    e.preventDefault()
    const bojifiedName = this.B0jify(this.state.name)
    figlet.parseFont('Colossal', colossal);
    const ascii = figlet.textSync(bojifiedName, {
    font: 'Colossal',
    })
    this.setState({bojifiedName: ascii})
    this.setState({name: ''})
  }

  B0jify(name) {
    let i = 0;
    let vowels = "aeiou";

    while (i < name.length) {
      let char = name[i];

      if (vowels.includes(char)) {
        if (name[name.indexOf(char) + 1] === "r" || name[name.indexOf(char) + 1] === "n") {
          let lastPart1 = name.slice(i + 2);
          return "bo" + lastPart1;
        } else {
        let lastPart = name.slice(i + 1);
        return "bo" + lastPart;
        }
      }
      i ++;
    }
  }


  render() {
    return (
      <div className='form-and-final-name'>
        <h1 id='bojified-name'>
          <pre>
            {this.state.bojifiedName}
          </pre>
        </h1>
        <form onSubmit={this.onSubmit}>
          <input
            placeholder='give me your name'
            onChange={(e) => {
              this.setState({name: e.target.value})
            }}
            value={this.state.name}
            className='name-input'
          />
          <button>submit</button>
        </form>
      </div>
    );
  }
}

export default BojifyForm;
