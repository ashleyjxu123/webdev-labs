import React from 'react';
import Post from './Post';
import {getHeaders} from './utils'


class Posts extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = ({
            posts: []
        })
        this.getPostsFromServer()
        // initialization code here
    }

    getPostsFromServer() {
        fetch('/api/posts', {
            headers: getHeaders()
        }).then(response => response.json())
        .then(data => {
            console.log(data);
            this.setState({
                posts: data
            })
        })
    }

    componentDidMount() {
        // fetch posts and then set the state...
    }
    
    render() {
        return (
            <div id="posts">
                {
                    this.state.posts.map(post => {
                        return (
                            <Post model={post} key={'post-' + post.id} />
                        )
                    })
                }
            </div>
        );   
    }
}

export default Posts;
