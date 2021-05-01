const fs = require('fs');
let path = '../.env';
if (!fs.existsSync(path)) {
    const bip39 = require('bip39');

    let mnemonic = bip39.generateMnemonic();
    let output = "MNEMONIC=" + mnemonic + "\nROPSTEN_URL=https://ropsten.infura.io/v3/e24f055a7bec4ac182b57f067b1cc98f"
    let buffer = new Buffer(output);

    // open the file in writing mode, adding a callback function where we do the actual writing
    fs.open(path, 'w', function(err, fd) {
        if (err) {
            throw 'could not open file: ' + err;
        }

        // write the contents of the buffer, from position 0 to the end, to the file descriptor returned in opening our file
        fs.write(fd, buffer, 0, buffer.length, null, function(err) {
            if (err) throw 'error writing file: ' + err;
            fs.close(fd, function() {
                console.log('wrote the file successfully');
            });
        });
    });
}