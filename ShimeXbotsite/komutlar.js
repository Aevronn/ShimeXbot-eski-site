$(document).ready(function(){
    $("#content").load("komutlar.html")
  });
  
   $('a').click(function(){
     var page = $(this).attr('href');
     $("#content").load(page);

     return false
   });

   function eglenme() {
     document.getElementById('eglence').classList.toggle('aktif')
     document.getElementById('gnl').classList.remove('aktif')
     document.getElementById('müzkü').classList.remove('aktif')
     document.getElementById('mode').classList.remove('aktif')
     document.getElementById("alt").innerHTML;          
     document.getElementById("alt").setAttribute("id", "altegelenemce");
     document.getElementById("altyazı").innerHTML;          
     document.getElementById("altyazı").setAttribute("id", "altyazıegelenemce");
     document.getElementById("altyazı2").innerHTML;          
     document.getElementById("altyazı2").setAttribute("id", "altyazı2egelenemce");
     document.getElementById("altyazı3").innerHTML;          
     document.getElementById("altyazı3").setAttribute("id", "altyazı3egelenemce");
     document.getElementById("altmenü").innerHTML;          
     document.getElementById("altmenü").setAttribute("id", "altmenüegelenemce");
     document.getElementById("cmmds").innerHTML;          
     document.getElementById("cmmds").setAttribute("id", "cmmdsegelenemce");
     document.getElementById("hkkmd").innerHTML;          
     document.getElementById("hkkmd").setAttribute("id", "hkkmdegelenemce");
     document.getElementById("ynlkr").innerHTML;          
     document.getElementById("ynlkr").setAttribute("id", "ynlkregelenemce");
     document.getElementById("bilgilendirme").innerHTML;          
     document.getElementById("bilgilendirme").setAttribute("id", "bilgilendirmeegelenemce");
     document.getElementById("bilgilendi").innerHTML;          
     document.getElementById("bilgilendi").setAttribute("id", "bilgilendiegelenemce");
   };

   function genle() {
     document.getElementById('gnl').classList.toggle('aktif')
     document.getElementById('eglence').classList.remove('aktif')
     document.getElementById('müzkü').classList.remove('aktif')
     document.getElementById('mode').classList.remove('aktif')
     document.getElementById("altegelenemce").setAttribute("id", "alt");
     document.getElementById("altyazıegelenemce").innerHTML;          
     document.getElementById("altyazıegelenemce").setAttribute("id", "altyazı");
     document.getElementById("altyazı2egelenemce").innerHTML;          
     document.getElementById("altyazı2egelenemce").setAttribute("id", "altyazı2");
     document.getElementById("altyazı3egelenemce").innerHTML;          
     document.getElementById("altyazı3egelenemce").setAttribute("id", "altyazı3");
     document.getElementById("altmenüegelenemce").innerHTML;          
     document.getElementById("altmenüegelenemce").setAttribute("id", "altmenü");
     document.getElementById("cmmdsegelenemce").innerHTML;          
     document.getElementById("cmmdsegelenemce").setAttribute("id", "cmmds");
     document.getElementById("hkkmdegelenemce").innerHTML;          
     document.getElementById("hkkmdegelenemce").setAttribute("id", "hkkmd");
     document.getElementById("ynlkregelenemce").innerHTML;          
     document.getElementById("ynlkregelenemce").setAttribute("id", "ynlkr");
     document.getElementById("bilgilendirmeegelenemce").innerHTML;          
     document.getElementById("bilgilendirmeegelenemce").setAttribute("id", "bilgilendirme");
     document.getElementById("bilgilendiegelenemce").innerHTML;          
     document.getElementById("bilgilendiegelenemce").setAttribute("id", "bilgilendi");
   };

   function musiki() {
   document.getElementById('müzkü').classList.toggle('aktif')
   document.getElementById('eglence').classList.remove('aktif')
   document.getElementById('gnl').classList.remove('aktif')
   document.getElementById('mode').classList.remove('aktif')
   document.getElementById("altegelenemce").setAttribute("id", "alt");
   document.getElementById("altyazıegelenemce").innerHTML;          
   document.getElementById("altyazıegelenemce").setAttribute("id", "altyazı");
   document.getElementById("altyazı2egelenemce").innerHTML;          
   document.getElementById("altyazı2egelenemce").setAttribute("id", "altyazı2");
   document.getElementById("altyazı3egelenemce").innerHTML;          
   document.getElementById("altyazı3egelenemce").setAttribute("id", "altyazı3");
   document.getElementById("altmenüegelenemce").innerHTML;          
   document.getElementById("altmenüegelenemce").setAttribute("id", "altmenü");
   document.getElementById("cmmdsegelenemce").innerHTML;          
   document.getElementById("cmmdsegelenemce").setAttribute("id", "cmmds");
   document.getElementById("hkkmdegelenemce").innerHTML;          
   document.getElementById("hkkmdegelenemce").setAttribute("id", "hkkmd");
   document.getElementById("ynlkregelenemce").innerHTML;          
   document.getElementById("ynlkregelenemce").setAttribute("id", "ynlkr");
   document.getElementById("bilgilendirmeegelenemce").innerHTML;          
   document.getElementById("bilgilendirmeegelenemce").setAttribute("id", "bilgilendirme");
   document.getElementById("bilgilendiegelenemce").innerHTML;          
   document.getElementById("bilgilendiegelenemce").setAttribute("id", "bilgilendi");
   };

   function moder() {
    document.getElementById('mode').classList.toggle('aktif')
   document.getElementById('eglence').classList.remove('aktif')
   document.getElementById('gnl').classList.remove('aktif')
   document.getElementById('müzkü').classList.remove('aktif')
   document.getElementById("altegelenemce").setAttribute("id", "alt");
   document.getElementById("altyazıegelenemce").innerHTML;          
   document.getElementById("altyazıegelenemce").setAttribute("id", "altyazı");
   document.getElementById("altyazı2egelenemce").innerHTML;          
   document.getElementById("altyazı2egelenemce").setAttribute("id", "altyazı2");
   document.getElementById("altyazı3egelenemce").innerHTML;          
   document.getElementById("altyazı3egelenemce").setAttribute("id", "altyazı3");
   document.getElementById("altmenüegelenemce").innerHTML;          
   document.getElementById("altmenüegelenemce").setAttribute("id", "altmenü");
   document.getElementById("cmmdsegelenemce").innerHTML;          
   document.getElementById("cmmdsegelenemce").setAttribute("id", "cmmds");
   document.getElementById("hkkmdegelenemce").innerHTML;          
   document.getElementById("hkkmdegelenemce").setAttribute("id", "hkkmd");
   document.getElementById("ynlkregelenemce").innerHTML;          
   document.getElementById("ynlkregelenemce").setAttribute("id", "ynlkr");
   document.getElementById("bilgilendirmeegelenemce").innerHTML;          
   document.getElementById("bilgilendirmeegelenemce").setAttribute("id", "bilgilendirme");
   document.getElementById("bilgilendiegelenemce").innerHTML;          
   document.getElementById("bilgilendiegelenemce").setAttribute("id", "bilgilendi");
   };