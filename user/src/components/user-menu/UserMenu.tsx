import React, {useState} from 'react';

import './UserMenu.scss';

const UserMenu = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <div className='user-menu'>
            <button className="action" onClick={() => setIsOpen(!isOpen)}>Profile</button>
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