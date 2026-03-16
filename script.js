/**
 * KAEYL.SPACE // KINETIC SYSTEM ENGINE
 * Architecture: GSAP Core + Lenis + Canvas Matrix + Video Modals
 */

document.addEventListener("DOMContentLoaded", () => {
    
    // Safety check for libraries
    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined" || typeof TextPlugin === "undefined") {
        console.error("SYS_ERR: Missing Core Libraries.");
        document.body.classList.remove('loading');
        document.getElementById('loader').style.display = 'none';
        return;
    }
    
    gsap.registerPlugin(ScrollTrigger, TextPlugin);

    // 01. SMOOTH SCROLL (LENIS)
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true
    });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => { lenis.raf(time * 1000); });

    // 02. KINETIC CANVAS MATRIX BACKGROUND
    const canvas = document.getElementById('particle-canvas');
    const ctx = canvas.getContext('2d');
    let width, height, particles = [];

    function initCanvas() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        particles = [];
        const particleCount = window.innerWidth < 768 ? 40 : 100;
        for(let i=0; i<particleCount; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 2
            });
        }
    }

    function animateCanvas() {
        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = 'rgba(204, 255, 0, 0.5)'; 
        
        particles.forEach(p => {
            p.x += p.vx; p.y += p.vy;
            if(p.x < 0 || p.x > width) p.vx *= -1;
            if(p.y < 0 || p.y > height) p.vy *= -1;
            
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
        });

        ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
        for(let i=0; i<particles.length; i++) {
            for(let j=i+1; j<particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                if(dx*dx + dy*dy < 10000) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(animateCanvas);
    }
    initCanvas();
    animateCanvas();
    window.addEventListener('resize', initCanvas);

    // 03. SYSTEM CONTENT REPOSITORY (WITH VIDEO LINKS)
    const systemData = {
        about: {
            title: "CORE_ASPIRATIONS",
            sys: "PROFILE_01",
            /* 🎥 PUT YOUR VIDEO LINK HERE 🎥 */
            imgSrc: "me1.JPEG", 
            content: `
                <div class="space-y-6 text-sm text-gray-400 leading-relaxed font-sans mt-6">
                    <p class="text-[#ccff00] font-mono">> EXECUTING: Future_Goals.exe</p>
                    <p class="text-white text-2xl font-bold">Blending structured logic with fluid creativity.</p>
                    <p class="text-lg">My ultimate goal is to travel the world, immersing myself in different cultures and drawing inspiration from the environments around me.</p>
                    <p class="text-lg">I dream of eventually living in a serene, minimalist studio—perhaps in Kyoto or the Swiss Alps—where I can focus purely on creativity, designing, and experiencing life without boundaries.</p>
                </div>
            `
        },
        tft: {
            title: "TFT_PROTOCOL",
            sys: "STRAT_02",
            /* 🎥 PUT YOUR VIDEO LINK HERE 🎥 */
            videoSrc: "tft.mp4", 
            content: `
                <div class="space-y-6 text-sm text-gray-400 leading-relaxed font-sans mt-6">
                    <p class="text-[#ccff00] font-mono">> EXECUTING: Teamfight_Tactics.exe</p>
                    <p class="text-white text-2xl font-bold">A masterclass in adaptability and strategic thinking.</p>
                    <p class="text-lg">Every match requires rapid processing of probabilities. Deciding when to roll, level, or pivot relies heavily on recognizing patterns within the patch meta. It bridges the gap between digital gaming and logical computation.</p>
                </div>
            `
        },
        baseball: {
            title: "DIAMOND_KINETICS",
            sys: "PHYS_03",
            /* 🎥 PUT YOUR VIDEO LINK HERE 🎥 */
            videoSrc: "ohtani.mp4", 
            content: `
                <div class="space-y-6 text-sm text-gray-400 leading-relaxed font-sans mt-6">
                    <p class="text-[#ccff00] font-mono">> EXECUTING: Baseball_Simulation.exe</p>
                    <p class="text-white text-2xl font-bold">Finding balance through physical kinetic energy.</p>
                    <p class="text-lg">Baseball is a game of immense statistical depth. Much like algorithmic problem-solving, it involves calculating probabilities on the fly—anticipating pitch types, tracking launch angles, and executing defensive shifts.</p>
                </div>
            `
        },
        music: {
            title: "AUDIO_PROFILE",
            sys: "FREQ_04",
            /* 🎥 PUT YOUR VIDEO LINK HERE 🎥 */
            videoSrc: "wantchu.mp4", 
            content: `
                <div class="space-y-6 text-sm text-gray-400 leading-relaxed font-sans mt-6">
                    <p class="text-[#ccff00] font-mono">> PLAYING: keshi_WANTCHU.mp3</p>
                    <p class="text-white text-2xl font-bold">The auditory baseline for my creative workflow.</p>
                    <p class="text-lg">Keshi's production layers—trap beats mixed with lo-fi melancholy and acoustic guitar—create a sonic environment that promotes deep focus. This music isolates me from distractions, allowing for sustained flow states.</p>
                </div>
            `
        },
        series: {
            title: "NARRATIVE_LOG",
            sys: "MEDIA_05",
            /* 🎥 PUT YOUR VIDEO LINK HERE 🎥 */
            videoSrc: "twinkling.mp4", 
            content: `
                <div class="space-y-6 text-sm text-gray-400 leading-relaxed font-sans mt-6">
                    <p class="text-[#ccff00] font-mono">> DECRYPTING: Twinkling_Watermelon.mkv</p>
                    <p class="text-white text-2xl font-bold">A profound exploration of time, music, and the communication of youth.</p>
                    <p class="text-lg">Eun-gyeol, a CODA, time-travels to 1995. He forms a band with his teenage father, attempting to alter fate. The narrative masterfully balances humor with deep trauma.</p>
                </div>
            `
        }
    };

    // 04. BOOT SEQUENCE
    const percEl = document.getElementById('loader-perc');
    const fillEl = document.getElementById('loader-fill');
    const loaderEl = document.getElementById('loader');

    let progress = { val: 0 };
    
    gsap.to("#boot-logs", {
        text: { value: "> Loading core passions...<br>> Mounting creative nodes: LIFE/GOALS...<br>> Establishing visual grid...<br>> DECRYPTION SUCCESSFUL.", speed: 2 },
        duration: 2, ease: "none", delay: 0.5
    });

    const safetyTimeout = setTimeout(() => {
        document.body.classList.remove('loading');
        loaderEl.style.display = 'none';
        initCyberScroll();
    }, 4500);

    gsap.to(progress, {
        val: 100,
        duration: 3,
        ease: "power2.inOut",
        onUpdate: () => {
            percEl.innerText = Math.floor(progress.val).toString().padStart(3, '0');
            gsap.to(fillEl, { scaleX: progress.val / 100, duration: 0.1 });
        },
        onComplete: () => {
            clearTimeout(safetyTimeout);
            document.body.classList.remove('loading');
            
            const tl = gsap.timeline();
            tl.to(loaderEl, { yPercent: -100, duration: 1.2, ease: "expo.inOut" })
              .fromTo(".hero-reveal", 
                { opacity: 0, y: 30, filter: "blur(10px)" }, 
                { opacity: 1, y: 0, filter: "blur(0px)", stagger: 0.15, duration: 1.5, ease: "expo.out" }, "-=0.5"
              )
              .onComplete(initCyberScroll);
        }
    });

    // 05. SCROLL TRIGGER ANIMATIONS
    function initCyberScroll() {
        gsap.utils.toArray('.scroll-fade').forEach(el => {
            gsap.fromTo(el, 
                { opacity: 0, x: -30 }, 
                { opacity: 1, x: 0, duration: 1, ease: "expo.out", scrollTrigger: { trigger: el, start: "top 80%" } }
            );
        });

        gsap.utils.toArray('.scroll-card').forEach((el, i) => {
            gsap.fromTo(el, 
                { opacity: 0, y: 50 }, 
                { opacity: 1, y: 0, duration: 1, delay: (i%3)*0.1, ease: "expo.out", scrollTrigger: { trigger: el, start: "top 85%" } }
            );
        });
    }

    // 06. MULTI-LAYER TRAILING CURSOR
    if (window.innerWidth > 1024) {
        const cursorCore = document.getElementById('cursor-core');
        const trails = document.querySelectorAll('.cursor-trail');
        
        let mouseX = window.innerWidth/2, mouseY = window.innerHeight/2;
        let posArr = [{x: mouseX, y: mouseY}, {x: mouseX, y: mouseY}, {x: mouseX, y: mouseY}];

        window.addEventListener('mousemove', e => { mouseX = e.clientX; mouseY = e.clientY; });

        gsap.ticker.add(() => {
            gsap.set(cursorCore, { x: mouseX, y: mouseY });
            posArr[0].x += (mouseX - posArr[0].x) * 0.3;
            posArr[0].y += (mouseY - posArr[0].y) * 0.3;
            posArr[1].x += (posArr[0].x - posArr[1].x) * 0.3;
            posArr[1].y += (posArr[0].y - posArr[1].y) * 0.3;
            posArr[2].x += (posArr[1].x - posArr[2].x) * 0.3;
            posArr[2].y += (posArr[1].y - posArr[2].y) * 0.3;

            trails.forEach((trail, i) => {
                gsap.set(trail, { x: posArr[i].x, y: posArr[i].y });
            });
        });

        document.querySelectorAll('a, button, .modal-trigger').forEach(el => {
            el.addEventListener('mouseenter', () => {
                gsap.to(trails, { scale: 1.5, backgroundColor: "rgba(204,255,0,0.1)", duration: 0.3 });
            });
            el.addEventListener('mouseleave', () => {
                gsap.to(trails, { scale: 1, backgroundColor: "transparent", duration: 0.3 });
            });
        });
    }

    // 07. CYBER MODAL ENGINE WITH VIDEO INJECTION
    const triggers = document.querySelectorAll('.modal-trigger');
    const modalWrap = document.getElementById('modal-wrap');
    const modalInject = document.getElementById('modal-inject');

    triggers.forEach(t => {
        t.addEventListener('click', (e) => {
            e.preventDefault();
            const key = t.getAttribute('data-topic');
            const data = systemData[key];
            
            if (data) {
                // Generate the video HTML if a video link is provided
                let videoHTML = "";
                if(data.videoSrc && data.videoSrc !== "" && data.videoSrc !== "YOUR-VIDEO.mp4") {
                    videoHTML = `
                        <div class="w-full h-[25vh] md:h-[40vh] border border-[#ccff00]/30 mb-8 relative overflow-hidden bg-black">
                            <div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay z-10 pointer-events-none"></div>
                            <video src="${data.videoSrc}" class="w-full h-full object-cover" autoplay loop muted playsinline></video>
                        </div>
                    `;
                }

                modalInject.innerHTML = `
                    <div class="mb-6 border-b border-[#ccff00]/30 pb-4 flex justify-between items-end">
                        <h2 class="text-3xl md:text-5xl font-black uppercase italic tracking-tighter text-white font-sans">${data.title}</h2>
                        <span class="text-[10px] text-[#ccff00] tracking-widest font-mono hidden md:block">[ ${data.sys} ]</span>
                    </div>
                    ${videoHTML}
                    ${data.content}
                `;
                
                modalWrap.classList.add('active');
                lenis.stop(); 
                
                gsap.to("#modal-dim", { opacity: 1, duration: 0.4 });
                gsap.to("#modal-box", { opacity: 1, y: 0, duration: 0.5, ease: "back.out(1.5)" });
                
                gsap.fromTo("#modal-inject h2", 
                    { opacity: 0 },
                    { opacity: 1, duration: 1, text: { value: data.title, delimiter: "", speed: 2 }, ease: "none" }
                );
            }
        });
    });

    document.getElementById('modal-exit').addEventListener('click', () => {
        gsap.to("#modal-box", { opacity: 0, y: 50, duration: 0.4, ease: "expo.in" });
        gsap.to("#modal-dim", { opacity: 0, duration: 0.4, onComplete: () => {
            modalWrap.classList.remove('active');
            
            // Stop the video from playing in the background when closed
            const videoElement = modalInject.querySelector('video');
            if(videoElement) {
                videoElement.pause();
                videoElement.removeAttribute('src'); 
                videoElement.load();
            }

            lenis.start(); 
        }});
    });

    // 08. TOP MENU TOGGLE
    const menuBtn = document.getElementById('menu-trigger');
    const menuOverlay = document.getElementById('menu-overlay');
    let isMenuOpen = false;

    menuBtn.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;
        gsap.to(menuOverlay, { y: isMenuOpen ? 0 : "100%", duration: 0.8, ease: "expo.inOut" });
        gsap.to(".line-1", { rotation: isMenuOpen ? 45 : 0, y: isMenuOpen ? 4 : 0, width: isMenuOpen ? "100%" : "100%", duration: 0.4 });
        gsap.to(".line-2", { rotation: isMenuOpen ? -45 : 0, y: isMenuOpen ? -4 : 0, width: isMenuOpen ? "100%" : "75%", duration: 0.4 });
        if(isMenuOpen) { lenis.stop(); } else { lenis.start(); }
    });

    document.querySelectorAll('.m-link').forEach(link => {
        link.addEventListener('click', () => { if(isMenuOpen) menuBtn.click(); });
    });
});