import React from "react";

class Form extends React.Component{
    
render() {
    return (
      <form>
        <label>
          Titre :
          <input />
        </label>
        <br />
        <label>
          Dépense :
          <input />
        </label>
        <label>
          Date :
          <input />
        </label>
      </form>
    );
  }
}
