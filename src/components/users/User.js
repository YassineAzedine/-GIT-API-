import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export class User extends Component {
    render() {
        const {login,avatar_url,html_url, repos_url } = this.props.user
        return (
            <div>
                        <div class="card text-left">
           <img class="card-img-top" src= {avatar_url} alt="" className="img-top" />
           <div class="card-body">
             <h4 class="card-title">{login}</h4>
             <p class="card-text">
          <a href={html_url} className="btn btn-primary ">Github</a>
          <Link to={'/users/' +login} className="btn btn-sucess">Show more</Link>

          <Link to={repos_url} className="btn btn-warning">Repositories</Link>


             </p>
           </div>
         </div>
            </div>
        )
    }
}

export default User
