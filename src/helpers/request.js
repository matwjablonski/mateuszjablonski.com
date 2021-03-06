import axios from 'axios';
import { database } from '../firebase';

const cors = 'https://cors-anywhere.herokuapp.com/';

export const requestDocAddNew = (collection, data) => {
  return new Promise((resolve, reject) => {
    database
      .collection(collection)
      .doc()
      .set(data)
      .then(res => {
        resolve(res)
      })
      .catch(err => reject(err))
  });
};

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
    }
  });
};

export const requestDocBy = (collection, by, value) => {
  return new Promise((resolve, reject) => {
    database.collection(collection)
      .where(by, '==', value)
      .get()
      .then(querySnapshot => {
        let tempDoc;
        querySnapshot.forEach((doc) => {
          if (doc.exists && !tempDoc) {
            tempDoc = {
              id: doc.id,
              ...doc.data(),
            };
            resolve(tempDoc);
          }
        });
      })
      .catch(err => {
        reject(err);
      })
  })
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

export const requestCollectionBy = (collection, by = { limit: 5 }) => {
  return new Promise((resolve, reject) => {
    const tempCollection = [];
    database
      .collection(collection)
      .orderBy('creationDate', 'desc')
      .limit(by.limit)
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

export const request = (url, data, authKey) => {
  return new Promise((resolve, reject) => {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `apikey ${authKey}`,
    };

    axios
      .post(cors + url, data, { headers: headers })
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  })
};
