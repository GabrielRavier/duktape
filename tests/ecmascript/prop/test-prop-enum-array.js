/*===
["0","1","2","length"]
["0","1","2","5","9","10","11","15","17","18","length"]
["0","1","2","5","9","10","11","15","17","18","length"]
["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","length"]
["length"]
["length"]
["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59","60","61","62","63","64","65","66","67","68","69","70","71","72","73","74","75","76","77","78","79","80","81","82","83","84","85","86","87","88","89","90","91","92","93","94","95","96","97","98","99","length"]
["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59","60","61","62","63","64","65","66","67","68","69","70","71","72","73","74","75","76","77","78","79","80","81","82","83","84","85","86","87","88","89","90","91","92","93","94","95","96","97","98","99","length","foo"]
===*/

var arr = [ 'foo', 'bar', 'quux' ];
print(JSON.stringify(Reflect.ownKeys(arr)));

var arr = [ 'xx', 'xx', 'xx', , , 'xx', , , , 'yy', 'yy', 'yy', , , , 'yy', , 'yy', 'yy', , ];
print(JSON.stringify(Reflect.ownKeys(arr)));

arr[1e6] = 'dummy';
arr.length = 20;
print(JSON.stringify(Reflect.ownKeys(arr)));
for (var i = 0; i < arr.length; i++) {
    arr[i] = 'foo' + i;
}
print(JSON.stringify(Reflect.ownKeys(arr)));

var arr = [];
print(JSON.stringify(Reflect.ownKeys(arr)));
arr[1e6] = 'dummy';
arr.length = 100;
print(JSON.stringify(Reflect.ownKeys(arr)));
for (var i = arr.length - 1; i >= 0; i--) {
    arr[i] = 'foo' + i;
}
print(JSON.stringify(Reflect.ownKeys(arr)));
arr.foo = 'bar';
print(JSON.stringify(Reflect.ownKeys(arr)));