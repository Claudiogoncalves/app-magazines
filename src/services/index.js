import * as firebase from 'firebase';

export default class Services {
  getDataBaseMagazine() {
    return new Promise((resolve, reject) => {
      firebase.database().ref('magazines').once('value', (snapshot) => {
        const response = snapshot.val();
        let responseData = Object.keys(response).map(i => response[i]);

        responseData = responseData.sort((a, b) => {
          if (a.id > b.id) {
            return 1;
          }
          if (a.id < b.id) {
            return -1;
          }
          return 0;
        });

        resolve(responseData);
      });
    });

  }
}
