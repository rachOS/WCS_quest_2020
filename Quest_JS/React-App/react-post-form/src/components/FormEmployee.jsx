import React, { Component } from 'react'
import Axios from 'axios'

class FormEmployee extends Component {

    constructor(props) {
        super(props)
        this.state = {
            lastName: '',
            firstName: '',
            email: ''
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitForm = (e) => {
        const url = 'https://post-a-form.herokuapp.com/api/movies/'
        Axios.post(url, this.state)
            .then(res => res.data)
            .then(data => {
                alert(`Employé ajouté avec l'ID ${data.id} !`);
            })
            .catch(e => {
                console.error(e);
                alert(`Erreur lors de l'ajout d'un employé : ${e.message}`);
            });
        e.preventDefault()
    }
    render() {

        return (
            <div className="FormEmployee">
                <h1>Saisie d'un employee</h1>
                <form onSubmit={this.submitForm}>
                    <fieldset>
                        <legend>Informations</legend>
                        <div className="form-data">
                            <label htmlFor="lastname">Nom</label>
                            <input
                                type="text"
                                id="lastname"
                                name="lastName"
                                onChange={this.onChange}
                                value={this.state.lastName}
                            />
                        </div>
                        <div className="form-data">
                            <label htmlFor="firstname">Prénom</label>
                            <input
                                type="text"
                                id="firstname"
                                name="firstName"
                                onChange={this.onChange}
                                value={this.state.firstName}
                            />
                        </div>

                        <div className="form-data">
                            <label htmlFor="email">E-mail</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                onChange={this.onChange}
                                value={this.state.email}
                            />
                        </div>
                        <hr />
                        <div className="form-data">
                            <input type="submit" value="Envoyer" />
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default FormEmployee