import _ from 'lodash';
import React from 'react';

export default ({ input, options }) => {
  return (
    <div>
      <select {...input} className='form-control' >
        <option />
        { _.map(options, ({ name, value }) => {
            return (
              <option key={value} value={value}>{name}</option>
            );
          })
        }
      </select>
    </div>
  );
}
