import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label className="control-label">{label}</label>
      <div>
        <input {...input} className='form-control' />
        <p className="text-danger">
          {touched && error}
        </p>
      </div>
    </div>
  );
}
