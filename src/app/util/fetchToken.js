export async  function getData() {
    return new Promise((resolve, reject) => {
      fetch('https://matrix-backend-alsj.onrender.com/data')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
  