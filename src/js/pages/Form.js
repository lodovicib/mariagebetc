import React from 'react';
import { Input, Button, Textarea } from 'muicss/react';
import { ToastContainer, toast } from 'react-toastify';
import '../../styles/css/style.css';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.handleInputChange = this.handleInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(ev) {
        ev.preventDefault();  // prevent form submission
        console.log(this.state);
        toast("Bien reçu ! Merci :)", {
            type: toast.TYPE.SUCCESS,
            autoClose: false
        });
        this.setState({firstName: null, lastName: null, firstName2: null, lastName2: null,
            address: null, cp: null, city:null , mail: null, comment: null
        });
        document.getElementById("rsvp-form").reset();
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div className="App-contain">
                <h1>RSVP</h1>
                <div className="line"></div>
                <div className="content-bloc">
                    <div className="bloc">
                        <ToastContainer />
                        Veuillez remplir le formulaire ci-dessous pour recevoir votre fair-part:
                        <form onSubmit={this.onSubmit} id="rsvp-form">
                            <Input type="text" name="lastName" label="Nom*" floatingLabel={true} onChange={this.handleInputChange} value={this.state.lastName} required />
                            <Input type="text" name="firstName" label="Prénom*" floatingLabel={true} onChange={this.handleInputChange} value={this.state.firstName} required />
                            <Input type="text" name="lastName2" label="Nom de la 2ème personne" floatingLabel={true} onChange={this.handleInputChange} value={this.state.lastName2} />
                            <Input type="text" name="firstName2" label="Prénom de la 2ème personne" floatingLabel={true} onChange={this.handleInputChange} value={this.state.firstName2} />
                            <Textarea label="Adresse*" name="address" floatingLabel={true} onChange={this.handleInputChange} value={this.state.address} required />
                            <Input type="number" name="cp" label="Code postal*" floatingLabel={true} onChange={this.handleInputChange} value={this.state.cp} required  />
                            <Input type="text" name="city" label="Ville*" floatingLabel={true} onChange={this.handleInputChange} value={this.state.city} required />
                            <Input type="email" name="mail" label="Email*" floatingLabel={true} onChange={this.handleInputChange} value={this.state.mail} required />
                            <Textarea label="Commentaire" name="comment" floatingLabel={true} onChange={this.handleInputChange} value={this.state.comment} />
                            <Button type="submit" color="primary">Envoyer</Button>
                    </form>
                </div></div>
            </div>
        );
    }
}

export default Form;