import React from 'react'

const DropDown = ({title,options,func}) => {
  return (
    <div className="select">
      <select defaultValue="0" name="format" id="format" className="select-box" onChange={func}>
        <option value="0" disabled>
          {title}
        </option>
        
        {
            options.map((o,id) => (
                <option value={o} key={id}>
                 {o.toUpperCase()}
           </option>
            ))
        }


      </select>
    </div>
  )
}

export default DropDown
