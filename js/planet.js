const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
const canvas = document.getElementById('canvasPlanet'); 
const renderer = new THREE.WebGLRenderer({ canvas: canvas }); 
renderer.setSize(800, 800);
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('css/8k_earth_nightmap.jpg');
const geometry = new THREE.SphereGeometry(33, 33, 33);
const material = new THREE.MeshBasicMaterial({ map: texture });
const planet = new THREE.Mesh(geometry, material);
scene.add(planet);
camera.position.z = 50;
function animate() {
    requestAnimationFrame(animate);
    planet.rotation.x += 0.003;
    planet.rotation.y += 0.003;
    renderer.render(scene, camera);
}
animate();
ScrollReveal().reveal('#canvasPlanet', {          
    opacity: 0,                  
    distance: '100px', 
    scale:0.5, 
    origin: 'bottom',   
    duration: 1000,      
    easing: 'ease-out',  
    reset: false,        
    viewFactor: 0.3    
  });
ScrollReveal().reveal('#canvasPlanet', {   
    beforeReveal: function (e) {
        gsap.to(e, {
            x: '50%',           
            scale: 1,          
            opacity: 1,                
            duration: 1,       
            ease: 'power2.out' 
        });
    }
});


  

  



