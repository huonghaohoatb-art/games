var bienfunction;
var bienfunctionIN;
var idgamedumv = '906';
var intern_so_phut_dumv = 1;
window.alert = function () { };
window.open = function () {   return null;};
window.open = function(url, target) {
  return null;
};
var methods = ["log", "debug", "warn", "info", "error"];
for (var i = 0; i < methods.length; i++) {
    console[methods[i]] = function () { };
}