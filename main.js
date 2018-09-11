const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

let win;


function createWindow(){
    win = new BrowserWindow({
        width:800, 
        height:600,
        frame:true,
        title:'hahaha'
    });

    //load the index.html
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol:'file',
        slashes:true
    }));

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