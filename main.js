const {app, BrowserWindow} = require('electron');

let win;


function createWindow(){
    win = new BrowserWindow({width:800, height:600});

    //load the index.html
    win.loadFile('index.html');

    //Open Dev Tools
    //win.webContents.openDevTools();

    //emitted when the window is closed
    win.on('closed', ()=>{
        win = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', ()=>{
    if(process.platform !== 'darwin'){
        app.quit();
    }
});

app.on('active', ()=>{
    if(win == null){
        createWindow();
    }
});