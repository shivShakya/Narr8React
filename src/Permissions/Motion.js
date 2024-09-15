export default function requestMotionSensorPermission() {
    if (typeof DeviceMotionEvent !== 'undefined' && typeof DeviceMotionEvent.requestPermission === 'function') {
        DeviceMotionEvent.requestPermission()
            .then(permissionState => {
                if (permissionState === 'granted') {
                    
                } else {
                    ZapparThree.permissionDeniedUI();
                    console.log('Permission denied for motion sensor');
                }
            })
            .catch(console.error);
    } 
}