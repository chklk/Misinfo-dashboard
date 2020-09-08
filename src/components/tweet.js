import React from 'react';

const TweetBox = (props) => {
  return(
    <div className="tweet-body">
      {props.children}
    </div>
  )
}

const ProfilePic = (props) => {
  return(
    <img src={props.profilepic} alt="Logo" className="profilepic">
    </img>
  )
}

const Image = (props) => {
  return(
    <img src={props.image} alt="Logo" className="image">
    </img>
  )
}

const Handle = (props) => {
  return(
    <div className="handle">
      {props.handle}
    </div>
  )
}

const Name = (props) => {
  return(
    <div className="name">
      {props.name}
    </div>
  )
}

const Time = (props) => {
  return(
    <div className="time">
      {props.time}
    </div>
  )
}

const Tweet = (props) => {
  return(
    <div className="tweet">
      {props.tweet}
    </div>
  )
}

const Platform = (props) => {
  return(
    <div className="platform">
      {props.platform}
    </div>
  )
}

const Url = (props) => {
  return(
    <div className="url">
      {props.url}
    </div>
  )
}

const TweetBody = (props) => {
  
  return(
    
      <div className="inner-body">
        <ProfilePic profilepic={props.profilepic}/>
        <div className="body">
          <div className="inner-body">
            <Name name={props.name}/>
            <Handle handle={props.handle}/>
            <Time time={props.time}/>
          </div>
          <Tweet tweet={props.tweet}/>
          <Image image={props.profilepic}/>
        </div>
        
      </div>
      
    
  )
}

const Post = (props) => {
  
  return(
      <div className="post inner-body">
        <ProfilePic profilepic={props.profilepic}/>
        <div className="body">
          <div className="inner-body">
            <Platform platform={props.platform}/>
            <Handle handle={props.handle}/>
            <Time time={props.time}/>
          </div>
          <Url url={props.url}/>
          <Tweet tweet={props.tweet}/>
          <Image image={props.image}/>
        </div>
      </div>
  )
}

const MatchingPosts = (props) => {
  return(
      <div className="body">
      <Post
          profilepic={props.profilepic}
          platform={props.platform}
          handle={props.handle}
          time={props.time}
          url={props.url}
          tweet={props.tweet}
          image={props.image}
          />
      <Post
          profilepic={props.profilepic}
          platform={props.platform}
          handle={props.handle}
          time={props.time}
          url={props.url}
          tweet={props.tweet}
          image={props.image}
          />
      <Post
          profilepic={props.profilepic}
          platform={props.platform}
          handle={props.handle}
          time={props.time}
          url={props.url}
          tweet={props.tweet}
          image={props.image}
          />
      <Post
          profilepic={props.profilepic}
          platform={props.platform}
          handle={props.handle}
          time={props.time}
          url={props.url}
          tweet={props.tweet}
          image={props.image}
          />
      <Post
          profilepic={props.profilepic}
          platform={props.platform}
          handle={props.handle}
          time={props.time}
          url={props.url}
          tweet={props.tweet}
          image={props.image}
          />
      </div>
  )
}

export { TweetBody,MatchingPosts,TweetBox }