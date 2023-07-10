import React,{Component} from "react";
import Cardlist from "../components/Cardlist";
import SearchBox from '../components/SearchBox'
import { books } from './books'
import './App.css'
import Scroll from '../components/Scroll'


class App extends Component {
  constructor(){
    super()
    this.state = { 
      books: [],
      searchfield: ''
    }
  }
  componentDidMount(){

    this.setState({books: books})
  }
  onSearchChange=(event)=>{
    this.setState({searchfield: event.target.value})
    
    

  }
  render(){
    const filterbooks = this.state.books.filter(books => {
      return books.book.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    return (
      <div className="tc">
        <h1 className="f1">BookFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
          <Cardlist books={filterbooks} />
        </Scroll>
      </div>
    )
  }
}
export default App