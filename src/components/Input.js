import React from 'react' ;

const styles = {
  root: {
    margin: '5vw'
  },
  input: {
    width: '380px',
    borderRadius: '20px',
    padding: 5,
    border: '3px solid #FFFFFF',
    boxSizing: 'border-box',
    borderRadius: '20px',
  }
};

const Input = ({ value, label, type, name, placeholder, onChange}) => {
    return (
        <div style={styles.root}>
            {label && <label htmlFor="input-field">{label}</label>}
            <input
                type={type}
                value={value}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                style={styles.input}
            />
        </div>
    );
};

export default Input;