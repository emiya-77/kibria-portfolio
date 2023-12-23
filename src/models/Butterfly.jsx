import React, { useEffect, useRef } from 'react'

import butterflyScene from '../assets/3d/butterfly.glb';
import { useAnimations, useGLTF } from '@react-three/drei';

const Butterfly = ({ isRotating, ...props }) => {
    const ref = useRef();
    const { scene, animations } = useGLTF(butterflyScene);
    const { actions } = useAnimations(animations, ref);

    useEffect(() => {
        console.log("Animation Names:", Object.keys(actions));
        if (isRotating) {
            actions['Flying'].play();
        } else {
            actions['Flying'].play();
        }
    }, [actions, isRotating]);
    return (
        <mesh {...props} ref={ref}>
            <primitive object={scene} />
        </mesh>
    )
}

export default Butterfly;