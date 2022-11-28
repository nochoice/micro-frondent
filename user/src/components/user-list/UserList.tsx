import React, {useEffect, useState} from 'react';
import { getUsers } from '../../api/user';

const UserList = () => {
    const [users, setUsers] = useState<any[]>([]);

    useEffect(() => {
        getUsers()
            .then(setUsers);
    }, [])

    
 

    return (
        <div>
            <h1>UserList</h1>

            {users.map(user => (
                <div>
                    {user.name} <br />
                    {user.email}
                </div>
            ))}
        </div>
    )
}

export default UserList;