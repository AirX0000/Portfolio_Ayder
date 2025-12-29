import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Stars, Float, Sparkles, Cloud } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedParticles = () => {
    const mesh = useRef();

    useFrame((state, delta) => {
        if (mesh.current) {
            mesh.current.rotation.y += delta * 0.05;
            mesh.current.rotation.x += delta * 0.02;
        }
    });

    return (
        <points ref={mesh}>
            <sphereGeometry args={[15, 64, 64]} />
            <pointsMaterial color="#6366f1" size={0.05} transparent opacity={0.5} sizeAttenuation={true} />
        </points>
    )
}

const CyberMesh = () => {
    return (
        <group>
            {/* Core Shape */}
            <Float speed={2} rotationIntensity={1} floatIntensity={1}>
                {/* Main Abstract Shape */}
                <mesh position={[2, 0, 0]} scale={2}>
                    <icosahedronGeometry args={[1, 1]} />
                    <meshBasicMaterial color="#00f3ff" wireframe transparent opacity={0.15} />
                </mesh>
            </Float>

            {/* Secondary accent shape */}
            <Float speed={3} rotationIntensity={2} floatIntensity={0.5}>
                <mesh position={[-3, -2, -2]} scale={1}>
                    <torusKnotGeometry args={[0.5, 0.2, 128, 16]} />
                    <meshBasicMaterial color="#6366f1" wireframe transparent opacity={0.1} />
                </mesh>
            </Float>

            {/* Third subtle shape */}
            <Float speed={1.5} rotationIntensity={1.5} floatIntensity={0.8}>
                <mesh position={[0, 3, -5]} scale={1.5}>
                    <octahedronGeometry args={[1, 0]} />
                    <meshBasicMaterial color="#ff00ff" wireframe transparent opacity={0.05} />
                </mesh>
            </Float>
        </group>
    );
};

const CyberScene = () => {
    return (
        <>
            <color attach="background" args={['#050816']} />

            {/* Dynamic Fog for depth */}
            <fog attach="fog" args={['#050816', 5, 30]} />

            {/* Ambient Stars */}
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={2} />

            {/* Floating Sparkles for "Digital Dust" */}
            <Sparkles count={300} scale={12} size={3} speed={0.4} opacity={1} color="#00f3ff" />
            <Sparkles count={200} scale={15} size={4} speed={0.3} opacity={0.8} color="#6366f1" position={[0, 5, 0]} />

            <ambientLight intensity={1.5} />
            <pointLight position={[10, 10, 10]} intensity={3} color="#00f3ff" />
            <pointLight position={[-10, -5, -10]} intensity={3} color="#6366f1" />

            {/* Moving Particle Sphere */}
            <AnimatedParticles />

            {/* Floating Geometric Shapes */}
            <CyberMesh />
        </>
    );
};

export default CyberScene;
