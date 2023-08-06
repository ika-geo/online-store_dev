import './form.scss'


const Form = () => {
    return (
        <div className="contact__block">
            <form action="">
                <input placeholder='Your name' name='name' type="text" required/>
                <input placeholder='Subject' name='subject' type="text" required/>
                <input placeholder='Phone number' name='tel' type="number"/>
                <input placeholder='Your email' name='email' type="email" required/>
                <textarea placeholder='Your text' name="text"></textarea>
                <input type="submit" value='submit'/>
            </form>
        </div>
    );
};

export default Form;