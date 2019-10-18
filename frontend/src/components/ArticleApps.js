import React, { Component } from 'react';

class ArticleApps extends Component {
  render(){

    return(

      <div className="container">
      <article className="media level">
        <figure className="media-left level-left">
          <p className="image is-64x64">
            <img src="https://bulma.io/images/placeholders/128x128.png" />
          </p>
        </figure>
        <div className="media-content level-rigth">
            <div className="content">
              <p>
                <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
              </p>
            </div>
            <nav className="level is-mobile">
                <div className="level-left">
                  <a className="level-item">
                    <span className="icon is-small"><i class="fas fa-thumbs-up"></i></span>
                  </a>
                  <a className="level-item">
                    <span className="icon is-small"><i class="fas fa-thumbs-down"></i></span>
                  </a>
                </div>
            </nav>
        </div>
      </article>
    </div>
    );
  }

}

export default ArticleApps;
