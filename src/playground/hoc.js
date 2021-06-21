import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>This info is {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
           {props.isAdmin &&  <p>This is private Info. Please don't share</p>}
            <WrappedComponent {...props}/>
        </div>
    )
}
const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenicated && <WrappedComponent {...props} />}
            {!props.isAuthenicated && <p>Please login to continue</p>}
        </div>
    )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);
ReactDOM.render(<AuthInfo isAuthenicated={false} info="These are the details"/>, document.getElementById("app"))