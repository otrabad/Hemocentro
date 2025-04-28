document.addEventListener('DOMContentLoaded', () => {
    // --- Definición de Datos COMPLETA y ACTUALIZADA ---
    const activitiesData = [
        // Hematólogos
        { role: "Hematólogos", pillar: 1, activity: "Diagnóstico y manejo de anemias complejas y hemoglobinopatías." },
        { role: "Hematólogos", pillar: 2, activity: "Diagnóstico y manejo de los trastornos de la coagulación; supervisión de terapias avanzadas." },
        // Cirujanos
        { role: "Cirujanos", pillar: 1, activity: "Evaluar el estado preoperatorio de anemia y coagulación y colaborar en su optimización." },
        { role: "Cirujanos", pillar: 2, activity: "Emplear técnicas quirúrgicas meticulosas para minimizar la pérdida de sangre intraoperatoria (hemostasia cuidadosa, uso de energía avanzada)." },
        { role: "Cirujanos", pillar: 2, activity: "Utilizar técnicas de ahorro de sangre como la recuperación intraoperatoria de sangre (cell saver) cuando sea apropiado." },
        { role: "Cirujanos", pillar: 2, activity: "Minimizar el uso de drenajes o manejarlos para reducir la pérdida sanguínea postoperatoria." },
        { role: "Cirujanos", pillar: 2, activity: "Colaborar en el manejo multidisciplinario del sangrado postoperatorio." },
        // Anestesiólogos
        { role: "Anestesiólogos", pillar: 1, activity: "Evaluar preoperatoriamente la anemia, coagulopatía y medicación relevante (anticoagulantes/antiagregantes)." },
        { role: "Anestesiólogos", pillar: 2, activity: "Aplicar técnicas anestésicas que puedan reducir el sangrado (ej. hipotensión controlada si es seguro)." },
        { role: "Anestesiólogos", pillar: 2, activity: "Gestionar la recuperación intraoperatoria de sangre (cell saver)." },
        { role: "Anestesiólogos", pillar: 2, activity: "Utilizar pruebas de coagulación en el punto de atención (POCT) para guiar la terapia hemostática." },
        { role: "Anestesiólogos", pillar: 2, activity: "Considerar y aplicar técnicas como la hemodilución normovolémica aguda (ANH) si es apropiado." },
        { role: "Anestesiólogos", pillar: 3, activity: "Manejar la hemodinámica intraoperatoria para optimizar la perfusión tisular." },
        { role: "Anestesiólogos", pillar: 3, activity: "Implementar estrategias de fluidoterapia restrictiva o guiada por objetivos." },
        { role: "Anestesiólogos", pillar: 3, activity: "Utilizar umbrales de transfusión restrictivos y basados en la fisiología del paciente." },
        // Médicos de medicina crítica / intensivistas
        { role: "Médicos-criticos", pillar: 1, activity: "Diagnosticar y manejar la anemia adquirida en la UCI." },
        { role: "Médicos-criticos", pillar: 2, activity: "Manejar la coagulopatía asociada a enfermedad crítica." },
        { role: "Médicos-criticos", pillar: 2, activity: "Minimizar la pérdida de sangre por flebotomía (uso de tubos pediátricos, agrupación de análisis, evitar extracciones innecesarias)." },
        { role: "Médicos-criticos", pillar: 2, activity: "Manejar cuidadosamente la anticoagulación y su reversión cuando sea necesario." },
        { role: "Médicos-criticos", pillar: 3, activity: "Implementar estrategias de transfusión restrictivas." },
        { role: "Médicos-criticos", pillar: 3, activity: "Optimizar la entrega y el consumo de oxígeno para mejorar la tolerancia a la anemia." },
        // Médicos adscritos a un hospital (Hospitalistas)
        { role: "Hospitalistas", pillar: 1, activity: "Identificar y manejar la anemia adquirida en el hospital." },
        { role: "Hospitalistas", pillar: 1, activity: "Planificar el alta asegurando el manejo continuo de la anemia si persiste." },
        // Especialistas en medicina transfusional
        { role: "Medicina-transfusional", pillar: 3, activity: "Proporcionar consultoría experta sobre indicaciones de transfusión complejas y manejo de reacciones." },
        // Personal de Enfermería
        { role: "Enfermería", pillar: 1, activity: "Administrar tratamientos prescritos para la anemia (hierro oral/IV, etc.) y monitorizar efectos adversos." },
        { role: "Enfermería", pillar: 2, activity: "Utilizar técnicas de extracción de sangre que minimicen el volumen extraído (ej. tubos correctos, purgado mínimo de vías)." },
        { role: "Enfermería", pillar: 3, activity: "Reforzar la importancia de la movilización temprana y otras medidas para optimizar la fisiología del paciente." },
        // Farmacéuticos (clínicos)
        { role: "Farmacéuticos", pillar: 1, activity: "Optimizar la farmacoterapia para tratar la anemia (ej. dosificación de hierro, agentes estimulantes de la eritropoyesis)." },
        { role: "Farmacéuticos", pillar: 1, activity: "Revisar el perfil de medicación para identificar fármacos que puedan causar anemia." },
        { role: "Farmacéuticos", pillar: 2, activity: "Optimizar la farmacoterapia hemostática (ej. vitamina K, agentes hemostáticos, agentes de reversión de anticoagulantes)." },
        { role: "Farmacéuticos", pillar: 2, activity: "Revisar el perfil de medicación para identificar fármacos que puedan aumentar el riesgo de sangrado (ej. AINEs, anticoagulantes, antiagregantes)." },
        // Profesionales de Laboratorio
        { role: "Laboratorio", pillar: 2, activity: "Implementar y promover el uso de tubos de extracción de bajo volumen (pediátricos)." },
        { role: "Laboratorio", pillar: 2, activity: "Gestionar y asegurar la calidad de las pruebas de coagulación en el punto de atención (POCT)." },
        { role: "Laboratorio", pillar: 3, activity: "Gestionar y asegurar la calidad de las pruebas de hemoglobina en el punto de atención (POCT)." },
        // Perfusionistas
        { role: "Perfusionistas", pillar: 2, activity: "Manejar los circuitos de circulación extracorpórea (CEC) para minimizar la hemodilución (ej. bajo volumen de cebado)." },
        { role: "Perfusionistas", pillar: 2, activity: "Monitorizar y ayudar a manejar la anticoagulación durante la CEC." },
        // Técnico de Hemoterapia (NOMBRE ACTUALIZADO)
        { role: "Tecnico-de-hemoterapia", pillar: 2, activity: "Preparar componentes específicos para estrategias hemostáticas (ej., crioprecipitado, plaquetas) según indicación médica estricta." },
        { role: "Tecnico-de-hemoterapia", pillar: 2, activity: "Operar y gestionar eficazmente la recuperación intraoperatoria de sangre (cell saver) durante la CEC." },
        { role: "Tecnico-de-hemoterapia", pillar: 2, activity: "Contribuir a minimizar la pérdida de sangre promoviendo muestreos de bajo volumen." },
        { role: "Tecnico-de-hemoterapia", pillar: 3, activity: "Asegurar la dispensación apropiada y segura de componentes sanguíneos siguiendo las guías restrictivas de GSP." }
    ];

    // --- Variables de Estado del Juego ---
    let availableActivities = [];
    let currentActivity = null;
    let selectedRole = null;
    let selectedPillar = null;
    let score = 0;
    let incorrectAnswers = [];
    // Extrae roles únicos de la lista actualizada (incluirá "Tecnico-de-hemoterapia")
    const roles = [...new Set(activitiesData.map(item => item.role))].sort();
    let answerChecked = false;

    // --- Referencias a Elementos del DOM ---
    const activityDisplay = document.getElementById('activity-display');
    const roleButtonsContainer = document.getElementById('role-buttons');
    const pillarButtonsContainer = document.getElementById('pillar-buttons');
    const feedbackDisplay = document.getElementById('feedback');
    const scoreDisplay = document.getElementById('score');
    const nextButton = document.getElementById('next-button');
    const finalResultsDiv = document.getElementById('final-results');
    const finalScoreDisplay = document.getElementById('final-score');
    const incorrectListUl = document.getElementById('incorrect-list');
    const restartButton = document.getElementById('restart-button');
    const selectionSection = document.getElementById('selection-section');
    const activitySection = document.getElementById('activity-section');

    // --- Funciones del Juego ---

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function sanitizeClassName(name) {
        return name.replace(/[\s/()]+/g, '-');
    }

    function createRoleButtons() {
        roleButtonsContainer.innerHTML = '';
        console.log("Generando botones para roles:", roles); // Verifica que 'roles' tenga el nombre actualizado
        roles.forEach(role => {
            const button = document.createElement('button');
            const className = sanitizeClassName(role); // Generará "Tecnico-de-hemoterapia"
            // Muestra "Tecnico de hemoterapia" (con espacios) en el botón
            button.textContent = role.replace(/-/g, ' ');
            button.dataset.role = role; // Guarda "Tecnico-de-hemoterapia"
            button.classList.add('role-btn', `role-${className}`); // Añade clase .role-Tecnico-de-hemoterapia
            roleButtonsContainer.appendChild(button);
        });
    }

    function displayNextActivity() {
        if (availableActivities.length === 0) {
            endGame();
            return;
        }

        currentActivity = availableActivities.pop();
        activityDisplay.textContent = currentActivity.activity;

        selectedRole = null;
        selectedPillar = null;
        answerChecked = false;
        feedbackDisplay.innerHTML = '';
        feedbackDisplay.className = 'feedback';

        roleButtonsContainer.querySelectorAll('.role-btn').forEach(btn => {
            btn.classList.remove('selected');
            btn.disabled = false;
        });
        pillarButtonsContainer.querySelectorAll('.pillar-btn').forEach(btn => {
             btn.classList.remove('selected');
             btn.disabled = false;
         });

        nextButton.disabled = true;
    }

    function handleSelection(event, type) {
        if (answerChecked) return;

        const clickedButton = event.target.closest('button');
        if (!clickedButton) return;

        const container = type === 'role' ? roleButtonsContainer : pillarButtonsContainer;
        const selectedClass = 'selected';

        container.querySelectorAll('button').forEach(btn => btn.classList.remove(selectedClass));
        clickedButton.classList.add(selectedClass);

        if (type === 'role') {
            selectedRole = clickedButton.dataset.role; // Obtendrá "Tecnico-de-hemoterapia" si se selecciona
        } else {
            selectedPillar = parseInt(clickedButton.dataset.pillar, 10);
        }

        if (selectedRole !== null && selectedPillar !== null) {
            checkAnswer();
        }
    }

    function checkAnswer() {
        if (answerChecked) return;
        answerChecked = true;

        const correctRole = currentActivity.role; // Será "Tecnico-de-hemoterapia" para esas actividades
        const correctPillar = currentActivity.pillar;
        const isRoleCorrect = selectedRole === correctRole; // Comparará con "Tecnico-de-hemoterapia"
        const isPillarCorrect = selectedPillar === correctPillar;

        roleButtonsContainer.querySelectorAll('button').forEach(btn => btn.disabled = true);
        pillarButtonsContainer.querySelectorAll('button').forEach(btn => btn.disabled = true);

        let feedbackHTML = '';
        let feedbackClass = '';
        let points = 0;

        if (isRoleCorrect && isPillarCorrect) {
            points = 1;
            feedbackClass = 'feedback-correct';
            feedbackHTML = '¡CORRECTO!';
        } else if (isRoleCorrect || isPillarCorrect) {
            points = 0.5;
            feedbackClass = 'feedback-partial';
            // Muestra "Tecnico de hemoterapia" legible en el feedback si es necesario
            const roleFeedback = isRoleCorrect
                ? `<span class="correct-part">Rol: CORRECTO</span>`
                : `<span class="incorrect-part">Rol: INCORRECTO (Era ${correctRole.replace(/-/g, ' ')})</span>`;
            const pillarFeedback = isPillarCorrect
                ? `<span class="correct-part">Pilar: CORRECTO</span>`
                : `<span class="incorrect-part">Pilar: INCORRECTO (Era Pilar ${correctPillar})</span>`;
            feedbackHTML = `${roleFeedback}${pillarFeedback}`;
            incorrectAnswers.push({
                activity: currentActivity.activity,
                // Muestra nombres legibles en el resumen de errores
                selected: `Rol: ${selectedRole.replace(/-/g, ' ')}, Pilar: ${selectedPillar}`,
                correct: `Rol: ${correctRole.replace(/-/g, ' ')}, Pilar: ${correctPillar}`,
                partial: true
            });
        } else {
            points = 0;
            feedbackClass = 'feedback-incorrect';
            // Muestra "Tecnico de hemoterapia" legible en el feedback si es necesario
            feedbackHTML = `INCORRECTO - Correcto: Rol ${correctRole.replace(/-/g, ' ')}, Pilar ${correctPillar}`;
            incorrectAnswers.push({
                activity: currentActivity.activity,
                 // Muestra nombres legibles en el resumen de errores
                selected: `Rol: ${selectedRole.replace(/-/g, ' ')}, Pilar: ${selectedPillar}`,
                correct: `Rol: ${correctRole.replace(/-/g, ' ')}, Pilar: ${correctPillar}`,
                partial: false
            });
        }

        score += points;
        scoreDisplay.textContent = score;
        feedbackDisplay.innerHTML = feedbackHTML;
        feedbackDisplay.className = `feedback ${feedbackClass}`;
        nextButton.disabled = false;
    }

    function endGame() {
        activitySection.style.display = 'none';
        selectionSection.style.display = 'none';
        feedbackDisplay.style.display = 'none';
        nextButton.style.display = 'none';

        finalResultsDiv.style.display = 'block';
        finalScoreDisplay.textContent = score;

        incorrectListUl.innerHTML = '';
        if (incorrectAnswers.length === 0) {
            incorrectListUl.innerHTML = '<li>¡Felicidades! No tuviste errores.</li>';
        } else {
            incorrectAnswers.forEach(err => {
                const li = document.createElement('li');
                const selectedText = err.selected || 'No registrado';
                const correctText = err.correct || 'No registrado';
                li.innerHTML = `
                    <span class="activity-text">Actividad: ${err.activity || 'N/A'}</span>
                    <span class="user-choice">Tu respuesta: ${selectedText}</span>
                    <span class="correct-choice">Respuesta correcta: ${correctText}</span>
                     ${err.partial ? '<span style="color: orange; font-size: 0.8em;">(Error parcial)</span>' : ''}
                `;
                incorrectListUl.appendChild(li);
            });
        }
    }

    function setupListeners() {
        roleButtonsContainer.addEventListener('click', (event) => {
            if (event.target.closest('.role-btn')) {
                handleSelection(event, 'role');
            }
        });

        pillarButtonsContainer.addEventListener('click', (event) => {
             if (event.target.closest('.pillar-btn')) {
                handleSelection(event, 'pillar');
            }
        });

        nextButton.addEventListener('click', displayNextActivity);
        restartButton.addEventListener('click', startGame);
    }

    function startGame() {
        console.log("Iniciando juego...");
        score = 0;
        incorrectAnswers = [];
        availableActivities = [...activitiesData]; // Usa la data actualizada
        shuffleArray(availableActivities);
        answerChecked = false;

        scoreDisplay.textContent = score;
        feedbackDisplay.innerHTML = '';
        feedbackDisplay.className = 'feedback';
        finalResultsDiv.style.display = 'none';

        activitySection.style.display = 'block';
        selectionSection.style.display = 'flex';
        feedbackDisplay.style.display = 'block';
        nextButton.style.display = 'block';

        createRoleButtons(); // Creará botones con el nombre actualizado
        displayNextActivity();
        console.log("Juego iniciado, primera actividad mostrada.");
    }

    // --- Inicialización ---
    setupListeners();
    startGame();
});