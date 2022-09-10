import { database } from '../firebase';
import { ref, set, get, onValue, remove } from 'firebase/database';
import React from 'react';
const Students = () => {
    //Add student , update user use update or set
    const handleAddStudent = async () => {
        await set(ref(database, 'students/' + 2), {
            username: 'TranDung',
            email: 'trandungksnb00@gmail.com',
            profile_picture:
                'https://www.facebook.com/photo/?fbid=592945845519764&set=a.118037429677277',
        });
    };

    //Get student
    React.useEffect(() => {
        const student = ref(database, 'students/' + 2);
        onValue(student, (data) => {
            const dt = data.val();
            console.log(dt);
        });
    }, []);

    //Get students
    React.useEffect(() => {
        const students = ref(database, 'students');
        onValue(students, (data) => {
            const dt = data.val();
            console.log(dt);
        });
    }, []);

    //Delete student
    const handleDeleteStudent = async () => {
        const student = ref(database, 'students/' + 1);
        await remove(student);
    };
    return (
        <div>
            <h1>Students Manage</h1>
            <button onClick={handleAddStudent}>Add student</button>
            <button onClick={handleDeleteStudent}>Delete student</button>
        </div>
    );
};

export default Students;
