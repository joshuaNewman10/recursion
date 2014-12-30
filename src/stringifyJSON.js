// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
 var stringifyJSON = function(o) {
  if (typeof o === 'string') {
    return '"' + o + '"';
  } else if (o === undefined) {
    return o;
  } else if (o === null) {
      return 'null';
  } else if (typeof o !== 'object') {
    return o.toString();
  }
  var arr = Array.isArray(o);
  var strObj = arr ? '[' : '{';
    
  var keys = Object.keys(o);
  for(var i=0; i<keys.length; i++) {
    var currKey = keys[i];
    var val;

    val = stringifyJSON(o[currKey]);
    strObj = arr ? strObj += val + ',' : strObj += '"' + currKey + '"' + ':' + val +',';
    if(i===keys.length-1) strObj = strObj.slice(0,strObj.length-1);
  }
  return strObj += Array.isArray(o) ? ']' : '}';
};


