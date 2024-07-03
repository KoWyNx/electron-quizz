const { contextBridge, ipcRenderer } = require('electron');

const validChannels = ['getQuestion', 'answer'];

contextBridge.exposeInMainWorld('electronAPI', {
    sendAnswer: (answer) => {
        ipcRenderer.send('answer', answer);
    },

    receiveQuestion: (callback) => {
        ipcRenderer.on('question', (event, question) => {
            callback(question);
        });
    },

    isValidChannel: (channel) => {
        return validChannels.includes(channel);
    }
});
