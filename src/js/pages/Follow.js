import React, { Component } from 'react';
import '../../styles/css/style.css';

import test from '../../styles/images/blog/test.JPG';
import art1 from '../../styles/images/blog/art_1.jpg';

class Follow extends Component {
    render() {
        return (
            <div className="App-contain">
                <h1>Suivez-nous</h1>
                <div className="content-bloc-line">
                    <div className="content-bloc">
                        Venez suivre l'avancement des préparatifs de notre mariage
                    </div>
                    <div className="content-bloc">
                        <div className="title-adlery" style={{'marginTop': '20px'}}>C'est entre deux flocons de neige au marché de noël de Munich que tout a commencé !</div>
                        <div className="bloc">
                            <img src={art1} style={{'maxWidth': '500px', 'maxHeight': '500px'}} />
                            <p>
                                &nbsp;&nbsp;&nbsp;&nbsp;Jeudi 7 Décembre, la nuit était tombée lorsque Clément, au détour de la conversation, m'annonce que "Demain, on va au marché de Noël." Ah ? Très bien, pourquoi pas ? "à Munich", précise-t-il. Heu... J'ai bien entendu ?! Je vais passer mon anniversaire dans l'un des plus beaux marchés de Noël du monde ? Ma valise était prête en moins de temps qu'il n'en faut pour épeler "Weihnachtsplätzchen" (ne me demandez pas) !
                                <br />
                                Pour couronner le tout, nous allons passer ce séjour... dans une suite ! N'ayant pas l'habitude qu'il me surprenne (il a du mal à me cacher les choses ^^) pour le coup je ne m'attendais (vraiment) pas à un tel cadeau !
                                <br />
                                Nous passons la première journée sur le marché, qui est magnifique. La nourriture est un peu moins radieuse, les allemands brillant moins par leur gastronomie que par leur alcool, mais nous la diluons dans la bière, ce qui aide beaucoup. Ce ne sont d'ailleurs pas les stands qui manquent et, en bons invités, nous tâchons de nous intégrer du mieux possible.
                                <br />
                                Nous profitons de la soirée pour visiter encore un peu la ville avant d'aller nous réconforter au restaurant. Nos yeux pétillent devant tant de lumières et de décorations de noël ! Je ne cesse de penser qu'il m'a vraiment fait un superbe cadeau.
                                <br />
                                Après le repas nous retournons vite à l'hôtel pour nous réchauffer et achever cette journée ! M'enfin... c'est sans compter sur l'ultime surprise que me réserve Clément.
                                Je me pose dans le canapé ne pensant qu'à une chose : me changer et aller dormir. Mais il me dit d'attendre. "Encore une surprise ?! Il ne m'a pas offert EN PLUS un cadeau pour le jour de mon anniversaire quand même ?!" A peine j'eus le temps de regarder l'heure en me demandant si on était le 9 que je sens sa main sur mon épaule, se mettre devant moi en me disant : "lève-toi stp".
                                A ce moment-là, mon cœur commence à s'emballer "what ?! Mais c'est ce que je pense qui est en train de se passer ou je me fais des idées ?!"
                            </p>
                            <br />
                            <p>
                                &nbsp;&nbsp;&nbsp;&nbsp;On s'imagine toujours que le jour où l'homme de sa vie nous demandera en mariage, il aura un discours clair et émouvant et nous une réponse claire et précise... Ça ne s’est pas vraiment passé comme ça... mais c'est ça qui rend le moment encore plus beau, drôle et à notre image. Je ne vais pas trop détailler ce moment qui reste « notre moment » mais voilà en gros ce qui s'est passé...
                                La voix tremblante, ma main dans la sienne, je le revois encore essayer de me dire, nerveux et tout confus, le discours qu'il avait préparé. De mon côté, je fondais en larmes, réalisant : "Mon dieu ! Ça arrive vraiment ? Ça arrive enfin ?"
                                En terminant maladroitement son discours, il posa un genou à terre et, me présentant une bague magnifique, il me demanda de devenir sa femme.
                                Émue, surprise et tellement heureuse, j'ai bien dû mettre plusieurs minutes à articuler finalement, entre deux sanglots, le "oui" qui me brûlait la gorge...
                                <br />
                                Il s'était promis de me demander en mariage avant mes 28 ans : il l'a fait deux heures avant.
                            </p>
                            <br />
                            C'est là, que l'aventure commence...
                        </div>
                        <div className="date">03/02/2018 18:12</div>
                    </div>
                    <hr/>
                    {/*
                    <div className="content-bloc">
                        <div className="title-adlery">C'est le début de l'aventure</div>
                        <div className="bloc">
                            <img src={test} />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus facilisis nunc augue, ac dignissim urna elementum et. Proin facilisis massa vitae vulputate vulputate. Quisque vitae porta augue. Nam et ligula ut nulla malesuada luctus. Sed ac tincidunt nisi, et malesuada diam. Quisque ipsum urna, aliquam a ante non, venenatis tincidunt nisi. Suspendisse potenti. Vestibulum eget ligula aliquam, suscipit risus sagittis, fringilla elit. Vestibulum dignissim sem quis metus fermentum lacinia. Nunc nec justo ut felis luctus dapibus. Mauris sed ultrices augue, ac auctor ligula.
                            Duis sit amet lorem neque. Integer sagittis nisl elit, sed vehicula ligula malesuada eu. Nam volutpat eget diam varius pulvinar. Aliquam erat volutpat. Etiam placerat nec elit vitae euismod. Aenean pretium, nibh eget aliquam laoreet, massa lectus sodales felis, vel malesuada ipsum nisi vel odio. Mauris bibendum vitae magna nec dapibus. Pellentesque et turpis ipsum. Integer finibus massa vel neque rhoncus, id luctus velit lobortis. Sed sed tincidunt diam, tincidunt scelerisque sapien. Sed in dui metus. Pellentesque volutpat purus at sem fringilla, quis luctus ipsum mattis.

                        </div>
                        <div className="date">03/02/2018 18:12</div>
                    </div>
                    */}
                    </div>
            </div>
        );
    }
}

export default Follow;