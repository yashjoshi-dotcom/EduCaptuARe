import GLTFLoaderComponent from "./components/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { useThree, extend, useFrame } from "@react-three/fiber";

extend({ OrbitControls });

export default function Experience() {
  const { camera, gl } = useThree();
  useFrame((state, delta) => {
    console.log("test");
  });

  return (
    <>
      <orbitControls args={[camera, gl.domElement]} />
      <mesh position={[0, 1, -1]}>
        <boxGeometry/>
        <meshBasicMaterial color={"red"}/>
      </mesh>
    </>
  );
}
