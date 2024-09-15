function FormInput({type, placeholder, id, name, value, handleChange}) {
    return(
        <>
            <input 
            type={type}
            placeholder={placeholder}
            id={id}
            name={name}
            value={value}
            onChange={handleChange}
            />
        </>
    )
}

export default FormInput;