import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";

const GLTFLoaderComponent = (props) => {
  const gltf = useLoader(GLTFLoader, props.url);
  return gltf ? (
    <primitive
      object={gltf.scene}
      position={props.position}
      scale={props.scale}
    />
  ) : null;
};

export default GLTFLoaderComponent;
