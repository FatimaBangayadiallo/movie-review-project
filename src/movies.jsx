import React from 'react';

export class Movies extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      movies : [ ]
    }
  }

  componentDidMount(){
    fetch("https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=gyAjUOB4OGp4VKzdHlYfyg6DtVAMvQaC ")
    .then(res => res.json())
    .then(data =>{console.log("data: ", data.results)
      this.setState({movies : data.results})

      })

    .catch(err => console.log(err))

  }

  render(){

    return(
      <>
        <h1>movies</h1>
        <div>
          {this.state.movies.map(movie => <div>
               <p>display_title: {movie.display_title}</p>
               <hr/>
               <p> headline: {movie.headline}</p>
               <hr/>
               <p> byline: {movie.byline}</p>
               <hr/>
               <p> critic pick: {movie.critics_pick}</p>
            </div>)}
        </div>


      </>
    );
  }
};
