/* =========================================
   KNOWLEDGE BASE: THE ULTIMATE REFERENCE
   ========================================= */

// --- PART A: SIDEBAR REFERENCE CONTENT ---
const guideContent = {
    
    // 1. TAPE MEASURE (PRECISION ALIGNED)
    'tape_reading': `
        <div class="ref-card">
            <div class="ref-header"><ion-icon name="ruler"></ion-icon> HOW TO READ A TAPE MEASURE</div>
            
            <div style="padding:15px; line-height:1.8; font-size:0.95rem;">
                <p style="margin-bottom:20px; color:#aaa;">A tape measure is divided into inches, and each inch is broken down into smaller fractions. Learning to read these marks quickly is essential for accurate bending.</p>
                
                <h4 style="color:var(--primary); margin-bottom:10px;">The Line Hierarchy (from Tallest to Shortest):</h4>
            </div>
            
            <div style="background:#F4D03F; color:#000; padding:0; margin:15px; border-radius:8px; border:2px solid #D4AC0D; position:relative; height:120px; font-family:monospace; overflow:hidden;">
                
                <div style="position:absolute; left:0; top:0; width:3px; height:100%; background:#000;"></div>
                <span style="position:absolute; left:5px; top:5px; font-weight:bold; font-size:1.4rem;">0"</span>

                <div style="position:absolute; right:0; top:0; width:3px; height:100%; background:#000;"></div>
                <span style="position:absolute; right:5px; top:5px; font-weight:bold; font-size:1.4rem;">1"</span>

                <div style="position:absolute; left:50%; top:0; width:2.5px; height:60px; background:#C0392B;"></div>
                <span style="position:absolute; left:50%; top:63px; transform:translateX(-50%); color:#C0392B; font-weight:bold; font-size:1.1rem;">1/2</span>

                ${ [1, 3].map(n => `
                    <div style="position:absolute; left:${n*25}%; top:0; width:2px; height:48px; background:#000;"></div>
                    <span style="position:absolute; left:${n*25}%; top:51px; transform:translateX(-50%); font-weight:bold; font-size:0.95rem;">${n}/4</span>
                `).join('')}

                ${ [1, 3, 5, 7].map(n => `
                    <div style="position:absolute; left:${n*12.5}%; top:0; width:1.5px; height:38px; background:#222;"></div>
                    <span style="position:absolute; left:${n*12.5}%; top:41px; transform:translateX(-50%); font-size:0.8rem; color:#222;">${n}/8</span>
                `).join('')}

                ${ [1, 3, 5, 7, 9, 11, 13, 15].map(n => `
                    <div style="position:absolute; left:${n*6.25}%; top:0; width:1px; height:24px; background:#555;"></div>
                    <span style="position:absolute; left:${n*6.25}%; top:26px; transform:translateX(-50%); font-size:0.65rem; color:#555;">${n}/16</span>
                `).join('')}

            </div>

            <table class="ref-table" style="margin:20px 15px;">
                <tr style="background:rgba(33,150,243,0.1);"><th>Mark Type</th><th>Line Height</th><th>Fraction</th></tr>
                <tr><td><span style="color:#000; font-size:1.3rem; font-weight:bold;">█</span> <strong>Full Inch</strong></td><td>Tallest (100%)</td><td>0", 1", 2"...</td></tr>
                <tr><td><span style="color:#C0392B; font-size:1.3rem; font-weight:bold;">█</span> <strong>Half Inch</strong></td><td>2nd Tallest (~60%)</td><td>1/2"</td></tr>
                <tr><td><span style="color:#000; font-size:1.2rem;">│</span> <strong>Quarter Inch</strong></td><td>Medium (~50%)</td><td>1/4", 3/4"</td></tr>
                <tr><td><span style="color:#222; font-size:1.1rem;">│</span> <strong>Eighth Inch</strong></td><td>Short (~40%)</td><td>1/8", 3/8", 5/8", 7/8"</td></tr>
                <tr><td><span style="color:#555; font-size:1rem;">│</span> <strong>Sixteenth</strong></td><td>Tiny (~25%)</td><td>1/16", 3/16", 5/16"...</td></tr>
            </table>

            <div style="margin:20px 15px;">
                <h4 style="color:var(--primary); margin-bottom:10px;">How to Read It:</h4>
                <ol style="padding-left:20px; line-height:1.8;">
                    <li><strong>Find the INCH</strong> - Look at the number on the tape (the full inch mark).</li>
                    <li><strong>Count the smaller marks</strong> - Starting from that inch, read down the line hierarchy.</li>
                    <li><strong>The first line you hit is your fraction</strong> - Match it to the table above.</li>
                </ol>
            </div>

            <div class="tip-box" style="margin:15px;">
                <strong>🔥 Pro Tip:</strong> The longer the line, the bigger the fraction. Always read from the last full inch, then count forward through quarters, eighths, and sixteenths.
            </div>

            <div style="margin:20px 15px; padding:15px; background:rgba(76,175,80,0.1); border-left:4px solid #4CAF50; border-radius:4px;">
                <strong style="color:#4CAF50;">Example:</strong><br>
                If you see a mark between 3" and 4", and it's:
                <ul style="margin-top:8px; padding-left:20px;">
                    <li>At the <strong style="color:#C0392B;">RED MIDDLE LINE</strong> = 3 1/2"</li>
                    <li>At the <strong>FIRST MEDIUM LINE after 3"</strong> = 3 1/4"</li>
                    <li>At the <strong>FIRST SHORT LINE after 3"</strong> = 3 1/8"</li>
                    <li>At the <strong>FIRST TINY LINE after 3"</strong> = 3 1/16"</li>
                </ul>
            </div>
        </div>
        
        <div class="ref-card">
            <div class="ref-header"><ion-icon name="flash"></ion-icon> BENDER MARKS EXPLAINED</div>
            
            <div style="padding:15px; line-height:1.8; font-size:0.95rem;">
                <p style="margin-bottom:20px; color:#aaa;">Every hand bender has marks on it that help you make precise bends. Learning what each mark means will make you faster and more accurate on the job.</p>
                
                <h4 style="color:var(--primary); margin-bottom:15px;">The 5 Essential Marks:</h4>
            </div>
            
            <table class="ref-table" style="margin:20px 15px;">
                <tr style="background:rgba(33,150,243,0.1);"><th>Mark</th><th>Purpose</th></tr>
                <tr>
                    <td><strong>1. Arrow</strong></td>
                    <td>To be used with stub, offset and outer marks of saddle bends.</td>
                </tr>
                <tr>
                    <td><strong>2. Rim Notch</strong></td>
                    <td>Locates the center of a saddle bend.</td>
                </tr>
                <tr>
                    <td><strong>3. Star-Point</strong></td>
                    <td>Indicates the back of a 90° bend.</td>
                </tr>
                <tr>
                    <td><strong>4. Degree Scale</strong></td>
                    <td>For offsets, saddles and those special situations.</td>
                </tr>
                <tr>
                    <td><strong>5. A Choice</strong></td>
                    <td>High strength ductile iron or light weight aluminum.</td>
                </tr>
            </table>

            <div class="tip-box" style="margin:15px;">
                <strong>🔥 Pro Tip:</strong> Always align your measurement mark with the correct bender mark for the type of bend you're making. The arrow is your go-to for most bends, but the rim notch and star-point are critical for saddles and 90s.
            </div>

            <div style="margin:20px 15px; padding:15px; background:rgba(76,175,80,0.1); border-left:4px solid #4CAF50; border-radius:4px;">
                <strong style="color:#4CAF50;">Quick Reference:</strong><br>
                <ul style="margin-top:8px; padding-left:20px;">
                    <li><strong>Stub-up (90°)?</strong> Use the <strong style="color:#2196F3;">Star-Point</strong> or back mark</li>
                    <li><strong>Offset?</strong> Use the <strong style="color:#2196F3;">Arrow</strong> mark</li>
                    <li><strong>Saddle center?</strong> Use the <strong style="color:#2196F3;">Rim Notch</strong></li>
                    <li><strong>Custom angle?</strong> Use the <strong style="color:#2196F3;">Degree Scale</strong></li>
                </ul>
            </div>
        </div>
    `,

    // 2. BENDING MATH (CLASSROOM METHOD)
    'bend_math': `
        <div class="ref-card">
            <div class="ref-header"><ion-icon name="school"></ion-icon> OFFSET MATH BREAKDOWN</div>
            <div class="tip-box" style="font-style:normal; font-size:0.9rem;">
                <strong>The Basic Offset Formula</strong><br>
                You've got a pipe that needs to go around something.<br><br>
                <code>Rise (height of obstacle) × Multiplier (depends on angle) = Travel Distance</code><br><br>
                That travel distance is how far apart your two bends will be.<br><br>
                <code>Shrink = Rise × Shrink Constant</code><br>
                (You lose length when pulling the offset, gotta account for it.)<br><br>
                Mark your end point, subtract the travel distance, and that's where your first bend goes.
            </div>
        </div>

        <div class="ref-card">
            <div class="ref-header"><ion-icon name="grid"></ion-icon> MULTIPLIERS & SHRINK</div>
            <table class="ref-table">
                <tr><th>Angle</th><th>Multiplier</th><th>Shrink per Inch</th></tr>
                <tr><td>10°</td><td>6.0</td><td>1/16"</td></tr>
                <tr><td>15°</td><td>3.86</td><td>1/8"</td></tr>
                <tr><td>22.5°</td><td>2.6</td><td>3/16"</td></tr>
                <tr><td>30°</td><td>2.0</td><td>1/4"</td></tr>
                <tr><td>45°</td><td>1.4</td><td>3/8"</td></tr>
                <tr><td>60°</td><td>1.2</td><td>1/2"</td></tr>
            </table>
        </div>
    `,

    // Versión en español de matemáticas de doblado
    'bend_math_es': `
        <div class="ref-card">
            <div class="ref-header"><ion-icon name="school"></ion-icon> DESGLOSE DE MATEMÁTICAS DE OFFSET</div>
            <div class="tip-box" style="font-style:normal; font-size:0.9rem;">
                <strong>La fórmula básica de un offset</strong><br>
                Tienes un tubo que debe rodear un obstáculo.<br><br>
                <code>Altura (obstáculo) × Multiplicador (depende del ángulo) = Distancia de recorrido</code><br><br>
                Esa distancia de recorrido es la separación entre tus dos dobleces.<br><br>
                <code>Acortamiento = Altura × Constante de acortamiento</code><br>
                (Pierdes longitud al hacer el offset; hay que compensarlo).<br><br>
                Marca tu punto final, resta la distancia de recorrido y ahí va tu primer doblez.
            </div>
        </div>

        <div class="ref-card">
            <div class="ref-header"><ion-icon name="grid"></ion-icon> MULTIPLICADORES Y ACORTAMIENTO</div>
            <table class="ref-table">
                <tr><th>Ángulo</th><th>Multiplicador</th><th>Acortamiento por pulg</th></tr>
                <tr><td>10°</td><td>6.0</td><td>1/16"</td></tr>
                <tr><td>15°</td><td>3.86</td><td>1/8"</td></tr>
                <tr><td>22.5°</td><td>2.6</td><td>3/16"</td></tr>
                <tr><td>30°</td><td>2.0</td><td>1/4"</td></tr>
                <tr><td>45°</td><td>1.4</td><td>3/8"</td></tr>
                <tr><td>60°</td><td>1.2</td><td>1/2"</td></tr>
            </table>
        </div>
    `,

    // 3. TRADE TERMS
    'trade_terms': `
        <div class="ref-card">
            <div class="ref-header"><ion-icon name="book"></ion-icon> FIELD GLOSSARY</div>
            <table class="ref-table">
                <tr><td><strong>Stub-Up</strong></td><td>90° bend up a wall.</td></tr>
                <tr><td><strong>Offset</strong></td><td>Two bends to clear an obstacle.</td></tr>
                <tr><td><strong>Dogleg</strong></td><td>When two bends are twisted/misaligned.</td></tr>
                <tr><td><strong>Kick</strong></td><td>A lift at the end of a 90° to enter a box.</td></tr>
                <tr><td><strong>Gain</strong></td><td>Length "saved" by the curve of a 90°.</td></tr>
                <tr><td><strong>Deduct</strong></td><td>Length "lost" by the bender shoe geometry.</td></tr>
                <tr><td><strong>Shrink</strong></td><td>Total length lost when pulling an offset.</td></tr>
                <tr><td><strong>Travel</strong></td><td>Distance between two offset bends.</td></tr>
                <tr><td><strong>Bone Yard</strong></td><td>Pile of scrap conduit.</td></tr>
                <tr><td><strong>Stick</strong></td><td>A full 10' length of conduit.</td></tr>
            </table>
        </div>
    `,

    // 4. NEC SUPPORT
    'nec_support': `
        <div class="ref-card">
            <div class="ref-header"><ion-icon name="book"></ion-icon> SUPPORT (NEC 358.30)</div>
            <table class="ref-table">
                <tr><th>Type</th><th>Max Dist</th><th>From Box</th></tr>
                <tr><td>EMT</td><td>10 ft</td><td>3 ft</td></tr>
                <tr><td>Rigid</td><td>10 ft*</td><td>3 ft</td></tr>
                <tr><td>PVC</td><td>3 ft*</td><td>3 ft</td></tr>
                <tr><td>Flex</td><td>4.5 ft</td><td>12 in</td></tr>
            </table>
            <div class="tip-box" style="font-size:0.75rem;">
                <strong>⚠ Pro Tip:</strong> Support close to boxes and turns. More support = straighter runs.
            </div>
        </div>

        <div class="ref-card">
            <div class="ref-header"><ion-icon name="info"></ion-icon> COMMON MISTAKES</div>
            <ul style="color:#ccc; padding:15px;">
                <li>❌ Measuring from bender's back instead of end</li>
                <li>❌ Forgetting deduct on 90° bends</li>
                <li>❌ Not spinning 180° between offset bends</li>
                <li>❌ Bending too tight (over-bending)</li>
                <li>❌ Ignoring wire fill limits (leads to fire hazard)</li>
            </ul>
        </div>
    `,

    // 5. CONDUIT SPECS
    'conduit_specs': `
        <div class="ref-card">
            <div class="ref-header"><ion-icon name="resize"></ion-icon> EMT SPECS</div>
            <table class="ref-table">
                <tr><th>Size</th><th>O.D.</th><th>Weight/100'</th></tr>
                <tr><td>1/2"</td><td>0.706"</td><td>30 lbs</td></tr>
                <tr><td>3/4"</td><td>0.922"</td><td>46 lbs</td></tr>
                <tr><td>1"</td><td>1.163"</td><td>67 lbs</td></tr>
            </table>
        </div>
    `,
    
    // 6. DRILL SIZES
    'drill_sizes': `
        <div class="ref-card">
            <div class="ref-header"><ion-icon name="disc"></ion-icon> HOLE SAW GUIDE</div>
            <table class="ref-table">
                <tr><th>Trade Size</th><th>Hole Saw</th></tr>
                <tr><td>1/2"</td><td>7/8"</td></tr>
                <tr><td>3/4"</td><td>1 1/8"</td></tr>
                <tr><td>1"</td><td>1 3/8"</td></tr>
                <tr><td>1 1/4"</td><td>1 3/4"</td></tr>
            </table>
        </div>
    `
};

// Spanish versions
const guideContentEs = {
    'tape_reading': guideContent.tape_reading
        .replaceAll('THE FRACTION STACK', 'LA PILA DE FRACCIONES')
        .replaceAll('Pro Tip:', 'Consejo:')
        .replaceAll('Read down the stack. The first number you hit is your fraction.', 'Lee hacia abajo: el primer número es tu fracción.')
        .replaceAll('Mark Type', 'Tipo de marca')
        .replaceAll('Length', 'Longitud')
        .replaceAll('Value', 'Valor')
        .replaceAll('Full Line', 'Línea completa')
        .replaceAll('Half Line', 'Media línea')
        .replaceAll('Quarter', 'Cuarto')
        .replaceAll('Eighth', 'Octavo')
        .replaceAll('Sixteenth', 'Dieciseisavo'),
    'bend_math': guideContent.bend_math_es,
    'trade_terms': `
        <div class="ref-card">
            <div class="ref-header"><ion-icon name="book"></ion-icon> GLOSARIO DE CAMPO</div>
            <table class="ref-table">
                <tr><td><strong>Stub-Up</strong></td><td>Doblado de 90° hacia arriba en pared.</td></tr>
                <tr><td><strong>Offset</strong></td><td>Dos dobleces para librar un obstaculo.</td></tr>
                <tr><td><strong>Dogleg</strong></td><td>Cuando los dobleces se tuercen o desalinean.</td></tr>
                <tr><td><strong>Kick</strong></td><td>Levantamiento al final de un 90° para entrar a la caja.</td></tr>
                <tr><td><strong>Gain</strong></td><td>Longitud ganada por la curva de un 90°.</td></tr>
                <tr><td><strong>Deduct</strong></td><td>Longitud perdida por la geometria de la zapata del bender.</td></tr>
                <tr><td><strong>Shrink</strong></td><td>Longitud total perdida al hacer un offset.</td></tr>
                <tr><td><strong>Travel</strong></td><td>Distancia entre los dos dobleces del offset.</td></tr>
                <tr><td><strong>Bone Yard</strong></td><td>Monton de retazos de tubo.</td></tr>
                <tr><td><strong>Stick</strong></td><td>Tramo completo de 10' de conduit.</td></tr>
            </table>
        </div>
    `,
    'nec_support': `
        <div class="ref-card">
            <div class="ref-header"><ion-icon name="book"></ion-icon> SOPORTE (NEC 358.30)</div>
            <table class="ref-table">
                <tr><th>Tipo</th><th>Dist. Max</th><th>Desde caja</th></tr>
                <tr><td>EMT</td><td>10 ft</td><td>3 ft</td></tr>
                <tr><td>Rigid</td><td>10 ft*</td><td>3 ft</td></tr>
                <tr><td>PVC</td><td>3 ft*</td><td>3 ft</td></tr>
                <tr><td>Flex</td><td>4.5 ft</td><td>12 in</td></tr>
            </table>
            <div class="tip-box" style="font-size:0.75rem;">
                <strong>Consejo:</strong> Soporta cerca de cajas y giros. Mas soporte = tramos mas rectos.
            </div>
        </div>

        <div class="ref-card">
            <div class="ref-header"><ion-icon name="info"></ion-icon> ERRORES COMUNES</div>
            <ul style="color:#ccc; padding:15px;">
                <li>❌ Medir desde la espalda del bender en vez del extremo</li>
                <li>❌ Olvidar la deduccion en dobleces de 90°</li>
                <li>❌ No girar 180° entre dobleces de offset</li>
                <li>❌ Doblado demasiado cerrado (exceso)</li>
                <li>❌ Ignorar limites de llenado de conductores (riesgo de calor/incendio)</li>
            </ul>
        </div>
    `,
    'conduit_specs': `
        <div class="ref-card">
            <div class="ref-header"><ion-icon name="resize"></ion-icon> ESPECIFICACIONES EMT</div>
            <table class="ref-table">
                <tr><th>Tamano</th><th>Diametro ext.</th><th>Peso/100'</th></tr>
                <tr><td>1/2"</td><td>0.706"</td><td>30 lbs</td></tr>
                <tr><td>3/4"</td><td>0.922"</td><td>46 lbs</td></tr>
                <tr><td>1"</td><td>1.163"</td><td>67 lbs</td></tr>
            </table>
        </div>
    `,
    'drill_sizes': `
        <div class="ref-card">
            <div class="ref-header"><ion-icon name="disc"></ion-icon> GUIA DE SIERRAS</div>
            <table class="ref-table">
                <tr><th>Tamano comercial</th><th>Sierra copa</th></tr>
                <tr><td>1/2"</td><td>7/8"</td></tr>
                <tr><td>3/4"</td><td>1 1/8"</td></tr>
                <tr><td>1"</td><td>1 3/8"</td></tr>
                <tr><td>1 1/4"</td><td>1 3/4"</td></tr>
            </table>
        </div>
    `
};

// --- PART B: PRO TIPS & BEST PRACTICES ---
const proTips = {
    'pro_tips_offset': `<h3>Offset Bending Tips</h3>
        <ul style="line-height:2; color:#ccc;">
            <li>✓ <strong>Spin exactly 180°</strong> between bends. Use the bender's marks as guides.</li>
            <li>✓ <strong>Shrink loss is real.</strong> You'll lose 1/4" to 3/8" per inch of height depending on angle.</li>
            <li>✓ <strong>Shallow bends (10°)</strong> save horizontal space but take more length.</li>
            <li>✓ <strong>Deep bends (45°)</strong> save length but need more sideways distance.</li>
            <li>✓ <strong>Test fit before</strong> cutting. A bad offset wastes a 10' stick.</li>
        </ul>
    `,
    'pro_tips_saddle': `<h3>Saddle Bending Tips</h3>
        <ul style="line-height:2; color:#ccc;">
            <li>✓ <strong>Center bend does the work.</strong> It takes all the height.</li>
            <li>✓ <strong>Side bends are shallow.</strong> They just cup over, not sharp angles.</li>
            <li>✓ <strong>Mark carefully.</strong> The distance between center and sides matters.</li>
            <li>✓ <strong>For wide obstacles,</strong> use 4-point saddle (two offsets stacked).</li>
            <li>✓ <strong>3-point saddles</strong> work for obstacles up to about 4" wide.</li>
        </ul>
    `,
    'pro_tips_fill': `<h3>Wire Fill Tips (NEC Chapter 9)</h3>
        <ul style="line-height:2; color:#ccc;">
            <li>✓ <strong>2+ wires = 40% max fill</strong> (includes ground)</li>
            <li>✓ <strong>Single wire = 53% max fill</strong></li>
            <li>✓ <strong>Two wires = 31% max fill</strong> (different than 2+ rule!)</li>
            <li>✓ <strong>Always include ground</strong> in wire count for fill calculation.</li>
            <li>✓ <strong>Stranded > Solid.</strong> Same gauge, stranded takes slightly more space.</li>
            <li>✓ <strong>Heat shrink can't exceed 40%</strong> even with one wire.</li>
        </ul>
    `,
    'pro_tips_kick': `<h3>Kick Bending Tips</h3>
        <ul style="line-height:2; color:#ccc;">
            <li>✓ <strong>Light kicks work better.</strong> Just enough to enter the box.</li>
            <li>✓ <strong>Measure from back of 90°.</strong> Don't forget bender's deduct on the stub!</li>
            <li>✓ <strong>Common angle = 30°.</strong> Steeper (45°) for tall boxes, shallower (22.5°) for tight.</li>
            <li>✓ <strong>Practice bends first</strong> before cutting your main pipe.</li>
            <li>✓ <strong>Kicks hide in the box.</strong> Make them neat inside.</li>
        </ul>
    `,
    'pro_tips_field': `<h3>General Field Tips</h3>
        <ul style="line-height:2; color:#ccc;">
            <li>✓ <strong>Write on pipe with crayon, not pen.</strong> Pen washes off.</li>
            <li>✓ <strong>Keep bender clean.</strong> Dirt/grease on shoe = slipping = bad bends.</li>
            <li>✓ <strong>Pull smooth & steady.</strong> Jerky bending creates crimps.</li>
            <li>✓ <strong>Check your deduct.</strong> Different benders, different values.</li>
            <li>✓ <strong>Over-bend slightly then back off.</strong> Keeps the kink out of the middle.</li>
            <li>✓ <strong>EMT goes 10 feet between supports</strong> (NEC 358.30(A))</li>
        </ul>
    `
};

// Spanish Pro Tips
const proTipsEs = {
    'pro_tips_offset': `<h3>Consejos para offsets</h3>
        <ul style="line-height:2; color:#ccc;">
            <li>• Gira exactamente 180° entre dobleces. Usa las marcas del bender.</li>
            <li>• El acortamiento es real: pierde 1/4" a 3/8" por pulgada de altura según el ángulo.</li>
            <li>• Dobleces bajos (10°) ahorran espacio, pero usan más longitud.</li>
            <li>• Dobleces altos (45°) ahorran longitud, pero requieren más distancia lateral.</li>
            <li>• Prueba antes de cortar: un offset mal hecho desperdicia el tramo.</li>
        </ul>
    `,
    'pro_tips_saddle': `<h3>Consejos para sillas</h3>
        <ul style="line-height:2; color:#ccc;">
            <li>• El doblez central hace la altura.</li>
            <li>• Los laterales son más bajos; solo abrazan.</li>
            <li>• Marca con cuidado: la distancia entre centro y laterales importa.</li>
            <li>• Obstáculos anchos: usa silla de 4 puntos (dos offsets).</li>
            <li>• Silla de 3 puntos funciona hasta ~4" de ancho.</li>
        </ul>
    `,
    'pro_tips_fill': `<h3>Consejos de llenado (NEC Cap. 9)</h3>
        <ul style="line-height:2; color:#ccc;">
            <li>• 2+ conductores = 40% máximo (incluye tierra).</li>
            <li>• 1 conductor = 53% máximo.</li>
            <li>• 2 conductores = 31% máximo (difiere de 2+).</li>
            <li>• Incluye la tierra en el conteo.</li>
            <li>• Trenzado ocupa un poco más que sólido.</li>
            <li>• Con termocontráctil, no pases de 40%.</li>
        </ul>
    `,
    'pro_tips_kick': `<h3>Consejos para kicks</h3>
        <ul style="line-height:2; color:#ccc;">
            <li>• Kicks ligeros suelen ser suficientes para entrar a la caja.</li>
            <li>• Mide desde la espalda del 90°; no olvides la deducción del stub.</li>
            <li>• Ángulo común: 30°. Más alto (45°) para cajas altas, más bajo (22.5°) para espacio estrecho.</li>
            <li>• Practica en sobrante antes de cortar la pieza principal.</li>
            <li>• Que el kick quede limpio dentro de la caja.</li>
        </ul>
    `,
    'pro_tips_field': `<h3>Consejos generales de campo</h3>
        <ul style="line-height:2; color:#ccc;">
            <li>• Escribe en el tubo con crayón, no pluma.</li>
            <li>• Mantén limpia la zapata; grasa o tierra hacen resbalar.</li>
            <li>• Jala suave y constante; tirones crean marcas.</li>
            <li>• Verifica tu deducción; cada bender varía.</li>
            <li>• Sobre-dobla un poco y regresa: evita el quiebre al centro.</li>
        </ul>
    `,
};

// --- PART C: INSTRUCTIONS (as before) ---
const bendInstructions = {
    'stub': `<h3>Straight Stub-Up</h3><p>Mark the height you need minus your bender's deduct. Line it up with the arrow, pull toward you. Easy one.</p>`,
    'back2back': `<h3>Back-to-Back 90s</h3><p>Bend your first 90. Measure from the back of that bend to where you want the next one. Line it up with the star mark.</p>`,
    'backbend': `<h3>Back Bend</h3><p>When you're measuring from the rear. Add your gain to the target height, subtract the deduct, then mark and bend.</p>`,
    'kick': `<h3>90 with a Kick</h3><p>Bend a 90 first. Then measure back using the multiplier for your angle. Bend the kick in lightly.</p>`,
    'stub_kick': `<h3>Stub with a Kick</h3><p>Do the stub and kick in one go. Measure both, bend the stub, then bend the kick without moving the pipe.</p>`,
    'rolling_stub': `<h3>Rolling Stub</h3><p>A 90 that goes up and to the side. Calculate the rise-and-roll distance. Bend like a regular stub, then tip it to the side.</p>`,
    'offset': `<h3>Standard Offset</h3><p>Rise times your multiplier. That tells you how far apart your bends are. Mark, bend the first one on the arrow. Spin it 180°, bend the second mark.</p>`,
    'shallow_off': `<h3>Shallow Offset</h3><p>Use 10° bends for tiny obstacles. Multiplier is 6.0. Four bends instead of two, but way cleaner fit in tight spaces.</p>`,
    'deep_off': `<h3>Deep Offset</h3><p>Use 45° bends to save distance. Multiplier 1.41. Two big bends instead of four small ones. Works great for bigger obstacles.</p>`,
    'rolling': `<h3>Rolling Offset</h3><p>Going up and over at the same time. Figure out your true distance first (rise squared plus roll squared under a square root). Then use that like a regular offset.</p>`,
    'compound_off': `<h3>Compound Offset</h3><p>Same math as rolling but different angle. Pipe goes up and sideways at once. Calculate your true distance, mark your bends.</p>`,
    'parallel': `<h3>Parallel Offsets</h3><p>Two pipes next to each other, same bends. Multiply your center-to-center distance by tan of your half-angle. Add that to your marks on the outside pipe.</p>`,
    'zbend': `<h3>Z-Bend (Double Offset)</h3><p>Two offsets in opposite directions. First offset, spin 180°, second offset, spin 180° again. Looks like an S from above.</p>`,
    'off_kick': `<h3>Offset with a Kick</h3><p>Offset around one thing, then add a kick at the end to go into a box. Mark everything before you start bending.</p>`,
    'saddle3': `<h3>3-Point Saddle</h3><p>Mark your center point. Mark the sides at about 2 pipe-widths out from center. Bend center to 45°, flip, bend sides to 22.5°. Straddles the obstacle.</p>`,
    'saddle4': `<h3>4-Point Saddle</h3><p>Like two offsets stacked for a wider obstacle. Mark your points. Bend, measure the obstacle width, mark again, bend again. Takes practice.</p>`,
    'sad_off': `<h3>Saddle into Offset</h3><p>Fit over an obstacle with a saddle first, then continue with an offset to get around it. Plan your measurements carefully.</p>`,
    'off_sad': `<h3>Offset into Saddle</h3><p>Offset around one obstacle, then saddle over another one. Pipe takes a weird path. Don't start until you've drawn it out.</p>`,
    'off_90': `<h3>Offset into 90</h3><p>Offset to clear something, then bend a 90 to turn up. The end of the offset becomes your starting point for the 90.</p>`,
    '90_off': `<h3>90 with an Offset</h3><p>Bend your 90 first, then measure from the back for your offset. Not common, but sometimes you gotta do it backwards.</p>`,
    'roll_90': `<h3>Rolling 90</h3><p>A 90 that lands in a different plane. The pipe goes up and twists at the same time. Hardest one to visualize before you do it.</p>`,
    'comp_bend': `<h3>Multiple Bends</h3><p>Several bends on one stick. Work from one end to the other, never stop. Mess up the order and you're cutting the pipe.</p>`,
    'dogleg': `<h3>Fixing a Dogleg</h3><p>Pipe got twisted or bent wrong. Lay it flat on the floor, rotate until the bad part is in the air. Push down on the high spot until it flattens out. Sometimes works.</p>`
};

// --- FUNCTIONS ---
function loadGuide(key) {
    const titles = {
        'nec_support': 'NEC Tables', 
        'bend_math': 'Bending Math',
        'trade_terms': 'Trade Terms',
        'tape_reading': 'Reading a Tape',
        'conduit_specs': 'Pipe Dimensions',
        'drill_sizes': 'Knockout Sizes'
    };
    const titlesEs = {
        'nec_support': 'Tablas NEC', 
        'bend_math': 'Matematicas de doblado',
        'trade_terms': 'Terminos de oficio',
        'tape_reading': 'Como leer una cinta',
        'conduit_specs': 'Dimensiones de tubo',
        'drill_sizes': 'Tamanos de perforacion'
    };
    const useEs = (typeof state !== 'undefined' && state.lang === 'es');
    
    document.getElementById('calc-title').innerText = useEs ? (titlesEs[key] || titles[key]) : titles[key];
    const content = useEs ? (guideContentEs[key] || guideContent[key]) : guideContent[key];
    document.getElementById('calc-inputs').innerHTML = `<div class="home-grid">${content}</div>`;
    
    // UI Cleanup
    document.getElementById('result-box').classList.add('hidden');
    document.getElementById('calc-btn').classList.add('hidden');
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('overlay').classList.remove('visible');
}

function loadProTips(key) {
    const titles = {
        'pro_tips_offset': 'Offset Bending Pro Tips',
        'pro_tips_saddle': 'Saddle Bending Pro Tips',
        'pro_tips_fill': 'Wire Fill Pro Tips',
        'pro_tips_kick': 'Kick Bending Pro Tips',
        'pro_tips_field': 'Field Best Practices'
    };
    const titlesEs = {
        'pro_tips_offset': 'Consejos para offsets',
        'pro_tips_saddle': 'Consejos para sillas',
        'pro_tips_fill': 'Consejos de llenado',
        'pro_tips_kick': 'Consejos para kicks',
        'pro_tips_field': 'Buenas practicas de campo'
    };
    const useEs = (typeof state !== 'undefined' && state.lang === 'es');
    
    document.getElementById('calc-title').innerText = useEs ? (titlesEs[key] || titles[key]) : titles[key];
    document.getElementById('calc-inputs').innerHTML = useEs ? (proTipsEs[key] || proTips[key]) : proTips[key];
    
    document.getElementById('result-box').classList.add('hidden');
    document.getElementById('calc-btn').classList.add('hidden');
    // Close sidebar/overlay when opening tips
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    if (sidebar) sidebar.classList.remove('open');
    if (overlay) overlay.classList.remove('visible');
}

function getBendGuide(type) {
    return bendInstructions[type] || "<p>Instructions unavailable.</p>";
}
