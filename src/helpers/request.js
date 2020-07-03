import { database } from '../firebase';

export const requestDoc = (collection, docPath) => {
  return new Promise((resolve, reject) => {
    if (docPath) {
      database
        .collection(collection)
        .doc(docPath)
        .get()
        .then(doc => {
          if (doc.exists) {
            resolve(doc.data());
          }
        })
        .catch((err) => {
          reject(err);
        });
    } else {
      const temp = [];

    }
  });
};

export const requestCollection = (collection) => {
  return new Promise((resolve, reject) => {
    const tempCollection = [];
    database
      .collection(collection)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach(doc => {
          if (doc.exists) {
            const tempDoc = {
              id: doc.id,
              ...doc.data(),
            };
            tempCollection.push(tempDoc);
          }
        });
        resolve(tempCollection);
      })
      .catch((err) => {
        reject(err);
      })
  });
};
