// Подключение функционала "Чертоги Фрилансера"
import { isMobile } from './functions.js';

// Подключение списка активных модулей
import { flsModules } from './modules.js';

document.addEventListener('mousemove', (e) => {
	Object.assign(document.documentElement, {
		style: `
		--moveX: ${(e.clientX - window.innerWidth / 2) * -.005}deg;
		--moveY: ${(e.clientY - window.innerHeight / 2) * -.01}deg;`,
	});
});
