import React, {Component} from "react";

class GifSearch extends Component {
  constructor(props){
    super(props);
    this.state = {
      search: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event){
    this.setState({ search: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.onSubmit(this.state.search)
  }

  render()
    return(
      <div>
        <from onSubmit={this.handleSubmit}>
          <input name="search" type="text" onChange={this.handleChange} value={this.state.search} />
          <input type="submit" />
        </form>
      </div>
    )
  }


  export default GifSearch; 
