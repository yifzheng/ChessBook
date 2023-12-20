import React from 'react'

const InputGroup = ( { input_name, type, length, label_name, input_on_change } ) => {
   return (
      <div className="input-group">
         <input required type={ type } id={ input_name } className="input" maxLength={ length && length } onChange={input_on_change && input_on_change}/>
         <label htmlFor={ input_name } className="label">{label_name}</label>
      </div>
   )
}

export default InputGroup