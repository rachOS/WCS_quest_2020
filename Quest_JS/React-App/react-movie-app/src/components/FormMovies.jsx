import React from 'react'
import Axios from 'axios'

class FormMovies extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            title: "",
            poster: "",
            comment: ""
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    submitForm = (e) => {
        e.prevenDefault()
        const url = "https://post-a-form.herokuapp.com/api/movies/"
        Axios.post(url, this.state)
            .then(response => response.data)
            .then(response => { alert(`Your form is correctly send to ${response.id}`) })
            .catch(e => { alert(`WTF is happening: ${e.message}`) })
    }

    render() {
        return (
            <>
                <form action="" method="post" name="favMovies">
                    <fieldset>
                        <legend>Your favorite movies</legend>
                        <div>
                            <legend>Title</legend>
                            <label htmlFor="postTitle"></label>
                            <input
                                id="postTitle"
                                type="text"
                                name="title"
                                onChange={this.onChange}
                                value={this.state.titlr}
                            />
                        </div>
                        <div>
                            <legend>Poster</legend>
                            <label htmlFor="postPoster"></label>
                            <input
                                id="postPoster"
                                type="text"
                                name="poster"
                                onChange={this.onChange}
                                value={this.state.poster}
                                placeholder="paste your image url"
                            />
                        </div>
                        <div>
                            <legend>Comment</legend>
                            <label htmlFor="postComment"></label>
                            <input
                                id="postComment"
                                type="text"
                                name="comment"
                                onChange={this.onChange}
                                value={this.state.comment}
                            />
                        </div>
                        <div>
                            <input
                                type="submit"
                                value="send"
                                onSubmit={this.submitForm}
                            />
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }
}

export default FormMovies