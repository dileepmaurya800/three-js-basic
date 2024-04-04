import * as THREE from 'three'

// 1.SCENE
// 2.OBJECTS (like. geometry, particales, Lights, or import modules )
// 3.Mesh Things like Geometry and Material
// 3A.(Geometry)
// 3B.(Add material)
// 4.camera
// 5.Renderer
// 5A. create Canvas
// 5B. Put into WebGLRenderer proprties as an object argument
// 5C.setSize ratio
// 5D. set into renderer.Render
// 5E. if not seeing your object then set camera position on x,y,z axises for first look

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)