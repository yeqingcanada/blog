import React from 'react';

const user = ( props ) => {
    return (
        <div>
        <h3>Create New User</h3>
        <form onSubmit={props.onSubmit}>
          <div className="form-group"> 
            <label>Username: </label>
            <input  type="text"
                    required
                    className="form-control"
                    value={props.userName}
                    onChange={props.onChangeUserName}
                    />
          </div>
          <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-dark" />
          </div>
        </form>
      </div>
    );
};

export default user;