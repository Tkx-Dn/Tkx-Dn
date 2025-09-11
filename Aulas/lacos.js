const pi = 3.14;

function AreaCirculo(raio){
 area = pi * (raio * raio);
 return area;
}
console.log(AreaCirculo(5))

function AreaTriangulo(b, h){
    area = b * h /2;
    return area;
}
console.log(AreaTriangulo(b = 7, h = 2));

function AreaQuadrado(l1, l2){
area = l1 * l2;
return area;
}
console.log(AreaQuadrado(l1 = 4, l2 = 4));