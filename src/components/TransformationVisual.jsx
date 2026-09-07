import React, { useEffect, useRef, useState } from 'react';
import { Play, Pause, RotateCcw, Sparkles, Film } from 'lucide-react';

export default function TransformationVisual() {
  const canvasRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const totalDuration = 28; // 28-second continuous short film
  const requestRef = useRef(null);
  const lastTimeRef = useRef(null);
  const timeStateRef = useRef(0);

  useEffect(() => {
    timeStateRef.current = currentTime;
  }, [currentTime]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // Handle high DPI
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const width = rect.width;
    const height = rect.height;

    const animate = (timestamp) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const delta = (timestamp - lastTimeRef.current) / 1000;
      lastTimeRef.current = timestamp;

      if (isPlaying) {
        timeStateRef.current += delta;
        if (timeStateRef.current >= totalDuration) {
          timeStateRef.current = 0; // loop
        }
        setCurrentTime(timeStateRef.current);
      }

      const t = timeStateRef.current;

      // Clear Canvas
      ctx.clearRect(0, 0, width, height);

      // Render Cinematic Frame
      renderFilmScene(ctx, width, height, t);

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isPlaying]);

  return (
    <div className="relative w-full max-w-5xl mx-auto mt-12">
      
      {/* Cinema Frame Container */}
      <div className="relative w-full rounded-3xl bg-[#090D16] border border-slate-800 shadow-2xl overflow-hidden group">
        
        {/* Cinema Letterbox Aspect Ratio Container (16:9 / 21:9 cinematic feel) */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/10] bg-[#070A12] overflow-hidden">
          <canvas
            ref={canvasRef}
            className="w-full h-full block cursor-pointer"
            onClick={() => setIsPlaying(!isPlaying)}
          />

          {/* Cinematic Top-Right Live Badge */}
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex items-center gap-2 pointer-events-none z-20">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white text-[11px] font-medium shadow-lg">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              <span className="tracking-widest uppercase font-mono text-[10px]">CINEMATIC SHORT</span>
            </div>
          </div>

          {/* Current Story Chapter Overlay (Subtle Lower Third) */}
          <div className="absolute bottom-16 left-6 sm:left-8 pointer-events-none z-20 transition-all">
            <div className="flex items-center gap-2 text-[#93C5FD] text-xs font-mono font-semibold tracking-wider uppercase mb-1">
              <Film className="w-3.5 h-3.5" />
              <span>
                {currentTime < 6 && "Scene I • The Quiet Local Store"}
                {currentTime >= 6 && currentTime < 10 && "Scene II • The WebDari Catalyst"}
                {currentTime >= 10 && currentTime < 18 && "Scene III • Customers Discovering NOVA"}
                {currentTime >= 18 && "Scene IV • Expansion into Global Flagship"}
              </span>
            </div>
            <div className="text-white text-sm sm:text-lg font-bold font-display drop-shadow-md">
              {currentTime < 6 && "NOVA CLOTHING — A quiet boutique awaiting its breakthrough."}
              {currentTime >= 6 && currentTime < 10 && "Digital presence ignites: storefront comes alive with light."}
              {currentTime >= 10 && currentTime < 18 && "Footfall surges, racks clear out, orders package non-stop."}
              {currentTime >= 18 && "From a neighborhood corner to a flourishing modern fashion empire."}
            </div>
          </div>
        </div>

        {/* Video Scrubber & Playback Controls Bar */}
        <div className="px-5 py-3.5 bg-[#0C1220] border-t border-slate-800/90 flex flex-col sm:flex-row items-center justify-between gap-3">
          
          {/* Controls Left */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center justify-center w-8 h-8 rounded-full bg-[#1B64F2] hover:bg-[#1557D4] text-white shadow-md shadow-[#1B64F2]/30 transition-transform active:scale-95"
              title={isPlaying ? "Pause Story" : "Play Story"}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
            </button>

            <button
              onClick={() => {
                timeStateRef.current = 0;
                setCurrentTime(0);
                setIsPlaying(true);
              }}
              className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              title="Restart from beginning"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            {/* Timecode */}
            <div className="font-mono text-xs text-slate-400">
              <span className="text-white font-semibold">00:{Math.floor(currentTime).toString().padStart(2, '0')}</span>
              <span className="text-slate-600"> / 00:{totalDuration}</span>
            </div>
          </div>

          {/* Scrubber Timeline */}
          <div 
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const clickX = e.clientX - rect.left;
              const newT = (clickX / rect.width) * totalDuration;
              timeStateRef.current = newT;
              setCurrentTime(newT);
            }}
            className="w-full sm:flex-1 max-w-md h-2 bg-slate-800 hover:h-2.5 rounded-full cursor-pointer transition-all overflow-hidden relative"
          >
            {/* Story Chapters Markers */}
            <div className="absolute left-[21.4%] top-0 bottom-0 w-0.5 bg-slate-600 z-10" title="Scene 2: WebDari Catalyst" />
            <div className="absolute left-[35.7%] top-0 bottom-0 w-0.5 bg-slate-600 z-10" title="Scene 3: Activity Surge" />
            <div className="absolute left-[64.2%] top-0 bottom-0 w-0.5 bg-slate-600 z-10" title="Scene 4: Flagship Expansion" />

            {/* Filled Progress Bar */}
            <div 
              className="h-full bg-gradient-to-r from-[#1B64F2] via-[#60A5FA] to-emerald-400 rounded-full transition-all duration-75 ease-linear"
              style={{ width: `${(currentTime / totalDuration) * 100}%` }}
            />
          </div>

          {/* Right Signature Tag */}
          <div className="hidden md:flex items-center gap-1.5 text-xs text-slate-400">
            <span>Powered by</span>
            <span className="text-[#1B64F2] font-bold tracking-tight font-display flex items-center gap-1">
              WEBDARI <span className="w-1.5 h-1.5 rounded-full bg-[#1B64F2]"></span>
            </span>
          </div>

        </div>

      </div>

      {/* Cinematic Caption Note below */}
      <div className="text-center mt-3 text-xs text-[#64748B]">
        Every growing business begins with a vision. WebDari is the catalyst that turns local stores into thriving brands.
      </div>

    </div>
  );
}

// ================= CINEMATIC CANVAS RENDERING ENGINE ================= //

function renderFilmScene(ctx, width, height, t) {
  // Timeline Stages:
  // 0.0 - 6.0:  Scene 1 - Small Quiet Local Shop
  // 6.0 - 10.0: Scene 2 - WebDari Catalyst (Light beams, digital spark, ambiance turns warm & vibrant)
  // 10.0 - 18.0: Scene 3 - Customers entering, lively shopping, packaging, vibrancy
  // 18.0 - 25.0: Scene 4 - Seamless architectural morph into grand 2-story modern flagship
  // 25.0 - 28.0: Scene 5 - Smooth wide cinematic pullback, bustling avenue

  // Camera Pan & Zoom Interpolation
  let cameraZoom = 1.0;
  let cameraPanY = 0;
  let cameraPanX = 0;

  if (t < 6.0) {
    // Scene 1: Slow subtle camera push-in on the quiet shop
    const progress = t / 6.0;
    cameraZoom = 1.0 + progress * 0.08;
    cameraPanY = progress * 4;
  } else if (t < 10.0) {
    // Scene 2: Camera focuses slightly on the glowing entrance
    const progress = (t - 6.0) / 4.0;
    cameraZoom = 1.08 + Math.sin(progress * Math.PI) * 0.04;
  } else if (t < 18.0) {
    // Scene 3: Camera dynamic tracking of active shoppers
    cameraZoom = 1.06 + Math.sin((t - 10) * 0.5) * 0.02;
  } else {
    // Scene 4 & 5: Epic cinematic pull-back to reveal the full grand scale
    const progress = (t - 18.0) / 10.0;
    cameraZoom = 1.06 - progress * 0.16; // pulls back to wide shot
    cameraPanY = -progress * 12;
  }

  ctx.save();

  // Apply Camera Transformations centered on canvas
  ctx.translate(width / 2, height / 2);
  ctx.scale(cameraZoom, cameraZoom);
  ctx.translate(-width / 2 + cameraPanX, -height / 2 + cameraPanY);

  // 1. SKY / CITY BACKDROP
  drawCinematicSky(ctx, width, height, t);

  // 2. STREET & GROUND WITH REFLECTIONS
  const groundY = height * 0.74;
  drawStreetAndSidewalk(ctx, width, height, groundY, t);

  // 3. NEIGHBORING BUILDINGS
  drawNeighboringArchitecture(ctx, width, height, groundY, t);

  // 4. MAIN STORE: "NOVA CLOTHING" / "NOVA ATELIER & FLAGSHIP"
  drawNovaClothingStore(ctx, width, height, groundY, t);

  // 5. PEDESTRIANS & SHOPPERS
  drawCharactersAndShoppers(ctx, width, height, groundY, t);

  // 6. ATMOSPHERIC CINEMATIC EFFECTS (Lighting, Rays, Volumetric Glow, Dust)
  drawCinematicLightingEffects(ctx, width, height, groundY, t);

  ctx.restore();
}

// 1. Sky & Atmospheric Twilight Backdrop
function drawCinematicSky(ctx, width, height, t) {
  const isTransformed = t >= 10.0;
  const skyGrad = ctx.createLinearGradient(0, 0, 0, height * 0.75);

  if (t < 6.0) {
    // Quiet twilight / cool overcast slate-blue
    skyGrad.addColorStop(0, '#060B16');
    skyGrad.addColorStop(0.5, '#0F1A2E');
    skyGrad.addColorStop(1, '#1A2A44');
  } else if (t < 10.0) {
    // Transitioning warm golden hour / vibrant sapphire
    skyGrad.addColorStop(0, '#040814');
    skyGrad.addColorStop(0.6, '#0E1F42');
    skyGrad.addColorStop(1, '#1E325C');
  } else {
    // Thriving high-end city night with vibrant cobalt and warm ambient city glow
    skyGrad.addColorStop(0, '#030712');
    skyGrad.addColorStop(0.5, '#0B1B3D');
    skyGrad.addColorStop(1, '#142952');
  }

  ctx.fillStyle = skyGrad;
  ctx.fillRect(0, 0, width, height * 0.75);

  // Distant city skyline silhouettes
  ctx.fillStyle = '#080E1C';
  for (let i = 0; i < 15; i++) {
    const bWidth = width * 0.08;
    const bHeight = 60 + (i * 37) % 110;
    const bX = i * (width * 0.07) - 20;
    ctx.fillRect(bX, height * 0.74 - bHeight - 120, bWidth, bHeight + 120);

    // Distant subtle warm office window dots in background
    if (t > 6.0) {
      ctx.fillStyle = 'rgba(254, 240, 138, 0.25)';
      for (let w = 0; w < 4; w++) {
        for (let h = 0; h < 6; h++) {
          if ((w + h + i) % 3 === 0) {
            ctx.fillRect(bX + 8 + w * 12, height * 0.74 - bHeight - 100 + h * 16, 4, 6);
          }
        }
      }
      ctx.fillStyle = '#080E1C';
    }
  }
}

// 2. Street, Pavement & Wet Road Reflections
function drawStreetAndSidewalk(ctx, width, height, groundY, t) {
  // Road surface
  const roadGrad = ctx.createLinearGradient(0, groundY, 0, height);
  roadGrad.addColorStop(0, '#0F172A');
  roadGrad.addColorStop(0.4, '#090E1A');
  roadGrad.addColorStop(1, '#05070D');
  ctx.fillStyle = roadGrad;
  ctx.fillRect(0, groundY, width, height - groundY);

  // Sidewalk curb
  ctx.fillStyle = '#334155';
  ctx.fillRect(0, groundY - 6, width, 6);
  ctx.fillStyle = '#1E293B';
  ctx.fillRect(0, groundY, width, 14);

  // Sidewalk pavement tiles
  ctx.strokeStyle = '#1E293B';
  ctx.lineWidth = 1;
  for (let x = 0; x < width; x += 36) {
    ctx.beginPath();
    ctx.moveTo(x, groundY - 6);
    ctx.lineTo(x - 20, groundY + 14);
    ctx.stroke();
  }

  // Street ambient light reflection from storefront
  const storeCenterX = width / 2;
  const reflGrad = ctx.createRadialGradient(storeCenterX, groundY + 25, 10, storeCenterX, groundY + 40, width * 0.4);
  
  if (t < 6.0) {
    reflGrad.addColorStop(0, 'rgba(245, 158, 11, 0.08)');
    reflGrad.addColorStop(1, 'transparent');
  } else if (t < 10.0) {
    reflGrad.addColorStop(0, 'rgba(27, 100, 242, 0.25)');
    reflGrad.addColorStop(0.5, 'rgba(245, 158, 11, 0.15)');
    reflGrad.addColorStop(1, 'transparent');
  } else {
    reflGrad.addColorStop(0, 'rgba(27, 100, 242, 0.35)');
    reflGrad.addColorStop(0.4, 'rgba(251, 191, 36, 0.2)');
    reflGrad.addColorStop(1, 'transparent');
  }

  ctx.fillStyle = reflGrad;
  ctx.fillRect(0, groundY, width, height - groundY);
}

// 3. Surrounding Architecture / Street Elements
function drawNeighboringArchitecture(ctx, width, height, groundY, t) {
  // Left Neighboring Building (Classic brick facade)
  const leftW = width * 0.22;
  ctx.fillStyle = '#0F1626';
  ctx.fillRect(0, groundY - 240, leftW, 240);
  ctx.fillStyle = '#18243C';
  ctx.fillRect(0, groundY - 240, leftW, 14); // molding

  // Left Building Windows
  for (let wy = groundY - 200; wy < groundY - 40; wy += 60) {
    for (let wx = 20; wx < leftW - 20; wx += 45) {
      ctx.fillStyle = '#0B101E';
      ctx.fillRect(wx, wy, 28, 42);
      ctx.strokeStyle = '#273859';
      ctx.strokeRect(wx, wy, 28, 42);
      // Soft interior room glow
      ctx.fillStyle = 'rgba(253, 230, 138, 0.15)';
      ctx.fillRect(wx + 3, wy + 3, 22, 36);
    }
  }

  // Right Neighboring Building
  const rightX = width * 0.78;
  const rightW = width * 0.22;
  ctx.fillStyle = '#0E1424';
  ctx.fillRect(rightX, groundY - 260, rightW, 260);

  // Right Building Windows
  for (let wy = groundY - 220; wy < groundY - 40; wy += 65) {
    for (let wx = rightX + 20; wx < width - 20; wx += 45) {
      ctx.fillStyle = '#090D1A';
      ctx.fillRect(wx, wy, 30, 44);
      ctx.strokeStyle = '#22304C';
      ctx.strokeRect(wx, wy, 30, 44);
      ctx.fillStyle = 'rgba(253, 230, 138, 0.18)';
      ctx.fillRect(wx + 3, wy + 3, 24, 38);
    }
  }

  // Street Lamps on Sidewalk
  drawStreetLamp(ctx, leftW + 15, groundY, t);
  drawStreetLamp(ctx, rightX - 15, groundY, t);
}

function drawStreetLamp(ctx, x, groundY, t) {
  // Post
  ctx.fillStyle = '#1E293B';
  ctx.fillRect(x - 2, groundY - 140, 4, 140);
  ctx.beginPath();
  ctx.arc(x, groundY - 140, 6, 0, Math.PI * 2);
  ctx.fill();

  // Lantern Head
  ctx.fillStyle = '#0F172A';
  ctx.fillRect(x - 6, groundY - 150, 12, 10);

  // Warm Lamp Glow Bulb
  ctx.fillStyle = '#FDE68A';
  ctx.beginPath();
  ctx.arc(x, groundY - 145, 4, 0, Math.PI * 2);
  ctx.fill();

  // Lamp Light Cone
  const lampGlow = ctx.createRadialGradient(x, groundY - 145, 2, x, groundY - 120, 60);
  lampGlow.addColorStop(0, 'rgba(253, 230, 138, 0.3)');
  lampGlow.addColorStop(1, 'transparent');
  ctx.fillStyle = lampGlow;
  ctx.beginPath();
  ctx.arc(x, groundY - 145, 60, 0, Math.PI * 2);
  ctx.fill();
}

// 4. MAIN STORE: "NOVA CLOTHING" / "NOVA FLAGSHIP"
function drawNovaClothingStore(ctx, width, height, groundY, t) {
  const storeCenterX = width / 2;

  // Dynamic Scale & Architecture Expansion parameters
  // Phase 1 (0-6s): width = width * 0.44, 1 story (height = 180)
  // Phase 4 (18-28s): expands to 2-story glass flagship (width = width * 0.54, height = 280)
  let expansionProgress = 0;
  if (t >= 18.0) {
    expansionProgress = Math.min(1.0, (t - 18.0) / 4.0); // smooth expansion over 4s
  }

  const storeW = (width * 0.46) + (expansionProgress * (width * 0.10));
  const storeH = 180 + (expansionProgress * 100);
  const storeX = storeCenterX - (storeW / 2);
  const storeY = groundY - storeH;

  // A. Main Building Structure Facade
  const facadeGrad = ctx.createLinearGradient(storeX, storeY, storeX, groundY);
  if (t < 6.0) {
    // Old cozy stone/brick facade
    facadeGrad.addColorStop(0, '#1E293B');
    facadeGrad.addColorStop(1, '#0F172A');
  } else if (t < 10.0) {
    // Transitioning warm architectural illumination
    facadeGrad.addColorStop(0, '#15254A');
    facadeGrad.addColorStop(1, '#0F1A33');
  } else {
    // Sleek modern architectural charcoal & sapphire glass facade
    facadeGrad.addColorStop(0, '#0B152B');
    facadeGrad.addColorStop(0.5, '#0E1D3D');
    facadeGrad.addColorStop(1, '#081021');
  }

  ctx.fillStyle = facadeGrad;
  ctx.fillRect(storeX, storeY, storeW, storeH);

  // Modern Architectural Crown / Molding
  ctx.fillStyle = t >= 10.0 ? '#1B64F2' : '#334155';
  ctx.fillRect(storeX - 4, storeY - 6, storeW + 8, 8);

  // B. STORE SIGNBOARD: "NOVA CLOTHING" / "NOVA ATELIER & FLAGSHIP"
  const signH = 34 + expansionProgress * 6;
  const signY = storeY + 12;
  const signW = storeW * 0.88;
  const signX = storeCenterX - (signW / 2);

  // Signboard background
  const signGrad = ctx.createLinearGradient(signX, signY, signX + signW, signY + signH);
  if (t < 6.0) {
    signGrad.addColorStop(0, '#1E293B');
    signGrad.addColorStop(1, '#0F172A');
  } else if (t < 10.0) {
    signGrad.addColorStop(0, '#1B64F2');
    signGrad.addColorStop(1, '#0F172A');
  } else {
    signGrad.addColorStop(0, '#0F1E3D');
    signGrad.addColorStop(0.5, '#1B64F2');
    signGrad.addColorStop(1, '#0F1E3D');
  }

  ctx.fillStyle = signGrad;
  ctx.fillRect(signX, signY, signW, signH);
  ctx.strokeStyle = t >= 6.0 ? '#3B82F6' : '#475569';
  ctx.lineWidth = 1.5;
  ctx.strokeRect(signX, signY, signW, signH);

  // Sign Typography
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  if (t < 18.0) {
    // "NOVA CLOTHING"
    ctx.font = 'bold 15px "Plus Jakarta Sans", sans-serif';
    ctx.fillStyle = t >= 6.0 ? '#FFFFFF' : '#E2E8F0';
    ctx.fillText('NOVA CLOTHING', storeCenterX, signY + (signH / 2) - 3);

    ctx.font = '600 8px "Plus Jakarta Sans", sans-serif';
    ctx.fillStyle = t >= 6.0 ? '#93C5FD' : '#94A3B8';
    ctx.fillText('BOUTIQUE & APPAREL', storeCenterX, signY + (signH / 2) + 8);
  } else {
    // "NOVA FLAGSHIP"
    ctx.font = '800 17px "Plus Jakarta Sans", sans-serif';
    ctx.fillStyle = '#FFFFFF';
    ctx.fillText('NOVA  •  FLAGSHIP', storeCenterX, signY + (signH / 2) - 4);

    ctx.font = '700 9px "Plus Jakarta Sans", sans-serif';
    ctx.fillStyle = '#93C5FD';
    ctx.fillText('HAUTE COUTURE & GLOBAL ATELIER', storeCenterX, signY + (signH / 2) + 9);
  }

  // C. STRIPED AWNING (Fades out when morphing to modern seamless glass flagship)
  if (expansionProgress < 0.9) {
    const awningOpacity = 1.0 - expansionProgress;
    const awningY = signY + signH + 4;
    const awningH = 18;
    const awningW = storeW * 0.92;
    const awningX = storeCenterX - (awningW / 2);

    ctx.save();
    ctx.globalAlpha = awningOpacity;
    ctx.fillStyle = '#D97706'; // classic amber awning
    ctx.fillRect(awningX, awningY, awningW, awningH);

    // Awning Stripes
    const stripeCount = 14;
    const stripeW = awningW / stripeCount;
    for (let s = 0; s < stripeCount; s++) {
      if (s % 2 === 0) {
        ctx.fillStyle = '#FEF3C7';
        ctx.fillRect(awningX + s * stripeW, awningY, stripeW, awningH);
      }
    }
    // Scalloped bottom edge
    ctx.strokeStyle = '#B45309';
    ctx.strokeRect(awningX, awningY, awningW, awningH);
    ctx.restore();
  }

  // D. STORE INTERIOR (Visible through Large Floor-to-Ceiling Display Windows)
  const windowTopY = signY + signH + (expansionProgress < 0.8 ? 26 : 8);
  const windowH = groundY - windowTopY - 4;
  const windowW = storeW * 0.92;
  const windowX = storeCenterX - (windowW / 2);

  // Warm glowing store interior background
  const interiorGrad = ctx.createLinearGradient(windowX, windowTopY, windowX, groundY);
  if (t < 6.0) {
    // Dim, quiet incandescent lighting
    interiorGrad.addColorStop(0, '#261F13');
    interiorGrad.addColorStop(0.7, '#1C150A');
    interiorGrad.addColorStop(1, '#110C05');
  } else if (t < 10.0) {
    // Brightening with warm modern LEDs and WebDari blue accent
    interiorGrad.addColorStop(0, '#3D2F14');
    interiorGrad.addColorStop(0.5, '#1A294A');
    interiorGrad.addColorStop(1, '#0C162A');
  } else {
    // Brilliant, vibrant luxury warm lighting + crystal clear modern boutique ambiance
    interiorGrad.addColorStop(0, '#5C441A');
    interiorGrad.addColorStop(0.4, '#243A66');
    interiorGrad.addColorStop(1, '#0E1A33');
  }

  ctx.fillStyle = interiorGrad;
  ctx.fillRect(windowX, windowTopY, windowW, windowH);

  // Interior Overhead Track Lights
  ctx.fillStyle = '#FEF08A';
  for (let lx = windowX + 24; lx < windowX + windowW - 20; lx += 48) {
    ctx.fillRect(lx, windowTopY + 2, 8, 3);
    // Light cone down
    const lightCone = ctx.createLinearGradient(lx, windowTopY + 5, lx, windowTopY + 70);
    lightCone.addColorStop(0, t >= 6.0 ? 'rgba(254, 240, 138, 0.4)' : 'rgba(254, 240, 138, 0.15)');
    lightCone.addColorStop(1, 'transparent');
    ctx.fillStyle = lightCone;
    ctx.beginPath();
    ctx.moveTo(lx - 10, windowTopY + 5);
    ctx.lineTo(lx + 18, windowTopY + 5);
    ctx.lineTo(lx + 28, windowTopY + 70);
    ctx.lineTo(lx - 20, windowTopY + 70);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = '#FEF08A';
  }

  // E. CLOTHING RACKS & MANNEQUINS INSIDE STORE
  drawClothingRacksAndDisplays(ctx, windowX, windowTopY, windowW, windowH, groundY, t);

  // F. OWNER / STORE MANAGER AT THE COUNTER
  drawStoreOwner(ctx, windowX, windowTopY, windowW, groundY, t);

  // G. GLASS WINDOW FRAME & SUBTLE REFLECTION LINES
  ctx.strokeStyle = t >= 10.0 ? '#3B82F6' : '#475569';
  ctx.lineWidth = 2;
  ctx.strokeRect(windowX, windowTopY, windowW, windowH);

  // Vertical Window Mullions
  const paneWidth = windowW / 3;
  ctx.beginPath();
  ctx.moveTo(windowX + paneWidth, windowTopY);
  ctx.lineTo(windowX + paneWidth, groundY - 4);
  ctx.moveTo(windowX + paneWidth * 2, windowTopY);
  ctx.lineTo(windowX + paneWidth * 2, groundY - 4);
  ctx.stroke();

  // Glass Diagonal Glare Sheen Reflection
  ctx.save();
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
  ctx.lineWidth = 16;
  ctx.beginPath();
  ctx.moveTo(windowX + 20, groundY - 4);
  ctx.lineTo(windowX + windowW * 0.4, windowTopY);
  ctx.stroke();

  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(windowX + 45, groundY - 4);
  ctx.lineTo(windowX + windowW * 0.4 + 25, windowTopY);
  ctx.stroke();
  ctx.restore();
}

// Draw Clothes on Racks, Mannequins & Hanging Garments
function drawClothingRacksAndDisplays(ctx, winX, winTopY, winW, winH, groundY, t) {
  // 1. Left Window: Mannequin Display
  const manX = winX + winW * 0.16;
  const manY = groundY - 80;

  // Mannequin stand
  ctx.fillStyle = '#94A3B8';
  ctx.fillRect(manX - 10, groundY - 8, 20, 4);
  ctx.fillRect(manX - 1.5, groundY - 70, 3, 62);

  // Mannequin Head
  ctx.fillStyle = '#E2E8F0';
  ctx.beginPath();
  ctx.arc(manX, manY, 7, 0, Math.PI * 2);
  ctx.fill();

  // Mannequin Outfit (Morphs from simple dress to glamorous royal blue couture dress)
  ctx.fillStyle = t >= 10.0 ? '#1B64F2' : '#B45309';
  ctx.beginPath();
  ctx.moveTo(manX - 7, manY + 8);
  ctx.lineTo(manX + 7, manY + 8);
  ctx.lineTo(manX + 13, manY + 46);
  ctx.lineTo(manX - 13, manY + 46);
  ctx.closePath();
  ctx.fill();

  if (t >= 10.0) {
    // Gold sash on high fashion dress
    ctx.strokeStyle = '#F59E0B';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(manX - 8, manY + 22);
    ctx.lineTo(manX + 8, manY + 26);
    ctx.stroke();
  }

  // 2. Center-Left: Clothing Rack with Multi-Colored Garments
  const rackX = winX + winW * 0.38;
  const rackY = groundY - 75;
  const rackW = winW * 0.22;

  // Rack Bar
  ctx.strokeStyle = '#CBD5E1';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(rackX, rackY);
  ctx.lineTo(rackX + rackW, rackY);
  ctx.moveTo(rackX + 4, rackY);
  ctx.lineTo(rackX + 4, groundY - 6);
  ctx.moveTo(rackX + rackW - 4, rackY);
  ctx.lineTo(rackX + rackW - 4, groundY - 6);
  ctx.stroke();

  // Hanging Shirts / Jackets (Varied designer palettes)
  const garmentColors = ['#1B64F2', '#E11D48', '#059669', '#D97706', '#6366F1', '#EC4899', '#0284C7'];
  const garmentCount = t >= 10.0 ? 8 : 4; // richer stock when growing
  const garmentSpacing = rackW / (garmentCount + 1);

  for (let g = 0; g < garmentCount; g++) {
    const gx = rackX + (g + 1) * garmentSpacing;
    ctx.fillStyle = garmentColors[g % garmentColors.length];
    // Garment silhouette
    ctx.fillRect(gx - 4, rackY + 3, 8, 38 + (g % 3) * 4);
    // Hanger hook
    ctx.strokeStyle = '#94A3B8';
    ctx.lineWidth = 1;
    ctx.strokeRect(gx - 2, rackY - 3, 4, 3);
  }

  // 3. Right Window: Modern Pedestal or Secondary Mannequin
  if (t >= 10.0) {
    const man2X = winX + winW * 0.82;
    const man2Y = groundY - 82;

    ctx.fillStyle = '#E2E8F0';
    ctx.beginPath();
    ctx.arc(man2X, man2Y, 7, 0, Math.PI * 2);
    ctx.fill();

    // Suit / Blazer
    ctx.fillStyle = '#0F172A';
    ctx.fillRect(man2X - 8, man2Y + 8, 16, 42);
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(man2X - 3, man2Y + 9, 6, 14); // collar
    ctx.fillStyle = '#1B64F2';
    ctx.fillRect(man2X - 1, man2Y + 12, 2, 10); // tie
  }
}

// Draw Store Owner / Shopkeeper behind counter
function drawStoreOwner(ctx, winX, winTopY, winW, groundY, t) {
  const counterX = winX + winW * 0.64;
  const counterY = groundY - 45;
  const counterW = winW * 0.26;

  // Checkout Counter Desk
  ctx.fillStyle = t >= 10.0 ? '#1E293B' : '#78350F';
  ctx.fillRect(counterX, counterY, counterW, 39);
  ctx.strokeStyle = t >= 10.0 ? '#3B82F6' : '#92400E';
  ctx.lineWidth = 1.5;
  ctx.strokeRect(counterX, counterY, counterW, 39);

  // Modern POS Terminal / Laptop (Glows prominently in Scene 2 & 3)
  ctx.fillStyle = '#334155';
  ctx.fillRect(counterX + 6, counterY - 14, 18, 14);
  if (t >= 6.0) {
    // Screen glow (WebDari digital portal)
    ctx.fillStyle = '#60A5FA';
    ctx.fillRect(counterX + 8, counterY - 12, 14, 10);
    // Glowing radiance from screen
    const screenGlow = ctx.createRadialGradient(counterX + 15, counterY - 7, 2, counterX + 15, counterY - 7, 20);
    screenGlow.addColorStop(0, 'rgba(96, 165, 250, 0.6)');
    screenGlow.addColorStop(1, 'transparent');
    ctx.fillStyle = screenGlow;
    ctx.beginPath();
    ctx.arc(counterX + 15, counterY - 7, 20, 0, Math.PI * 2);
    ctx.fill();
  }

  // Store Owner Character Behind Desk
  const ownerX = counterX + counterW * 0.65;
  const ownerY = counterY - 24;

  // Head
  ctx.fillStyle = '#FBBF24';
  ctx.beginPath();
  ctx.arc(ownerX, ownerY, 6, 0, Math.PI * 2);
  ctx.fill();

  // Torso / Shirt
  // (In Scene 1: slouched / tired. In Scene 2 & 3: active, energetic posture!)
  ctx.fillStyle = t >= 10.0 ? '#1B64F2' : '#64748B';
  ctx.fillRect(ownerX - 6, ownerY + 6, 12, 18);

  // In busy stages: Owner is holding packaging bags & serving customers
  if (t >= 10.0) {
    // Luxury Shopping Bag in hand
    ctx.fillStyle = '#1E293B';
    ctx.fillRect(counterX + counterW - 14, counterY - 18, 12, 16);
    ctx.strokeStyle = '#F59E0B';
    ctx.strokeRect(counterX + counterW - 14, counterY - 18, 12, 16);
    // Handle
    ctx.beginPath();
    ctx.arc(counterX + counterW - 8, counterY - 18, 4, Math.PI, 0);
    ctx.stroke();
  }
}

// 5. Pedestrians & Thriving Customer Influx
function drawCharactersAndShoppers(ctx, width, height, groundY, t) {
  // SCENE 1 (0-6s): Very sparse, a single lone pedestrian walking past on the pavement looking away
  if (t < 6.0) {
    const walkProgress = (t / 6.0);
    const pedX = (width * 0.15) + walkProgress * (width * 0.7);
    drawPedestrian(ctx, pedX, groundY + 4, '#64748B', '#334155', false, walkProgress * 20);
  }

  // SCENE 2 (6-10s): First customer notices the vibrant store and enters through the door!
  else if (t < 10.0) {
    const enterProgress = (t - 6.0) / 4.0;
    // Pedestrian walks towards store center entrance
    const customerX = (width * 0.2) + enterProgress * (width * 0.28);
    drawPedestrian(ctx, customerX, groundY + 4, '#38BDF8', '#1E293B', true, enterProgress * 15);
  }

  // SCENE 3 & 4 (10-28s): Multiple bustling happy shoppers carrying shopping bags!
  else {
    const timeOffset = t - 10.0;

    // Shopper 1: Walking out with branded shopping bags happily
    const s1X = (width * 0.52) + ((timeOffset * 28) % (width * 0.42));
    drawShopperWithBags(ctx, s1X, groundY + 6, '#EC4899', '#1E293B', timeOffset * 10);

    // Shopper 2: Walking in with a friend
    const s2X = (width * 0.82) - ((timeOffset * 22) % (width * 0.32));
    drawPedestrian(ctx, s2X, groundY + 2, '#38BDF8', '#0F172A', false, timeOffset * 8);

    // Shopper 3: Browsing inside near the window (looking at dresses)
    const browseBob = Math.sin(timeOffset * 2) * 2;
    drawInsideShopper(ctx, width * 0.44 + browseBob, groundY - 14, '#10B981');

    // Shopper 4: Talking with clerk at counter
    drawInsideShopper(ctx, width * 0.60, groundY - 14, '#F59E0B');

    // Shopper 5: Walking across street with multiple bags (Scene 4 big enterprise)
    if (t >= 18.0) {
      const s5X = (width * 0.25) + ((timeOffset * 18) % (width * 0.6));
      drawShopperWithBags(ctx, s5X, groundY + 10, '#A855F7', '#0F172A', timeOffset * 12);
    }
  }
}

function drawPedestrian(ctx, x, y, shirtColor, pantsColor, isEntering, legCycle) {
  const legAngle = Math.sin(legCycle) * 6;

  // Head
  ctx.fillStyle = '#FDE68A';
  ctx.beginPath();
  ctx.arc(x, y - 48, 5, 0, Math.PI * 2);
  ctx.fill();

  // Torso
  ctx.fillStyle = shirtColor;
  ctx.fillRect(x - 5, y - 42, 10, 18);

  // Legs walking
  ctx.strokeStyle = pantsColor;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(x - 2, y - 24);
  ctx.lineTo(x - 2 + legAngle, y);
  ctx.moveTo(x + 2, y - 24);
  ctx.lineTo(x + 2 - legAngle, y);
  ctx.stroke();
}

function drawShopperWithBags(ctx, x, y, coatColor, pantsColor, legCycle) {
  const legAngle = Math.sin(legCycle) * 6;

  // Head
  ctx.fillStyle = '#FDE68A';
  ctx.beginPath();
  ctx.arc(x, y - 50, 5.5, 0, Math.PI * 2);
  ctx.fill();

  // Stylish Trench Coat / Dress
  ctx.fillStyle = coatColor;
  ctx.beginPath();
  ctx.moveTo(x - 6, y - 44);
  ctx.lineTo(x + 6, y - 44);
  ctx.lineTo(x + 9, y - 20);
  ctx.lineTo(x - 9, y - 20);
  ctx.closePath();
  ctx.fill();

  // Legs
  ctx.strokeStyle = pantsColor;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(x - 3, y - 20);
  ctx.lineTo(x - 3 + legAngle, y);
  ctx.moveTo(x + 3, y - 20);
  ctx.lineTo(x + 3 - legAngle, y);
  ctx.stroke();

  // Shopping Bags in Both Hands (WebDari / Nova branded luxury bags)
  ctx.fillStyle = '#1B64F2';
  ctx.fillRect(x + 9, y - 26, 9, 12);
  ctx.strokeStyle = '#93C5FD';
  ctx.strokeRect(x + 9, y - 26, 9, 12);

  ctx.fillStyle = '#0F172A';
  ctx.fillRect(x - 18, y - 24, 8, 11);
  ctx.strokeStyle = '#F59E0B';
  ctx.strokeRect(x - 18, y - 24, 8, 11);
}

function drawInsideShopper(ctx, x, y, color) {
  ctx.fillStyle = '#FDE68A';
  ctx.beginPath();
  ctx.arc(x, y - 40, 4.5, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = color;
  ctx.fillRect(x - 4, y - 35, 8, 22);

  ctx.fillStyle = '#1E293B';
  ctx.fillRect(x - 3, y - 13, 6, 13);
}

// 6. Volumetric Beams, WebDari Digital Energy & Cinematic Lighting
function drawCinematicLightingEffects(ctx, width, height, groundY, t) {
  // Scene 2: WebDari Catalyst Golden & Sapphire Light Sweep (t = 6.0 to 10.0)
  if (t >= 6.0 && t < 12.0) {
    const sweepProgress = (t - 6.0) / 6.0;
    const sweepX = (width * 0.2) + sweepProgress * (width * 0.6);

    const beamGrad = ctx.createLinearGradient(sweepX - 60, 0, sweepX + 60, groundY);
    beamGrad.addColorStop(0, 'rgba(27, 100, 242, 0.4)');
    beamGrad.addColorStop(0.5, 'rgba(96, 165, 250, 0.25)');
    beamGrad.addColorStop(1, 'transparent');

    ctx.fillStyle = beamGrad;
    ctx.beginPath();
    ctx.moveTo(width / 2, 0);
    ctx.lineTo(sweepX + 90, groundY);
    ctx.lineTo(sweepX - 90, groundY);
    ctx.closePath();
    ctx.fill();

    // Floating golden/blue energy sparkle particles
    for (let p = 0; p < 18; p++) {
      const px = sweepX + Math.sin(t * 4 + p) * 70;
      const py = groundY - 40 - ((t * 45 + p * 20) % 140);
      const pr = 1.5 + (p % 3);
      ctx.fillStyle = p % 2 === 0 ? '#93C5FD' : '#FDE68A';
      ctx.beginPath();
      ctx.arc(px, py, pr, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Scene 4 & 5: Grand Ambient Luxury Lighting (t >= 18.0)
  if (t >= 18.0) {
    // Subtle luxury lens flare at top of Nova Flagship
    const flareX = width / 2;
    const flareY = height * 0.35;
    const flareGrad = ctx.createRadialGradient(flareX, flareY, 2, flareX, flareY, width * 0.45);
    flareGrad.addColorStop(0, 'rgba(96, 165, 250, 0.2)');
    flareGrad.addColorStop(0.4, 'rgba(251, 191, 36, 0.08)');
    flareGrad.addColorStop(1, 'transparent');

    ctx.fillStyle = flareGrad;
    ctx.fillRect(0, 0, width, height);
  }

  // Cinematic Vignette around the entire frame
  const vignette = ctx.createRadialGradient(width / 2, height / 2, width * 0.35, width / 2, height / 2, width * 0.7);
  vignette.addColorStop(0, 'transparent');
  vignette.addColorStop(1, 'rgba(3, 7, 18, 0.65)');
  ctx.fillStyle = vignette;
  ctx.fillRect(0, 0, width, height);
}
