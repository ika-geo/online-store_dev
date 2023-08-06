import {Link} from "react-router-dom";

import './weAre.scss'


const weAre = [
    {title:'10+ Years Experience', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
    {title:'Creative & Innovative', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
    {title:'Committed to Support', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
    {title:'Delivering on Right Time', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
]


const WeAre = () => {
    return (
        <div className='weAre'>
            <div className="wrapper">
                <div className="weAre__block">

                    <div className="weAre__main">
                        <h2>Who We Are?</h2>
                        <p>Providers of High Quality Products with affordable price.</p>
                        <Link to='/'>Explore About Us</Link>
                    </div>


                    <ul className="weAre__list">
                        {weAre.map(item=>
                            <li key={item.title}>
                                <div className="weAre__List__img">
                                    <img src={require("../../../images/about/checkMark.png")} alt="checked"/>
                                </div>
                                <div className="weAre__List__text">
                                    <h3>{item.title}</h3>
                                    <p>{item.text}</p>
                                </div>

                            </li>
                        )}
                    </ul>


                </div>
            </div>
        </div>
    );
};

export default WeAre;