import { Canvas } from "@react-three/fiber";
import { Planet } from "../components/planet";
import { Environment, Float, Lightformer } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import AnimatedTextLines from "../components/AnimatedTextLines";
const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const text = `I help growing brands and startups gain an
unfair advantage through premium
results driven webs/apps`;
  return (
    <section id="home" className="flex flex-col justify-end min-h-screen">
  <div className="flex flex-col justify-center gap-12 pt-16 sm:gap-16">
    <p className="font-light text-sm tracking-[0.5rem] uppercase px-10 text-black">404 No Bugs Found</p>
    <div className="px-10">
      <h1 className="flex flex-col flex-wrap gap-12 text-black uppercase banner-text-responsive sm:gap-16 md:block mb-2">Ali Elnoby</h1>
    </div>
  </div>
  <div className="relative px-10 text-black">
    <div className="absolute inset-x-0 border-t-2"/>
    <div className="py-12 sm:py-16 text-end">
      <AnimatedTextLines text={text} className='font-light uppercase value-text-responsive' />
    </div>
  </div>
      <figure
        className="absolute inset-0 -z-50"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas
          shadows
          camera={{ position: [0, 0, -10], fov: 17.5, near: 1, far: 20 }}
        >
          <ambientLight intensity={0.5} />
          <Float speed={0.5}>
            <Planet scale={isMobile ? 0.7 : 1} />
          </Float>
          <Environment resolution={256}>
            <group rotation={[-Math.PI / 3, 4, 1]}>
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[0, 5, -9]}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[0, 3, 1]}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[-5, -1, -1]}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[10, 1, 0]}
                scale={16}
              />
            </group>
          </Environment>
        </Canvas>
      </figure>
    </section>
  );
};

export default Hero;