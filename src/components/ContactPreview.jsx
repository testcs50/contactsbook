import React from 'react';
import { Link } from 'react-router-dom';

const ContactPreview = props => {

    let fullname = props.fullname;
    let phone = props.phone;

    if (props.searched) {
        const regex = new RegExp(`(${props.searched})`, 'i');

        if (!fullname.match(regex) && !phone.match(regex)) return null;

        fullname = fullname.split(regex)
            .filter(item => item !== '')
            .map((item, id) => {
                if(item.toLowerCase() === props.searched.toLowerCase()) {
                    return <span key={ id } className="contact-preview__searched">{ item }</span>;
                }
                return <span key={ id }>{ item }</span>;
            });
        phone = phone.split(regex)
            .filter(item => item !== '')
            .map((item, id) => {
                if(item.toLowerCase() === props.searched.toLowerCase()) {
                    return <span key={ id } className="contact-preview__searched">{ item }</span>;
                }
                return <span key={ id }>{ item }</span>;
            });
    }

    return (
        <Link className="contact-preview" to={ `/contacts/${props.id}` }>
            <div className="contact-preview__fullname">{ fullname }</div>
            <div className="contact-preview__phone">{ phone }</div>
            <hr className="contact-preview__hr" />
        </Link>
    )
}

export default ContactPreview;