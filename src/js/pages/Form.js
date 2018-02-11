import React from 'react';
import { Input, Button, Textarea } from 'muicss/react';
import { ToastContainer, toast } from 'react-toastify';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import background from '../../styles/images/background_form.jpg';
import '../../styles/css/style.css';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleInputChange = this.handleInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.showContent = this.showContent.bind(this);
    }

    showContent(name) {
        if (name === 'address') {
            document.getElementById("address").style.display = 'block';
            document.getElementById("answer").style.display = 'none';
        } else if (name === 'answer') {
            document.getElementById("address").style.display = 'none';
            document.getElementById("answer").style.display = 'block';
        }
    }

    onSubmit(ev) {
        ev.preventDefault();  // prevent form submission
        console.log(this.state);
        toast("Bien reçu ! Merci :)", {
            type: toast.TYPE.SUCCESS,
            autoClose: false
        });
        this.setState({firstName: '', lastName: '', firstName2: '', lastName2: '',
            address: '', cp: '', city:'' , mail: '', comment: ''
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
                <div className="content-bloc-line">
                    <div className="content-bloc">
                        <Container fluid={true}>
                            <Row>
                                <Col md="8">
                                    <img src={background} className="img-background-form" alt={"disney"} />
                                </Col>
                                <Col md="4">
                                    <div className="content-button">
                                        <Button color="primary" onClick={() => { this.showContent("address") }}>
                                            Renseigner mon adresse
                                        </Button>
                                        <br /><br />
                                        <Button color="primary" disabled={true} onClick={() => { this.showContent("answer") }}>
                                            Répondre à l'invitation
                                        </Button><br />
                                        <em>Pas encore disponible</em>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <div className="content-bloc" id={"address"} style={{display: 'block'}}>
                        <div className="bloc">
                            <div className="title-adlery">Renseigner mon adresse</div>
                            <ToastContainer/>
                            <div className="bloc">
                                <br/>
                                Veuillez remplir le formulaire ci-dessous pour recevoir votre fair-part:
                                <form onSubmit={this.onSubmit} id="rsvp-form">
                                    <Input type="text" name="lastName" label="Nom*" floatingLabel={true}
                                           onChange={this.handleInputChange} value={this.state.lastName} required/>
                                    <Input type="text" name="firstName" label="Prénom*" floatingLabel={true}
                                           onChange={this.handleInputChange} value={this.state.firstName} required/>
                                    <Input type="text" name="lastName2" label="Nom de la 2ème personne"
                                           floatingLabel={true} onChange={this.handleInputChange}
                                           value={this.state.lastName2}/>
                                    <Input type="text" name="firstName2" label="Prénom de la 2ème personne"
                                           floatingLabel={true} onChange={this.handleInputChange}
                                           value={this.state.firstName2}/>
                                    <Textarea label="Adresse*" name="address" floatingLabel={true}
                                              onChange={this.handleInputChange} value={this.state.address} required/>
                                    <Input type="number" name="cp" label="Code postal*" floatingLabel={true}
                                           onChange={this.handleInputChange} value={this.state.cp} required/>
                                    <Input type="text" name="city" label="Ville*" floatingLabel={true}
                                           onChange={this.handleInputChange} value={this.state.city} required/>
                                    <Input type="email" name="mail" label="Email*" floatingLabel={true}
                                           onChange={this.handleInputChange} value={this.state.mail} required/>
                                    <Textarea label="Commentaire" name="comment" floatingLabel={true}
                                              onChange={this.handleInputChange} value={this.state.comment}/>
                                    <Button type="submit" color="primary">Envoyer</Button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="" id={"answer"} style={{display: 'none'}}>

                    </div>
                </div>
            </div>
        );
    }
}

export default Form;