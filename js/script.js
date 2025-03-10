// VanillaTilt.init(document.querySelector('#galaxyCanvas'), {
//     max:1,perspective: 600,transition: true,reset: true,reverse:true,duration:1000,easing: "cubic-bezier(.17,.67,.83,.67)",
// })
console.error('адаптации(на мобильных устройствах) мешают первы две автоматические функции в main')
document.addEventListener("DOMContentLoaded", () => {
    const arrow = document.querySelector('.arrow');
    const arrowHead = document.querySelector('.arrow-head');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    arrow.classList.add('active'); 
                }, 100);
                setTimeout(() => {
                    arrowHead.style.opacity = '1'; 
                }, 2200); 
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.9 
    });
    observer.observe(arrow);
});
window.onload = () => {
    const targetElement = document.querySelector('.background');
    if (targetElement) {
        console.log(targetElement);
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    } else {
        console.error('Элемент .background не найден');
    }
}
let forDocumentStyoles = document.readyState === 'loading' ? true : false;
if (forDocumentStyoles) {
    let scrollSpeed = 0;
    let isScrolling = false;
    window.addEventListener("wheel", function (event) {
        event.preventDefault(); 
        scrollSpeed += event.deltaY * 0.09;
        if (!isScrolling) {
            isScrolling = true;
            requestAnimationFrame(smoothScroll);
        }
    }, { passive: false });
    function smoothScroll() {
        scrollSpeed *= 0.87; 
        window.scrollBy(0, scrollSpeed);
        if (Math.abs(scrollSpeed) > 0.5) {
            requestAnimationFrame(smoothScroll);
        } else {
            isScrolling = false;
        }
    }
};
function w(cssFilePath) {
    const styles = document.styleSheets;
    for (var i = 0; i < styles.length; i++) {
        const q = [i];
        try {
            if (styles[i].href && styles[i].href.includes(cssFilePath)) {return true}
        }catch(lid) {continue;}
    }
    return false
}
function op(){document.body.style.opacity = 1}
if (w('style.css')) {main();op();  } else {console.error('false');}
function hoverEff() {
    document.addEventListener('DOMContentLoaded', function () { 
        class ListQ {
            constructor(rays) {
                this.rays = rays;
            }
            funk() {
                this.rays.forEach(element => {  
                    element.addEventListener('mouseover', function () {
                        gsap.to(element, { scale: 1.1 }); element.style.textDecoration = 'underline';
                    });element.addEventListener('mouseleave', ()=>{
                        gsap.to(element, {scale:1});element.style.textDecoration = 'none';
                    })
                });
            }
        }
        if (window.innerWidth > 800) {
            const li1 = document.getElementById('li1'),
                li2 = document.getElementById('li2'),
                li3 = document.getElementById('li3'),
                li4 = document.getElementById('li4'),
                li5 = document.getElementById('li5');
            const db = [li1, li2, li3, li4, li5];  
            const listw = new ListQ(db);
            listw.funk();
            ScrollReveal().reveal(db, {origin: 'left', distance:'50px', opacity:0, interval:70, easing: 'cubic-bezier(0.34, 2.50, 0.64, 1)'})
        };
    });
};


//func main///

function main() {
    ScrollReveal().reveal('.separator3', {
        viewFactor: 0.01,
        afterReveal: function (domEl2) {
          gsap.to(domEl2, { opacity: 1, height:'60vh', duration: 1.5, ease: 'power2.out'});
        }
      });
      ScrollReveal().reveal('.textLign',{origin:'bottom', distance:'50px', duration:1000, opacity:0})
    !function() {
        const textElement = document.querySelector('.contentSet1');
        const textSey = textElement.textContent;
        const letters = [...textSey]; 
        textElement.innerHTML = '';
        letters.forEach(letter => {
            const span = document.createElement('span');
            span.textContent = letter;
            textElement.appendChild(span);
        });
        ScrollReveal().reveal(textElement.querySelectorAll('span'), {
            origin: 'top',
            distance: '30px',
            opacity: 0,
            duration:1000,
            interval: 10
        });
    }();
    !function() {
        const textElement = document.querySelector('.wait');
        const textSey = textElement.textContent;
        const letters = [...textSey]; 
        textElement.innerHTML = '';
        letters.forEach(letter => {
            const span = document.createElement('span');
            span.textContent = letter;
            textElement.appendChild(span);
        });
        ScrollReveal().reveal(textElement.querySelectorAll('span'), {
            origin: 'top',
            delay:1000,
            distance: '30px',
            opacity: 0,
            duration:1000,
            interval: 10
        });
    }();
    const label1 = document.querySelector('#label1')
    , label2 = document.querySelector('#label2')
    , label3 = document.querySelector('#label3')
    , label4 = document.querySelector('#label4')
    , label5 = document.querySelector('#label5')
    , labelsFull = [label1, label2, label3, label4, label5];
    ScrollReveal().reveal(labelsFull, {origin:'bottom', distance:'30px', opacity:0, interval:100, duration:1000});
    const numbers = document.querySelectorAll('.number');
        function animateNumber(element, target) {
            let current = 0;
            const duration = 2000; 
            const step = Math.ceil(target / (duration / 16)); 

            function updateNumber() {
                if (current < target) {
                    current += step;
                    if (current > target) current = target; 
                    element.textContent = current + "%"; // Добавляем знак %
                    requestAnimationFrame(updateNumber);
                }
            }
            updateNumber();
        }
        function checkVisibility() {
            numbers.forEach(number => {
                const rect = number.getBoundingClientRect();
                const isVisible = (
                    rect.top >= 0 &&
                    rect.left >= 0 &&
                    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
                );
                if (isVisible && !number.dataset.animated) {
                    number.dataset.animated = true; 
                    const target = parseInt(number.dataset.target);
                    animateNumber(number, target);
                }
            });
        }
        window.addEventListener('scroll', checkVisibility);
        window.addEventListener('load', checkVisibility);
    const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true
    });
    ScrollReveal().reveal('.brd', {
        afterReveal: function (domEl) {
          gsap.to(domEl, { opacity: 1, width:'80%', duration: 1.5, delay:.2, ease: 'power2.out'});
        }
      });
      ScrollReveal().reveal('.it', {
        afterReveal: function (domEl) {
          gsap.to(domEl, { opacity: 1, width:'80%', duration: 1.5, delay:.2, ease: 'power2.out'});
        }
      });
    //   ScrollReveal().reveal(document.querySelector('.numbers-container'), {origin:'bottom',distance:'40px', scale:0.6, duration:1000})
    ScrollReveal().reveal(document.querySelector('.wait'), {origin:'bottom', distance:'100px', scale:.5, rotate: {y: 100}, duration:2500});
    ScrollReveal().reveal(document.querySelector('.contentH'), {origin:'bottom', distance:'100px', scale:.2, rotate: {y: 100}, duration:2500, delay:200});
    var [t1, t2, t3, t4, t5] = [
        document.getElementById('card-1'),
        document.getElementById('card-2'),
        document.getElementById('card-3'),
        document.getElementById('card-4'),
        document.getElementById('card-5')
      ];
    var csvl = [t1, t2, t3, t4, t5];      
    ScrollReveal().reveal(csvl, {origin:'bottom', distance:'100px', opacity:0, delay:400, trigger:'.body', interval:100, easing: 'cubic-bezier(0.34, 2.50, 0.64, 1)'})
    const text = "PRO8GRAMMING";
    const speed = 100; 
    let index = 0;
    const element = document.getElementById('typedText');
    function typeText() {
      if (index < text.length) {
        element.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeText, speed); 
      }
    }
    typeText(); 
    !function(){
        window.addEventListener("load", function () {
            const preloader = document.getElementById("preloader");
            const content = document.getElementById("content");
            const body = document.body;
            body.classList.add("preloader-active");
            function checkCSSLoaded() {
                return [...document.styleSheets].every(sheet => {
                    try {
                        if (sheet.cssRules.length > 0) return true;
                    } catch (e) {
                        if (e.name === "SecurityError") return true;
                    }
                    return false;
                });
            }
            function waitForCSS(callback, attempts = 200) {
                if (checkCSSLoaded() || attempts <= 0) {
                    setTimeout(callback, 1900); 
                } else {
                    setTimeout(() => waitForCSS(callback, attempts - 1), 50);
                }
            }
            waitForCSS(() => {
                preloader.style.opacity = "0"; 
                setTimeout(() => {
                    preloader.style.display = "none"; 
                    // content.classList.remove("hidden");
                    body.classList.remove("preloader-active"); 
                }, 500); 
            });
        });
    }();
    function scrollindHeadElement() {
        window.addEventListener("scroll", function () {
            let box = document.querySelector("header");
            let body = document.querySelector(".body"); 
            let scrollY = window.scrollY;
            let bodyRect = body.getBoundingClientRect();
            let bodyBottom = bodyRect.bottom + scrollY; 
            let maxTranslateY = Math.max(0, bodyBottom - box.offsetHeight); 
            let scaleValue = Math.max(0.3, 1 - scrollY * 0.0003);
            let opacityValue = Math.max(0, 1 - scrollY * 0.00099);
            let translateYValue = Math.min(scrollY, maxTranslateY); 
            box.style.transform = `translateY(${translateYValue}px) scale(${scaleValue})`;
            box.style.opacity = opacityValue;
        });
    }if (window.innerWidth > 1040) {scrollindHeadElement()}
    hoverEff();
    document.addEventListener('mousemove', function(e) {
        const cursor = document.querySelector('.cursor');
        const trail = document.createElement('div'); 
        trail.classList.add('cursor-trail'); 
        trail.style.left = `${e.pageX - 10}px`;
        trail.style.top = `${e.pageY - 10}px`;
        document.body.appendChild(trail);
        setTimeout(() => {
            trail.remove();
        }, 600); 
    });
    document.addEventListener("mousemove", function(e) {
        const cursor = document.querySelector('.cursor');
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        const cursorX = Math.min(Math.max(e.pageX, 0), screenWidth - cursor.offsetWidth);
        const cursorY = Math.min(Math.max(e.pageY, 0), screenHeight - cursor.offsetHeight);
        cursor.style.left = cursorX - cursor.offsetWidth / 2 + 'px';
        cursor.style.top = cursorY - cursor.offsetHeight / 2 + 'px';
    });
    ScrollReveal({
        delay: 1900  
    }).reveal('.gradient-text', {
        origin: 'left',
        scale: 0.6,
        distance: '50px',
        opacity: 0,
        duration: 1500,
        easing: 'cubic-bezier(0.34, 1.76, 0.64, 1)',
        rotate: { x: 100, y: 10 },
        scale: 0.8
    });
    
    ScrollReveal().reveal('#sch', {
        origin: 'bottom',
        distance: '70px',
        opacity: 0,
        duration: 1000,
        easing: 'ease-out',
        rotate: { y: 50 },
        scale: 0.7,
        easing: 'cubic-bezier(0.34, 1.50, 0.64, 1)'
    });
    
    ScrollReveal().reveal('.background', {
        origin: 'top',
        distance: '100px',
        duration: 1500,
        easing: 'cubic-bezier(0.34, 3.76, 0.64, 1)'
    });
    
    ScrollReveal().reveal('.logotypeImg', {
        origin: 'bottom',
        distance: '60px',
        opacity: 0,
        rotate: { x: 50, y: -10 },
        duration: 1500,
        easing: 'cubic-bezier(0.34, 1.76, 0.64, 1)',
        scale: 0.6
    });
    
    ScrollReveal().reveal('.pure', {
        origin: 'bottom',
        distance: '60px',
        opacity: 0,
        rotate: { x: 50, y: 10 },
        duration: 1500,
        easing: 'cubic-bezier(0.34, 1.7, 0.64, 1)',
        scale: 0.6
    });
    
    ScrollReveal().reveal('.button', {
        origin: 'left',
        distance: '60px',
        opacity: 0,
        duration: 1000,
        scale: 0.6,
        easing: 'ease'
    });
    const canvas = document.getElementById("smokeCanvas");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const particlesArray = [];
    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 2;
    class SmokeParticle {
        constructor(x, y, size, speedX, speedY, opacity) {
            this.x = x;
            this.y = y;
            this.size = size;
            this.speedX = speedX;
            this.speedY = speedY;
            this.opacity = opacity;
            this.angle = 0; 
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            this.opacity -= 0.002;
            if (this.opacity <= 0.1) {
                this.reset();
            }
            let dx = this.x - mouseX;
            let dy = this.y - mouseY;
            this.angle = Math.atan2(dy, dx) * 0.05; 
        }
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = canvas.height + 50;
            this.size = Math.random() * 50 + 20;
            this.opacity = Math.random() * 0.3 + 0.1;
            this.speedX = (Math.random() - 0.5) * 1;
            this.speedY = Math.random() * -2 - 1;
        }
        draw() {
            ctx.save(); 
            ctx.translate(this.x, this.y);
            ctx.rotate(this.angle);
            ctx.globalAlpha = this.opacity; 
            const gradient = ctx.createRadialGradient(0, 0, 5, 0, 0, this.size);
            gradient.addColorStop(0, "rgba(255, 0, 195, 0.4)");
            gradient.addColorStop(1, "rgba(50, 0, 35, 0)");
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(0, 0, this.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore(); 
        }
    }
    function createSmoke() {
        for (let i = 0; i < 50; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height;
            let size = Math.random() * 50 + 20;
            let speedX = (Math.random() - 0.5) * 1;
            let speedY = Math.random() * -2 - 1;
            let opacity = Math.random() * 0.3 + 0.1;

            particlesArray.push(new SmokeParticle(x, y, size, speedX, speedY, opacity));
        }
    }
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            particlesArray[i].draw();
        }
        requestAnimationFrame(animate);
    }
    window.addEventListener("mousemove", function (event) {
        mouseX = event.clientX;
        mouseY = event.clientY;
    });
    window.addEventListener("resize", function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        particlesArray.length = 0;
        createSmoke();
    });
    createSmoke();
    animate();
    !function() {
        (function() {
            const canvas = document.getElementById("returnTwoBlock");
            const ctx = canvas.getContext("2d");
            function setCanvasSize() {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }

            setCanvasSize();
            const particlesArray = [];
            let centerX = canvas.width / 2;
            let centerY = canvas.height / 2;
            class GalaxyParticle {
                constructor(angle, radius, size, speed, opacity) {
                    this.angle = angle;
                    this.radius = radius;
                    this.size = size;
                    this.speed = speed;
                    this.opacity = opacity;
                }
                update() {
                    this.angle += this.speed; 
                }
                draw() {
                    const x = centerX + Math.cos(this.angle) * this.radius;
                    const y = centerY + Math.sin(this.angle) * this.radius;
                    if (x < 0 || x > canvas.width || y < 0 || y > canvas.height) {
                        return;
                    }
                    ctx.save();
                    ctx.globalAlpha = this.opacity;
                    ctx.fillStyle = "rgba(138, 43, 226, 1)"; 
                    ctx.beginPath();
                    ctx.arc(x, y, this.size, 0, Math.PI * 2);
                    ctx.fill();

                    ctx.restore();
                }
            }

            function createGalaxy() {
                const numParticles = window.innerWidth < 768 ? 100 : 300; 
                const particleRadiusFactor = window.innerWidth < 768 ? 0.2 : 0.4; 

                for (let i = 0; i < numParticles; i++) {
                    let angle = Math.random() * Math.PI * 2;
                    let radius = Math.random() * canvas.width * particleRadiusFactor;
                    let size = Math.random() * (window.innerWidth < 768 ? 3 : 6) + 1;
                    let speed = (Math.random() - 0.5) * 0.002;
                    let opacity = Math.random() * 0.6 + 0.4;

                    particlesArray.push(new GalaxyParticle(angle, radius, size, speed, opacity));
                }
            }
            function animate() {
                ctx.fillStyle = "black";
                ctx.fillRect(0, 0, canvas.width, canvas.height);

                for (let i = 0; i < particlesArray.length; i++) {
                    particlesArray[i].update();
                    particlesArray[i].draw();
                }

                requestAnimationFrame(animate);
            }
            window.addEventListener("resize", function() {
                setCanvasSize();
                centerX = canvas.width / 2;
                centerY = canvas.height / 2;
                particlesArray.length = 0; 
                createGalaxy(); 
            });

            createGalaxy();
            animate();
        })();
    }
 
        
        !function() {
            const canvas = document.getElementById('galaxyCanvas');
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            const renderer = new THREE.WebGLRenderer({ canvas: canvas });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.shadowMap.enabled = true;
            renderer.shadowMap.type = THREE.PCFSoftShadowMap;
            const starGeometry = new THREE.BufferGeometry();
            const starCount = 20000; 
            const positions = [];
            const sizes = [];
            const velocities = [];
            const delays = [];
            for (let i = 0; i < starCount; i++) {
                const x = Math.random() * 2000 - 1000;
                const y = Math.random() * 2000 - 1000;
                const z = Math.random() * 2000 - 1000;
                positions.push(x, y, z);
                sizes.push(Math.random() * 3 + 1);
                velocities.push(Math.random() * 0.02 - 0.01); 
                delays.push(Math.random() * 10); 
            }
            starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
            starGeometry.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1));
            const starMaterial = new THREE.PointsMaterial({
                color: new THREE.Color(0x8A2BE2),
                size: 2,
                transparent: true,
                opacity: 0.8,
                sizeAttenuation: true,
                map: new THREE.TextureLoader().load('https://threejs.org/examples/textures/sprites/ball.png') 
            });
            const stars = new THREE.Points(starGeometry, starMaterial);
            scene.add(stars);
            const pointLight = new THREE.PointLight(0x8A2BE2, 1, 500);
            pointLight.position.set(0, 0, 1000);
            scene.add(pointLight);
            pointLight.castShadow = true;
            camera.position.z = 1000;
            const backgroundLight = new THREE.AmbientLight(0x8A2BE2, 0.1); 
            scene.add(backgroundLight);
            stars.castShadow = true;
            stars.receiveShadow = true;
            let mouseX = 0;
            let mouseY = 0;
            document.addEventListener('mousemove', (event) => {
                mouseX = (event.clientX / window.innerWidth) * 2 - 1; 
                mouseY = -(event.clientY / window.innerHeight) * 2 + 1; 
            });
            function animate() {
                requestAnimationFrame(animate);
                const time = Date.now() * 0.001;
                for (let i = 0; i < starCount; i++) {
                    const star = stars.geometry.attributes.position;
                    const velocity = velocities[i];
                    const delay = delays[i];
                    star.setY(i * 3, Math.sin(time + delay) * 200 + Math.sin(time + delay) * velocity);
                    star.setX(i * 3, Math.cos(time + delay) * 500 + Math.cos(time + delay) * velocity);
                }   
                const scaleFactor = 1 / (camera.position.z / 1000);
                stars.material.size = 2 * scaleFactor;
                camera.position.x += (mouseX * 0.05 - camera.position.x) * 0.1;
                camera.position.y += (-mouseY * 0.05 - camera.position.y) * 0.1;
                camera.lookAt(scene.position)
                stars.rotation.x += 0.0005;
                stars.rotation.y += 0.0005;
                camera.position.z -= 0.2;
                if (camera.position.z < 300) {
                    camera.position.z = 1000; 
                }
                renderer.render(scene, camera);
            }
            animate();
            window.addEventListener('resize', () => {scene
                renderer.setSize(window.innerWidth, window.innerHeight);
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
            });
        }();
    
    
        !function() {
            const canvas = document.getElementById('galaxyCanvas1');
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            const renderer = new THREE.WebGLRenderer({ canvas: canvas });
            function setCanvasSize() {
                renderer.setSize(window.innerWidth, window.innerHeight);
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
            }
            setCanvasSize();
            const starGeometry = new THREE.BufferGeometry();
            const starCount = 20000; 
            const positions = [];
            const sizes = [];
            const velocities = [];
            const delays = [];
            for (let i = 0; i < starCount; i++) {
                const x = Math.random() * 2000 - 1000;
                const y = Math.random() * 2000 - 1000;
                const z = Math.random() * 2000 - 1000;
                positions.push(x, y, z);
                sizes.push(Math.random() * 3 + 1);
                velocities.push(Math.random() * 0.02 - 0.01); 
                delays.push(Math.random() * 10); 
            }
            starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
            starGeometry.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1));
            const starMaterial = new THREE.PointsMaterial({
                color: new THREE.Color(0x8A2BE2),
                size: 2,
                transparent: true,
                opacity: 0.8,
                sizeAttenuation: true,
                map: new THREE.TextureLoader().load('https://threejs.org/examples/textures/sprites/ball.png')
            });
            const stars = new THREE.Points(starGeometry, starMaterial);
            scene.add(stars);
            const pointLight = new THREE.PointLight(0x8A2BE2, 1, 500);
            pointLight.position.set(0, 0, 1000);
            scene.add(pointLight);
            pointLight.castShadow = true;
            const backgroundLight = new THREE.AmbientLight(0x8A2BE2, 0.1); 
            scene.add(backgroundLight);
            stars.castShadow = true;
            stars.receiveShadow = true;
            let mouseX = 0;
            let mouseY = 0;
            document.addEventListener('mousemove', (event) => {
                mouseX = (event.clientX / window.innerWidth) * 2 - 1; 
                mouseY = -(event.clientY / window.innerHeight) * 2 + 1; 
            });
            function animate() {
                requestAnimationFrame(animate);
                const time = Date.now() * 0.001;
                for (let i = 0; i < starCount; i++) {
                    const star = stars.geometry.attributes.position;
                    const velocity = velocities[i];
                    const delay = delays[i];
                    star.setY(i * 3, Math.sin(time + delay) * 200 + Math.sin(time + delay) * velocity);
                    star.setX(i * 3, Math.cos(time + delay) * 500 + Math.cos(time + delay) * velocity);
                }
                const scaleFactor = 1 / (camera.position.z / 1000);
                stars.material.size = 2 * scaleFactor;
                camera.position.x += (mouseX * 0.05 - camera.position.x) * 0.1;
                camera.position.y += (-mouseY * 0.05 - camera.position.y) * 0.1;
                camera.lookAt(scene.position);
                stars.rotation.x += 0.0005;
                stars.rotation.y += 0.0005;
                camera.position.z -= 0.2;
                if (camera.position.z < 300) {
                    camera.position.z = 1000;
                }
                renderer.render(scene, camera);
            }
            animate();
            window.addEventListener('resize', () => {
                setCanvasSize(); 
            });
        }();
    
}




























