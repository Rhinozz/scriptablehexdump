// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: deep-gray; icon-glyph: laptop-code;

// Hex Dump by Rhinozz
// Very slow for larger files.

// enter file path after "Documents/" - in the files app, it's starting from /iCloud Drive/Scriptable/.
var bytes = FileManager.iCloud().read("/private/var/mobile/Library/Mobile Documents/iCloud~dk~simonbs~Scriptable/Documents/").getBytes();
var hexstack = [];
var fullhex = [];
var counter = 0;
for(const i in bytes) {
    hexstack.push(("0" + (bytes[i].toString(16))).slice(-2).toUpperCase());
    counter++;
    if(counter == 8) {
        counter = 0;
        fullhex.push(hexstack.join(" "));
        hexstack = [];
    }
}
console.log(fullhex.join("\n"));
