import React, { Component } from 'react';
import { TweetBody,MatchingPosts,TweetBox } from './components/tweet.js'
import {PullToRefresh, PullDownContent, ReleaseContent, RefreshContent} from "react-js-pull-to-refresh";
import './App.css';
import InfiniteScroll from "react-infinite-scroll-component";

class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      users:
      [ 
      ]
    }
    this.handleRefresh = this.handleRefresh.bind(this)
    this.getUser = this.getUser.bind(this)
  }

  handleRefresh() {
    return new Promise((resolve) => {
      this.getUser()
    });
  }

  componentWillMount() {
    this.getUser()
  }

  getUser() {
    fetch('https://randomuser.me/api/?results=100')
    .then(response => {
      if(response.ok) return response.json();
      throw new Error('Request failed.');
    })
    .then(data => {
      this.setState({
        users:[
          {
            name: data.results[0].name,
            image: data.results[0].picture.medium,
            tweet: data.results[0].email,
            city: data.results[0].phone
          },
          ...this.state.users,
        ]
      });
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
        <InfiniteScroll
          dataLength={20}
          next={this.handleRefresh}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
      <div className="main-body">
        {[...this.state.users].map((user, index) => {
          let name = `${user.name.first} ${user.name.last}`
          let handle = `@${user.name.first}${user.name.last}`
          let profilepic = user.image
          let tweet = user.tweet
          return(
            <TweetBox>
          <div>
            <TweetBody 
              key={index}
              profilepic={profilepic} 
              name={name}
              handle={handle}
              handle_2='2'
              time={'15:23 Aug 28'}
              tweet={'Here is the tweet. uabfeuiqndfiwen'}
              image={profilepic} 
              />
              
              <div>
              <MatchingPosts
              key={index}
              profilepic={profilepic}
              platform='reddit/the_donald'
              handle={handle}
              time={'15:23 Aug 28'}
              url={'www.njidsabfinf/ hdjaba'}
              tweet={'Here is the post. uabfeuiqndfiwen'}
              image={profilepic}
              /> 
              </div>
          </div>
          </TweetBox>
          )
        })}      
      </div>
      <div className="main-body">
        
          {[...this.state.users].map((user, index) => {
          let name = `${user.name.first} ${user.name.last}`
          let handle = `@${user.name.first}${user.name.last}`
          let profilepic = user.image
          let tweet = user.tweet
          return(
            <TweetBox>
          <div>
            <TweetBody 
              key={index}
              profilepic={profilepic} 
              name={name}
              handle={handle}
              handle_2='2'
              time={'15:23 Aug 28'}
              tweet={'Here is the tweet. uabfeuiqndfiwen'}
              image={profilepic} 
              />
              <div>
              <MatchingPosts
              key={index}
              profilepic={profilepic}
              handle={handle}
              tweet={'Here is the post. uabfeuiqndfiwen'}
              image={profilepic}
              /> 
              </div>
          </div>
          </TweetBox>
          )
        })}    
        
      </div>
      </InfiniteScroll>
    </div>
    );
    
  }
}

export default App;
