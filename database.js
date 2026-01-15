/* =========================================
   BENDER EQUIPMENT DATABASE
   Complete USA Inventory - Updated 2024
   ========================================= */

const benderDatabase = {
    // --- GREENLEE (GREEN) - INDUSTRY STANDARD ---
    greenlee: [
        { id: 'gl_50', cat: 'hand', brand: 'Greenlee', model: '1/2" Hand Bender', size: '1/2" EMT', ded: 5, gain: 2.65, color: '#2E7D32', notes: 'Solid. Never gonna wear out. Does the job all day.' },
        { id: 'gl_75', cat: 'hand', brand: 'Greenlee', model: '3/4" Hand Bender', size: '3/4" EMT', ded: 6, gain: 3.25, color: '#2E7D32', notes: 'Good feel, marks are sharp, keeps its shape.' },
        { id: 'gl_100', cat: 'hand', brand: 'Greenlee', model: '1" Hand Bender', size: '1" EMT', ded: 8, gain: 4.0, color: '#2E7D32', notes: 'Gets the job done. Heavy, but consistent bends.' },
        { id: 'gl_125', cat: 'hand', brand: 'Greenlee', model: '1 1/4" Hand Bender', size: '1 1/4" EMT', ded: 11, gain: 5.0, color: '#2E7D32', notes: 'Arm workout. Good for tight runs.' },
        { id: 'gl_r50', cat: 'hand', brand: 'Greenlee', model: '1/2" Rigid Bender', size: '1/2" Rigid', ded: 6, gain: 3.2, color: '#2E7D32', notes: 'You\'ll know when you\'re done. Rough work.' },
        { id: 'gl_r75', cat: 'hand', brand: 'Greenlee', model: '3/4" Rigid Bender', size: '3/4" Rigid', ded: 8, gain: 3.8, color: '#2E7D32', notes: 'For the hard stuff. Takes muscle.' },
        { id: 'gl_555', cat: 'electric', brand: 'Greenlee', model: '555 Electric', size: 'Multi-Shoe (1/2"-2")', ded: 0, gain: 0, color: '#2E7D32', notes: 'Been around forever. Guys trust it. Does 1/2" to 2".' },
        { id: 'gl_854', cat: 'electric', brand: 'Greenlee', model: '854DX Conduit Bender', size: 'Multi-Shoe (1/2"-2")', ded: 0, gain: 0, color: '#2E7D32', notes: 'Newer machine. Pushbuttons work. Good if you can afford it.' },
        { id: 'gl_881', cat: 'electric', brand: 'Greenlee', model: '881 Hydraulic', size: 'Multi-Size (1/2"-2")', ded: 0, gain: 0, color: '#2E7D32', notes: 'Beast. You\'re bending 2" all day and laughing about it.' },
        { id: 'gl_777', cat: 'electric', brand: 'Greenlee', model: '777 Hydraulic', size: 'Multi-Size (1/2"-2")', ded: 0, gain: 0, color: '#2E7D32', notes: 'Same thing, lighter. Still heavy, but you can move it.' },
    ],

    // --- IDEAL (BLUE) - QUALITY ALTERNATIVE ---
    ideal: [
        { id: 'id_50', cat: 'hand', brand: 'Ideal', model: '1/2" Hand Bender', size: '1/2" EMT', ded: 5, gain: 2.65, color: '#0277BD', notes: 'Not Greenlee, but not bad. Marks don\'t smudge.' },
        { id: 'id_75', cat: 'hand', brand: 'Ideal', model: '3/4" Hand Bender', size: '3/4" EMT', ded: 6, gain: 3.25, color: '#0277BD', notes: 'Lighter in hand. Some guys swear by em.' },
        { id: 'id_100', cat: 'hand', brand: 'Ideal', model: '1" Hand Bender', size: '1" EMT', ded: 8, gain: 4.0, color: '#0277BD', notes: 'Holds up. Good balance, not too heavy.' },
        { id: 'id_125', cat: 'hand', brand: 'Ideal', model: '1 1/4" Hand Bender', size: '1 1/4" EMT', ded: 11, gain: 5.0, color: '#0277BD', notes: 'Solid for bigger pipes.' },
        { id: 'id_r50', cat: 'hand', brand: 'Ideal', model: '1/2" Rigid Bender', size: '1/2" Rigid', ded: 6, gain: 3.2, color: '#0277BD', notes: 'Gets the job done for rigid.' },
        { id: 'id_r75', cat: 'hand', brand: 'Ideal', model: '3/4" Rigid Bender', size: '3/4" Rigid', ded: 8, gain: 3.8, color: '#0277BD', notes: 'Decent for heavier pipe.' },
        { id: 'id_555', cat: 'electric', brand: 'Ideal', model: '555 Clone', size: 'Multi-Shoe (1/2"-2")', ded: 0, gain: 0, color: '#0277BD', notes: 'Similar to Greenlee 555.' },
    ],

    // --- GARDNER BENDER (RED) - THE LEGENDS ---
    gardner: [
        { id: 'gb_50', cat: 'hand', brand: 'Gardner Bender', model: '1/2" Big Ben', size: '1/2" EMT', ded: 5, gain: 2.65, color: '#D32F2F', notes: 'That red handle. They built these things to last.' },
        { id: 'gb_75', cat: 'hand', brand: 'Gardner Bender', model: '3/4" Big Ben', size: '3/4" EMT', ded: 6, gain: 3.25, color: '#D32F2F', notes: 'The old ones are still better than new ones.' },
        { id: 'gb_100', cat: 'hand', brand: 'Gardner Bender', model: '1" Big Ben', size: '1" EMT', ded: 8, gain: 4.0, color: '#D32F2F', notes: 'If you find one used, grab it. Doesn\'t wear out.' },
        { id: 'gb_125', cat: 'hand', brand: 'Gardner Bender', model: '1 1/4" Big Ben', size: '1 1/4" EMT', ded: 11, gain: 5.0, color: '#D32F2F', notes: 'Legendary quality.' },
        { id: 'gb_one', cat: 'electric', brand: 'Gardner Bender', model: 'One Shot', size: 'Electric (1/2"-1")', ded: 0, gain: 0, color: '#D32F2F', notes: 'Electric Gardner. You don\'t see these much anymore.' },
    ],

    // --- MILWAUKEE (DARK RED) - TOOL MAKERS ---
    milwaukee: [
        { id: 'mw_50', cat: 'hand', brand: 'Milwaukee', model: '1/2" Aluminum', size: '1/2" EMT', ded: 5, gain: 2.6, color: '#B71C1C', notes: 'Super light. Good for lots of bends. Your arm won\'t hate you.' },
        { id: 'mw_75', cat: 'hand', brand: 'Milwaukee', model: '3/4" Aluminum', size: '3/4" EMT', ded: 6, gain: 3.2, color: '#B71C1C', notes: 'Aluminum body. Bends are pretty clean.' },
        { id: 'mw_100', cat: 'hand', brand: 'Milwaukee', model: '1" Aluminum', size: '1" EMT', ded: 8, gain: 3.9, color: '#B71C1C', notes: 'Lightweight for bigger work.' },
        { id: 'mw_125', cat: 'hand', brand: 'Milwaukee', model: '1 1/4" Aluminum', size: '1 1/4" EMT', ded: 11, gain: 4.9, color: '#B71C1C', notes: 'Good for one-man jobs.' },
    ],

    // --- KLEIN TOOLS (ORANGE) - ELECTRICIAN APPROVED ---
    klein: [
        { id: 'kl_50', cat: 'hand', brand: 'Klein Tools', model: '1/2" Benfield', size: '1/2" EMT', ded: 5, gain: 2.63, color: '#FF6D00', notes: 'Electrician approved.' },
        { id: 'kl_75', cat: 'hand', brand: 'Klein Tools', model: '3/4" Benfield', size: '3/4" EMT', ded: 6, gain: 3.25, color: '#FF6D00', notes: 'Perfect for residential work.' },
        { id: 'kl_100', cat: 'hand', brand: 'Klein Tools', model: '1" Benfield', size: '1" EMT', ded: 8, gain: 4.0, color: '#FF6D00', notes: 'Solid construction, good marks.' },
        { id: 'kl_125', cat: 'hand', brand: 'Klein Tools', model: '1 1/4" Benfield', size: '1 1/4" EMT', ded: 11, gain: 5.0, color: '#FF6D00', notes: 'Professional grade.' },
    ],

    // --- RIDGID (YELLOW) - HEAVY DUTY ---
    ridgid: [
        { id: 'rg_50', cat: 'hand', brand: 'Ridgid', model: '1/2" Hand Bender', size: '1/2" EMT', ded: 5, gain: 2.65, color: '#FBC02D', notes: 'Known for durability. Good marks.' },
        { id: 'rg_75', cat: 'hand', brand: 'Ridgid', model: '3/4" Hand Bender', size: '3/4" EMT', ded: 6, gain: 3.25, color: '#FBC02D', notes: 'Heavy duty construction.' },
        { id: 'rg_100', cat: 'hand', brand: 'Ridgid', model: '1" Hand Bender', size: '1" EMT', ded: 8, gain: 4.0, color: '#FBC02D', notes: 'Industrial strength.' },
        { id: 'rg_250', cat: 'electric', brand: 'Ridgid', model: '250 Electric', size: 'Multi-Shoe (1/2"-1")', ded: 0, gain: 0, color: '#FBC02D', notes: 'Heavy machine, reliable.' },
    ],

    // --- VERNON (PURPLE) - OLD SCHOOL ---
    vernon: [
        { id: 'vn_50', cat: 'hand', brand: 'Vernon', model: '1/2" Hand Bender', size: '1/2" EMT', ded: 5, gain: 2.65, color: '#7B1FA2', notes: 'Vintage. Still works if you find one.' },
        { id: 'vn_75', cat: 'hand', brand: 'Vernon', model: '3/4" Hand Bender', size: '3/4" EMT', ded: 6, gain: 3.25, color: '#7B1FA2', notes: 'Old timer\'s favorite.' },
    ],

    // --- COMMON GENERIC / HOUSE BRANDS ---
    generic: [
        { id: 'gn_50', cat: 'hand', brand: 'Generic', model: '1/2" Hand Bender', size: '1/2" EMT', ded: 5, gain: 2.65, color: '#616161', notes: 'Budget option. Works okay.' },
        { id: 'gn_75', cat: 'hand', brand: 'Generic', model: '3/4" Hand Bender', size: '3/4" EMT', ded: 6, gain: 3.25, color: '#616161', notes: 'What the supply house has.' },
        { id: 'gn_100', cat: 'hand', brand: 'Generic', model: '1" Hand Bender', size: '1" EMT', ded: 8, gain: 4.0, color: '#616161', notes: 'Will bend pipe.' },
    ],

    // --- CHANNEL (GRAY) - PRO GRADE ---
    channel: [
        { id: 'ch_50', cat: 'hand', brand: 'Channel', model: '1/2" Hand Bender', size: '1/2" EMT', ded: 5, gain: 2.65, color: '#424242', notes: 'Pro grade quality.' },
        { id: 'ch_75', cat: 'hand', brand: 'Channel', model: '3/4" Hand Bender', size: '3/4" EMT', ded: 6, gain: 3.25, color: '#424242', notes: 'Good construction.' },
    ],

    // --- SOUTHWIRE (BLUE-GRAY) - CORD/WIRE COMPANY ---
    southwire: [
        { id: 'sw_50', cat: 'hand', brand: 'Southwire', model: '1/2" Hand Bender', size: '1/2" EMT', ded: 5, gain: 2.65, color: '#455A64', notes: 'From a wire company. Decent quality.' },
        { id: 'sw_75', cat: 'hand', brand: 'Southwire', model: '3/4" Hand Bender', size: '3/4" EMT', ded: 6, gain: 3.25, color: '#455A64', notes: 'Solid performer.' },
    ],

    // --- CRES (METALLIC) - BUDGET ---
    cres: [
        { id: 'cr_50', cat: 'hand', brand: 'CRES', model: '1/2" Hand Bender', size: '1/2" EMT', ded: 5, gain: 2.62, color: '#A1887F', notes: 'Budget friendly. Gets the job done.' },
        { id: 'cr_75', cat: 'hand', brand: 'CRES', model: '3/4" Hand Bender', size: '3/4" EMT', ded: 6, gain: 3.2, color: '#A1887F', notes: 'Cheap option.' },
    ],

    // --- PVC SPECIFIC (YELLOW-GREEN) ---
    pvc: [
        { id: 'pvc_50', cat: 'hand', brand: 'Generic', model: '1/2" PVC Bender', size: '1/2" PVC', ded: 4, gain: 2.5, color: '#8BC34A', notes: 'For PVC conduit. Different math.' },
        { id: 'pvc_75', cat: 'hand', brand: 'Generic', model: '3/4" PVC Bender', size: '3/4" PVC', ded: 5, gain: 3.0, color: '#8BC34A', notes: 'PVC specific tool.' },
    ],

    // --- FLEX (TEAL) - FLEXIBLE CONDUIT ---
    flex: [
        { id: 'flex_50', cat: 'hand', brand: 'Generic', model: '1/2" Flex Bender', size: '1/2" Flex', ded: 3, gain: 2.0, color: '#00897B', notes: 'For flexible conduit. Easier bends.' },
        { id: 'flex_75', cat: 'hand', brand: 'Generic', model: '3/4" Flex Bender', size: '3/4" Flex', ded: 4, gain: 2.5, color: '#00897B', notes: 'Smaller deduct than EMT.' },
    ],
};

// --- MASTER LIBRARY (Flattened for easy access) ---
const benderLibrary = [
    ...benderDatabase.greenlee,
    ...benderDatabase.ideal,
    ...benderDatabase.gardner,
    ...benderDatabase.milwaukee,
    ...benderDatabase.klein,
    ...benderDatabase.ridgid,
    ...benderDatabase.vernon,
    ...benderDatabase.generic,
    ...benderDatabase.channel,
    ...benderDatabase.southwire,
    ...benderDatabase.cres,
    ...benderDatabase.pvc,
    ...benderDatabase.flex,
];

/* --- NEC DATA (Areas in sq in) --- */
const necData = {
    wires: {
        'THHN': { '14':0.0097, '12':0.0133, '10':0.0211, '8':0.0366, '6':0.0507, '4':0.0824, '3':0.0973, '2':0.1158, '1':0.1562, '1/0':0.1855, '2/0':0.2223, '3/0':0.2679, '4/0':0.3237, '250':0.3970, '300':0.4608, '350':0.5242, '400':0.5863, '500':0.7073 },
        'XHHW': { '14':0.0139, '12':0.0181, '10':0.0243, '8':0.0437, '6':0.0590, '4':0.0925, '3':0.1087, '2':0.1288, '1':0.1766, '1/0':0.2075, '2/0':0.2475, '3/0':0.2967, '4/0':0.3578, '250':0.4371, '300':0.5067, '350':0.5752, '400':0.6423, '500':0.7725 },
        'THWN': { '14':0.0097, '12':0.0133, '10':0.0211, '8':0.0366, '6':0.0507, '4':0.0824, '3':0.0973, '2':0.1158, '1':0.1562, '1/0':0.1855, '2/0':0.2223, '3/0':0.2679, '4/0':0.3237 },
        'XHHW-2': { '14':0.0139, '12':0.0181, '10':0.0243, '8':0.0437, '6':0.0590, '4':0.0925, '3':0.1087, '2':0.1288, '1':0.1766, '1/0':0.2075, '2/0':0.2475, '3/0':0.2967, '4/0':0.3578 }
    },
    conduit: {
        'EMT': { '1/2':0.304, '3/4':0.533, '1':0.864, '1 1/4':1.496, '1 1/2':2.036, '2':3.356, '2 1/2':5.858, '3':8.846, '3 1/2':11.529, '4':14.753 },
        'Rigid': { '1/2':0.314, '3/4':0.549, '1':0.887, '1 1/4':1.526, '1 1/2':2.071, '2':3.408, '2 1/2':5.858, '3':8.936, '3 1/2':11.638, '4':14.909 },
        'PVC40': { '1/2':0.286, '3/4':0.512, '1':0.838, '1 1/4':1.456, '1 1/2':1.976, '2':3.269, '2 1/2':5.672, '3':8.659, '3 1/2':11.294, '4':14.455 },
        'Flex': { '1/2':0.216, '3/4':0.369, '1':0.599, '1 1/4':1.039, '1 1/2':1.414, '2':2.343 }
    }
};

/* --- CONSTANTS & ANGLES (Trigonometric Bend Table) --- */
const bendTable = {
    5:  { m: 11.474, s: 0.022, c: 11.473 },      // csc(5°), shrink = 0.022"/inch (mathematically accurate)
    10: { m: 5.759, s: 0.087, c: 5.759 },       // csc(10°), shrink = 0.087"/inch
    15: { m: 3.864, s: 0.131, c: 3.864 },       // csc(15°), shrink = 0.131"/inch  
    22.5: { m: 2.613, s: 0.195, c: 2.613 },     // csc(22.5°), shrink = 0.195"/inch
    30: { m: 2.0, s: 0.250, c: 2.0 },           // csc(30°), shrink = 0.250"/inch (1/4")
    45: { m: 1.414, s: 0.383, c: 1.414 },       // csc(45°) = √2, shrink = 0.383"/inch (3/8" ≈ 0.375)
    60: { m: 1.155, s: 0.500, c: 1.155 }        // csc(60°) = 2/√3, shrink = 0.500"/inch (1/2")
};

/* --- QUIZ MODE SCENARIOS (Realistic Field Situations) --- */
const quizScenarios = {
    stub: [
        { i1: 12, desc: 'Box stub - standard 12" height' },
        { i1: 18, desc: 'Wall box at 18" counter height' },
        { i1: 24, desc: 'Device box at 2 feet' },
        { i1: 36, desc: 'Switch at 3 feet standard' },
        { i1: 48, desc: 'Outlet at 4 feet workbench' },
        { i1: 16, desc: 'Receptacle at 16" ADA height' },
        { i1: 42, desc: 'Wall switch at 42" standard' },
        { i1: 54, desc: 'High outlet at 54" above counter' },
        { i1: 60, desc: 'Ceiling box at 5 feet from floor' },
        { i1: 72, desc: 'High mount at 6 feet' },
        { i1: 84, desc: 'Tall ceiling box at 7 feet' },
        { i1: 15, desc: 'Low kitchen outlet at 15"' },
        { i1: 20, desc: 'Bathroom outlet at 20" height' },
        { i1: 30, desc: 'Standard receptacle at 30"' },
        { i1: 96, desc: 'High ceiling mount at 8 feet' },
        { i1: 13.5, desc: 'HARD: Box at awkward 13.5" height' },
        { i1: 27.75, desc: 'HARD: Precision stub at 27.75"' },
        { i1: 44.625, desc: 'HARD: Switch at 44.625" exact spec' },
        { i1: 67.875, desc: 'HARD: High box at 67.875" tight tolerance' },
        { i1: 89.25, desc: 'HARD: Ceiling fixture at 89.25"' },
        { i1: 105, desc: 'HARD: Tall 105" ceiling stub' },
        { i1: 51.5, desc: 'HARD: Counter box at 51.5"' }
    ],
    offset: [
        { i1: 2, i2: 24, ang: 30, desc: 'Small 2" offset around beam at 2 feet' },
        { i1: 3.5, i2: 36, ang: 30, desc: 'Standard 3.5" box offset at 3 feet' },
        { i1: 4, i2: 48, ang: 30, desc: '4" obstacle at 4 feet away' },
        { i1: 6, i2: 30, ang: 45, desc: '6" deep offset over duct' },
        { i1: 5, i2: 42, ang: 30, desc: '5" rise to clear pipe' },
        { i1: 2.5, i2: 20, ang: 30, desc: '2.5" offset around corner trim' },
        { i1: 3, i2: 28, ang: 30, desc: '3" rise over water pipe' },
        { i1: 4.5, i2: 32, ang: 30, desc: '4.5" offset for drywall clearance' },
        { i1: 5.5, i2: 40, ang: 45, desc: '5.5" rise over HVAC duct' },
        { i1: 7, i2: 36, ang: 45, desc: '7" offset around large beam' },
        { i1: 8, i2: 44, ang: 45, desc: '8" rise to ceiling level' },
        { i1: 1.5, i2: 18, ang: 22.5, desc: 'Tiny 1.5" offset (22.5deg)' },
        { i1: 3, i2: 50, ang: 22.5, desc: 'Long shallow 3" rise over 50"' },
        { i1: 4, i2: 60, ang: 30, desc: '4" offset at 5 feet distance' },
        { i1: 6, i2: 52, ang: 45, desc: '6" rise tight space at 52"' },
        { i1: 2, i2: 16, ang: 30, desc: '2" box offset close quarters' },
        { i1: 3.5, i2: 45, ang: 30, desc: '3.5" standard box offset at 45"' },
        { i1: 5, i2: 38, ang: 30, desc: '5" offset over plumbing' },
        { i1: 7.5, i2: 48, ang: 45, desc: '7.5" tall offset around joist' },
        { i1: 9.375, i2: 67, ang: 60, desc: 'HARD: 9.375" rise super tight 60deg at 67"' },
        { i1: 10.75, i2: 73, ang: 60, desc: 'HARD: 10.75" rise aggressive angle at 73"' },
        { i1: 2.875, i2: 58, ang: 10, desc: 'HARD: 2.875" shallow 10deg over 58"' },
        { i1: 11.5, i2: 84, ang: 60, desc: 'HARD: 11.5" huge rise tight 60deg at 7 feet' },
        { i1: 1.125, i2: 46, ang: 5, desc: 'HARD: Tiny 1.125" rise ultra-shallow 5deg' },
        { i1: 8.625, i2: 29, ang: 60, desc: 'HARD: 8.625" rise cramped 60deg at 29"' },
        { i1: 6.75, i2: 91, ang: 22.5, desc: 'HARD: 6.75" long offset 91" away' },
        { i1: 4.375, i2: 17.5, ang: 45, desc: 'HARD: 4.375" tight at 17.5" (45deg)' },
        { i1: 12, i2: 96, ang: 45, desc: 'HARD: Full foot rise at 8 feet (45deg)' }
    ],
    saddle3: [
        { i1: 2, i2: 36, desc: '2" pipe crossing at 3 feet' },
        { i1: 3, i2: 48, desc: '3" duct at 4 feet ahead' },
        { i1: 4, i2: 24, desc: '4" beam obstacle at 2 feet' },
        { i1: 2.5, i2: 30, desc: '2.5" conduit crossing' },
        { i1: 3.5, i2: 42, desc: '3.5" HVAC pipe at 42"' },
        { i1: 1.5, i2: 20, desc: '1.5" small pipe at 20"' },
        { i1: 2, i2: 28, desc: '2" water pipe crossing' },
        { i1: 3, i2: 32, desc: '3" gas line at 32"' },
        { i1: 4, i2: 40, desc: '4" drain pipe at 40"' },
        { i1: 5, i2: 50, desc: '5" ductwork at 50"' },
        { i1: 2.5, i2: 25, desc: '2.5" EMT crossing path' },
        { i1: 3, i2: 38, desc: '3" rigid conduit to cross' },
        { i1: 3.5, i2: 46, desc: '3.5" PVC pipe obstacle' },
        { i1: 4.5, i2: 44, desc: '4.5" square duct at 44"' },
        { i1: 1.75, i2: 22, desc: '1.75" copper pipe crossing' },
        { i1: 5.625, i2: 19.5, desc: 'HARD: 5.625" obstacle tight at 19.5"' },
        { i1: 6.875, i2: 83, desc: 'HARD: 6.875" tall pipe far at 83"' },
        { i1: 1.375, i2: 15.75, desc: 'HARD: 1.375" tiny rise at 15.75"' },
        { i1: 4.125, i2: 67, desc: 'HARD: 4.125" crossing at 67" away' },
        { i1: 7.25, i2: 91, desc: 'HARD: 7.25" big obstacle at 91"' },
        { i1: 2.875, i2: 26.5, desc: 'HARD: 2.875" pipe at 26.5" precision' },
        { i1: 3.625, i2: 53.25, desc: 'HARD: 3.625" duct at 53.25"' }
    ],
    saddle4: [
        { i1: 3, i2: 8, i3: 24, ang: 30, desc: '3" high, 8" wide beam at 2 feet' },
        { i1: 4, i2: 12, i3: 36, ang: 30, desc: '4" obstacle, 12" wide at 3 feet' },
        { i1: 2.5, i2: 6, i3: 30, ang: 30, desc: '2.5" pipe, 6" diameter' },
        { i1: 5, i2: 10, i3: 48, ang: 30, desc: '5" duct, 10" wide at 4 feet' },
        { i1: 3.5, i2: 9, i3: 28, ang: 30, desc: '3.5" beam 9" wide at 28"' },
        { i1: 4, i2: 14, i3: 40, ang: 30, desc: '4" joist 14" wide at 40"' },
        { i1: 2, i2: 8, i3: 32, ang: 30, desc: '2" square duct 8" at 32"' },
        { i1: 6, i2: 16, i3: 50, ang: 30, desc: '6" tall beam 16" wide at 50"' },
        { i1: 3, i2: 10, i3: 26, ang: 30, desc: '3" pipe bundle 10" wide' },
        { i1: 5, i2: 12, i3: 44, ang: 45, desc: '5" duct 12" wide (45deg bends)' },
        { i1: 7.75, i2: 18.5, i3: 77, ang: 60, desc: 'HARD: 7.75" tall, 18.5" wide at 77" (60deg)' },
        { i1: 6.375, i2: 20, i3: 89, ang: 45, desc: 'HARD: 6.375" rise, 20" wide far at 89"' },
        { i1: 4.625, i2: 15.75, i3: 23.5, ang: 60, desc: 'HARD: 4.625" x 15.75" at 23.5" tight 60deg' },
        { i1: 8.5, i2: 22, i3: 95, ang: 45, desc: 'HARD: 8.5" tall x 22" beam at 95"' },
        { i1: 3.875, i2: 11.25, i3: 37.5, ang: 45, desc: 'HARD: 3.875" x 11.25" at 37.5" (45deg)' },
        { i1: 5.125, i2: 13.5, i3: 68, ang: 30, desc: 'HARD: 5.125" x 13.5" wide at 68"' }
    ],
    kick: [
        { i1: 24, i2: 3, ang: 30, desc: '2 foot stub with 3" kick into box' },
        { i1: 18, i2: 2.5, ang: 30, desc: '18" stub, small 2.5" kick' },
        { i1: 36, i2: 4, ang: 30, desc: '3 foot stub with 4" kick' },
        { i1: 30, i2: 3.5, ang: 30, desc: '30" height, 3.5" kick angle' },
        { i1: 20, i2: 2, ang: 22.5, desc: '20" stub + small 2" kick (22.5deg)' },
        { i1: 42, i2: 5, ang: 30, desc: '42" stub with 5" kick into panel' },
        { i1: 48, i2: 4.5, ang: 30, desc: '4 foot stub + 4.5" kick' },
        { i1: 16, i2: 2, ang: 30, desc: '16" low stub + 2" kick' },
        { i1: 28, i2: 3, ang: 30, desc: '28" stub with 3" box entry kick' },
        { i1: 32, i2: 3.5, ang: 30, desc: '32" height + 3.5" entry angle' },
        { i1: 40, i2: 4, ang: 30, desc: '40" stub + 4" kick to panel' },
        { i1: 73.875, i2: 6.25, ang: 45, desc: 'HARD: 73.875" stub + 6.25" kick (45deg)' },
        { i1: 91.5, i2: 7.625, ang: 45, desc: 'HARD: 91.5" tall + 7.625" aggressive kick' },
        { i1: 55.25, i2: 5.875, ang: 30, desc: 'HARD: 55.25" height + 5.875" kick' },
        { i1: 67.625, i2: 4.375, ang: 22.5, desc: 'HARD: 67.625" + 4.375" shallow kick' },
        { i1: 84.75, i2: 8.5, ang: 60, desc: 'HARD: 84.75" + 8.5" steep 60deg kick' }
    ],
    rolling: [
        { i1: 6, i2: 8, ang: 30, desc: '6" up, 8" over for rolling offset' },
        { i1: 8, i2: 12, ang: 30, desc: '8" rise, 12" roll distance' },
        { i1: 5, i2: 10, ang: 30, desc: '5" up and 10" sideways' },
        { i1: 10, i2: 15, ang: 45, desc: '10" rise with 15" roll' },
        { i1: 4, i2: 6, ang: 30, desc: '4" up, 6" over simple roll' },
        { i1: 7, i2: 9, ang: 30, desc: '7" rise with 9" roll distance' },
        { i1: 9, i2: 14, ang: 45, desc: '9" up and 14" sideways (45deg)' },
        { i1: 6, i2: 12, ang: 30, desc: '6" rise, 12" roll for corner' },
        { i1: 12, i2: 16, ang: 45, desc: '12" up, 16" over tight space' },
        { i1: 5, i2: 8, ang: 30, desc: '5" rise + 8" sideways roll' },
        { i1: 8, i2: 10, ang: 30, desc: '8" up, 10" roll around column' },
        { i1: 11.625, i2: 17.75, ang: 60, desc: 'HARD: 11.625" up x 17.75" roll tight 60deg' },
        { i1: 14.5, i2: 22, ang: 60, desc: 'HARD: 14.5" rise x 22" aggressive roll' },
        { i1: 9.875, i2: 13.25, ang: 45, desc: 'HARD: 9.875" x 13.25" diagonal (45deg)' },
        { i1: 7.375, i2: 19.5, ang: 30, desc: 'HARD: 7.375" up long 19.5" roll' },
        { i1: 13, i2: 18.5, ang: 60, desc: 'HARD: 13" rise x 18.5" roll (60deg)' },
        { i1: 6.125, i2: 15.875, ang: 30, desc: 'HARD: 6.125" x 15.875" precision roll' }
    ],
    back2back: [
        { i1: 24, desc: 'Back-to-back 90s at 2 feet apart' },
        { i1: 36, desc: '3 foot spacing between 90s' },
        { i1: 48, desc: '4 foot run between bends' },
        { i1: 30, desc: '30" between back-to-back' },
        { i1: 18, desc: '18" tight back-to-back 90s' },
        { i1: 42, desc: '42" spacing for U-bend' },
        { i1: 60, desc: '5 foot back-to-back run' },
        { i1: 20, desc: '20" short U-channel' },
        { i1: 54, desc: '54" wide back-to-back' },
        { i1: 72, desc: '6 foot back-to-back spacing' }
    ],
    stub_kick: [
        { i1: 24, i2: 3, ang: 30, desc: '2 foot stub + 3" kick' },
        { i1: 18, i2: 2.5, ang: 30, desc: '18" stub + small kick' },
        { i1: 30, i2: 4, ang: 30, desc: '30" stub with 4" kick' },
        { i1: 36, i2: 3.5, ang: 30, desc: '3 foot stub + 3½" kick angle' },
        { i1: 20, i2: 2, ang: 22.5, desc: '20" stub + light 2" kick' },
        { i1: 42, i2: 5, ang: 30, desc: '42" stub + 5" entry kick' },
        { i1: 28, i2: 3, ang: 30, desc: '28" height + 3" box kick' },
        { i1: 48, i2: 4.5, ang: 30, desc: '4 foot stub + 4½" kick' }
    ],
    off_kick: [
        { i1: 4, i2: 3, ang: 30, desc: '4" offset + 3" kick combo' },
        { i1: 5, i2: 2.5, ang: 30, desc: '5" offset + 2½" kick' },
        { i1: 3.5, i2: 4, ang: 30, desc: '3½" offset + 4" kick' },
        { i1: 6, i2: 3.5, ang: 30, desc: '6" offset + 3½" kick angle' },
        { i1: 3, i2: 2, ang: 30, desc: '3" offset + small 2" kick' },
        { i1: 4.5, i2: 3, ang: 30, desc: '4½" offset + 3" kick entry' },
        { i1: 5.5, i2: 4, ang: 45, desc: '5½" offset + 4" kick (45°)' }
    ],
    rolling_stub: [
        { i1: 12, i2: 16, desc: '12" rise with 16" roll for stub' },
        { i1: 18, i2: 24, desc: '18" up, 2 foot roll' },
        { i1: 15, i2: 20, desc: '15" rise, 20" sideways' },
        { i1: 10, i2: 14, desc: '10" rise + 14" roll stub' },
        { i1: 24, i2: 30, desc: '2 foot rise with 30" roll' },
        { i1: 20, i2: 28, desc: '20" up, 28" sideways to stub' },
        { i1: 16, i2: 22, desc: '16" rise, 22" roll distance' },
        { i1: 14, i2: 18, desc: '14" rise with 18" roll' }
    ],
    shallow_off: [
        { i1: 2, i2: 36, ang: 10, desc: 'Shallow 2" rise over 3 feet (10°)' },
        { i1: 3, i2: 48, ang: 15, desc: '3" obstacle, shallow 15° bend' },
        { i1: 2.5, i2: 42, ang: 10, desc: '2½" rise, gentle slope' },
        { i1: 1.5, i2: 30, ang: 10, desc: '1½" rise, very shallow 10°' },
        { i1: 4, i2: 54, ang: 15, desc: '4" rise over 54" (15°)' },
        { i1: 2, i2: 40, ang: 10, desc: '2" rise gentle 10° long run' },
        { i1: 3.5, i2: 50, ang: 15, desc: '3½" obstacle over 50" (15°)' },
        { i1: 1, i2: 24, ang: 10, desc: '1" tiny rise over 2 feet' }
    ],
    deep_off: [
        { i1: 6, i2: 18, ang: 45, desc: 'Deep 6" rise over 18" (45°)' },
        { i1: 8, i2: 24, ang: 60, desc: '8" rise, tight 60° bends' },
        { i1: 7, i2: 20, ang: 45, desc: '7" obstacle, steep angle' },
        { i1: 5, i2: 16, ang: 45, desc: '5" rise tight 16" space (45°)' },
        { i1: 9, i2: 26, ang: 60, desc: '9" rise super tight 60°' },
        { i1: 10, i2: 28, ang: 60, desc: '10" rise aggressive 60° angle' },
        { i1: 6.5, i2: 22, ang: 45, desc: '6½" rise steep 45° at 22"' }
    ],
    zbend: [
        { i1: 4, i2: 30, ang: 30, desc: 'Z-bend 4" offset at 30"' },
        { i1: 3, i2: 24, ang: 30, desc: '3" Z-bend at 2 feet' },
        { i1: 5, i2: 36, ang: 30, desc: '5" Z-bend over 3 feet' },
        { i1: 3.5, i2: 28, ang: 30, desc: '3.5" Z-bend at 28"' },
        { i1: 6, i2: 40, ang: 30, desc: '6" Z-bend offset at 40"' },
        { i1: 2.5, i2: 20, ang: 30, desc: '2.5" Z-bend tight at 20"' },
        { i1: 4.5, i2: 32, ang: 30, desc: '4.5" Z-bend at 32"' },
        { i1: 12.75, i2: 18.625, ang: 60, desc: 'HARD: 12.75" up x 18.625" roll tight 60deg' },
        { i1: 15.5, i2: 21.25, ang: 60, desc: 'HARD: 15.5" rise x 21.25" aggressive' },
        { i1: 11.125, i2: 16.875, ang: 45, desc: 'HARD: 11.125" x 16.875" compound (45deg)' },
        { i1: 13.375, i2: 19.5, ang: 60, desc: 'HARD: 13.375" up x 19.5" steep angle' },
        { i1: 9.625, i2: 23, ang: 30, desc: 'HARD: 9.625" rise long 23" roll' }
    ],
    parallel: [
        { i1: 3, i2: 6, ang: 30, desc: '3" offset, 6" pipe spacing' },
        { i1: 4, i2: 8, ang: 30, desc: '4" rise, 8" center-to-center' },
        { i1: 3.5, i2: 7, ang: 30, desc: '3½" offset, 7" apart' },
        { i1: 2.5, i2: 5, ang: 30, desc: '2½" offset, 5" spacing' },
        { i1: 5, i2: 10, ang: 30, desc: '5" rise, 10" between pipes' },
        { i1: 4.5, i2: 9, ang: 30, desc: '4½" offset, 9" spacing' },
        { i1: 2, i2: 4, ang: 30, desc: '2" offset tight 4" spacing' },
        { i1: 6, i2: 12, ang: 45, desc: '6" offset, 12" wide spacing (45°)' }
    ],
    compound_off: [
        { i1: 6, i2: 8, ang: 30, desc: 'Compound: 6" up, 8" over' },
        { i1: 8, i2: 10, ang: 30, desc: '8" rise, 10" sideways' },
        { i1: 5, i2: 12, ang: 30, desc: '5" up and 12" roll' },
        { i1: 7, i2: 9, ang: 30, desc: '7" rise with 9" roll compound' },
        { i1: 4, i2: 6, ang: 30, desc: '4" up, 6" over compound' },
        { i1: 9, i2: 11, ang: 45, desc: '9" up + 11" sideways (45°)' },
        { i1: 10, i2: 14, ang: 45, desc: '10" rise, 14" roll compound' },
        { i1: 6, i2: 10, ang: 30, desc: '6" up and 10" over' }
    ],
    off_90: [
        { i1: 18, i2: 4, ang: 30, desc: '18" stub with 4" offset into it' },
        { i1: 24, i2: 3.5, ang: 30, desc: '2 foot box + 3½" offset' },
        { i1: 30, i2: 5, ang: 30, desc: '30" stub + 5" offset' },
        { i1: 20, i2: 3, ang: 30, desc: '20" height + 3" offset in' },
        { i1: 36, i2: 4.5, ang: 30, desc: '3 foot stub + 4½" offset' },
        { i1: 42, i2: 6, ang: 45, desc: '42" stub + 6" offset (45°)' },
        { i1: 16, i2: 2.5, ang: 30, desc: '16" stub + small 2½" offset' }
    ],
    '90_off': [
        { i1: 18, i2: 4, ang: 30, desc: '18" stub then 4" offset out' },
        { i1: 24, i2: 3, ang: 30, desc: '2 foot stub + 3" offset' },
        { i1: 30, i2: 5, ang: 30, desc: '30" up then 5" offset' },
        { i1: 20, i2: 3.5, ang: 30, desc: '20" stub + 3½" offset out' },
        { i1: 36, i2: 4.5, ang: 30, desc: '3 foot stub then 4½" offset' },
        { i1: 42, i2: 6, ang: 45, desc: '42" up + 6" offset (45°)' },
        { i1: 16, i2: 2.5, ang: 30, desc: '16" stub + 2½" offset out' }
    ],
    sad_off: [
        { i1: 3, i2: 4, ang: 30, desc: '3" saddle then 4" offset' },
        { i1: 2.5, i2: 3, ang: 30, desc: '2½" saddle + 3" offset combo' },
        { i1: 4, i2: 5, ang: 30, desc: '4" saddle into 5" offset' },
        { i1: 3.5, i2: 3.5, ang: 30, desc: '3½" saddle + equal offset' },
        { i1: 2, i2: 2.5, ang: 30, desc: '2" saddle + 2½" offset' }
    ],
    off_sad: [
        { i1: 4, i2: 3, ang: 30, desc: '4" offset then 3" saddle' },
        { i1: 3, i2: 2.5, ang: 30, desc: '3" offset + 2½" saddle combo' },
        { i1: 5, i2: 4, ang: 30, desc: '5" offset into 4" saddle' },
        { i1: 3.5, i2: 3.5, ang: 30, desc: '3½" offset + equal saddle' },
        { i1: 2.5, i2: 2, ang: 30, desc: '2½" offset + 2" saddle' }
    ],
    roll_90: [
        { i1: 8, i2: 12, i3: 20, desc: '8" up, 12" roll to 90 at 20"' },
        { i1: 10, i2: 14, i3: 24, desc: '10" rise, 14" roll + 90 at 24"' },
        { i1: 6, i2: 10, i3: 18, desc: '6" up, 10" over to 90 at 18"' },
        { i1: 12, i2: 16, i3: 28, desc: '12" rise + 16" roll, 90 at 28"' }
    ],
    comp_bend: [
        { i1: 12, i2: 16, i3: 20, desc: 'Compound bend: 12" + 16" + 20"' },
        { i1: 10, i2: 14, i3: 18, desc: 'Triple bend: 10" + 14" + 18"' },
        { i1: 15, i2: 20, i3: 24, desc: '3-bend run: 15" + 20" + 24"' }
    ],
    backbend: [
        { i1: 24, desc: 'Back bend at 2 feet' },
        { i1: 30, desc: 'Back bend at 30"' },
        { i1: 36, desc: 'Back bend at 3 feet' }
    ]
};
