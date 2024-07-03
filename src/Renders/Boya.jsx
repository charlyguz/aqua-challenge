import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Model = () => {
    const { scene } = useGLTF('/../public/Test/boya.glb'); // Ajusta la ruta aquí si es necesario
    return <primitive object={scene} scale={1} />;
};

const Boya = () => {
    return (
        <Canvas
            camera={{ position: [10, 0, -2], fov: 20 }} // Ajuste de la cámara para una mejor visualización
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
};

export default Boya;
