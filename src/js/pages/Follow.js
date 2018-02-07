import React, { Component } from 'react';
import '../../styles/css/style.css';

import test from '../../styles/images/blog/test.JPG';

class Follow extends Component {
    render() {
        return (
            <div className="App-contain">
                <h1>Suivez-nous</h1>
                <div className="line"></div>
                <div className="content-bloc">
                    <div className="title-blog" style={{'margin-top': '20px'}}>C'est le début de l'aventure</div>
                    <div className="bloc">
                        <img src={test} />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus facilisis nunc augue, ac dignissim urna elementum et. Proin facilisis massa vitae vulputate vulputate. Quisque vitae porta augue. Nam et ligula ut nulla malesuada luctus. Sed ac tincidunt nisi, et malesuada diam. Quisque ipsum urna, aliquam a ante non, venenatis tincidunt nisi. Suspendisse potenti. Vestibulum eget ligula aliquam, suscipit risus sagittis, fringilla elit. Vestibulum dignissim sem quis metus fermentum lacinia. Nunc nec justo ut felis luctus dapibus. Mauris sed ultrices augue, ac auctor ligula.
                        Duis sit amet lorem neque. Integer sagittis nisl elit, sed vehicula ligula malesuada eu. Nam volutpat eget diam varius pulvinar. Aliquam erat volutpat. Etiam placerat nec elit vitae euismod. Aenean pretium, nibh eget aliquam laoreet, massa lectus sodales felis, vel malesuada ipsum nisi vel odio. Mauris bibendum vitae magna nec dapibus. Pellentesque et turpis ipsum. Integer finibus massa vel neque rhoncus, id luctus velit lobortis. Sed sed tincidunt diam, tincidunt scelerisque sapien. Sed in dui metus. Pellentesque volutpat purus at sem fringilla, quis luctus ipsum mattis.

                    </div>
                    <div className="date">03/02/2018 18:12</div>
                </div>
                <hr/>
                <div className="content-bloc">
                    <div className="title-blog">C'est le début de l'aventure</div>
                    <div className="bloc">
                        <img src={test} />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus facilisis nunc augue, ac dignissim urna elementum et. Proin facilisis massa vitae vulputate vulputate. Quisque vitae porta augue. Nam et ligula ut nulla malesuada luctus. Sed ac tincidunt nisi, et malesuada diam. Quisque ipsum urna, aliquam a ante non, venenatis tincidunt nisi. Suspendisse potenti. Vestibulum eget ligula aliquam, suscipit risus sagittis, fringilla elit. Vestibulum dignissim sem quis metus fermentum lacinia. Nunc nec justo ut felis luctus dapibus. Mauris sed ultrices augue, ac auctor ligula.
                        Duis sit amet lorem neque. Integer sagittis nisl elit, sed vehicula ligula malesuada eu. Nam volutpat eget diam varius pulvinar. Aliquam erat volutpat. Etiam placerat nec elit vitae euismod. Aenean pretium, nibh eget aliquam laoreet, massa lectus sodales felis, vel malesuada ipsum nisi vel odio. Mauris bibendum vitae magna nec dapibus. Pellentesque et turpis ipsum. Integer finibus massa vel neque rhoncus, id luctus velit lobortis. Sed sed tincidunt diam, tincidunt scelerisque sapien. Sed in dui metus. Pellentesque volutpat purus at sem fringilla, quis luctus ipsum mattis.

                    </div>
                    <div className="date">03/02/2018 18:12</div>
                </div>
            </div>
        );
    }
}

export default Follow;