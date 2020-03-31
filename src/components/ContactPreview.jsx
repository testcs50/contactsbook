import React from 'react';

const ContactPreview = props => {

    let fullname = props.fullname;
    let phone = props.phone;

    return (
        <>
            <div className="contact-preview__fullname">{ fullname }</div>
            <div className="contact-preview__phone">{ phone }</div>
        </>
    )
}

export default ContactPreview;