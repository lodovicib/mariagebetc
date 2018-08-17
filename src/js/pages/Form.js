import React from 'react';
import { Input, Button, Textarea } from 'muicss/react';
import { ToastContainer, toast } from 'react-toastify';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import background from '../../styles/images/background_form.png';
import '../../styles/css/style.css';
import Loader from 'react-loader';
import axios from 'axios'

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoaded: true, firstName: '', lastName: '', firstName2: '', lastName2: '',
            address: '', cp: '', city:'' , mail: '', comment: '' };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.showContent = this.showContent.bind(this);
        this.handleLoad = this.handleLoad.bind(this);
    }

    /*
    componentDidMount() {
        window.addEventListener('load', this.handleLoad);
    }

    componentDidUpdate() {
        window.addEventListener('load', this.handleLoad);
    }
*/
    handleLoad() {
        this.toggleLoader();
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

    toggleLoader() {
        this.setState({ isLoaded: !this.state.isLoaded });
    }

    onSubmit(ev) {
        this.toggleLoader();
        ev.preventDefault();  // prevent form submission
        this.addUser().then(function(res){
            this.setState({
                firstName: '', lastName: '', firstName2: '', lastName2: '',
                address: '', cp: '', city:'' , mail: '', comment: ''
            });
            this.toggleLoader();
            toast("Bien reçu ! Merci :)", {
                type: toast.TYPE.SUCCESS,
                autoClose: true
            });
        }.bind(this)).catch(function(err) {
            this.toggleLoader();
            toast("Il y a un problème : " + err.message, {
                type: toast.TYPE.ERROR,
                autoClose: true
            });
        }.bind(this));
    }

    addUser(){
        this.state.address = this.state.address.replace('\n', ' ');
        return axios({
            method: 'POST',
            dataType: 'jsonp',
            url: 'https://3gnjgd5zrc.execute-api.eu-west-2.amazonaws.com/mariage/invite',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data: this.state
        });
       /* return fetch('https://3gnjgd5zrc.execute-api.eu-west-2.amazonaws.com/mariage/invite', {
            method: 'POST',
            mode: 'CORS',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',

                'Access-Control-Request-Method': 'OPTIONS, POST',
                'Access-Control-Request-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token'
            },
            body: JSON.stringify(this.state)
        });*/
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
        const { isLoaded } = this.state;
        return (
            <div className="App-contain">
                <h1>RSVP</h1>
                <Loader loaded={isLoaded}>
                    <div className="content-bloc-line">
                        <div className="content-bloc">
                            <Container fluid={true}>
                                <Row className="Rsvp-row">
                                    <Col md="8">
                                        <img src={background} className="img-background-form" alt={"disney"} />
                                    </Col>
                                    <Col md="4" className="col-buttons">
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
                                    Veuillez remplir le formulaire ci-dessous pour recevoir votre faire-part:
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
                                        <Textarea label="Commentaire : vous voulez venir avec vos enfants, vous avez des questions, ect" name="comment" floatingLabel={true}
                                                  onChange={this.handleInputChange} value={this.state.comment}/>
                                        <Button type="submit" color="primary">Envoyer</Button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="" id={"answer"} style={{display: 'none'}}>

                        </div>
                    </div>
                </Loader>
            </div>
        );
    }
}

export default Form;