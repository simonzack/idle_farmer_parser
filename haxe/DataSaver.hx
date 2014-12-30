
import haxe.Serializer;
import haxe.Unserializer;

@:expose class DataSaver {

   public function DataSaver() {
   }

   public static function save(param1) : String {
      var _loc13_ = 0;
      var _loc15_ = 0;
      var _loc16_ = 0;
      var _loc2_:String = Serializer.run(param1);
      var _loc4_:Float = (Math.random()) * 4;
      var _loc3_:Int = Std.int(_loc4_) + 2;
      _loc4_ = (Math.random()) * 5;
      var _loc5_:Int = Std.int(_loc4_) + 4;
      _loc4_ = (Math.random()) * 9;
      var _loc6_:Int = Std.int(_loc4_);
      var _loc7_:Int = Std.int((_loc3_ + _loc5_) / 2);
      var _loc8_:StringBuf = new StringBuf();
      var _loc9_:Int = 8 + _loc6_;
      var _loc10_:Int = 0;
      _loc4_ = 0;
      var _loc11_:Int = 0;
      var _loc12_:Int = _loc2_.length;
      while(_loc11_ < _loc12_) {
         _loc13_ = _loc11_;
         _loc11_++;
         _loc10_ = _loc2_.charCodeAt(_loc13_);
         _loc4_ = _loc4_ + ((_loc13_ % 2) == 0?_loc10_ * 8:-_loc10_);
      }
      var _loc14_:String = "" + _loc4_;
      _loc8_.add(Std.string("JE" + _loc3_ + ("" + _loc5_) + _loc6_ + ("" + _loc14_.length)));
      _loc8_.add(":");
      if(_loc14_ == null) {
         _loc8_.add("null");
      } else {
         _loc8_.add(("" + _loc14_));
      }
      _loc11_ = 0;
      _loc12_ = _loc7_;
      do {
         _loc13_ = 0;
         while(_loc13_ < _loc7_) {
            _loc15_ = _loc13_;
            _loc13_++;
            _loc10_ = _loc2_.charCodeAt(_loc12_ - _loc15_ - 1);
            _loc8_.add(String.fromCharCode(_loc10_ + _loc9_));
         }
         _loc11_ = _loc11_ + _loc7_;
         _loc12_ = _loc11_ + _loc7_;
      }
      while(_loc12_ < _loc2_.length);

      if(_loc11_ < _loc2_.length) {
         _loc13_ = 1;
         _loc15_ = _loc2_.length + 1 - _loc11_;
         while(_loc13_ < _loc15_) {
            _loc16_ = _loc13_;
            _loc13_++;
            _loc10_ = _loc2_.charCodeAt(_loc2_.length - _loc16_);
            _loc8_.add(String.fromCharCode(_loc10_ + _loc9_));
         }
      }
      return _loc8_.toString();
   }

   public static function load(param1:String) {
      var _loc2_:StringBuf = null;
      var _loc3_ = 0;
      var _loc4_ = 0;
      var _loc5_ = 0;
      var _loc6_ = 0;
      var _loc7_ = 0;
      var _loc8_ = Math.NaN;
      var _loc9_ = Math.NaN;
      var _loc10_ = 0;
      var _loc11_ = 0;
      var _loc12_ = 0;
      var _loc13_ = 0;
      var _loc14_ = 0;
      var _loc15_ = 0;
      var _loc16_ = 0;
      if(param1.substr(0,2) == "JE") {
         _loc2_ = new StringBuf();
         _loc3_ = Std.parseInt(param1.substr(2,1));
         _loc4_ = Std.parseInt(param1.substr(3,1));
         _loc5_ = Std.parseInt(param1.substr(4,1));
         _loc6_ = Std.int((_loc3_ + _loc4_) / 2);
         _loc7_ = Std.parseInt(param1.substr(5,(param1.indexOf(":")) - 5));
         _loc8_ = Std.parseInt(param1.substr((param1.indexOf(":")) + 1,_loc7_));
         _loc9_ = 0;
         _loc10_ = 8 + _loc5_;
         _loc11_ = 0;
         _loc12_ = (param1.indexOf(":")) + 1 + _loc7_;
         _loc13_ = _loc12_ + _loc6_;
         do {
            _loc14_ = 0;
            while(_loc14_ < _loc6_) {
               _loc15_ = _loc14_;
               _loc14_++;
               _loc11_ = param1.charCodeAt(_loc13_ - _loc15_ - 1);
               _loc2_.add(String.fromCharCode(_loc11_ - _loc10_));
            }
            _loc12_ = _loc12_ + _loc6_;
            _loc13_ = _loc12_ + _loc6_;
         }
         while(_loc13_ < param1.length);

         if(_loc12_ < param1.length) {
            _loc14_ = 1;
            _loc15_ = param1.length + 1 - _loc12_;
            while(_loc14_ < _loc15_) {
               _loc16_ = _loc14_;
               _loc14_++;
               _loc11_ = param1.charCodeAt(param1.length - _loc16_);
               _loc2_.add(String.fromCharCode(_loc11_ - _loc10_));
            }
         }
         return Unserializer.run(_loc2_.toString());
      }
      return Unserializer.run(param1);
   }
}
