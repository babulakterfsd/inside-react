/* eslint-disable no-unused-vars */
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { useEffect, useState } from 'react';

export default function useFirestoreData() {
    const [firestoreData, setFirestoredata] = useState();
    // init services
    const db = getFirestore();

    // user ref
    const userRef = collection(db, 'userCollection');

    // get collection data
    useEffect(() => {
        getDocs(userRef)
            .then((snapshot) => {
                const allUsers = [];
                snapshot.docs.forEach((doc) => {
                    allUsers.push({ ...doc.data(), id: doc.id });
                    // console.log(allUsers);
                    setFirestoredata(allUsers);
                });
            })
            .catch((err) => console.log(err));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return firestoreData;
}
