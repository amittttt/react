import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

    // State for storing the data inside this :
    state={
        posts:[],
        selectedPostID : null
    }

    componentDidMount(){
        // Get request asyn call -> 
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            const post = response.data.slice(0,4);
            const updatedPosts = post.map(post=>{
               return {
                ...post,
                author: 'amit'
               }
            }
            );
            this.setState({posts:updatedPosts});
            console.log(response);
        });
    }

    postSelectedHandler=(id)=>{
        this.setState({selectedPostID:id});
        console.log(id);
    }

    render () {
        const posts = this.state.posts.map(post=>{
            return <Post 
            key={post.id} 
            title={post.title} 
            author={post.author}
            clicked={()=>this.postSelectedHandler(post.id)}
            />
        });

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost 
                    id={this.state.selectedPostID}
                    />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;