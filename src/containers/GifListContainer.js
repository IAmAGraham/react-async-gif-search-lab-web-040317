import React, {Component} from "react";
import GifList from './components/GifList'
import GifSearch from "/components/GifSearch"
import "whatwg-fetch"


const url ="http://api.giphy.com/v1/gifs/search?q="
const apiKey ="&api_key=dc6zaTOxFJmzC"

class GifListContainer extends Component {
  constructor(){
    super();
    this.state = {
      gifList: []
    }
    this.onSubmit = this.onSubmit.bind(this)
  }

  getFetch(searchTerm){
    fetch(url + searchTerm + apiKey)
      .then(res => res.json())
      .then(response => {
        this.setState({
          gifList: response.data.slice(0,3)
        })
      })
  }

  onSubmit(searchTerm){
    this.getFetch(searchTerm)
  }

  render(){
    return (
      <div>
        <GifList gifList={this.state.gifList} />
        <GifSearch onSubmit={this.onSubmit} />
      </div>
    )
  }
}
