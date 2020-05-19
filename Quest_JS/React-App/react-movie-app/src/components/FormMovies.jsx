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
        e.preventDefault()
        const url = "https://post-a-form.herokuapp.com/api/movies"
        Axios.post(url, this.state)
            .then(response => response.data)
            .then(response => { alert(`Your form is correctly send to ${response.id}`) })
            .catch(e =>
                { console.error(e)
                alert(`WTF is happening: ${e.message}`) }
                )
    }

    render() {
        return (
            <>
                <form  method="post" name="favMovies" onSubmit={this.submitForm}>
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

                            />
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }
}

export default FormMovies