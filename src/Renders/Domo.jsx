import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Model = () => {
    const { scene } = useGLTF('/../public/MODELOS 3D/test2.gltf'); // Ajusta la ruta aquí si es necesario
    return <primitive object={scene} scale={1} />;
};


const Domo = () => { 
    return (
        <Canvas
        camera={{ position: [-2, 3, 6], fov: 50 }}
        style={{ width: '100%', height: '100%' }}
    >
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 10]} intensity={1.5} />
        <Suspense fallback={null}>
            <Model />
        </Suspense>
        <OrbitControls />
    </Canvas>
    );
}

export default Domo;