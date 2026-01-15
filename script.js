/* =========================================
   1. APPLICATION STATE (Data loaded from database.js)
   ========================================= */

let state = { 
    currentBender: benderLibrary[0], 
    activeCalc: null, 
    filter: 'all',
    format: 'feet',
    tapeFormat: 'tape',
    lang: 'en',
    fillConfig: { type: 'EMT', size: '3/4' },
    wireList: [{qty:3, type:'THHN', size:'12'}],
    history: [],
    favorites: [],
    maxHistory: 5,
    showMath: false,
    quizMode: false,
    deviceType: detectDevice(),
    osType: detectOS()
};

const materialProfiles = {
    EMT:   { name: 'EMT', dedAdj: 0,    gainAdj: 0,   minSpacing: 4 },
    Rigid: { name: 'Rigid', dedAdj: 1,  gainAdj: 0.3, minSpacing: 5 },
    PVC:   { name: 'PVC', dedAdj: -1,   gainAdj: -0.2,minSpacing: 4 },
    Flex:  { name: 'Flex', dedAdj: -2,  gainAdj: -1,  minSpacing: 3 }
}; // legacy; no user selection

const langMap = {
    en: {
        shrink: 'SHRINK',
        cut: 'CUT LENGTH',
        warnings: 'WARNINGS',
        spacingTight: 'Bends are too close together; add more spacing.',
        cutShort: 'Cut length may be too short for the last mark.',
        markOrder: 'Mark order is not increasing; check distances.',
        negativeMark: 'A mark is negative; recheck inputs.',
        material: 'Material'
    },
    es: {
        shrink: 'ACORTAMIENTO',
        cut: 'LONGITUD DE CORTE',
        warnings: 'ALERTAS',
        spacingTight: 'Las curvas estan muy juntas; deja mas espacio.',
        cutShort: 'La longitud de corte puede ser insuficiente para la ultima marca.',
        markOrder: 'El orden de las marcas no es ascendente; verifica distancias.',
        negativeMark: 'Hay una marca negativa; revisa los datos.',
        material: 'Material'
    }
};

const uiText = {
    en: {
        toolbox: 'TOOLBOX',
        nav_dashboard: 'Dashboard',
        nav_calc: 'CALCULATORS',
        nav_fill: 'Conduit Fill',
        nav_converter: 'Unit Converter',
        nav_essential: 'ESSENTIAL BENDS',
        nav_offset: 'Standard Offset',
        nav_stub: 'Stub Up',
        nav_saddle3: '3-Point Saddle',
        nav_saddle4: '4-Point Saddle',
        nav_kick: 'Kick',
        nav_advanced: 'ADVANCED OFFSETS',
        nav_rolling: 'Rolling Offset',
        nav_parallel: 'Parallel Offset',
        nav_compound: 'Compound Offset',
        nav_shallow: 'Shallow Offset',
        nav_deep: 'Deep Offset',
        nav_zbend: 'Z-Bend',
        nav_offkick: 'Offset with Kick',
        nav_combos: 'COMBINATIONS',
        nav_b2b: 'Back-to-Back 90s',
        nav_stubkick: 'Stub-Up with Kick',
        nav_rollstub: 'Rolling Stub-Up',
        nav_off90: 'Offset into 90',
        nav_90off: '90 with Offset',
        nav_roll90: 'Rolling 90',
        nav_sadoff: 'Saddle into Offset',
        nav_offsad: 'Offset into Saddle',
        nav_fieldref: 'FIELD REFERENCE',
        nav_cheats: 'Offset Constants',
        nav_tips_off: 'Offset Tips',
        nav_tips_sad: 'Saddle Tips',
        nav_tips_fill: 'Fill Calculator Tips',
        nav_tips_field: 'Field Best Practices',
        nav_nec: 'NEC Support & Spacing',
        nav_drill: 'KO & Hole Saw Sizes',
        nav_specs: 'Pipe Dimensions',
        nav_math: 'Bending Math (Classroom)',
        nav_tape: 'How to Read a Tape',
        nav_terms: 'Trade Terms & Slang',
        nav_troubleshoot: 'TROUBLESHOOT',
        header_select: 'Select a Bend',
        btn_reset: 'Reset',
        settings_title: 'Settings',
        settings_format: 'MEASUREMENT FORMAT',
        format_feet: 'Feet & Inches',
        format_inches: 'Inches Only',
        format_metric: 'Metric',
        lang_label: 'LANGUAGE',
        lang_english: 'English',
        lang_spanish: 'Spanish',
        pref_title: 'PREFERENCES',
        show_math_title: 'Show Math & Formulas',
        show_math_desc: 'Display calculation steps',
        quiz_title: 'Quiz Mode',
        quiz_desc: 'Hide answers for training',
        about_title: 'About',
        guide_title: 'How-To Guide',
        modal_benders_title: 'Select Equipment',
        modal_custom_title: 'Custom Bender',
        btn_calc: 'Calculate',
        empty_state: 'Select a tool from the menu to start bending.',
        fab_guide: 'FABRICATION GUIDE',
        cb_brand: 'Brand / Name',
        cb_brand_ph: 'e.g. My Chicago Bender',
        cb_model: 'Model / Type',
        cb_model_ph: 'e.g. Hand Bender',
        cb_size: 'Conduit Size',
        cb_deduct: 'Deduct (in)',
        cb_gain: 'Gain (in)',
        cb_save: 'SAVE BENDER',
        quiz_desc: 'Hide answers until revealed',
        actions_label: 'ACTIONS',
        export_calc: 'Export Calculation',
        export_calc_desc: 'Save results to file',
        app_name: 'VoltBend Pro',
        app_desc: 'The ultimate field companion for professional conduit bending.',
        engineered_by: 'Engineered by',
        version: 'Version',
        table_angle: 'Angle',
        table_constant: 'Constant',
        table_shrink: 'Shrink/In',
        table_note: '* Shrink per inch of offset depth.',
        filter_all: 'ALL',
        filter_fav: 'FAVORITES',
        filter_hand: 'HAND',
        filter_electric: 'ELECTRIC'
    },
    es: {
        toolbox: 'CAJA DE HERRAMIENTAS',
        nav_dashboard: 'Tablero',
        nav_calc: 'CALCULADORAS',
        nav_fill: 'Llenado de Conduit',
        nav_converter: 'Conversor de Unidades',
        nav_essential: 'DOBLADOS ESENCIALES',
        nav_offset: 'Offset Estandar',
        nav_stub: 'Stub Up',
        nav_saddle3: 'Silla de 3 puntos',
        nav_saddle4: 'Silla de 4 puntos',
        nav_kick: 'Kick',
        nav_advanced: 'OFFSETS AVANZADOS',
        nav_rolling: 'Offset en Rollo',
        nav_parallel: 'Offset Paralelo',
        nav_compound: 'Offset Compuesto',
        nav_shallow: 'Offset Superficial',
        nav_deep: 'Offset Profundo',
        nav_zbend: 'Doble Z',
        nav_offkick: 'Offset con Kick',
        nav_combos: 'COMBINACIONES',
        nav_b2b: '90s Espalda con Espalda',
        nav_stubkick: 'Stub-Up con Kick',
        nav_rollstub: 'Stub en Rollo',
        nav_off90: 'Offset a 90',
        nav_90off: '90 con Offset',
        nav_roll90: '90 en Rollo',
        nav_sadoff: 'Silla a Offset',
        nav_offsad: 'Offset a Silla',
        nav_fieldref: 'REFERENCIA DE CAMPO',
        nav_cheats: 'Constantes de Offset',
        nav_tips_off: 'Consejos de Offset',
        nav_tips_sad: 'Consejos de Silla',
        nav_tips_fill: 'Consejos de Llenado',
        nav_tips_field: 'Buenas Practicas',
        nav_nec: 'Soporte y Espaciado NEC',
        nav_drill: 'Tamanos de KO y Sierra',
        nav_specs: 'Dimensiones de Conduit',
        nav_math: 'Matematicas de Doblado',
        nav_tape: 'Como leer una cinta',
        nav_terms: 'Terminos y Jerga',
        nav_troubleshoot: 'SOLUCIONAR',
        header_select: 'Selecciona un doblez',
        btn_reset: 'Reiniciar',
        settings_title: 'Configuracion',
        settings_format: 'FORMATO DE MEDICION',
        format_feet: 'Pies y Pulgadas',
        format_inches: 'Solo Pulgadas',
        format_metric: 'Metrico',
        lang_label: 'IDIOMA',
        lang_english: 'Ingles',
        lang_spanish: 'Espanol',
        pref_title: 'PREFERENCIAS',
        show_math_title: 'Mostrar matematicas',
        show_math_desc: 'Ver pasos de calculo',
        quiz_title: 'Modo Quiz',
        quiz_desc: 'Oculta respuestas para practicar',
        about_title: 'Acerca de',
        guide_title: 'Guia',
        modal_benders_title: 'Seleccionar Herramienta',
        modal_custom_title: 'Bender Personalizado',
        btn_calc: 'Calcular',
        empty_state: 'Selecciona una herramienta del menu para comenzar.',
        fab_guide: 'GUIA DE FABRICACION',
        cb_brand: 'Marca / Nombre',
        cb_brand_ph: 'ej. Mi Doblador Chicago',
        cb_model: 'Modelo / Tipo',
        cb_model_ph: 'ej. Doblador Manual',
        cb_size: 'Tamano de Conduit',
        cb_deduct: 'Deduccion (pulg)',
        cb_gain: 'Ganancia (pulg)',
        cb_save: 'GUARDAR DOBLADOR',
        quiz_desc: 'Oculta respuestas para practicar',
        actions_label: 'ACCIONES',
        export_calc: 'Exportar Calculo',
        export_calc_desc: 'Guardar resultados en archivo',
        app_name: 'VoltBend Pro',
        app_desc: 'El companero definitivo para el doblado profesional de conduit.',
        engineered_by: 'Disenado por',
        version: 'Version',
        table_angle: 'Angulo',
        table_constant: 'Constante',
        table_shrink: 'Acortamiento/Pulg',
        table_note: '* Acortamiento por pulgada de profundidad del offset.',
        filter_all: 'TODOS',
        filter_fav: 'FAVORITOS',
        filter_hand: 'MANUAL',
        filter_electric: 'ELECTRICO'
    }
};

const inlineTranslations = {
    es: {
        'Bend Angle': 'Angulo de doblez',
        'Stub Height': 'Altura del stub',
        'Length (Outside-to-Outside)': 'Longitud (exterior a exterior)',
        'Back Length': 'Longitud posterior',
        'Kick Height': 'Altura del kick',
        'Rise Height': 'Altura de subida',
        'Roll Distance': 'Distancia de rollo',
        'Rise (Obstacle Height)': 'Altura del obstaculo',
        'Distance to Obstacle': 'Distancia al obstaculo',
        'Rise (Up)': 'Subida',
        'Roll (Over)': 'Rollo',
        'Length to Turn': 'Longitud para girar',
        'Offset 1 Rise': 'Offset 1 Altura',
        'Center-to-Center Spacing': 'Espaciado centro a centro',
        'Offset Rise': 'Altura de offset',
        'Kick Rise': 'Altura de kick',
        'Obstacle Height': 'Altura del obstaculo',
        'Distance to Center': 'Distancia al centro',
        'Obstacle Width': 'Ancho del obstaculo',
        'Distance to Start': 'Distancia al inicio',
        'Saddle Height': 'Altura de la silla',
        'Rise': 'Altura',
        'Roll': 'Rollo',
        'How to Bend': 'Como doblar',
        'HOW TO BEND': 'COMO DOBLAR',
        'RANDOM QUIZ': 'QUIZ ALEATORIO',
        'Install': 'Instalar',
        'Settings': 'Configuracion',
        'Conduit Type': 'Tipo de conduit',
        'Wires (Qty | Size | Type)': 'Cables (Cant | Tamano | Tipo)',
        'Add Wire Group': 'Agregar grupo de cables',
        'Place pipe on flat floor. Rotate until flat. Mark top center.': 'Coloque el tubo en el piso. Gire hasta que este plano. Marque el centro superior.',
        'Mark 1': 'Marca 1',
        'Star Mark': 'Marca estrella',
        'Notch Mark': 'Marca de muesca',
        'Shrink': 'Acortamiento',
        'Travel': 'Recorrido',
        'Mark 1 (Far)': 'Marca 1 (Lejos)',
        'Mark 2 (Near)': 'Marca 2 (Cerca)',
        'True Rise': 'Subida real',
        'True Roll': 'Rollo real',
        'True Offset': 'Offset real',
        'Rise Angle': 'Angulo de subida',
        'Total Shrink': 'Acortamiento total',
        'Start Adjust': 'Ajuste de inicio',
        'Shrink (per side)': 'Acortamiento (por lado)',
        'Center Mark': 'Marca central',
        'Distance (left/right)': 'Distancia (izq/der)',
        'M1 (Start Rear)': 'M1 (Inicio trasero)',
        'M2 (Start Front)': 'M2 (Inicio frontal)',
        'M3 (End Front)': 'M3 (Final frontal)',
        'M4 (End Rear)': 'M4 (Final trasero)',
        '90 Mark': 'Marca 90',
        'Kick Travel': 'Recorrido de kick',
        'Kick Shrink': 'Acortamiento de kick',
        'Kick Mark': 'Marca de kick',
        'Offset Shrink': 'Acortamiento de offset',
        'Offset Travel': 'Recorrido de offset',
        'Mark 1 (Offset Start)': 'Marca 1 (Inicio offset)',
        'Mark 2 (Offset End)': 'Marca 2 (Final offset)',
        'Mark 3 (90° Bend)': 'Marca 3 (Doblez 90°)',
        'True Hypotenuse': 'Hipotenusa real',
        'Roll Angle': 'Angulo de rollo',
        '90° Mark': 'Marca 90°',
        'Saddle Shrink': 'Acortamiento de silla',
        'Offset Start': 'Inicio de offset',
        'Offset End': 'Final de offset',
        'Saddle Center': 'Centro de silla',
        'Distance to Saddle': 'Distancia a la silla',
        '(Tiny Kick)': '(Kick pequeno)',
        '(Precision)': '(Precision)',
        '(Small Kick)': '(Kick pequeno)',
        '(Saddle)': '(Silla)',
        '(Standard)': '(Estandar)',
        '(Box Offset)': '(Offset de caja)',
        '(Tight)': '(Ajustado)',
        'HOOK': 'GANCHO',
        'STAR': 'ESTRELLA',
        'NOTCH': 'MUESCA',
        'START': 'INICIO',
        'END': 'FIN',
        'RISE': 'SUBIDA',
        'ROLL': 'ROLLO',
        'SIDE': 'LADO',
        'CENTER': 'CENTRO',
        'M1': 'M1',
        'M2': 'M2',
        'M3': 'M3',
        'M4': 'M4',
        '90': '90',
        'KICK': 'KICK',
        'OFF 1': 'OFF 1',
        'OFF 2': 'OFF 2',
        'SADDLE': 'SILLA',
        'OFF-1': 'OFF-1',
        'OFF-2': 'OFF-2',
        'MARK': 'MARCA',
        'B1': 'D1',
        'B2': 'D2',
        'B3': 'D3'
    }
};

// Translatable alerts
const alerts = {
    en: {
        'noMeasurement': 'Please enter at least one measurement',
        'invalidDeductGain': 'Please enter valid numbers for Deduct and Gain',
        'noHistory': 'No calculation history yet'
    },
    es: {
        'noMeasurement': 'Por favor ingrese al menos una medida',
        'invalidDeductGain': 'Por favor ingrese numeros validos para Deduccion y Ganancia',
        'noHistory': 'No hay historial de calculos aun'
    }
};

function showAlert(key) {
    const msg = (alerts[state.lang] && alerts[state.lang][key]) || alerts.en[key] || key;
    alert(msg);
}

/* OS & DEVICE DETECTION */
function detectOS() {
    const ua = navigator.userAgent.toLowerCase();
    if (ua.includes('windows')) return 'windows';
    if (ua.includes('iphone') || ua.includes('ipad') || ua.includes('macintosh')) return 'ios';
    if (ua.includes('android')) return 'android';
    return 'other';
}

function detectDevice() {
    const ua = navigator.userAgent.toLowerCase();
    if (/mobile|android|iphone|ipod|phone/i.test(ua)) return 'mobile';
    if (/tablet|ipad/i.test(ua)) return 'tablet';
    return 'desktop';
}

function getOSName() {
    const os = state.osType;
    if (os === 'windows') return 'Windows';
    if (os === 'ios') return 'iOS/macOS';
    if (os === 'android') return 'Android';
    return 'Unknown';
}

// Easter egg: 5 quick taps on the VoltBend title triggers a glitchy surge mode
const voltEgg = { taps: 0, timer: null, active: false };

function setupVoltEasterEgg() {
    const logo = document.querySelector('.app-logo');
    const overlay = document.getElementById('glitch-overlay');
    if (!logo || !overlay) return;

    const resetCounter = () => {
        voltEgg.taps = 0;
        if (voltEgg.timer) {
            clearTimeout(voltEgg.timer);
            voltEgg.timer = null;
        }
    };

    const handleTap = () => {
        if (voltEgg.active) return;
        voltEgg.taps += 1;
        if (voltEgg.timer) clearTimeout(voltEgg.timer);
        voltEgg.timer = setTimeout(resetCounter, 3500);
        if (voltEgg.taps >= 5) {
            resetCounter();
            triggerVoltGlitch(overlay);
        }
    };

    ['click', 'touchend'].forEach(evt => logo.addEventListener(evt, handleTap, { passive: true }));
}

function triggerVoltGlitch(overlayEl) {
    voltEgg.active = true;
    document.body.classList.add('glitch-mode');
    overlayEl.classList.remove('hidden');
    overlayEl.classList.add('glitch-on');

    try {
        if (navigator.vibrate) navigator.vibrate([140, 80, 140, 120, 220, 80, 90, 60, 240]);
    } catch (err) {
        // vibration best-effort only
    }

    setTimeout(() => {
        document.body.classList.remove('glitch-mode');
        overlayEl.classList.add('hidden');
        overlayEl.classList.remove('glitch-on');
        voltEgg.active = false;
    }, 10000);
}

/* =========================================
   2. INITIALIZATION
   ========================================= */
document.addEventListener('DOMContentLoaded', () => {
    // Load custom benders
    const savedCustomBenders = localStorage.getItem('qc_custom_benders');
    if (savedCustomBenders) {
        const customs = JSON.parse(savedCustomBenders);
        customs.forEach(c => {
            if (!benderLibrary.find(b => b.id === c.id)) benderLibrary.push(c);
        });
    }

    // Load saved settings
    const saved = localStorage.getItem('qc_bender_id');
    if (saved) {
        const found = benderLibrary.find(b => b.id === saved);
        if (found) state.currentBender = found;
    }
    const savedFmt = localStorage.getItem('qc_format');
    if (savedFmt) state.format = savedFmt;
    const savedTapeFmt = localStorage.getItem('qc_tape_format');
    if (savedTapeFmt) state.tapeFormat = savedTapeFmt;
    const savedLang = localStorage.getItem('qc_lang');
    if (savedLang) state.lang = savedLang;
    
    // Load favorites
    const savedFavorites = localStorage.getItem('qc_favorites');
    if (savedFavorites) state.favorites = JSON.parse(savedFavorites);

    const savedMath = localStorage.getItem('qc_show_math');
    if (savedMath) state.showMath = JSON.parse(savedMath);

    const savedQuiz = localStorage.getItem('qc_quiz_mode');
    if (savedQuiz) state.quizMode = JSON.parse(savedQuiz);

    updateHeaderDisplay();
    applyLanguage();
    registerServiceWorker();
    setupInstallPrompt();
    setupVoltEasterEgg();

    // LOAD HOME DASHBOARD
    if (typeof loadHome === 'function') {
        loadHome();
    }

    // Close bender modal with Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeBenderLibrary();
        }
    });
});

/* =========================================
   3. NAVIGATION
   ========================================= */
function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('open');
    document.getElementById('overlay').classList.toggle('visible');
}

function loadCalc(type) {
    // Handle Home Dashboard
    if (type === 'home') {
        document.getElementById('calc-title').innerText = state.lang === 'es' ? 'Tablero' : 'Dashboard';
        let html = homeHTML;
        if (state.lang === 'es') {
            html = html.replaceAll('OFFSET CONSTANTS', 'CONSTANTES DE OFFSET')
                       .replaceAll('Angle', 'Ángulo')
                       .replaceAll('Mult', 'Multiplicador')
                       .replaceAll('Shrink/In', 'Acortamiento/pulg')
                       .replaceAll('STANDARD DEDUCTS', 'DEDUCCIONES ESTÁNDAR')
                       .replaceAll('Size (EMT)', 'Tamaño (EMT)')
                       .replaceAll('Deduct', 'Deducción')
                       .replaceAll('KNOCKOUT SIZES', 'TAMAÑOS DE KO')
                       .replaceAll('Trade Size', 'Tamaño comercial')
                       .replaceAll('Hole Saw', 'Sierra')
                       .replaceAll('NEC QUICK REF', 'REFERENCIA RÁPIDA NEC')
                       .replaceAll('Max Support', 'Soporte máximo')
                       .replaceAll('Dist from Box', 'Distancia desde caja')
                       .replaceAll('Max Bends', 'Dobles máx')
                       .replaceAll('Wire Fill (2+)', 'Llenado de conductores (2+)')
                       .replaceAll('Wire Fill (1)', 'Llenado de conductor (1)')
                       .replaceAll('Grounding', 'Puesta a tierra')
                       .replaceAll('DECIMALS', 'DECIMALES');
        }
        document.getElementById('calc-inputs').innerHTML = html;
        document.getElementById('result-box').classList.add('hidden');
        document.getElementById('calc-btn').classList.add('hidden');
        document.getElementById('sidebar').classList.remove('open');
        document.getElementById('overlay').classList.remove('visible');
        return;
    }

    // Handle Unit Converter
    if (type === 'converter') {
        document.getElementById('calc-title').innerText = state.lang === 'es' ? 'Conversor de Unidades' : 'Unit Converter';
        renderConverter();
        document.getElementById('result-box').classList.add('hidden');
        document.getElementById('calc-btn').classList.add('hidden');
        document.getElementById('sidebar').classList.remove('open');
        document.getElementById('overlay').classList.remove('visible');
        return;
    }

    state.activeCalc = type;
    const titles = {
        'stub': 'Stub Up', 'back2back': 'Back-to-Back 90s', 'backbend': 'Back Bend', 'kick': 'Kick', 
        'stub_kick': 'Stub-Up with Kick', 'rolling_stub': 'Rolling Stub', 'offset': 'Standard Offset',
        'shallow_off': 'Shallow Offset', 'deep_off': 'Deep Offset', 'rolling': 'Rolling Offset',
        'compound_off': 'Compound Offset', 'parallel': 'Parallel Offset', 'zbend': 'Z-Bend',
        'off_kick': 'Offset with Kick', 'saddle3': '3-Point Saddle', 'saddle4': '4-Point Saddle',
        'sad_off': 'Saddle into Offset', 'off_sad': 'Offset into Saddle', 'off_90': 'Offset into 90',
        '90_off': '90 with Offset', 'roll_90': 'Rolling 90', 'comp_bend': 'Compound Bend',
        'fill': 'Conduit Fill Calculator'
    };
    const titlesEs = {
         stub: 'Stub Up', back2back: '90s espalda con espalda', backbend: 'Doble posterior', kick: 'Kick',
         stub_kick: 'Stub-Up con Kick', rolling_stub: 'Stub en rollo', offset: 'Offset estandar',
         shallow_off: 'Offset superficial', deep_off: 'Offset profundo', rolling: 'Offset en rollo',
         compound_off: 'Offset compuesto', parallel: 'Offset paralelo', zbend: 'Doble Z',
         off_kick: 'Offset con Kick', saddle3: 'Silla de 3 puntos', saddle4: 'Silla de 4 puntos',
         sad_off: 'Silla a offset', off_sad: 'Offset a silla', off_90: 'Offset a 90',
         '90_off': '90 con offset', roll_90: '90 en rollo', comp_bend: 'Doble compuesto',
         fill: 'Calculadora de llenado'
     };
    
    const useTitles = state.lang === 'es' ? titlesEs : titles;
    document.getElementById('calc-title').innerText = useTitles[type] || (state.lang === 'es' ? 'Calculadora' : 'Calculator');
    document.getElementById('calc-btn').classList.remove('hidden');
    renderInputs(type);
    document.getElementById('result-box').classList.add('hidden');
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('overlay').classList.remove('visible');
}

/* =========================================
   4. INPUT BUILDER (WITH "HOW TO" BUTTON)
   ========================================= */
function renderInputs(type) {
    const div = document.getElementById('calc-inputs');
    
    // 1. INJECT "HOW TO" BUTTON
    let h = '';
    if(type !== 'fill') {
        h += `<div style="display:flex; justify-content:flex-end; gap:10px; margin-bottom:10px;">`;
        
        if (state.quizMode) {
            h += `<button onclick="generateRandomQuiz()" style="background:rgba(156, 39, 176, 0.1); border:1px solid #AB47BC; color:#AB47BC; padding:5px 10px; border-radius:15px; font-size:0.75rem; font-weight:bold; cursor:pointer; display:flex; align-items:center; gap:5px;">
                <ion-icon name="dice-outline"></ion-icon> RANDOM QUIZ
            </button>`;
        }

        h += `<button onclick="openGuide('${type}')" style="background:none; border:1px solid var(--primary); color:var(--primary); padding:5px 10px; border-radius:15px; font-size:0.75rem; font-weight:bold; cursor:pointer; display:flex; align-items:center; gap:5px;">
                <ion-icon name="school"></ion-icon> HOW TO BEND
            </button>
        </div>`;
    }
    
    // 2. DEFINE COMMON INPUTS
    const ang = `
        <label>Bend Angle</label>
        <select id="i_ang">
            <option value="5">5° (Tiny Kick)</option>
            <option value="10">10° (Precision)</option>
            <option value="15">15° (Small Kick)</option>
            <option value="22.5">22.5° (Saddle)</option>
            <option value="30" selected>30° (Standard)</option>
            <option value="45">45° (Box Offset)</option>
            <option value="60">60° (Tight)</option>
        </select>`;

    const ph = "e.g. 12 3/4 or 1' 4\"";

    // 3. RENDER INPUTS BASED ON BEND TYPE
    if(type==='stub') h += `<label>Stub Height</label><input type="text" id="i1" placeholder="${ph}" inputmode="decimal" autocomplete="off">`;
    else if(type==='back2back') h += `<label>Length (Outside-to-Outside)</label><input type="text" id="i1" placeholder="${ph}" inputmode="decimal" autocomplete="off">`;
    else if(type==='backbend') h += `<label>Back Length</label><input type="text" id="i1" placeholder="${ph}" inputmode="decimal" autocomplete="off">`;
    
    else if(type==='kick'||type==='stub_kick') h += `<label>Stub Height</label><input type="text" id="i1" placeholder="${ph}" inputmode="decimal" autocomplete="off"><label>Kick Height</label><input type="text" id="i2" placeholder="${ph}" inputmode="decimal" autocomplete="off">${ang}`;
    
    else if(type==='rolling_stub') h += `<label>Rise Height</label><input type="text" id="i1" placeholder="${ph}" inputmode="decimal" autocomplete="off"><label>Roll Distance</label><input type="text" id="i2" placeholder="${ph}" inputmode="decimal" autocomplete="off">`;
    
    else if(['offset','shallow_off','deep_off','zbend'].includes(type)) h += `<label>Rise (Obstacle Height)</label><input type="text" id="i1" placeholder="${ph}" inputmode="decimal" autocomplete="off"><label>Distance to Obstacle</label><input type="text" id="i2" placeholder="${ph}" inputmode="decimal" autocomplete="off">${ang}`;
    
    else if(['rolling','compound_off'].includes(type)) h += `<label>Rise (Up)</label><input type="text" id="i1" placeholder="${ph}" inputmode="decimal" autocomplete="off"><label>Roll (Over)</label><input type="text" id="i2" placeholder="${ph}" inputmode="decimal" autocomplete="off">${ang}`;
    
    else if(type==='parallel') h += `<label>Offset 1 Rise</label><input type="text" id="i1" placeholder="${ph}" inputmode="decimal" autocomplete="off"><label>Center-to-Center Spacing</label><input type="text" id="i2" placeholder="${ph}" inputmode="decimal" autocomplete="off">${ang}`;
    
    else if(type==='off_kick') h += `<label>Offset Rise</label><input type="text" id="i1" placeholder="${ph}" inputmode="decimal" autocomplete="off"><label>Kick Rise</label><input type="text" id="i2" placeholder="${ph}" inputmode="decimal" autocomplete="off">${ang}`;
    
    else if(type==='saddle3') h += `<label>Obstacle Height</label><input type="text" id="i1" placeholder="${ph}" inputmode="decimal" autocomplete="off"><label>Distance to Center</label><input type="text" id="i2" placeholder="${ph}" inputmode="decimal" autocomplete="off">
        <label>Center Bend Angle</label>
        <select id="i_ang">
            <option value="30">30°</option>
            <option value="45" selected>45° (Standard)</option>
            <option value="60">60°</option>
            <option value="90">90° (Tall)</option>
        </select>
        <label>Side Bend Angles</label>
        <select id="i_ang_side">
            <option value="10">10°</option>
            <option value="15">15°</option>
            <option value="22.5" selected>22.5° (Standard)</option>
            <option value="30">30°</option>
            <option value="45">45°</option>
        </select>`;
    
    else if(type==='saddle4') h += `<label>Obstacle Height</label><input type="text" id="i1" placeholder="${ph}" inputmode="decimal" autocomplete="off"><label>Obstacle Width</label><input type="text" id="i2" placeholder="${ph}" inputmode="decimal" autocomplete="off"><label>Distance to Start</label><input type="text" id="i3" placeholder="${ph}" inputmode="decimal" autocomplete="off">${ang}`;
    
    else if(type==='sad_off' || type==='off_sad') h += `<label>Offset Rise</label><input type="text" id="i1" placeholder="${ph}" inputmode="decimal" autocomplete="off"><label>Saddle Height</label><input type="text" id="i2" placeholder="${ph}" inputmode="decimal" autocomplete="off">${ang}`;
    
    else if(type==='off_90' || type==='90_off') h += `<label>Stub Height</label><input type="text" id="i1" placeholder="${ph}" inputmode="decimal" autocomplete="off"><label>Offset Rise</label><input type="text" id="i2" placeholder="${ph}" inputmode="decimal" autocomplete="off">${ang}`;
    
    else if(type==='roll_90' || type==='comp_bend') h += `<label>Rise</label><input type="text" id="i1" placeholder="${ph}" inputmode="decimal" autocomplete="off"><label>Roll</label><input type="text" id="i2" placeholder="${ph}" inputmode="decimal" autocomplete="off"><label>Length to Turn</label><input type="text" id="i3" placeholder="${ph}" inputmode="decimal" autocomplete="off">`;
    
    else if(type==='fill') {
        h += `
        <div class="fill-container">
            <div class="fill-header">Conduit Type</div>
            <div class="fill-row">
                <select id="c_type" class="flex-1" onchange="updateFillState('type', this.value)">${Object.keys(necData.conduit).map(t => `<option value="${t}" ${state.fillConfig.type===t?'selected':''}>${t}</option>`).join('')}</select>
                <select id="c_size" class="flex-1" onchange="updateFillState('size', this.value)"></select>
            </div>
            <div class="fill-header" style="margin-top:20px;">Wires (Qty | Size | Type)</div>
            <div id="wire-list-container"></div>
            <button class="btn-add" onclick="addWireRow()"><ion-icon name="add-circle-outline"></ion-icon> Add Wire Group</button>
        </div>`;
    }

    // Translate inline labels when Spanish is selected
    if (state.lang === 'es') {
        for (const [en, es] of Object.entries(inlineTranslations.es)) {
            h = h.replaceAll(en, es);
        }
    }

    div.innerHTML = h;
    if(type === 'fill') { updateConduitOptions(); renderWireRows(); }
}

/* =========================================
   5. SMART INPUT PARSER
   ========================================= */
function parseSmartInput(val) {
    if (!val || val.toString().trim() === '') return 0;
    val = val.toString().toLowerCase().trim();
    
    // Handle metric
    if (val.includes('cm')) {
        const num = parseFloat(val);
        return isNaN(num) ? 0 : num / 2.54; // Convert cm to inches
    }
    if (val.includes('mm')) {
        const num = parseFloat(val);
        return isNaN(num) ? 0 : num / 25.4; // Convert mm to inches
    }
    
    // Handle feet and inches (e.g., "1' 4 3/4")
    if (val.includes("'")) {
        const parts = val.split("'");
        const feet = parseFloat(parts[0]) || 0;
        let inchStr = parts[1] || "0";
        inchStr = inchStr.replace('"', '').trim();
        return (feet * 12) + parseFractionString(inchStr);
    }
    
    return parseFractionString(val);
}

function parseFractionString(str) {
    str = str.replace('"', '').replace('-', ' ').trim();
    const parts = str.split(' ');
    if (parts.length === 2) {
        const whole = parseFloat(parts[0]);
        const frac = evalFraction(parts[1]);
        return whole + frac;
    } else if (parts.length === 1) {
        if (parts[0].includes('/')) return evalFraction(parts[0]);
        return parseFloat(parts[0]) || 0;
    }
    return 0;
}

function evalFraction(frac) {
    if (!frac.includes('/')) return 0;
    const p = frac.split('/');
    return parseFloat(p[0]) / parseFloat(p[1]);
}

/* =========================================
   6. MATH ENGINE
   ========================================= */
function runCalculation() {
    if(state.activeCalc === 'fill') return calculateFill();
    const t = state.activeCalc;
    
    // Show tips
    showBendTip(t);
    
    // Validate and warn
    const warnings = validateInputs();
    if (warnings.length > 0) {
        warnings.forEach(w => console.warn(w));
    }
    
    // Validate inputs
    const i1 = parseSmartInput(document.getElementById('i1')?.value);
    const i2 = parseSmartInput(document.getElementById('i2')?.value);
    const i3 = parseSmartInput(document.getElementById('i3')?.value);
    
    if (i1 === 0 && i2 === 0 && i3 === 0) {
        showAlert('noMeasurement');
        return;
    }
    
    const ang = parseFloat(document.getElementById('i_ang')?.value||30);
    const b = { ...state.currentBender };
    const dat = bendTable[ang] || bendTable[30];

    let marks = [], shrink=0, cut=0, txt='';
    const normWarnings = [];

    // --- LOGIC ---
    if(t === 'stub') {
        const m = i1 - b.ded;
        marks = [{l:'HOOK',p:m}];
        txt = row('Mark 1', m)
            + '<div class="sub-note" style="background:rgba(33,150,243,0.1); padding:8px; margin:10px 0; border-left:3px solid #2196F3;">' 
            + '<strong>📏 Bender Mark:</strong> Align this mark with the <strong>Star-Point</strong> (back of 90°) on your bender.'
            + '</div>';
        cut = i1 + b.gain;
    } 
    else if(t === 'back2back') {
        const m = i1 - (b.ded * 2);
        marks = [{l:'STAR',p:m}];
        txt = row('Distance (Outside-to-Outside)', i1) + row('Bender Deduct (×2)', b.ded * 2) + row('Star Mark', m)
            + '<div class="sub-note" style="background:rgba(33,150,243,0.1); padding:8px; margin:10px 0; border-left:3px solid #2196F3;">' 
            + '<strong>📏 Bender Mark:</strong> Align mark with <strong>Star-Point</strong> for first 90°, flip conduit and align same mark for second 90°.'
            + '</div>';
        cut = i1 + (b.gain * 2);
    }
    else if(t === 'backbend') {
        const m = i1 - b.ded + b.gain; 
        marks = [{l:'NOTCH',p:m}];
        txt = row('Back Length', i1) + row('Bender Deduct', b.ded) + row('Bender Gain', b.gain) + row('Notch Mark', m)
            + '<div class="sub-note" style="background:rgba(33,150,243,0.1); padding:8px; margin:10px 0; border-left:3px solid #2196F3;">' 
            + '<strong>📏 Bender Mark:</strong> Align mark with <strong>Star-Point</strong> or rim notch depending on your bender.'
            + '</div>';
        cut = i1 + b.gain;
    }
    else if(['offset','shallow_off','deep_off','zbend'].includes(t)) {
        shrink = i1 * dat.s;
        const travel = i1 * dat.m;
        const m1 = i2 + shrink; 
        const m2 = m1 - travel;
        marks = [{l:'START',p:m2},{l:'END',p:m1}];
        txt = row('Shrink', shrink) + row('Travel', travel) + row('Mark 1 (Far)', m1) + row('Mark 2 (Near)', m2)
            + '<div class="sub-note" style="background:rgba(33,150,243,0.1); padding:8px; margin:10px 0; border-left:3px solid #2196F3;">' 
            + '<strong>📏 Bender Marks:</strong> Align both marks with the <strong>Arrow</strong> on your bender. Use the <strong>Degree Scale</strong> to set ' + ang + '° bends.'
            + '</div>';
        cut = m1 + 12;
    }
    else if(t === 'rolling') {
        const trueOff = Math.sqrt(i1*i1 + i2*i2);
        const riseAngle = Math.atan(i1/i2) * (180/Math.PI);
        const angleShrink = trueOff * Math.sin((ang/2) * (Math.PI/180));
        const travelDist = trueOff * Math.cos((ang/2) * (Math.PI/180));
        shrink = angleShrink * 2;
        marks = [{l:'RISE',p:i2},{l:'ROLL',p:i2+travelDist}];
        txt = row('True Rise', i1) + row('True Roll', i2) + row('True Offset', trueOff) + row('Rise Angle', riseAngle) + row('Total Shrink', shrink);
        cut = i2 + travelDist + 12;
    }
    else if(t === 'compound_off') {
        const trueOff = Math.sqrt(i1*i1 + i2*i2);
        shrink = trueOff * dat.s;
        const travel = trueOff * dat.m;
        marks = [{l:'START',p:5},{l:'END',p:5+travel}];
        txt = row('Rise (Up)', i1) + row('Roll (Over)', i2) + row('True Offset', trueOff) + row('Travel', travel) + row('Shrink', shrink);
        cut = travel + 12;
    }
    else if(t === 'parallel') {
        const adj = i2 * Math.tan((ang/2) * (Math.PI/180));
        txt = row('Start Adjust', adj) + `<div class="sub-note">Add to start mark of outer pipe</div>`;
    }
    else if(t === 'saddle3') {
        // Get center angle
        let centerAng = parseFloat(document.getElementById('i_ang')?.value || 45);
        
        // Get side angle
        let sideAng = parseFloat(document.getElementById('i_ang_side')?.value || 22.5);
        
        // Calculate using center angle for shrink
        const centerData = bendTable[centerAng] || bendTable[45];
        const saddleShrink = i1 * centerData.s;
        shrink = saddleShrink * 2;
        const center = i2 + saddleShrink;
        
        // Calculate distance using side angle
        const sideData = bendTable[sideAng] || bendTable[22.5];
        const dist = i1 * sideData.m;
        
        marks = [{l:'SIDE',p:center-dist},{l:'CENTER',p:center},{l:'SIDE',p:center+dist}];
        
        // Show both default and custom angle calculations
        txt = row('Center Angle', centerAng + '°') + row('Side Angles', sideAng + '°') + row('Obstacle Height', i1);
        
        // If not using default angles (45° center, 22.5° sides), show comparison
        if (centerAng !== 45 || sideAng !== 22.5) {
            const defaultShrink = i1 * (3/16);
            const defaultDist = i1 * 2.5;
            const defaultCenter = i2 + defaultShrink;
            txt += '<div class="sub-note" style="background:rgba(255,193,7,0.1); padding:8px; margin:10px 0; border-left:3px solid #FFC107;">'
                + '<strong>📐 Default Saddle (45° center, 22.5° sides):</strong><br>'
                + 'Shrink (per side): ' + toFraction(defaultShrink) + '<br>'
                + 'Total Shrink: ' + toFraction(defaultShrink * 2) + '<br>'
                + 'Center Mark: ' + toFraction(defaultCenter) + '<br>'
                + 'Distance (left/right): ' + toFraction(defaultDist)
                + '</div>'
                + '<div class="sub-note" style="background:rgba(33,150,243,0.1); padding:8px; margin:10px 0; border-left:3px solid #2196F3;">'
                + '<strong>📐 Your Custom Saddle (' + centerAng + '° center, ' + sideAng + '° sides):</strong><br>'
                + 'Shrink (per side): ' + toFraction(saddleShrink) + '<br>'
                + 'Total Shrink: ' + toFraction(shrink) + '<br>'
                + 'Center Mark: ' + toFraction(center) + '<br>'
                + 'Distance (left/right): ' + toFraction(dist)
                + '</div>';
        } else {
            txt += row('Shrink (per side)', saddleShrink) + row('Total Shrink', shrink) + row('Center Mark', center) + row('Distance (left/right)', dist);
        }
        
        txt += '<div class="sub-note" style="background:rgba(33,150,243,0.1); padding:8px; margin:10px 0; border-left:3px solid #2196F3;">' 
            + '<strong>📏 Bender Marks:</strong><br>'
            + '• <strong>Center bend:</strong> Align with <strong>Rim Notch</strong> for ' + centerAng + '° bend<br>'
            + '• <strong>Side bends:</strong> Align with <strong>Arrow</strong> for ' + sideAng + '° bends'
            + '</div>';
        
        cut = center + dist + 12;
    }
    else if(t === 'saddle4') {
        shrink = i1 * dat.s;
        const travel = i1 * dat.m;
        const sR = (i3 + shrink) - travel;
        const sF = i3 + shrink;
        const eF = sF + i2;
        const eD = eF + travel;
        marks = [{l:'M1',p:sR},{l:'M2',p:sF},{l:'M3',p:eF},{l:'M4',p:eD}];
        txt = row('Distance to Start', i3) + row('Obstacle Width', i2) + row('Obstacle Height', i1) + row('Shrink', shrink) + row('Travel', travel) + row('M1 (Start Rear)', sR) + row('M2 (Start Front)', sF) + row('M3 (End Front)', eF) + row('M4 (End Rear)', eD)
            + '<div class="sub-note" style="background:rgba(33,150,243,0.1); padding:8px; margin:10px 0; border-left:3px solid #2196F3;">' 
            + '<strong>📏 Bender Marks:</strong> Align all four marks with the <strong>Arrow</strong> on your bender for ' + ang + '° bends.'
            + '</div>';
        cut = eD + 12;
    }
    else if(t === 'kick' || t === 'stub_kick' || t === 'off_kick') {
        const stubM = i1 - b.ded;
        const kickTravel = i2 * dat.m;
        const kickShrink = i2 * dat.s;
        const kickM = stubM - 6 - kickTravel;
        shrink = kickShrink;
        marks = [{l:'90',p:stubM},{l:'KICK',p:kickM}];
        txt = row('Stub Height', i1) + row('Kick Height', i2) + row('90 Mark', stubM) + row('Kick Travel', kickTravel) + row('Kick Shrink', kickShrink) + row('Kick Mark', kickM)
            + '<div class="sub-note" style="background:rgba(33,150,243,0.1); padding:8px; margin:10px 0; border-left:3px solid #2196F3;">' 
            + '<strong>📏 Bender Marks:</strong><br>'
            + '• <strong>90° bend:</strong> Align with <strong>Star-Point</strong><br>'
            + '• <strong>Kick bend:</strong> Align with <strong>Arrow</strong> and use <strong>Degree Scale</strong> for ' + ang + '°'
            + '</div>';
    }
    else if(t === 'off_90' || t === '90_off') {
        shrink = i2 * dat.s;
        const offsetTravel = i2 * dat.m;
        const stubDist = i1 - b.ded;
        const m1 = 12;
        const m2 = m1 + offsetTravel;
        const m3 = m2 + stubDist;
        marks = [{l:'OFF 1',p:m1},{l:'OFF 2',p:m2},{l:'90',p:m3}];
        txt = row('Stub Height', i1) + row('Offset Rise', i2) + row('Offset Shrink', shrink) + row('Offset Travel', offsetTravel) + row('Mark 1 (Offset Start)', m1) + row('Mark 2 (Offset End)', m2) + row('Mark 3 (90° Bend)', m3);
    }
    else if(t === 'rolling_stub') {
        const trueHyp = Math.sqrt(i1*i1 + i2*i2);
        const rollAngle = Math.atan(i2/i1) * (180/Math.PI);
        const m1 = i2 - b.ded;
        marks = [{l:'90',p:m1}];
        txt = row('Rise Height', i1) + row('Roll Distance', i2) + row('True Hypotenuse', trueHyp) + row('Roll Angle', rollAngle) + row('90° Mark', m1);
        cut = m1 + 10;
    }
    else if(t === 'sad_off') {
        // Saddle into Offset: First saddle, then offset from end
        const saddleShrink = i1 * (3/16);
        const totalSaddleShrink = saddleShrink * 2;
        const saddleCenter = i2 + saddleShrink;
        const saddleDist = i1 * 2.5;
        // Now calculate offset from the saddle's end
        const offsetShrink = i2 * dat.s;
        const offsetTravel = i2 * dat.m;
        const offsetEndMark = saddleCenter + saddleDist + offsetShrink;
        const offsetStartMark = offsetEndMark - offsetTravel;
        marks = [{l:'SADDLE',p:saddleCenter},{l:'OFF-1',p:offsetStartMark},{l:'OFF-2',p:offsetEndMark}];
        txt = row('Obstacle Height', i1) + row('Distance to Saddle', i2) + row('Saddle Shrink', totalSaddleShrink) + row('Offset Shrink', offsetShrink) + row('Saddle Center', saddleCenter) + row('Offset Start', offsetStartMark) + row('Offset End', offsetEndMark);
        cut = offsetEndMark + 12;
    }
    else if(t === 'off_sad') {
        // Offset into Saddle: First offset, then saddle from end
        const offsetShrink = i1 * dat.s;
        const offsetTravel = i1 * dat.m;
        const offsetEndMark = (i2 + offsetShrink);
        const offsetStartMark = offsetEndMark - offsetTravel;
        // Now calculate saddle center based on new position
        const saddleShrink = i2 * (3/16);
        const totalSaddleShrink = saddleShrink * 2;
        const saddleCenter = offsetEndMark + saddleShrink;
        marks = [{l:'OFF-1',p:offsetStartMark},{l:'OFF-2',p:offsetEndMark},{l:'SADDLE',p:saddleCenter}];
        txt = row('Offset Rise', i1) + row('Obstacle Height', i2) + row('Offset Shrink', offsetShrink) + row('Offset Travel', offsetTravel) + row('Offset Start', offsetStartMark) + row('Offset End', offsetEndMark) + row('Saddle Center', saddleCenter);
        cut = saddleCenter + 12;
    }
    else if(t === 'roll_90') {
        const trueOff = Math.sqrt(i1*i1 + i2*i2);
        const rollAngle = Math.atan(i1/i2) * (180/Math.PI);
        const m1 = i2 - b.ded;
        const m2 = i2 + i3;
        marks = [{l:'MARK',p:i2},{l:'90',p:m1}];
        txt = row('Rise (Up)', i1) + row('Roll (Over)', i2) + row('Length to Turn', i3) + row('True Offset', trueOff) + row('Roll Angle', rollAngle) + row('Mark Position', i2) + row('90° Mark', m1);
        cut = m1 + 12;
    }
    else if(t === 'comp_bend') {
        const bend1 = i1 - b.ded;
        const bend2offset = i2 * dat.m;
        const bend2pos = bend1 + bend2offset;
        const bend3 = i3 - b.ded;
        marks = [{l:'B1',p:bend1},{l:'B2',p:bend2pos},{l:'B3',p:bend2pos+bend3}];
        txt = row('Bend 1 (Rise)', i1) + row('Bend 2 (Roll)', i2) + row('Bend 3 (Length)', i3) + row('Bend 1 Mark', bend1) + row('Bend 2 Mark', bend2pos) + row('Bend 3 Mark', bend2pos+bend3);
        cut = bend2pos + bend3 + 12;
    }

    // Normalize marks: shift off negatives, sort, and ensure cut is at least tail past last mark
    if (marks && marks.length) {
        let minMark = Math.min(...marks.map(m => Number(m.p) || 0));
        if (minMark < 0) {
            const shift = Math.abs(minMark) + 1;
            marks = marks.map(m => ({ ...m, p: (Number(m.p) || 0) + shift }));
            if (cut > 0) cut += shift;
            normWarnings.push(`Shifted marks forward by ${shift.toFixed(1)}" to avoid negative positions.`);
        }
        // Sort by position to keep order logical for warnings and display
        marks = marks.sort((a,b) => (Number(a.p)||0) - (Number(b.p)||0));
        // Ensure cut has a tail past the last mark
        const lastMark = Math.max(...marks.map(m => Number(m.p) || 0));
        if (!cut || cut <= lastMark) {
            cut = lastMark + 12;
        }
    }

    // Generate Math if enabled
    if(state.showMath && t !== 'fill') {
        txt += generateMathBlock(t, i1, i2, i3, ang, b, dat, shrink, cut, marks);
    }

    // Handle Quiz Mode
    if (state.quizMode) {
        txt = '<button class="quiz-reveal-btn" onclick="revealQuiz()">REVEAL ANSWER</button>' + txt;
    }

    const bendWarnings = [...normWarnings, ...buildWarnings(marks, cut, b)];
    displayResults(marks, shrink, cut, txt, bendWarnings);
}

/* =========================================
   7. OUTPUT HELPERS
   ========================================= */
function calculateTotalBendDegrees(bendType, angle) {
    // Calculate total degrees of bends in the run
    const ang = parseFloat(angle) || 30;
    let totalDegrees = 0;
    
    // Single 90° bends
    if (['stub', 'back2back', 'rolling_stub'].includes(bendType)) {
        totalDegrees = 90;
    }
    // Two 90° bends
    else if (['backbend'].includes(bendType)) {
        totalDegrees = 180;
    }
    // Two bends at specified angle (offset, kick, etc)
    else if (['offset', 'shallow_off', 'deep_off', 'zbend', 'kick', 'stub_kick', 'off_kick', 'parallel', 'rolling', 'compound_off'].includes(bendType)) {
        totalDegrees = ang * 2;
    }
    // Three bends (3-point saddle: center angle + two side angles)
    else if (bendType === 'saddle3') {
        let centerAng = parseFloat(document.getElementById('i_ang')?.value || 45);
        let sideAng = parseFloat(document.getElementById('i_ang_side')?.value || 22.5);
        
        totalDegrees = centerAng + sideAng + sideAng; // center + 2 sides
    }
    // Four bends (4-point saddle)
    else if (bendType === 'saddle4') {
        totalDegrees = ang * 4;
    }
    // Combinations: offset into 90 or 90 into offset (2 offset bends + 1 ninety)
    else if (['off_90', '90_off'].includes(bendType)) {
        totalDegrees = (ang * 2) + 90;
    }
    // Rolling 90: one 90° + rolling bends
    else if (bendType === 'roll_90') {
        totalDegrees = 90 + (ang * 2);
    }
    // Saddle into offset or offset into saddle
    else if (['sad_off', 'off_sad'].includes(bendType)) {
        totalDegrees = 90 + (ang * 2); // Saddle (90°) + Offset (2 x angle)
    }
    // Compound bend (3 bends at specified angle)
    else if (bendType === 'comp_bend') {
        totalDegrees = ang * 3;
    }
    
    return totalDegrees;
}

function buildWarnings(marks, cut, b) {
    const warns = [];
    if (!marks || !marks.length) return warns;
    const sorted = [...marks].sort((a,b)=>a.p-b.p);
    if (sorted[0].p < 0) warns.push(langMap[state.lang]?.negativeMark || langMap.en.negativeMark);
    
    // Check for non-default angles on 3-point saddle
    if (state.activeCalc === 'saddle3') {
        let centerAng = parseFloat(document.getElementById('i_ang')?.value || 45);
        let sideAng = parseFloat(document.getElementById('i_ang_side')?.value || 22.5);
        
        if (!state.quizMode && (centerAng !== 45 || sideAng !== 22.5)) {
            const customAngleWarning = state.lang === 'es'
                ? `⚠️ AVISO: Usando ángulos personalizados (centro: ${centerAng}°, lados: ${sideAng}°). Los valores estándar son 45°/22.5°. ¿Está seguro?`
                : `⚠️ NOTICE: Using custom angles (center: ${centerAng}°, sides: ${sideAng}°). Standard is 45°/22.5°. Are you sure?`;
            warns.push(customAngleWarning);
        }
    }
    
    // Check total bend degrees
    const ang = parseFloat(document.getElementById('i_ang')?.value || 30);
    const totalDegrees = calculateTotalBendDegrees(state.activeCalc, ang);
    if (totalDegrees > 360) {
        const degreeWarning = state.lang === 'es' 
            ? `⚠️ ADVERTENCIA NEC: Total de curvas ${totalDegrees}° excede el límite de 360° entre cajas de tiro` 
            : `⚠️ NEC WARNING: Total bend degrees ${totalDegrees}° exceeds 360° limit between pull points`;
        warns.push(degreeWarning);
    }
    
    for (let i=1;i<sorted.length;i++) {
        const gap = sorted[i].p - sorted[i-1].p;
        const minGap = 3;
        if (gap < minGap) {
            warns.push((langMap[state.lang]?.spacingTight || langMap.en.spacingTight) + ` (< ${minGap}")`);
            break;
        }
    }
    for (let i=1;i<marks.length;i++) {
        if (marks[i].p < marks[i-1].p) {
            warns.push(langMap[state.lang]?.markOrder || langMap.en.markOrder);
            break;
        }
    }
    if (cut > 0 && sorted[sorted.length-1].p + 6 > cut) {
        warns.push(langMap[state.lang]?.cutShort || langMap.en.cutShort);
    }
    return warns;
}

function displayResults(marks, shrink, cut, textHtml, warnings = []) {
    // Quiz mode guardrails: prevent negative marks by shifting forward
    if (state.quizMode && marks && marks.length) {
        const minMark = Math.min(...marks.map(m => m.p || 0));
        if (minMark < 0) {
            const shift = Math.abs(minMark) + 1; // add 1" buffer
            marks = marks.map(m => ({ ...m, p: (m.p || 0) + shift }));
            if (cut > 0) cut += shift;
            warnings = [...warnings, `Adjusted forward by ${shift.toFixed(1)}" to avoid negative marks in quiz mode.`];
        }
    }

    // Save marks for 2D visualization
    state.lastMarks = marks;

    // Quiz mode: enforce 10 ft EMT awareness and add warning if exceeded
    if (state.quizMode && marks && marks.length) {
        const quizMax = 120; // inches
        const maxMark = Math.max(...marks.map(m => m.p || 0));
        const over = maxMark > quizMax || (cut > quizMax && cut > 0);
        if (over) {
            const msg = `Quiz mode limit: keep bends within 10' EMT (120\") span. Current max mark ${maxMark.toFixed(1)}\"${cut>0?`, cut length ${cut.toFixed(1)}\"`:''}.`;
            warnings = [...warnings, msg];
        }
    }

    // Deduplicate warnings
    if (warnings && warnings.length) {
        warnings = [...new Set(warnings)];
    }
    
    document.getElementById('result-box').classList.remove('hidden');
    const labels = langMap[state.lang] || langMap.en;
    
    // Handle Fill Calculator specific visibility (Hide tape & footer stats)
    const isFill = state.activeCalc === 'fill';
    const tapeElements = document.querySelectorAll('.tape-header, .tape-scroll-area, .result-footer');
    tapeElements.forEach(el => el.style.display = isFill ? 'none' : '');

    // Apply Quiz Mode Blur
    const resBox = document.getElementById('result-box');
    if (state.quizMode) resBox.classList.add('quiz-blur');
    else resBox.classList.remove('quiz-blur');

    document.getElementById('text-results').innerHTML = textHtml;
    
    if (!isFill) {
        const shrinkLabel = document.getElementById('label-shrink');
        const cutLabel = document.getElementById('label-cut');
        const warnLabel = document.getElementById('label-warnings');
        if (shrinkLabel) shrinkLabel.innerText = labels.shrink;
        if (cutLabel) cutLabel.innerText = labels.cut;
        if (warnLabel) warnLabel.innerText = labels.warnings;

        document.getElementById('stat-shrink').innerHTML = toFraction(shrink);
        document.getElementById('stat-length').innerHTML = cut > 0 ? toFraction(cut) : "--";
        renderTape(marks);

        const warnBox = document.getElementById('result-warnings');
        const warnList = document.getElementById('warning-list');
        if (warnBox && warnList) {
            if (warnings.length) {
                warnBox.classList.remove('hidden');
                warnList.innerHTML = warnings.map(w => `<li>${w}</li>`).join('');
            } else {
                warnBox.classList.add('hidden');
                warnList.innerHTML = '';
            }
        }
        
        // Removed 2D view button
    }
}

window.revealQuiz = () => {
    document.getElementById('result-box').classList.remove('quiz-blur');
    const btn = document.querySelector('.quiz-reveal-btn');
    if (btn) btn.style.display = 'none';
}

function renderTape(marks) {
    const cvs = document.getElementById('tape-canvas');
    cvs.innerHTML = '';
    if(!marks.length) return;
    marks.sort((a,b)=>a.p-b.p);
    const max = marks[marks.length-1].p;
    cvs.style.width = `${(max * 20) + 150}px`;
    // Add bender mark guide at the top
    const benderMarkGuide = getBenderMarkGuide(state.activeCalc);
    if (benderMarkGuide) {
        cvs.innerHTML += `
            <div style="position:absolute; top:0; left:20px; right:20px; background:rgba(33,150,243,0.15); border-left:3px solid #2196F3; padding:6px 10px; border-radius:4px; font-size:0.8rem; z-index:5;">
                <strong style="color:#2196F3;">📐 Bender Marks:</strong> ${benderMarkGuide}
            </div>
        `;
    }
    
    marks.forEach((m, idx) => {
        const l = m.p * 20;
        // Translate tape label
        const translatedLabel = (state.lang === 'es' && inlineTranslations.es[m.l]) ? inlineTranslations.es[m.l] : m.l;
        
        // Format based on user's tape format preference
        const formatTapeMark = (inches) => {
            if (state.tapeFormat === 'mm') {
                return `${(inches * 2.54).toFixed(1)} cm`;
            } else if (state.tapeFormat === 'decimal') {
                return `${inches.toFixed(2)}"`;
            } else {
                // Default tape reading format
                const feet = Math.floor(inches / 12);
                const remainInch = inches % 12;
                const wholeInch = Math.floor(remainInch);
                const frac = remainInch - wholeInch;
                const n = Math.round(frac * 16);
                
                let fracStr = "";
                if (n > 0) {
                    let num = n, den = 16;
                    while (num % 2 === 0 && den % 2 === 0) { num /= 2; den /= 2; }
                    fracStr = ` ${num}/${den}`;
                }
                
                if (feet > 0) {
                    return `${feet}' ${wholeInch}${fracStr}"`;
                } else {
                    return `${wholeInch}${fracStr}"`;
                }
            }
        };
        
        const markColor = ['#FBC02D', '#2196F3', '#4CAF50', '#FF6D00', '#9C27B0'][idx % 5];
        
        cvs.innerHTML += `
            <div class="tape-mark" style="left:${l+20}px; background:${markColor};"></div>
            <div class="tape-label" style="left:${l+20}px; color:${markColor}; font-weight:bold; font-size:1.1rem;">${formatTapeMark(m.p)}</div>
            <div class="tape-tag" style="left:${l+20}px; color:#FBC02D; font-weight:bold;">${translatedLabel}</div>
        `;
    });
}

function getBenderMarkGuide(bendType) {
    const ang = parseFloat(document.getElementById('i_ang')?.value || 30);
    
    if (bendType === 'stub') {
        return 'Align mark with <strong>Star-Point</strong> (back of 90°)';
    }
    else if (['offset', 'shallow_off', 'deep_off', 'zbend'].includes(bendType)) {
        return `Align marks with <strong>Arrow</strong>. Use <strong>Degree Scale</strong> for ${ang}°`;
    }
    else if (bendType === 'saddle3') {
        let centerAng = parseFloat(document.getElementById('i_ang')?.value || 45);
        let sideAng = parseFloat(document.getElementById('i_ang_side')?.value || 22.5);
        return `Center: <strong>Rim Notch</strong> (${centerAng}°) | Sides: <strong>Arrow</strong> (${sideAng}°)`;
    }
    else if (bendType === 'saddle4') {
        return `All marks: Align with <strong>Arrow</strong> for ${ang}° bends`;
    }
    else if (['kick', 'stub_kick', 'off_kick'].includes(bendType)) {
        return `90°: <strong>Star-Point</strong> | Kick: <strong>Arrow</strong> with <strong>Degree Scale</strong> (${ang}°)`;
    }
    else if (['back2back', 'backbend'].includes(bendType)) {
        return 'Align mark with <strong>Star-Point</strong> (back of 90°)';
    }
    else if (['off_90', '90_off'].includes(bendType)) {
        return `Offset marks: <strong>Arrow</strong> | 90° mark: <strong>Star-Point</strong>`;
    }
    else if (['rolling', 'compound_off', 'rolling_stub', 'roll_90'].includes(bendType)) {
        return `Align marks with <strong>Arrow</strong>. Use <strong>Degree Scale</strong> for angles`;
    }
    else if (['sad_off', 'off_sad'].includes(bendType)) {
        return `Saddle center: <strong>Rim Notch</strong> | Offset marks: <strong>Arrow</strong>`;
    }
    
    return null;
}

function row(l, v, s) {
    // Translate label if Spanish mode is active
    const translatedLabel = (state.lang === 'es' && inlineTranslations.es[l]) ? inlineTranslations.es[l] : l;
    const translatedSub = (state.lang === 'es' && s && inlineTranslations.es[s]) ? inlineTranslations.es[s] : s;
    
    return `
        <div class="result-row">
            <div>
                <span style="display:block;color:var(--primary);font-size:0.75rem;font-weight:bold">${translatedLabel}</span>
                ${translatedSub?`<span style="font-size:0.7rem;color:#666">${translatedSub}</span>`:''}
            </div>
            <span>${toFraction(v)}</span>
        </div>`; 
}

function clearInputs() { 
    document.querySelectorAll('input').forEach(i=>i.value=''); 
    document.getElementById('result-box').classList.add('hidden'); 
}

/* =========================================
   8. SETTINGS & FORMATTING
   ========================================= */
function openSettings() {
    document.getElementById('modal-settings').classList.remove('hidden');
    updateSettingsUI();
}
function closeSettings() {
    document.getElementById('modal-settings').classList.add('hidden');
    localStorage.setItem('qc_format', state.format);
    if(!document.getElementById('result-box').classList.contains('hidden')) {
        if(state.activeCalc === 'fill') calculateFill();
        else runCalculation();
    }
}
function setFormat(fmt) {
    state.format = fmt;
    localStorage.setItem('qc_format', fmt);
    updateSettingsUI();
}
window.setTapeFormat = (fmt) => {
    state.tapeFormat = fmt;
    localStorage.setItem('qc_tape_format', fmt);
    updateSettingsUI();
    // Re-render tape if results are visible
    if (state.lastMarks && state.lastMarks.length) {
        renderTape(state.lastMarks);
    }
}
function setLanguage(lang) {
    state.lang = lang;
    localStorage.setItem('qc_lang', lang);
    // Re-render UI in selected language, return to dashboard
    if (typeof loadCalc === 'function') loadCalc('home');
    applyLanguage();
    updateSettingsUI();
}
function updateSettingsUI() {
    document.querySelectorAll('.radio-circle').forEach(e => e.classList.remove('active'));
    if(state.format === 'feet') document.getElementById('rad-feet').classList.add('active');
    if(state.format === 'inch') document.getElementById('rad-inch').classList.add('active');
    if(state.format === 'metric') document.getElementById('rad-metric').classList.add('active');
    if(state.tapeFormat === 'tape') {
        const radTape = document.getElementById('rad-tape');
        if (radTape) radTape.classList.add('active');
    }
    if(state.tapeFormat === 'decimal') {
        const radDec = document.getElementById('rad-decimal');
        if (radDec) radDec.classList.add('active');
    }
    if(state.tapeFormat === 'mm') {
        const radMm = document.getElementById('rad-mm');
        if (radMm) radMm.classList.add('active');
    }
    document.querySelectorAll('.lang-option').forEach(e => e.classList.remove('active'));
    const langBtn = document.getElementById(`lang-${state.lang}`);
    if (langBtn) langBtn.classList.add('active');
    
    // Update toggle
    const mathTog = document.getElementById('set-show-math');
    if(mathTog) mathTog.checked = state.showMath;

    const quizTog = document.getElementById('set-quiz-mode');
    if(quizTog) quizTog.checked = state.quizMode;
}
function applyLanguage() {
    const labels = langMap[state.lang] || langMap.en;
    const shrinkLabel = document.getElementById('label-shrink');
    const cutLabel = document.getElementById('label-cut');
    const warnLabel = document.getElementById('label-warnings');
    if (shrinkLabel) shrinkLabel.innerText = labels.shrink;
    if (cutLabel) cutLabel.innerText = labels.cut;
    if (warnLabel) warnLabel.innerText = labels.warnings;

    // Apply static UI translations via data-i18n attributes
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        const txt = (uiText[state.lang] && uiText[state.lang][key]) || (uiText.en && uiText.en[key]);
        if (txt) el.innerText = txt;
    });
}
function toFraction(val) {
    if (typeof val !== 'number') return val;
    if (state.format === 'metric') return `${(val * 2.54).toFixed(1)} cm`;

    let rounded = Math.round(val * 16) / 16;
    let feet = Math.floor(rounded / 12);
    let inches = rounded % 12;
    let wholeInch = Math.floor(inches);
    let frac = inches - wholeInch;
    let n = Math.round(frac * 16);
    let fracStr = "";
    if (n > 0) {
        let d = 16;
        while (n%2===0 && d%2===0) { n/=2; d/=2; }
        fracStr = `<sup>${n}</sup>&frasl;<sub>${d}</sub>`;
    }
    let inchStr = "";
    if (wholeInch === 0 && fracStr === "") inchStr = '0"';
    else if (wholeInch === 0) inchStr = `${fracStr}"`;
    else inchStr = `${wholeInch} ${fracStr}"`;

    if (state.format === 'inch') {
        let tIn = Math.floor(val);
        let tFr = val - tIn;
        let tn = Math.round(tFr * 16);
        let tStr = "";
        if(tn > 0) {
            let d = 16;
            while(tn%2===0 && d%2===0){tn/=2;d/=2}
            tStr = `<sup>${tn}</sup>&frasl;<sub>${d}</sub>`;
        }
        if(tIn===0 && tStr!=="") return `${tStr}"`;
        return `${tIn} ${tStr}"`;
    }
    return feet > 0 ? `${feet}' ${inchStr}` : inchStr;
}

window.toggleShowMath = (val) => {
    state.showMath = val;
    localStorage.setItem('qc_show_math', JSON.stringify(val));
}

window.toggleQuizMode = (val) => {
    state.quizMode = val;
    // In quiz mode, lock to EMT and 10 ft stick mindset
    if (val) {
        state.fillConfig.type = 'EMT';
    }
    localStorage.setItem('qc_quiz_mode', JSON.stringify(val));
    if(state.activeCalc && state.activeCalc !== 'home' && state.activeCalc !== 'fill') {
        renderInputs(state.activeCalc);
    }
}

window.generateRandomQuiz = () => {
    const type = state.activeCalc;
    
    // Get scenarios for this bend type
    const scenarios = quizScenarios[type];
    if (!scenarios || !scenarios.length) {
        alert('No quiz scenarios available for this bend type yet!');
        return;
    }
    
    // Pick a random scenario
    const scenario = scenarios[Math.floor(Math.random() * scenarios.length)];
    
    // Format decimal to fraction string for input value
    const fmt = (val) => {
        if (state.format === 'metric') return `${(val * 2.54).toFixed(1)} cm`;
        
        // Round to nearest 1/16
        val = Math.round(val * 16) / 16;

        if (state.format === 'inch') {
            let w = Math.floor(val);
            let f = val - w;
            if (f === 0) return `${w}"`;
            let n = Math.round(f * 16), d = 16;
            while (n%2===0 && d%2===0) { n/=2; d/=2; }
            return w === 0 ? `${n}/${d}"` : `${w} ${n}/${d}"`;
        }
        
        // Feet & Inches
        let ft = Math.floor(val / 12);
        let inch = val % 12;
        let w = Math.floor(inch);
        let f = inch - w;
        
        let iStr = "";
        if (f === 0) iStr = `${w}"`;
        else {
            let n = Math.round(f * 16), d = 16;
            while (n%2===0 && d%2===0) { n/=2; d/=2; }
            iStr = w === 0 ? `${n}/${d}"` : `${w} ${n}/${d}"`;
        }
        
        return ft > 0 ? `${ft}' ${iStr}` : iStr;
    };

    // Clear previous results
    document.getElementById('result-box').classList.add('hidden');
    
    const set = (id, val) => {
        const el = document.getElementById(id);
        if(el) el.value = fmt(val);
    };

    // Set angle if scenario includes it
    if (scenario.ang) {
        const angEl = document.getElementById('i_ang');
        if (angEl) angEl.value = scenario.ang;
    }

    // Set inputs based on scenario
    if (scenario.i1 !== undefined) set('i1', scenario.i1);
    if (scenario.i2 !== undefined) set('i2', scenario.i2);
    if (scenario.i3 !== undefined) set('i3', scenario.i3);
    
    // Show scenario description
    if (scenario.desc) {
        const tip = document.createElement('div');
        tip.style.cssText = 'background:#9C27B0; color:#fff; padding:12px; margin:15px 0; border-radius:8px; font-weight:bold; border-left:4px solid #E1BEE7;';
        tip.innerHTML = `📋 <strong>SCENARIO:</strong> ${scenario.desc}`;
        tip.className = 'scenario-tip';
        
        const existing = document.querySelector('.scenario-tip');
        if (existing) existing.remove();
        
        const inputs = document.getElementById('calc-inputs');
        if (inputs) {
            inputs.insertBefore(tip, inputs.firstChild);
        }
    }
    
    // IMPORTANT: Quiz mode does NOT randomize angles - they stay on default
    // Reset all angle selectors to defaults
    const resetAngle = (selector, defaultValue) => {
        const el = document.getElementById(selector);
        if (el) el.value = defaultValue;
    };
    
    resetAngle('i_ang', '30'); // Standard offset/kick angle
    resetAngle('i_ang_side', '22.5'); // Standard saddle side angle
    resetAngle('i_ang_side_custom', '');

    // Get scenarios for this bend type
    const typeScenarios = quizScenarios[type];
    if (!typeScenarios || !typeScenarios.length) {
        // Fallback to simple random values if no scenarios exist
        const base1 = rVal(8, 28);
        const base2 = base1 + rVal(6, 24);
        const base3 = base2 + rVal(6, 18);
        if(document.getElementById('i1')) set('i1', Math.min(base1, QUIZ_MAX_STICK - 12));
        if(document.getElementById('i2')) set('i2', Math.min(base2, QUIZ_MAX_STICK - 8));
        if(document.getElementById('i3')) set('i3', Math.min(base3, QUIZ_MAX_STICK - 4));
        showNotification('🎲 Random quiz values generated!');
        return;
    }
    
    // Pick a random realistic scenario
    const selectedScenario = typeScenarios[Math.floor(Math.random() * typeScenarios.length)];
    
    // Set angle if scenario includes it
    if (selectedScenario.ang) {
        const angEl = document.getElementById('i_ang');
        if (angEl) angEl.value = selectedScenario.ang;
    }

    // Set inputs based on scenario
    if (selectedScenario.i1 !== undefined) set('i1', selectedScenario.i1);
    if (selectedScenario.i2 !== undefined) set('i2', selectedScenario.i2);
    if (selectedScenario.i3 !== undefined) set('i3', selectedScenario.i3);
    
    // Show scenario description
    if (selectedScenario.desc) {
        const tip = document.createElement('div');
        tip.style.cssText = 'background:#9C27B0; color:#fff; padding:12px; margin:15px 0; border-radius:8px; font-weight:bold; border-left:4px solid #E1BEE7;';
        tip.innerHTML = `📋 <strong>SCENARIO:</strong> ${selectedScenario.desc}`;
        tip.className = 'scenario-tip';
        
        const existing = document.querySelector('.scenario-tip');
        if (existing) existing.remove();
        
        const inputs = document.getElementById('calc-inputs');
        if (inputs) {
            inputs.insertBefore(tip, inputs.firstChild);
        }
    }
    
    showNotification('🎲 Realistic scenario loaded!');
}

/* =========================================
   9. BENDER UI LOGIC
   ========================================= */
function openBenderLibrary() { 
    document.getElementById('modal-benders').classList.remove('hidden');
    document.querySelector('.bender-filter-bar').innerHTML = `
        <button class="filter-btn" onclick="filterBenders('all')">ALL</button>
        <button class="filter-btn" onclick="filterBenders('hand')">HAND</button>
        <button class="filter-btn" onclick="filterBenders('electric')">ELECTRIC</button>
        <button class="filter-btn" onclick="filterBenders('custom')">CUSTOM</button>
    `;
    filterBenders(state.filter || 'all');
}
function closeBenderLibrary() { 
    document.getElementById('modal-benders').classList.add('hidden'); 
}
function filterBenders(cat) {
    state.filter = cat;
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    const btns = document.querySelectorAll('.filter-btn');
    if(cat==='all') btns[0].classList.add('active');
    if(cat==='hand') btns[1].classList.add('active');
    if(cat==='electric') btns[2].classList.add('active');
    if(cat==='custom') btns[3].classList.add('active');
    renderBenderListUI();
}
function renderBenderListUI() {
    const list = document.getElementById('bender-list');
    
    let filtered = benderLibrary;
    if (state.filter !== 'all') {
        filtered = benderLibrary.filter(b => b.cat === state.filter);
    }

    if (filtered.length === 0) {
        list.innerHTML = `<div style="padding:30px; text-align:center; color:var(--text-muted);">
            <ion-icon name="star-outline" style="font-size:2rem; margin-bottom:10px;"></ion-icon><br>
            No benders found.
        </div>`;
        return;
    }

    list.innerHTML = filtered.map(b => {
        const isFav = state.favorites.includes(b.id);
        const isCustom = b.cat === 'custom';
        const specLine = `${b.size} • Ded: ${b.ded}" • Gain: ${b.gain}"`;
        return `
        <div class="bender-item ${state.currentBender.id === b.id ? 'active' : ''}" onclick="selectBender('${b.id}', event)">
            <div style="flex:1;">
                <div class="b-brand" style="color:${b.color}">${b.brand} ${b.model}</div>
                <div class="b-specs">${specLine}</div>
                <div class="b-notes">${b.notes || ''}</div>
            </div>
            <div style="display:flex; gap:8px; align-items:center;">
                ${isCustom ? `<button class="icon-btn" onclick="deleteCustomBender('${b.id}', event)" style="color:#ef4444; padding:4px;" title="Delete"><ion-icon name="trash-outline"></ion-icon></button>` : ''}
                ${state.currentBender.id === b.id ? '<ion-icon name="checkmark-circle" style="color:var(--primary); font-size:1.5rem;"></ion-icon>' : ''}
            </div>
        </div>
    `}).join('');
}
function selectBender(id, event) {
    // Prevent event bubbling issues
    if (event) {
        event.stopPropagation();
    }
    
    const bender = benderLibrary.find(b => b.id === id);
    if (!bender) return;
    
    state.currentBender = bender;
    localStorage.setItem('qc_bender_id', id);
    updateHeaderDisplay();
    
    // Force close the modal
    const modal = document.getElementById('modal-benders');
    if (modal) {
        modal.classList.add('hidden');
    }
    
    // Update the UI to show selection
    renderBenderListUI();
}
function updateHeaderDisplay() {
    const b = state.currentBender;
    const displayName = b.model.includes('Hand') ? b.model : `${b.brand} ${b.model}`;
    document.getElementById('header-tool-name').innerText = displayName;
    document.querySelector('.tool-dot').style.background = b.color;
    // Store for quick reference
    document.querySelector('.tool-dot').title = `Deduct: ${b.ded}" | Gain: ${b.gain}"`;
}

/* =========================================
   CUSTOM BENDER LOGIC
   ========================================= */
window.openCustomBenderForm = () => {
    document.getElementById('modal-custom-bender').classList.remove('hidden');
    // Reset form
    document.getElementById('cb-brand').value = '';
    document.getElementById('cb-model').value = '';
    document.getElementById('cb-size').value = '1/2"';
    document.getElementById('cb-ded').value = '';
    document.getElementById('cb-gain').value = '';
}

window.closeCustomBenderForm = () => {
    document.getElementById('modal-custom-bender').classList.add('hidden');
}

window.saveCustomBender = () => {
    const brand = document.getElementById('cb-brand').value.trim() || 'Custom';
    const model = document.getElementById('cb-model').value.trim() || 'Bender';
    const size = document.getElementById('cb-size').value;
    const ded = parseFloat(document.getElementById('cb-ded').value);
    const gain = parseFloat(document.getElementById('cb-gain').value);

    if (isNaN(ded) || isNaN(gain)) {
        showAlert('invalidDeductGain');
        return;
    }

    const newBender = {
        id: 'custom_' + Date.now(),
        brand: brand, model: model, size: size, ded: ded, gain: gain,
        cat: 'custom', color: '#9C27B0', notes: 'Custom User Bender'
    };

    const customBenders = JSON.parse(localStorage.getItem('qc_custom_benders') || '[]');
    customBenders.push(newBender);
    localStorage.setItem('qc_custom_benders', JSON.stringify(customBenders));

    benderLibrary.push(newBender);
    selectBender(newBender.id);
    closeCustomBenderForm();
    showNotification('Custom bender created!');
}

window.deleteCustomBender = (id, event) => {
    event.stopPropagation();
    if(!confirm('Delete this custom bender?')) return;
    const idx = benderLibrary.findIndex(b => b.id === id);
    if (idx > -1) benderLibrary.splice(idx, 1);
    let customBenders = JSON.parse(localStorage.getItem('qc_custom_benders') || '[]');
    customBenders = customBenders.filter(b => b.id !== id);
    localStorage.setItem('qc_custom_benders', JSON.stringify(customBenders));
    if (state.currentBender.id === id) { state.currentBender = benderLibrary[0]; updateHeaderDisplay(); }
    renderBenderListUI();
    showNotification('Bender deleted');
}

/* =========================================
   10. MODAL LOGIC (About & Guide)
   ========================================= */
function openAbout() {
    document.getElementById('modal-about').classList.remove('hidden');
}

function closeAbout() {
    document.getElementById('modal-about').classList.add('hidden');
}

// GUIDE MODAL LOGIC
function openGuide(type) {
    // This pulls text from the knowledge.js file
    const content = getBendGuide(type); 
    document.getElementById('guide-content').innerHTML = content;
    document.getElementById('modal-guide').classList.remove('hidden');
}

function closeGuide() {
    document.getElementById('modal-guide').classList.add('hidden');
}

// Load guide references
window.loadGuide = (type) => {
    const titlesEn = {
        'nec_support': 'NEC Support Requirements', 
        'bend_math': 'Bending Mathematics',
        'trade_terms': 'Trade Terminology',
        'tape_reading': 'Reading a Tape Measure',
        'conduit_specs': 'Conduit Specifications',
        'drill_sizes': 'Hole Saw Guide'
    };
    const titlesEs = {
        'nec_support': 'Requisitos de soporte NEC',
        'bend_math': 'Matemáticas de doblado',
        'trade_terms': 'Términos del oficio',
        'tape_reading': 'Cómo leer una cinta',
        'conduit_specs': 'Especificaciones de conduit',
        'drill_sizes': 'Guía de sierras/copas'
    };
    const titles = state.lang === 'es' ? titlesEs : titlesEn;

    // Lightweight inline translation for guide content
    const guideTextMap = {
        // Common headings
        'HOW TO READ A TAPE MEASURE': 'CÓMO LEER UNA CINTA MÉTRICA',
        'Mark Type': 'Tipo de marca',
        'Line Height': 'Altura de línea',
        'Fraction': 'Fracción',
        'Full Inch': 'Pulgada completa',
        'Half Inch': 'Media pulgada',
        'Quarter Inch': 'Cuarto de pulgada',
        'Eighth Inch': 'Octavo de pulgada',
        'Sixteenth': 'Dieciseisavo',
        'How to Read It:': 'Cómo leerla:',
        'Example:': 'Ejemplo:',
        // Tape example lines
        'The longer the line, the bigger the fraction. Always read from the last full inch, then count forward through quarters, eighths, and sixteenths.': 'Entre más larga la línea, más grande la fracción. Siempre lee desde la última pulgada completa y luego avanza por cuartos, octavos y dieciseisavos.',
        // Generic words
        'Reference': 'Referencia'
    };
    const translateGuideContent = (html) => {
        if (state.lang !== 'es') return html;
        let out = html;
        Object.entries(guideTextMap).forEach(([en, es]) => {
            out = out.replaceAll(en, es);
        });
        return out;
    };
    
    // Classroom Content for Bending Math
    const classroomContent = `
    <div class="home-grid">
        <div class="ref-card">
            <div class="ref-header"><ion-icon name="school"></ion-icon> CLASSROOM SESSION 1: THE BASICS</div>
            <div style="padding:15px; line-height:1.6; font-size:0.9rem;">
                <p><strong>Welcome to Conduit 101.</strong> In the field, we use "multipliers" to make offsets. But why? It's all based on Right-Angle Trigonometry.</p>
                
                <h4 style="color:var(--primary); margin-top:15px; margin-bottom:5px;">1. The Right Triangle</h4>
                <p style="margin-bottom:10px;">Every offset creates a right triangle in the air.</p>
                <ul style="list-style:none; padding-left:10px; border-left:3px solid var(--primary); margin-bottom:15px;">
                    <li style="margin-bottom:5px;"><strong>Opposite Side (Rise):</strong> How high you need to go.</li>
                    <li style="margin-bottom:5px;"><strong>Hypotenuse (Travel):</strong> The pipe length between bends.</li>
                    <li><strong>Angle (Theta):</strong> The bend on your shoe (e.g., 30°).</li>
                </ul>
                
                <h4 style="color:var(--primary); margin-top:15px; margin-bottom:5px;">2. The Golden Rule: Cosecant</h4>
                <p>We want to find the <em>Travel</em> (Hypotenuse). The formula is:</p>
                <div style="background:rgba(255,255,255,0.05); padding:10px; border-radius:4px; text-align:center; font-family:monospace; margin:10px 0; border:1px solid var(--border);">
                    Travel = Rise ÷ sin(Angle)
                </div>
                <p>Since dividing by decimals is hard in your head, we use the <strong>Cosecant</strong> (1 ÷ sin). This gives us our <strong>Multiplier</strong>.</p>
                <p style="background:rgba(33, 150, 243, 0.1); padding:8px; border-radius:4px;"><em>Example for 30°:</em><br>sin(30) = 0.5<br>Multiplier = 1 ÷ 0.5 = <strong>2</strong></p>
            </div>
        </div>

        <div class="ref-card">
            <div class="ref-header"><ion-icon name="resize"></ion-icon> CLASSROOM SESSION 2: SHRINK</div>
            <div style="padding:15px; line-height:1.6; font-size:0.9rem;">
                <p><strong>Shrink</strong> is the pipe "lost" because it's taking a diagonal path instead of a straight one.</p>
                
                <h4 style="color:var(--primary); margin-top:15px; margin-bottom:5px;">Why it matters</h4>
                <p>If you don't account for shrink, your second bend will be correct, but your pipe will be too short to reach the box.</p>
                
                <div style="background:rgba(255,255,255,0.05); padding:10px; border-radius:4px; text-align:center; font-family:monospace; margin:10px 0; border:1px solid var(--border);">
                    Total Length = Distance + Shrink
                </div>
                
                <h4 style="color:var(--primary); margin-top:15px; margin-bottom:5px;">The Constant</h4>
                <p>Each angle has a "Shrink Constant".</p>
                <ul style="list-style:none; padding:0; margin-top:10px;">
                    <li style="display:flex; justify-content:space-between; border-bottom:1px solid #333; padding:5px 0;"><span>30°</span> <span>1/4" per inch of rise</span></li>
                    <li style="display:flex; justify-content:space-between; border-bottom:1px solid #333; padding:5px 0;"><span>45°</span> <span>3/8" per inch of rise</span></li>
                </ul>
            </div>
        </div>

        <div class="ref-card">
            <div class="ref-header"><ion-icon name="return-up-forward"></ion-icon> CLASSROOM SESSION 3: 90° STUBS</div>
            <div style="padding:15px; line-height:1.6; font-size:0.9rem;">
                <h4 style="color:var(--primary); margin-bottom:5px;">Deduct</h4>
                <p>When you bend a 90, the pipe curves. The bender shoe has a radius. Because of this curve, you don't need as much pipe as a sharp corner.</p>
                <p style="margin-bottom:15px;">We <strong>Deduct</strong> this amount from the stub height to find our mark.</p>
                
                <h4 style="color:var(--primary); margin-bottom:5px;">Gain</h4>
                <p>Gain is the difference between measuring square (Right Angle) vs measuring the curve (Arc).</p>
                <p style="background:rgba(33, 150, 243, 0.1); padding:8px; border-radius:4px; margin-top:10px;"><strong>Rule of Thumb:</strong> Gain is roughly the radius of the bender.</p>
            </div>
        </div>
    </div>`;

    const classroomContentEs = `
    <div class="home-grid">
        <div class="ref-card">
            <div class="ref-header"><ion-icon name="school"></ion-icon> SESIÓN 1: FUNDAMENTOS</div>
            <div style="padding:15px; line-height:1.6; font-size:0.9rem;">
                <p><strong>Bienvenido a Conduit 101.</strong> En campo usamos "multiplicadores" para hacer offsets. ¿Por qué? Todo viene de la trigonometría de ángulo recto.</p>
                
                <h4 style="color:var(--primary); margin-top:15px; margin-bottom:5px;">1. El triángulo rectángulo</h4>
                <p style="margin-bottom:10px;">Cada offset crea un triángulo recto en el aire.</p>
                <ul style="list-style:none; padding-left:10px; border-left:3px solid var(--primary); margin-bottom:15px;">
                    <li style="margin-bottom:5px;"><strong>Lado opuesto (Altura):</strong> Qué tan alto necesitas subir.</li>
                    <li style="margin-bottom:5px;"><strong>Hipotenusa (Recorrido):</strong> La longitud de tubo entre dobleces.</li>
                    <li><strong>Ángulo (Theta):</strong> El ángulo en la zapata (ej. 30°).</li>
                </ul>
                
                <h4 style="color:var(--primary); margin-top:15px; margin-bottom:5px;">2. La regla de oro: cosecante</h4>
                <p>Buscamos el <em>recorrido</em> (hipotenusa). La fórmula es:</p>
                <div style="background:rgba(255,255,255,0.05); padding:10px; border-radius:4px; text-align:center; font-family:monospace; margin:10px 0; border:1px solid var(--border);">
                    Recorrido = Altura ÷ sen(Ángulo)
                </div>
                <p>Dividir decimales de cabeza es difícil, así que usamos la <strong>cosecante</strong> (1 ÷ sen). Eso nos da el <strong>multiplicador</strong>.</p>
                <p style="background:rgba(33, 150, 243, 0.1); padding:8px; border-radius:4px;"><em>Ejemplo 30°:</em><br>sen(30) = 0.5<br>Multiplicador = 1 ÷ 0.5 = <strong>2</strong></p>
            </div>
        </div>

        <div class="ref-card">
            <div class="ref-header"><ion-icon name="resize"></ion-icon> SESIÓN 2: ACORTAMIENTO</div>
            <div style="padding:15px; line-height:1.6; font-size:0.9rem;">
                <p><strong>Acortamiento</strong> es la longitud que "pierdes" al ir en diagonal en vez de recto.</p>
                
                <h4 style="color:var(--primary); margin-top:15px; margin-bottom:5px;">Por qué importa</h4>
                <p>Si no lo consideras, el segundo doblez quedará bien, pero el tubo será corto y no llegará a la caja.</p>
                
                <div style="background:rgba(255,255,255,0.05); padding:10px; border-radius:4px; text-align:center; font-family:monospace; margin:10px 0; border:1px solid var(--border);">
                    Longitud total = Distancia + Acortamiento
                </div>
                
                <h4 style="color:var(--primary); margin-top:15px; margin-bottom:5px;">La constante</h4>
                <p>Cada ángulo tiene una "constante de acortamiento".</p>
                <ul style="list-style:none; padding:0; margin-top:10px;">
                    <li style="display:flex; justify-content:space-between; border-bottom:1px solid #333; padding:5px 0;"><span>30°</span> <span>1/4" por pulgada de altura</span></li>
                    <li style="display:flex; justify-content:space-between; border-bottom:1px solid #333; padding:5px 0;"><span>45°</span> <span>3/8" por pulgada de altura</span></li>
                </ul>
            </div>
        </div>

        <div class="ref-card">
            <div class="ref-header"><ion-icon name="return-up-forward"></ion-icon> SESIÓN 3: DOBLADOS 90°</div>
            <div style="padding:15px; line-height:1.6; font-size:0.9rem;">
                <h4 style="color:var(--primary); margin-bottom:5px;">Deducción</h4>
                <p>Al doblar 90°, el tubo curva. La zapata tiene un radio, así que necesitas menos tubo que un rincón cuadrado.</p>
                <p style="margin-bottom:15px;">Restamos esta <strong>deducción</strong> a la altura del stub para marcar.</p>
                
                <h4 style="color:var(--primary); margin-bottom:5px;">Ganancia</h4>
                <p>La ganancia es la diferencia entre medir en escuadra (ángulo recto) y medir la curva (arco).</p>
                <p style="background:rgba(33, 150, 243, 0.1); padding:8px; border-radius:4px; margin-top:10px;"><strong>Regla práctica:</strong> La ganancia es casi el radio del bender.</p>
            </div>
        </div>
    </div>`;

    if (type === 'bend_math') {
        document.getElementById('calc-title').innerText = titles[type];
        const classroom = state.lang === 'es' ? classroomContentEs : classroomContent;
        document.getElementById('calc-inputs').innerHTML = translateGuideContent(classroom);
    } else if (typeof guideContent !== 'undefined') {
        const key = (state.lang === 'es' && guideContent[`${type}_es`]) ? `${type}_es` : type;
        if (guideContent[key]) {
            document.getElementById('calc-title').innerText = titles[type] || (state.lang === 'es' ? 'Referencia' : 'Reference');
            const content = translateGuideContent(guideContent[key]);
            document.getElementById('calc-inputs').innerHTML = `<div class="home-grid">${content}</div>`;
        }
    }
    
    document.getElementById('result-box').classList.add('hidden');
    document.getElementById('calc-btn').classList.add('hidden');
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('overlay').classList.remove('visible');
};

/* =========================================
   11. FILL CALCULATOR LOGIC
   ========================================= */
window.updateFillState = (key, val) => {
    state.fillConfig[key] = val;
    if(key === 'type') updateConduitOptions();
}

window.updateConduitOptions = () => {
    const type = state.fillConfig.type;
    const sizes = Object.keys(necData.conduit[type]);
    const sel = document.getElementById('c_size');
    if(!sel) return;
    sel.innerHTML = sizes.map(s => `<option value="${s}" ${state.fillConfig.size===s?'selected':''}>${s}</option>`).join('');
    // Ensure current size is valid, else reset
    if(!sizes.includes(state.fillConfig.size)) state.fillConfig.size = sizes[0];
    sel.value = state.fillConfig.size;
}

window.renderWireRows = () => {
    const container = document.getElementById('wire-list-container');
    if(!container) return;
    container.innerHTML = state.wireList.map((w, i) => `
        <div class="fill-row">
            <input type="number" class="qty" value="${w.qty}" onchange="updateWire(${i}, 'qty', this.value)" min="1">
            <select class="flex-1" onchange="updateWire(${i}, 'size', this.value)">
                ${Object.keys(necData.wires[w.type]).map(s => `<option value="${s}" ${w.size===s?'selected':''}>${s}</option>`).join('')}
            </select>
            <select class="flex-1" onchange="updateWire(${i}, 'type', this.value)">
                <option value="THHN" ${w.type==='THHN'?'selected':''}>THHN</option>
                <option value="XHHW" ${w.type==='XHHW'?'selected':''}>XHHW</option>
            </select>
            <button class="btn-remove" onclick="removeWireRow(${i})"><ion-icon name="trash-outline"></ion-icon></button>
        </div>
    `).join('');
    calculateFill();
}

window.addWireRow = () => { state.wireList.push({qty:1, type:'THHN', size:'12'}); renderWireRows(); }
window.removeWireRow = (i) => { state.wireList.splice(i, 1); renderWireRows(); }
window.updateWire = (i, k, v) => { state.wireList[i][k] = k==='qty'?parseInt(v):v; renderWireRows(); }

function calculateFill() {
    if (!state.wireList || state.wireList.length === 0) {
        document.getElementById('result-box').classList.add('hidden');
        return;
    }
    
    const cArea = necData.conduit[state.fillConfig.type]?.[state.fillConfig.size];
    if (!cArea) {
        document.getElementById('result-box').classList.add('hidden');
        return;
    }
    
    let wArea = 0;
    let totalWires = 0;
    state.wireList.forEach(w => {
        const wireArea = necData.wires[w.type]?.[w.size];
        if (wireArea) {
            wArea += (wireArea * (parseInt(w.qty) || 0));
            totalWires += (parseInt(w.qty) || 0);
        }
    });

    let maxPct = 0.40;
    if(totalWires === 1) maxPct = 0.53;
    else if(totalWires === 2) maxPct = 0.31;
    
    const fillPct = totalWires === 0 ? 0 : (wArea / cArea) * 100;
    const maxArea = cArea * maxPct;
    const isSafe = fillPct <= (maxPct * 100);
    const statusColor = isSafe ? 'var(--primary)' : '#ef4444';
    const statusText = isSafe ? '✓ COMPLIANT' : '✗ OVERFILL';
    const barClass = isSafe ? (fillPct > (maxPct*85) ? 'warning' : '') : 'danger';
    const statusMsg = totalWires === 0 ? 'Add wires to calculate' : (isSafe ? 'Meets NEC Chapter 9' : 'Exceeds allowed fill');

    const html = `
        <div class="fill-stat-grid">
            <div class="fill-stat-box">
                <span class="fill-stat-label">Wire Count</span>
                <span class="fill-stat-val">${totalWires}</span>
            </div>
            <div class="fill-stat-box">
                <span class="fill-stat-label">Wire Area</span>
                <span class="fill-stat-val">${wArea.toFixed(4)}</span>
            </div>
            <div class="fill-stat-box">
                <span class="fill-stat-label">Conduit Area</span>
                <span class="fill-stat-val">${cArea.toFixed(4)}</span>
            </div>
            <div class="fill-stat-box">
                <span class="fill-stat-label">Max Fill (${(maxPct*100).toFixed(0)}%)</span>
                <span class="fill-stat-val">${maxArea.toFixed(4)}</span>
            </div>
        </div>
        <div class="fill-result-bar">
            <div class="fill-fill ${barClass}" style="width:${Math.min(fillPct, 100)}%"></div>
            <div class="fill-limit-line" style="left:${maxPct*100}%"></div>
        </div>
        <div class="fill-legend">
            <span>0%</span>
            <span style="font-weight:bold; color:${statusColor};">${fillPct.toFixed(1)}%</span>
            <span>100%</span>
        </div>
        <div style="text-align:center; font-weight:bold; font-size:1.1rem; color:${statusColor}; margin-top:15px;">
            ${statusText}
        </div>
        <div style="text-align:center; font-size:0.85rem; color:var(--text-muted); margin-top:8px;">
            ${statusMsg}
        </div>
    `;
    
    displayResults([], 0, 0, html);
}

/* =========================================
   12. ENHANCED FEATURES
   ========================================= */

// History functionality removed

// Toggle favorite bender
function toggleFavoriteBender(benderId) {
    const idx = state.favorites.indexOf(benderId);
    if (idx > -1) {
        state.favorites.splice(idx, 1);
        showNotification('Removed from favorites');
    } else {
        state.favorites.push(benderId);
        showNotification('✓ Added to favorites');
    }
    localStorage.setItem('qc_favorites', JSON.stringify(state.favorites));
    renderBenderListUI();
}

// Show notification toast
function showNotification(msg, duration = 2000) {
    const div = document.createElement('div');
    div.style.cssText = 'position:fixed; bottom:20px; left:50%; transform:translateX(-50%); background:var(--primary); color:#000; padding:12px 20px; border-radius:20px; font-weight:bold; z-index:9999; animation:slideUp 0.3s ease;';
    div.textContent = msg;
    document.body.appendChild(div);
    setTimeout(() => div.remove(), duration);
}

// Export calculation as JSON
function exportCalculation() {
    const data = {
        bender: state.currentBender,
        calcType: state.activeCalc,
        timestamp: new Date().toISOString()
    };
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], {type: 'application/json'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `voltbend_${state.activeCalc}_${Date.now()}.json`;
    a.click();
    showNotification('✓ Calculation exported');
}

/* =========================================
   UNIT CONVERTER
   ========================================= */
function renderConverter() {
    const div = document.getElementById('calc-inputs');
    const labels = state.lang === 'es' ? {
        title: 'Conversor de Unidades',
        length: 'LONGITUD',
        area: 'ÁREA',
        wire: 'CALIBRE DE CABLE',
        temp: 'TEMPERATURA',
        inches: 'Pulgadas',
        feet: 'Pies',
        cm: 'Centímetros',
        meters: 'Metros',
        sqIn: 'Pulgadas²',
        sqCm: 'Centímetros²',
        awg: 'AWG',
        mm2: 'mm²',
        f: 'Fahrenheit',
        c: 'Celsius',
        convert: 'Convertir'
    } : {
        title: 'Unit Converter',
        length: 'LENGTH',
        area: 'AREA',
        wire: 'WIRE GAUGE',
        temp: 'TEMPERATURE',
        inches: 'Inches',
        feet: 'Feet',
        cm: 'Centimeters',
        meters: 'Meters',
        sqIn: 'Square Inches',
        sqCm: 'Square Centimeters',
        awg: 'AWG',
        mm2: 'mm²',
        f: 'Fahrenheit',
        c: 'Celsius',
        convert: 'Convert'
    };

    const html = `
        <div style="padding:10px;">
            <div style="margin-bottom:30px;">
                <div style="color:var(--primary); font-size:0.85rem; font-weight:bold; margin-bottom:15px;">${labels.length}</div>
                <div style="display:grid; grid-template-columns:1fr auto 1fr; gap:10px; align-items:center;">
                    <div>
                        <input type="number" id="conv_in" placeholder="0" style="width:100%; padding:12px; background:var(--surface-light); border:1px solid var(--border); border-radius:8px; color:#fff; font-size:1rem;" oninput="convertLength('in')">
                        <div style="text-align:center; margin-top:5px; color:#888; font-size:0.8rem;">${labels.inches}</div>
                    </div>
                    <div style="color:var(--primary); font-size:1.5rem;">⇄</div>
                    <div>
                        <input type="number" id="conv_cm" placeholder="0" style="width:100%; padding:12px; background:var(--surface-light); border:1px solid var(--border); border-radius:8px; color:#fff; font-size:1rem;" oninput="convertLength('cm')">
                        <div style="text-align:center; margin-top:5px; color:#888; font-size:0.8rem;">${labels.cm}</div>
                    </div>
                </div>
                <div style="display:grid; grid-template-columns:1fr auto 1fr; gap:10px; align-items:center; margin-top:15px;">
                    <div>
                        <input type="number" id="conv_ft" placeholder="0" style="width:100%; padding:12px; background:var(--surface-light); border:1px solid var(--border); border-radius:8px; color:#fff; font-size:1rem;" oninput="convertLength('ft')">
                        <div style="text-align:center; margin-top:5px; color:#888; font-size:0.8rem;">${labels.feet}</div>
                    </div>
                    <div style="color:var(--primary); font-size:1.5rem;">⇄</div>
                    <div>
                        <input type="number" id="conv_m" placeholder="0" style="width:100%; padding:12px; background:var(--surface-light); border:1px solid var(--border); border-radius:8px; color:#fff; font-size:1rem;" oninput="convertLength('m')">
                        <div style="text-align:center; margin-top:5px; color:#888; font-size:0.8rem;">${labels.meters}</div>
                    </div>
                </div>
                <div style="display:grid; grid-template-columns:1fr auto 1fr; gap:10px; align-items:center; margin-top:15px;">
                    <div>
                        <input type="number" id="conv_mm" placeholder="0" style="width:100%; padding:12px; background:var(--surface-light); border:1px solid var(--border); border-radius:8px; color:#fff; font-size:1rem;" oninput="convertLength('mm')">
                        <div style="text-align:center; margin-top:5px; color:#888; font-size:0.8rem;">Millimeters</div>
                    </div>
                    <div style="color:var(--primary); font-size:1.5rem;">⇄</div>
                    <div>
                        <input type="number" id="conv_cm_alt" placeholder="0" style="width:100%; padding:12px; background:var(--surface-light); border:1px solid var(--border); border-radius:8px; color:#fff; font-size:1rem;" oninput="convertLength('cm_alt')">
                        <div style="text-align:center; margin-top:5px; color:#888; font-size:0.8rem;">${labels.cm}</div>
                    </div>
                </div>
            </div>

            <div style="margin-bottom:30px;">
                <div style="color:var(--primary); font-size:0.85rem; font-weight:bold; margin-bottom:15px;">${labels.area}</div>
                <div style="display:grid; grid-template-columns:1fr auto 1fr; gap:10px; align-items:center;">
                    <div>
                        <input type="number" id="conv_sqin" placeholder="0" style="width:100%; padding:12px; background:var(--surface-light); border:1px solid var(--border); border-radius:8px; color:#fff; font-size:1rem;" oninput="convertArea('sqin')">
                        <div style="text-align:center; margin-top:5px; color:#888; font-size:0.8rem;">${labels.sqIn}</div>
                    </div>
                    <div style="color:var(--primary); font-size:1.5rem;">⇄</div>
                    <div>
                        <input type="number" id="conv_sqcm" placeholder="0" style="width:100%; padding:12px; background:var(--surface-light); border:1px solid var(--border); border-radius:8px; color:#fff; font-size:1rem;" oninput="convertArea('sqcm')">
                        <div style="text-align:center; margin-top:5px; color:#888; font-size:0.8rem;">${labels.sqCm}</div>
                    </div>
                </div>
            </div>

            <div style="margin-bottom:30px;">
                <div style="color:var(--primary); font-size:0.85rem; font-weight:bold; margin-bottom:15px;">${labels.temp}</div>
                <div style="display:grid; grid-template-columns:1fr auto 1fr; gap:10px; align-items:center;">
                    <div>
                        <input type="number" id="conv_f" placeholder="32" style="width:100%; padding:12px; background:var(--surface-light); border:1px solid var(--border); border-radius:8px; color:#fff; font-size:1rem;" oninput="convertTemp('f')">
                        <div style="text-align:center; margin-top:5px; color:#888; font-size:0.8rem;">°${labels.f}</div>
                    </div>
                    <div style="color:var(--primary); font-size:1.5rem;">⇄</div>
                    <div>
                        <input type="number" id="conv_c" placeholder="0" style="width:100%; padding:12px; background:var(--surface-light); border:1px solid var(--border); border-radius:8px; color:#fff; font-size:1rem;" oninput="convertTemp('c')">
                        <div style="text-align:center; margin-top:5px; color:#888; font-size:0.8rem;">°${labels.c}</div>
                    </div>
                </div>
            </div>

            <div style="background:rgba(33,150,243,0.05); border:1px solid rgba(33,150,243,0.2); padding:15px; border-radius:8px; margin-top:20px;">
                <div style="color:var(--primary); font-weight:bold; margin-bottom:10px;">${labels.wire}</div>
                <table style="width:100%; color:#ccc; font-size:0.85rem;">
                    <tr style="border-bottom:1px solid #333;"><th style="padding:8px; text-align:left;">AWG</th><th style="padding:8px; text-align:right;">mm²</th><th style="padding:8px; text-align:right;">Diameter</th></tr>
                    <tr><td style="padding:8px;">14</td><td style="text-align:right;">2.08</td><td style="text-align:right;">0.064"</td></tr>
                    <tr><td style="padding:8px;">12</td><td style="text-align:right;">3.31</td><td style="text-align:right;">0.081"</td></tr>
                    <tr><td style="padding:8px;">10</td><td style="text-align:right;">5.26</td><td style="text-align:right;">0.102"</td></tr>
                    <tr><td style="padding:8px;">8</td><td style="text-align:right;">8.37</td><td style="text-align:right;">0.128"</td></tr>
                    <tr><td style="padding:8px;">6</td><td style="text-align:right;">13.3</td><td style="text-align:right;">0.162"</td></tr>
                    <tr><td style="padding:8px;">4</td><td style="text-align:right;">21.2</td><td style="text-align:right;">0.204"</td></tr>
                    <tr><td style="padding:8px;">2</td><td style="text-align:right;">33.6</td><td style="text-align:right;">0.258"</td></tr>
                    <tr><td style="padding:8px;">1/0</td><td style="text-align:right;">53.5</td><td style="text-align:right;">0.325"</td></tr>
                </table>
            </div>
        </div>
    `;
    
    div.innerHTML = html;
}

window.convertLength = (from) => {
    const get = (id) => parseFloat(document.getElementById(id)?.value) || 0;
    const set = (id, val, digits) => {
        const el = document.getElementById(id);
        if (el) el.value = Number(val).toFixed(digits);
    };

    let inches;
    if (from === 'in') inches = get('conv_in');
    else if (from === 'cm') inches = get('conv_cm') / 2.54;
    else if (from === 'ft') inches = get('conv_ft') * 12;
    else if (from === 'm') inches = get('conv_m') * 39.3701;
    else if (from === 'mm') inches = get('conv_mm') / 25.4;
    else if (from === 'cm_alt') inches = get('conv_cm_alt') / 2.54;
    else inches = 0;

    // Normalize once then fan out
    const cm = inches * 2.54;
    const ft = inches / 12;
    const m = inches * 0.0254;
    const mm = inches * 25.4;

    set('conv_in', inches, 2);
    set('conv_cm', cm, 2);
    set('conv_cm_alt', cm, 2);
    set('conv_ft', ft, 4);
    set('conv_m', m, 4);
    set('conv_mm', mm, 1);
};

window.convertArea = (from) => {
    const val = parseFloat(document.getElementById(`conv_${from}`).value) || 0;
    if (from === 'sqin') {
        document.getElementById('conv_sqcm').value = (val * 6.4516).toFixed(2);
    } else {
        document.getElementById('conv_sqin').value = (val / 6.4516).toFixed(2);
    }
};

window.convertTemp = (from) => {
    const val = parseFloat(document.getElementById(`conv_${from}`).value) || 0;
    if (from === 'f') {
        document.getElementById('conv_c').value = ((val - 32) * 5/9).toFixed(1);
    } else {
        document.getElementById('conv_f').value = ((val * 9/5) + 32).toFixed(1);
    }
};

// View calculation history
function viewHistory() {
    if (state.history.length === 0) {
        showAlert('noHistory');
        return;
    }
    let html = '<h3>Calculation History</h3><div style="max-height:400px; overflow-y:auto;">';
    state.history.forEach(h => {
        html += `<div style="padding:10px; border-bottom:1px solid #333; margin:5px 0;">
            <strong>${h.type}</strong> - ${h.bender}<br>
            <small>${h.timestamp}</small>
        </div>`;
    });
    html += '</div>';
    const content = document.getElementById('guide-content');
    if (content) {
        content.innerHTML = html;
        document.getElementById('modal-guide').classList.remove('hidden');
    }
}

// Validate inputs and show warnings
function validateInputs() {
    const warnings = [];
    const i1 = parseSmartInput(document.getElementById('i1')?.value);
    
    if (i1 > 100) warnings.push('⚠ Very tall bend - verify measurements');
    if (i1 < 0.5) warnings.push('⚠ Very short measurement - may not work');
    if (state.currentBender.ded === 0) warnings.push('⚠ Electric bender selected - deduct may vary by shoe');
    
    return warnings;
}

// Compare two benders
function compareBenders() {
    const modalContent = document.getElementById('guide-content');
    if (!modalContent) return;
    
    let html = `<h3>Bender Comparison</h3>
        <p style="color:#aaa; font-size:0.9rem;">Currently comparing with: <strong>${state.currentBender.model}</strong></p>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:15px;">`;
    
    benderLibrary.slice(0, 4).forEach((b, i) => {
        html += `<div style="background:var(--surface-light); padding:10px; border-radius:4px;">
            <strong style="color:${b.color}">${b.brand}</strong><br>
            ${b.model}<br>
            Ded: ${b.ded}" | Gain: ${b.gain}"<br>
            <small>${b.notes}</small>
        </div>`;
    });
    html += '</div>';
    
    modalContent.innerHTML = html;
    document.getElementById('modal-guide').classList.remove('hidden');
}

// Service worker for offline support
function registerServiceWorker() {
    if (!navigator.serviceWorker) return;
    
    const swCode = `
    self.addEventListener('install', e => {
        e.waitUntil(caches.open('voltbend-v1.1.4').then(cache => {
            return cache.addAll(['/index.html']);
        }));
    });
    self.addEventListener('fetch', e => {
        e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
    });
    `;
    
    const blob = new Blob([swCode], {type: 'application/javascript'});
    const swUrl = URL.createObjectURL(blob);
    navigator.serviceWorker.register(swUrl).catch(() => {});
}

// Add calculation tips based on bend type
const bendTips = {
    'stub': '💡 Mark from the end of your pipe. Don\'t measure from the bender\'s back.',
    'offset': '💡 Spin 180° exactly between the two bends for accuracy.',
    'saddle3': '💡 The center bend takes all the height. Side bends just support.',
    'kick': '💡 Keep the kick light—just enough to enter the box.',
    'fill': '💡 Add wires one group at a time. Check fill as you go.'
};

function showBendTip(bendType) {
    const tip = bendTips[bendType];
    if (!tip) return;
    const el = document.createElement('div');
    el.style.cssText = 'background:#FBC02D; color:#000; padding:10px; margin:10px 0; border-radius:4px; font-weight:bold; border-left:4px solid #FF6D00;';
    el.textContent = tip;
    const inputs = document.getElementById('calc-inputs');
    if (inputs && !inputs.querySelector('.tip-msg')) {
        el.className = 'tip-msg';
        inputs.insertBefore(el, inputs.firstChild);
    }
}

/* =========================================
   13. PWA INSTALL SUPPORT
   ========================================= */
let deferredPrompt = null;
let installDismissed = false;

function setupInstallPrompt() {
    const installBtn = document.getElementById('install-btn');
    
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        installDismissed = false;
        if (installBtn) {
            installBtn.style.display = 'flex';
            installBtn.title = 'Click to install app on ' + getOSName();
        }
    });
    
    window.addEventListener('appinstalled', () => {
        deferredPrompt = null;
        installDismissed = true;
        if (installBtn) {
            installBtn.style.display = 'none';
        }
        showNotification('✓ VoltBend installed! Check your home screen');
    });
    
    if (installBtn) {
        installBtn.addEventListener('click', installApp);
    }
}

function installApp() {
    if (!deferredPrompt) {
        // Provide OS-specific installation instructions
        if (state.osType === 'ios') {
            showNotification('📱 Press Share → Add to Home Screen');
        } else if (state.osType === 'android') {
            showNotification('📱 Menu → Install app');
        } else if (state.osType === 'windows') {
            showNotification('💻 Click the address bar icon to install');
        } else {
            showNotification('See browser menu for install option');
        }
        return;
    }
    
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
            showNotification('✓ Installing VoltBend...');
            deferredPrompt = null;
        } else {
            // Allow retry - don't set to null immediately
            showNotification('Installation cancelled. Try again anytime!');
            setTimeout(() => {
                deferredPrompt = null;
            }, 3000);
        }
    }).catch(() => {
        // On error, allow retry
        showNotification('Installation failed. Try again or use manual install.');
    });
}

function resetInstallPrompt() {
    installDismissed = false;
    deferredPrompt = null;
    showNotification('Install prompt reset. Try installing again!');
}

/* =========================================
   14. MATH GENERATOR
   ========================================= */
function generateMathBlock(type, i1, i2, i3, ang, b, dat, shrink, cut, marks) {
    let html = `<div class="math-box"><span class="math-title">STEP-BY-STEP MATH BREAKDOWN</span>`;
    const fmt = (n) => (Math.round(n*100)/100);
    const v = (n) => `<strong>${fmt(n)}" (${toFraction(n)})</strong>`;

    if (type === 'stub') {
        html += `
        <div class="math-step-title">GIVEN VALUES</div>
        <div class="math-row"><span>Target Height: ${i1}"</span> <span>Bender Deduct: ${b.ded}"</span></div>
        <div class="math-row"><span>Bender Gain: ${b.gain}"</span></div>

        <div class="math-step-title">STEP 1: FIND THE MARK</div>
        <div class="math-desc">Subtract the bender's deduct from your target height.</div>
        <div class="math-row"><span class="math-formula">Mark = Height - Deduct</span></div>
        <div class="math-row"><span>${i1} - ${b.ded} = ${v(i1 - b.ded)}</span></div>
        <div class="math-desc" style="margin-top:10px; padding:8px; background:rgba(33,150,243,0.1); border-left:3px solid var(--primary); border-radius:4px;">
            <strong style="color:var(--primary);">📐 Bender Mark:</strong> Align your tape mark with the <strong>Star-Point</strong> or back of 90° mark on the bender.
        </div>
        
        <div class="math-step-title">STEP 2: CALCULATE CUT LENGTH</div>
        <div class="math-desc">Add the "Gain" (pipe saved by the curve) to the height.</div>
        <div class="math-row"><span class="math-formula">Cut = Height + Gain</span></div>
        <div class="math-row"><span>${i1} + ${b.gain} = ${v(cut)}</span></div>`;
    } 
    else if (['offset', 'shallow_off', 'deep_off', 'zbend'].includes(type)) {
        const travel = i1 * dat.m;
        const m1 = i2 + shrink; // Far mark
        const m2 = m1 - travel; // Near mark

        html += `
        <div class="math-step-title">GIVEN VALUES</div>
        <div class="math-row"><span>Rise: ${i1}"</span> <span>Distance: ${i2}"</span></div>
        <div class="math-row"><span>Angle: ${ang}°</span> <span>Multiplier: ${dat.m}</span></div>
        
        <div class="math-step-title">STEP 1: CALCULATE TRAVEL</div>
        <div class="math-desc">Distance between bends (Hypotenuse).</div>
        <div class="math-row"><span class="math-formula">Travel = Rise × Multiplier</span></div>
        <div class="math-row"><span>${i1} × ${dat.m} = ${v(travel)}</span></div>
        
        <div class="math-step-title">STEP 2: CALCULATE SHRINK</div>
        <div class="math-desc">Total length lost due to the angle (Constant ${dat.s}).</div>
        <div class="math-row"><span class="math-formula">Shrink = Rise × Constant (${dat.s})</span></div>
        <div class="math-row"><span>${i1} × ${dat.s} = ${v(shrink)}</span></div>`;

        if (i2 > 0) {
            html += `
            <div class="math-step-title">STEP 3: FIND MARK 2 (FAR)</div>
            <div class="math-desc">Add shrink to the distance so the pipe reaches the obstacle.</div>
            <div class="math-row"><span class="math-formula">Mark 2 = Distance + Shrink</span></div>
            <div class="math-row"><span>${i2} + ${fmt(shrink)} = ${v(m1)}</span></div>
            
            <div class="math-step-title">STEP 4: FIND MARK 1 (NEAR)</div>
            <div class="math-desc">Measure back from Mark 2 by the Travel distance.</div>
            <div class="math-row"><span class="math-formula">Mark 1 = Mark 2 - Travel</span></div>
            <div class="math-row"><span>${fmt(m1)} - ${fmt(travel)} = ${v(m2)}</span></div>
            <div class="math-desc" style="margin-top:10px; padding:8px; background:rgba(33,150,243,0.1); border-left:3px solid var(--primary); border-radius:4px;">
                <strong style="color:var(--primary);">📐 Bender Mark:</strong> Align both marks with the <strong>Arrow</strong> on the bender. Use the <strong>Degree Scale</strong> to verify ${ang}° angle.
            </div>`;
        }
    }
    else if (type === 'saddle3') {
        // Get center angle
        let centerAng = parseFloat(document.getElementById('i_ang')?.value || 45);
        if (centerAng === 0 || isNaN(centerAng)) {
            centerAng = parseFloat(document.getElementById('i_ang_custom')?.value || 45);
        }
        
        // Get side angle
        let sideAng = parseFloat(document.getElementById('i_ang_side')?.value || 22.5);
        if (sideAng === 0 || isNaN(sideAng)) {
            sideAng = parseFloat(document.getElementById('i_ang_side_custom')?.value || 22.5);
        }
        
        const centerData = bendTable[centerAng] || bendTable[45];
        const sideData = bendTable[sideAng] || bendTable[22.5];
        
        const dist = i1 * sideData.m;
        const saddleShrink = i1 * centerData.s;
        const center = i2 + saddleShrink;

        html += `
        <div class="math-step-title">GIVEN VALUES</div>
        <div class="math-row"><span>Obstacle Height: ${i1}"</span> <span>Distance to Center: ${i2}"</span></div>
        <div class="math-row"><span>Center Angle: ${centerAng}°</span> <span>Side Angles: ${sideAng}°</span></div>

        <div class="math-step-title">STEP 1: CALCULATE SHRINK</div>
        <div class="math-desc">For ${centerAng}° center bend, shrink is ${centerData.s.toFixed(4)} per inch of rise.</div>
        <div class="math-row"><span class="math-formula">Shrink = Rise × ${centerData.s.toFixed(4)}</span></div>
        <div class="math-row"><span>${i1} × ${centerData.s.toFixed(4)} = ${v(saddleShrink)}</span></div>
        
        <div class="math-step-title">STEP 2: FIND CENTER MARK</div>
        <div class="math-desc">Add shrink to the center distance to compensate for the first bend.</div>
        <div class="math-row"><span class="math-formula">Center = Distance + Shrink</span></div>
        <div class="math-row"><span>${i2} + ${fmt(saddleShrink)} = ${v(center)}</span></div>
        <div class="math-desc" style="margin-top:10px; padding:8px; background:rgba(33,150,243,0.1); border-left:3px solid var(--primary); border-radius:4px;">
            <strong style="color:var(--primary);">📐 Bender Mark:</strong> Align center mark with the <strong>Rim Notch</strong> on the bender for the ${centerAng}° bend.
        </div>
        
        <div class="math-step-title">STEP 3: SIDE BEND DISTANCE</div>
        <div class="math-desc">Distance from center to side bends (Multiplier ${sideData.m.toFixed(2)} for ${sideAng}° bends).</div>
        <div class="math-row"><span class="math-formula">Side Dist = Rise × ${sideData.m.toFixed(2)}</span></div>
        <div class="math-row"><span>${i1} × ${sideData.m.toFixed(2)} = ${v(dist)}</span></div>
        
        <div class="math-step-title">STEP 4: SIDE MARKS</div>
        <div class="math-desc">Mark the pipe on both sides of the center.</div>
        <div class="math-row"><span>Mark 1 = ${fmt(center)} - ${fmt(dist)} = ${v(center - dist)}</span></div>
        <div class="math-row"><span>Mark 3 = ${fmt(center)} + ${fmt(dist)} = ${v(center + dist)}</span></div>
        <div class="math-desc" style="margin-top:10px; padding:8px; background:rgba(33,150,243,0.1); border-left:3px solid var(--primary); border-radius:4px;">
            <strong style="color:var(--primary);">📐 Bender Mark:</strong> Align outer marks with the <strong>Arrow</strong> on the bender for ${sideAng}° side bends.
        </div>`;
    }
    else if (['kick', 'stub_kick', 'off_kick'].includes(type)) {
        const travel = i2 * dat.m;
        const stubM = i1 - b.ded;
        
        html += `
        <div class="math-step-title">GIVEN VALUES</div>
        <div class="math-row"><span>Stub Height: ${i1}"</span> <span>Kick Height: ${i2}"</span></div>

        <div class="math-step-title">STEP 1: STUB MARK</div>
        <div class="math-desc">Standard 90° bend mark.</div>
        <div class="math-row"><span class="math-formula">Stub Mark = Height - Deduct</span></div>
        <div class="math-row"><span>${i1} - ${b.ded} = ${v(stubM)}</span></div>

        <div class="math-step-title">STEP 1: KICK TRAVEL</div>
        <div class="math-desc">Distance between the 90° bend and the kick.</div>
        <div class="math-row"><span class="math-formula">Travel = Kick Rise × Multiplier</span></div>
        <div class="math-row"><span>${i2} × ${dat.m} = ${v(travel)}</span></div>
        
        <div class="math-step-title">STEP 3: KICK CENTER MARK</div>
        <div class="math-desc">Place the kick back from the 90° (includes 6" spacing).</div>
        <div class="math-row"><span class="math-formula">Center = Stub Mark - 6" - Travel</span></div>
        <div class="math-row"><span>${fmt(stubM)} - 6 - ${fmt(travel)} = ${v(marks[1].p)}</span></div>`;
    }
    else if (type === 'saddle4') {
        const travel = i1 * dat.m;
        const sF = i3 + shrink; // Start Front
        const sR = sF - travel; // Start Rear
        const eF = sF + i2;     // End Front
        
        html += `
        <div class="math-step-title">GIVEN VALUES</div>
        <div class="math-row"><span>Height: ${i1}"</span> <span>Width: ${i2}"</span> <span>Dist: ${i3}"</span></div>

        <div class="math-step-title">STEP 1: CALCULATE SHRINK</div>
        <div class="math-desc">Shrink for the first offset.</div>
        <div class="math-row"><span class="math-formula">Shrink = Rise × Constant</span></div>
        <div class="math-row"><span>${i1} × ${dat.s} = ${v(shrink)}</span></div>

        <div class="math-step-title">STEP 2: MARK 2 (START FRONT)</div>
        <div class="math-desc">Distance to obstacle + Shrink.</div>
        <div class="math-row"><span class="math-formula">M2 = Distance + Shrink</span></div>
        <div class="math-row"><span>${i3} + ${fmt(shrink)} = ${v(sF)}</span></div>

        <div class="math-step-title">STEP 3: MARK 1 (START REAR)</div>
        <div class="math-desc">Measure back by Travel (Rise × Multiplier).</div>
        <div class="math-row"><span class="math-formula">M1 = M2 - Travel</span></div>
        <div class="math-row"><span>${fmt(sF)} - ${fmt(travel)} = ${v(sR)}</span></div>

        <div class="math-step-title">STEP 4: MARK 3 (END FRONT)</div>
        <div class="math-desc">Add the width of the obstacle to Mark 2.</div>
        <div class="math-row"><span class="math-formula">M3 = M2 + Width</span></div>
        <div class="math-row"><span>${fmt(sF)} + ${i2} = ${v(eF)}</span></div>`;
    }
    else if (type === 'back2back') {
         html += `
        <div class="math-step-title">GIVEN VALUES</div>
        <div class="math-row"><span>Length: ${i1}"</span></div>
        <div class="math-step-title">STEP 1: MARK</div>
        <div class="math-desc">Measure outside-to-outside distance.</div>
        <div class="math-row"><span class="math-formula">Mark = Length</span></div>
        <div class="math-row"><span>${i1} = ${v(i1)}</span></div>`;
    }
    else if (type === 'backbend') {
        html += `
        <div class="math-step-title">GIVEN VALUES</div>
        <div class="math-row"><span>Back Length: ${i1}"</span> <span>Deduct: ${b.ded}"</span> <span>Gain: ${b.gain}"</span></div>
        <div class="math-step-title">STEP 1: CALCULATE MARK</div>
        <div class="math-desc">Adjust for deduct and gain (reversed 90).</div>
        <div class="math-row"><span class="math-formula">Mark = Length - Deduct + Gain</span></div>
        <div class="math-row"><span>${i1} - ${b.ded} + ${b.gain} = ${v(i1 - b.ded + b.gain)}</span></div>`;
    }
    else if (type === 'compound_off') {
        const trueOff = Math.sqrt(i1*i1 + i2*i2);
        const travel = trueOff * dat.m;
        html += `
        <div class="math-step-title">GIVEN VALUES</div>
        <div class="math-row"><span>Rise: ${i1}"</span> <span>Roll: ${i2}"</span></div>
        <div class="math-step-title">STEP 1: TRUE OFFSET</div>
        <div class="math-desc">Calculate hypotenuse of Rise and Roll.</div>
        <div class="math-row"><span class="math-formula">True Offset = √(Rise² + Roll²)</span></div>
        <div class="math-row"><span>√(${i1}² + ${i2}²) = ${v(trueOff)}</span></div>
        <div class="math-step-title">STEP 2: TRAVEL</div>
        <div class="math-row"><span class="math-formula">Travel = True Offset × Multiplier</span></div>
        <div class="math-row"><span>${fmt(trueOff)} × ${dat.m} = ${v(travel)}</span></div>
        <div class="math-step-title">STEP 3: SHRINK</div>
        <div class="math-row"><span class="math-formula">Shrink = True Offset × Constant</span></div>
        <div class="math-row"><span>${fmt(trueOff)} × ${dat.s} = ${v(shrink)}</span></div>`;
    }
    else if (type === 'rolling') {
        const trueOff = Math.sqrt(i1*i1 + i2*i2);
        const riseAngle = Math.atan(i1/i2) * (180/Math.PI);
        const travelDist = trueOff * Math.cos((ang/2) * (Math.PI/180));
        html += `
        <div class="math-step-title">GIVEN VALUES</div>
        <div class="math-row"><span>Rise: ${i1}"</span> <span>Roll: ${i2}"</span></div>
        <div class="math-step-title">STEP 1: TRUE DIMENSIONS</div>
        <div class="math-row"><span class="math-formula">True Offset = √(Rise² + Roll²)</span></div>
        <div class="math-row"><span>${v(trueOff)}</span></div>
        <div class="math-row"><span class="math-formula">Rise Angle = atan(Rise/Roll)</span></div>
        <div class="math-row"><span>${fmt(riseAngle)}°</span></div>
        <div class="math-step-title">STEP 2: CALCULATIONS</div>
        <div class="math-desc">Based on half-angle formulas.</div>
        <div class="math-row"><span class="math-formula">Travel = True Offset × cos(Angle/2)</span></div>
        <div class="math-row"><span>${v(travelDist)}</span></div>`;
    }
    else if (type === 'parallel') {
        const adj = i2 * Math.tan((ang/2) * (Math.PI/180));
        html += `
        <div class="math-step-title">GIVEN VALUES</div>
        <div class="math-row"><span>Spacing: ${i2}"</span> <span>Angle: ${ang}°</span></div>
        <div class="math-step-title">STEP 1: START ADJUSTMENT</div>
        <div class="math-desc">Amount to move start mark for parallel alignment.</div>
        <div class="math-row"><span class="math-formula">Adjust = Spacing × tan(Angle/2)</span></div>
        <div class="math-row"><span>${i2} × tan(${ang/2}) = ${v(adj)}</span></div>`;
    }
    else if (type === 'rolling_stub') {
        const trueHyp = Math.sqrt(i1*i1 + i2*i2);
        const rollAngle = Math.atan(i2/i1) * (180/Math.PI);
        const m1 = i2 - b.ded;
        html += `
        <div class="math-step-title">GIVEN VALUES</div>
        <div class="math-row"><span>Rise: ${i1}"</span> <span>Roll: ${i2}"</span></div>
        <div class="math-step-title">STEP 1: TRUE HYPOTENUSE</div>
        <div class="math-row"><span class="math-formula">Hyp = √(Rise² + Roll²)</span></div>
        <div class="math-row"><span>${v(trueHyp)}</span></div>
        <div class="math-step-title">STEP 2: ROLL ANGLE</div>
        <div class="math-row"><span class="math-formula">Angle = atan(Roll/Rise)</span></div>
        <div class="math-row"><span>${fmt(rollAngle)}°</span></div>
        <div class="math-step-title">STEP 3: 90° MARK</div>
        <div class="math-row"><span class="math-formula">Mark = Roll - Deduct</span></div>
        <div class="math-row"><span>${i2} - ${b.ded} = ${v(m1)}</span></div>`;
    }
    else if (type === 'off_90' || type === '90_off') {
        const offsetTravel = i2 * dat.m;
        const stubDist = i1 - b.ded;
        const m2 = 12 + offsetTravel;
        const m3 = m2 + stubDist;
        html += `
        <div class="math-step-title">GIVEN VALUES</div>
        <div class="math-row"><span>Stub: ${i1}"</span> <span>Offset: ${i2}"</span></div>
        <div class="math-step-title">STEP 1: OFFSET CALCS</div>
        <div class="math-row"><span class="math-formula">Travel = Offset × Multiplier</span></div>
        <div class="math-row"><span>${i2} × ${dat.m} = ${v(offsetTravel)}</span></div>
        <div class="math-step-title">STEP 2: MARKS</div>
        <div class="math-desc">Assuming start at 12".</div>
        <div class="math-row"><span>Mark 1 (Start) = 12"</span></div>
        <div class="math-row"><span>Mark 2 (End) = 12 + Travel = ${v(m2)}</span></div>
        <div class="math-row"><span>Mark 3 (90) = Mark 2 + (Stub - Ded) = ${v(m3)}</span></div>`;
    }
    else if (type === 'comp_bend') {
        const bend1 = i1 - b.ded;
        const bend2offset = i2 * dat.m;
        const bend2pos = bend1 + bend2offset;
        const bend3 = i3 - b.ded;
        html += `
        <div class="math-step-title">GIVEN VALUES</div>
        <div class="math-row"><span>B1: ${i1}"</span> <span>B2: ${i2}"</span> <span>B3: ${i3}"</span></div>
        <div class="math-step-title">STEP 1: BEND 1</div>
        <div class="math-row"><span>Mark = ${i1} - ${b.ded} = ${v(bend1)}</span></div>
        <div class="math-step-title">STEP 2: BEND 2</div>
        <div class="math-row"><span>Travel = ${i2} × ${dat.m} = ${v(bend2offset)}</span></div>
        <div class="math-row"><span>Mark = B1 + Travel = ${v(bend2pos)}</span></div>
        <div class="math-step-title">STEP 3: BEND 3</div>
        <div class="math-row"><span>Mark = B2 + (${i3} - ${b.ded}) = ${v(bend2pos + bend3)}</span></div>`;
    }
    else {
        html += `<div style="color:#888; font-style:italic;">Detailed math steps not available for this specific bend type yet.</div>`;
    }

    html += `</div>`;

    // Localize math block when Spanish is selected
    if (state.lang === 'es') {
        let out = html;
        const repl = [
            ['STEP-BY-STEP MATH BREAKDOWN', 'DESGLOSE PASO A PASO'],
            ['GIVEN VALUES', 'DATOS INICIALES'],
            ['STEP', 'PASO'],
            ['CALCULATE TRAVEL', 'CALCULA EL RECORRIDO'],
            ['CALCULATE SHRINK', 'CALCULA EL ACORTAMIENTO'],
            ['FIND THE MARK', 'UBICA LA MARCA'],
            ['CALCULATE CUT LENGTH', 'CALCULA LONGITUD DE CORTE'],
            ['Distance between bends (Hypotenuse).', 'Distancia entre dobleces (hipotenusa).'],
            ['Total length lost due to the angle', 'Longitud perdida por el angulo'],
            ['Add shrink to the distance', 'Suma el acortamiento a la distancia'],
            ['Measure back from Mark 2 by the Travel distance.', 'Retrocede desde la marca 2 la distancia de recorrido.'],
            ['For 22.5° saddles, shrink is 3/16"', 'En sillas 22.5°, el acortamiento es 3/16"'],
            ["Subtract the bender's deduct from your target height.", 'Resta la deduccion del bender a la altura.'],
            ['Add the "Gain"', 'Suma la ganancia'],
            ['Detailed math steps not available for this specific bend type yet.', 'Pasos detallados no disponibles para este tipo de doblez.']
        ];
        repl.forEach(([en, es]) => { out = out.replaceAll(en, es); });
        out = out.replaceAll('STEP ', 'PASO ');
        return out;
    }

    return html;
}


