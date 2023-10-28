import TestBox from "./components/TestBox";
import "./renderer.css";
import { Canvas } from "@react-three/fiber";

export default function Renderer() {
  return (
    <Canvas>
      <TestBox />
    </Canvas>
  );
}
