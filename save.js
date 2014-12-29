
/* global SOL */

function encode(param1) {
    var _loc_13 = 0;
    var _loc_15 = 0;
    var _loc_16 = 0;
    var _loc_2 = param1;
    var _loc_4 = Math.random() * 4;
    var _loc_3 = _loc_4 + 2;
    _loc_4 = Math.random() * 5;
    var _loc_5 = _loc_4 + 4;
    _loc_4 = Math.random() * 9;
    var _loc_6 = _loc_4;
    var _loc_7 = (_loc_3 + _loc_5) / 2;
    var _loc_8 = '';
    var _loc_9 = 8 + _loc_6;
    var _loc_10 = 0;
    _loc_4 = 0;
    var _loc_11 = 0;
    var _loc_12 = _loc_2.length;
    while(_loc_11 < _loc_12) {
        _loc_11++;
        _loc_13 = _loc_11;
        _loc_10 = _loc_2.charCodeAt(_loc_13);
        _loc_4 = _loc_4 + (_loc_13 % 2 === 0 ? (_loc_10 * 8) : (-_loc_10));
    }
    var _loc_14 = "" + _loc_4;
    _loc_8 = _loc_8 + ("JE" + _loc_3 + ("" + _loc_5) + _loc_6 + ("" + _loc_14.length));
    _loc_8 = _loc_8 + ":";
    if (_loc_14 === null) {
        _loc_8 = _loc_8 + "null";
    } else {
        _loc_8 = _loc_8 + ("" + _loc_14);
    }
    _loc_11 = 0;
    _loc_12 = _loc_7;
    do {
        _loc_13 = 0;
        while(_loc_13 < _loc_7) {
            _loc_13++;
            _loc_15 = _loc_13;
            _loc_10 = _loc_2.charCodeAt(_loc_12 - _loc_15 - 1);
            _loc_8 = _loc_8 + String.fromCharCode(_loc_10 + _loc_9);
        }
        _loc_11 = _loc_11 + _loc_7;
        _loc_12 = _loc_11 + _loc_7;
    } while(_loc_12 < _loc_2.length);
    if (_loc_11 < _loc_2.length) {
        _loc_13 = 1;
        _loc_15 = (_loc_2.length + 1) - _loc_11;
        while(_loc_13 < _loc_15) {
            _loc_13++;
            _loc_16 = _loc_13;
            _loc_10 = _loc_2.charCodeAt(_loc_2.length - _loc_16);
            _loc_8 = _loc_8 + String.fromCharCode(_loc_10 + _loc_9);
        }
    }
    return _loc_8;
}

function decode(param1) {
    var _loc_2 = null;
    var _loc_3 = 0;
    var _loc_4 = 0;
    var _loc_5 = 0;
    var _loc_6 = 0;
    var _loc_7 = 0;
    var _loc_8 = NaN;
    var _loc_9 = NaN;
    var _loc_10 = 0;
    var _loc_11 = 0;
    var _loc_12 = 0;
    var _loc_13 = 0;
    var _loc_14 = 0;
    var _loc_15 = 0;
    var _loc_16 = 0;
    if (param1.substr(0, 2) == "JE") {
        _loc_2 = '';
        _loc_3 = parseInt(param1.substr(2, 1));
        _loc_4 = parseInt(param1.substr(3, 1));
        _loc_5 = parseInt(param1.substr(4, 1));
        _loc_6 = (_loc_3 + _loc_4) / 2;
        _loc_7 = parseInt(param1.substr(5, param1.indexOf(":") - 5));
        _loc_8 = parseInt(param1.substr((param1.indexOf(":") + 1), _loc_7));
        _loc_9 = 0;
        _loc_10 = 8 + _loc_5;
        _loc_11 = 0;
        _loc_12 = (param1.indexOf(":") + 1) + _loc_7;
        _loc_13 = _loc_12 + _loc_6;
        do {
            _loc_14 = 0;
            while(_loc_14 < _loc_6) {
                _loc_14++;
                _loc_15 = _loc_14;
                _loc_11 = param1.charCodeAt(_loc_13 - _loc_15 - 1);
                _loc_2 = _loc_2 + String.fromCharCode(_loc_11 - _loc_10);
            }
            _loc_12 = _loc_12 + _loc_6;
            _loc_13 = _loc_12 + _loc_6;
        } while(_loc_13 < param1.length);
        if (_loc_12 < param1.length) {
            _loc_14 = 1;
            _loc_15 = (param1.length + 1) - _loc_12;
            while(_loc_14 < _loc_15) {
                _loc_14++;
                _loc_16 = _loc_14;
                _loc_11 = param1.charCodeAt(param1.length - _loc_16);
                _loc_2 = _loc_2 + String.fromCharCode(_loc_11 - _loc_10);
            }
        }
        return _loc_2;
    } else {
        return param1;
    }
}

(function(){
    var fileInput = document.getElementById('fileInput');
    var display = document.getElementById('display');
    var fileName;

    fileInput.addEventListener('change', function() {
        var file = fileInput.files[0];
        var reader = new FileReader();
        reader.readAsBinaryString(file);
        reader.onload = function() {
            var curFileName, res = SOL.parse(reader.result);
            fileName = curFileName;
            display.value = decode(res.get('datos'));
        };
    });
})();
