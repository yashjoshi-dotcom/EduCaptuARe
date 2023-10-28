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
      <GLTFLoaderComponent
        url="../../static/models/Phone/phone.gltf"
        position={[0, 0, 0]}
        scale={[1, 1, 1]}
      />
    </>
  );
}
