import React, { Component } from 'react';

class Search extends Component {
    componentDidMount() {
      if (this.input) {
        this.input.focus();
      }
    }
  
    render() {
      const { value, onChange, onSubmit, children } = this.props;
      return (
        <form onSubmit={onSubmit}>
          {children}
          <input
            type="text"
            value={value}
            onChange={onChange}
            ref={el => (this.input = el)}
          />
          <button className="submit-button" type="submit">
            {children}
          </button>
        </form>
      );
    }
  }

  export default Search;