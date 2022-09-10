import React, { useRef } from 'react';
import { storage } from '../firebase';
import { ref, uploadBytes } from 'firebase/storage';
const Storage = () => {
    const [file, setFile] = React.useState(null);
    const fileRef = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        const storageRef = ref(storage, `images/${file.name}`);
        uploadBytes(storageRef, file).then((snapshot) => {
            console.log('Uploaded successfully!');
        });
        setFile(null);
        fileRef.current.value = '';
    };
    return (
        <div>
            <h1>Storage Page</h1>
            <form onSubmit={handleSubmit}>
                <input
                    ref={fileRef}
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Storage;
