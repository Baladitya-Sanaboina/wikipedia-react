import './App.css';
import {Component} from 'react'
import UrlLoader from './UrlLoader/index'
class App extends Component{
  state = {data: [],search: ""}
  searchingData = (event) =>{
    this.setState({search: event.target.value})
  }
  getData = async(event) =>{
    const {search} = this.state
    let url = `https://apis.ccbp.in/wiki-search?search=${search}`
    let options = {
      method: "GET"
    }
    try{
      const response = await fetch(url, options)
      const jsonData = await response.json()
      this.setState({data: jsonData.search_results})
    }
    catch(e){
      console.log(`Error occured ${e}`)
    }
  }
  render(){
    const {data} = this.state
    return(
      <div>
        <div className = 'main-background'>
          <img src = 'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/wiki-logo-img.png' alt="wikipedia-image" className= "image"/>
          <br/>
          <input type = 'text' onChange = {this.searchingData} className = "input-box" placeholder = 'What you want to read today?'/>
          <br/>
          <button onClick = {this.getData} className = 'input-button'>Search</button>
        </div>
        <ul>
        {data.map((eachItem, index) =>(
          <UrlLoader key = {index} getDetails = {eachItem}/>
        ))}
        </ul>
      </div>
      
    )
  }
}

export default App;
