(function() {
  var name, wrap, wrapAll, _fn, _i, _len, _ref;
  wrap = function(fn) {
    var proxy;
    proxy = function() {
      return fn.apply($(this), arguments);
    };
    proxy.guid = fn.guid = fn.guid || jQuery.guid++;
    return proxy;
  };
  wrapAll = function(args) {
    var fn, _i, _len, _results;
    _results = [];
    for (_i = 0, _len = args.length; _i < _len; _i++) {
      fn = args[_i];
      _results.push(wrap(fn));
    }
    return _results;
  };
  jQuery.fn.$bind = function(type, data, fn) {
    var fatFn;
    if (arguments.length === 2) {
      fn = data;
    }
    fatFn = wrap(fn);
    if (arguments.length === 2) {
      return this.bind(type, fatFn);
    } else if (arguments.length === 3) {
      return this.bind(type, data, fatFn);
    } else {
      throw "Bad arrity " + arguments.length;
    }
  };
  _ref = "blur focus focusin focusout load resize scroll unload click dblclick   	         mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave  	         change select submit keydown keypress keyup error".split(/\s+/);
  _fn = function(name) {
    return jQuery.fn["$" + name] = function(data, fn) {
      if (arguments.length === 1) {
        return this.$bind(name, data);
      } else {
        return this.$bind(name, data, fn);
      }
    };
  };
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    name = _ref[_i];
    _fn(name);
  }
  jQuery.fn.$toggle = function() {
    return jQuery.fn.toggle.apply(this, wrapAll(arguments));
  };
}).call(this);
