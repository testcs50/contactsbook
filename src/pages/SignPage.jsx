import React, { useState } from 'react';

import Authorization from '../modules/Authorization';
import Registration from '../modules/Registration';

const SignPage = () => {

    const [ switchersState, setSwitchersState ] = useState(true);

    const handleClickToAuth = () => {
        setSwitchersState(true);
    }

    const handleClickToReg = () => {
        setSwitchersState(false);
    }

    return (
        <div className="sign">
            <div className="sign__switchers-wrapper">
                <div
                    className={ switchersState ? "sign__switcher sign__switcher--auth" : "sign__switcher" }
                    onClick={ handleClickToAuth }
                >
                    <span>Sign In</span>
                </div>
                <div
                    className={ switchersState ? "sign__switcher" : "sign__switcher sign__switcher--reg" }
                    onClick={ handleClickToReg }
                >
                    <span>Sign Up</span>
                </div>
            </div>
            { switchersState ? <Authorization/> : <Registration/> }
        </div>
    )
}

export default SignPage;