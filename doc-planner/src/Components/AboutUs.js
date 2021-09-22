import  './AboutUs.css';
import React, { useState, useEffect }  from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import logo from '../imgs/logo.png';
import tuotempo from '../imgs/logo-tuotempo.svg';
import gipo from '../imgs/logo-gipo.svg';
import clinicloud from '../imgs/logo-clinicloud.svg';
import flag from '../imgs/flag.png';
import visits from '../imgs/visits.png';
import patients from '../imgs/patients.png';
import doctors from '../imgs/doctors.png';
import warsaw from '../imgs/warsaw.png';
import barcelona from '../imgs/barcelona.png';
import istanbul from '../imgs/istanbul.png';
import bologna from '../imgs/bologna.png';
import curitiba from '../imgs/curitiba.png';
import mexico_city from '../imgs/mexico_city.png';
import rome from '../imgs/rome.png';

// import NavBar from './NavBar';

const Part1_1 = (props) => {
    return (
        <div>
            {/* <div id="part1">
      <div class="global_margin"> */}
        <div class="img1">
          <img src={logo} width="40px" height="auto" alt="" />
          <p>Making the healthcare experience more human</p>
        </div>
        <div class="paragraphs">
          <div>
            <p>We want patients to find the perfect doctor and book an appointment in the most easy way. The patient
              journey should be enjoyable, and that's why we are always next to them: to help them find the best
              possible care. Anytime, anywhere.</p>
          </div>
          <div>
            <p>We also help doctors to better manage their practice and build their online reputation. With our
              integrated end-to-end solution, doctors are able not only to improve their online presence, but also to
              devote their time to what really matters: their patients.</p>
          </div>
        </div>
        </div>
        // </div>
        // </div>
    );
}
const Part1_2 = (props) => {
    const [countries, setContries] = useState([]);
    const [countries2, setContries2] = useState([]);
    const [countries3, setContries3] = useState([]);

    useEffect(() => {

        axios.get('http://localhost:5002/countries/find_countries').
        then(response=> {
        setContries(response.data.map(country => country.country));
        //  console.log("entered "+ country);
        });
        axios.get('http://localhost:5002/countries/find_countries2').
        then(response=> {
        setContries2(response.data.map(country => country.country));
        //  console.log("entered "+ country);
        })
        axios.get('http://localhost:5002/countries/find_countries3').
        then(response=> {
        setContries3(response.data.map(country => country.country));
        //  console.log("entered "+ country);
        });
      },[]);

    let styleP1 = {
        fontSize: "25px",
        fontWeight: 350,
        marginBottom: "10px"
    }
    let styleP2 = {
        fontSize: "26px",
        fontWeight: 100,
        ineHeight: 1.2,
        marginTop: "10px"
    }
    const GoToLink = () => {
        switch (document.getElementById("Select1").value)
        {
            case "Chile" : window.open("https://www.doctoralia.cl/"); break;
            case "Brazile" : window.open("https://www.doctoralia.com.br/"); break;
            case "Argentina" : window.open("https://www.doctoraliar.com/"); break;
            case "Colombia" : window.open("https://www.doctoralia.co/"); break;
            case "Czech" : window.open("https://www.znamylekar.cz/"); break;
            case "Italy" : window.open("https://www.miodottore.it/"); break;
            case "Mexico" : window.open("https://www.doctoralia.com.mx/"); break;
            case "Peru" : window.open("https://www.doctoralia.pe/"); break;
            case "Poland" : window.open("https://www.znanylekarz.pl/"); break;
            case "Portugal" : window.open("http://www.doctoralia.com.pt/"); break;
            case "Spain" : window.open("https://www.doctoralia.es/"); break;
            case "Turkey" : window.open("https://www.doktortakvimi.com/"); break;
        }
    }
    const GoToLink2 = () => {
        switch (document.getElementById("Select2").value)
        {
            case "Chile" : window.open("https://www.doctoralia.cl/"); break;
            case "Brazile" : window.open("https://www.doctoralia.com.br/"); break;
            case "Argentina" : window.open("https://www.doctoraliar.com/"); break;
            case "Colombia" : window.open("https://www.doctoralia.co/"); break;
            case "Czech" : window.open("https://www.znamylekar.cz/"); break;
            case "Italy" : window.open("https://www.miodottore.it/"); break;
            case "Mexico" : window.open("https://www.doctoralia.com.mx/"); break;
            case "Peru" : window.open("https://www.doctoralia.pe/"); break;
            case "Poland" : window.open("https://www.znanylekarz.pl/"); break;
            case "Portugal" : window.open("http://www.doctoralia.com.pt/"); break;
            case "Spain" : window.open("https://www.doctoralia.es/"); break;
            case "Turkey" : window.open("https://www.doktortakvimi.com/"); break;
        }
    }
    const GoToLink3 = () => {
        switch (document.getElementById("select2").value)
        {
            case "Brazile" : window.open("http://clinicas.doctoralia.com.br/software-de-gestao-para-clinicas-e-centros"); break;
            case "Czech" : window.open("https://lekar.znamylekar.cz/pro-zarizeni"); break;
            case "Italy" : window.open("http://centrimedici.miodottore.it/saas/funzionalita"); break;
            case "Mexico" : window.open("http://clinicas.doctoralia.com.mx/software-gestion-clinicas"); break;
            case "Poland" : window.open("http://placowka.znanylekarz.pl/system-od-znanylekarz"); break;
            case "Spain" : window.open("https://clinicas.doctoralia.es/software-gestion-clinicas"); break;
            case "Turkey" : window.open("http://kurumsal.doktortakvimi.com/"); break;
        }
    }
    const GoToLink4 = () => {
        switch (document.getElementById("select3").value)
        {
            case "Brazile" : window.open("http://clinicas.doctoralia.com.br/tuotempo"); break;
            case "Italy" : window.open("http://centrimedici.miodottore.it/marketplace/funzionalita"); break;
            case "Mexico" : window.open("http://clinicas.doctoralia.com.mx/tuotempo"); break;
            case "Poland" : window.open("http://placowka.znanylekarz.pl/poznaj-tuotempo"); break;
            case "Spain" : window.open("https://clinicas.doctoralia.es/tuotempo"); break;
        }
    }
    return (
        <div>
            <div className="cards">
          <div id="card1" className="cards_style">
            <div>
              <span><i className="fas fa-users fa-2x" style={{color: "white"}}></i></span>
              <p style={styleP1}>For patients</p>
              <p style={styleP2}>Find a doctor, book a
                visit and solve any health-related doubt</p>
            </div>
            <div>
              <select className="select_style" id="Select1" onChange={GoToLink}>
              <option value="" className="select_style">Choose a country</option>
              {
                        countries.map(function(user) {
                        return <option key={user} value={user}>{user}
                        </option>;
                        })
                }
                
                {/* <option >Argentina</option>
                <option >Brazil</option>
                <option >Chile</option>
                <option >Colombia</option>
                <option >Czech</option>
                <option >Italy</option>
                <option >Mexico</option>
                <option >Peru</option>
                <option >Poland</option>
                <option >Portugal</option>
                <option >Spain</option>
                <option >Turkey</option> */}
              </select>
            </div>
          </div>
          <div id="card2" className="cards_style">
            <div>
              <span><i className="fas fa-user-md fa-2x" style={{color: "white"}}></i></span> 
              <p style={styleP1}>For doctors</p>
              <p style={styleP2}>Save time managing visits and cut no-shows by half</p>
            </div>
            <div>
              <select className="select_style" id="Select2" onChange={GoToLink2}>
                <option value="" className="select_style">Choose a country</option>
              {
                        countries.map(function(user) {
                        return <option key={user} value={user}>{user}
                        </option>;
                        })
                }
                {/* <option >Argentina</option>
                <option >Brazil</option>
                <option >Chile</option>
                <option >Colombia</option>
                <option >Czech</option>
                <option >Italy</option>
                <option >Mexico</option>
                <option >Peru</option>
                <option >Poland</option>
                <option >Portugal</option>
                <option >Spain</option>
                <option >Turkey</option> */}
              </select>
            </div>
          </div>
          <div id="card3" className="cards_style">
            <div>
              <span><i className="fas fa-user-md fa-2x" style={{color: "white"}}></i></span> 
              <p style={styleP1}>For clinics</p>
              <p style={styleP2}>Deliver an exceptional patient experience in your clinic</p>
            </div>
            <div>
              <select className="select_style" id="select2" onChange={GoToLink3}>
                <option value="" className="select_style">more than 20 specialists</option>
              {
                        countries2.map(function(user) {
                        return <option key={user} value={user}>{user}
                        </option>;
                        })
                }
                {/* <option >Brazil</option>
                <option >Czech</option>
                <option >Italy</option>
                <option >Mexico</option>
                <option >Poland</option>
                <option >Spain</option>
                <option >Turkey</option> */}
              </select>
              <select className="select_style" id="select3" onChange={GoToLink4}>
                <option value="" className="select_style">2 to 20 specialists</option>
                {
                        countries3.map(function(user) {
                        return <option key={user} value={user}>{user}
                        </option>;
                        })
                }
                {/* <option >Brazil</option>
                <option >Italy</option>
                <option >Mexico</option>
                <option >Poland</option>
                <option >Spain</option> */}
              </select>
            </div>
          </div>
        </div>
        </div>
    );
}
const Part1_3 = (props) => {
    const tuotempoGo = () => {
        window.open("https://www.tuotempo.com/fr/");
    }
    const gipoGo = () => {
        window.open("https://www.gipo.it/");
    }
    const clinicloudGo = () => {
        window.open("https://clinic-cloud.com/");
    }
    return (
        <div>
            <div className="partners">
          <div className="left_part">
            <p>We are a global company<br/>with local culture</p>
          </div>
          <div className="right_part">
            <a href="#"><img src={tuotempo} onClick={tuotempoGo} alt="" /></a>
            <a href="#"><img src={tuotempo} onClick={tuotempoGo} alt="" /></a>
            <a href="#"><img src={gipo} onClick={gipoGo} alt="" /></a>
            <a href="#"><img src={gipo} onClick={gipoGo} alt="" /></a>
            <a href="#"><img src={gipo} onClick={gipoGo} alt="" /></a>
            <a href="#"><img src={clinicloud} onClick={clinicloudGo} alt="" /></a>
            <a href="#"><img src={clinicloud} onClick={clinicloudGo} alt="" /></a>
          </div>
        </div>
        </div>
    );
}

const Part1 = (props) => {
    return (
        <div>
            <div id="part1">
                <div class="global_margin">
                    <Part1_1 />
                    <Part1_2 />
                    <Part1_3 />
                </div>
            </div>
        </div>
    );
}

const Part2Card = (props) => {
    return (
        <div>
            <img src={props.img_src} alt={props.img_alt} />
            <p className="card_title">{props.title}</p>
            <p className="card_p">{props.p}</p>
        </div>
    );
}

const Part2 = (props) => {
    return (
        <div>
            <div className="part2">
                <div className="global_margin2">
                    <div className="text">
                        <p className="left_part2">The world's biggest healthcare platform</p>
                        <p className="pp2">We work from 7 offices all over the world, bringing Docplanner<br/>Group to life in a dozen countries.</p>
                    </div>
                    <div className="cards2">
                        <div className="c1 display_cards">
                            <Part2Card img_src={flag} img_alt="flag" title={["Leader in 11", <br/>,"countries"]} p="Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Colombia, Brazil, Argentina, Peru and Chile"/>
                        </div>
                        <div className="c2 display_cards">
                            <Part2Card img_src={visits} img_alt="visits" title={["4.8 million", <br/>,"appointments"]} p="boked last month"/>
                        </div>
                        <div className="c3 display_cards">
                            <Part2Card img_src={patients} img_alt="patients" title={["61.9 mln unique", <br/>,"patients"]} p="visit our websites each month"/>
                        </div>
                        <div className="c4 display_cards">
                            <Part2Card img_src={doctors} img_alt="doctors" title={["92.5k active", <br/>,"doctors"]} p="trust our solutions"/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

const Part3Card = (props) => {
    const Open = (link) => {
        // window.open(link);
        console.log(link);
    }
    return (
        <div>
            <div class="Card">
                <img src={props.img_src} alt={props.img_alt} style={{width:"100%"}} />
                <div class="card_cnt">
                    <p>{props.p}</p>
                    <a href="#"  onClick={() => Open(props.img_link)}>SEE OPENINGS</a>
                </div>
            </div>
        </div>
    );
}
const Part3 = (props) => {
    return (
        <div>
            <div class="part3">
                <div class="global_margin">
                <p class="left_part3">Improve the lives of millions.<br/>Change yours forever</p>
                <p class="card_p c_width">More than 1400 team mates share our same vision, goals and passion. With offices in Warsaw, Barcelona, Istanbul, Rome, Bologna, Mexico City and Curitiba, our search for great talent never stops.</p>
                <div class="imgs_cards">
                    <Part3Card img_src={warsaw} img_alt="warsaw" p="Warsaw" img_link="Warsaw link"/>
                    <Part3Card img_src={barcelona} img_alt="barcelona" p="Barcelona" img_link="Barcelona link"/>
                    <Part3Card img_src={istanbul} img_alt="istanbul" p="Istanbul" img_link="Istanbul link"/>
                    <Part3Card img_src={bologna} img_alt="bologna" p="Bologna" img_link="Bologna link"/>
                    <Part3Card img_src={curitiba} img_alt="curitiba" p="Curitiba" img_link="Curitiba link"/>
                    <Part3Card img_src={mexico_city} img_alt="mexico city" p="Mexico city" img_link="Mexico_city link"/>
                    <Part3Card img_src={rome} img_alt="rome" p="Rome" />
                </div>

                <JoinUs p="Sounds interesting? Join us now!" a_p="SEE ALL CURRENT OPENINGS"/>
                
                </div>
            </div>
            
        </div>
    );
}

const JoinUs = (props) => {
    const ChangeColor = () => {
        document.getElementById("a2").style.color="#00b39b";
        document.getElementById("a1").style.color="#ababab";
    }
    return (
        <div>
            <div class="part3">
                <div class="global_margin">
                    <div class="join-us">
                        <p>{props.p}</p>
                        <NavLink onClick={ChangeColor} to='/career'>{props.a_p}</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

const Footer = (props) => {
    return (
        <div>
            <footer>
            <hr/>
            <div class="global_margin">
                <div class="footer_content">
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
                        <p>This site uses cookies to deliver services in accordance with this Privacy Policy. You can specify the conditions for storing or accessing cookies on your browser.</p>
                        <p>www.docplanner.com © 2021</p>
                </div>
            </div>
            </footer>
        </div>
    );
}



const AboutUs = (props) => {
    return (
        <div>
            <Part1 />
            <Part2 />
            <Part3 />
            <Footer />
        </div>
    );
}

export default AboutUs;