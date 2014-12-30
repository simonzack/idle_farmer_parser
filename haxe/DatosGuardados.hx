
@:expose class DatosGuardados {

   public function DatosGuardados() {
      portal = "";
      userId = 0;
      userName = "";
      mute = false;
      dinero = 0;
      nivel = 1;
      exp = 1;
      cosecha = [0,0,0,0,0,0,0,0];
      cultivos = [0,0,0,0];
      crecimiento = [0,0,0,0];
      campos = 1;
      semillas = 1;
      abono = 1;
      herramientas = 1;
      casa = 0;
      habil_trabajar = 1;
      habil_regar = 0;
      habil_correr = 0;
      habil_vender = 0;
      mujeres = [0,0,0];
      horaMujeres = [];
      horaMujeres[0] = new Date(1000,1,1,0,0,0).getTime();
      horaMujeres[1] = new Date(1000,1,1,0,0,0).getTime();
      horaMujeres[2] = new Date(1000,1,1,0,0,0).getTime();
      puntuacion = 0;
      prestigio = 0;
      flores = 0;
      donaciones = 0;
      update = 8;
      pedidoTipo = 0;
      pedidoTotal = 0;
      pedidoActual = -1;
      pollos = 0;
      tips = 0;
      millones = 0;
      huevos = 0;
      grano = 0;
      granoPollos = 0;
      prosperidad = [0,0,0,0,0,0,0,0,0,0,0];
      tiempoHuevo = 0;
      m_habil_huevos = 0;
      m_habil_regar = 0;
      m_habil_vender = 0;
      m_exp = 0;
      m_nivel = 10;
      tiempoFlores = 0;
      pedidoRecompensa = 0;
      numReset = 0;
      userName = "";
      userId = 0;
      dateSaved = Date.now();
      portal = "";
      tiempoXP = 0;
      tiempoSuperC = 0;
      dailyReward = -1;
      dailyRewardServer = -1;
      idInterno = -1;
      noFeed = false;
   }
   public var userName:String;
   public var userId:Float;
   public var update:Int;
   public var tips:Int;
   public var tiempoXP:Float;
   public var tiempoSuperC:Float;
   public var tiempoHuevo:Float;
   public var tiempoFlores:Float;
   public var semillas:Int;
   public var puntuacion:Int;
   public var puntosPendientes:Int;
   public var prosperidad:Array<Dynamic>;
   public var prestigio:Float;
   public var portal:String;
   public var pollos:Int;
   public var pedidoTotal:Int;
   public var pedidoTipo:Int;
   public var pedidoRecompensa:Int;
   public var pedidoActual:Int;
   public var numReset:Int;
   public var noFeed:Bool;
   public var nivel:Int;
   public var mute:Bool;
   public var mujeres:Array<Dynamic>;
   public var millones:Float;
   public var m_nivel:Int;
   public var m_habil_vender:Int;
   public var m_habil_regar:Int;
   public var m_habil_huevos:Int;
   public var m_exp:Int;
   public var idInterno:Float;
   public var huevos:Int;
   public var horaMujeres:Array<Dynamic>;
   public var herramientas:Int;
   public var habil_vender:Int;
   public var habil_trabajar:Int;
   public var habil_social:Int;
   public var habil_regar:Int;
   public var habil_correr:Int;
   public var granoPollos:Float;
   public var grano:Int;
   public var flores:Int;
   public var exp:Int;
   public var donaciones:Int;
   public var dinero:Float;
   public var dateSaved:Date;
   public var dailyRewardServer:Float;
   public var dailyReward:Float;
   public var cultivos:Array<Dynamic>;
   public var crecimiento:Array<Dynamic>;
   public var cosecha:Array<Dynamic>;
   public var casa:Int;
   public var campos:Int;
   public var abono:Int;
}
