/*******************************************************************************
 Day 11: 3/20/2017 - Help the general decode secret enemy messages.

 General Patron is faced with a problem , his intelligence has intercepted some
 secret messages from the enemy but they are all encrypted. Those messages are
 crutial to getting the jump on the enemy and winning the war. Luckily
 intelligence also captured an encoding device as well. However even the
 smartest programmers weren't able to crack it though. So the general is
 asking you , his most odd but brilliant programmer.

 You can call the encoder like this.
    console.log (device.encode ('What the hell')) ;

 Our cryptoanalysts kept poking at it and found some interesting patterns.
    console.log (device.encode ('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')) ;
    console.log (device.encode ('bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbb')) ;
    console.log (device.encode ('!@#$%^&*()_+-')) ;
    console.log ('abcdefghijklmnopqrstuvwxyz') ;
    console.log ('abcdefghijklmnopqrstuvwxyz'.split ('').map (function (a) {
        return device.encode (a) ;
    }).join ('')) ;
    console.log ('abcdefghijklmnopqrstuvwxyz'.split ('').map (function (a) {
        return device.encode ('_'+a)[1] ;
    }).join ('')) ;
    console.log ('abcdefghijklmnopqrstuvwxyz'.split ('').map (function (a) {
        return device.encode ('__'+a)[2] ;
    }).join ('')) ;

 We think if you keep on this trail you should be able to crack the code!
 You are expected to fill in the device.decode function.

 Good luck ! General Patron is counting on you!
*******************************************************************************/

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz,.? -';
device.decode = function(secretMessage) {
    let result = '',
        decoded = {};
    for (let j = 0; j < alphabet.length; j++) {
        let temp = '';
        for (let i = 0; i < secretMessage.length; i++)
            temp += alphabet[j];
        decoded[device.encode(temp)] = alphabet[j];
    }
    for (let i = 0; i < secretMessage.length; i++) {
        for (let k in decoded) {
            if (k[i] == secretMessage[i])
                result += decoded[k];
        }
    }
    return result;
}
