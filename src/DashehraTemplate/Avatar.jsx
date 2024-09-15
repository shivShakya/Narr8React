import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';

function Avatar({ position, scale }) {
    const model = useLoader(GLTFLoader, "/avatar.glb");

    let mixer;
    if (model.animations.length) {
        mixer = new THREE.AnimationMixer(model.scene);
        model.animations.forEach(clip => {
            const action = mixer.clipAction(clip);
            action.play();
        });
    }

    useFrame((state, delta) => {
        mixer?.update(delta);
    });

    model.scene.traverse(child => {
        if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
            child.material.side = THREE.FrontSide;
        }
    });

    return (
        <primitive 
            object={model.scene}
            position={position} 
            scale={scale}       
        />
    );
}

export default Avatar;
