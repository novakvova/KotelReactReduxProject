import React, { Component } from 'react';
import axios from 'axios';

class GameForm extends Component {
    state = { 
        title: 'default',
        image: '',
        errors: {

        },
        loading: false,
        done: false
     }

     handleTextChange = (e) =>{
        console.log(e.target.name, e.target.value);
        this.setState({[e.target.name]: e.target.value})
     }
     onSubmitForm = (e) => {
         e.preventDefault();
         const {title, image} = this.state
         axios.post('http://localhost:54534/api/game', 
         {
             Title: title,
             Image: image
         })
         .then(resp => {
             console.log('---get info by sever---', resp.data);
         })
         .catch(error => {
            console.log("---Propblem save data----", error.response.data);
            this.setState({errors: error.response.data});
         });
     }

    render() { 
        const {title, errors} = this.state;
        console.log('---!------',!errors.title);
        console.log('---!!------',!!errors.title);
        return (   
            <form onSubmit={this.onSubmitForm}>
                <h1>Додати гру</h1>
                <div>
                    <label>Назва</label>
                    <input 
                        type="text" 
                        name="title"
                        value={title}
                        onChange={this.handleTextChange} />
                        {!!errors.title ? <span>{errors.title}</span> : ''}  
                </div>
                <div>

                </div>
                <input type="submit" value="Додати" />
            </form>
            );
    }
}
 
export default GameForm;