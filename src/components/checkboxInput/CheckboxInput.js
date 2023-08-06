import './checkboxInput.css'



const CheckboxInput = ({id, name, value, LabelText, handelOutOfStock}) => {

    //scroll to top after filter


    return (
        <div className='checkboxInput'>
            <input type="checkbox" id={id} name={name} value={value} onChange={handelOutOfStock}/>
            <label htmlFor={id}>{LabelText}</label>
        </div>
    );
};

export default CheckboxInput;