
/* global AMF */

var SOL = (function(){

    var HEADER_VERSION = '\x00\xBF\x00\x00';
    var HEADER_SIG = 'TCSO\x00\x04\x00\x00\x00\x00';
    var HEADER_VER_AMF0 = 0;
    var HEADER_VER_AMF3 = 3;
    var STRING_TAG = '\x06';

    function InputStream(data){
        this.data = data || '';
        this.pos = 0;
    }

    InputStream.prototype = {
        read: function(n){
            var res = this.data.substr(this.pos, n);
            if(n === undefined){
                this.pos = this.data.length;
            }else{
                this.pos += n;
            }
            return res;
        },

        peek: function(n){
            return this.data.substr(this.pos, n);
        },

        readShort: function(){
            var res = (this.data.charCodeAt(this.pos) << 8) | this.data.charCodeAt(this.pos + 1);
            this.pos += 2;
            return res;
        },

        readLong: function(){
            var res =
                (this.data.charCodeAt(this.pos) << 24) | (this.data.charCodeAt(this.pos + 1) << 16) |
                (this.data.charCodeAt(this.pos + 2) << 8) | this.data.charCodeAt(this.pos + 3);
            this.pos += 4;
            return res;
        },

        readAMF: function(prefix){
            // know where AMF has read to, AMF itself doesn't provide a way
            var length;
            var data = this.peek();
            if(prefix !== undefined)
                data = prefix + data;
            var prev_substr = String.prototype.substr;
            String.prototype.substr = function(pos, length_){
                if(this == data)
                    length = pos + length_;
                return prev_substr.call(this, pos, length_);
            };
            var res = AMF.parse(data);
            String.prototype.substr = prev_substr;
            this.pos += length;
            if(prefix !== undefined)
                this.pos -= prefix.length;
            return res;
        }
    };

    function OutputStream(data){
        this.data = data || '';
        this.pos = 0;
    }

    OutputStream.prototype = {
        write: function(data){
            this.data += data;
            this.pos = this.data.length;
        },

        writeShort: function(n){
            this.data += String.fromCharCode(n >> 8) + String.fromCharCode(n & 0xFF);
            this.pos = this.data.length;
        },

        writeLong: function(n){
            this.data +=
                String.fromCharCode(n >> 24) + String.fromCharCode((n >> 16) & 0xFF) +
                String.fromCharCode((n >> 8) & 0xFF) + String.fromCharCode(n & 0xFF);
            this.pos = this.data.length;
        },

        writeAMF: function(data){
            this.data += AMF.stringify(data);
            this.pos = this.data.length;
        }
    };

    return {
        parse: function(data){
            var stream = new InputStream(data);
            if(stream.read(HEADER_VERSION.length) != HEADER_VERSION)
                return;
            var fileSize = stream.readShort();
            if(data.length - stream.pos != fileSize)
                return;
            if(stream.read(HEADER_SIG.length) != HEADER_SIG)
                return;
            var fileNameLen = stream.readShort();
            var fileName = stream.read(fileNameLen);
            var version = stream.readLong();
            if(version != HEADER_VER_AMF3)
                return;
            var res = new Map();
            while(stream.pos < data.length){
                var name = stream.readAMF(STRING_TAG);
                var value = stream.readAMF();
                res.set(name, value);
                stream.read(1);
            }
            return fileName, res;
        },

        stringify: function(fileName, data){
            // write contents first
            var contentStream = new OutputStream();
            contentStream.write(HEADER_SIG);
            contentStream.writeShort(fileName.length);
            contentStream.write(fileName);
            contentStream.writeLong(HEADER_VER_AMF3);
            for(var key in data){
                if(data.hasOwnProperty(key)){
                    contentStream.write(AMF.stringify(key).substr(1));
                    contentStream.writeAMF(data[key]);
                    contentStream.write('\0');
                }
            }
            var stream = new OutputStream();
            stream.write(HEADER_VERSION);
            stream.writeShort(contentStream.data.length);
            stream.write(contentStream.data);
            return stream.data;
        }
    };
})();
