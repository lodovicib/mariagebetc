import React, { Component } from 'react';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import '../../styles/css/style.css';
import background from '../../styles/images/background_5.jpg';
import heart from '../../styles/images/keur.png';
// <img src={background} className="img-background-thank" />
class Thankyou extends Component {
    render() {
        return (
            <div className="App-contain" id={"thank-contain"}>
                     <div className="Thankyou">
                            <Container>
                                <Row>
                                    <Col md="12" className="content-thank">
                                        <h1 className="thankHeader">Remerciements</h1>
                                        <br />
                                        <h2>Nous remercions du fond du coeur :</h2>
                                        <b>Marion Pradet</b> la dessinatrice du site. C'est une graphiste qui a beaucoup de talents ! Je vous invite à regarder de plus près ce qu'elle fait sur <a href={"https://marionpradet.myportfolio.com/"} target={"_blank"}>son portfolio</a><br />
                                        <br />
                                        <b>Emma Aubert alias Mighty Mama</b> qui retouche toutes les photos. Elle réalise de très jolis dessins d'animaux (également sur objets) et peut réaliser des dessins de vos petits animaux préférés sur commande. Venez faire un tour sur <a href={"https://www.facebook.com/Emma-Auber-Mighty-Mama-Cr%C3%A9a-340924696007047/"} target={"_blank"}>sa page Facebook</a> pour en savoir plus<br />
                                        <br />
                                        <b>Arthur Cavagné</b> qui rédige les articles du blog. C'est également un grand dessinateur (sau sens propre comme au figuré) ! <a href={"https://www.facebook.com/artcavagne/)"} target={"_blank"}>Voici sa page Facebook</a>. Il est aussi l'illustrateur du jeu de rôle : "<a href={"https://www.facebook.com/lesroyaumes/"} target="_blank">Les royaumes de Midgard</a>", qui est basé sur la mythologie Scandinave et Viking. A tester et adopter absolument !<br />
                                        <br />
                                        <img src={heart} className="img-coeur" />
                                        <h2>Merci pour votre implication !</h2>
                                    </Col>
                                </Row>
                            </Container>

                    </div>
                </div>
        );
    }
}

export default Thankyou;