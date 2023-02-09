import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
        <div className='container my-3'>
      <div>
        <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Name</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name" />
</div>
<label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
<button type="button" class="btn btn-primary">Submit</button>

      </div>
    )
}
};
