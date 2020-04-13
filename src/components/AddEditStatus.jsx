import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, shallowEqual } from 'react-redux';

const AddEditStatus = props => {

    const error = useSelector(state => state.userContacts.error, shallowEqual);
    const isLoading = useSelector(state => state.userContacts.loading, shallowEqual);

    return (
        <div className="addedit-status">
            <div className="addedit-status__wrapper">
                {
                    isLoading
                    ?
                    'Loading...'
                    :
                    (<><div className="addedit-status__message">
                        { error ? error : 'Success!' }
                    </div>
                    <Link to="/contacts" className="addedit-status__to-contacts">To contacts</Link>
                    {
                        props.isAdding
                        ?
                        <div className="addedit-status__add-another" onClick={ props.switchAddEditStatus }>
                            Add another contact
                        </div>
                        :
                        <Link className="contacts__nav-link" to={ `/contacts/${props.currentContactId}` }>Go to the contact</Link>
                    }
                    </>)
                }
            </div>
        </div>
    );
}

export default AddEditStatus;