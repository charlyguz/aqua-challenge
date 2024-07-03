import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Model = () => {
    const { scene } = useGLTF('/../public/MODELOS 3D/test2.gltf');
    const ref = useRef();

    useFrame(() => {
        ref.current.rotation.y -= 0.0005; // Ajusta la velocidad de rotación según sea necesario
    });

    return <primitive ref={ref} object={scene} scale={1} />;
};

const SolarModel = () => {  
    return (
    <Canvas
        camera={{ position: [-2, 3, 6], fov: 50 }}
        style={{ width: '100%', height: '100%' }}
    >
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} />
        <Suspense fallback={null}>
            <Model />
        </Suspense>
        <OrbitControls />
    </Canvas>
    );
}

export default SolarModel;