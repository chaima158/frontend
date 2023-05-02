import React, { Component } from 'react';
import PDF from './PDF';
import Layout from '../Layout/Layout';

class Post extends Component {
    state = {
        title: '',
        content: '',
        image: '',
        postSubmitted: false
    }

    onChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    }

    sunmitPost = (e) => {
        
        if(!this.state.title || !this.state.content){
            alert('All fields are required!');
            e.preventDefault();
        }else{
            this.setState({
                postSubmitted: true
            });
        }
    }

    render(){
        return(
            <>
             <div className="voice">
    <div className="voicedach  ">
        <Layout/>
        <>
                {  !this.state.postSubmitted ? 
                    (<div className="">
                    <div className="jumbotron mt-5 ml-5 mr-1">
                     <div className="row">
                    <div className="col-md-30">
                    <div className="well well-sm">
                    <form className="form-horizontal" method="post">
                    <fieldset>
                    <legend className="text-center header">Add new Post</legend>
                    <div className="form-group">
                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                    <input onChange={this.onChange('title')} name="title" type="text" placeholder="Post Title" className="form-control" />
                    </div>
                    <div className="form-group">
                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                    <input onChange={this.onChange('image')} name="image" type="text" placeholder="https://" className="form-control" />
                    </div>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon"></i></span>
                                                    <textarea onChange={this.onChange('content')} className="form-control" name="content" placeholder="Enter your text here" rows="7"></textarea>
                                                </div>
                                                <div className="form-group">
                                                    <button type="button" onClick={this.sunmitPost} className="btn btn-primary btn-lg">Submit</button>
                                                </div>
                                            </fieldset>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>) : (
                        <PDF title={this.state.title} content={this.state.content} image={this.state.image} />
                    )
                }
                </></div></div>
            </>
        );
    }
}

export default Post;