const { app, BrowserWindow } = require('electron');
require('electron-reload')(__dirname, {
	electron: require(`${__dirname}/node_modules/electron`)
});

function createWindow() {
	const mainWindow = new BrowserWindow({
		fullscreen: true,
		autoHideMenuBar: true,
		frame: false, // Oculta la barra de título
		webPreferences: {
			nodeIntegration: true
		}
	});
	mainWindow.loadURL('http://localhost:3000');
	mainWindow.setFullScreenable(true);
	mainWindow.setFullScreen(true); // Asegura que la ventana esté en pantalla completa
	mainWindow.setMenu(null); // Deshabilita el menú
}

app.whenReady().then(createWindow);