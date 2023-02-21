import { MeshDistortMaterial, Sphere } from "@react-three/drei";

function AnimatedSphere({scale,color,speed,distort}:{scale:any,color:string,speed:number | undefined ,distort:number | undefined}) {
    return (<Sphere visible args={[1,100,200]} scale={scale}>
        <MeshDistortMaterial color={color} attach="material" distort={distort} speed={speed} roughness={0} />
    </Sphere> );
}

export default AnimatedSphere;