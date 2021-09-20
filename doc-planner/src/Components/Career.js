import  './Career.css';
import { NavLink } from 'react-router-dom'
import { Link } from 'react-scroll';
import  poland from "../imgs/poland.svg";
import  italy from "../imgs/italy.svg";
import  spain from "../imgs/spain.svg";
import  brazil from "../imgs/brazil.svg";
import  mexico from "../imgs/mexico.svg";
import  turkey from "../imgs/turkey.svg";
import img1 from "../imgs/1.png";
import img2 from "../imgs/2.jpeg";
import img3 from "../imgs/3.jpeg";
import img4 from "../imgs/fb3.jpg";
import comfort from "../imgs/comfort.png";
import focus from "../imgs/focus.png";
import feedback from "../imgs/feedback.png";
import simple from "../imgs/simple.png";
import love from "../imgs/love.png";
import gun from "../imgs/gun.png";
import tick from "../imgs/tick.png";
import btn from "../imgs/button.png";

const Footer = (props) => {
    return (
        <div>
            <footer>
            <div className="global_margin">
                <div className="footer_content">
                    <p>We are leaders in 11 countries: <a href="https://www.znanylekarz.pl/">Poland</a>,
                     <a href="https://www.doktortakvimi.com/">Turkey</a>,
                     <a href="https://www.doctoralia.es/">Spain</a>,
                     <a href="https://www.miodottore.it/">Italy</a>,
                     <a href="https://www.znamylekar.cz/">Czech Republic</a>,
                     <a href="https://www.doctoralia.com.mx/">Mexico</a>,
                     <a href="https://www.doctoralia.co/?">Colombia</a>,
                     <a href="https://www.doctoralia.com.br/">Brazil</a>,
                     <a href="https://www.doctoraliar.com/">Argentina</a>,
                     <a href="https://www.doctoralia.pe/">Peru</a> and 
                     <a href="https://www.doctoralia.cl/">Chile</a></p>
                        <p>his site uses cookies to deliver services in accordance with this Privacy Policy. You can specify the conditions for storing or accessing cookies on your browser.</p>
                        <p>www.docplanner.com © 2021</p>
                </div>
            </div>
            </footer>
        </div>
    );
}

const BFooter = (props) => {
    return (
        <div>
            <div class="BFooter">
                <div class="global_margin">
                    <p id="BFooterP">We make<br/>the healthcare <span id="work_word">+ work</span> experience<br/>more human</p>
                    <p id="BFooterP2">Don’t see the position you’re looking for? We’d still love to <span id="blue_words">hear from you</span></p>
                </div>
            </div>
        </div>
    );
}

const OpenPositions = (props) => {
    return (
        <div>
            <div class="positions">
            <div className="global_margin_2">
                    <p className="j_title">Open Docplanner positions</p>
                </div>
                <div class="global_margin2">
                    
                </div>
            </div>
        </div>
        
    );
}


const GameJob = (props) => {
    return (
        <div>
            <div class="game_job">
                <a href="#"><img src={btn} id="play_btn" alt="button" /></a>
                <a href="#" id="llink"></a>
            </div>
        </div>
        
    );
}

const Values_Perks = (props) => {
    let pp = "Do what you love <3";
    return (
        <div>
            <div className="values_perks">
        <div className="global_margin2">
            <div className="values">
                <div className="values_title j_title">
                    <p>Our values</p>
                </div>
                <div className="col-2-1">
                    <ul>
                        <li>
                            <figure>
                                <img src={comfort} alt="" />
                            </figure>
                            <p className="li_header">Leave your comfort zone</p>
                            <p className="li_p">There were a handful of us when we started. Now there are over 1000 of us on
                                4 continents. We learn and grow so the company can.</p>
                        </li>
                        <li>
                            <figure>
                                <img src={focus} alt="" />
                            </figure>
                            <p className="li_header">Focus on results not tasks</p>
                            <p className="li_p">No one can tell you what to do because.. no one has ever done it yet. Every
                                day is a new challenge. No matter if it’s an evolution or a revolution, you have all the
                                power to start it.</p>
                        </li>
                        <li>
                            <figure>
                                <img src={feedback} alt="" />
                            </figure>
                            <p className="li_header">Give feedback now, directly</p>
                            <p className="li_p">We know very few mind readers. None actually. We don’t read the minds of our
                                users. We A/B test. We don’t read the minds of each other. We ask for and give feedback.
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="col-2-2">
                    <ul>
                        <li>
                            <figure>
                                <img src={simple} alt="" />
                            </figure>
                            <p className="li_header">Keep it simple</p>
                            <p className="li_p">Right.</p>
                        </li>
                        <li>
                            <figure>
                                <img src={love} alt="" />
                            </figure>
                            <p className="li_header">{pp}</p> <p className="li_p">Alright, we work for the money.
                                    But once that is out of the way, why do you do what you do? We believe if you don’t
                                    see meaning in what you do, you should stop right now.</p>
                        </li>
                        <li>
                            <figure>
                                <img src={gun} alt="" />
                            </figure>
                            <p className="li_header">Hustle, hit, never quit</p>
                            <p className="li_p">We’ve been through many highs and lows. Both in business and as a team. We
                                are lucky to have a “losing sucks” syndrome. Which we call “hustle, hit, never quit.”
                                And yes, Nike is better at PR with this one.</p>
                        </li>
                    </ul>

                </div>
            </div>
            <div className="perks">
                <div className="values_title_perks j_title">
                    <p>Perks</p>
                </div>
                <div className="Cnt">
                    <div id="item1">
                        <div id="icon_item1">
                            <img src={tick} alt="" />
                        </div>
                        <div id="p_item1">
                            <p><strong>Atmosphere</strong> - great people, integrations, fruit, food in the kitchen, beers on Friday, parties, additional events during the year.</p>
                        </div>
                    </div>
                    <div id="item1">
                        <div id="icon_item1">
                            <img src={tick} alt="" />
                        </div>
                        <div id="p_item1">
                            <p><strong>English classes</strong> - the possibility to learn English in a very informal atmosphere, with great teachers, in our office, for free.</p>
                        </div>
                    </div>
                    <div id="item3">
                        <div id="icon_item1">
                            <img src={tick} alt="" />
                        </div>
                        <div id="p_item1">
                            <p><strong>Stock Option plan</strong> - we give you a piece of the company, you become a partner and have an impact on what’s going on here.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
        
    );
}

const Together = (props) => {
    let style1 = {
        verticalAlign: "middle",
        display: "inline-block",
        paddingRight: "7px"
    };
    return (
        <div>
            <div className="together">
                <div className="global_margin_2">
                    <p className="j_title">Together at docplanner</p>
                </div>
                <div className="global_margin2">
                    {/* <p className="j_title">Together at docplanner</p> */}
                    <div className="together_grid">
                        <div className="item item1">
                            <a href="https://vimeo.com/158531856" target="_blank">
                            <img src={img1} alt=""/>
                            <span className="play">
                                <svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M32 64C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32zm12-31.67L24.8 21.6v21.46L44 32.33z"
                                    fill-rule="evenodd" opacity=".75"></path>
                                </svg>
                            </span>
                            </a>
                        </div>
                        <div className="item item2">
                            <img src={img2} alt=""/>
                        </div>
                        <div className="item item3">
                            <img src={img3} alt=""/>
                        </div>
                        <div className="item item4">
                            <img src={img4} alt=""/>
                        </div>
                        <div className="item item5">
                            <p>A picture is worth a thousand words, so instead of reading about us, watch what life at
                            DocPlanner looks like.</p>
                            <div>
                                <a href="https://www.instagram.com/?hl=fr" target="_blank" className="instagram"><i
                                className="fab fa-instagram fa-1x"
                                style={style1}></i>instagram</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const Jobs_card = (props) => {
    return (
        <div>
            <div className="Card">
                <p>{props.title}</p>
                <img src={props.img_src} alt=""/>
                <a href="#">SEE OPENINGS</a>
            </div>
        </div>
        
    );
}

const Jobs = (props) => {
    return (
        <div>
            <div className="jobs" id="jobs">
                 <div className="global_margin_2">
                    <p className="j_title">Search for your dream job</p>
                    <div className="imgs_cards">
                        {/* in the lines below I used Link tag to go to a specified tag in the page using
                            its ID. */}
                        {/* <div className="Card">
                            <p>Poland</p>
                            <img src={poland} alt=""/>
                            <a href="#"> <Link  className="Card_a" to="bg_top" activeClass="active"
                                            spy={true} smooth={true}>SEE OPENINGS</Link>
                            </a>
                        </div> */}
                        <Jobs_card title="Poland" img_src ={poland} />
                        <Jobs_card title="Italy" img_src ={italy} />
                        <Jobs_card title="Spain" img_src ={spain} />
                        <Jobs_card title="Brazil" img_src ={brazil} />
                        <Jobs_card title="Mexico" img_src ={mexico} />
                        <Jobs_card title="Turkey" img_src ={turkey} />
                    </div>
        </div>
    </div>
        </div>
        
    );
}

const BgTop = (props) => {
    return (
        <div>
            <div className="bg_top" id="bg_top">
                <div className="article">
                    <p id="title1">Cure your career!</p>
                    <p className="paragraphs"> Our team is a mix of the best specialists. We have a great working atmosphere... Bla
                        bla bla.. Like you've never heard that before!</p>
                    <p className="paragraphs">But you're here and this means you're interested in finding out what it's like to be
                        in our team. For real. So get in touch! Skype or meet us. You will see for yourself, no BS :) We're
                        hiring all the time.</p>
                    <a href="#">SEE ALL OPENINGS</a>
                </div>
            </div>
        </div>
        
    );
}


const Career = (props) => {
    const ChangeColor = () => {
        document.getElementById("a2").style.color="#00b39b";
        document.getElementById("a1").style.color="#ababab";
    }
    window.onload = function() {// I used onload event to keep Career selected.
        ChangeColor();
    }
    return (
        <div>
            <BgTop />
            <Jobs />
            <Together />
            <Values_Perks />
            <GameJob />
            <OpenPositions />
            <BFooter />
            <Footer />
        </div>
        
    );
}

export default Career;