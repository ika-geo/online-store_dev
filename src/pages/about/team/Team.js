import './team.scss'


const members = [
    {name: 'Luna Bailey', img: "images/about/team (1)", position: 'CEO'},
    {name: 'Harold Flores', img: "images/about/team (2)", position: 'Marketing coordinator'},
    {name: 'Carlos Patterson', img: "images/about/team (3)", position: 'Sales manager'},
    {name: 'Danna Rivera', img: "images/about/team (4)", position: 'SEO'}
]


const Team = () => {
    return (
        <div className='team'>
            <div className="wrapper">
                <div className="team__block">
                    <h1 className="team__title">Out team</h1>
                    <p className='team__text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, accusamus
                        alias blanditiis cum cumque facere illo.</p>

                    <ul className='team__members'>
                        {members.map(item =>
                            <li key={item.name} className='team__member'>
                                <img className='team__member__img' src={require("../../../" + item.img+'.jpg')} alt={item.name}/>
                                <h3 className='memberName'>{item.name}</h3>
                                <p className='memberPosition'>{item.position}</p>
                                <div className="socialMedia">

                                    <a href="https://www.facebook.com/">
                                        <img src={require('../../../images/contact/facebook.png')} alt="facebook"/>
                                    </a>

                                    <a href="https://twitter.com/">
                                        <img src={require('../../../images/contact/twitter.png')} alt="twitter"/>
                                    </a>

                                    <a href="https://www.pinterest.com/">
                                        <img src={require('../../../images/contact/pinterest.png')} alt="pinterest"/>
                                    </a>

                                    <a href="https://www.linkedin.com/">
                                        <img src={require('../../../images/contact/linkedin.png')} alt="Linkedin"/>
                                    </a>


                                </div>
                            </li>
                        )}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Team;