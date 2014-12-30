
/* global SOL, DataSaver */

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
            display.value = DataSaver.load(res.get('datos'));
        };
    });
})();
