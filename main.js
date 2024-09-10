import * as THREE from 'three';

const scene= new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight,0.1,100);
const renderer=new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry=new THREE.BoxGeometry(1,1,1);
const material= new THREE.MeshBasicMaterial({color:'#ff13f0'});
const cube= new THREE.Mesh(geometry, material);
scene.add(cube);

const lineMaterial1=new THREE.LineBasicMaterial({color:'#13F0FF'});
const points1=[];
points1.push(new THREE.Vector3(-2,0,0));
points1.push(new THREE.Vector3(2,0,0));
const lineGeometry1= new THREE.BoxGeometry().setFromPoints(points1);
const line1= new THREE.Line(lineGeometry1, lineMaterial1);
scene.add(line1);

const lineMaterial2= new THREE.LineBasicMaterial({color:'#13FF22'});
const points2=[];
points2.push(new THREE.Vector3(0,-2, 0));
points2.push(new THREE.Vector3(0,2,0));
const lineGeometry2= new THREE.BoxGeometry().setFromPoints(points2);
const line2= new THREE.Line(lineGeometry2,lineMaterial2);
scene.add(line2);

camera.position.z= 5;

function animate(){
    cube.rotation.x += 0.02;
    cube.rotation.y += 0.02;
    renderer.render(scene,camera);
    renderer.setAnimationLoop(animate);
}
animate();

