import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Model = () => {
    const { scene } = useGLTF('/../public/Test/Fishnet.glb');
    const ref = useRef();
    
    useFrame(() => {
        ref.current.rotation.y += 0.001; // Ajusta la velocidad de rotación según sea necesario
    });

    return <primitive ref={ref} object={scene} scale={1} />;
};;

const Red = () => {
    const orbitControls = useRef();

    return (
        <Canvas
            camera={{ position: [30, 10, 0], fov:15 }}
            style={{ width: '100%', height: '100%' }}
        >
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={1.5} />
            <Suspense fallback={null}>
                <Model />
            </Suspense>
            <OrbitControls
                ref={orbitControls}
                target={[0, 0, 0]}
                enableDamping
                dampingFactor={0.25}
                rotateSpeed={0.1}
                enableZoom={true}
                enablePan={false}
                minDistance={3}
                maxDistance={10}
            />
        </Canvas>
    );
};

export default Red;