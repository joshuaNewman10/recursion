// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
    
var getElementsByClassName = function(name) {
  var NodeList = {length:0};
  var j = 0;
  recurs(document.body);
  function recurs(elem) { 
    var classList = elem.className;

    if(classList && classList.indexOf(name) > -1) {
      NodeList[j] = elem;
      j+=1;
      NodeList.length +=1;
    }
    var children = elem.childNodes;
    if (children.length === 0) {
      return;
    } else {
      for(var i=0; i<children.length; i++) {
        recurs(children[i]);
      }
    }
  }
  return Array.prototype.slice.apply(NodeList);
};