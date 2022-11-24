import React, {useState} from 'react';

import './UserMenu.scss';

const UserMenu = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const handleOpeninig = () => {
        setIsOpen(!isOpen);

        const event = new CustomEvent("menu-open", {
            detail: {
              isOpen: !isOpen
            }
        });

        document.dispatchEvent(event);

    }
    return (
        <div className='user-menu'>
            <button className="action" onClick={handleOpeninig}>Profile</button>
            {isOpen && (
                <ul className="menu" >
                    <li>Profile</li>
                    <li>Settings</li>
                    <li>Logout</li>
                </ul>
            )}
        </div>
    )
}

export default UserMenu;