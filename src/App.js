import { useState, useEffect, useRef } from "react";

const QUOTES_FR = [
  { text: "La douleur est temporaire. La fierté est éternelle.", author: "" },
  { text: "Chaque répétition te rapproche de qui tu veux devenir.", author: "" },
  { text: "Le seul mauvais entraînement est celui que tu n'as pas fait.", author: "" },
  { text: "Forge ton corps. Forge ton caractère.", author: "" },
  { text: "Le succès se construit une séance à la fois.", author: "" },
  { text: "Ne compte pas les jours. Fais que les jours comptent.", author: "Muhammad Ali" },
  { text: "Les limites, comme les peurs, ne sont souvent que des illusions.", author: "Michael Jordan" },
  { text: "La sueur d'aujourd'hui est la force de demain.", author: "" },
  { text: "Sois plus fort que tes excuses.", author: "" },
  { text: "Le fer ne ment pas.", author: "" },
];
const QUOTES_EN = [
  { text: "Pain is temporary. Pride is forever.", author: "" },
  { text: "Every rep brings you closer to who you want to be.", author: "" },
  { text: "The only bad workout is the one that didn't happen.", author: "" },
  { text: "Forge your body. Forge your character.", author: "" },
  { text: "Success is built one session at a time.", author: "" },
  { text: "Don't count the days. Make the days count.", author: "Muhammad Ali" },
  { text: "Limits, like fears, are often just an illusion.", author: "Michael Jordan" },
  { text: "Today's sweat is tomorrow's strength.", author: "" },
  { text: "Be stronger than your excuses.", author: "" },
  { text: "The iron never lies.", author: "" },
];

function SplashScreen({ onDone, isDark, lang }) {
  const [phase, setPhase] = useState("in");
  const quotes = lang === "en" ? QUOTES_EN : QUOTES_FR;
  const quote = useRef(quotes[Math.floor(Math.random() * quotes.length)]);
  useEffect(() => { const t = setTimeout(() => setPhase("visible"), 100); return () => clearTimeout(t); }, []);
  const skip = () => { setPhase("out"); setTimeout(onDone, 500); };
  const bg = isDark ? "#0f0f14" : "#ffffff";
  const tc = isDark ? "#f0ede8" : "#1a1a1a";
  const mc = isDark ? "#555" : "#aaa";
  const ac = "#2563eb";
  return (
    <div onClick={skip} style={{ position:"fixed",inset:0,zIndex:1000,background:bg,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"40px 36px",cursor:"pointer",transition:"opacity 0.5s ease",opacity:phase==="out"?0:phase==="visible"?1:0 }}>
      <div style={{ fontSize:11,fontWeight:700,letterSpacing:4,color:ac,textTransform:"uppercase",marginBottom:60,transition:"opacity 0.8s ease, transform 0.8s ease",opacity:phase==="visible"?1:0,transform:phase==="visible"?"translateY(0)":"translateY(-10px)" }}>IRON LOG PRO</div>
      <div style={{ textAlign:"center",transition:"opacity 0.9s ease 0.2s, transform 0.9s ease 0.2s",opacity:phase==="visible"?1:0,transform:phase==="visible"?"translateY(0)":"translateY(20px)" }}>
        <div style={{ width:40,height:3,background:ac,borderRadius:2,margin:"0 auto 28px" }}/>
        <div style={{ fontSize:22,fontWeight:800,lineHeight:1.4,color:tc,marginBottom:20 }}>"{quote.current.text}"</div>
        {quote.current.author && <div style={{ fontSize:14,color:mc,fontWeight:600 }}>— {quote.current.author}</div>}
        <div style={{ width:40,height:3,background:ac,borderRadius:2,margin:"28px auto 0" }}/>
      </div>
      <div style={{ position:"absolute",bottom:60,display:"flex",flexDirection:"column",alignItems:"center",gap:10,transition:"opacity 0.9s ease 0.5s",opacity:phase==="visible"?1:0 }}>
        <div style={{ fontSize:13,color:mc,fontWeight:600 }}>{lang==="en"?"Tap anywhere to continue":"Appuie pour continuer"}</div>
        <div style={{ display:"flex",gap:6 }}>{[0,1,2].map(i=><div key={i} style={{ width:6,height:6,borderRadius:"50%",background:ac,opacity:0.3+i*0.3 }}/>)}</div>
      </div>
    </div>
  );
}

const DEFAULT_LIBRARY = [
  { id:"e001", name:"Développé couché barre", category:"Pectoraux", type:"weight" },
  { id:"e002", name:"Développé couché haltères", category:"Pectoraux", type:"weight" },
  { id:"e003", name:"Développé incliné barre", category:"Pectoraux", type:"weight" },
  { id:"e004", name:"Développé incliné haltères", category:"Pectoraux", type:"weight" },
  { id:"e005", name:"Développé décliné", category:"Pectoraux", type:"weight" },
  { id:"e006", name:"Écarté haltères plat", category:"Pectoraux", type:"weight" },
  { id:"e007", name:"Écarté haltères incliné", category:"Pectoraux", type:"weight" },
  { id:"e008", name:"Écarté poulie croisée", category:"Pectoraux", type:"weight" },
  { id:"e009", name:"Dips (pectoraux)", category:"Pectoraux", type:"bodyweight" },
  { id:"e010", name:"Pompes", category:"Pectoraux", type:"bodyweight" },
  { id:"e011", name:"Pull-over haltère", category:"Pectoraux", type:"weight" },
  { id:"e012", name:"Pec deck / Butterfly", category:"Pectoraux", type:"weight" },
  { id:"e013", name:"Soulevé de terre", category:"Dos", type:"weight" },
  { id:"e014", name:"Soulevé de terre roumain", category:"Dos", type:"weight" },
  { id:"e015", name:"Rowing barre", category:"Dos", type:"weight" },
  { id:"e016", name:"Rowing haltère unilatéral", category:"Dos", type:"weight" },
  { id:"e017", name:"Rowing poulie basse", category:"Dos", type:"weight" },
  { id:"e018", name:"Tirage vertical prise large", category:"Dos", type:"weight" },
  { id:"e019", name:"Tirage vertical prise serrée", category:"Dos", type:"weight" },
  { id:"e020", name:"Tractions pronation", category:"Dos", type:"bodyweight" },
  { id:"e021", name:"Tractions supination", category:"Dos", type:"bodyweight" },
  { id:"e022", name:"Face pull", category:"Dos", type:"weight" },
  { id:"e023", name:"Shrug barre", category:"Dos", type:"weight" },
  { id:"e024", name:"Hyperextension", category:"Dos", type:"bodyweight" },
  { id:"e025", name:"Développé militaire barre", category:"Épaules", type:"weight" },
  { id:"e026", name:"Développé militaire haltères", category:"Épaules", type:"weight" },
  { id:"e027", name:"Élévations latérales haltères", category:"Épaules", type:"weight" },
  { id:"e028", name:"Élévations latérales poulie", category:"Épaules", type:"weight" },
  { id:"e029", name:"Élévations frontales haltères", category:"Épaules", type:"weight" },
  { id:"e030", name:"Oiseau haltères", category:"Épaules", type:"weight" },
  { id:"e031", name:"Upright row barre", category:"Épaules", type:"weight" },
  { id:"e032", name:"Arnold press", category:"Épaules", type:"weight" },
  { id:"e033", name:"Curl barre", category:"Biceps", type:"weight" },
  { id:"e034", name:"Curl haltères alterné", category:"Biceps", type:"weight" },
  { id:"e035", name:"Curl marteau", category:"Biceps", type:"weight" },
  { id:"e036", name:"Curl incliné haltères", category:"Biceps", type:"weight" },
  { id:"e037", name:"Curl concentration", category:"Biceps", type:"weight" },
  { id:"e038", name:"Curl poulie basse", category:"Biceps", type:"weight" },
  { id:"e039", name:"Curl barre EZ", category:"Biceps", type:"weight" },
  { id:"e040", name:"Dips (triceps)", category:"Triceps", type:"bodyweight" },
  { id:"e041", name:"Extension poulie haute", category:"Triceps", type:"weight" },
  { id:"e042", name:"Barre au front (Skull Crusher)", category:"Triceps", type:"weight" },
  { id:"e043", name:"Extension nuque haltère", category:"Triceps", type:"weight" },
  { id:"e044", name:"Kick-back haltère", category:"Triceps", type:"weight" },
  { id:"e045", name:"Extension poulie corde", category:"Triceps", type:"weight" },
  { id:"e046", name:"Squat barre", category:"Jambes", type:"weight" },
  { id:"e047", name:"Squat gobelet", category:"Jambes", type:"weight" },
  { id:"e048", name:"Squat hack", category:"Jambes", type:"weight" },
  { id:"e049", name:"Leg press", category:"Jambes", type:"weight" },
  { id:"e050", name:"Fentes marchées haltères", category:"Jambes", type:"weight" },
  { id:"e051", name:"Fentes bulgares", category:"Jambes", type:"weight" },
  { id:"e052", name:"Leg extension", category:"Jambes", type:"weight" },
  { id:"e053", name:"Leg curl allongé", category:"Jambes", type:"weight" },
  { id:"e054", name:"Leg curl assis", category:"Jambes", type:"weight" },
  { id:"e055", name:"Good morning", category:"Jambes", type:"weight" },
  { id:"e056", name:"Hip thrust barre", category:"Jambes", type:"weight" },
  { id:"e057", name:"Mollets debout machine", category:"Jambes", type:"weight" },
  { id:"e058", name:"Mollets assis machine", category:"Jambes", type:"weight" },
  { id:"e059", name:"Abducteur machine", category:"Jambes", type:"weight" },
  { id:"e060", name:"Adducteur machine", category:"Jambes", type:"weight" },
  { id:"e061", name:"Crunch", category:"Abdos", type:"bodyweight" },
  { id:"e062", name:"Crunch poulie haute", category:"Abdos", type:"weight" },
  { id:"e063", name:"Relevé de jambes", category:"Abdos", type:"bodyweight" },
  { id:"e064", name:"Gainage planche", category:"Abdos", type:"bodyweight" },
  { id:"e065", name:"Gainage latéral", category:"Abdos", type:"bodyweight" },
  { id:"e066", name:"Russian twist", category:"Abdos", type:"bodyweight" },
  { id:"e067", name:"Ab wheel", category:"Abdos", type:"bodyweight" },
  { id:"e068", name:"Dragon flag", category:"Abdos", type:"bodyweight" },
  { id:"e069", name:"Course à pied", category:"Cardio", type:"cardio" },
  { id:"e070", name:"Vélo stationnaire", category:"Cardio", type:"cardio" },
  { id:"e071", name:"Rameur", category:"Cardio", type:"cardio" },
  { id:"e072", name:"Elliptique", category:"Cardio", type:"cardio" },
  { id:"e073", name:"Corde à sauter", category:"Cardio", type:"cardio" },
  { id:"e074", name:"HIIT", category:"Cardio", type:"cardio" },
];

const CATEGORIES = ["Pectoraux","Dos","Épaules","Biceps","Triceps","Jambes","Abdos","Cardio","Autre"];
const TYPE_COLORS = { weight:"#2563eb", bodyweight:"#059669", cardio:"#dc2626" };
const PROGRAM_COLORS = ["#2563eb","#059669","#dc2626","#7c3aed","#ea580c","#db2777","#0891b2","#65a30d"];
const ALL_TABS = ["home","session","split","history","stats","body","library"];
const TAB_META = {
  home:    { fr:"Accueil",    en:"Home",      icon:"⌂" },
  session: { fr:"Session",   en:"Session",   icon:"◉" },
  split:   { fr:"Split",     en:"Split",     icon:"◫" },
  history: { fr:"Historique",en:"History",   icon:"≡" },
  stats:   { fr:"Stats",     en:"Stats",     icon:"↗" },
  body:    { fr:"Corps",     en:"Body",      icon:"◎" },
  library: { fr:"Exercices", en:"Exercises", icon:"▦" },
};
const MOOD_OPTIONS = [{v:1,fr:"Mauvaise",en:"Bad"},{v:2,fr:"Moyenne",en:"Meh"},{v:3,fr:"Bonne",en:"Good"},{v:4,fr:"Top",en:"Top"}];
const ENERGY_OPTIONS = [{v:1,label:"—"},{v:2,label:"+"},{v:3,label:"++"},{v:4,label:"+++"}];
const REST_PRESETS = [30,60,90,120,180];

const today = () => new Date().toISOString().split("T")[0];
const getHour = () => new Date().getHours();
const isHalteres = (name) => name.toLowerCase().includes("haltère") || name.toLowerCase().includes("halteres") || name.toLowerCase().includes("dumbell");
const calcVolume = (sets, nameOrEx="") => {
  const name = typeof nameOrEx === "string" ? nameOrEx : (nameOrEx?.name||"");
  const dw = typeof nameOrEx === "object" && nameOrEx?.doubleWeight!==undefined ? nameOrEx.doubleWeight : isHalteres(name);
  const mult = dw ? 2 : 1;
  return sets.reduce((a,s)=>a+(parseFloat(s.reps)||0)*(parseFloat(s.weight)||0)*mult, 0);
};
const calcPR = (sets) => Math.max(0,...sets.map(s=>parseFloat(s.weight)||0));
const fmtDate  = (d,lang) => new Date(d+"T00:00:00").toLocaleDateString(lang==="en"?"en-US":"fr-FR",{weekday:"long",day:"numeric",month:"long"});
const fmtShort = (d,lang) => new Date(d+"T00:00:00").toLocaleDateString(lang==="en"?"en-US":"fr-FR",{weekday:"short",day:"numeric",month:"short"});
const fmtTime  = (iso) => { if(!iso) return ""; const d=new Date(iso); return `${d.getHours()}h${String(d.getMinutes()).padStart(2,"0")}`; };

function Sparkline({ data, color="#2563eb", width=160, height=44 }) {
  if (!data||data.length<2) return null;
  const vals=data.map(d=>d.value);
  const min=Math.min(...vals),max=Math.max(...vals),range=max-min||1;
  const pts=data.map((d,i)=>{ const x=(i/(data.length-1))*width; const y=height-((d.value-min)/range)*(height-8)-4; return `${x},${y}`; }).join(" ");
  return (
    <svg width={width} height={height} style={{overflow:"visible"}}>
      <polyline points={pts} fill="none" stroke={color} strokeWidth={2} strokeLinejoin="round" strokeLinecap="round"/>
      {data.map((d,i)=>{ const x=(i/(data.length-1))*width; const y=height-((d.value-min)/range)*(height-8)-4; return <circle key={i} cx={x} cy={y} r={3} fill={color}/>; })}
    </svg>
  );
}

function RestTimer({ C, T, isDark }) {
  const [duration, setDuration] = useState(60);
  const [remaining, setRemaining] = useState(null);
  const [running, setRunning] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    if (running && remaining > 0) { ref.current = setInterval(()=>setRemaining(r=>r-1), 1000); }
    else if (remaining === 0) { setRunning(false); setRemaining(null); }
    return () => clearInterval(ref.current);
  }, [running, remaining]);
  const start = (d) => { clearInterval(ref.current); setDuration(d); setRemaining(d); setRunning(true); };
  const stop = () => { clearInterval(ref.current); setRunning(false); setRemaining(null); };
  const pct = remaining != null ? (remaining/duration)*100 : 100;
  const r=18, circ=2*Math.PI*r;
  return (
    <div style={{background:C.card,border:`1px solid ${C.border}`,borderRadius:14,padding:"14px 16px",marginBottom:10}}>
      <div style={{fontWeight:700,fontSize:12,marginBottom:10,color:C.muted,letterSpacing:0.5,textTransform:"uppercase"}}>{T("Chrono de repos","Rest timer")}</div>
      <div style={{display:"flex",gap:6,marginBottom:12}}>
        {REST_PRESETS.map(p=><button key={p} onClick={()=>start(p)} style={{flex:1,padding:"7px 0",background:running&&duration===p?C.blue:(isDark?"#26262f":"#f0f0ee"),border:"none",borderRadius:8,color:running&&duration===p?"#fff":C.muted,fontWeight:700,fontSize:12,cursor:"pointer",fontFamily:"inherit"}}>{p}s</button>)}
      </div>
      {running && remaining != null ? (
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:10}}>
          <svg width={80} height={80} style={{transform:"rotate(-90deg)"}}>
            <circle cx={40} cy={40} r={r} fill="none" stroke={isDark?"#26262f":"#e8e8e2"} strokeWidth={4}/>
            <circle cx={40} cy={40} r={r} fill="none" stroke={C.blue} strokeWidth={4} strokeDasharray={circ} strokeDashoffset={circ*(1-pct/100)} strokeLinecap="round" style={{transition:"stroke-dashoffset 0.9s linear"}}/>
            <text x={40} y={40} textAnchor="middle" dominantBaseline="middle" fill={C.text} fontSize={16} fontWeight={800} style={{transform:"rotate(90deg)",transformOrigin:"40px 40px"}}>{remaining}</text>
          </svg>
          <button onClick={stop} style={{background:"none",border:`1px solid ${C.border}`,borderRadius:8,padding:"6px 20px",color:C.muted,cursor:"pointer",fontFamily:"inherit",fontSize:13}}>{T("Arrêter","Stop")}</button>
        </div>
      ) : <div style={{fontSize:12,color:C.muted,textAlign:"center"}}>{T("Sélectionne une durée","Select a duration")}</div>}
    </div>
  );
}

export default function IronLogPro() {
  const [settings, setSettings] = useState({ theme:"auto",lang:"fr",username:"",unit:"kg",tabOrder:[...ALL_TABS],hiddenTabs:[],weeklyGoal:4,favorites:[] });
  const [splashDone, setSplashDone] = useState(false);
  const [view, setView] = useState("home");
  const [selectedDate, setSelectedDate] = useState(today());
  const [sessions, setSessions] = useState({});
  const [library, setLibrary] = useState(DEFAULT_LIBRARY);
  const [programs, setPrograms] = useState([]);
  const [bodyLog, setBodyLog] = useState([]);
  const [toast, setToast] = useState(null);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [resetConfirm, setResetConfirm] = useState(false);
  // Session UI
  const [addingEx, setAddingEx] = useState(false);
  const [filterCat, setFilterCat] = useState("Tout");
  const [searchQ, setSearchQ] = useState("");
  const [statsEx, setStatsEx] = useState(null);
  const [showTimer, setShowTimer] = useState(false);
  const [duplicateModal, setDuplicateModal] = useState(false);
  const [closeModal, setCloseModal] = useState(false);
  const [closeName, setCloseName] = useState("");
  const [sessionView, setSessionView] = useState("calendar");
  const [collapsedExercises, setCollapsedExercises] = useState({});
  const [dragIdx, setDragIdx] = useState(null);
  const [dragOverIdx, setDragOverIdx] = useState(null);
  const dragItem = useRef(null);
  const dragOverItem = useRef(null);
  const cardRefs = useRef([]);
  const [editingEx, setEditingEx] = useState(null);
  const [planModal, setPlanModal] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const [statsFilter, setStatsFilter] = useState("all"); // all | favorites | muscle
  const [statsMuscle, setStatsMuscle] = useState("Pectoraux");
  const [statsMuscleOpen, setStatsMuscleOpen] = useState(false);
  // Library UI
  const [creatingEx, setCreatingEx] = useState(false);
  const [newEx, setNewEx] = useState({name:"",category:"Pectoraux",type:"weight"});
  const [editingLib, setEditingLib] = useState(false);
  // Split UI
  const [editingProgram, setEditingProgram] = useState(null);
  const [editingDay, setEditingDay] = useState(null);
  const [addingDayEx, setAddingDayEx] = useState(false);
  const [creatingProgram, setCreatingProgram] = useState(false);
  const [newProg, setNewProg] = useState({name:"",color:"#2563eb"});
  // Body UI
  const [newBodyWeight, setNewBodyWeight] = useState("");
  const [newBodyDate, setNewBodyDate] = useState(today());

  useEffect(()=>{
    try {
      const keys=["ilp-sessions","ilp-library","ilp-programs","ilp-settings","ilp-body"];
      const [s,l,p,cfg,b]=keys.map(k=>{const v=localStorage.getItem(k);return v?{value:v}:null;});
      if(s) setSessions(JSON.parse(s.value));
      if(l) setLibrary(JSON.parse(l.value));
      if(p) setPrograms(JSON.parse(p.value));
      if(cfg) {
        const saved = JSON.parse(cfg.value);
        // Reset tabOrder if it contains unknown tabs (migration guard)
        if (saved.tabOrder) {
          const valid = saved.tabOrder.filter(t => ALL_TABS.includes(t));
          const missing = ALL_TABS.filter(t => !saved.tabOrder.includes(t));
          saved.tabOrder = [...missing, ...valid];
        }
        setSettings(prev=>({...prev,...saved}));
      }
      if(b) setBodyLog(JSON.parse(b.value));
    } catch{}
  },[]);

  const persist = (k,d) => { try { localStorage.setItem(k,JSON.stringify(d)); } catch{} };
  const saveSessions = d => { setSessions(d); persist("ilp-sessions",d); };
  const saveLibrary  = d => { setLibrary(d);  persist("ilp-library",d); };
  const savePrograms = d => { setPrograms(d); persist("ilp-programs",d); };
  const saveSettings = d => { setSettings(d); persist("ilp-settings",d); };
  const saveBodyLog  = d => { setBodyLog(d);  persist("ilp-body",d); };
  const showToast = msg => { setToast(msg); setTimeout(()=>setToast(null),2500); };

  const isDark = settings.theme==="dark"||(settings.theme==="auto"&&(getHour()>=21||getHour()<7));
  const lang = settings.lang;
  const unit = settings.unit;
  const T = (fr,en) => lang==="en"?en:fr;
  const TL = { weight:T("Poids","Weight"), bodyweight:T("Poids de corps","Bodyweight"), cardio:"Cardio" };

  const C = isDark ? {
    bg:"#0f0f14",card:"#18181f",border:"#26262f",text:"#f0ede8",muted:"#555",accent:"#f0ede8",blue:"#3b82f6",green:"#10b981",red:"#ef4444",orange:"#f97316",inputBg:"#1e1e28",sub:"#1e1e28",
  } : {
    bg:"#f5f5f0",card:"#ffffff",border:"#e8e8e2",text:"#1a1a1a",muted:"#888",accent:"#1a1a1a",blue:"#2563eb",green:"#059669",red:"#dc2626",orange:"#ea580c",inputBg:"#f9f9f7",sub:"#f0f0ee",
  };

  const visibleTabs = (settings.tabOrder||ALL_TABS).filter(t=>!(settings.hiddenTabs||[]).includes(t));
  const activeProgram = programs.find(p=>p.active);
  const session = sessions[selectedDate]||{exercises:[],note:"",mood:0,energy:0,closed:false,sessionName:""};
  const totalVolume = session.exercises.reduce((a,e)=>a+calcVolume(e.sets,e.name),0);

  const filteredLib = library.filter(e=>{
    const mc=filterCat==="Tout"||filterCat==="All"||e.category===filterCat;
    const ms=e.name.toLowerCase().includes(searchQ.toLowerCase());
    return mc&&ms;
  });

  // ── Helpers ──
  const getLastPerf = (exId) => {
    const dates=Object.keys(sessions).sort().filter(d=>d<selectedDate);
    for(let i=dates.length-1;i>=0;i--){
      const found=sessions[dates[i]].exercises?.find(e=>e.id===exId);
      if(found&&found.sets?.length>0) return { date:dates[i], sets:found.sets };
    }
    return null;
  };

  const updateSession = (patch) => { const u={...sessions,[selectedDate]:{...session,...patch}}; saveSessions(u); };

  const addExToSession = (ex) => {
    const lastPerf=getLastPerf(ex.id);
    const sets=lastPerf
      ? lastPerf.sets.map(s=>({reps:"",weight:"",targetReps:s.reps,targetWeight:s.weight,comment:""}))
      : [{reps:"",weight:"",targetReps:"",targetWeight:"",comment:""}];
    updateSession({exercises:[...session.exercises,{...ex,sets}]});
    setAddingEx(false);
    showToast(`${ex.name} ${T("ajouté","added")}`);
  };

  const updateSet = (ei,si,field,val) => {
    const exs=session.exercises.map((e,i)=>i!==ei?e:{...e,sets:e.sets.map((s,j)=>j!==si?s:{...s,[field]:val})});
    updateSession({exercises:exs});
  };

  const addSet = (ei) => {
    const exs=session.exercises.map((e,i)=>{
      if(i!==ei) return e;
      const last=e.sets[e.sets.length-1];
      return {...e,sets:[...e.sets,{reps:"",weight:"",targetReps:last?.targetReps||"",targetWeight:last?.targetWeight||"",comment:""}]};
    });
    updateSession({exercises:exs});
  };

  const removeSet = (ei,si) => {
    const exs=session.exercises.map((e,i)=>i!==ei?e:{...e,sets:e.sets.filter((_,j)=>j!==si)}).filter(e=>e.sets.length>0);
    updateSession({exercises:exs});
  };

  const removeEx = (ei) => updateSession({exercises:session.exercises.filter((_,i)=>i!==ei)});

  // ── Close session ──
  const handleCloseSession = () => {
    const launchedName = session.sessionName;
    if (launchedName) {
      finalizeSession(launchedName);
    } else {
      setCloseName("");
      setCloseModal(true);
    }
  };

  const finalizeSession = (name) => {
    const startedAt = session.startedAt;
    let duration = "";
    if (startedAt) {
      const mins = Math.round((new Date() - new Date(startedAt)) / 60000);
      if (mins >= 60) duration = `${Math.floor(mins/60)}h${String(mins%60).padStart(2,"0")}`;
      else duration = `${mins} min`;
    }
    updateSession({ closed:true, sessionName:name, closedAt:new Date().toISOString(), duration });
    setCloseModal(false);
    showToast(`${T("Séance","Session")} "${name}" ${T("terminée !","closed!")}`);
  };

  // ── Launch day ──
  const launchDay = (day) => {
    // Prevent duplicates — only add exercises not already in session
    const existingIds = session.exercises.map(e=>e.id);
    const newExs = day.exercises
      .filter(ex => !existingIds.includes(ex.id))
      .map(ex=>{
        const lastPerf=getLastPerf(ex.id);
        const sets=lastPerf
          ? lastPerf.sets.map(s=>({reps:"",weight:"",targetReps:s.reps,targetWeight:s.weight,comment:""}))
          : [{reps:"",weight:"",targetReps:"",targetWeight:"",comment:""}];
        return {...ex,sets};
      });
    updateSession({
      exercises:[...session.exercises,...newExs],
      sessionName: session.sessionName||day.name,
      draft: true,
    });
    setView("session-detail");
    showToast(`${day.name} ${T("chargé !","loaded!")}`);
  };

  const duplicateSession = (fromDate) => {
    const src=sessions[fromDate]; if(!src) return;
    const copied=src.exercises.map(e=>({...e,sets:e.sets.map(s=>({...s,reps:"",weight:"",comment:""}))}));
    updateSession({exercises:[...session.exercises,...copied]});
    setDuplicateModal(false);
    showToast(T("Session dupliquée !","Session duplicated!"));
  };

  const getExStats = (exId) => {
    const pts=[];
    Object.entries(sessions).sort(([a],[b])=>a>b?1:-1).forEach(([date,s])=>{
      s.exercises?.forEach(e=>{ if(e.id===exId){const pr=calcPR(e.sets),vol=calcVolume(e.sets,e);if(pr>0||vol>0)pts.push({date,pr,vol});} });
    });
    return pts;
  };

  // ── Global stats ──
  const closedSessions = Object.entries(sessions).filter(([,s])=>s.closed&&s.exercises?.length>0);
  const totalSessions = closedSessions.length;
  const allVolume = closedSessions.reduce((a,[,s])=>a+s.exercises.reduce((b,e)=>b+calcVolume(e.sets,e.name),0),0);

  // streak
  const getStreak = () => {
    const dates=Object.keys(sessions).filter(d=>sessions[d].closed).sort().reverse();
    if(!dates.length) return 0;
    let streak=0; let cur=new Date(); cur.setHours(0,0,0,0);
    for(const d of dates){
      const dd=new Date(d+"T00:00:00"); dd.setHours(0,0,0,0);
      const diff=Math.round((cur-dd)/(1000*60*60*24));
      if(diff<=1){ streak++; cur=dd; } else break;
    }
    return streak;
  };

  const gs = () => ({ sessions:totalSessions, volume:allVolume, streak:getStreak(), exercises:library.length });

  const exportData = () => {
    const blob=new Blob([JSON.stringify({sessions,library,programs,bodyLog,settings,exportedAt:new Date().toISOString()},null,2)],{type:"application/json"});
    const url=URL.createObjectURL(blob); const a=document.createElement("a"); a.href=url; a.download="iron-log-export.json"; a.click(); URL.revokeObjectURL(url);
    showToast(T("Données exportées !","Data exported!"));
  };

  const [pdfModal, setPdfModal] = useState(false);

  const generateSessionPDF = (dateKey, ses) => {
    const name = ses.sessionName || T("Séance","Session");
    const date = fmtDate(dateKey, lang);
    const moodOpt = MOOD_OPTIONS.find(m=>m.v===ses.mood);
    const energyOpt = ENERGY_OPTIONS.find(e=>e.v===ses.energy);

    const rows = ses.exercises?.map((ex,ei) => {
      const setsHTML = ex.sets.map((s,si) => `
        <tr style="border-bottom:1px solid #eee">
          <td style="padding:5px 8px;color:#888;font-size:12px">${si+1}</td>
          <td style="padding:5px 8px;font-size:13px;text-align:center">${s.reps||"—"}</td>
          <td style="padding:5px 8px;font-size:13px;text-align:center">${s.weight||"—"} ${unit}</td>
          <td style="padding:5px 8px;font-size:12px;color:#888;font-style:italic">${s.comment||""}</td>
        </tr>
      `).join("");
      const vol = calcVolume(ex.sets, ex.name);
      const pr = calcPR(ex.sets);
      return `
        <div style="margin-bottom:18px;break-inside:avoid">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:6px">
            <span style="background:#2563eb;color:#fff;border-radius:50%;width:22px;height:22px;display:inline-flex;align-items:center;justify-content:center;font-size:11px;font-weight:800;flex-shrink:0">${ei+1}</span>
            <strong style="font-size:14px">${ex.name}</strong>
            ${isHalteres(ex.name)?'<span style="font-size:10px;background:#ea580c22;color:#ea580c;padding:1px 6px;border-radius:4px;font-weight:700">×2</span>':""}
            <span style="font-size:10px;background:#2563eb22;color:#2563eb;padding:1px 6px;border-radius:4px;font-weight:700;text-transform:uppercase">${ex.category}</span>
          </div>
          <table style="width:100%;border-collapse:collapse;background:#f9f9f7;border-radius:8px;overflow:hidden">
            <thead><tr style="background:#f0f0ee">
              <th style="padding:5px 8px;font-size:10px;color:#888;text-align:left;font-weight:700">#</th>
              <th style="padding:5px 8px;font-size:10px;color:#888;font-weight:700">REPS</th>
              <th style="padding:5px 8px;font-size:10px;color:#888;font-weight:700">POIDS</th>
              <th style="padding:5px 8px;font-size:10px;color:#888;text-align:left;font-weight:700">COMMENTAIRE</th>
            </tr></thead>
            <tbody>${setsHTML}</tbody>
          </table>
          ${pr>0||vol>0?`<div style="font-size:11px;color:#888;margin-top:4px">PR : <strong>${pr} ${unit}</strong> · Vol : <strong>${vol.toLocaleString("fr-FR")} ${unit}${isHalteres(ex.name)?" (×2)":""}</strong></div>`:""}
        </div>
      `;
    }).join("") || "";

    const html = `<!DOCTYPE html>
<html lang="${lang}">
<head>
<meta charset="utf-8"/>
<title>Iron Log Pro — ${name}</title>
<style>
  * { box-sizing:border-box; margin:0; padding:0; }
  body { font-family: -apple-system, 'Helvetica Neue', Arial, sans-serif; color:#1a1a1a; background:#fff; padding:32px; max-width:700px; margin:0 auto; }
  @media print { body { padding:20px; } }
</style>
</head>
<body>
  <!-- Header -->
  <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:24px;padding-bottom:16px;border-bottom:2px solid #2563eb">
    <div>
      <div style="font-size:10px;font-weight:700;letter-spacing:3px;color:#2563eb;text-transform:uppercase;margin-bottom:4px">IRON LOG PRO</div>
      <h1 style="font-size:24px;font-weight:800;margin-bottom:4px">${name}</h1>
      <div style="font-size:13px;color:#888;text-transform:capitalize">${date}</div>
    </div>
    <div style="text-align:right">
      ${ses.duration?`<div style="font-size:18px;font-weight:800;color:#2563eb">${ses.duration}</div><div style="font-size:10px;color:#888;text-transform:uppercase;font-weight:700">Durée</div>`:""}
    </div>
  </div>

  <!-- Stats -->
  <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin-bottom:24px">
    <div style="background:#f5f5f0;border-radius:10px;padding:12px;text-align:center">
      <div style="font-size:20px;font-weight:800">${ses.exercises?.length||0}</div>
      <div style="font-size:10px;color:#888;font-weight:700;text-transform:uppercase;margin-top:2px">${T("Exercices","Exercises")}</div>
    </div>
    <div style="background:#f5f5f0;border-radius:10px;padding:12px;text-align:center">
      <div style="font-size:20px;font-weight:800">${ses.exercises?.reduce((a,e)=>a+e.sets.length,0)||0}</div>
      <div style="font-size:10px;color:#888;font-weight:700;text-transform:uppercase;margin-top:2px">${T("Séries","Sets")}</div>
    </div>
    <div style="background:#f5f5f0;border-radius:10px;padding:12px;text-align:center">
      <div style="font-size:20px;font-weight:800">${(ses.exercises?.reduce((a,e)=>a+calcVolume(e.sets,e.name),0)||0).toLocaleString("fr-FR")} ${unit}</div>
      <div style="font-size:10px;color:#888;font-weight:700;text-transform:uppercase;margin-top:2px">Volume</div>
    </div>
  </div>

  <!-- Note + mood + energy -->
  ${(ses.note||ses.mood||ses.energy)?`
  <div style="background:#f5f5f0;border-radius:10px;padding:14px;margin-bottom:24px">
    ${ses.note?`<div style="font-size:13px;color:#444;margin-bottom:${ses.mood||ses.energy?8:0}px;font-style:italic">"${ses.note}"</div>`:""}
    <div style="display:flex;gap:16px">
      ${moodOpt?`<div><span style="font-size:10px;color:#888;font-weight:700;text-transform:uppercase">${T("Humeur","Mood")} </span><span style="font-size:12px;font-weight:700">${lang==="en"?moodOpt.en:moodOpt.fr}</span></div>`:""}
      ${energyOpt&&ses.energy?`<div><span style="font-size:10px;color:#888;font-weight:700;text-transform:uppercase">${T("Énergie","Energy")} </span><span style="font-size:12px;font-weight:700">${energyOpt.label}</span></div>`:""}
    </div>
  </div>`:""}

  <!-- Exercises -->
  <h2 style="font-size:13px;font-weight:700;color:#888;text-transform:uppercase;letter-spacing:1px;margin-bottom:14px">${T("Exercices","Exercises")}</h2>
  ${rows}

  <!-- Footer -->
  <div style="margin-top:32px;padding-top:12px;border-top:1px solid #eee;font-size:10px;color:#aaa;text-align:center">
    Iron Log Pro · ${date}${ses.closedAt?` · ${fmtTime(ses.closedAt)}`:""}
  </div>
</body>
</html>`;

    const blob = new Blob([html], {type:"text/html"});
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `iron-log-${name.replace(/\s+/g,"-")}-${dateKey}.html`;
    a.click();
    URL.revokeObjectURL(url);
    showToast(T("Séance exportée !","Session exported!"));
  };

  const exportAllPDF = () => {
    const closed = Object.entries(sessions).filter(([,s])=>s.closed&&s.exercises?.length>0).sort(([a],[b])=>a>b?-1:1);
    if(!closed.length){ showToast(T("Aucune séance clôturée","No closed sessions")); return; }
    closed.forEach(([date,ses]) => generateSessionPDF(date,ses));
    showToast(T(`${closed.length} séances exportées !`,`${closed.length} sessions exported!`));
  };

  const moveTab = (idx,dir) => {
    const arr=[...(settings.tabOrder||ALL_TABS)]; const swap=idx+dir;
    if(swap<0||swap>=arr.length) return; [arr[idx],arr[swap]]=[arr[swap],arr[idx]]; saveSettings({...settings,tabOrder:arr});
  };
  const toggleHideTab = (tabId) => {
    const hidden=settings.hiddenTabs||[];
    saveSettings({...settings,hiddenTabs:hidden.includes(tabId)?hidden.filter(t=>t!==tabId):[...hidden,tabId]});
  };
  const goTo = id => { setView(id); setStatsEx(null); setEditingProgram(null); setEditingDay(null); setAddingDayEx(false); setShowTimer(false); setSessionView("calendar"); setDeleteConfirm(false); };

  // ── Styles ──
  const inp = {background:C.inputBg,border:`1.5px solid ${C.border}`,borderRadius:8,color:C.text,padding:"9px 10px",fontSize:15,fontFamily:"inherit",width:"100%",textAlign:"center",boxSizing:"border-box",outline:"none"};
  const pill = (active,color) => ({padding:"6px 14px",borderRadius:20,border:"none",background:active?(color||C.accent):(isDark?"#26262f":"#ececea"),color:active?"#fff":C.muted,fontSize:12,fontWeight:600,cursor:"pointer",whiteSpace:"nowrap",fontFamily:"inherit",letterSpacing:0.3});
  const btn  = color => ({background:color||C.accent,border:"none",borderRadius:10,color:"#fff",padding:"12px 20px",fontWeight:700,fontSize:14,cursor:"pointer",fontFamily:"inherit",letterSpacing:0.3});
  const tag  = color => ({fontSize:10,fontWeight:700,letterSpacing:1,textTransform:"uppercase",color,background:color+"22",padding:"2px 8px",borderRadius:4});
  const card = {background:C.card,border:`1px solid ${C.border}`,borderRadius:14,marginBottom:10,overflow:"hidden"};
  const modal = {position:"fixed",inset:0,background:"rgba(0,0,0,0.5)",zIndex:100,display:"flex",alignItems:"flex-end"};
  const mbox  = {background:C.card,width:"100%",maxWidth:480,margin:"0 auto",borderRadius:"20px 20px 0 0",padding:"20px",maxHeight:"80vh",overflowY:"auto"};
  const sec   = {fontSize:11,fontWeight:700,color:C.muted,letterSpacing:1,textTransform:"uppercase",marginBottom:8,marginTop:18,display:"block"};

  const weekDays = () => {
    const days=[]; const now=new Date(); const dow=now.getDay();
    const monday=new Date(now); monday.setDate(now.getDate()-(dow===0?6:dow-1));
    for(let i=0;i<7;i++){const d=new Date(monday);d.setDate(monday.getDate()+i);days.push(d.toISOString().split("T")[0]);}
    return days;
  };

  return (
    <div style={{minHeight:"100vh",background:C.bg,color:C.text,fontFamily:"'Barlow','Trebuchet MS',sans-serif",maxWidth:480,margin:"0 auto",paddingBottom:80}}>
      {!splashDone&&<SplashScreen onDone={()=>setSplashDone(true)} isDark={isDark} lang={lang}/>}

      {/* HEADER */}
      <div style={{padding:"18px 16px 12px",background:C.card,borderBottom:`1px solid ${C.border}`,position:"sticky",top:0,zIndex:20}}>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <div>
            <div style={{fontSize:10,fontWeight:700,letterSpacing:3,color:C.blue,textTransform:"uppercase"}}>IRON LOG PRO</div>
            <div style={{fontSize:20,fontWeight:800,lineHeight:1.1}}>
              {view==="home"?(settings.username?`${T("Bonjour","Hey")}, ${settings.username}`:T("Accueil","Home")):view==="session-detail"?T("Session","Session"):(TAB_META[view]?.[lang]||"?")}
            </div>
          </div>
          <div style={{display:"flex",gap:8,alignItems:"center"}}>
            <button onClick={()=>setSettingsOpen(true)} style={{background:C.sub,border:`1px solid ${C.border}`,borderRadius:10,width:38,height:38,cursor:"pointer",fontSize:17,display:"flex",alignItems:"center",justifyContent:"center"}}>⚙</button>
          </div>
        </div>
        {activeProgram&&view==="home"&&(
          <div style={{marginTop:8,display:"inline-flex",alignItems:"center",gap:6,background:activeProgram.color+"18",border:`1px solid ${activeProgram.color}44`,borderRadius:20,padding:"4px 12px"}}>
            <div style={{width:8,height:8,borderRadius:"50%",background:activeProgram.color}}/>
            <span style={{fontSize:12,fontWeight:700,color:activeProgram.color}}>{activeProgram.name}</span>
          </div>
        )}
      </div>

      {/* ══ HOME ══ */}
      {view==="home"&&(()=>{
        const g=gs();
        const getWeek = (offset) => {
          const days=[]; const now=new Date(); const dow=now.getDay();
          const monday=new Date(now); monday.setDate(now.getDate()-(dow===0?6:dow-1)+(offset*7));
          for(let i=0;i<7;i++){const d=new Date(monday);d.setDate(monday.getDate()+i);days.push(d.toISOString().split("T")[0]);}
          return days;
        };
        const wdays=weekDays();
        const prevWeek=getWeek(-1);
        const nextWeek=getWeek(1);

        const WeekRow = ({days, label, small=false}) => (
          <div style={{marginBottom:0}}>
            {label&&<div style={{fontSize:9,fontWeight:700,color:C.muted,textTransform:"uppercase",letterSpacing:0.5,marginBottom:6,paddingLeft:2}}>{label}</div>}
            <div style={{display:"flex",gap:4}}>
              {days.map(d=>{
                const s=sessions[d];
                const done=s?.closed;
                const inProgress=s?.startedAt&&!s?.closed&&!s?.draft&&s?.exercises?.length>0;
                const planned=!done&&!inProgress&&(s?.planned||s?.draft);
                const isToday=d===today();
                const isPast=d<today();
                const dayName=new Date(d+"T00:00:00").toLocaleDateString(lang==="en"?"en-US":"fr-FR",{weekday:"short"}).slice(0,2).toUpperCase();
                const size=small?24:32;
                const dotSize=small?7:12;
                const dotSizePlanned=small?6:10;
                const dotSizeToday=small?5:8;
                const bgColor = done?C.green+"33":inProgress?C.red+"33":planned?C.orange+"33":isToday?C.blue+"22":"transparent";
                const borderColor = done?C.green:inProgress?C.red:planned?C.orange:isToday?C.blue:isPast?C.border:C.border+"55";
                const labelColor = done?C.green:inProgress?C.red:planned?C.orange:isToday?C.blue:C.muted;
                return (
                  <div key={d} onClick={()=>{setSelectedDate(d);setView("session");}}
                    style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:3,cursor:"pointer",opacity:small?0.75:1}}>
                    <div style={{fontSize:small?8:9,fontWeight:700,color:labelColor}}>{dayName}</div>
                    <div style={{width:size,height:size,borderRadius:"50%",background:bgColor,border:`2px solid ${borderColor}`,display:"flex",alignItems:"center",justifyContent:"center",opacity:!done&&!planned&&!inProgress&&isPast&&!isToday?0.35:1}}>
                      {done&&<div style={{width:dotSize,height:dotSize,borderRadius:"50%",background:C.green}}/>}
                      {inProgress&&<div style={{width:dotSize,height:dotSize,borderRadius:"50%",background:C.red}}/>}
                      {planned&&<div style={{width:dotSizePlanned,height:dotSizePlanned,borderRadius:"50%",background:C.orange}}/>}
                      {!done&&!inProgress&&!planned&&isToday&&<div style={{width:dotSizeToday,height:dotSizeToday,borderRadius:"50%",background:C.blue}}/>}
                    </div>
                    {!small&&done&&s.sessionName&&<div style={{fontSize:7,color:C.green,fontWeight:700,textAlign:"center",maxWidth:34,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{s.sessionName}</div>}
                    {!small&&planned&&s.plannedName&&<div style={{fontSize:7,color:C.orange,fontWeight:700,textAlign:"center",maxWidth:34,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{s.plannedName}</div>}
                  </div>
                );
              })}
            </div>
          </div>
        );

        const sessionsThisWeek=wdays.filter(d=>sessions[d]?.closed).length;
        const volumeThisWeek=wdays.reduce((a,d)=>a+(sessions[d]?.exercises||[]).reduce((b,e)=>b+calcVolume(e.sets,e),0),0);
        const weeklyGoal=settings.weeklyGoal||4;
        const goalPct=Math.min(1,sessionsThisWeek/weeklyGoal);
        const lastClosed=Object.entries(sessions).filter(([,s])=>s.closed).sort(([a],[b])=>a>b?-1:1)[0];

        return (
          <div style={{padding:"14px 16px"}}>
            {/* All Time */}
            <div style={{fontSize:10,fontWeight:700,color:C.muted,letterSpacing:1,textTransform:"uppercase",marginBottom:8}}>All Time</div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:14}}>
              <div style={{background:C.card,border:`1px solid ${C.border}`,borderRadius:12,padding:"12px 14px",textAlign:"center"}}>
                <div style={{fontSize:22,fontWeight:800,color:C.text}}>{g.sessions}</div>
                <div style={{fontSize:10,color:C.muted,fontWeight:600,letterSpacing:0.5,textTransform:"uppercase",marginTop:2}}>{T("Sessions","Sessions")}</div>
              </div>
              <div style={{background:C.card,border:`1px solid ${C.border}`,borderRadius:12,padding:"12px 14px",textAlign:"center"}}>
                <div style={{fontSize:22,fontWeight:800,color:C.text}}>{g.volume>0?`${(g.volume/1000).toFixed(1)}t`:"—"}</div>
                <div style={{fontSize:10,color:C.muted,fontWeight:600,letterSpacing:0.5,textTransform:"uppercase",marginTop:2}}>Volume</div>
              </div>
            </div>

            {/* Cette semaine */}
            <div style={{fontSize:10,fontWeight:700,color:C.muted,letterSpacing:1,textTransform:"uppercase",marginBottom:8}}>{T("Cette semaine","This week")}</div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:14}}>
              <div onClick={()=>{
                const goal=parseInt(prompt(T("Objectif de séances par semaine ?","Weekly session goal?"),weeklyGoal));
                if(!isNaN(goal)&&goal>0) saveSettings({...settings,weeklyGoal:goal});
              }} style={{background:C.card,border:`1px solid ${C.border}`,borderRadius:12,padding:"12px 14px",textAlign:"center",cursor:"pointer"}}>
                <div style={{fontSize:22,fontWeight:800,color:C.text}}>{sessionsThisWeek}<span style={{fontSize:14,color:C.muted,fontWeight:600}}>/{weeklyGoal}</span></div>
                <div style={{fontSize:10,color:C.muted,fontWeight:600,letterSpacing:0.5,textTransform:"uppercase",marginTop:2}}>{T("Sessions","Sessions")}</div>
                <div style={{marginTop:8,height:4,background:isDark?"#26262f":"#e8e8e2",borderRadius:2,overflow:"hidden"}}>
                  <div style={{height:"100%",width:`${goalPct*100}%`,background:goalPct>=1?C.green:C.blue,borderRadius:2,transition:"width 0.4s ease"}}/>
                </div>
              </div>
              <div style={{background:C.card,border:`1px solid ${C.border}`,borderRadius:12,padding:"12px 14px",textAlign:"center"}}>
                <div style={{fontSize:22,fontWeight:800,color:C.text}}>{volumeThisWeek>0?`${(volumeThisWeek/1000).toFixed(1)}t`:"—"}</div>
                <div style={{fontSize:10,color:C.muted,fontWeight:600,letterSpacing:0.5,textTransform:"uppercase",marginTop:2}}>Volume</div>
              </div>
            </div>

            {/* 3 semaines même taille */}
            <div style={{...card,padding:"14px 16px",marginBottom:14}}>
              <WeekRow days={prevWeek} label={T("Semaine passée","Last week")} small={true}/>
              <div style={{borderTop:`1px solid ${C.border}`,margin:"10px 0"}}/>
              <WeekRow days={wdays} label={T("Cette semaine","This week")}/>
              <div style={{borderTop:`1px solid ${C.border}`,margin:"10px 0"}}/>
              <WeekRow days={nextWeek} label={T("Semaine à venir","Next week")} small={true}/>
            </div>

            {!activeProgram&&(
              <div style={{textAlign:"center",padding:"24px 20px",border:`1.5px dashed ${C.border}`,borderRadius:14,color:C.muted}}>
                <div style={{fontSize:13,marginBottom:8}}>{T("Aucun programme actif","No active program")}</div>
                <button onClick={()=>goTo("split")} style={{...btn(C.blue),padding:"9px 18px",fontSize:13,borderRadius:8}}>{T("Créer un programme","Create program")}</button>
              </div>
            )}
          </div>
        );
      })()}

      {/* ══ SESSION ══ */}
      {view==="session"&&(()=>{
        // Calendar helpers
        const selDate = new Date(selectedDate+"T00:00:00");
        const year = selDate.getFullYear();
        const month = selDate.getMonth();
        const firstDay = new Date(year,month,1);
        const lastDay = new Date(year,month+1,0);
        const startDow = firstDay.getDay()===0?6:firstDay.getDay()-1; // Monday=0
        const daysInMonth = lastDay.getDate();
        const prevMonth = () => { const d=new Date(year,month-1,1); setSelectedDate(d.toISOString().split("T")[0]); };
        const nextMonth = () => { const d=new Date(year,month+1,1); setSelectedDate(d.toISOString().split("T")[0]); };
        const monthName = firstDay.toLocaleDateString(lang==="en"?"en-US":"fr-FR",{month:"long",year:"numeric"});
        const dayHeaders = lang==="en"?["M","T","W","T","F","S","S"]:["L","M","M","J","V","S","D"];

        const sessionInProgress = session.exercises?.length>0 && !session.closed && !session.draft;
        const sessionDone = session.closed;

        return (
          <div style={{padding:"14px 16px"}}>
            {/* Calendar */}
            <div style={{...card,padding:"14px 16px",marginBottom:14}}>
              {/* Month nav */}
              <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:10}}>
                <button onClick={prevMonth} style={{background:"none",border:"none",color:C.muted,fontSize:18,cursor:"pointer",padding:"0 8px"}}>‹</button>
                <div style={{fontWeight:700,fontSize:14,textTransform:"capitalize"}}>{monthName}</div>
                <button onClick={nextMonth} style={{background:"none",border:"none",color:C.muted,fontSize:18,cursor:"pointer",padding:"0 8px"}}>›</button>
              </div>
              {/* Day headers */}
              <div style={{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:2,marginBottom:4}}>
                {dayHeaders.map((d,i)=><div key={i} style={{textAlign:"center",fontSize:10,fontWeight:700,color:C.muted}}>{d}</div>)}
              </div>
              {/* Days grid */}
              <div style={{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:2}}>
                {Array(startDow).fill(null).map((_,i)=><div key={"e"+i}/>)}
                {Array(daysInMonth).fill(null).map((_,i)=>{
                  const dayNum=i+1;
                  const d=`${year}-${String(month+1).padStart(2,"0")}-${String(dayNum).padStart(2,"0")}`;
                  const s=sessions[d];
                  const done=s?.closed;
                  const inProgress=s?.startedAt&&!s?.closed&&!s?.draft&&s?.exercises?.length>0;
                  const planned=!done&&!inProgress&&(s?.planned||s?.draft);
                  const isSelected=d===selectedDate;
                  const isToday=d===today();
                  const dotColor=done?C.green:inProgress?C.red:planned?C.orange:"transparent";
                  return (
                    <div key={d} onClick={()=>{setSelectedDate(d);setDeleteConfirm(false);}}
                      style={{display:"flex",flexDirection:"column",alignItems:"center",padding:"3px 0",cursor:"pointer"}}>
                      <div style={{
                        width:30,height:30,borderRadius:"50%",
                        background:isSelected?C.blue:isToday&&!isSelected?C.blue+"18":"transparent",
                        border:isToday&&!isSelected?`1.5px solid ${C.blue}`:"1.5px solid transparent",
                        display:"flex",alignItems:"center",justifyContent:"center",
                      }}>
                        <span style={{fontSize:12,fontWeight:isSelected||isToday?700:400,color:isSelected?"#fff":isToday?C.blue:C.text}}>{dayNum}</span>
                      </div>
                      {/* Dot indicator */}
                      <div style={{width:5,height:5,borderRadius:"50%",background:dotColor,marginTop:1}}/>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Session card for selected date */}
            {(()=>{
                const hasContent = session.exercises?.length>0 || session.planned;
                const bannerColor = sessionDone?C.green : sessionInProgress?C.red : (session.draft||session.planned)?C.orange : null;
                const sessionName = session.sessionName || (session.planned?session.plannedName:null);

                const deleteSection = !deleteConfirm?(
                  <button onClick={()=>setDeleteConfirm(true)} style={{width:"100%",padding:9,background:"none",border:`1.5px solid ${C.red}44`,borderRadius:10,color:C.red,cursor:"pointer",fontSize:12,fontFamily:"inherit",fontWeight:600,marginTop:8}}>
                    {T("Supprimer cette séance","Delete this session")}
                  </button>
                ):(
                  <div style={{marginTop:8,background:isDark?"#2a1a1a":"#fff5f5",border:`1.5px solid ${C.red}`,borderRadius:10,padding:14}}>
                    <div style={{fontSize:13,color:C.red,fontWeight:700,marginBottom:6}}>{T("Supprimer définitivement ?","Delete permanently?")}</div>
                    <div style={{fontSize:12,color:C.muted,marginBottom:10}}>{T("Toutes les données seront perdues.","All data will be lost.")}</div>
                    <div style={{display:"flex",gap:8}}>
                      <button onClick={()=>setDeleteConfirm(false)} style={{flex:1,padding:"8px",background:"none",border:`1px solid ${C.border}`,borderRadius:8,color:C.muted,cursor:"pointer",fontFamily:"inherit",fontWeight:600}}>{T("Annuler","Cancel")}</button>
                      <button onClick={()=>{const u={...sessions};delete u[selectedDate];saveSessions(u);setDeleteConfirm(false);showToast(T("Séance supprimée","Session deleted"));}} style={{flex:1,padding:"8px",background:C.red,border:"none",borderRadius:8,color:"#fff",cursor:"pointer",fontFamily:"inherit",fontWeight:700}}>{T("Supprimer","Delete")}</button>
                    </div>
                  </div>
                );

                if(!hasContent) return (
                  <div style={{...card,marginBottom:12,padding:"14px 16px"}}>
                    <div style={{fontWeight:800,fontSize:17,marginBottom:2,textTransform:"capitalize"}}>{fmtDate(selectedDate,lang)}</div>
                    <div style={{fontSize:13,color:C.muted,marginBottom:12}}>{T("Aucune séance ce jour","No session this day")}</div>
                    <div style={{display:"flex",gap:8}}>
                      <button onClick={()=>{updateSession({exercises:[],note:"",mood:0,energy:0,draft:true});setView("session-detail");}} style={{flex:1,padding:11,background:"none",border:`1.5px dashed ${C.border}`,borderRadius:10,color:C.muted,cursor:"pointer",fontSize:13,fontFamily:"inherit",fontWeight:700}}>
                        + {T("Séance libre","Free session")}
                      </button>
                      <button onClick={()=>setPlanModal(true)} style={{padding:"11px 14px",background:"none",border:`1.5px solid ${C.orange}44`,borderRadius:10,color:C.orange,cursor:"pointer",fontSize:12,fontFamily:"inherit",fontWeight:700}}>
                        {T("À programmer","Plan")}
                      </button>
                    </div>
                  </div>
                );

                return (
                  <div style={{...card,marginBottom:12,overflow:"hidden"}}>
                    <div style={{background:bannerColor+"18",borderBottom:`1px solid ${bannerColor}33`,padding:"12px 16px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                      <div style={{fontWeight:800,fontSize:17,color:bannerColor}}>{sessionName||T("Séance","Session")}</div>
                      <div style={{display:"flex",gap:6,alignItems:"center"}}>
                        {sessionDone&&<span style={tag(C.green)}>{T("CLÔTURÉE","CLOSED")}</span>}
                        {sessionInProgress&&<span style={tag(C.red)}>{T("EN COURS","IN PROGRESS")}</span>}
                        {(session.draft||session.planned)&&!sessionDone&&!sessionInProgress&&<span style={tag(C.orange)}>{T("PRÉPARÉE","DRAFT")}</span>}
                      </div>
                    </div>
                    <div style={{padding:"12px 16px"}}>
                      <div style={{fontSize:12,color:C.muted,marginBottom:10,textTransform:"capitalize"}}>
                        {fmtDate(selectedDate,lang)}
                        {session.exercises?.length>0&&(
                          <span> · {session.exercises.length} {T("exo","ex")} · {session.exercises.reduce((a,e)=>a+e.sets.length,0)} {T("séries","sets")} · {session.exercises.reduce((a,e)=>a+calcVolume(e.sets,e.name),0).toLocaleString("fr-FR")} {unit}{session.duration?` · ${session.duration}`:""}</span>
                        )}
                      </div>
                      {sessionDone&&(
                        <>
                          <button onClick={()=>setView("session-detail")} style={{...btn(C.green),width:"100%",padding:11,fontSize:14,borderRadius:10}}>{T("Voir / Modifier","View / Edit")}</button>
                          {deleteSection}
                        </>
                      )}
                      {sessionInProgress&&(
                        <>
                          <button onClick={()=>setView("session-detail")} style={{...btn(C.red),width:"100%",padding:11,fontSize:14,borderRadius:10}}>{T("Continuer la séance","Continue session")}</button>
                          {deleteSection}
                        </>
                      )}
                      {(session.draft||session.planned)&&!sessionDone&&!sessionInProgress&&(
                        <>
                          <div style={{display:"flex",gap:8}}>
                            <button onClick={()=>{
                              if(session.planned&&!session.exercises?.length){
                                const day=activeProgram?.days?.find(d=>d.name===session.plannedName);
                                if(day){
                                  const newExs=day.exercises.map(ex=>{
                                    const lastPerf=getLastPerf(ex.id);
                                    const sets=lastPerf
                                      ? lastPerf.sets.map(s=>({reps:"",weight:"",targetReps:s.reps,targetWeight:s.weight,comment:""}))
                                      : [{reps:"",weight:"",targetReps:"",targetWeight:"",comment:""}];
                                    return {...ex,sets};
                                  });
                                  updateSession({exercises:newExs,sessionName:session.plannedName,draft:true});
                                }
                              }
                              setView("session-detail");
                            }} style={{flex:1,...btn(C.blue),padding:"11px",fontSize:13,borderRadius:8}}>{T("Voir / Modifier","View / Edit")}</button>
                            <button onClick={()=>{
                              const day=activeProgram?.days?.find(d=>d.name===session.plannedName);
                              if(day) launchDay(day); else setView("session-detail");
                            }} style={{...btn(C.orange),padding:"11px 18px",fontSize:13,borderRadius:8,flexShrink:0}}>{T("Lancer","Start")}</button>
                          </div>
                          {deleteSection}
                        </>
                      )}
                    </div>
                  </div>
                );
              })()}

          </div>
        );
      })()}

      {view==="session-detail"&&(
        <div style={{padding:"14px 16px"}}>
          <button onClick={()=>setView("session")} style={{background:"none",border:"none",color:C.blue,fontWeight:700,fontSize:14,cursor:"pointer",marginBottom:14,padding:0,fontFamily:"inherit"}}>← {T("Retour","Back")}</button>

          {/* Session header with name + start button */}
          <div style={{...card,padding:"12px 16px",marginBottom:14}}>
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
              <div style={{flex:1,minWidth:0}}>
                <input
                  value={session.sessionName||""}
                  onChange={e=>updateSession({sessionName:e.target.value})}
                  placeholder={T("Nom de la séance","Session name")}
                  style={{...inp,textAlign:"left",padding:"4px 0",fontSize:17,fontWeight:800,background:"transparent",border:"none",borderBottom:`1.5px solid ${C.border}`,borderRadius:0,width:"100%",outline:"none"}}
                />
                <div style={{fontSize:12,color:C.muted,marginTop:4,textTransform:"capitalize"}}>{fmtDate(selectedDate,lang)}</div>
                {session.startedAt&&session.closedAt&&session.duration&&(
                  <div style={{marginTop:6}}>
                    <div style={{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"}}>
                      <div style={{display:"flex",alignItems:"center",gap:4}}>
                        <span style={{fontSize:11,color:C.muted}}>{T("Début","Start")}</span>
                        <input type="time" value={fmtTime(session.startedAt)} onChange={e=>{
                          const [h,m]=e.target.value.split(":");
                          const d=new Date(session.startedAt);
                          d.setHours(parseInt(h),parseInt(m),0);
                          const startedAt=d.toISOString();
                          const endD=new Date(session.closedAt);
                          const mins=Math.round((endD-d)/60000);
                          const duration=mins>=60?`${Math.floor(mins/60)}h${String(mins%60).padStart(2,"0")}`:`${mins} min`;
                          updateSession({startedAt,duration});
                        }} style={{...inp,width:90,fontSize:12,padding:"4px 8px"}}/>
                      </div>
                      <span style={{fontSize:12,color:C.muted}}>→</span>
                      <div style={{display:"flex",alignItems:"center",gap:4}}>
                        <span style={{fontSize:11,color:C.muted}}>{T("Fin","End")}</span>
                        <input type="time" value={fmtTime(session.closedAt)} onChange={e=>{
                          const [h,m]=e.target.value.split(":");
                          const d=new Date(session.closedAt);
                          d.setHours(parseInt(h),parseInt(m),0);
                          const closedAt=d.toISOString();
                          const startD=new Date(session.startedAt);
                          const mins=Math.round((d-startD)/60000);
                          const duration=mins>=60?`${Math.floor(mins/60)}h${String(mins%60).padStart(2,"0")}`:`${mins} min`;
                          updateSession({closedAt,duration});
                        }} style={{...inp,width:90,fontSize:12,padding:"4px 8px"}}/>
                      </div>
                      <span style={{fontSize:12,fontWeight:700,color:C.green}}>· {session.duration}</span>
                    </div>
                  </div>
                )}
                {session.startedAt&&!session.closedAt&&(
                  <div style={{display:"flex",alignItems:"center",gap:6,marginTop:6}}>
                    <span style={{fontSize:11,color:C.muted}}>{T("Démarrée à","Started at")}</span>
                    <input type="time" value={fmtTime(session.startedAt)} onChange={e=>{
                      const [h,m]=e.target.value.split(":");
                      const d=new Date(session.startedAt);
                      d.setHours(parseInt(h),parseInt(m),0);
                      updateSession({startedAt:d.toISOString()});
                    }} style={{...inp,width:90,fontSize:12,padding:"4px 8px"}}/>
                  </div>
                )}
              </div>
              <div style={{display:"flex",flexDirection:"column",gap:6,alignItems:"flex-end",marginLeft:12,flexShrink:0}}>
                {session.closed&&<span style={tag(C.green)}>{T("CLÔTURÉE","CLOSED")}</span>}
                {!session.startedAt&&!session.closed&&(
                  <button onClick={()=>updateSession({startedAt:new Date().toISOString(),draft:false,planned:false})}
                    style={{...btn(C.blue),padding:"8px 14px",fontSize:13,borderRadius:8}}>
                    {T("Démarrer","Start")}
                  </button>
                )}
              </div>
            </div>
          </div>
          <div style={{display:"flex",gap:8,marginBottom:14}}>
            {[
              {l:T("Exercices","Exercises"),v:session.exercises.length},
              {l:T("Séries","Sets"),v:session.exercises.reduce((a,e)=>a+e.sets.length,0)},
              {l:"Volume",v:totalVolume>0?`${totalVolume.toLocaleString("fr-FR")} ${unit}`:"—"}
            ].map(s=>(
              <div key={s.l} style={{flex:1,background:C.card,border:`1px solid ${C.border}`,borderRadius:12,padding:"10px 8px",textAlign:"center"}}>
                <div style={{fontSize:16,fontWeight:800}}>{s.v}</div>
                <div style={{fontSize:10,color:C.muted,fontWeight:600,letterSpacing:0.5,textTransform:"uppercase"}}>{s.l}</div>
              </div>
            ))}
          </div>

          {/* Note */}
          <div style={{...card,marginBottom:12}}>
            <div style={{padding:"12px 16px"}}>
              <div style={{fontSize:11,fontWeight:700,color:C.muted,letterSpacing:0.5,textTransform:"uppercase",marginBottom:8}}>{T("Note de session","Session note")}</div>
              <textarea value={session.note||""} onChange={e=>updateSession({note:e.target.value})} placeholder={T("Commentaire, ressenti...","Notes, feelings...")} rows={2} style={{...inp,textAlign:"left",padding:"9px 12px",resize:"none",lineHeight:1.5,fontSize:13}}/>
              <div style={{display:"flex",gap:10,marginTop:10}}>
                <div style={{flex:1}}>
                  <div style={{fontSize:10,fontWeight:700,color:C.muted,textTransform:"uppercase",marginBottom:6}}>{T("Humeur","Mood")}</div>
                  <div style={{display:"flex",gap:4}}>{MOOD_OPTIONS.map(m=><button key={m.v} onClick={()=>updateSession({mood:session.mood===m.v?0:m.v})} style={{flex:1,padding:"5px 0",background:session.mood===m.v?C.blue:C.sub,border:"none",borderRadius:6,color:session.mood===m.v?"#fff":C.muted,fontSize:10,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}}>{lang==="en"?m.en:m.fr}</button>)}</div>
                </div>
                <div style={{flex:1}}>
                  <div style={{fontSize:10,fontWeight:700,color:C.muted,textTransform:"uppercase",marginBottom:6}}>{T("Énergie","Energy")}</div>
                  <div style={{display:"flex",gap:4}}>{ENERGY_OPTIONS.map(e=><button key={e.v} onClick={()=>updateSession({energy:session.energy===e.v?0:e.v})} style={{flex:1,padding:"5px 0",background:session.energy===e.v?C.orange:C.sub,border:"none",borderRadius:6,color:session.energy===e.v?"#fff":C.muted,fontSize:11,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}}>{e.label}</button>)}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick actions */}
          <div style={{display:"flex",gap:8,marginBottom:10,flexWrap:"wrap"}}>
            <button onClick={()=>setShowTimer(!showTimer)} style={{...pill(showTimer,C.blue),padding:"8px 14px",fontSize:12}}>{showTimer?T("Masquer chrono","Hide timer"):T("Chrono","Timer")}</button>
            <button onClick={()=>setDuplicateModal(true)} style={{...pill(false),padding:"8px 14px",fontSize:12}}>{T("Dupliquer","Duplicate")}</button>
          </div>
          {showTimer&&<RestTimer C={C} T={T} isDark={isDark}/>}

          {session.exercises.length===0&&(
            <div style={{textAlign:"center",padding:"44px 20px",border:`1.5px dashed ${C.border}`,borderRadius:14,color:C.muted}}>
              <div style={{fontSize:32,marginBottom:8}}>+</div>
              <div style={{fontWeight:600}}>{T("Aucun exercice","No exercises yet")}</div>
              <div style={{fontSize:13,marginTop:4}}>{T("Lance un jour depuis Accueil ou ajoute un exercice","Start a day from Home or add an exercise")}</div>
            </div>
          )}

          {(()=>{
            const handleDragStart=(i)=>{dragItem.current=i;setDragIdx(i);};
            const handleDragEnter=(i)=>{dragOverItem.current=i;setDragOverIdx(i);};
            const handleDragEnd=()=>{
              if(dragItem.current!==null&&dragOverItem.current!==null&&dragItem.current!==dragOverItem.current){
                const exs=[...session.exercises];
                const dragged=exs.splice(dragItem.current,1)[0];
                exs.splice(dragOverItem.current,0,dragged);
                updateSession({exercises:exs});
              }
              dragItem.current=null;dragOverItem.current=null;
              setDragIdx(null);setDragOverIdx(null);
            };
            const handleTouchStart=(e,i)=>{dragItem.current=i;setDragIdx(i);};
            const handleTouchMove=(e)=>{
              e.preventDefault();
              const y=e.touches[0].clientY;
              let overIdx=dragItem.current;
              cardRefs.current.forEach((child,i)=>{
                if(!child) return;
                const rect=child.getBoundingClientRect();
                if(y>rect.top&&y<rect.bottom) overIdx=i;
              });
              if(overIdx!==dragOverItem.current){dragOverItem.current=overIdx;setDragOverIdx(overIdx);}
            };
            const handleTouchEnd=()=>handleDragEnd();

            return session.exercises.map((ex,ei)=>{
              const pr=calcPR(ex.sets);
              const vol=calcVolume(ex.sets,ex.name);
              const isDb=ex.doubleWeight!==undefined?ex.doubleWeight:isHalteres(ex.name);
              const exKey=ex.id+"-"+ei;
              const collapsed=collapsedExercises[exKey]||false;
              const setCollapsed=(val)=>setCollapsedExercises(prev=>({...prev,[exKey]:val}));
              const isDragging=dragIdx===ei;
              const isDragOver=dragOverIdx===ei&&dragIdx!==ei;
              return (
                <div key={ei}
                  ref={el=>cardRefs.current[ei]=el}
                  draggable
                  onDragStart={()=>handleDragStart(ei)}
                  onDragEnter={()=>handleDragEnter(ei)}
                  onDragEnd={handleDragEnd}
                  onDragOver={e=>e.preventDefault()}
                  style={{...card,opacity:isDragging?0.4:1,transform:isDragOver?"translateY(-3px)":"none",borderColor:isDragOver?C.blue:C.border,transition:"transform 0.15s,border-color 0.15s,opacity 0.15s",cursor:"default"}}>
                  <div style={{padding:"12px 16px",borderBottom:collapsed?`none`:`1px solid ${C.border}`,display:"flex",alignItems:"center",gap:8}}>
                    <div onTouchStart={e=>handleTouchStart(e,ei)} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}
                      style={{display:"flex",flexDirection:"column",alignItems:"center",gap:3,flexShrink:0,cursor:"grab",padding:"4px 6px",touchAction:"none"}}>
                      {[0,1,2].map(i=>(
                        <div key={i} style={{display:"flex",gap:3}}>
                          <div style={{width:3,height:3,borderRadius:"50%",background:C.muted}}/>
                          <div style={{width:3,height:3,borderRadius:"50%",background:C.muted}}/>
                        </div>
                      ))}
                      <div style={{width:18,height:18,borderRadius:"50%",background:C.blue+"18",display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,fontWeight:800,color:C.blue,marginTop:3}}>{ei+1}</div>
                    </div>
                    <div style={{flex:1,minWidth:0}} onClick={()=>setCollapsed(!collapsed)}>
                      <div style={{display:"flex",alignItems:"center",gap:6}}>
                        <div style={{fontWeight:700,fontSize:15,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{ex.name}</div>
                        {isDb&&<span style={{...tag(C.orange),fontSize:9,flexShrink:0}}>×2</span>}
                      </div>
                      <div style={{display:"flex",gap:5,marginTop:4}}><span style={tag(TYPE_COLORS[ex.type]||C.blue)}>{TL[ex.type]||ex.type}</span><span style={tag("#888")}>{ex.category}</span></div>
                    </div>
                    <button onClick={()=>setCollapsed(!collapsed)} style={{background:"none",border:"none",color:C.muted,fontSize:16,cursor:"pointer",padding:"0 4px",transform:collapsed?"rotate(-90deg)":"rotate(0deg)",transition:"transform 0.2s"}}>▾</button>
                    <button onClick={()=>removeEx(ei)} style={{background:"none",border:"none",color:C.muted,fontSize:20,cursor:"pointer",padding:"0 2px"}}>×</button>
                  </div>
                {!collapsed&&(
                <div style={{padding:"12px 16px"}}>
                  <div style={{display:"grid",gridTemplateColumns:"28px 1fr 1fr 32px",gap:6,marginBottom:4,fontSize:10,color:C.muted,fontWeight:700,letterSpacing:1,textTransform:"uppercase"}}>
                    <div>#</div><div style={{textAlign:"center"}}>{T("Reps","Reps")}</div><div style={{textAlign:"center"}}>{isDb?T("Poids/haltère","Weight/db"):T("Poids","Weight")} ({unit})</div><div/>
                  </div>
                  {ex.sets.map((set,si)=>{
                    const hasTarget=set.targetReps||set.targetWeight;
                    return (
                      <div key={si} style={{marginBottom:10}}>
                        {hasTarget&&(
                          <div style={{display:"grid",gridTemplateColumns:"28px 1fr 1fr 32px",gap:6,marginBottom:2}}>
                            <div/><div style={{textAlign:"center",fontSize:11,color:C.muted,fontStyle:"italic",opacity:0.7}}>{set.targetReps||""}</div>
                            <div style={{textAlign:"center",fontSize:11,color:C.muted,fontStyle:"italic",opacity:0.7}}>{set.targetWeight?`${set.targetWeight} ${unit}`:""}</div><div/>
                          </div>
                        )}
                        <div style={{display:"grid",gridTemplateColumns:"28px 1fr 1fr 32px",gap:6,alignItems:"center",marginBottom:4}}>
                          <div style={{width:24,height:24,borderRadius:"50%",background:C.sub,display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:700,color:C.muted}}>{si+1}</div>
                          <input type="number" placeholder={set.targetReps||"—"} value={set.reps} onChange={e=>updateSet(ei,si,"reps",e.target.value)} style={inp}/>
                          <input type="number" placeholder={set.targetWeight||"—"} value={set.weight} onChange={e=>updateSet(ei,si,"weight",e.target.value)} style={inp}/>
                          <button onClick={()=>removeSet(ei,si)} style={{background:"none",border:"none",color:isDark?"#444":"#ccc",cursor:"pointer",fontSize:18,textAlign:"center"}}>×</button>
                        </div>
                        <input type="text" placeholder={T("Commentaire série (optionnel)","Set comment (optional)")} value={set.comment||""} onChange={e=>updateSet(ei,si,"comment",e.target.value)} style={{...inp,fontSize:12,padding:"6px 10px",textAlign:"left",color:C.muted,borderColor:set.comment?C.border:`${C.border}88`}}/>
                      </div>
                    );
                  })}
                  <div style={{display:"flex",gap:8,marginTop:2}}>
                    <button onClick={()=>addSet(ei)} style={{flex:1,padding:"9px",background:"none",border:`1.5px dashed ${C.border}`,borderRadius:8,color:C.muted,cursor:"pointer",fontSize:13,fontFamily:"inherit",fontWeight:600}}>+ {T("Série","Set")}</button>
                    <button onClick={()=>{setStatsEx(ex);setView("stats");}} style={{padding:"9px 14px",background:"none",border:`1.5px solid ${C.border}`,borderRadius:8,color:C.blue,cursor:"pointer",fontSize:12,fontFamily:"inherit",fontWeight:700}}>Stats</button>
                  </div>
                  {(pr>0||vol>0)&&(
                    <div style={{display:"flex",gap:12,marginTop:10,paddingTop:10,borderTop:`1px solid ${C.border}`}}>
                      <div style={{fontSize:12,color:C.muted}}>PR : <strong style={{color:C.text}}>{pr} {unit}</strong></div>
                      <div style={{fontSize:12,color:C.muted}}>Vol : <strong style={{color:C.text}}>{vol.toLocaleString("fr-FR")} {unit}{isDb?" (×2)":""}</strong></div>
                    </div>
                  )}
                </div>
                )}
              </div>
            );
          });})()}

          {session.exercises.length>0&&(
            <button onClick={()=>addExToSession} style={{display:"none"}}/>
          )}

          <button onClick={()=>{setAddingEx(true);setFilterCat("Tout");setSearchQ("");}} style={{...btn(C.accent),width:"100%",padding:14,fontSize:15,borderRadius:12,marginTop:4,marginBottom:10}}>
            + {T("Ajouter un exercice","Add exercise")}
          </button>

          {/* Clôturer */}
          {session.exercises.length>0&&!session.closed&&!session.draft&&(
            <button onClick={handleCloseSession} style={{width:"100%",padding:14,background:"none",border:`2px solid ${C.green}`,borderRadius:12,color:C.green,fontWeight:800,fontSize:15,cursor:"pointer",fontFamily:"inherit",letterSpacing:0.3}}>
              {T("Terminer la séance","Close session")}
            </button>
          )}
          {session.closed&&(
            <div style={{textAlign:"center",padding:"12px",background:C.green+"12",border:`1px solid ${C.green}33`,borderRadius:12,color:C.green,fontWeight:700,fontSize:14}}>
              {T("Séance terminée","Session closed")}
              {session.duration&&` · ${session.duration}`}
              {session.closedAt&&` — ${fmtTime(session.closedAt)}`}
            </div>
          )}
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
              <div style={{padding:"12px 16px",borderBottom:(prog.days||[]).length>0?`1px solid ${C.border}`:"none",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                <div style={{display:"flex",alignItems:"center",gap:10}}>
                  <div style={{width:13,height:13,borderRadius:"50%",background:prog.color,flexShrink:0}}/>
                  <div>
                    <div style={{fontWeight:800,fontSize:16}}>{prog.name}</div>
                    <div style={{fontSize:12,color:C.muted,marginTop:1}}>{(prog.days||[]).length} {T("jour(s)","day(s)")}</div>
                  </div>
                  {prog.active&&<span style={tag(prog.color)}>{T("ACTIF","ACTIVE")}</span>}
                </div>
                <div style={{display:"flex",gap:6}}>
                  {!prog.active&&<button onClick={()=>{savePrograms(programs.map((p,i)=>({...p,active:i===pi})));showToast(T("Programme activé","Program activated"));}} style={{background:"none",border:`1px solid ${prog.color}`,color:prog.color,borderRadius:8,padding:"5px 10px",fontSize:12,cursor:"pointer",fontFamily:"inherit",fontWeight:700}}>{T("Activer","Activate")}</button>}
                  <button onClick={()=>setEditingProgram({idx:pi,program:prog})} style={{background:"none",border:`1px solid ${C.border}`,color:C.blue,borderRadius:8,padding:"5px 10px",fontSize:12,cursor:"pointer",fontFamily:"inherit",fontWeight:700}}>{T("Modifier","Edit")}</button>
                  <button onClick={()=>savePrograms(programs.filter((_,i)=>i!==pi))} style={{background:"none",border:"1px solid #fecaca",color:C.red,borderRadius:8,padding:"5px 10px",fontSize:12,cursor:"pointer"}}>×</button>
                </div>
              </div>
              {(prog.days||[]).length>0&&(
                <div style={{padding:"10px 16px",display:"flex",flexDirection:"column",gap:6}}>
                  {prog.days.map((day,di)=>(
                    <div key={di} style={{display:"flex",alignItems:"center",justifyContent:"space-between",background:prog.color+"10",border:`1px solid ${prog.color}33`,borderRadius:10,padding:"10px 14px"}}>
                      <div style={{fontWeight:700,fontSize:14,color:prog.color}}>{day.name}</div>
                      <button onClick={()=>{setEditingProgram({idx:pi,program:prog});setEditingDay({progIdx:pi,dayIdx:di,day});}} style={{background:"none",border:`1px solid ${prog.color}`,color:prog.color,borderRadius:8,padding:"5px 14px",fontSize:12,cursor:"pointer",fontFamily:"inherit",fontWeight:700,flexShrink:0,marginLeft:8}}>
                        {T("Modifier","Edit")}
                      </button>
                    </div>
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
            <div style={{fontSize:13,color:C.muted}}>{programs[editingProgram.idx]?.days?.length||0} {T("jour(s)","day(s)")}</div>
            <button onClick={()=>{
              const nd={id:"day"+Date.now(),name:T("Nouveau jour","New day"),exercises:[]};
              const upd=programs.map((p,i)=>i!==editingProgram.idx?p:{...p,days:[...(p.days||[]),nd]});
              savePrograms(upd);
              setEditingDay({progIdx:editingProgram.idx,dayIdx:upd[editingProgram.idx].days.length-1,day:nd});
            }} style={{...btn(editingProgram.program.color),padding:"8px 14px",fontSize:13,borderRadius:8}}>+ {T("Jour","Day")}</button>
          </div>
          {(programs[editingProgram.idx]?.days||[]).length===0&&<div style={{textAlign:"center",padding:"32px 20px",border:`1.5px dashed ${C.border}`,borderRadius:12,color:C.muted,fontSize:13}}>{T("Aucun jour","No days yet")}</div>}
          {(programs[editingProgram.idx]?.days||[]).map((day,di)=>(
            <div key={day.id} style={card}>
              <div style={{padding:"12px 16px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                <div>
                  <div style={{fontWeight:700,fontSize:15}}>{T("Jour","Day")} {di+1} — {day.name}</div>
                  <div style={{fontSize:12,color:C.muted,marginTop:2}}>{(day.exercises||[]).length} {T("exercice(s)","exercise(s)")}</div>
                </div>
                <div style={{display:"flex",gap:6}}>
                  <button onClick={()=>setEditingDay({progIdx:editingProgram.idx,dayIdx:di,day})} style={{background:"none",border:`1px solid ${C.border}`,color:C.blue,borderRadius:8,padding:"5px 10px",fontSize:12,cursor:"pointer",fontFamily:"inherit",fontWeight:700}}>{T("Modifier","Edit")}</button>
                  <button onClick={()=>savePrograms(programs.map((p,i)=>i!==editingProgram.idx?p:{...p,days:p.days.filter((_,j)=>j!==di)}))} style={{background:"none",border:"1px solid #fecaca",color:C.red,borderRadius:8,padding:"5px 10px",fontSize:12,cursor:"pointer"}}>×</button>
                </div>
              </div>
              {(day.exercises||[]).length>0&&<div style={{padding:"8px 16px",display:"flex",gap:6,flexWrap:"wrap"}}>{day.exercises.map((ex,ei)=><span key={ei} style={{fontSize:12,background:C.sub,border:`1px solid ${C.border}`,borderRadius:6,padding:"3px 8px",color:C.muted}}>{ex.name}</span>)}</div>}
            </div>
          ))}
        </div>
      )}

      {view==="split"&&editingDay&&(
        <div style={{padding:"14px 16px"}}>
          <button onClick={()=>{setEditingDay(null);setAddingDayEx(false);setSearchQ("");setFilterCat("Tout");}} style={{background:"none",border:"none",color:C.blue,fontWeight:700,fontSize:14,cursor:"pointer",marginBottom:14,padding:0,fontFamily:"inherit"}}>← {T("Retour","Back")}</button>
          <span style={sec}>{T("Nom du jour","Day name")}</span>
          <input defaultValue={programs[editingDay.progIdx]?.days?.[editingDay.dayIdx]?.name}
            onBlur={e=>{if(!e.target.value.trim()) return; savePrograms(programs.map((p,i)=>i!==editingDay.progIdx?p:{...p,days:p.days.map((d,j)=>j!==editingDay.dayIdx?d:{...d,name:e.target.value.trim()})}));}}
            style={{...inp,textAlign:"left",padding:"10px 14px",marginBottom:14}}/>
          <span style={sec}>{T("Exercices prévus","Planned exercises")} ({programs[editingDay.progIdx]?.days?.[editingDay.dayIdx]?.exercises?.length||0})</span>
          {(programs[editingDay.progIdx]?.days?.[editingDay.dayIdx]?.exercises||[]).map((ex,ei)=>{
            const exList = programs[editingDay.progIdx]?.days?.[editingDay.dayIdx]?.exercises||[];
            const moveDayEx = (dir) => {
              const arr=[...exList]; const swap=ei+dir;
              if(swap<0||swap>=arr.length) return;
              [arr[ei],arr[swap]]=[arr[swap],arr[ei]];
              savePrograms(programs.map((p,i)=>i!==editingDay.progIdx?p:{...p,days:p.days.map((d,j)=>j!==editingDay.dayIdx?d:{...d,exercises:arr})}));
            };
            return (
            <div key={ei} style={{display:"flex",alignItems:"center",gap:8,padding:"9px 12px",background:C.sub,borderRadius:10,marginBottom:6,border:`1px solid ${C.border}`}}>
              {/* Number + reorder */}
              <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:1,flexShrink:0}}>
                <button onClick={()=>moveDayEx(-1)} disabled={ei===0} style={{background:"none",border:"none",color:ei===0?C.border:C.muted,cursor:ei===0?"default":"pointer",fontSize:11,padding:0,lineHeight:1}}>▲</button>
                <div style={{width:20,height:20,borderRadius:"50%",background:C.blue+"18",display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,fontWeight:800,color:C.blue}}>{ei+1}</div>
                <button onClick={()=>moveDayEx(1)} disabled={ei===exList.length-1} style={{background:"none",border:"none",color:ei===exList.length-1?C.border:C.muted,cursor:ei===exList.length-1?"default":"pointer",fontSize:11,padding:0,lineHeight:1}}>▼</button>
              </div>
              <div style={{flex:1}}>
                <div style={{fontWeight:600,fontSize:13}}>{ex.name}</div>
                <div style={{display:"flex",gap:5,marginTop:3}}><span style={tag(TYPE_COLORS[ex.type]||C.blue)}>{TL[ex.type]}</span><span style={tag("#888")}>{ex.category}</span></div>
              </div>
              <button onClick={()=>savePrograms(programs.map((p,i)=>i!==editingDay.progIdx?p:{...p,days:p.days.map((d,j)=>j!==editingDay.dayIdx?d:{...d,exercises:d.exercises.filter((_,k)=>k!==ei)})}))} style={{background:"none",border:"none",color:isDark?"#444":"#ccc",fontSize:20,cursor:"pointer"}}>×</button>
            </div>
            );
          })}
          {!addingDayEx?(
            <button onClick={()=>{setAddingDayEx(true);setSearchQ("");setFilterCat("Tout");}} style={{width:"100%",padding:"11px",background:"none",border:`1.5px dashed ${C.border}`,borderRadius:10,color:C.blue,cursor:"pointer",fontSize:13,fontFamily:"inherit",fontWeight:700,marginTop:6}}>+ {T("Ajouter un exercice","Add exercise")}</button>
          ):(
            <div style={{marginTop:10}}>
              <input placeholder={T("Rechercher...","Search...")} value={searchQ} onChange={e=>setSearchQ(e.target.value)} style={{...inp,textAlign:"left",padding:"9px 14px",marginBottom:8}}/>
              <div style={{display:"flex",gap:6,overflowX:"auto",paddingBottom:8}}>{["Tout",...CATEGORIES].map(c=><button key={c} onClick={()=>setFilterCat(c)} style={pill(filterCat===c)}>{c}</button>)}</div>
              <div style={{maxHeight:260,overflowY:"auto",marginTop:6}}>
                {filteredLib.map(ex=>{
                  const already=programs[editingDay.progIdx]?.days?.[editingDay.dayIdx]?.exercises?.some(e=>e.id===ex.id);
                  return (
                    <div key={ex.id} onClick={()=>{if(already)return;savePrograms(programs.map((p,i)=>i!==editingDay.progIdx?p:{...p,days:p.days.map((d,j)=>j!==editingDay.dayIdx?d:{...d,exercises:[...(d.exercises||[]),ex]})}));showToast(`${ex.name} ${T("ajouté","added")}`);}}
                      style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"9px 10px",background:already?C.sub:C.card,border:`1px solid ${C.border}`,borderRadius:8,marginBottom:5,cursor:already?"default":"pointer",opacity:already?0.5:1}}>
                      <div><div style={{fontWeight:600,fontSize:13}}>{ex.name}</div><div style={{display:"flex",gap:5,marginTop:2}}><span style={tag(TYPE_COLORS[ex.type]||C.blue)}>{TL[ex.type]}</span><span style={tag("#888")}>{ex.category}</span></div></div>
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

      {/* ══ HISTORY ══ */}
      {view==="history"&&(
        <div style={{padding:"14px 16px"}}>
          {Object.keys(sessions).filter(d=>sessions[d].exercises?.length>0).length===0&&<div style={{textAlign:"center",padding:48,color:C.muted}}>{T("Aucune session enregistrée","No sessions recorded")}</div>}
          {Object.keys(sessions).filter(d=>sessions[d].exercises?.length>0).sort((a,b)=>a>b?-1:1).map(d=>{
            const ses=sessions[d]; const vol=ses.exercises?.reduce((a,e)=>a+calcVolume(e.sets,e.name),0)||0; const moodOpt=MOOD_OPTIONS.find(m=>m.v===ses.mood);
            return (
              <div key={d} style={{...card,cursor:"pointer"}} onClick={()=>{setSelectedDate(d);setView("session");}}>
                <div style={{padding:"13px 16px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                  <div style={{flex:1}}>
                    <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:2}}>
                      {ses.sessionName&&<span style={{fontWeight:800,fontSize:15,color:ses.closed?C.green:C.text}}>{ses.sessionName}</span>}
                      {ses.closed&&<span style={tag(C.green)}>{T("OK","OK")}</span>}
                    </div>
                    <div style={{fontWeight:ses.sessionName?400:700,fontSize:ses.sessionName?12:15,color:C.muted,textTransform:"capitalize"}}>{fmtDate(d,lang)}{ses.closedAt?` · ${fmtTime(ses.closedAt)}`:""}</div>
                    <div style={{fontSize:12,color:C.muted,marginTop:2}}>{ses.exercises?.length} {T("exercice(s)","exercise(s)")} · {vol>0?`${vol.toLocaleString("fr-FR")} ${unit}`:"—"}{moodOpt?` · ${lang==="en"?moodOpt.en:moodOpt.fr}`:""}</div>
                    {ses.note&&<div style={{fontSize:12,color:C.muted,marginTop:2,fontStyle:"italic"}}>"{ses.note.slice(0,50)}{ses.note.length>50?"…":""}"</div>}
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
              {/* 3 filter buttons */}
              <div style={{display:"flex",gap:8,marginBottom:14,alignItems:"center"}}>
                <button onClick={()=>setStatsFilter("all")} style={pill(statsFilter==="all")}>{T("Tous","All")}</button>
                <button onClick={()=>setStatsFilter("favorites")} style={pill(statsFilter==="favorites",C.orange)}>⭐ {T("Favoris","Favorites")}</button>
                {/* Muscle dropdown */}
                <div style={{position:"relative"}}>
                  <button onClick={()=>{setStatsFilter("muscle");setStatsMuscleOpen(!statsMuscleOpen);}} style={{...pill(statsFilter==="muscle",C.green),display:"flex",alignItems:"center",gap:4}}>
                    {statsFilter==="muscle"?statsMuscle:T("Muscle","Muscle")} ▾
                  </button>
                  {statsMuscleOpen&&(
                    <div style={{position:"absolute",top:"110%",left:0,background:C.card,border:`1px solid ${C.border}`,borderRadius:10,zIndex:50,minWidth:160,boxShadow:"0 4px 20px rgba(0,0,0,0.15)"}}>
                      {CATEGORIES.map(cat=>(
                        <div key={cat} onClick={()=>{setStatsMuscle(cat);setStatsFilter("muscle");setStatsMuscleOpen(false);}}
                          style={{padding:"10px 14px",fontSize:13,fontWeight:600,color:statsMuscle===cat?C.green:C.text,background:statsMuscle===cat?C.green+"12":"transparent",cursor:"pointer",borderBottom:`1px solid ${C.border}`}}>
                          {cat}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Exercise list filtered */}
              {(()=>{
                const favorites=settings.favorites||[];
                const filtered=library.filter(ex=>{
                  const pts=getExStats(ex.id);
                  if(pts.length===0) return false;
                  if(statsFilter==="favorites") return favorites.includes(ex.id);
                  if(statsFilter==="muscle") return ex.category===statsMuscle;
                  return true;
                });
                if(filtered.length===0) return <div style={{textAlign:"center",padding:48,color:C.muted,fontSize:13}}>{statsFilter==="favorites"?T("Aucun favori — appuie sur ⭐ pour en ajouter","No favorites — tap ⭐ to add"):T("Aucune donnée pour ce groupe musculaire","No data for this muscle group")}</div>;
                return filtered.map(ex=>{
                  const pts=getExStats(ex.id);
                  const pr=Math.max(...pts.map(p=>p.pr));
                  const isFav=favorites.includes(ex.id);
                  return (
                    <div key={ex.id} style={card}>
                      <div style={{padding:"12px 16px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                        <div style={{flex:1,cursor:"pointer"}} onClick={()=>setStatsEx(ex)}>
                          <div style={{fontWeight:700,fontSize:14}}>{ex.name}</div>
                          <div style={{fontSize:12,color:C.muted,marginTop:2}}>{pts.length} {T("session(s)","session(s)")} · PR {pr} {unit}</div>
                        </div>
                        <div style={{display:"flex",alignItems:"center",gap:10}}>
                          <button onClick={()=>{
                            const favs=favorites.includes(ex.id)?favorites.filter(f=>f!==ex.id):[...favorites,ex.id];
                            saveSettings({...settings,favorites:favs});
                          }} style={{background:"none",border:"none",fontSize:18,cursor:"pointer",opacity:isFav?1:0.3}}>⭐</button>
                          <div style={{cursor:"pointer"}} onClick={()=>setStatsEx(ex)}><Sparkline data={pts.map(p=>({value:p.pr}))} color={C.blue}/></div>
                        </div>
                      </div>
                    </div>
                  );
                });
              })()}
            </>
          ):(
            <ExStats ex={statsEx} pts={getExStats(statsEx.id)} onBack={()=>setStatsEx(null)} C={C} pill={pill} tag={tag} unit={unit} lang={lang} T={T} TL={TL} fmtShort={fmtShort} sessions={sessions}/>
          )}
        </div>
      )}

      {/* ══ BODY ══ */}
      {view==="body"&&(
        <div style={{padding:"14px 16px"}}>
          <div style={{...card,marginBottom:14}}>
            <div style={{padding:"14px 16px"}}>
              <div style={{fontWeight:700,fontSize:14,marginBottom:12}}>{T("Ajouter une mesure","Add measurement")}</div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:10}}>
                <div><div style={{fontSize:11,color:C.muted,fontWeight:700,textTransform:"uppercase",letterSpacing:0.5,marginBottom:5}}>{T("Date","Date")}</div><input type="date" value={newBodyDate} onChange={e=>setNewBodyDate(e.target.value)} style={{...inp,fontSize:13,textAlign:"left",padding:"8px 10px"}}/></div>
                <div><div style={{fontSize:11,color:C.muted,fontWeight:700,textTransform:"uppercase",letterSpacing:0.5,marginBottom:5}}>{T("Poids","Weight")} ({unit})</div><input type="number" step="0.1" placeholder="75.0" value={newBodyWeight} onChange={e=>setNewBodyWeight(e.target.value)} style={inp}/></div>
              </div>
              <button onClick={()=>{if(!newBodyWeight)return;const entry={date:newBodyDate,weight:parseFloat(newBodyWeight)};const updated=[...bodyLog.filter(b=>b.date!==newBodyDate),entry].sort((a,b)=>a.date>b.date?1:-1);saveBodyLog(updated);setNewBodyWeight("");showToast(T("Mesure enregistrée","Measurement saved"));}} style={{...btn(C.green),width:"100%",padding:11,fontSize:14,borderRadius:10}}>{T("Enregistrer","Save")}</button>
            </div>
          </div>
          {bodyLog.length>=2&&(<div style={{...card,padding:"16px"}}>
            <div style={{fontWeight:700,fontSize:14,marginBottom:12}}>{T("Évolution du poids","Weight evolution")}</div>
            <Sparkline data={bodyLog.map(b=>({value:b.weight}))} color={C.green} width={320} height={60}/>
            <div style={{display:"flex",justifyContent:"space-between",marginTop:10}}>
              <div style={{fontSize:12,color:C.muted}}>{T("Min","Min")} : <strong>{Math.min(...bodyLog.map(b=>b.weight))} {unit}</strong></div>
              <div style={{fontSize:12,color:C.muted}}>{T("Max","Max")} : <strong>{Math.max(...bodyLog.map(b=>b.weight))} {unit}</strong></div>
              <div style={{fontSize:12,color:C.muted}}>{T("Actuel","Current")} : <strong style={{color:C.green}}>{bodyLog[bodyLog.length-1].weight} {unit}</strong></div>
            </div>
          </div>)}
          <div style={{marginTop:10}}>
            <div style={{fontSize:11,fontWeight:700,color:C.muted,letterSpacing:1,textTransform:"uppercase",marginBottom:8}}>{T("Historique","History")}</div>
            {bodyLog.length===0&&<div style={{textAlign:"center",padding:32,color:C.muted,fontSize:13}}>{T("Aucune mesure","No measurements yet")}</div>}
            {[...bodyLog].reverse().map((b,i)=>(
              <div key={b.date} style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 14px",background:C.card,border:`1px solid ${C.border}`,borderRadius:10,marginBottom:6}}>
                <div><div style={{fontWeight:600,fontSize:14}}>{b.weight} {unit}</div><div style={{fontSize:12,color:C.muted,marginTop:1,textTransform:"capitalize"}}>{fmtShort(b.date,lang)}</div></div>
                {i>0&&(()=>{const prev=[...bodyLog].reverse()[i-1];const diff=(b.weight-prev.weight).toFixed(1);return <span style={{fontSize:13,fontWeight:700,color:parseFloat(diff)<=0?C.green:C.red}}>{parseFloat(diff)>0?"+":""}{diff} {unit}</span>;})()}
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
          <div style={{display:"flex",gap:8,overflowX:"auto",paddingBottom:10,marginBottom:4}}>{["Tout",...CATEGORIES].map(c=><button key={c} onClick={()=>setFilterCat(c)} style={pill(filterCat===c)}>{c}</button>)}</div>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}}>
            <div style={{fontSize:12,color:C.muted}}>{filteredLib.length} {T("exercice(s)","exercise(s)")}</div>
            <div style={{display:"flex",gap:8}}>
              <button onClick={()=>setEditingLib(!editingLib)} style={pill(editingLib)}>{editingLib?T("Terminer","Done"):T("Gérer","Manage")}</button>
              <button onClick={()=>setCreatingEx(true)} style={{...btn(C.blue),padding:"6px 14px",fontSize:12,borderRadius:8}}>+ {T("Nouveau","New")}</button>
            </div>
          </div>
          {filteredLib.map(ex=>{
            const dw = ex.doubleWeight!==undefined ? ex.doubleWeight : isHalteres(ex.name);
            return (
              <div key={ex.id} style={card}>
                <div style={{padding:"11px 14px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                  <div style={{flex:1,minWidth:0}}>
                    <div style={{display:"flex",alignItems:"center",gap:6}}>
                      <div style={{fontWeight:600,fontSize:14}}>{ex.name}</div>
                      {dw&&<span style={{...tag(C.orange),fontSize:9}}>×2</span>}
                    </div>
                    <div style={{display:"flex",gap:6,marginTop:4}}><span style={tag(TYPE_COLORS[ex.type]||C.blue)}>{TL[ex.type]||ex.type}</span><span style={tag("#888")}>{ex.category}</span></div>
                  </div>
                  {editingLib&&(
                    <div style={{display:"flex",gap:6,flexShrink:0,marginLeft:8}}>
                      <button onClick={()=>setEditingEx({...ex})} style={{background:"none",border:`1px solid ${C.border}`,color:C.blue,borderRadius:6,padding:"4px 10px",fontSize:12,cursor:"pointer",fontFamily:"inherit",fontWeight:700}}>{T("Modifier","Edit")}</button>
                      {ex.id.startsWith("c")&&<button onClick={()=>saveLibrary(library.filter(e=>e.id!==ex.id))} style={{background:"none",border:`1px solid ${C.red}`,color:C.red,borderRadius:6,padding:"4px 10px",fontSize:12,cursor:"pointer",fontFamily:"inherit"}}>{T("Supprimer","Delete")}</button>}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ══ SETTINGS ══ */}
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
            <div style={{display:"flex",gap:8,marginBottom:4}}>{[{k:"light",fr:"Clair",en:"Light"},{k:"dark",fr:"Sombre",en:"Dark"},{k:"auto",fr:"Auto",en:"Auto"}].map(({k,fr,en})=><button key={k} onClick={()=>saveSettings({...settings,theme:k})} style={{...pill(settings.theme===k),flex:1,padding:"10px 0"}}>{lang==="en"?en:fr}</button>)}</div>
            <span style={sec}>{T("Langue","Language")}</span>
            <div style={{display:"flex",gap:8,marginBottom:4}}>{[{k:"fr",l:"Français"},{k:"en",l:"English"}].map(({k,l})=><button key={k} onClick={()=>saveSettings({...settings,lang:k})} style={{...pill(settings.lang===k),flex:1,padding:"10px 0"}}>{l}</button>)}</div>
            <span style={sec}>{T("Unités de poids","Weight unit")}</span>
            <div style={{display:"flex",gap:8,marginBottom:4}}>{["kg","lbs"].map(u=><button key={u} onClick={()=>saveSettings({...settings,unit:u})} style={{...pill(settings.unit===u),flex:1,padding:"10px 0"}}>{u}</button>)}</div>
            <span style={sec}>{T("Onglets — ordre & visibilité","Tabs — order & visibility")}</span>
            {(settings.tabOrder||ALL_TABS).map((tabId,idx)=>{
              const hidden=(settings.hiddenTabs||[]).includes(tabId);
              return (
                <div key={tabId} style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"9px 12px",background:hidden?(isDark?"#1a1a1a":C.bg):C.sub,borderRadius:10,marginBottom:6,border:`1px solid ${C.border}`,opacity:hidden?0.5:1}}>
                  <div style={{display:"flex",alignItems:"center",gap:10}}>
                    <span style={{fontSize:16,opacity:hidden?0.4:1}}>{TAB_META[tabId]?.icon}</span>
                    <span style={{fontWeight:600,fontSize:14,color:hidden?C.muted:C.text}}>{TAB_META[tabId]?.[lang]}</span>
                    {hidden&&<span style={{fontSize:10,fontWeight:700,color:C.muted,background:isDark?"#26262f":"#e0e0dc",borderRadius:4,padding:"1px 6px"}}>{T("MASQUÉ","HIDDEN")}</span>}
                  </div>
                  <div style={{display:"flex",gap:6,alignItems:"center"}}>
                    <button onClick={()=>toggleHideTab(tabId)} style={{background:"none",border:`1px solid ${hidden?C.green:C.border}`,borderRadius:6,padding:"4px 10px",fontSize:11,fontWeight:700,color:hidden?C.green:C.muted,cursor:"pointer",fontFamily:"inherit"}}>{hidden?T("Afficher","Show"):T("Masquer","Hide")}</button>
                    {[{d:-1,i:"↑"},{d:1,i:"↓"}].map(({d,i})=>{const dis=(d===-1&&idx===0)||(d===1&&idx===(settings.tabOrder||ALL_TABS).length-1);return <button key={d} onClick={()=>moveTab(idx,d)} disabled={dis} style={{background:"none",border:`1px solid ${C.border}`,borderRadius:6,width:26,height:26,cursor:dis?"default":"pointer",color:dis?C.muted:C.text,fontSize:13,display:"flex",alignItems:"center",justifyContent:"center"}}>{i}</button>;})}
                  </div>
                </div>
              );
            })}
            <span style={sec}>{T("Statistiques globales","Global stats")}</span>
            {(()=>{const g=gs();return(<div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:4}}>{[{l:T("Sessions","Sessions"),v:g.sessions},{l:T("Volume total","Total volume"),v:g.volume>0?`${(g.volume/1000).toFixed(1)}t`:"—"},{l:T("Streak","Streak"),v:`${g.streak}j`},{l:T("Exercices","Exercises"),v:g.exercises}].map(s=>(<div key={s.l} style={{background:C.sub,border:`1px solid ${C.border}`,borderRadius:12,padding:"12px 14px"}}><div style={{fontSize:20,fontWeight:800,color:C.blue}}>{s.v}</div><div style={{fontSize:10,color:C.muted,fontWeight:600,textTransform:"uppercase",letterSpacing:0.5,marginTop:2}}>{s.l}</div></div>))}</div>);})()}
            <span style={sec}>{T("Données","Data")}</span>
            <button onClick={exportData} style={{...btn(C.blue),width:"100%",padding:13,fontSize:14,borderRadius:12,marginBottom:10}}>{T("Exporter mes données (JSON)","Export my data (JSON)")}</button>

            {/* PDF Export */}
            <div style={{background:C.sub,border:`1px solid ${C.border}`,borderRadius:12,padding:"14px 16px",marginBottom:10}}>
              <div style={{fontWeight:700,fontSize:14,marginBottom:4}}>{T("Exporter en PDF","Export as PDF")}</div>
              <div style={{fontSize:12,color:C.muted,marginBottom:12}}>{T("Fichier HTML imprimable, une séance par page","Printable HTML file, one session per page")}</div>
              <div style={{display:"flex",gap:8}}>
                <button onClick={()=>{setSettingsOpen(false);setPdfModal(true);}} style={{flex:1,padding:"10px",background:"none",border:`1.5px solid ${C.blue}`,borderRadius:8,color:C.blue,cursor:"pointer",fontFamily:"inherit",fontWeight:700,fontSize:13}}>
                  {T("Choisir une séance","Choose session")}
                </button>
                <button onClick={()=>{exportAllPDF();setSettingsOpen(false);}} style={{flex:1,...btn(C.blue),padding:"10px",fontSize:13,borderRadius:8}}>
                  {T("Toutes les séances","All sessions")}
                </button>
              </div>
            </div>
            {!resetConfirm?(
              <button onClick={()=>setResetConfirm(true)} style={{width:"100%",padding:13,background:"none",border:`1.5px solid ${C.red}`,borderRadius:12,color:C.red,fontWeight:700,fontSize:14,cursor:"pointer",fontFamily:"inherit"}}>{T("Réinitialiser l'app","Reset app")}</button>
            ):(
              <div style={{background:isDark?"#2a1a1a":"#fff5f5",border:`1.5px solid ${C.red}`,borderRadius:12,padding:16}}>
                <div style={{fontWeight:700,fontSize:14,color:C.red,marginBottom:8}}>{T("Confirmer ?","Confirm reset?")}</div>
                <div style={{fontSize:13,color:C.muted,marginBottom:12}}>{T("Toutes tes données seront supprimées.","All your data will be deleted.")}</div>
                <div style={{display:"flex",gap:8}}>
                  <button onClick={()=>setResetConfirm(false)} style={{flex:1,padding:"10px",background:"none",border:`1px solid ${C.border}`,borderRadius:8,color:C.muted,cursor:"pointer",fontFamily:"inherit",fontWeight:600}}>{T("Annuler","Cancel")}</button>
                  <button onClick={()=>{["ilp-sessions","ilp-library","ilp-programs","ilp-body","ilp-settings"].forEach(k=>localStorage.removeItem(k));setSessions({});setLibrary(DEFAULT_LIBRARY);setPrograms([]);setBodyLog([]);setResetConfirm(false);setSettingsOpen(false);showToast(T("App réinitialisée","App reset"));}} style={{flex:1,padding:"10px",background:C.red,border:"none",borderRadius:8,color:"#fff",cursor:"pointer",fontFamily:"inherit",fontWeight:700}}>{T("Réinitialiser","Reset")}</button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* MODAL add exercise */}
      {addingEx&&(
        <div style={modal}><div style={mbox}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14}}>
            <div style={{fontWeight:800,fontSize:17}}>{T("Ajouter un exercice","Add exercise")}</div>
            <button onClick={()=>setAddingEx(false)} style={{background:"none",border:"none",color:C.muted,fontSize:24,cursor:"pointer"}}>×</button>
          </div>
          <input placeholder={T("Rechercher...","Search...")} value={searchQ} onChange={e=>setSearchQ(e.target.value)} style={{...inp,textAlign:"left",marginBottom:10,padding:"10px 14px"}}/>
          <div style={{display:"flex",gap:6,overflowX:"auto",paddingBottom:10}}>{["Tout",...CATEGORIES].map(c=><button key={c} onClick={()=>setFilterCat(c)} style={pill(filterCat===c)}>{c}</button>)}</div>
          <div style={{marginTop:6}}>
            {filteredLib.map(ex=>{
              const already=session.exercises.some(e=>e.id===ex.id);
              const lastPerf=getLastPerf(ex.id);
              return (
                <div key={ex.id} onClick={()=>!already&&addExToSession(ex)} style={{...card,cursor:already?"default":"pointer",opacity:already?0.5:1,marginBottom:7}}>
                  <div style={{padding:"11px 14px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                    <div>
                      <div style={{display:"flex",alignItems:"center",gap:6}}>
                        <div style={{fontWeight:600,fontSize:14}}>{ex.name}</div>
                        {isHalteres(ex.name)&&<span style={{...tag(C.orange),fontSize:9}}>×2</span>}
                      </div>
                      <div style={{display:"flex",gap:6,marginTop:3}}><span style={tag(TYPE_COLORS[ex.type]||C.blue)}>{TL[ex.type]}</span><span style={tag("#888")}>{ex.category}</span></div>
                      {lastPerf&&<div style={{fontSize:11,color:C.muted,marginTop:3}}>{T("Dernière fois","Last time")} : {lastPerf.sets.filter(s=>s.reps||s.weight).map(s=>`${s.reps||"?"}×${s.weight||"?"}${unit}`).join(", ")}</div>}
                    </div>
                    {already?<span style={{fontSize:11,color:C.green,fontWeight:700}}>{T("Ajouté","Added")}</span>:<span style={{color:C.blue,fontSize:22}}>+</span>}
                  </div>
                </div>
              );
            })}
          </div>
        </div></div>
      )}

      {/* MODAL duplicate */}
      {duplicateModal&&(
        <div style={modal}><div style={mbox}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14}}>
            <div style={{fontWeight:800,fontSize:17}}>{T("Dupliquer une session","Duplicate a session")}</div>
            <button onClick={()=>setDuplicateModal(false)} style={{background:"none",border:"none",color:C.muted,fontSize:24,cursor:"pointer"}}>×</button>
          </div>
          {Object.keys(sessions).filter(d=>sessions[d].exercises?.length>0&&d!==selectedDate).sort((a,b)=>a>b?-1:1).map(d=>(
            <div key={d} onClick={()=>duplicateSession(d)} style={{...card,cursor:"pointer",marginBottom:7}}>
              <div style={{padding:"12px 16px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                <div>
                  <div style={{fontWeight:700,fontSize:14}}>{sessions[d].sessionName||fmtDate(d,lang)}</div>
                  <div style={{fontSize:12,color:C.muted,marginTop:2,textTransform:"capitalize"}}>{sessions[d].sessionName?fmtDate(d,lang):""}</div>
                  <div style={{fontSize:12,color:C.muted,marginTop:1}}>{sessions[d].exercises.map(e=>e.name).join(" · ")}</div>
                </div>
                <div style={{color:C.blue,fontSize:20,fontWeight:700}}>+</div>
              </div>
            </div>
          ))}
          {Object.keys(sessions).filter(d=>sessions[d].exercises?.length>0&&d!==selectedDate).length===0&&<div style={{textAlign:"center",padding:32,color:C.muted,fontSize:13}}>{T("Aucune autre session disponible","No other sessions available")}</div>}
        </div></div>
      )}

      {/* MODAL close session (name input) */}
      {closeModal&&(
        <div style={modal}>
          <div style={{...mbox,maxHeight:"auto"}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16}}>
              <div style={{fontWeight:800,fontSize:17}}>{T("Terminer la séance","Close session")}</div>
              <button onClick={()=>setCloseModal(false)} style={{background:"none",border:"none",color:C.muted,fontSize:24,cursor:"pointer"}}>×</button>
            </div>
            <div style={{fontSize:13,color:C.muted,marginBottom:14}}>{T("Comment appelles-tu cette séance ?","What do you call this session?")}</div>
            <input
              value={closeName}
              onChange={e=>setCloseName(e.target.value)}
              placeholder={T("Ex: Push, Full Body, Dos & Biceps...","Ex: Push, Full Body, Back & Biceps...")}
              style={{...inp,textAlign:"left",padding:"12px 14px",marginBottom:16}}
              onKeyDown={e=>e.key==="Enter"&&closeName.trim()&&finalizeSession(closeName.trim())}
              autoFocus
            />
            <button onClick={()=>closeName.trim()&&finalizeSession(closeName.trim())} style={{...btn(C.green),width:"100%",padding:13,fontSize:15,borderRadius:12,opacity:closeName.trim()?1:0.4}}>
              {T("Terminer","Close")}
            </button>
          </div>
        </div>
      )}

      {/* MODAL create exercise */}
      {creatingEx&&(
        <div style={modal}><div style={mbox}>
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
          <button onClick={()=>{if(!newEx.name.trim())return;const ex={...newEx,id:"c"+Date.now(),name:newEx.name.trim()};saveLibrary([...library,ex]);setCreatingEx(false);setNewEx({name:"",category:"Pectoraux",type:"weight"});showToast(`"${ex.name}" ${T("ajouté","added")}`);}} style={{...btn(C.blue),width:"100%",padding:13,fontSize:15,borderRadius:12}}>{T("Créer l'exercice","Create exercise")}</button>
        </div></div>
      )}

      {/* MODAL create program */}
      {creatingProgram&&(
        <div style={modal}><div style={mbox}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:18}}>
            <div style={{fontWeight:800,fontSize:17}}>{T("Nouveau programme","New program")}</div>
            <button onClick={()=>setCreatingProgram(false)} style={{background:"none",border:"none",color:C.muted,fontSize:24,cursor:"pointer"}}>×</button>
          </div>
          <span style={sec}>{T("Nom","Name")}</span>
          <input placeholder="PPL, Upper/Lower, Full Body…" value={newProg.name} onChange={e=>setNewProg({...newProg,name:e.target.value})} style={{...inp,textAlign:"left",padding:"11px 14px",marginBottom:14}}/>
          <span style={sec}>{T("Couleur","Color")}</span>
          <div style={{display:"flex",gap:10,flexWrap:"wrap",marginBottom:22}}>{PROGRAM_COLORS.map(c=><button key={c} onClick={()=>setNewProg({...newProg,color:c})} style={{width:38,height:38,borderRadius:"50%",background:c,border:newProg.color===c?`3px solid ${C.text}`:"3px solid transparent",cursor:"pointer",outline:"none"}}/>)}</div>
          <button onClick={()=>{if(!newProg.name.trim())return;const prog={id:"p"+Date.now(),name:newProg.name.trim(),color:newProg.color,active:programs.length===0,days:[]};savePrograms([...programs,prog]);setCreatingProgram(false);setNewProg({name:"",color:"#2563eb"});showToast(T("Programme créé !","Program created!"));}} style={{...btn(newProg.color),width:"100%",padding:13,fontSize:15,borderRadius:12}}>{T("Créer le programme","Create program")}</button>
        </div></div>
      )}

      {/* MODAL PDF export */}
      {pdfModal&&(
        <div style={modal}><div style={mbox}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14}}>
            <div style={{fontWeight:800,fontSize:17}}>{T("Exporter une séance","Export a session")}</div>
            <button onClick={()=>setPdfModal(false)} style={{background:"none",border:"none",color:C.muted,fontSize:24,cursor:"pointer"}}>×</button>
          </div>
          <div style={{fontSize:13,color:C.muted,marginBottom:12}}>{T("Sélectionne la séance à exporter","Select the session to export")}</div>
          {Object.entries(sessions).filter(([,s])=>s.closed&&s.exercises?.length>0).sort(([a],[b])=>a>b?-1:1).map(([date,ses])=>(
            <div key={date} onClick={()=>{generateSessionPDF(date,ses);setPdfModal(false);}} style={{...card,cursor:"pointer",marginBottom:7}}>
              <div style={{padding:"12px 16px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                <div>
                  <div style={{fontWeight:700,fontSize:15}}>{ses.sessionName||T("Séance","Session")}</div>
                  <div style={{fontSize:12,color:C.muted,marginTop:2,textTransform:"capitalize"}}>{fmtDate(date,lang)}{ses.duration?` · ${ses.duration}`:""}</div>
                  <div style={{fontSize:12,color:C.muted,marginTop:1}}>{ses.exercises?.length} {T("exercice(s)","exercise(s)")} · {ses.exercises?.reduce((a,e)=>a+calcVolume(e.sets,e.name),0).toLocaleString("fr-FR")} {unit}</div>
                </div>
                <div style={{color:C.blue,fontSize:20}}>↓</div>
              </div>
            </div>
          ))}
          {Object.entries(sessions).filter(([,s])=>s.closed&&s.exercises?.length>0).length===0&&(
            <div style={{textAlign:"center",padding:32,color:C.muted,fontSize:13}}>{T("Aucune séance clôturée à exporter","No closed sessions to export")}</div>
          )}
        </div></div>
      )}

      {/* MODAL edit exercise */}
      {editingEx&&(
        <div style={modal}><div style={mbox}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:18}}>
            <div style={{fontWeight:800,fontSize:17}}>{T("Modifier l'exercice","Edit exercise")}</div>
            <button onClick={()=>setEditingEx(null)} style={{background:"none",border:"none",color:C.muted,fontSize:24,cursor:"pointer"}}>×</button>
          </div>
          <span style={sec}>{T("Nom","Name")}</span>
          <input value={editingEx.name} onChange={e=>setEditingEx({...editingEx,name:e.target.value})} style={{...inp,textAlign:"left",padding:"11px 14px",marginBottom:12}}/>
          <span style={sec}>{T("Catégorie","Category")}</span>
          <select value={editingEx.category} onChange={e=>setEditingEx({...editingEx,category:e.target.value})} style={{...inp,textAlign:"left",padding:"11px 14px",appearance:"auto",marginBottom:12}}>{CATEGORIES.map(c=><option key={c}>{c}</option>)}</select>
          <span style={sec}>{T("Type","Type")}</span>
          <div style={{display:"flex",gap:8,marginBottom:16}}>{Object.entries(TL).map(([k,v])=><button key={k} onClick={()=>setEditingEx({...editingEx,type:k})} style={{...pill(editingEx.type===k),flex:1,padding:"9px 0"}}>{v}</button>)}</div>
          {/* doubleWeight toggle */}
          <div style={{background:C.sub,border:`1px solid ${C.border}`,borderRadius:10,padding:"12px 14px",marginBottom:20}}>
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
              <div>
                <div style={{fontWeight:700,fontSize:13}}>{T("Compter ×2 (haltères bilatéraux)","Count ×2 (bilateral dumbbells)")}</div>
                <div style={{fontSize:11,color:C.muted,marginTop:3}}>{T("Ex: DC haltères = 2 haltères","Ex: DB bench = 2 dumbbells")}</div>
              </div>
              <button onClick={()=>setEditingEx({...editingEx,doubleWeight:!(editingEx.doubleWeight!==undefined?editingEx.doubleWeight:isHalteres(editingEx.name))})}
                style={{width:48,height:26,borderRadius:13,background:(editingEx.doubleWeight!==undefined?editingEx.doubleWeight:isHalteres(editingEx.name))?C.orange:"#ccc",border:"none",cursor:"pointer",position:"relative",transition:"background 0.2s",flexShrink:0}}>
                <div style={{width:20,height:20,borderRadius:"50%",background:"#fff",position:"absolute",top:3,left:(editingEx.doubleWeight!==undefined?editingEx.doubleWeight:isHalteres(editingEx.name))?24:3,transition:"left 0.2s"}}/>
              </button>
            </div>
          </div>
          <button onClick={()=>{
            if(!editingEx.name.trim()) return;
            const dw = editingEx.doubleWeight!==undefined ? editingEx.doubleWeight : isHalteres(editingEx.name);
            saveLibrary(library.map(e=>e.id===editingEx.id?{...editingEx,doubleWeight:dw}:e));
            setEditingEx(null);
            showToast(T("Exercice mis à jour !","Exercise updated!"));
          }} style={{...btn(C.blue),width:"100%",padding:13,fontSize:15,borderRadius:12}}>{T("Enregistrer","Save")}</button>
        </div></div>
      )}

      {/* MODAL plan session */}
      {planModal&&(
        <div style={modal}><div style={{...mbox,maxHeight:"auto"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16}}>
            <div style={{fontWeight:800,fontSize:17}}>{T("À programmer","Plan session")}</div>
            <button onClick={()=>setPlanModal(false)} style={{background:"none",border:"none",color:C.muted,fontSize:24,cursor:"pointer"}}>×</button>
          </div>
          <div style={{fontSize:13,color:C.muted,marginBottom:14,textTransform:"capitalize"}}>{fmtDate(selectedDate,lang)}</div>
          {activeProgram&&(activeProgram.days||[]).length>0&&(
            <div style={{marginBottom:14}}>
              <div style={{fontSize:11,fontWeight:700,color:C.muted,textTransform:"uppercase",letterSpacing:0.5,marginBottom:8}}>{T("Choisir une séance","Choose a session")}</div>
              {activeProgram.days.map((day,di)=>(
                <button key={di} onClick={()=>{updateSession({planned:true,plannedName:day.name});setPlanModal(false);showToast(`${day.name} ${T("programmé !","planned!")}`);}}
                  style={{display:"block",width:"100%",padding:"12px 16px",background:activeProgram.color+"10",border:`1px solid ${activeProgram.color}33`,borderRadius:10,color:activeProgram.color,fontWeight:700,fontSize:15,cursor:"pointer",fontFamily:"inherit",textAlign:"left",marginBottom:8}}>
                  {day.name}
                </button>
              ))}
            </div>
          )}
          <button onClick={()=>{updateSession({planned:true,plannedName:T("Séance","Session")});setPlanModal(false);showToast(T("Séance programmée !","Session planned!"));}}
            style={{width:"100%",padding:12,background:"none",border:`1.5px dashed ${C.border}`,borderRadius:10,color:C.muted,cursor:"pointer",fontSize:13,fontFamily:"inherit",fontWeight:600}}>
            {T("Séance libre programmée","Free session planned")}
          </button>
        </div></div>
      )}

      {toast&&<div style={{position:"fixed",bottom:90,left:"50%",transform:"translateX(-50%)",background:C.text,color:isDark?"#0f0f14":"#fff",padding:"10px 22px",borderRadius:24,fontWeight:700,fontSize:13,zIndex:300,whiteSpace:"nowrap",boxShadow:"0 4px 20px rgba(0,0,0,0.2)"}}>{toast}</div>}

      <div style={{position:"fixed",bottom:0,left:"50%",transform:"translateX(-50%)",width:"100%",maxWidth:480,background:C.card,borderTop:`1px solid ${C.border}`,display:"grid",gridTemplateColumns:`repeat(${visibleTabs.length},1fr)`,paddingBottom:14,zIndex:50}}>
        {visibleTabs.map(tabId=>(
          <button key={tabId} onClick={()=>goTo(tabId)} style={{background:"none",border:"none",cursor:"pointer",padding:"10px 0 0",display:"flex",flexDirection:"column",alignItems:"center",gap:3}}>
            <span style={{fontSize:17,color:(view===tabId||(tabId==="session"&&view==="session-detail"))?C.blue:C.muted,fontWeight:700}}>{TAB_META[tabId]?.icon}</span>
            <span style={{fontSize:9,fontWeight:700,letterSpacing:0.2,color:(view===tabId||(tabId==="session"&&view==="session-detail"))?C.blue:C.muted,fontFamily:"inherit"}}>{TAB_META[tabId]?.[lang]}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function InteractiveChart({ data, color, unit, C, T, metric }) {
  const [activeIdx, setActiveIdx] = useState(null);
  const svgRef = useRef(null);
  const W=320, H=80, PAD=8;
  const vals=data.map(d=>d.value);
  const min=Math.min(...vals), max=Math.max(...vals), range=max-min||1;
  const pts=data.map((d,i)=>{
    const x=PAD+(i/(data.length-1))*(W-PAD*2);
    const y=H-PAD-((d.value-min)/range)*(H-PAD*2);
    return {x,y,d};
  });

  const getIdxFromX = (clientX, rect) => {
    const x = clientX - rect.left;
    const relX = (x / rect.width) * W;
    let closest=0, minDist=Infinity;
    pts.forEach((p,i)=>{ const dist=Math.abs(p.x-relX); if(dist<minDist){minDist=dist;closest=i;} });
    return closest;
  };

  const handleTouch = (e) => {
    e.preventDefault();
    const rect=svgRef.current.getBoundingClientRect();
    const touch=e.touches[0]||e.changedTouches[0];
    setActiveIdx(getIdxFromX(touch.clientX, rect));
  };
  const handleMouse = (e) => {
    const rect=svgRef.current.getBoundingClientRect();
    setActiveIdx(getIdxFromX(e.clientX, rect));
  };

  const active = activeIdx!=null ? pts[activeIdx] : null;

  return (
    <div style={{position:"relative",userSelect:"none"}}>
      {/* Tooltip */}
      <div style={{height:44,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:4}}>
        {active ? (
          <div style={{background:C.card,border:`1px solid ${color}44`,borderRadius:10,padding:"6px 14px",textAlign:"center",boxShadow:`0 2px 12px ${color}22`}}>
            <div style={{fontSize:15,fontWeight:800,color:color}}>{active.d.value.toLocaleString("fr-FR")} {unit}</div>
            <div style={{fontSize:11,color:C.muted,marginTop:1,textTransform:"capitalize"}}>{active.d.label}</div>
            {metric==="pr"&&<div style={{fontSize:10,color:C.muted}}>Vol : {active.d.vol.toLocaleString("fr-FR")} {unit}</div>}
            {metric==="vol"&&<div style={{fontSize:10,color:C.muted}}>PR : {active.d.pr} {unit}</div>}
          </div>
        ) : (
          <div style={{fontSize:12,color:C.muted}}>{T("Glisse pour explorer","Slide to explore")}</div>
        )}
      </div>

      <svg ref={svgRef} width="100%" viewBox={`0 0 ${W} ${H}`}
        style={{overflow:"visible",cursor:"crosshair",display:"block"}}
        onTouchStart={handleTouch} onTouchMove={handleTouch} onTouchEnd={()=>setActiveIdx(null)}
        onMouseMove={handleMouse} onMouseLeave={()=>setActiveIdx(null)}>

        {/* Area fill */}
        <defs>
          <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.15"/>
            <stop offset="100%" stopColor={color} stopOpacity="0"/>
          </linearGradient>
        </defs>
        <path d={`M ${pts.map(p=>`${p.x},${p.y}`).join(" L ")} L ${pts[pts.length-1].x},${H} L ${pts[0].x},${H} Z`} fill="url(#chartGrad)"/>

        {/* Line */}
        <polyline points={pts.map(p=>`${p.x},${p.y}`).join(" ")} fill="none" stroke={color} strokeWidth={2.5} strokeLinejoin="round" strokeLinecap="round"/>

        {/* Cursor line */}
        {active&&<line x1={active.x} y1={PAD-4} x2={active.x} y2={H} stroke={color} strokeWidth={1.5} strokeDasharray="4 3" opacity={0.5}/>}

        {/* Dots */}
        {pts.map((p,i)=>(
          <circle key={i} cx={p.x} cy={p.y} r={activeIdx===i?6:3.5}
            fill={activeIdx===i?color:C.card} stroke={color} strokeWidth={activeIdx===i?2.5:2}
            style={{transition:"r 0.15s ease"}}/>
        ))}
      </svg>
    </div>
  );
}

function ExStats({ ex, pts, onBack, C, pill, tag, unit, lang, T, TL, fmtShort, sessions }) {
  const [metric,setMetric]=useState("pr");
  const [showAllPR,setShowAllPR]=useState(false);
  const TC={weight:"#2563eb",bodyweight:"#059669",cardio:"#dc2626"};

  // ── 3 types of PR ──
  // Collect all individual sets across all sessions
  const allSets = [];
  Object.entries(sessions||{}).sort(([a],[b])=>a>b?1:-1).forEach(([date,s])=>{
    s.exercises?.forEach(e=>{
      if(e.id===ex.id){
        e.sets?.forEach(set=>{
          const r=parseFloat(set.reps)||0;
          const w=parseFloat(set.weight)||0;
          if(r>0||w>0) allSets.push({date,reps:r,weight:w,vol:r*w});
        });
      }
    });
  });

  // PR Poids = série avec le poids le plus lourd (si égalité → plus de reps)
  const prWeight = allSets.length>0 ? allSets.reduce((best,s)=>{
    if(s.weight>best.weight) return s;
    if(s.weight===best.weight&&s.reps>best.reps) return s;
    return best;
  }, allSets[0]) : null;
  // PR Volume/série = max reps*weight
  const prVolSerie = allSets.length>0 ? allSets.reduce((best,s)=>s.vol>best.vol?s:best,allSets[0]) : null;
  // PR Reps = max reps (si égalité → plus grand poids)
  const prReps = allSets.length>0 ? allSets.reduce((best,s)=>{
    if(s.reps>best.reps) return s;
    if(s.reps===best.reps&&s.weight>best.weight) return s;
    return best;
  }, allSets[0]) : null;

  const pr=pts.length>0?Math.max(...pts.map(p=>p.pr)):0;
  const prHistory=[];let runningPR=0;
  pts.forEach(p=>{if(p.pr>runningPR){runningPR=p.pr;prHistory.push({date:p.date,pr:p.pr,prev:prHistory.length>0?prHistory[prHistory.length-1].pr:0});}});
  const displayPR=showAllPR?[...prHistory].reverse():[...prHistory].reverse().slice(0,5);

  return (
    <div>
      <button onClick={onBack} style={{background:"none",border:"none",color:C.blue,fontWeight:700,fontSize:14,cursor:"pointer",marginBottom:14,padding:0,fontFamily:"inherit"}}>← {T("Retour","Back")}</button>
      <div style={{fontWeight:800,fontSize:20,marginBottom:4}}>{ex.name}</div>
      <div style={{display:"flex",gap:6,marginBottom:16}}><span style={tag(TC[ex.type]||C.blue)}>{TL[ex.type]}</span><span style={tag("#888")}>{ex.category}</span></div>

      {/* 3 PR cards */}
      <div style={{marginBottom:14}}>
        <div style={{fontSize:11,fontWeight:700,color:C.muted,textTransform:"uppercase",letterSpacing:0.5,marginBottom:8}}>{T("Records personnels","Personal records")}</div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8,marginBottom:8}}>
          <div style={{background:C.card,border:`2px solid ${C.blue}33`,borderRadius:12,padding:"12px 10px",textAlign:"center"}}>
            <div style={{fontSize:10,fontWeight:700,color:C.blue,textTransform:"uppercase",letterSpacing:0.5,marginBottom:4}}>{T("Poids max","Max weight")}</div>
            <div style={{fontSize:16,fontWeight:800,color:C.text}}>{prWeight?`${prWeight.weight} ${unit}`:"—"}</div>
            {prWeight&&<div style={{fontSize:10,color:C.muted,marginTop:2}}>×{prWeight.reps} reps</div>}
          </div>
          <div style={{background:C.card,border:`2px solid ${C.green}33`,borderRadius:12,padding:"12px 10px",textAlign:"center"}}>
            <div style={{fontSize:10,fontWeight:700,color:C.green,textTransform:"uppercase",letterSpacing:0.5,marginBottom:4}}>{T("Vol/série","Vol/set")}</div>
            <div style={{fontSize:16,fontWeight:800,color:C.text}}>{prVolSerie?`${prVolSerie.vol.toLocaleString("fr-FR")} ${unit}`:"—"}</div>
            {prVolSerie&&<div style={{fontSize:10,color:C.muted,marginTop:2}}>{prVolSerie.reps}×{prVolSerie.weight}{unit}</div>}
          </div>
          <div style={{background:C.card,border:`2px solid ${C.orange}33`,borderRadius:12,padding:"12px 10px",textAlign:"center"}}>
            <div style={{fontSize:10,fontWeight:700,color:C.orange,textTransform:"uppercase",letterSpacing:0.5,marginBottom:4}}>{T("Max reps","Max reps")}</div>
            <div style={{fontSize:16,fontWeight:800,color:C.text}}>{prReps?`${prReps.reps} reps`:"—"}</div>
            {prReps&&<div style={{fontSize:10,color:C.muted,marginTop:2}}>{prReps.weight?`@ ${prReps.weight} ${unit}`:""}</div>}
          </div>
        </div>
      </div>

      {/* General stats */}
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:14}}>
        {[{l:T("Sessions","Sessions"),v:pts.length,c:C.text},{l:T("Records poids","Weight PRs"),v:prHistory.length,c:C.orange}].map(k=>(
          <div key={k.l} style={{background:C.card,border:`1px solid ${C.border}`,borderRadius:12,padding:"12px 14px"}}>
            <div style={{fontSize:20,fontWeight:800,color:k.c}}>{k.v}</div>
            <div style={{fontSize:10,color:C.muted,fontWeight:600,textTransform:"uppercase",letterSpacing:0.5,marginTop:2}}>{k.l}</div>
          </div>
        ))}
      </div>

      {/* Interactive Chart */}
      <div style={{background:C.card,border:`1px solid ${C.border}`,borderRadius:14,padding:"16px",marginBottom:14}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}>
          <div style={{fontWeight:700,fontSize:14}}>{T("Progression","Progress")}</div>
          <div style={{display:"flex",gap:6}}>{[{k:"pr",l:"PR"},{k:"vol",l:T("Volume","Volume")}].map(({k,l})=><button key={k} onClick={()=>setMetric(k)} style={pill(metric===k)}>{l}</button>)}</div>
        </div>
        {pts.length>=2
          ? <InteractiveChart
              data={pts.map(p=>({value:metric==="pr"?p.pr:p.vol, label:fmtShort(p.date,lang), pr:p.pr, vol:p.vol}))}
              color={metric==="pr"?C.blue:C.green}
              unit={unit}
              C={C}
              T={T}
              metric={metric}
            />
          : <div style={{color:C.muted,fontSize:13}}>{T("Pas assez de données (min. 2 sessions)","Not enough data (min. 2 sessions)")}</div>
        }
      </div>

      {/* PR timeline */}
      <div style={{background:C.card,border:`1px solid ${C.border}`,borderRadius:14,padding:"16px"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14}}>
          <div style={{fontWeight:700,fontSize:14}}>{T("Timeline records poids","Weight PR timeline")}</div>
          <span style={{...tag(C.orange),fontSize:11}}>{prHistory.length} PR</span>
        </div>
        {prHistory.length===0&&<div style={{color:C.muted,fontSize:13,textAlign:"center",padding:"12px 0"}}>{T("Aucun record","No PRs yet")}</div>}
        {displayPR.map((p,i)=>{
          const isLatest=i===0&&p.pr===pr;const gain=p.prev>0?(p.pr-p.prev).toFixed(1):null;
          return (
            <div key={p.date} style={{display:"flex",alignItems:"center",gap:12,padding:"10px 0",borderBottom:i<displayPR.length-1?`1px solid ${C.border}`:"none"}}>
              <div style={{width:12,height:12,borderRadius:"50%",background:isLatest?C.orange:C.blue,flexShrink:0,boxShadow:isLatest?`0 0 8px ${C.orange}44`:"none"}}/>
              <div style={{flex:1}}>
                <div style={{display:"flex",alignItems:"center",gap:8}}>
                  <span style={{fontWeight:800,fontSize:16,color:C.text}}>{p.pr} {unit}</span>
                  {gain&&<span style={{fontSize:12,fontWeight:700,color:C.green,background:C.green+"18",padding:"2px 8px",borderRadius:20}}>+{gain} {unit}</span>}
                  {isLatest&&<span style={{fontSize:10,fontWeight:700,color:C.orange,background:C.orange+"18",padding:"2px 8px",borderRadius:20}}>{T("RECORD","BEST")}</span>}
                </div>
                <div style={{fontSize:12,color:C.muted,marginTop:2,textTransform:"capitalize"}}>{fmtShort(p.date,lang)}</div>
              </div>
            </div>
          );
        })}
        {prHistory.length>5&&<button onClick={()=>setShowAllPR(!showAllPR)} style={{width:"100%",marginTop:10,padding:"8px",background:"none",border:`1px solid ${C.border}`,borderRadius:8,color:C.blue,cursor:"pointer",fontSize:13,fontFamily:"inherit",fontWeight:700}}>{showAllPR?T("Voir moins","Show less"):T(`Voir tous les ${prHistory.length} records`,`See all ${prHistory.length} PRs`)}</button>}
      </div>
    </div>
  );
}
