import React, { Component } from 'react'
import Form from '../Form/Form.js'
import MovieList from '../MovieList/MovieList.js'
import moviestyle from '../MovieAPI/movieapi.module.css'


 class MovieAPI extends Component {
    constructor(props){
      
        super(props)
        this.state={
            responceErrors:'',
            movies:[],
            input: 'batman' ,
            selectValue:''
            
        }
        
    }
    componentDidMount=async()=>{
      
        let url=`http://www.omdbapi.com/?apikey=9f2af610&s=${this.state.input}`;
        try {
            const responce = await fetch(url);
        const data = await responce.json();
        console.log(data.Search);
        this.setState({

            movies:data.Search
        });
        } catch (error) {
            console.error(error);
        }
    }

    searchMovie = async () => {
      let url = `http://www.omdbapi.com/?apikey=9f2af610&s=${this.state.input}&type=${this.state.selectValue}`;
      try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);

        if (data.Response === "Flase" || data.Response != null) {
          this.setState({
              responceErrors: data.Error,
            movies: [],
          });
        }
        if (data.Search != null) {
          this.setState({
            movies: data.Search,
          });
        }
      } catch (error) {
        console.error(error);
      }
  };
  handleFormValue= (e) =>{
        e.preventDefault();
        const target = e.target;
        const value = target.type === 'checkbox'? target.checked : target.value;
        const name = target.name;
        //console.log(target,value,name);
        console.log(this.state.input);
        this.setState({
            [name]: value
        },()=>this.searchMovie());
        
        //console.log(this.state.selectValue);

    }

    render() {
        return (
            <div className={moviestyle.movieResults}>
             <Form forminput = {this.state.input} selectinput={this.state.selectValue} 
             handleFormValue={this.handleFormValue} allContent={this.componentDidMount}/>
             <div>
          <h3 className = {moviestyle.errorstyle}>
            <br />
            {this.state.responceErrors}
          </h3>
        </div>
        <MovieList movies={this.state.movies} />
            
            
            </div>
            
        )
    }
}
export default MovieAPI