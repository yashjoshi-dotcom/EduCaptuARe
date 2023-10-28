import "./renderer.css";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";

export default function Renderer() {
  return (
    <Canvas>
      <Experience />
    </Canvas>
  );
}
