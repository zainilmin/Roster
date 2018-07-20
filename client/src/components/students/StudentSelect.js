import _ from 'lodash';
import React from 'react';

export default ({ input, label, meta: { error, touched }, options }) => {
  return (
    <div>
      <label className="control-label">{label}</label>
        <select {...input} className='form-control' >
          <option key={ "Select " + label } value={ "Select " + label }>
            { "Select " + label }
          </option>
          { _.map(options, (item) => {
              return (
                <option key={item} value={item}>{item}</option>
              );
            })
          }
        </select>
        <p className="text-danger">
          {touched && error}
        </p>
    </div>
  );
}