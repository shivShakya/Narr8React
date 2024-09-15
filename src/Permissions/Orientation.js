export default function requestOrientationSensorPermission() {
    if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
        DeviceOrientationEvent.requestPermission()
            .then(permissionState => {
                if (permissionState === 'granted') {

                } else {
                    ZapparThree.permissionDeniedUI();
                    console.log('Permission denied for orientation sensor');
                }
            })
            .catch(console.error);
    } 
}