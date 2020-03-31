import React from 'react';

import { Alert } from 'antd';

const ErrorHandler = props => {
    return (
        <Alert
            className="alert"
            message="Error"
            description={ props.error }
            type="error"
            showIcon
        />
    );
}

export default ErrorHandler;