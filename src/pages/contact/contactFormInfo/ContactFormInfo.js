import Form from "../../../components/form/Form";
import Info from "./components/Info";
import SocialMedia from "./components/SocialMedia";


import './contactFormInfo.scss'



const ContactFormInfo = () => {
    return (
        <div className="contactFormInfo">
            <div className="wrapper">
                <div className="contactFormInfo__block">
                    <Form/>
                    <div className="contact__info">

                        <Info/>
                        <hr/>
                        <SocialMedia/>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactFormInfo;