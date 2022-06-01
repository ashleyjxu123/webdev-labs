import React from 'react';
import {getHeaders} from './utils';

class LikeButton extends React.Component {  

    constructor(props) {
        super(props);
        this.toggleLike = this.toggleLike.bind(this);
        this.like = this.like.bind(this);
        this.unlike = this.unlike.bind(this);
    }

    toggleLike(ev) {
        if (this.props.likeId) {
            console.log('unlike');
            this.unlike();
        } else {
            console.log('like');
            this.like();
        }
    }

    like() {
        const url = 'api/posts/likes';
        const postData = {
            post_id: this.props.postId
        };
        console.log('code to like the post');
        // issue fetch request and then afterwards requery for the post:
        fetch(url, {
            headers: getHeaders(),
            method: 'POST',
            body: JSON.stringify(postData)
        }).then(response => response.json())
        .then(data => {
            console.log(data);
            this.props.refreshPost();
        })
        // this.props.requeryPost();
    }

    unlike() {
        console.log('code to unlike the post');
        // issue fetch request and then afterwards requery for the post:
        const url = 'api/posts/likes/' + this.props.likeId;
        console.log('code to like the post');
        // issue fetch request and then afterwards requery for the post:
        fetch(url, {
            headers: getHeaders(),
            method: 'DELETE'
        }).then(response => response.json())
        .then(data => {
            console.log(data);
            this.props.refreshPost();
        })
        // this.props.requeryPost();
    }

    render () {
        const likeId = this.props.likeId;
        return (
            <button role="switch"
                className="like" 
                aria-label="Like Button" 
                aria-checked={likeId ? true : false}
                onClick={this.toggleLike}>
                <i className={likeId ? 'fas fa-heart' : 'far fa-heart'}></i>                        
            </button>
        ) 
    }
}

export default LikeButton;