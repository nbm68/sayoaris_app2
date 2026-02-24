const SCREENS = {
    BIENVENIDA: 'bienvenida',
    EVALUACION: 'evaluacion',
    AGENDAMIENTO: 'agendamiento',
    CONFIRMACION: 'confirmacion'
};

const templates = {
    [SCREENS.BIENVENIDA]: `
        <div class="relative flex h-full w-full flex-col bg-background-light dark:bg-background-dark overflow-y-auto">
            <header class="flex items-center justify-between px-6 pt-8 pb-4 safe-area-top shrink-0">
                <div class="flex items-center justify-center w-full">
                    <div class="flex flex-col items-center gap-1">
                        <span class="text-primary font-bold tracking-widest text-xl uppercase">Sayoaris</span>
                        <div class="gold-gradient-border"></div>
                    </div>
                </div>
                <button class="absolute right-6 top-8 text-slate-400 dark:text-slate-500">
                    <span class="material-symbols-outlined">info</span>
                </button>
            </header>
            <main class="flex-1 flex flex-col items-center justify-center px-8 text-center">
                <div class="relative mb-12 w-full max-w-[280px] aspect-square rounded-full overflow-hidden bg-primary/5 flex items-center justify-center">
                    <div class="absolute inset-0 border-[1px] border-accent-gold/20 rounded-full scale-110"></div>
                    <div class="w-full h-full bg-cover bg-center opacity-90" data-alt="Professional medical spa aesthetic interior treatment room" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBgwgqga-x9B03WfnMr6t01o9aiY2LCugQJ-m-DKafBs26fYSW9USd_J1b0wxHSRvmneSrO8UTJ-nIC5-g_8KK3qoNK55KP20OF3D_60FIFxGJmnuazPIixvVC0blUX9Qt61l6Wx_Bo955IKemcy6vo_mT7mLORshFo9KCMMTWmka9JAm5Dw0MtThldhGB_Bf8C7gACJ4xLcgI2moSPcmgu7L_YCPD60EiMp2oi-F0KcCsJGHupcli3KGQl-SAO4CsckS6xX2bt0OPY')"></div>
                    <div class="absolute inset-0 border-[0.5px] border-accent-gold/40 rounded-full"></div>
                </div>
                <h1 class="text-text-main dark:text-white text-3xl font-bold leading-tight tracking-tight mb-4">
                    Evaluación Médica <br/>en 60 segundos
                </h1>
                <p class="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-10 px-2">
                    Descubre si eres candidata al tratamiento completando este breve formulario.
                </p>
                <div class="flex items-center gap-2 mb-12 bg-primary/10 px-4 py-2 rounded-full">
                    <span class="material-symbols-outlined text-primary text-sm">bolt</span>
                    <span class="text-primary text-xs font-semibold uppercase tracking-wider">Toma menos de 1 minuto</span>
                </div>
            </main>
            <footer class="px-8 pb-12 pt-4">
                <button onclick="navigate('${SCREENS.EVALUACION}')" class="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/25 transition-all flex items-center justify-center gap-2 active:scale-[0.98]">
                    <span>Comenzar evaluación</span>
                    <span class="material-symbols-outlined text-xl">arrow_forward</span>
                </button>
                <p class="mt-6 text-center text-[10px] text-slate-400 uppercase tracking-widest leading-none">
                    Privacidad Garantizada • Consultoría Médica Profesional
                </p>
            </footer>
            <div class="h-1.5 w-full bg-gradient-to-r from-transparent via-accent-gold/30 to-transparent"></div>
        </div>
    `,
    [SCREENS.EVALUACION]: `
        <div class="relative flex h-full w-full flex-col bg-background-light dark:bg-background-dark overflow-y-auto custom-scrollbar">
            <header class="sticky top-0 z-10 flex items-center bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-4 py-4 border-b border-primary/10">
                <button onclick="navigate('${SCREENS.BIENVENIDA}')" class="text-slate-900 dark:text-slate-100 flex items-center justify-center p-2 rounded-full hover:bg-primary/10 transition-colors">
                    <span class="material-symbols-outlined">arrow_back_ios</span>
                </button>
                <h1 class="text-slate-900 dark:text-slate-100 text-lg font-bold flex-1 text-center pr-10">Evaluación Médica</h1>
            </header>
            <div class="px-6 pt-6 pb-2">
                <div class="flex justify-between items-center mb-2">
                    <span class="text-xs font-semibold text-primary uppercase tracking-wider">Progreso del Diagnóstico</span>
                    <span class="text-xs font-bold text-slate-500">65%</span>
                </div>
                <div class="w-full bg-primary/10 rounded-full h-1.5">
                    <div class="bg-primary h-1.5 rounded-full transition-all duration-500" style="width: 65%;"></div>
                </div>
            </div>
            <main class="flex-1 px-6 py-4 space-y-8 pb-32">
                <section>
                    <div class="flex items-center gap-2 mb-4">
                        <span class="material-symbols-outlined text-accent-gold">person</span>
                        <h2 class="text-base font-bold text-slate-800 dark:text-slate-200 uppercase tracking-tight">Datos Personales</h2>
                    </div>
                    <form id="evaluacion-form" onsubmit="event.preventDefault(); validateFormAndNavigate('${SCREENS.AGENDAMIENTO}');" class="space-y-4">
                        <div class="group">
                            <label class="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-1">Nombre Completo <span class="text-red-500">*</span></label>
                            <input required id="ev-nombre" class="w-full rounded-lg border border-primary/20 bg-white dark:bg-slate-800/50 py-3 px-4 focus:border-accent-gold focus:ring-1 focus:ring-accent-gold outline-none transition-all placeholder:text-slate-400 form-input" placeholder="Ej: Ana Maria Restrepo" type="text"/>
                        </div>
                        <div class="group">
                            <label class="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-1">Correo Electrónico <span class="text-red-500">*</span></label>
                            <input required id="ev-correo" class="w-full rounded-lg border border-primary/20 bg-white dark:bg-slate-800/50 py-3 px-4 focus:border-accent-gold focus:ring-1 focus:ring-accent-gold outline-none transition-all placeholder:text-slate-400 form-input" placeholder="ejemplo@correo.com" type="email"/>
                        </div>
                        <div class="group">
                            <label class="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-1">WhatsApp <span class="text-red-500">*</span></label>
                            <input required id="ev-whatsapp" class="w-full rounded-lg border border-primary/20 bg-white dark:bg-slate-800/50 py-3 px-4 focus:border-accent-gold focus:ring-1 focus:ring-accent-gold outline-none transition-all placeholder:text-slate-400 form-input" placeholder="0414 123 4567" type="tel"/>
                        </div>
                        <div class="group">
                            <label class="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-1">Ciudad <span class="text-red-500">*</span></label>
                            <input required id="ev-ciudad" class="w-full rounded-lg border border-primary/20 bg-white dark:bg-slate-800/50 py-3 px-4 focus:border-accent-gold focus:ring-1 focus:ring-accent-gold outline-none transition-all placeholder:text-slate-400 form-input" placeholder="Ej: Medellín" type="text"/>
                        </div>
                    </form>
                </section>
                <hr class="border-t border-primary/10"/>
                <section>
                    <div class="flex items-center gap-2 mb-6">
                        <span class="material-symbols-outlined text-accent-gold">stethoscope</span>
                        <h2 class="text-base font-bold text-slate-800 dark:text-slate-200 uppercase tracking-tight">Evaluación de Arañitas</h2>
                    </div>
                    <div class="mb-6">
                        <p class="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">¿Hace cuánto tiempo las tiene?</p>
                        <div class="grid grid-cols-1 gap-2">
                            <label class="relative flex items-center p-4 border border-primary/10 rounded-xl cursor-pointer hover:bg-primary/5 transition-colors group">
                                <input class="w-4 h-4 text-primary focus:ring-primary border-primary/30" name="duration" type="radio"/>
                                <span class="ml-3 text-sm text-slate-600 dark:text-slate-400">Menos de 1 año</span>
                            </label>
                            <label class="relative flex items-center p-4 border border-accent-gold/40 bg-accent-gold/5 rounded-xl cursor-pointer transition-colors group">
                                <input checked class="w-4 h-4 text-accent-gold focus:ring-accent-gold border-accent-gold/30" name="duration" type="radio"/>
                                <span class="ml-3 text-sm font-medium text-slate-800 dark:text-slate-200">1 a 5 años</span>
                            </label>
                            <label class="relative flex items-center p-4 border border-primary/10 rounded-xl cursor-pointer hover:bg-primary/5 transition-colors group">
                                <input class="w-4 h-4 text-primary focus:ring-primary border-primary/30" name="duration" type="radio"/>
                                <span class="ml-3 text-sm text-slate-600 dark:text-slate-400">Más de 5 años</span>
                            </label>
                        </div>
                    </div>
                    <div class="mb-6">
                        <p class="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">¿Siente dolor o pesadez en las piernas?</p>
                        <div class="flex gap-2" id="pain-buttons">
                            <button type="button" onclick="selectPainOption(this)" class="pain-opt flex-1 py-3 px-4 border border-primary/10 rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">Sí</button>
                            <button type="button" onclick="selectPainOption(this)" class="pain-opt flex-1 py-3 px-4 border border-primary text-primary bg-primary/5 rounded-lg text-sm font-bold transition-colors shadow-inner">Ocasionalmente</button>
                            <button type="button" onclick="selectPainOption(this)" class="pain-opt flex-1 py-3 px-4 border border-primary/10 rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">No</button>
                        </div>
                        <input type="hidden" id="ev-dolor" value="Ocasionalmente">
                    </div>
                    <div class="mb-6">
                        <p class="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">¿Ha recibido tratamientos previos?</p>
                        <div class="flex gap-4">
                            <label class="flex items-center gap-2">
                                <input class="w-5 h-5 text-primary border-primary/20" name="prev_treat" type="radio"/>
                                <span class="text-sm">Sí</span>
                            </label>
                            <label class="flex items-center gap-2">
                                <input checked class="w-5 h-5 text-primary border-primary/20" name="prev_treat" type="radio"/>
                                <span class="text-sm">No</span>
                            </label>
                        </div>
                    </div>
                    <div class="mb-6">
                        <p class="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">¿Ha notado un aumento reciente?</p>
                        <div class="flex gap-4">
                            <label class="flex items-center gap-2">
                                <input class="w-5 h-5 text-primary border-primary/20" name="increase" type="radio"/>
                                <span class="text-sm">Sí</span>
                            </label>
                            <label class="flex items-center gap-2">
                                <input checked class="w-5 h-5 text-primary border-primary/20" name="increase" type="radio"/>
                                <span class="text-sm">No</span>
                            </label>
                        </div>
                    </div>
                </section>
                <hr class="border-t border-primary/10"/>
                <section>
                    <div class="flex items-center gap-2 mb-4">
                        <span class="material-symbols-outlined text-accent-gold">edit_note</span>
                        <h2 class="text-base font-bold text-slate-800 dark:text-slate-200 uppercase tracking-tight">Información Adicional</h2>
                    </div>
                    <label class="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">Comentarios adicionales o dudas</label>
                    <textarea id="ev-comentarios" class="w-full rounded-xl border border-primary/20 bg-white dark:bg-slate-800/50 py-3 px-4 focus:border-accent-gold focus:ring-1 focus:ring-accent-gold outline-none transition-all placeholder:text-slate-400 resize-none form-input" placeholder="Cuéntenos más sobre su caso..." rows="4"></textarea>
                </section>
            </main>
            <footer class="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[28rem] bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg border-t border-primary/10 px-6 py-4 pb-8 z-20">
                <button onclick="document.getElementById('evaluacion-form').requestSubmit();" class="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2">
                    <span>Continuar para agendar</span>
                    <span class="material-symbols-outlined">calendar_month</span>
                </button>
                <p class="text-[10px] text-center text-slate-400 mt-3 uppercase tracking-widest font-medium">Bienestar & Salud Sayoaris</p>
            </footer>
        </div>
    `,
    [SCREENS.AGENDAMIENTO]: `
        <div class="relative flex h-full w-full flex-col bg-background-light dark:bg-background-dark overflow-y-auto custom-scrollbar">
            <header class="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 ios-blur border-b border-slate-200/50 dark:border-slate-800/50">
                <div class="flex items-center justify-between px-4 h-16">
                    <button onclick="navigate('${SCREENS.EVALUACION}')" class="flex items-center justify-center size-10 text-slate-900 dark:text-slate-100 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                        <span class="material-symbols-outlined text-slate-600 dark:text-slate-400">arrow_back_ios_new</span>
                    </button>
                    <h1 class="text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-100">Agendamiento de Cita</h1>
                    <button class="flex items-center justify-center size-10 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                        <span class="material-symbols-outlined text-slate-600 dark:text-slate-400">info</span>
                    </button>
                </div>
            </header>
            <main class="flex-1 flex flex-col pb-32">
                <div class="px-6 py-4">
                    <div class="bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-100 dark:border-slate-800 shadow-sm flex items-center gap-4">
                        <div class="size-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                            <span class="material-symbols-outlined">face_3</span>
                        </div>
                        <div>
                            <p class="text-xs font-bold text-primary uppercase tracking-wider">Tratamiento Estético</p>
                            <h2 class="text-base font-bold text-slate-900 dark:text-slate-100">Evaluación Arañas Vasculares</h2>
                        </div>
                    </div>
                </div>
                <section class="px-4">
                    <h3 class="px-2 text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-4">Selecciona una fecha</h3>
                    <div class="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 p-4">
                        <div class="flex items-center justify-between mb-4">
                            <button onclick="changeMonth(-1)" class="p-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg">
                                <span class="material-symbols-outlined text-slate-400">chevron_left</span>
                            </button>
                            <p id="calendar-month-year" class="font-bold text-slate-800 dark:text-slate-200 capitalize">Octubre 2023</p>
                            <button onclick="changeMonth(1)" class="p-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg">
                                <span class="material-symbols-outlined text-slate-400">chevron_right</span>
                            </button>
                        </div>
                        <div class="grid grid-cols-7 mb-2">
                            <span class="text-center text-xs font-bold text-slate-400 py-2">D</span>
                            <span class="text-center text-xs font-bold text-slate-400 py-2">L</span>
                            <span class="text-center text-xs font-bold text-slate-400 py-2">M</span>
                            <span class="text-center text-xs font-bold text-slate-400 py-2">M</span>
                            <span class="text-center text-xs font-bold text-slate-400 py-2">J</span>
                            <span class="text-center text-xs font-bold text-slate-400 py-2">V</span>
                            <span class="text-center text-xs font-bold text-slate-400 py-2">S</span>
                        </div>
                        <div id="calendar-days" class="grid grid-cols-7 gap-1 text-slate-900 dark:text-slate-100">
                            <!-- Dynamic Calendar Days injected here -->
                        </div>
                    </div>
                </section>
                <section class="px-4 mt-8">
                    <h3 class="px-2 text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-4">Horarios disponibles</h3>
                    <div class="grid grid-cols-2 gap-3" id="time-slots">
                        <!-- Dynamic time slots injected here -->
                    </div>
                </section>
            </main>
            <div class="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[28rem] p-6 bg-background-light/90 dark:bg-background-dark/90 ios-blur border-t border-slate-200 dark:border-slate-800">
                <button onclick="validateAppointmentAndNavigate('${SCREENS.CONFIRMACION}')" class="w-full bg-accent-gold text-white h-14 rounded-xl font-bold text-base shadow-xl shadow-accent-gold/30 hover:opacity-90 active:scale-[0.98] transition-all">
                    Confirmar cita
                </button>
            </div>
        </div>
    `,
    [SCREENS.CONFIRMACION]: `
        <div class="relative flex h-full w-full flex-col bg-background-light dark:bg-background-dark overflow-y-auto">
            <div class="flex items-center bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md sticky top-0 z-10 p-4 pb-2 justify-between">
                <div onclick="navigate('${SCREENS.BIENVENIDA}')" class="text-slate-900 dark:text-slate-100 flex size-12 shrink-0 items-center justify-start cursor-pointer hover:opacity-75 transition-opacity">
                    <span class="material-symbols-outlined text-2xl">close</span>
                </div>
                <h2 class="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-12">
                    Confirmación
                </h2>
            </div>
            <div class="flex flex-col grow items-center justify-center p-6 pb-32">
                <div class="w-full max-w-[320px] aspect-square flex items-center justify-center mb-10">
                    <div class="relative flex items-center justify-center w-48 h-48 rounded-full bg-primary/10 dark:bg-primary/20">
                        <div class="absolute inset-0 rounded-full bg-primary/20 animate-ping opacity-25"></div>
                        <div class="relative flex items-center justify-center w-32 h-32 rounded-full bg-primary shadow-lg shadow-primary/30">
                            <span class="material-symbols-outlined text-white text-7xl font-bold">check</span>
                        </div>
                    </div>
                </div>
                <div class="text-center space-y-4 max-w-sm">
                    <h1 class="text-slate-900 dark:text-slate-100 text-[32px] font-bold leading-tight tracking-tight">
                        ¡Solicitud Enviada!
                    </h1>
                    <p class="text-slate-600 dark:text-slate-400 text-lg font-normal leading-relaxed px-2">
                        Has sido agendada con éxito en nuestro sistema.
                    </p>
                    <div class="pt-4 border-t border-primary/10 dark:border-primary/5 mx-4">
                        <p class="text-slate-800 dark:text-slate-200 text-base font-medium leading-normal">
                            La <span class="text-primary font-bold">Dra. Liz Guzman</span> revisará tu información y se pondrá en contacto contigo muy pronto para confirmar los detalles.
                        </p>
                    </div>
                </div>
            </div>
            <div class="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[28rem] p-6 bg-background-light dark:bg-background-dark safe-area-bottom z-20">
                <div class="flex flex-col gap-3 w-full">
                    <button onclick="navigate('${SCREENS.BIENVENIDA}')" class="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-5 bg-primary text-white text-lg font-bold leading-normal tracking-wide shadow-lg shadow-primary/25 active:scale-[0.98] transition-transform">
                        <span class="truncate">Volver al Inicio</span>
                    </button>
                    <button class="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 bg-transparent text-slate-500 dark:text-slate-400 text-base font-semibold leading-normal hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                        <span class="truncate">Ver mis solicitudes</span>
                    </button>
                </div>
                <div class="h-6"></div>
            </div>
            <div class="fixed top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
            <div class="fixed bottom-40 -left-20 w-48 h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
        </div>
    `
};

// Set to keep track of generated screens
const renderedScreens = new Set();
const appContainer = document.getElementById('app-container');

function navigate(screenId) {
    if (!templates[screenId]) {
        console.error('Screen not found:', screenId);
        return;
    }

    // Hide all current screens with fade out
    const allScreens = appContainer.querySelectorAll('.screen-container');
    allScreens.forEach(el => {
        el.classList.remove('active');
        // Small delay to allow fade out transition
        setTimeout(() => {
            el.style.display = 'none';
        }, 300);
    });

    let targetScreen = document.getElementById(`screen-${screenId}`);
    
    // If screen not generated yet, inject it
    if (!targetScreen) {
        const wrapper = document.createElement('div');
        wrapper.id = `screen-${screenId}`;
        wrapper.className = 'screen-container absolute inset-0 w-full h-full bg-background-light dark:bg-background-dark transition-opacity duration-300 opacity-0';
        wrapper.style.display = 'none'; // Initially hidden
        wrapper.innerHTML = templates[screenId];
        appContainer.appendChild(wrapper);
        targetScreen = wrapper;
        renderedScreens.add(screenId);
    }
    
    // Show new screen with fade in
    setTimeout(() => {
        // Reset scroll position when showing
        const scrollableAreas = targetScreen.querySelectorAll('.overflow-y-auto');
        scrollableAreas.forEach(area => area.scrollTop = 0);
        
        targetScreen.style.display = 'flex';
        // Small delay to allow display:flex to apply before transition
        setTimeout(() => {
            targetScreen.classList.add('active');
            targetScreen.style.opacity = '1';

            // Initialize dynamic contents if needed when screen shows
            if (screenId === SCREENS.AGENDAMIENTO) {
                initCalendar();
            }
        }, 10);
    }, 300); // Wait for previous screen to fade out
}

// Custom UI interactions
window.selectPainOption = function(btn) {
    const container = document.getElementById('pain-buttons');
    if (!container) return;
    
    // reset all buttons to standard state
    const buttons = container.querySelectorAll('.pain-opt');
    buttons.forEach(b => {
        b.className = 'pain-opt flex-1 py-3 px-4 border border-primary/10 rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors';
    });
    
    // set active state on clicked button
    btn.className = 'pain-opt flex-1 py-3 px-4 border border-primary text-primary bg-primary/5 rounded-lg text-sm font-bold transition-colors shadow-inner';
    
    // Update hidden input
    const input = document.getElementById('ev-dolor');
    if (input) input.value = btn.innerText.trim();
};

window.validateFormAndNavigate = function(nextScreen) {
    const form = document.getElementById('evaluacion-form');
    // Check custom email domain validity
    const emailInput = document.getElementById('ev-correo');
    const emailStr = emailInput ? emailInput.value.trim() : '';
    
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailStr)) {
        emailInput.setCustomValidity('Por favor ingresa un correo electrónico válido');
        emailInput.reportValidity();
        return;
    } else {
         emailInput.setCustomValidity('');
    }
    
    // Continue navigation
    navigate(nextScreen);
};

// Calendar Logic
let currentDate = new Date(); // Start with current actual date

window.changeMonth = function(offset) {
    currentDate.setMonth(currentDate.getMonth() + offset);
    initCalendar();
};

window.initCalendar = function() {
    const monthYearEl = document.getElementById('calendar-month-year');
    const daysEl = document.getElementById('calendar-days');
    const slotsEl = document.getElementById('time-slots');
    
    if (!monthYearEl || !daysEl || !slotsEl) return;

    // Update Header
    const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    monthYearEl.innerText = `${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`;
    
    // Calculate days
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    let html = '';
    
    // Add empty slots
    for (let i = 0; i < firstDay; i++) {
        html += '<div class="h-10"></div>';
    }
    
    // Highlight today if looking at current month
    const today = new Date();
    const isCurrentMonth = today.getMonth() === month && today.getFullYear() === year;
    const currentDayClass = 'h-10 flex items-center justify-center rounded-full text-sm font-bold bg-accent-gold text-white shadow-lg shadow-accent-gold/30';
    const normalDayClass = 'h-10 flex items-center justify-center rounded-full text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors';
    
    // Add days
    for (let i = 1; i <= daysInMonth; i++) {
        if (isCurrentMonth && today.getDate() === i) {
            html += `<button onclick="generateRandomSlots(this)" class="${currentDayClass}">${i}</button>`;
        } else {
             // Future dates selectable, past dates disabled visually (optional, keeping simple for now)
            html += `<button onclick="generateRandomSlots(this)" class="${normalDayClass}">${i}</button>`;
        }
    }
    
    daysEl.innerHTML = html;
    generateRandomSlots(); // Load initial slots
};

window.generateRandomSlots = function(btnTarget = null) {
    // optional: add select styling to the day cell clicked
    if(btnTarget) {
      const container = document.getElementById('calendar-days');
      if (container) {
          container.querySelectorAll('button').forEach(b => {
              b.className = 'h-10 flex items-center justify-center rounded-full text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors';
          });
      }
      btnTarget.className = 'h-10 flex items-center justify-center rounded-full text-sm font-bold bg-primary text-white shadow-lg shadow-primary/30';
    }

    let dateInput = document.getElementById('ag-date');
    if (!dateInput) {
        dateInput = document.createElement('input');
        dateInput.type = 'hidden';
        dateInput.id = 'ag-date';
        document.body.appendChild(dateInput);
    }
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    let day;
    if (btnTarget) {
        day = String(btnTarget.innerText.trim()).padStart(2, '0');
    } else {
        const today = new Date().getDate();
        day = String(today).padStart(2, '0');
    }
    dateInput.value = `${year}-${month}-${day}`;

    const slotsEl = document.getElementById('time-slots');
    if(!slotsEl) return;
    
    // Convert 12h to 24h for sorting
    const parseTime = (time12h) => {
        const [time, modifier] = time12h.split(' ');
        let [hours, minutes] = time.split(':');
        if (hours === '12') hours = '00';
        if (modifier === 'PM') hours = parseInt(hours, 10) + 12;
        return parseInt(hours, 10) * 60 + parseInt(minutes, 10);
    };

    const allSlots = ["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"];
    
    let html = '';
    allSlots.forEach((slot, index) => {
        // Render all unselected initially, requiring the user to explicitly pick one
        html += `<button onclick="selectTimeSlot(this)" class="time-opt py-4 px-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 text-sm font-semibold hover:border-accent-gold transition-colors focus:ring-2 focus:ring-accent-gold/20">${slot}</button>`;
    });
    
    slotsEl.innerHTML = html;
    
    // Clear any hidden selected slot input when day changes
    const input = document.getElementById('ag-time');
    if(input) input.value = '';
};

window.selectTimeSlot = function(btn) {
    const container = document.getElementById('time-slots');
    if (!container) return;
    
    // reset all buttons
    const buttons = container.querySelectorAll('.time-opt');
    buttons.forEach(b => {
        b.className = 'time-opt py-4 px-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 text-sm font-semibold hover:border-accent-gold transition-colors focus:ring-2 focus:ring-accent-gold/20';
    });
    
    // set active state on clicked button
    btn.className = 'time-opt py-4 px-2 rounded-xl bg-accent-gold/10 border-2 border-accent-gold text-accent-gold text-sm font-bold shadow-sm';
    
    // Mark global state
    let input = document.getElementById('ag-time');
    if (!input) {
        input = document.createElement('input');
        input.type = 'hidden';
        input.id = 'ag-time';
        document.body.appendChild(input);
    }
    input.value = btn.innerText.trim();
};

window.validateAppointmentAndNavigate = async function(nextScreen) {
    const timeInput = document.getElementById('ag-time');
    if (!timeInput || !timeInput.value) {
        alert("Por favor selecciona una hora para tu cita antes de continuar.");
        return;
    }

    const btn = event && event.currentTarget ? event.currentTarget : null;
    let originalText = '';
    if (btn) {
        originalText = btn.innerHTML;
        btn.innerHTML = 'Enviando...';
        btn.disabled = true;
        btn.classList.add('opacity-75');
    }

    try {
        const evalScreen = document.getElementById(`screen-${SCREENS.EVALUACION}`);
        const getVal = (id) => evalScreen ? (evalScreen.querySelector(`#${id}`) ? evalScreen.querySelector(`#${id}`).value : '') : '';
        const getRadio = (name) => evalScreen ? (evalScreen.querySelector(`input[name="${name}"]:checked`) ? evalScreen.querySelector(`input[name="${name}"]:checked`).nextElementSibling.innerText : '') : '';

        const fechaCitaVal = document.getElementById('ag-date') ? document.getElementById('ag-date').value : '';
        const horaCitaVal = timeInput.value;

        let fechaInicioIso = '';
        let fechaFinIso = '';
        if (fechaCitaVal && horaCitaVal) {
            const [year, month, day] = fechaCitaVal.split('-').map(Number);
            const [timeStr, modifier] = horaCitaVal.split(' ');
            let [hours, minutes] = timeStr.split(':').map(Number);
            
            if (modifier === 'PM' && hours !== 12) hours += 12;
            if (modifier === 'AM' && hours === 12) hours = 0;

            const startDate = new Date(year, month - 1, day, hours, minutes);
            // Citas de 1 hora
            const endDate = new Date(startDate.getTime() + 60 * 60 * 1000);

            fechaInicioIso = startDate.toISOString();
            fechaFinIso = endDate.toISOString();
        }

        const payload = {
            nombre: getVal('ev-nombre'),
            correo: getVal('ev-correo'),
            whatsapp: getVal('ev-whatsapp'),
            ciudad: getVal('ev-ciudad'),
            tiempo_aranitas: getRadio('duration'),
            dolor_pesadez: getVal('ev-dolor'),
            tratamientos_previos: getRadio('prev_treat'),
            aumento_reciente: getRadio('increase'),
            comentarios: getVal('ev-comentarios'),
            fecha_cita: fechaCitaVal,
            hora_cita: horaCitaVal,
            fecha_inicio_iso: fechaInicioIso,
            fecha_fin_iso: fechaFinIso
        };

        await fetch('https://hook.us2.make.com/pyxcjejgf5l06p9pfan2s879uveddlrw', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
        
    } catch (e) {
        console.error("Error sending data to Make Webhook:", e);
    } finally {
        if (btn) {
            btn.innerHTML = originalText;
            btn.disabled = false;
            btn.classList.remove('opacity-75');
        }
        navigate(nextScreen);
    }
};

// Initial Navigation
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM loaded. Initiating navigation.");
    try {
        navigate(SCREENS.BIENVENIDA);
    } catch(err) {
        console.error("Navigation error:", err);
        appContainer.innerHTML = '<div style="color:red; font-size: 20px; padding: 20px;">Error loading app. Please check console.</div>';
    }
});
