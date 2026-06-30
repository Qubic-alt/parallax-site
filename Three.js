// Initialize Three.js Scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Load your Techfest Model
const loader = new GLTFLoader();
loader.load('path/to/robot_model.glb', (gltf) => {
    const model = gltf.scene;
    scene.add(model);

    // GSAP Scroll Animation
    gsap.to(model.rotation, {
        y: Math.PI * 2, // Rotate full circle
        scrollTrigger: {
            trigger: ".content-section", // The HTML section that triggers the move
            start: "top bottom", 
            end: "bottom top",
            scrub: true // Link animation progress directly to scroll bar
        }
    });
});