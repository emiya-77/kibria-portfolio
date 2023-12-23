import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../../components/Loader';
import Bridge from '../../models/Bridge';
import Sky from '../../models/Sky';
import Butterfly from '../../models/Butterfly';
import HomeInfo from '../../components/HomeInfo';


const Home = () => {
    const [isRotating, setIsRotating] = useState(false);
    const [currentStage, setCurrentStage] = useState(1);

    const adjustBridgeForScreneSize = () => {
        let screenScale = null;
        let screenPosition = [0, -6.5, -43];
        let rotation = [0.1, 0, 0];

        if (window.innerWidth < 768) {
            screenScale = [0.9, 0.9, 0.9];
        } else {
            screenScale = [1.7, 1.7, 1.7];
        }

        return [screenScale, screenPosition, rotation];
    }

    const adjustButterflyForScreneSize = () => {
        let screenScale, screenPosition;

        if (window.innerWidth < 768) {
            screenScale = [1, 1, 1];
            screenPosition = [0, -1.5, 0];
        } else {
            screenScale = [2, 2, 2];
            screenPosition = [0, -3, -10];
        }

        return [screenScale, screenPosition];
    }

    const [isBridgeScale, isBridgePosition, isBridgeRotation] = adjustBridgeForScreneSize();
    const [butterflyScale, butterflyPosition] = adjustButterflyForScreneSize();

    return (
        <section className="w-full h-screen relative">
            <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
                {currentStage && <HomeInfo currentStage={currentStage} />}
            </div>
            <Canvas
                className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
                camera={{ near: 0.1, far: 1000 }}
            >
                <Suspense fallback={<Loader></Loader>}>
                    <directionalLight position={[1, 1, 1]} intensity={2} />
                    <ambientLight intensity={0.5} />
                    <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />

                    <Sky isRotating={isRotating} />
                    <Bridge
                        position={isBridgePosition}
                        scale={isBridgeScale}
                        rotation={isBridgeRotation}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                        setCurrentStage={setCurrentStage}
                    />
                    <Butterfly
                        isRotating={isRotating}
                        scale={butterflyScale}
                        position={butterflyPosition}
                        rotation={[0, 20, 0]}
                    />
                </Suspense>
            </Canvas>
        </section>
    )
}

export default Home