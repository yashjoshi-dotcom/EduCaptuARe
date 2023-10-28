import "./renderer.css";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import { ARButton, XR } from "@react-three/xr";

export default function Renderer() {
  return (
    <>
    <ARButton/>
    <Canvas>
      <XR>
      <Experience />
      </XR>
    </Canvas>
    </>
  );
}
