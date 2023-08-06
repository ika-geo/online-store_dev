import './radioInput.css'



const RadioInput = ({item, name, handleFilterCategory}) => {

    //scroll to top after filter


    return (
        <div className='radioBlock'>
            <input type="radio" id={item} name={name} value={item} onChange={handleFilterCategory}/>
            <label htmlFor={item}>{item}</label>
        </div>
    );
};

export default RadioInput;