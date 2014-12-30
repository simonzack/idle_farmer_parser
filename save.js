
/* global SOL, DataSaver, DatosGuardados */

(function(){
    var fileInput = document.getElementById('fileInput');
    var fileOutput = document.getElementById('fileOutput');
    var display = document.getElementById('display');
    var fileName;

    fileInput.addEventListener('change', function(){
        var file = fileInput.files[0];
        var reader = new FileReader();
        reader.readAsBinaryString(file);
        reader.onload = function() {
            var curFileName, res = SOL.parse(reader.result);
            fileName = curFileName;
            display.value = JSON.stringify(DataSaver.load(res.get('datos')), null, '    ');
        };
    });

    fileOutput.addEventListener('click', function(){
        var parsed = JSON.parse(display.value);
        var data = new DatosGuardados();
        for(var key in parsed){
            if(parsed.hasOwnProperty(key)) {
                if(data[key] instanceof Date){
                    data[key] = new Date(parsed[key]);
                }else{
                    data[key] = parsed[key];
                }
            }
        }
        var res = SOL.stringify('IdleFarmer', {'datos': DataSaver.save(data)});
        var bytes = new Uint8Array(res.length);
        for (var i=0; i < res.length; i++)
            bytes[i] = res.charCodeAt(i);
        var blob = new Blob([bytes], {type: 'application/octet-binary'});
        fileOutput.href = URL.createObjectURL(blob);
    });
})();
