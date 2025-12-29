import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Loader } from '@react-three/drei';

const CanvasContainer = ({ children }) => {
    return (
        <>
            <div className="fixed top-0 left-0 w-full h-full -z-10 bg-dark">
                <Canvas
                    shadows
                    camera={{ position: [0, 0, 10], fov: 45 }}
                    dpr={[1, 2]} // Optimize pixel ratio
                >
                    <Suspense fallback={null}>
                        {children}
                    </Suspense>
                </Canvas>
            </div>
            <Loader />
        </>
    );
};

export default CanvasContainer;
