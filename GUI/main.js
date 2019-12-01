const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

//Command line arguments are in process.argv[2] and above

//global reference to the window object.
let win; 

function createWindow(){
    //create browser window
    win = new BrowserWindow({width:800,height:600, icon:__dirname+'/img/sysinfo.png', webPreferences: { nodeIntegration: true }});

    //load index.html
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }));

    // open devtools if debug argument is passed
    if(process.argv[2] === "-debug"){
        win.webContents.openDevTools();
    }
    
    win.on('closed', () => {
        win = null;
    })
}
//run create window function
app.on('ready', createWindow);

//quit when all windows are closed
app.on("window-all-closed", () => {
    //if the user is not on mac
    if(process.platform !== 'darwin'){
        app.quit();
    }
});