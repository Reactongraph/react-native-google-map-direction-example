class CommonHelper {
  getPosition = () =>
    new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          return resolve({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          reject(error);
        },
        {
          timeout: 20000,
          maximumAge: 10000,
        }
      );
    });
}

export default CommonHelper;
