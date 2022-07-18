import React from "react";

const types = {
    username: {
        regex: /^([a-zA-Zà-úÀ-Ú]|\s+)+$/i,
        message:'Nome de usuario invalido',
    },
    password: {
        regex: /^[0-9]{4,6}$/,
        message: 'Ops, senha inválido. Tente novamente!'
    },


    
};

const useForm = (type) => {
const [value, setValue] = React.useState('');
const [error, setError] = React.useState(null);
    
    function validate(value) {
        if(type === false) return true;
        if(value.length === 0) {
            setError('Por favor, preencha os dois campos');
            return false;
        }else if (types[type] && !types[type].regex.test(value)){
            setError(types[type].message);
            return false;
        }else {
            setError(null)
            return true;
        }
    }
    function onChange({ target }) {
        validate(target.value)
        setValue(target.value);

    }

    return { 
        value,
        setValue,
        onChange,
        error,
        validate: () => validate(value),
        onBlur: () => validate(value),
        
    };
};

export default useForm;