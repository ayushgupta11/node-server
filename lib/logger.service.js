const loggerFunc = (processRef) => {
    let terminalOutput = '';
    processRef.stdout.on(
        'data',
        (data) => {
            terminalOutput += data;
            if (terminalOutput[terminalOutput.length - 1] == '\n') {
                console.log(terminalOutput);
            }
        }
    );
}

module.exports = loggerFunc