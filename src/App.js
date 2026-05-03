import { useState, useEffect, useRef } from "react";

// ─── SPLASH QUOTES ────────────────────────────────────────────────────────────
const QUOTES_FR = [
  { text: "La douleur est temporaire. La fierté est éternelle.", author: "" },
  { text: "Chaque répétition te rapproche de qui tu veux devenir.", author: "" },
  { text: "Le seul mauvais entraînement est celui que tu n'as pas fait.", author: "" },
  { text: "Ton corps peut tout supporter. C'est ton esprit qu'il faut convaincre.", author: "" },
  { text: "La discipline, c'est choisir entre ce que tu veux maintenant et ce que tu veux le plus.", author: "" },
  { text: "Forge ton corps. Forge ton caractère.", author: "" },
  { text: "Le succès se construit une séance à la fois.", author: "" },
  { text: "Ne compte pas les jours. Fais que les jours comptent.", author: "Muhammad Ali" },
  { text: "Les limites, comme les peurs, ne sont souvent que des illusions.", author: "Michael Jordan" },
  { text: "La sueur d'aujourd'hui est la force de demain.", author: "" },
  { text: "Tu ne regretteras jamais une séance. Seulement celles que tu as manquées.", author: "" },
  { text: "Sois plus fort que tes excuses.", author: "" },
  { text: "Le fer ne ment pas.", author: "" },
  { text: "Chaque kilo soulevé est une victoire sur toi-même.", author: "" },
  { text: "Ce qui te challenge te change.", author: "" },
];

const QUOTES_EN = [
  { text: "Pain is temporary. Pride is forever.", author: "" },
  { text: "Every rep brings you closer to who you want to be.", author: "" },
  { text: "The only bad workout is the one that didn't happen.", author: "" },
  { text: "Your body can handle almost anything. It's your mind you have to convince.", author: "" },
  { text: "Discipline is choosing between what you want now and what you want most.", author: "" },
  { text: "Forge your body. Forge your character.", author: "" },
  { text: "Success is built one session at a time.", author: "" },
  { text: "Don't count the days. Make the days count.", author: "Muhammad Ali" },
  { text: "Limits, like fears, are often just an illusion.", author: "Michael Jordan" },
  { text: "Today's sweat is tomorrow's strength.", author: "" },
  { text: "You'll never regret a workout. Only the ones you skipped.", author: "" },
  { text: "Be stronger than your excuses.", author: "" },
  { text: "The iron never lies.", author: "" },
  { text: "Every kilo lifted is a victory over yourself.", author: "" },
  { text: "What challenges you changes you.", author: "" },
];

// ─── SPLASH SCREEN ────────────────────────────────────────────────────────────
function SplashScreen({ onDone, isDark, lang }) {
  const [phase, setPhase] = useState("in"); // in | visible | out
  const quotes = lang === "en" ? QUOTES_EN : QUOTES_FR;
  const quote = useRef(quotes[Math.floor(Math.random() * quotes.length)]);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("visible"), 100);
    return () => clearTimeout(t1);
  }, []);

  const handleSkip = () => {
    setPhase("out");
    setTimeout(onDone, 500);
  };

  const bg = isDark ? "#0f0f14" : "#ffffff";
  const textColor = isDark ? "#f0ede8" : "#1a1a1a";
  const mutedColor = isDark ? "#555" : "#aaa";
  const accentColor = "#2563eb";

  return (
    <div onClick={handleSkip} style={{
      position: "fixed", inset: 0, zIndex: 1000,
      background: bg,
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      padding: "40px 36px",
      cursor: "pointer",
      transition: "opacity 0.5s ease",
      opacity: phase === "out" ? 0 : phase === "visible" ? 1 : 0,
    }}>
      {/* App name */}
      <div style={{
        fontSize: 11, fontWeight: 700, letterSpacing: 4,
        color: accentColor, textTransform: "uppercase", marginBottom: 60,
        transition: "opacity 0.8s ease, transform 0.8s ease",
        opacity: phase === "visible" ? 1 : 0,
        transform: phase === "visible" ? "translateY(0)" : "translateY(-10px)",
      }}>
        IRON LOG PRO
      </div>

      {/* Quote */}
      <div style={{
        textAlign: "center",
        transition: "opacity 0.9s ease 0.2s, transform 0.9s ease 0.2s",
        opacity: phase === "visible" ? 1 : 0,
        transform: phase === "visible" ? "translateY(0)" : "translateY(20px)",
      }}>
        {/* Decorative line */}
        <div style={{
          width: 40, height: 3, background: accentColor,
          borderRadius: 2, margin: "0 auto 28px",
        }}/>

        <div style={{
          fontSize: 24, fontWeight: 800, lineHeight: 1.35,
          color: textColor, marginBottom: 20, letterSpacing: -0.3,
        }}>
          "{quote.current.text}"
        </div>

        {quote.current.author && (
          <div style={{ fontSize: 14, color: mutedColor, fontWeight: 600, letterSpacing: 1 }}>
            — {quote.current.author}
          </div>
        )}

        <div style={{
          width: 40, height: 3, background: accentColor,
          borderRadius: 2, margin: "28px auto 0",
        }}/>
      </div>

      {/* Skip button */}
      <div style={{
        position: "absolute", bottom: 60,
        display: "flex", flexDirection: "column", alignItems: "center", gap: 10,
        transition: "opacity 0.9s ease 0.5s",
        opacity: phase === "visible" ? 1 : 0,
      }}>
        <div style={{
          fontSize: 13, color: mutedColor, fontWeight: 600, letterSpacing: 0.5,
        }}>
          {lang === "en" ? "Tap anywhere to continue" : "Appuie pour continuer"}
        </div>
        {/* Animated dots */}
        <div style={{ display: "flex", gap: 6 }}>
          {[0, 1, 2].map(i => (
            <div key={i} style={{
              width: 6, height: 6, borderRadius: "50%",
              background: accentColor,
              opacity: 0.3 + i * 0.3,
            }}/>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── DATA ────────────────────────────────────────────────────────────────────
const DEFAULT_LIBRARY = [
  { id: "e001", name: "Développé couché barre", category: "Pectoraux", type: "weight" },
  { id: "e002", name: "Développé couché haltères", category: "Pectoraux", type: "weight" },
  { id: "e003", name: "Développé incliné barre", category: "Pectoraux", type: "weight" },
  { id: "e004", name: "Développé incliné haltères", category: "Pectoraux", type: "weight" },
  { id: "e005", name: "Développé décliné", category: "Pectoraux", type: "weight" },
  { id: "e006", name: "Écarté haltères plat", category: "Pectoraux", type: "weight" },
  { id: "e007", name: "Écarté haltères incliné", category: "Pectoraux", type: "weight" },
  { id: "e008", name: "Écarté poulie croisée", category: "Pectoraux", type: "weight" },
  { id: "e009", name: "Dips (pectoraux)", category: "Pectoraux", type: "bodyweight" },
  { id: "e010", name: "Pompes", category: "Pectoraux", type: "bodyweight" },
  { id: "e011", name: "Pull-over haltère", category: "Pectoraux", type: "weight" },
  { id: "e012", name: "Pec deck / Butterfly", category: "Pectoraux", type: "weight" },
  { id: "e013", name: "Soulevé de terre", category: "Dos", type: "weight" },
  { id: "e014", name: "Soulevé de terre roumain", category: "Dos", type: "weight" },
  { id: "e015", name: "Rowing barre", category: "Dos", type: "weight" },
  { id: "e016", name: "Rowing haltère unilatéral", category: "Dos", type: "weight" },
  { id: "e017", name: "Rowing poulie basse", category: "Dos", type: "weight" },
  { id: "e018", name: "Tirage vertical prise large", category: "Dos", type: "weight" },
  { id: "e019", name: "Tirage vertical prise serrée", category: "Dos", type: "weight" },
  { id: "e020", name: "Tractions pronation", category: "Dos", type: "bodyweight" },
  { id: "e021", name: "Tractions supination", category: "Dos", type: "bodyweight" },
  { id: "e022", name: "Face pull", category: "Dos", type: "weight" },
  { id: "e023", name: "Shrug barre", category: "Dos", type: "weight" },
  { id: "e024", name: "Hyperextension", category: "Dos", type: "bodyweight" },
  { id: "e025", name: "Développé militaire barre", category: "Épaules", type: "weight" },
  { id: "e026", name: "Développé militaire haltères", category: "Épaules", type: "weight" },
  { id: "e027", name: "Élévations latérales haltères", category: "Épaules", type: "weight" },
  { id: "e028", name: "Élévations latérales poulie", category: "Épaules", type: "weight" },
  { id: "e029", name: "Élévations frontales haltères", category: "Épaules", type: "weight" },
  { id: "e030", name: "Oiseau haltères", category: "Épaules", type: "weight" },
  { id: "e031", name: "Upright row barre", category: "Épaules", type: "weight" },
  { id: "e032", name: "Arnold press", category: "Épaules", type: "weight" },
  { id: "e033", name: "Curl barre", category: "Biceps", type: "weight" },
  { id: "e034", name: "Curl haltères alterné", category: "Biceps", type: "weight" },
  { id: "e035", name: "Curl marteau", category: "Biceps", type: "weight" },
  { id: "e036", name: "Curl incliné haltères", category: "Biceps", type: "weight" },
  { id: "e037", name: "Curl concentration", category: "Biceps", type: "weight" },
  { id: "e038", name: "Curl poulie basse", category: "Biceps", type: "weight" },
  { id: "e039", name: "Curl barre EZ", category: "Biceps", type: "weight" },
  { id: "e040", name: "Dips (triceps)", category: "Triceps", type: "bodyweight" },
  { id: "e041", name: "Extension poulie haute", category: "Triceps", type: "weight" },
  { id: "e042", name: "Barre au front (Skull Crusher)", category: "Triceps", type: "weight" },
  { id: "e043", name: "Extension nuque haltère", category: "Triceps", type: "weight" },
  { id: "e044", name: "Kick-back haltère", category: "Triceps", type: "weight" },
  { id: "e045", name: "Extension poulie corde", category: "Triceps", type: "weight" },
  { id: "e046", name: "Squat barre", category: "Jambes", type: "weight" },
  { id: "e047", name: "Squat gobelet", category: "Jambes", type: "weight" },
  { id: "e048", name: "Squat hack", category: "Jambes", type: "weight" },
  { id: "e049", name: "Leg press", category: "Jambes", type: "weight" },
  { id: "e050", name: "Fentes marchées haltères", category: "Jambes", type: "weight" },
  { id: "e051", name: "Fentes bulgares", category: "Jambes", type: "weight" },
  { id: "e052", name: "Leg extension", category: "Jambes", type: "weight" },
  { id: "e053", name: "Leg curl allongé", category: "Jambes", type: "weight" },
  { id: "e054", name: "Leg curl assis", category: "Jambes", type: "weight" },
  { id: "e055", name: "Good morning", category: "Jambes", type: "weight" },
  { id: "e056", name: "Hip thrust barre", category: "Jambes", type: "weight" },
  { id: "e057", name: "Mollets debout machine", category: "Jambes", type: "weight" },
  { id: "e058", name: "Mollets assis machine", category: "Jambes", type: "weight" },
  { id: "e059", name: "Abducteur machine", category: "Jambes", type: "weight" },
  { id: "e060", name: "Adducteur machine", category: "Jambes", type: "weight" },
  { id: "e061", name: "Crunch", category: "Abdos", type: "bodyweight" },
  { id: "e062", name: "Crunch poulie haute", category: "Abdos", type: "weight" },
  { id: "e063", name: "Relevé de jambes", category: "Abdos", type: "bodyweight" },
  { id: "e064", name: "Gainage planche", category: "Abdos", type: "bodyweight" },
  { id: "e065", name: "Gainage latéral", category: "Abdos", type: "bodyweight" },
  { id: "e066", name: "Russian twist", category: "Abdos", type: "bodyweight" },
  { id: "e067", name: "Ab wheel", category: "Abdos", type: "bodyweight" },
  { id: "e068", name: "Dragon flag", category: "Abdos", type: "bodyweight" },
  { id: "e069", name: "Course à pied", category: "Cardio", type: "cardio" },
  { id: "e070", name: "Vélo stationnaire", category: "Cardio", type: "cardio" },
  { id: "e071", name: "Rameur", category: "Cardio", type: "cardio" },
  { id: "e072", name: "Elliptique", category: "Cardio", type: "cardio" },
  { id: "e073", name: "Corde à sauter", category: "Cardio", type: "cardio" },
  { id: "e074", name: "HIIT", category: "Cardio", type: "cardio" },
];

const CATEGORIES = ["Pectoraux","Dos","Épaules","Biceps","Triceps","Jambes","Abdos","Cardio","Autre"];
const TYPE_COLORS = { weight:"#2563eb", bodyweight:"#059669", cardio:"#dc2626" };
const PROGRAM_COLORS = ["#2563eb","#059669","#dc2626","#7c3aed","#ea580c","#db2777","#0891b2","#65a30d"];
const ALL_TABS = ["journal","split","history","stats","body","library"];
const TAB_META = {
  journal: { fr:"Session",     en:"Session",   icon:"◉" },
  split:   { fr:"Split",       en:"Split",      icon:"◫" },
  history: { fr:"Historique",  en:"History",    icon:"≡" },
  stats:   { fr:"Stats",       en:"Stats",      icon:"↗" },
  body:    { fr:"Corps",       en:"Body",       icon:"◎" },
  library: { fr:"Exercices",   en:"Exercises",  icon:"▦" },
};
const MOOD_OPTIONS = [
  { v:1, fr:"Mauvaise", en:"Bad" },
  { v:2, fr:"Moyenne",  en:"Meh" },
  { v:3, fr:"Bonne",    en:"Good" },
  { v:4, fr:"Top",      en:"Top" },
];
const ENERGY_OPTIONS = [
  { v:1, label:"—" },
  { v:2, label:"+" },
  { v:3, label:"++" },
  { v:4, label:"+++" },
];
const REST_PRESETS = [30,60,90,120,180];

const today = () => new Date().toISOString().split("T")[0];
const getHour = () => new Date().getHours();
const calcVolume = (sets) => sets.reduce((a,s)=>a+(parseFloat(s.reps)||0)*(parseFloat(s.weight)||0),0);
const calcPR = (sets) => Math.max(0,...sets.map(s=>parseFloat(s.weight)||0));
const fmtDate  = (d,lang) => new Date(d+"T00:00:00").toLocaleDateString(lang==="en"?"en-US":"fr-FR",{weekday:"long",day:"numeric",month:"long"});
const fmtShort = (d,lang) => new Date(d+"T00:00:00").toLocaleDateString(lang==="en"?"en-US":"fr-FR",{weekday:"short",day:"numeric",month:"short"});

// ─── SPARKLINE ────────────────────────────────────────────────────────────────
function Sparkline({ data, color="#2563eb", width=160, height=44 }) {
  if (!data||data.length<2) return null;
  const vals=data.map(d=>d.value);
  const min=Math.min(...vals),max=Math.max(...vals),range=max-min||1;
  const pts=data.map((d,i)=>{
    const x=(i/(data.length-1))*width;
    const y=height-((d.value-min)/range)*(height-8)-4;
    return `${x},${y}`;
  }).join(" ");
  return (
    <svg width={width} height={height} style={{overflow:"visible"}}>
      <polyline points={pts} fill="none" stroke={color} strokeWidth={2} strokeLinejoin="round" strokeLinecap="round"/>
      {data.map((d,i)=>{
        const x=(i/(data.length-1))*width;
        const y=height-((d.value-min)/range)*(height-8)-4;
        return <circle key={i} cx={x} cy={y} r={3} fill={color}/>;
      })}
    </svg>
  );
}

// ─── REST TIMER ───────────────────────────────────────────────────────────────
function RestTimer({ C, T, isDark }) {
  const [duration, setDuration] = useState(60);
  const [remaining, setRemaining] = useState(null);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (running && remaining > 0) {
      intervalRef.current = setInterval(() => setRemaining(r => r - 1), 1000);
    } else if (remaining === 0) {
      setRunning(false);
      setRemaining(null);
    }
    return () => clearInterval(intervalRef.current);
  }, [running, remaining]);

  const start = (d) => { clearInterval(intervalRef.current); setDuration(d); setRemaining(d); setRunning(true); };
  const stop  = () => { clearInterval(intervalRef.current); setRunning(false); setRemaining(null); };
  const pct   = remaining != null ? (remaining / duration) * 100 : 100;
  const r=18, circ=2*Math.PI*r;

  return (
    <div style={{background:C.card,border:`1px solid ${C.border}`,borderRadius:14,padding:"14px 16px",marginBottom:10}}>
      <div style={{fontWeight:700,fontSize:13,marginBottom:10,color:C.muted,letterSpacing:0.5,textTransform:"uppercase"}}>{T("Chrono de repos","Rest timer")}</div>

      {/* Presets */}
      <div style={{display:"flex",gap:6,marginBottom:12}}>
        {REST_PRESETS.map(p=>(
          <button key={p} onClick={()=>start(p)}
            style={{flex:1,padding:"7px 0",background:running&&duration===p?C.blue:(isDark?"#26262f":"#f0f0ee"),border:"none",borderRadius:8,color:running&&duration===p?"#fff":C.muted,fontWeight:700,fontSize:12,cursor:"pointer",fontFamily:"inherit"}}>
            {p}s
          </button>
        ))}
      </div>

      {/* Circle display */}
      {running && remaining != null ? (
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:10}}>
          <svg width={80} height={80} style={{transform:"rotate(-90deg)"}}>
            <circle cx={40} cy={40} r={r} fill="none" stroke={isDark?"#26262f":"#e8e8e2"} strokeWidth={4}/>
            <circle cx={40} cy={40} r={r} fill="none" stroke={C.blue} strokeWidth={4}
              strokeDasharray={circ} strokeDashoffset={circ*(1-pct/100)} strokeLinecap="round"
              style={{transition:"stroke-dashoffset 0.9s linear"}}/>
            <text x={40} y={40} textAnchor="middle" dominantBaseline="middle" fill={C.text}
              fontSize={16} fontWeight={800} style={{transform:"rotate(90deg)",transformOrigin:"40px 40px"}}>
              {remaining}
            </text>
          </svg>
          <button onClick={stop} style={{background:"none",border:`1px solid ${C.border}`,borderRadius:8,padding:"6px 20px",color:C.muted,cursor:"pointer",fontFamily:"inherit",fontSize:13}}>
            {T("Arrêter","Stop")}
          </button>
        </div>
      ) : (
        <div style={{fontSize:12,color:C.muted,textAlign:"center"}}>{T("Sélectionne une durée pour démarrer","Select a duration to start")}</div>
      )}
    </div>
  );
}

// ─── MAIN APP ─────────────────────────────────────────────────────────────────
export default function IronLogPro() {
  const [settings, setSettings] = useState({
    theme:"auto", lang:"fr", username:"", unit:"kg",
    tabOrder:[...ALL_TABS], hiddenTabs:[],
  });
  const [splashDone, setSplashDone] = useState(false);
  const [view, setView] = useState("journal");
  const [selectedDate, setSelectedDate] = useState(today());
  const [sessions, setSessions] = useState({});
  const [library, setLibrary] = useState(DEFAULT_LIBRARY);
  const [programs, setPrograms] = useState([]);
  const [templates, setTemplates] = useState([]); // [{id,name,exercises:[]}]
  const [bodyLog, setBodyLog] = useState([]); // [{date,weight}]
  const [toast, setToast] = useState(null);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [resetConfirm, setResetConfirm] = useState(false);
  // Journal
  const [addingEx, setAddingEx] = useState(false);
  const [filterCat, setFilterCat] = useState("Tout");
  const [searchQ, setSearchQ] = useState("");
  const [statsEx, setStatsEx] = useState(null);
  const [showTimer, setShowTimer] = useState(false);
  // Library
  const [creatingEx, setCreatingEx] = useState(false);
  const [newEx, setNewEx] = useState({name:"",category:"Pectoraux",type:"weight"});
  const [editingLib, setEditingLib] = useState(false);
  // Split
  const [editingProgram, setEditingProgram] = useState(null);
  const [editingDay, setEditingDay] = useState(null);
  const [addingDayEx, setAddingDayEx] = useState(false);
  const [creatingProgram, setCreatingProgram] = useState(false);
  const [newProg, setNewProg] = useState({name:"",color:"#2563eb"});
  // Body
  const [newBodyWeight, setNewBodyWeight] = useState("");
  const [newBodyDate, setNewBodyDate] = useState(today());
  // Duplicate
  const [duplicateModal, setDuplicateModal] = useState(false);
  const [templateModal, setTemplateModal] = useState(false);   // browse & apply
  const [creatingTemplate, setCreatingTemplate] = useState(false); // create new
  const [newTemplate, setNewTemplate] = useState({name:"",exercises:[]});
  const [templateFilterCat, setTemplateFilterCat] = useState("Tout");
  const [templateSearchQ, setTemplateSearchQ] = useState("");

  useEffect(()=>{
    (async()=>{
      try {
        const keys=["ilp-sessions","ilp-library","ilp-programs","ilp-settings","ilp-body","ilp-templates"];
        const [s,l,p,cfg,b,tpl]=await Promise.all(keys.map(k=>window.storage.get(k).catch(()=>null)));
        if(s) setSessions(JSON.parse(s.value));
        if(l) setLibrary(JSON.parse(l.value));
        if(p) setPrograms(JSON.parse(p.value));
        if(cfg) setSettings(prev=>({...prev,...JSON.parse(cfg.value)}));
        if(b) setBodyLog(JSON.parse(b.value));
        if(tpl) setTemplates(JSON.parse(tpl.value));
      } catch{}
    })();
  },[]);

  const persist = (k,d) => window.storage.set(k,JSON.stringify(d)).catch(()=>{});
  const saveSessions = d => { setSessions(d); persist("ilp-sessions",d); };
  const saveLibrary  = d => { setLibrary(d);  persist("ilp-library",d); };
  const savePrograms = d => { setPrograms(d); persist("ilp-programs",d); };
  const saveSettings = d => { setSettings(d); persist("ilp-settings",d); };
  const saveBodyLog  = d => { setBodyLog(d);  persist("ilp-body",d); };
  const saveTemplates= d => { setTemplates(d);persist("ilp-templates",d); };
  const showToast = msg => { setToast(msg); setTimeout(()=>setToast(null),2500); };

  const isDark = settings.theme==="dark"||(settings.theme==="auto"&&(getHour()>=21||getHour()<7));
  const lang = settings.lang;
  const unit = settings.unit;
  const T = (fr,en) => lang==="en"?en:fr;
  const TL = { weight:T("Poids","Weight"), bodyweight:T("Poids de corps","Bodyweight"), cardio:"Cardio" };

  const C = isDark ? {
    bg:"#0f0f14",card:"#18181f",border:"#26262f",text:"#f0ede8",
    muted:"#555",accent:"#f0ede8",blue:"#3b82f6",green:"#10b981",
    red:"#ef4444",orange:"#f97316",inputBg:"#1e1e28",sub:"#1e1e28",
  } : {
    bg:"#f5f5f0",card:"#ffffff",border:"#e8e8e2",text:"#1a1a1a",
    muted:"#888",accent:"#1a1a1a",blue:"#2563eb",green:"#059669",
    red:"#dc2626",orange:"#ea580c",inputBg:"#f9f9f7",sub:"#f0f0ee",
  };

  const visibleTabs = (settings.tabOrder||ALL_TABS).filter(t=>!(settings.hiddenTabs||[]).includes(t));
  const activeProgram = programs.find(p=>p.active);
  const session = sessions[selectedDate]||{exercises:[],note:"",mood:0,energy:0};
  const totalVolume = session.exercises.reduce((a,e)=>a+calcVolume(e.sets),0);
  const filteredLib = library.filter(e=>{
    const mc=filterCat==="Tout"||filterCat==="All"||e.category===filterCat;
    const ms=e.name.toLowerCase().includes(searchQ.toLowerCase());
    return mc&&ms;
  });

  // ── Tab visibility ──
  const toggleHideTab = (tabId) => {
    const hidden = settings.hiddenTabs||[];
    const updated = hidden.includes(tabId) ? hidden.filter(t=>t!==tabId) : [...hidden,tabId];
    saveSettings({...settings,hiddenTabs:updated});
  };

  // ── Session ops ──
  const updateSession = (patch) => {
    const updated = {...sessions,[selectedDate]:{...session,...patch}};
    saveSessions(updated);
  };
  const addExToSession = ex => {
    updateSession({exercises:[...session.exercises,{...ex,sets:[{reps:"",weight:""}]}]});
    setAddingEx(false); showToast(`${ex.name} ${T("ajouté","added")}`);
  };
  const updateSet = (ei,si,field,val) => {
    const exs=session.exercises.map((e,i)=>i!==ei?e:{...e,sets:e.sets.map((s,j)=>j!==si?s:{...s,[field]:val})});
    updateSession({exercises:exs});
  };
  const addSet = ei => {
    const exs=session.exercises.map((e,i)=>i!==ei?e:{...e,sets:[...e.sets,{reps:"",weight:""}]});
    updateSession({exercises:exs});
  };
  const removeSet = (ei,si) => {
    const exs=session.exercises.map((e,i)=>i!==ei?e:{...e,sets:e.sets.filter((_,j)=>j!==si)}).filter(e=>e.sets.length>0);
    updateSession({exercises:exs});
  };
  const removeEx = ei => updateSession({exercises:session.exercises.filter((_,i)=>i!==ei)});

  const duplicateSession = (fromDate) => {
    const src = sessions[fromDate];
    if (!src) return;
    const copied = src.exercises.map(e=>({...e,sets:e.sets.map(s=>({...s}))}));
    updateSession({exercises:[...session.exercises,...copied]});
    setDuplicateModal(false);
    showToast(T("Session dupliquée !","Session duplicated!"));
  };

  const getPrev = exId => {
    const dates=Object.keys(sessions).sort().filter(d=>d<selectedDate);
    for(let i=dates.length-1;i>=0;i--){
      const f=sessions[dates[i]].exercises?.find(e=>e.id===exId);
      if(f) return {date:dates[i],ex:f};
    }
    return null;
  };
  const getExStats = exId => {
    const pts=[];
    Object.entries(sessions).sort(([a],[b])=>a>b?1:-1).forEach(([date,s])=>{
      s.exercises?.forEach(e=>{
        if(e.id===exId){const pr=calcPR(e.sets),vol=calcVolume(e.sets);if(pr>0||vol>0)pts.push({date,pr,vol});}
      });
    });
    return pts;
  };
  const gs = ()=>{
    const ds=Object.keys(sessions).filter(d=>sessions[d].exercises?.length>0);
    return {
      sessions:ds.length,
      volume:ds.reduce((a,d)=>a+sessions[d].exercises.reduce((b,e)=>b+calcVolume(e.sets),0),0),
      sets:ds.reduce((a,d)=>a+sessions[d].exercises.reduce((b,e)=>b+e.sets.length,0),0),
      exercises:library.length,
    };
  };
  const exportData = () => {
    const blob=new Blob([JSON.stringify({sessions,library,programs,bodyLog,settings,exportedAt:new Date().toISOString()},null,2)],{type:"application/json"});
    const url=URL.createObjectURL(blob);
    const a=document.createElement("a"); a.href=url; a.download="iron-log-export.json"; a.click();
    URL.revokeObjectURL(url);
    showToast(T("Données exportées !","Data exported!"));
  };
  const moveTab = (idx,dir) => {
    const arr=[...(settings.tabOrder||ALL_TABS)]; const swap=idx+dir;
    if(swap<0||swap>=arr.length) return;
    [arr[idx],arr[swap]]=[arr[swap],arr[idx]];
    saveSettings({...settings,tabOrder:arr});
  };
  const goTo = id => {
    setView(id); setStatsEx(null); setEditingProgram(null);
    setEditingDay(null); setAddingDayEx(false); setShowTimer(false);
  };

  // ── Styles ──
  const inp = {background:C.inputBg,border:`1.5px solid ${C.border}`,borderRadius:8,color:C.text,padding:"9px 10px",fontSize:15,fontFamily:"inherit",width:"100%",textAlign:"center",boxSizing:"border-box",outline:"none"};
  const pill = (active,color) => ({padding:"6px 14px",borderRadius:20,border:"none",background:active?(color||C.accent):(isDark?"#26262f":"#ececea"),color:active?"#fff":C.muted,fontSize:12,fontWeight:600,cursor:"pointer",whiteSpace:"nowrap",fontFamily:"inherit",letterSpacing:0.3});
  const btn  = color => ({background:color||C.accent,border:"none",borderRadius:10,color:"#fff",padding:"12px 20px",fontWeight:700,fontSize:14,cursor:"pointer",fontFamily:"inherit",letterSpacing:0.3});
  const tag  = color => ({fontSize:10,fontWeight:700,letterSpacing:1,textTransform:"uppercase",color,background:color+"22",padding:"2px 8px",borderRadius:4});
  const card = {background:C.card,border:`1px solid ${C.border}`,borderRadius:14,marginBottom:10,overflow:"hidden"};
  const modal = {position:"fixed",inset:0,background:"rgba(0,0,0,0.5)",zIndex:100,display:"flex",alignItems:"flex-end"};
  const mbox  = {background:C.card,width:"100%",maxWidth:480,margin:"0 auto",borderRadius:"20px 20px 0 0",padding:"20px",maxHeight:"80vh",overflowY:"auto"};
  const sec   = {fontSize:11,fontWeight:700,color:C.muted,letterSpacing:1,textTransform:"uppercase",marginBottom:8,marginTop:18,display:"block"};

  // ─────────────────────────────────────────────────────────────────────────
  return (
    <div style={{minHeight:"100vh",background:C.bg,color:C.text,fontFamily:"'Barlow','Trebuchet MS',sans-serif",maxWidth:480,margin:"0 auto",paddingBottom:80}}>

      {/* SPLASH */}
      {!splashDone && (
        <SplashScreen onDone={() => setSplashDone(true)} isDark={isDark} lang={lang} />
      )}

      {/* HEADER */}
      <div style={{padding:"18px 16px 12px",background:C.card,borderBottom:`1px solid ${C.border}`,position:"sticky",top:0,zIndex:20}}>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <div>
            <div style={{fontSize:10,fontWeight:700,letterSpacing:3,color:C.blue,textTransform:"uppercase"}}>IRON LOG PRO</div>
            <div style={{fontSize:20,fontWeight:800,lineHeight:1.1}}>
              {settings.username?`${T("Bonjour","Hey")}, ${settings.username}`:(TAB_META[view]?.[lang]||T("Paramètres","Settings"))}
            </div>
          </div>
          <div style={{display:"flex",gap:8,alignItems:"center"}}>
            {view==="journal"&&<input type="date" value={selectedDate} onChange={e=>setSelectedDate(e.target.value)} style={{...inp,width:"auto",fontSize:12,padding:"7px 10px",textAlign:"left"}}/>}
            <button onClick={()=>setSettingsOpen(true)} style={{background:C.sub,border:`1px solid ${C.border}`,borderRadius:10,width:38,height:38,cursor:"pointer",fontSize:17,display:"flex",alignItems:"center",justifyContent:"center"}}>⚙</button>
          </div>
        </div>
        {activeProgram&&(
          <div style={{marginTop:8,display:"inline-flex",alignItems:"center",gap:6,background:activeProgram.color+"18",border:`1px solid ${activeProgram.color}44`,borderRadius:20,padding:"4px 12px"}}>
            <div style={{width:8,height:8,borderRadius:"50%",background:activeProgram.color}}/>
            <span style={{fontSize:12,fontWeight:700,color:activeProgram.color}}>{activeProgram.name}</span>
          </div>
        )}
      </div>

      {/* ══ JOURNAL ══ */}
      {view==="journal"&&(
        <div style={{padding:"14px 16px"}}>
          {/* Summary */}
          <div style={{display:"flex",gap:8,marginBottom:14}}>
            {[{l:T("Exercices","Exercises"),v:session.exercises.length},{l:T("Séries","Sets"),v:session.exercises.reduce((a,e)=>a+e.sets.length,0)},{l:"Volume",v:totalVolume>0?`${totalVolume.toLocaleString("fr-FR")} ${unit}`:"—"}].map(s=>(
              <div key={s.l} style={{flex:1,background:C.card,border:`1px solid ${C.border}`,borderRadius:12,padding:"10px 8px",textAlign:"center"}}>
                <div style={{fontSize:16,fontWeight:800}}>{s.v}</div>
                <div style={{fontSize:10,color:C.muted,fontWeight:600,letterSpacing:0.5,textTransform:"uppercase"}}>{s.l}</div>
              </div>
            ))}
          </div>

          {/* Session note + mood + energy */}
          <div style={{...card,marginBottom:12}}>
            <div style={{padding:"12px 16px"}}>
              <div style={{fontSize:11,fontWeight:700,color:C.muted,letterSpacing:0.5,textTransform:"uppercase",marginBottom:8}}>{T("Note de session","Session note")}</div>
              <textarea
                value={session.note||""}
                onChange={e=>updateSession({note:e.target.value})}
                placeholder={T("Commentaire libre, ressenti, conditions...","Free notes, feelings, conditions...")}
                rows={2}
                style={{...inp,textAlign:"left",padding:"9px 12px",resize:"none",lineHeight:1.5,fontSize:13}}
              />
              <div style={{display:"flex",gap:10,marginTop:10}}>
                <div style={{flex:1}}>
                  <div style={{fontSize:10,fontWeight:700,color:C.muted,textTransform:"uppercase",marginBottom:6}}>{T("Humeur","Mood")}</div>
                  <div style={{display:"flex",gap:4}}>
                    {MOOD_OPTIONS.map(m=>(
                      <button key={m.v} onClick={()=>updateSession({mood:session.mood===m.v?0:m.v})}
                        style={{flex:1,padding:"5px 0",background:session.mood===m.v?C.blue:C.sub,border:"none",borderRadius:6,color:session.mood===m.v?"#fff":C.muted,fontSize:10,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}}>
                        {lang==="en"?m.en:m.fr}
                      </button>
                    ))}
                  </div>
                </div>
                <div style={{flex:1}}>
                  <div style={{fontSize:10,fontWeight:700,color:C.muted,textTransform:"uppercase",marginBottom:6}}>{T("Énergie","Energy")}</div>
                  <div style={{display:"flex",gap:4}}>
                    {ENERGY_OPTIONS.map(e=>(
                      <button key={e.v} onClick={()=>updateSession({energy:session.energy===e.v?0:e.v})}
                        style={{flex:1,padding:"5px 0",background:session.energy===e.v?C.orange:C.sub,border:"none",borderRadius:6,color:session.energy===e.v?"#fff":C.muted,fontSize:11,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}}>
                        {e.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Rest timer toggle */}
          <div style={{display:"flex",gap:8,marginBottom:10,flexWrap:"wrap"}}>
            <button onClick={()=>setShowTimer(!showTimer)} style={{...pill(showTimer,C.blue),padding:"8px 14px",fontSize:12}}>
              {showTimer?T("Masquer chrono","Hide timer"):T("Chrono de repos","Rest timer")}
            </button>
            <button onClick={()=>setDuplicateModal(true)} style={{...pill(false),padding:"8px 14px",fontSize:12}}>
              {T("Dupliquer session","Duplicate session")}
            </button>
            <button onClick={()=>setTemplateModal(true)} style={{...pill(false),padding:"8px 14px",fontSize:12}}>
              {T("Templates","Templates")}
            </button>
          </div>
          {showTimer&&<RestTimer C={C} T={T} isDark={isDark}/>}

          {session.exercises.length===0&&(
            <div style={{textAlign:"center",padding:"44px 20px",border:`1.5px dashed ${C.border}`,borderRadius:14,color:C.muted}}>
              <div style={{fontSize:32,marginBottom:8}}>+</div>
              <div style={{fontWeight:600}}>{T("Aucun exercice","No exercises yet")}</div>
              <div style={{fontSize:13,marginTop:4}}>{T("Appuie sur + pour commencer","Tap + to get started")}</div>
            </div>
          )}

          {session.exercises.map((ex,ei)=>{
            const prev=getPrev(ex.id);
            const pr=calcPR(ex.sets),vol=calcVolume(ex.sets);
            const prevPr=prev?calcPR(prev.ex.sets):null;
            return (
              <div key={ei} style={card}>
                <div style={{padding:"12px 16px",borderBottom:`1px solid ${C.border}`,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                  <div>
                    <div style={{fontWeight:700,fontSize:15}}>{ex.name}</div>
                    <div style={{display:"flex",gap:5,marginTop:4}}>
                      <span style={tag(TYPE_COLORS[ex.type]||C.blue)}>{TL[ex.type]||ex.type}</span>
                      <span style={tag("#888")}>{ex.category}</span>
                    </div>
                  </div>
                  <button onClick={()=>removeEx(ei)} style={{background:"none",border:"none",color:C.muted,fontSize:20,cursor:"pointer"}}>×</button>
                </div>
                {prev&&(
                  <div style={{padding:"7px 16px",background:isDark?"#1a2030":"#f0f7ff",borderBottom:`1px solid ${C.border}`,fontSize:12,color:C.blue}}>
                    {T("Dernière fois","Last time")} ({fmtShort(prev.date,lang)}) : {prev.ex.sets.length} {T("séries","sets")} · PR {prevPr} {unit}
                    {pr>0&&prevPr>0&&pr>prevPr&&<span style={{color:C.green,fontWeight:700}}> · +{(pr-prevPr).toFixed(1)} {unit}</span>}
                  </div>
                )}
                <div style={{padding:"12px 16px"}}>
                  <div style={{display:"grid",gridTemplateColumns:"28px 1fr 1fr 32px",gap:6,marginBottom:8,fontSize:10,color:C.muted,fontWeight:700,letterSpacing:1,textTransform:"uppercase"}}>
                    <div>#</div><div style={{textAlign:"center"}}>{T("Reps","Reps")}</div><div style={{textAlign:"center"}}>{T("Poids","Weight")} ({unit})</div><div/>
                  </div>
                  {ex.sets.map((set,si)=>(
                    <div key={si} style={{display:"grid",gridTemplateColumns:"28px 1fr 1fr 32px",gap:6,marginBottom:6,alignItems:"center"}}>
                      <div style={{width:24,height:24,borderRadius:"50%",background:C.sub,display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:700,color:C.muted}}>{si+1}</div>
                      <input type="number" placeholder="—" value={set.reps} onChange={e=>updateSet(ei,si,"reps",e.target.value)} style={inp}/>
                      <input type="number" placeholder="—" value={set.weight} onChange={e=>updateSet(ei,si,"weight",e.target.value)} style={inp}/>
                      <button onClick={()=>removeSet(ei,si)} style={{background:"none",border:"none",color:isDark?"#444":"#ccc",cursor:"pointer",fontSize:18,textAlign:"center"}}>×</button>
                    </div>
                  ))}
                  <div style={{display:"flex",gap:8,marginTop:10}}>
                    <button onClick={()=>addSet(ei)} style={{flex:1,padding:"9px",background:"none",border:`1.5px dashed ${C.border}`,borderRadius:8,color:C.muted,cursor:"pointer",fontSize:13,fontFamily:"inherit",fontWeight:600}}>+ {T("Série","Set")}</button>
                    <button onClick={()=>{setStatsEx(ex);setView("stats");}} style={{padding:"9px 14px",background:"none",border:`1.5px solid ${C.border}`,borderRadius:8,color:C.blue,cursor:"pointer",fontSize:12,fontFamily:"inherit",fontWeight:700}}>Stats</button>
                  </div>
                  {(pr>0||vol>0)&&(
                    <div style={{display:"flex",gap:12,marginTop:10,paddingTop:10,borderTop:`1px solid ${C.border}`}}>
                      <div style={{fontSize:12,color:C.muted}}>PR : <strong style={{color:C.text}}>{pr} {unit}</strong></div>
                      <div style={{fontSize:12,color:C.muted}}>Vol : <strong style={{color:C.text}}>{vol.toLocaleString("fr-FR")} {unit}</strong></div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          <button onClick={()=>{setAddingEx(true);setFilterCat("Tout");setSearchQ("");}} style={{...btn(C.accent),width:"100%",padding:14,fontSize:15,borderRadius:12,marginTop:4}}>
            + {T("Ajouter un exercice","Add exercise")}
          </button>
        </div>
      )}

      {/* ══ SPLIT ══ */}
      {view==="split"&&!editingProgram&&!editingDay&&(
        <div style={{padding:"14px 16px"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14}}>
            <div style={{fontSize:13,color:C.muted}}>{programs.length} {T("programme(s)","program(s)")}</div>
            <button onClick={()=>setCreatingProgram(true)} style={{...btn(C.blue),padding:"8px 16px",fontSize:13,borderRadius:8}}>+ {T("Programme","Program")}</button>
          </div>
          {programs.length===0&&(
            <div style={{textAlign:"center",padding:"44px 20px",border:`1.5px dashed ${C.border}`,borderRadius:14,color:C.muted}}>
              <div style={{fontWeight:700,fontSize:15,marginBottom:6}}>{T("Aucun programme","No programs yet")}</div>
              <div style={{fontSize:13}}>PPL · Upper/Lower · Full Body · ...</div>
            </div>
          )}
          {programs.map((prog,pi)=>(
            <div key={prog.id} style={{...card,border:prog.active?`2px solid ${prog.color}`:`1px solid ${C.border}`}}>
              <div style={{padding:"12px 16px",borderBottom:prog.days.length>0?`1px solid ${C.border}`:"none",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                <div style={{display:"flex",alignItems:"center",gap:10}}>
                  <div style={{width:13,height:13,borderRadius:"50%",background:prog.color,flexShrink:0}}/>
                  <div>
                    <div style={{fontWeight:800,fontSize:16}}>{prog.name}</div>
                    <div style={{fontSize:12,color:C.muted,marginTop:1}}>{prog.days.length} {T("jour(s)","day(s)")}</div>
                  </div>
                  {prog.active&&<span style={tag(prog.color)}>{T("ACTIF","ACTIVE")}</span>}
                </div>
                <div style={{display:"flex",gap:6}}>
                  {!prog.active&&<button onClick={()=>{savePrograms(programs.map((p,i)=>({...p,active:i===pi})));showToast(T("Programme activé","Program activated"));}} style={{background:"none",border:`1px solid ${prog.color}`,color:prog.color,borderRadius:8,padding:"5px 10px",fontSize:12,cursor:"pointer",fontFamily:"inherit",fontWeight:700}}>{T("Activer","Activate")}</button>}
                  <button onClick={()=>setEditingProgram({idx:pi,program:prog})} style={{background:"none",border:`1px solid ${C.border}`,color:C.blue,borderRadius:8,padding:"5px 10px",fontSize:12,cursor:"pointer",fontFamily:"inherit",fontWeight:700}}>{T("Modifier","Edit")}</button>
                  <button onClick={()=>savePrograms(programs.filter((_,i)=>i!==pi))} style={{background:"none",border:"1px solid #fecaca",color:C.red,borderRadius:8,padding:"5px 10px",fontSize:12,cursor:"pointer"}}>×</button>
                </div>
              </div>
              {prog.days.length>0&&(
                <div style={{padding:"10px 16px",display:"flex",gap:6,flexWrap:"wrap"}}>
                  {prog.days.map((day,di)=>(
                    <div key={di} style={{background:prog.color+"15",border:`1px solid ${prog.color}33`,borderRadius:8,padding:"5px 12px",fontSize:12,fontWeight:700,color:prog.color}}>{day.name}</div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
      {view==="split"&&editingProgram&&!editingDay&&(
        <div style={{padding:"14px 16px"}}>
          <button onClick={()=>setEditingProgram(null)} style={{background:"none",border:"none",color:C.blue,fontWeight:700,fontSize:14,cursor:"pointer",marginBottom:14,padding:0,fontFamily:"inherit"}}>← {T("Retour","Back")}</button>
          <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:16}}>
            <div style={{width:14,height:14,borderRadius:"50%",background:editingProgram.program.color}}/>
            <div style={{fontWeight:800,fontSize:20}}>{editingProgram.program.name}</div>
          </div>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}}>
            <div style={{fontSize:13,color:C.muted}}>{programs[editingProgram.idx]?.days.length||0} {T("jour(s)","day(s)")}</div>
            <button onClick={()=>{
              const nd={id:"day"+Date.now(),name:T("Nouveau jour","New day"),exercises:[]};
              const upd=programs.map((p,i)=>i!==editingProgram.idx?p:{...p,days:[...p.days,nd]});
              savePrograms(upd);
              setEditingDay({progIdx:editingProgram.idx,dayIdx:upd[editingProgram.idx].days.length-1,day:nd});
            }} style={{...btn(editingProgram.program.color),padding:"8px 14px",fontSize:13,borderRadius:8}}>+ {T("Jour","Day")}</button>
          </div>
          {programs[editingProgram.idx]?.days.length===0&&(
            <div style={{textAlign:"center",padding:"32px 20px",border:`1.5px dashed ${C.border}`,borderRadius:12,color:C.muted,fontSize:13}}>{T("Aucun jour","No days yet")}</div>
          )}
          {programs[editingProgram.idx]?.days.map((day,di)=>(
            <div key={day.id} style={card}>
              <div style={{padding:"12px 16px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                <div>
                  <div style={{fontWeight:700,fontSize:15}}>{T("Jour","Day")} {di+1} — {day.name}</div>
                  <div style={{fontSize:12,color:C.muted,marginTop:2}}>{day.exercises.length} {T("exercice(s)","exercise(s)")}</div>
                </div>
                <div style={{display:"flex",gap:6}}>
                  <button onClick={()=>setEditingDay({progIdx:editingProgram.idx,dayIdx:di,day})} style={{background:"none",border:`1px solid ${C.border}`,color:C.blue,borderRadius:8,padding:"5px 10px",fontSize:12,cursor:"pointer",fontFamily:"inherit",fontWeight:700}}>{T("Modifier","Edit")}</button>
                  <button onClick={()=>savePrograms(programs.map((p,i)=>i!==editingProgram.idx?p:{...p,days:p.days.filter((_,j)=>j!==di)}))} style={{background:"none",border:"1px solid #fecaca",color:C.red,borderRadius:8,padding:"5px 10px",fontSize:12,cursor:"pointer"}}>×</button>
                </div>
              </div>
              {day.exercises.length>0&&(
                <div style={{padding:"8px 16px",display:"flex",gap:6,flexWrap:"wrap"}}>
                  {day.exercises.map((ex,ei)=>(
                    <span key={ei} style={{fontSize:12,background:C.sub,border:`1px solid ${C.border}`,borderRadius:6,padding:"3px 8px",color:C.muted}}>{ex.name}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
      {view==="split"&&editingDay&&(
        <div style={{padding:"14px 16px"}}>
          <button onClick={()=>{setEditingDay(null);setAddingDayEx(false);setSearchQ("");setFilterCat("Tout");}} style={{background:"none",border:"none",color:C.blue,fontWeight:700,fontSize:14,cursor:"pointer",marginBottom:14,padding:0,fontFamily:"inherit"}}>← {T("Retour","Back")}</button>
          <span style={sec}>{T("Nom du jour","Day name")}</span>
          <input defaultValue={programs[editingDay.progIdx]?.days[editingDay.dayIdx]?.name}
            onBlur={e=>{if(!e.target.value.trim()) return; savePrograms(programs.map((p,i)=>i!==editingDay.progIdx?p:{...p,days:p.days.map((d,j)=>j!==editingDay.dayIdx?d:{...d,name:e.target.value.trim()})}));}}
            style={{...inp,textAlign:"left",padding:"10px 14px",marginBottom:14}}/>
          <span style={sec}>{T("Exercices prévus","Planned exercises")} ({programs[editingDay.progIdx]?.days[editingDay.dayIdx]?.exercises.length||0})</span>
          {programs[editingDay.progIdx]?.days[editingDay.dayIdx]?.exercises.map((ex,ei)=>(
            <div key={ei} style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"9px 12px",background:C.sub,borderRadius:10,marginBottom:6,border:`1px solid ${C.border}`}}>
              <div>
                <div style={{fontWeight:600,fontSize:13}}>{ex.name}</div>
                <div style={{display:"flex",gap:5,marginTop:3}}>
                  <span style={tag(TYPE_COLORS[ex.type]||C.blue)}>{TL[ex.type]}</span>
                  <span style={tag("#888")}>{ex.category}</span>
                </div>
              </div>
              <button onClick={()=>savePrograms(programs.map((p,i)=>i!==editingDay.progIdx?p:{...p,days:p.days.map((d,j)=>j!==editingDay.dayIdx?d:{...d,exercises:d.exercises.filter((_,k)=>k!==ei)})}))} style={{background:"none",border:"none",color:isDark?"#444":"#ccc",fontSize:20,cursor:"pointer"}}>×</button>
            </div>
          ))}
          {!addingDayEx?(
            <button onClick={()=>{setAddingDayEx(true);setSearchQ("");setFilterCat("Tout");}} style={{width:"100%",padding:"11px",background:"none",border:`1.5px dashed ${C.border}`,borderRadius:10,color:C.blue,cursor:"pointer",fontSize:13,fontFamily:"inherit",fontWeight:700,marginTop:6}}>+ {T("Ajouter un exercice","Add exercise")}</button>
          ):(
            <div style={{marginTop:10}}>
              <input placeholder={T("Rechercher...","Search...")} value={searchQ} onChange={e=>setSearchQ(e.target.value)} style={{...inp,textAlign:"left",padding:"9px 14px",marginBottom:8}}/>
              <div style={{display:"flex",gap:6,overflowX:"auto",paddingBottom:8}}>{["Tout",...CATEGORIES].map(c=><button key={c} onClick={()=>setFilterCat(c)} style={pill(filterCat===c)}>{c}</button>)}</div>
              <div style={{maxHeight:260,overflowY:"auto",marginTop:6}}>
                {filteredLib.map(ex=>{
                  const already=programs[editingDay.progIdx]?.days[editingDay.dayIdx]?.exercises.some(e=>e.id===ex.id);
                  return (
                    <div key={ex.id} onClick={()=>{if(already) return; savePrograms(programs.map((p,i)=>i!==editingDay.progIdx?p:{...p,days:p.days.map((d,j)=>j!==editingDay.dayIdx?d:{...d,exercises:[...d.exercises,ex]})})); showToast(`${ex.name} ${T("ajouté","added")}`);}}
                      style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"9px 10px",background:already?C.sub:C.card,border:`1px solid ${C.border}`,borderRadius:8,marginBottom:5,cursor:already?"default":"pointer",opacity:already?0.5:1}}>
                      <div>
                        <div style={{fontWeight:600,fontSize:13}}>{ex.name}</div>
                        <div style={{display:"flex",gap:5,marginTop:2}}><span style={tag(TYPE_COLORS[ex.type]||C.blue)}>{TL[ex.type]}</span><span style={tag("#888")}>{ex.category}</span></div>
                      </div>
                      {already?<span style={{fontSize:11,color:C.green,fontWeight:700}}>{T("Ajouté","Added")}</span>:<span style={{color:C.blue,fontSize:20,fontWeight:700}}>+</span>}
                    </div>
                  );
                })}
              </div>
              <button onClick={()=>{setAddingDayEx(false);setSearchQ("");}} style={{width:"100%",padding:"9px",background:"none",border:`1px solid ${C.border}`,borderRadius:8,color:C.muted,cursor:"pointer",fontSize:13,fontFamily:"inherit",marginTop:8}}>{T("Fermer","Close")}</button>
            </div>
          )}
        </div>
      )}

      {/* ══ HISTORIQUE ══ */}
      {view==="history"&&(
        <div style={{padding:"14px 16px"}}>
          {Object.keys(sessions).filter(d=>sessions[d].exercises?.length>0).length===0&&(
            <div style={{textAlign:"center",padding:48,color:C.muted}}>{T("Aucune session enregistrée","No sessions recorded")}</div>
          )}
          {Object.keys(sessions).filter(d=>sessions[d].exercises?.length>0).sort((a,b)=>a>b?-1:1).map(d=>{
            const ses=sessions[d];
            const vol=ses.exercises?.reduce((a,e)=>a+calcVolume(e.sets),0)||0;
            const moodOpt=MOOD_OPTIONS.find(m=>m.v===ses.mood);
            return (
              <div key={d} style={card}>
                <div style={{padding:"13px 16px",display:"flex",alignItems:"center",justifyContent:"space-between",cursor:"pointer"}} onClick={()=>{setSelectedDate(d);setView("journal");}}>
                  <div>
                    <div style={{fontWeight:700,fontSize:15,textTransform:"capitalize"}}>{fmtDate(d,lang)}</div>
                    <div style={{fontSize:12,color:C.muted,marginTop:3}}>{ses.exercises?.length} {T("exercice(s)","exercise(s)")} · {vol>0?`${vol.toLocaleString("fr-FR")} ${unit}`:"—"}{moodOpt?` · ${lang==="en"?moodOpt.en:moodOpt.fr}`:""}</div>
                    <div style={{fontSize:12,color:C.muted,marginTop:2}}>{ses.exercises?.map(e=>e.name).join(" · ")}</div>
                    {ses.note&&<div style={{fontSize:12,color:C.muted,marginTop:3,fontStyle:"italic"}}>"{ses.note.slice(0,60)}{ses.note.length>60?"…":""}"</div>}
                  </div>
                  <div style={{color:C.blue,fontSize:22}}>›</div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ══ STATS ══ */}
      {view==="stats"&&(
        <div style={{padding:"14px 16px"}}>
          {!statsEx?(
            <>
              <div style={{fontSize:13,color:C.muted,marginBottom:12}}>{T("Sélectionne un exercice pour voir sa progression","Select an exercise to track")}</div>
              {library.map(ex=>{
                const pts=getExStats(ex.id);
                if(pts.length===0) return null;
                const pr=Math.max(...pts.map(p=>p.pr));
                return (
                  <div key={ex.id} onClick={()=>setStatsEx(ex)} style={{...card,cursor:"pointer"}}>
                    <div style={{padding:"12px 16px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                      <div><div style={{fontWeight:700,fontSize:14}}>{ex.name}</div><div style={{fontSize:12,color:C.muted,marginTop:2}}>{pts.length} {T("session(s)","session(s)")} · PR {pr} {unit}</div></div>
                      <Sparkline data={pts.map(p=>({value:p.pr}))} color={C.blue}/>
                    </div>
                  </div>
                );
              })}
              {library.every(ex=>getExStats(ex.id).length===0)&&(
                <div style={{textAlign:"center",padding:48,color:C.muted}}>{T("Enregistre des performances pour voir ta progression","Record workouts to see your progress")}</div>
              )}
            </>
          ):(
            <ExStats ex={statsEx} pts={getExStats(statsEx.id)} onBack={()=>setStatsEx(null)} C={C} pill={pill} tag={tag} unit={unit} lang={lang} T={T} TL={TL} fmtShort={fmtShort}/>
          )}
        </div>
      )}

      {/* ══ CORPS / POIDS ══ */}
      {view==="body"&&(
        <div style={{padding:"14px 16px"}}>
          {/* Add entry */}
          <div style={{...card,marginBottom:14}}>
            <div style={{padding:"14px 16px"}}>
              <div style={{fontWeight:700,fontSize:14,marginBottom:12}}>{T("Ajouter une mesure","Add measurement")}</div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:10}}>
                <div>
                  <div style={{fontSize:11,color:C.muted,fontWeight:700,textTransform:"uppercase",letterSpacing:0.5,marginBottom:5}}>{T("Date","Date")}</div>
                  <input type="date" value={newBodyDate} onChange={e=>setNewBodyDate(e.target.value)} style={{...inp,fontSize:13,textAlign:"left",padding:"8px 10px"}}/>
                </div>
                <div>
                  <div style={{fontSize:11,color:C.muted,fontWeight:700,textTransform:"uppercase",letterSpacing:0.5,marginBottom:5}}>{T("Poids","Weight")} ({unit})</div>
                  <input type="number" step="0.1" placeholder={`75.0 ${unit}`} value={newBodyWeight} onChange={e=>setNewBodyWeight(e.target.value)} style={inp}/>
                </div>
              </div>
              <button onClick={()=>{
                if(!newBodyWeight) return;
                const entry={date:newBodyDate,weight:parseFloat(newBodyWeight)};
                const updated=[...bodyLog.filter(b=>b.date!==newBodyDate),entry].sort((a,b)=>a.date>b.date?1:-1);
                saveBodyLog(updated);
                setNewBodyWeight(""); showToast(T("Mesure enregistrée","Measurement saved"));
              }} style={{...btn(C.green),width:"100%",padding:11,fontSize:14,borderRadius:10}}>
                {T("Enregistrer","Save")}
              </button>
            </div>
          </div>

          {/* Chart */}
          {bodyLog.length>=2&&(
            <div style={{...card,padding:"16px"}}>
              <div style={{fontWeight:700,fontSize:14,marginBottom:12}}>{T("Évolution du poids","Weight evolution")}</div>
              <Sparkline data={bodyLog.map(b=>({value:b.weight}))} color={C.green} width={320} height={60}/>
              <div style={{display:"flex",justifyContent:"space-between",marginTop:10}}>
                <div style={{fontSize:12,color:C.muted}}>{T("Min","Min")} : <strong style={{color:C.text}}>{Math.min(...bodyLog.map(b=>b.weight))} {unit}</strong></div>
                <div style={{fontSize:12,color:C.muted}}>{T("Max","Max")} : <strong style={{color:C.text}}>{Math.max(...bodyLog.map(b=>b.weight))} {unit}</strong></div>
                <div style={{fontSize:12,color:C.muted}}>{T("Actuel","Current")} : <strong style={{color:C.green}}>{bodyLog[bodyLog.length-1].weight} {unit}</strong></div>
              </div>
            </div>
          )}

          {/* Log */}
          <div style={{marginTop:10}}>
            <div style={{fontSize:11,fontWeight:700,color:C.muted,letterSpacing:1,textTransform:"uppercase",marginBottom:8}}>{T("Historique","History")}</div>
            {bodyLog.length===0&&<div style={{textAlign:"center",padding:32,color:C.muted,fontSize:13}}>{T("Aucune mesure enregistrée","No measurements yet")}</div>}
            {[...bodyLog].reverse().map((b,i)=>(
              <div key={b.date} style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 14px",background:C.card,border:`1px solid ${C.border}`,borderRadius:10,marginBottom:6}}>
                <div>
                  <div style={{fontWeight:600,fontSize:14}}>{b.weight} {unit}</div>
                  <div style={{fontSize:12,color:C.muted,marginTop:1,textTransform:"capitalize"}}>{fmtShort(b.date,lang)}</div>
                </div>
                {i>0&&(()=>{
                  const prev=[...bodyLog].reverse()[i-1];
                  const diff=(b.weight-prev.weight).toFixed(1);
                  return <span style={{fontSize:13,fontWeight:700,color:parseFloat(diff)<=0?C.green:C.red}}>{parseFloat(diff)>0?"+":""}{diff} {unit}</span>;
                })()}
                <button onClick={()=>saveBodyLog(bodyLog.filter(x=>x.date!==b.date))} style={{background:"none",border:"none",color:isDark?"#444":"#ccc",fontSize:18,cursor:"pointer"}}>×</button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ══ LIBRARY ══ */}
      {view==="library"&&(
        <div style={{padding:"14px 16px"}}>
          <input placeholder={T("Rechercher...","Search...")} value={searchQ} onChange={e=>setSearchQ(e.target.value)} style={{...inp,textAlign:"left",marginBottom:12,padding:"11px 14px"}}/>
          <div style={{display:"flex",gap:8,overflowX:"auto",paddingBottom:10,marginBottom:4}}>
            {["Tout",...CATEGORIES].map(c=><button key={c} onClick={()=>setFilterCat(c)} style={pill(filterCat===c)}>{c}</button>)}
          </div>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}}>
            <div style={{fontSize:12,color:C.muted}}>{filteredLib.length} {T("exercice(s)","exercise(s)")}</div>
            <div style={{display:"flex",gap:8}}>
              <button onClick={()=>setEditingLib(!editingLib)} style={pill(editingLib)}>{editingLib?T("Terminer","Done"):T("Gérer","Manage")}</button>
              <button onClick={()=>setCreatingEx(true)} style={{...btn(C.blue),padding:"6px 14px",fontSize:12,borderRadius:8}}>+ {T("Nouveau","New")}</button>
            </div>
          </div>
          {filteredLib.map(ex=>(
            <div key={ex.id} style={card}>
              <div style={{padding:"11px 14px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                <div>
                  <div style={{fontWeight:600,fontSize:14}}>{ex.name}</div>
                  <div style={{display:"flex",gap:6,marginTop:4}}><span style={tag(TYPE_COLORS[ex.type]||C.blue)}>{TL[ex.type]||ex.type}</span><span style={tag("#888")}>{ex.category}</span></div>
                </div>
                {editingLib&&ex.id.startsWith("c")&&(
                  <button onClick={()=>saveLibrary(library.filter(e=>e.id!==ex.id))} style={{background:"none",border:`1px solid ${C.red}`,color:C.red,borderRadius:6,padding:"4px 10px",fontSize:12,cursor:"pointer",fontFamily:"inherit"}}>{T("Supprimer","Delete")}</button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ══ SETTINGS PANEL ══ */}
      {settingsOpen&&(
        <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.5)",zIndex:200,display:"flex",alignItems:"flex-end"}}>
          <div style={{background:C.card,width:"100%",maxWidth:480,margin:"0 auto",borderRadius:"20px 20px 0 0",padding:"22px 20px 32px",maxHeight:"88vh",overflowY:"auto"}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4}}>
              <div style={{fontWeight:800,fontSize:20}}>{T("Paramètres","Settings")}</div>
              <button onClick={()=>{setSettingsOpen(false);setResetConfirm(false);}} style={{background:"none",border:"none",color:C.muted,fontSize:26,cursor:"pointer"}}>×</button>
            </div>

            <span style={sec}>{T("Profil","Profile")}</span>
            <input value={settings.username} onChange={e=>saveSettings({...settings,username:e.target.value})} placeholder={T("Ton prénom","Your name")} style={{...inp,textAlign:"left",padding:"10px 14px",marginBottom:4}}/>

            <span style={sec}>{T("Thème","Theme")}</span>
            <div style={{fontSize:12,color:C.muted,marginBottom:8}}>{T("Auto = sombre entre 21h et 7h","Auto = dark from 9pm to 7am")}</div>
            <div style={{display:"flex",gap:8,marginBottom:4}}>
              {[{k:"light",fr:"Clair",en:"Light"},{k:"dark",fr:"Sombre",en:"Dark"},{k:"auto",fr:"Auto",en:"Auto"}].map(({k,fr,en})=>(
                <button key={k} onClick={()=>saveSettings({...settings,theme:k})} style={{...pill(settings.theme===k),flex:1,padding:"10px 0"}}>{lang==="en"?en:fr}</button>
              ))}
            </div>

            <span style={sec}>{T("Langue","Language")}</span>
            <div style={{display:"flex",gap:8,marginBottom:4}}>
              {[{k:"fr",l:"Français"},{k:"en",l:"English"}].map(({k,l})=>(
                <button key={k} onClick={()=>saveSettings({...settings,lang:k})} style={{...pill(settings.lang===k),flex:1,padding:"10px 0"}}>{l}</button>
              ))}
            </div>

            <span style={sec}>{T("Unités de poids","Weight unit")}</span>
            <div style={{display:"flex",gap:8,marginBottom:4}}>
              {["kg","lbs"].map(u=>(
                <button key={u} onClick={()=>saveSettings({...settings,unit:u})} style={{...pill(settings.unit===u),flex:1,padding:"10px 0"}}>{u}</button>
              ))}
            </div>

            {/* Tab order + visibility */}
            <span style={sec}>{T("Onglets — ordre & visibilité","Tabs — order & visibility")}</span>
            <div style={{fontSize:12,color:C.muted,marginBottom:10}}>{T("Masque ou réorganise les onglets selon tes besoins","Hide or reorder tabs as you like")}</div>
            {(settings.tabOrder||ALL_TABS).map((tabId,idx)=>{
              const hidden=(settings.hiddenTabs||[]).includes(tabId);
              return (
                <div key={tabId} style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"9px 12px",background:hidden?(isDark?"#1a1a1a":C.bg):C.sub,borderRadius:10,marginBottom:6,border:`1px solid ${hidden?C.border:C.border}`,opacity:hidden?0.5:1}}>
                  <div style={{display:"flex",alignItems:"center",gap:10}}>
                    <span style={{fontSize:16,opacity:hidden?0.4:1}}>{TAB_META[tabId]?.icon}</span>
                    <span style={{fontWeight:600,fontSize:14,color:hidden?C.muted:C.text}}>{TAB_META[tabId]?.[lang]}</span>
                    {hidden&&<span style={{fontSize:10,fontWeight:700,color:C.muted,background:isDark?"#26262f":"#e0e0dc",borderRadius:4,padding:"1px 6px",letterSpacing:0.5}}>{T("MASQUÉ","HIDDEN")}</span>}
                  </div>
                  <div style={{display:"flex",gap:6,alignItems:"center"}}>
                    {/* Hide/show toggle */}
                    <button onClick={()=>toggleHideTab(tabId)}
                      style={{background:"none",border:`1px solid ${hidden?C.green:C.border}`,borderRadius:6,padding:"4px 10px",fontSize:11,fontWeight:700,color:hidden?C.green:C.muted,cursor:"pointer",fontFamily:"inherit"}}>
                      {hidden?T("Afficher","Show"):T("Masquer","Hide")}
                    </button>
                    {/* Order arrows */}
                    {[{d:-1,i:"↑"},{d:1,i:"↓"}].map(({d,i})=>{
                      const dis=(d===-1&&idx===0)||(d===1&&idx===(settings.tabOrder||ALL_TABS).length-1);
                      return <button key={d} onClick={()=>moveTab(idx,d)} disabled={dis} style={{background:"none",border:`1px solid ${C.border}`,borderRadius:6,width:26,height:26,cursor:dis?"default":"pointer",color:dis?C.muted:C.text,fontSize:13,display:"flex",alignItems:"center",justifyContent:"center"}}>{i}</button>;
                    })}
                  </div>
                </div>
              );
            })}

            {/* Global stats */}
            <span style={sec}>{T("Statistiques globales","Global stats")}</span>
            {(()=>{const g=gs();return(
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:4}}>
                {[{l:T("Sessions","Sessions"),v:g.sessions},{l:T("Volume total","Total volume"),v:g.volume>0?`${(g.volume/1000).toFixed(1)}t`:"—"},{l:T("Séries totales","Total sets"),v:g.sets},{l:T("Exercices","Exercises"),v:g.exercises}].map(s=>(
                  <div key={s.l} style={{background:C.sub,border:`1px solid ${C.border}`,borderRadius:12,padding:"12px 14px"}}>
                    <div style={{fontSize:20,fontWeight:800,color:C.blue}}>{s.v}</div>
                    <div style={{fontSize:10,color:C.muted,fontWeight:600,textTransform:"uppercase",letterSpacing:0.5,marginTop:2}}>{s.l}</div>
                  </div>
                ))}
              </div>
            );})()}

            <span style={sec}>{T("Données","Data")}</span>
            <button onClick={exportData} style={{...btn(C.blue),width:"100%",padding:13,fontSize:14,borderRadius:12,marginBottom:10}}>{T("Exporter mes données (JSON)","Export my data (JSON)")}</button>
            {!resetConfirm?(
              <button onClick={()=>setResetConfirm(true)} style={{width:"100%",padding:13,background:"none",border:`1.5px solid ${C.red}`,borderRadius:12,color:C.red,fontWeight:700,fontSize:14,cursor:"pointer",fontFamily:"inherit"}}>{T("Réinitialiser l'app","Reset app")}</button>
            ):(
              <div style={{background:isDark?"#2a1a1a":"#fff5f5",border:`1.5px solid ${C.red}`,borderRadius:12,padding:16}}>
                <div style={{fontWeight:700,fontSize:14,color:C.red,marginBottom:8}}>{T("Confirmer ?","Confirm reset?")}</div>
                <div style={{fontSize:13,color:C.muted,marginBottom:12}}>{T("Toutes tes données seront supprimées.","All your data will be deleted.")}</div>
                <div style={{display:"flex",gap:8}}>
                  <button onClick={()=>setResetConfirm(false)} style={{flex:1,padding:"10px",background:"none",border:`1px solid ${C.border}`,borderRadius:8,color:C.muted,cursor:"pointer",fontFamily:"inherit",fontWeight:600}}>{T("Annuler","Cancel")}</button>
                  <button onClick={async()=>{
                    await Promise.all(["ilp-sessions","ilp-library","ilp-programs","ilp-body"].map(k=>window.storage.delete(k).catch(()=>{})));
                    setSessions({});setLibrary(DEFAULT_LIBRARY);setPrograms([]);setBodyLog([]);
                    setResetConfirm(false);setSettingsOpen(false);showToast(T("App réinitialisée","App reset"));
                  }} style={{flex:1,padding:"10px",background:C.red,border:"none",borderRadius:8,color:"#fff",cursor:"pointer",fontFamily:"inherit",fontWeight:700}}>{T("Réinitialiser","Reset")}</button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* MODAL — Ajouter exercice session */}
      {addingEx&&(
        <div style={modal}>
          <div style={mbox}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14}}>
              <div style={{fontWeight:800,fontSize:17}}>{T("Ajouter un exercice","Add exercise")}</div>
              <button onClick={()=>setAddingEx(false)} style={{background:"none",border:"none",color:C.muted,fontSize:24,cursor:"pointer"}}>×</button>
            </div>
            <input placeholder={T("Rechercher...","Search...")} value={searchQ} onChange={e=>setSearchQ(e.target.value)} style={{...inp,textAlign:"left",marginBottom:10,padding:"10px 14px"}}/>
            <div style={{display:"flex",gap:6,overflowX:"auto",paddingBottom:10}}>{["Tout",...CATEGORIES].map(c=><button key={c} onClick={()=>setFilterCat(c)} style={pill(filterCat===c)}>{c}</button>)}</div>
            <div style={{marginTop:6}}>
              {filteredLib.map(ex=>{
                const already=session.exercises.some(e=>e.id===ex.id);
                return (
                  <div key={ex.id} onClick={()=>!already&&addExToSession(ex)} style={{...card,cursor:already?"default":"pointer",opacity:already?0.5:1,marginBottom:7}}>
                    <div style={{padding:"11px 14px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                      <div><div style={{fontWeight:600,fontSize:14}}>{ex.name}</div><div style={{display:"flex",gap:6,marginTop:3}}><span style={tag(TYPE_COLORS[ex.type]||C.blue)}>{TL[ex.type]}</span><span style={tag("#888")}>{ex.category}</span></div></div>
                      {already?<span style={{fontSize:11,color:C.green,fontWeight:700}}>{T("Ajouté","Added")}</span>:<span style={{color:C.blue,fontSize:22}}>+</span>}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* MODAL — Dupliquer session */}
      {duplicateModal&&(
        <div style={modal}>
          <div style={mbox}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14}}>
              <div style={{fontWeight:800,fontSize:17}}>{T("Dupliquer une session","Duplicate a session")}</div>
              <button onClick={()=>setDuplicateModal(false)} style={{background:"none",border:"none",color:C.muted,fontSize:24,cursor:"pointer"}}>×</button>
            </div>
            <div style={{fontSize:13,color:C.muted,marginBottom:12}}>{T("Les exercices de la session choisie seront ajoutés à aujourd'hui","Exercises from the chosen session will be added to today")}</div>
            {Object.keys(sessions).filter(d=>sessions[d].exercises?.length>0&&d!==selectedDate).sort((a,b)=>a>b?-1:1).map(d=>(
              <div key={d} onClick={()=>duplicateSession(d)} style={{...card,cursor:"pointer",marginBottom:7}}>
                <div style={{padding:"12px 16px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                  <div>
                    <div style={{fontWeight:700,fontSize:14,textTransform:"capitalize"}}>{fmtDate(d,lang)}</div>
                    <div style={{fontSize:12,color:C.muted,marginTop:2}}>{sessions[d].exercises.map(e=>e.name).join(" · ")}</div>
                  </div>
                  <div style={{color:C.blue,fontSize:20,fontWeight:700}}>+</div>
                </div>
              </div>
            ))}
            {Object.keys(sessions).filter(d=>sessions[d].exercises?.length>0&&d!==selectedDate).length===0&&(
              <div style={{textAlign:"center",padding:32,color:C.muted,fontSize:13}}>{T("Aucune autre session disponible","No other sessions available")}</div>
            )}
          </div>
        </div>
      )}

      {/* MODAL — Créer exercice */}
      {creatingEx&&(
        <div style={modal}>
          <div style={mbox}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:18}}>
              <div style={{fontWeight:800,fontSize:17}}>{T("Nouvel exercice","New exercise")}</div>
              <button onClick={()=>setCreatingEx(false)} style={{background:"none",border:"none",color:C.muted,fontSize:24,cursor:"pointer"}}>×</button>
            </div>
            <span style={sec}>{T("Nom","Name")}</span>
            <input placeholder={T("Ex: Curl incliné marteau","Ex: Incline hammer curl")} value={newEx.name} onChange={e=>setNewEx({...newEx,name:e.target.value})} style={{...inp,textAlign:"left",padding:"11px 14px",marginBottom:12}}/>
            <span style={sec}>{T("Catégorie","Category")}</span>
            <select value={newEx.category} onChange={e=>setNewEx({...newEx,category:e.target.value})} style={{...inp,textAlign:"left",padding:"11px 14px",appearance:"auto",marginBottom:12}}>{CATEGORIES.map(c=><option key={c}>{c}</option>)}</select>
            <span style={sec}>{T("Type","Type")}</span>
            <div style={{display:"flex",gap:8,marginBottom:20}}>{Object.entries(TL).map(([k,v])=><button key={k} onClick={()=>setNewEx({...newEx,type:k})} style={{...pill(newEx.type===k),flex:1,padding:"9px 0"}}>{v}</button>)}</div>
            <button onClick={()=>{
              if(!newEx.name.trim()) return;
              const ex={...newEx,id:"c"+Date.now(),name:newEx.name.trim()};
              saveLibrary([...library,ex]); setCreatingEx(false); setNewEx({name:"",category:"Pectoraux",type:"weight"});
              showToast(`"${ex.name}" ${T("ajouté","added")}`);
            }} style={{...btn(C.blue),width:"100%",padding:13,fontSize:15,borderRadius:12}}>{T("Créer l'exercice","Create exercise")}</button>
          </div>
        </div>
      )}

      {/* MODAL — Créer programme */}
      {creatingProgram&&(
        <div style={modal}>
          <div style={mbox}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:18}}>
              <div style={{fontWeight:800,fontSize:17}}>{T("Nouveau programme","New program")}</div>
              <button onClick={()=>setCreatingProgram(false)} style={{background:"none",border:"none",color:C.muted,fontSize:24,cursor:"pointer"}}>×</button>
            </div>
            <span style={sec}>{T("Nom","Name")}</span>
            <input placeholder="PPL, Upper/Lower, Full Body…" value={newProg.name} onChange={e=>setNewProg({...newProg,name:e.target.value})} style={{...inp,textAlign:"left",padding:"11px 14px",marginBottom:14}}/>
            <span style={sec}>{T("Couleur","Color")}</span>
            <div style={{display:"flex",gap:10,flexWrap:"wrap",marginBottom:22}}>
              {PROGRAM_COLORS.map(c=><button key={c} onClick={()=>setNewProg({...newProg,color:c})} style={{width:38,height:38,borderRadius:"50%",background:c,border:newProg.color===c?`3px solid ${C.text}`:"3px solid transparent",cursor:"pointer",outline:"none"}}/>)}
            </div>
            <button onClick={()=>{
              if(!newProg.name.trim()) return;
              const prog={id:"p"+Date.now(),name:newProg.name.trim(),color:newProg.color,active:programs.length===0,days:[]};
              savePrograms([...programs,prog]); setCreatingProgram(false); setNewProg({name:"",color:"#2563eb"});
              showToast(T("Programme créé !","Program created!"));
            }} style={{...btn(newProg.color),width:"100%",padding:13,fontSize:15,borderRadius:12}}>{T("Créer le programme","Create program")}</button>
          </div>
        </div>
      )}

      {/* MODAL — Templates (browse & apply) */}
      {templateModal&&(
        <div style={modal}>
          <div style={mbox}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14}}>
              <div style={{fontWeight:800,fontSize:17}}>{T("Templates","Templates")}</div>
              <button onClick={()=>setTemplateModal(false)} style={{background:"none",border:"none",color:C.muted,fontSize:24,cursor:"pointer"}}>×</button>
            </div>
            <button onClick={()=>{setTemplateModal(false);setCreatingTemplate(true);setNewTemplate({name:"",exercises:[]});setTemplateFilterCat("Tout");setTemplateSearchQ("");}}
              style={{...btn(C.blue),width:"100%",padding:11,fontSize:14,borderRadius:10,marginBottom:14}}>
              + {T("Créer un template","Create template")}
            </button>
            {templates.length===0&&(
              <div style={{textAlign:"center",padding:"24px 0",color:C.muted,fontSize:13}}>
                {T("Aucun template — crée ta première séance type","No templates yet — create your first one")}
              </div>
            )}
            {templates.map((tpl,ti)=>(
              <div key={tpl.id} style={{...card,marginBottom:8}}>
                <div style={{padding:"12px 16px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                  <div>
                    <div style={{fontWeight:700,fontSize:15}}>{tpl.name}</div>
                    <div style={{fontSize:12,color:C.muted,marginTop:2}}>{tpl.exercises.length} {T("exercice(s)","exercise(s)")}</div>
                    <div style={{fontSize:12,color:C.muted,marginTop:2}}>{tpl.exercises.map(e=>e.name).join(" · ")}</div>
                  </div>
                  <div style={{display:"flex",gap:6,flexDirection:"column",alignItems:"flex-end"}}>
                    <button onClick={()=>{
                      const exs=tpl.exercises.map(e=>({...e,sets:[{reps:"",weight:""}]}));
                      updateSession({exercises:[...session.exercises,...exs]});
                      setTemplateModal(false);
                      showToast(T("Template appliqué !","Template applied!"));
                    }} style={{...btn(C.green),padding:"6px 14px",fontSize:12,borderRadius:8}}>
                      {T("Appliquer","Apply")}
                    </button>
                    <button onClick={()=>saveTemplates(templates.filter((_,i)=>i!==ti))}
                      style={{background:"none",border:`1px solid #fecaca`,color:C.red,borderRadius:8,padding:"4px 10px",fontSize:11,cursor:"pointer",fontFamily:"inherit"}}>
                      {T("Supprimer","Delete")}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* MODAL — Créer template */}
      {creatingTemplate&&(
        <div style={modal}>
          <div style={mbox}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14}}>
              <div style={{fontWeight:800,fontSize:17}}>{T("Nouveau template","New template")}</div>
              <button onClick={()=>setCreatingTemplate(false)} style={{background:"none",border:"none",color:C.muted,fontSize:24,cursor:"pointer"}}>×</button>
            </div>

            {/* Name */}
            <span style={sec}>{T("Nom du template","Template name")}</span>
            <input placeholder={T("Ex: Push Day, Full Body A...","Ex: Push Day, Full Body A...")}
              value={newTemplate.name} onChange={e=>setNewTemplate({...newTemplate,name:e.target.value})}
              style={{...inp,textAlign:"left",padding:"10px 14px",marginBottom:14}}/>

            {/* Selected exercises */}
            <span style={sec}>{T("Exercices sélectionnés","Selected exercises")} ({newTemplate.exercises.length})</span>
            {newTemplate.exercises.length===0&&(
              <div style={{fontSize:13,color:C.muted,marginBottom:10}}>{T("Aucun exercice — sélectionne ci-dessous","No exercises — select below")}</div>
            )}
            <div style={{display:"flex",gap:6,flexWrap:"wrap",marginBottom:10}}>
              {newTemplate.exercises.map((ex,i)=>(
                <div key={i} onClick={()=>setNewTemplate({...newTemplate,exercises:newTemplate.exercises.filter((_,j)=>j!==i)})}
                  style={{fontSize:12,fontWeight:600,background:C.blue+"18",border:`1px solid ${C.blue}44`,borderRadius:8,padding:"5px 10px",color:C.blue,cursor:"pointer",display:"flex",alignItems:"center",gap:6}}>
                  {ex.name} <span style={{fontSize:14,opacity:0.6}}>×</span>
                </div>
              ))}
            </div>

            {/* Library picker */}
            <span style={sec}>{T("Bibliothèque","Library")}</span>
            <input placeholder={T("Rechercher...","Search...")} value={templateSearchQ}
              onChange={e=>setTemplateSearchQ(e.target.value)}
              style={{...inp,textAlign:"left",padding:"9px 14px",marginBottom:8}}/>
            <div style={{display:"flex",gap:6,overflowX:"auto",paddingBottom:8}}>
              {["Tout",...CATEGORIES].map(c=><button key={c} onClick={()=>setTemplateFilterCat(c)} style={pill(templateFilterCat===c)}>{c}</button>)}
            </div>
            <div style={{maxHeight:200,overflowY:"auto",marginTop:6,marginBottom:14}}>
              {library.filter(e=>{
                const mc=templateFilterCat==="Tout"||e.category===templateFilterCat;
                const ms=e.name.toLowerCase().includes(templateSearchQ.toLowerCase());
                return mc&&ms;
              }).map(ex=>{
                const already=newTemplate.exercises.some(e=>e.id===ex.id);
                return (
                  <div key={ex.id} onClick={()=>{
                    if(already){setNewTemplate({...newTemplate,exercises:newTemplate.exercises.filter(e=>e.id!==ex.id)});}
                    else{setNewTemplate({...newTemplate,exercises:[...newTemplate.exercises,ex]});}
                  }} style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"9px 10px",background:already?C.blue+"10":C.card,border:`1px solid ${already?C.blue+"44":C.border}`,borderRadius:8,marginBottom:5,cursor:"pointer"}}>
                    <div>
                      <div style={{fontWeight:600,fontSize:13}}>{ex.name}</div>
                      <div style={{display:"flex",gap:5,marginTop:2}}>
                        <span style={tag(TYPE_COLORS[ex.type]||C.blue)}>{TL[ex.type]}</span>
                        <span style={tag("#888")}>{ex.category}</span>
                      </div>
                    </div>
                    <span style={{fontSize:18,fontWeight:700,color:already?C.blue:C.muted}}>{already?"−":"+"}</span>
                  </div>
                );
              })}
            </div>

            <button onClick={()=>{
              if(!newTemplate.name.trim()||newTemplate.exercises.length===0) return;
              const tpl={id:"t"+Date.now(),name:newTemplate.name.trim(),exercises:newTemplate.exercises};
              saveTemplates([...templates,tpl]);
              setCreatingTemplate(false);
              showToast(T("Template créé !","Template created!"));
            }} style={{...btn(C.blue),width:"100%",padding:13,fontSize:15,borderRadius:12,opacity:(!newTemplate.name.trim()||newTemplate.exercises.length===0)?0.4:1}}>
              {T("Enregistrer le template","Save template")}
            </button>
          </div>
        </div>
      )}

      {/* TOAST */}
      {toast&&(
        <div style={{position:"fixed",bottom:90,left:"50%",transform:"translateX(-50%)",background:C.text,color:isDark?"#0f0f14":"#fff",padding:"10px 22px",borderRadius:24,fontWeight:700,fontSize:13,zIndex:300,whiteSpace:"nowrap",boxShadow:"0 4px 20px rgba(0,0,0,0.2)"}}>
          {toast}
        </div>
      )}

      {/* NAV BAR */}
      <div style={{position:"fixed",bottom:0,left:"50%",transform:"translateX(-50%)",width:"100%",maxWidth:480,background:C.card,borderTop:`1px solid ${C.border}`,display:"grid",gridTemplateColumns:`repeat(${visibleTabs.length},1fr)`,paddingBottom:14,zIndex:50}}>
        {visibleTabs.map(tabId=>(
          <button key={tabId} onClick={()=>goTo(tabId)} style={{background:"none",border:"none",cursor:"pointer",padding:"10px 0 0",display:"flex",flexDirection:"column",alignItems:"center",gap:3}}>
            <span style={{fontSize:17,color:view===tabId?C.blue:C.muted,fontWeight:700}}>{TAB_META[tabId]?.icon}</span>
            <span style={{fontSize:9,fontWeight:700,letterSpacing:0.2,color:view===tabId?C.blue:C.muted,fontFamily:"inherit"}}>{TAB_META[tabId]?.[lang]}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function ExStats({ ex, pts, onBack, C, pill, tag, unit, lang, T, TL, fmtShort }) {
  const [metric,setMetric]=useState("pr");
  const [showAllPR,setShowAllPR]=useState(false);
  const TC={weight:"#2563eb",bodyweight:"#059669",cardio:"#dc2626"};
  const pr=pts.length>0?Math.max(...pts.map(p=>p.pr)):0;
  const bestVol=pts.length>0?Math.max(...pts.map(p=>p.vol)):0;
  const latest=pts[pts.length-1];

  // Build PR history — only entries where PR was beaten
  const prHistory=[];
  let runningPR=0;
  pts.forEach(p=>{
    if(p.pr>runningPR){
      runningPR=p.pr;
      prHistory.push({date:p.date,pr:p.pr,prev:prHistory.length>0?prHistory[prHistory.length-1].pr:0});
    }
  });
  const displayPR=showAllPR?[...prHistory].reverse():[...prHistory].reverse().slice(0,5);

  return (
    <div>
      <button onClick={onBack} style={{background:"none",border:"none",color:C.blue,fontWeight:700,fontSize:14,cursor:"pointer",marginBottom:14,padding:0,fontFamily:"inherit"}}>← {T("Retour","Back")}</button>
      <div style={{fontWeight:800,fontSize:20,marginBottom:4}}>{ex.name}</div>
      <div style={{display:"flex",gap:6,marginBottom:16}}><span style={tag(TC[ex.type]||C.blue)}>{TL[ex.type]}</span><span style={tag("#888")}>{ex.category}</span></div>

      {/* KPIs */}
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:14}}>
        {[
          {l:T("Meilleur PR","Best PR"),v:`${pr} ${unit}`,c:C.blue},
          {l:T("Meilleur volume","Best volume"),v:`${bestVol.toLocaleString("fr-FR")} ${unit}`,c:C.green},
          {l:T("Sessions","Sessions"),v:pts.length,c:C.text},
          {l:T("Records battus","PRs broken"),v:prHistory.length,c:C.orange},
        ].map(k=>(
          <div key={k.l} style={{background:C.card,border:`1px solid ${C.border}`,borderRadius:12,padding:"14px 16px"}}>
            <div style={{fontSize:22,fontWeight:800,color:k.c}}>{k.v}</div>
            <div style={{fontSize:10,color:C.muted,fontWeight:600,textTransform:"uppercase",letterSpacing:0.5,marginTop:2}}>{k.l}</div>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div style={{background:C.card,border:`1px solid ${C.border}`,borderRadius:14,padding:"16px",marginBottom:14}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}>
          <div style={{fontWeight:700,fontSize:14}}>{T("Progression","Progress")}</div>
          <div style={{display:"flex",gap:6}}>{[{k:"pr",l:"PR"},{k:"vol",l:T("Volume","Volume")}].map(({k,l})=><button key={k} onClick={()=>setMetric(k)} style={pill(metric===k)}>{l}</button>)}</div>
        </div>
        {pts.length>=2?<Sparkline data={pts.map(p=>({value:metric==="pr"?p.pr:p.vol}))} color={metric==="pr"?C.blue:C.green}/>
          :<div style={{color:C.muted,fontSize:13}}>{T("Pas assez de données (min. 2 sessions)","Not enough data (min. 2 sessions)")}</div>}
        <div style={{marginTop:14}}>
          {[...pts].reverse().slice(0,5).map(p=>(
            <div key={p.date} style={{display:"flex",justifyContent:"space-between",padding:"7px 0",borderBottom:`1px solid ${C.border}`,fontSize:13}}>
              <span style={{color:C.muted,textTransform:"capitalize"}}>{fmtShort(p.date,lang)}</span>
              <span style={{fontWeight:700}}>PR {p.pr} {unit} · {p.vol.toLocaleString("fr-FR")} {unit} vol.</span>
            </div>
          ))}
        </div>
      </div>

      {/* PR History Timeline */}
      <div style={{background:C.card,border:`1px solid ${C.border}`,borderRadius:14,padding:"16px"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14}}>
          <div style={{fontWeight:700,fontSize:14}}>{T("Historique des records","PR Timeline")}</div>
          <span style={{...tag(C.orange),fontSize:11}}>{prHistory.length} PR</span>
        </div>

        {prHistory.length===0&&(
          <div style={{color:C.muted,fontSize:13,textAlign:"center",padding:"12px 0"}}>{T("Aucun record enregistré","No PRs recorded yet")}</div>
        )}

        {displayPR.map((p,i)=>{
          const isLatest=i===0&&prHistory.length>0&&p.pr===pr;
          const gain=p.prev>0?(p.pr-p.prev).toFixed(1):null;
          return (
            <div key={p.date} style={{display:"flex",alignItems:"center",gap:12,padding:"10px 0",borderBottom:i<displayPR.length-1?`1px solid ${C.border}`:"none"}}>
              {/* Timeline dot */}
              <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:2,flexShrink:0}}>
                <div style={{width:12,height:12,borderRadius:"50%",background:isLatest?C.orange:C.blue,border:`2px solid ${isLatest?C.orange:C.blue}`,boxShadow:isLatest?`0 0 8px ${C.orange}44`:"none"}}/>
              </div>
              <div style={{flex:1}}>
                <div style={{display:"flex",alignItems:"center",gap:8}}>
                  <span style={{fontWeight:800,fontSize:16,color:C.text}}>{p.pr} {unit}</span>
                  {gain&&<span style={{fontSize:12,fontWeight:700,color:C.green,background:C.green+"18",padding:"2px 8px",borderRadius:20}}>+{gain} {unit}</span>}
                  {isLatest&&<span style={{fontSize:10,fontWeight:700,color:C.orange,background:C.orange+"18",padding:"2px 8px",borderRadius:20,letterSpacing:0.5}}>{T("RECORD","BEST")}</span>}
                </div>
                <div style={{fontSize:12,color:C.muted,marginTop:2,textTransform:"capitalize"}}>{fmtShort(p.date,lang)}</div>
              </div>
            </div>
          );
        })}

        {prHistory.length>5&&(
          <button onClick={()=>setShowAllPR(!showAllPR)} style={{width:"100%",marginTop:10,padding:"8px",background:"none",border:`1px solid ${C.border}`,borderRadius:8,color:C.blue,cursor:"pointer",fontSize:13,fontFamily:"inherit",fontWeight:700}}>
            {showAllPR?T("Voir moins","Show less"):T(`Voir les ${prHistory.length} records`,`See all ${prHistory.length} PRs`)}
          </button>
        )}
      </div>
    </div>
  );
}
