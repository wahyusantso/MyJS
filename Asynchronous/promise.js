//handling callback
/*
function getProvinces(countryId, callback) {
    setTimeout(() => {
      if (countryId === 'id') {
        callback(null, [
          { id: 'id-jk', name: 'Jakarta' },
          { id: 'id-bt', name: 'Banten' },
          { id: 'id-jr', name: 'Jawa Barat' },
        ]);
        return;
      }
  
      callback(new Error('Country not found'), null);
    }, 1000);
  }
  **/

//adding promise
function getProvinces(countryId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (countryId === 'id') {
        resolve([
          { id: 'id-jk', name: 'Jakarta' },
          { id: 'id-bt', name: 'Banten' },
          { id: 'id-jr', name: 'Jawa Barat' },
        ]);
        return
      }

      reject(new Error('Country not found'));
    }, 3000);
  });
}

getProvinces('id')
.then(country => console.log(country))
.catch(err => console.log(err.message));

module.exports = { getProvinces: getProvinces };
