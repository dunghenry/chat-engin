import React from 'react';
import { db } from '../firebase';
import {
    collection,
    doc,
    addDoc,
    getDocs,
    getDoc,
    deleteDoc,
    updateDoc,
    deleteField,
} from 'firebase/firestore';
import { Box, TextField, Button } from '@mui/material';
const Users = () => {
    const [users, setUsers] = React.useState([]);

    //Get all users
    React.useEffect(() => {
        (async () => {
            const users = await getDocs(collection(db, 'users'));
            users.forEach((user) => {
                setUsers((prev) => [
                    ...prev,
                    user._document.data.value.mapValue.fields,
                ]);
            });
        })();
    }, []);

    //Get single user
    React.useEffect(() => {
        (async () => {
            const docRef = doc(db, 'users', 'vH2ws3Jv65ngE10T5QLV');
            const user = await getDoc(docRef);
            if (user.exists()) {
                console.log(user._document.data.value.mapValue.fields);
            } else {
                console.log('User not found');
            }
        })();
    }, []);
    //Add user
    const handleAddUser = async () => {
        try {
            const docRef = await addDoc(collection(db, 'users'), {
                first: 'Ada',
                last: 'Lovelace',
                born: 1815,
            });
            console.log(docRef);
        } catch (error) {
            console.log(error);
        }
    };

    //Delete user
    const handleDeleteUser = async () => {
        const docRef = doc(db, 'users', 'y4YjUQ2KqiaLj5FpMCms');
        const user = await deleteDoc(docRef);
        console.log(user);
    };

    //Update user
    const handleUpdate = async () => {
        const user = doc(db, 'users', 'vH2ws3Jv65ngE10T5QLV');
        // await updateDoc(user, {
        //     born: deleteField(),
        // });
        await updateDoc(user, {
            first: 'Dung',
            last: 'Tran',
            born: 2001,
        });
    };

    return (
        <div>
            <button onClick={handleAddUser}>Add user</button>
            <button onClick={handleDeleteUser}>Delete user</button>
            <button onClick={handleUpdate}>Delete Field</button>
        </div>
    );
};

export default Users;
