# Copyright 2011 Kasper Langer

wrap = (fn) ->
  proxy = -> fn.apply $(@), arguments
  proxy.guid = fn.guid = fn.guid || jQuery.guid++  
  proxy
  
wrapAll = (args) -> wrap(fn) for fn in args

# fat version of bind - $bind
jQuery.fn.$bind = (type, data, fn) -> 
  fn = data if arguments.length == 2  
  fatFn = wrap(fn)
  if arguments.length == 2
    @bind type, fatFn
  else if arguments.length == 3
    @bind type, data, fatFn
  else
    throw "Bad arrity #{arguments.length}"
  #TODO: support $bind({'click':...}) form

# fat versions of event binder conviniences (ex: $click, $mouseover, etc)
for name in "blur focus focusin focusout load resize scroll unload click dblclick 
  	         mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave
  	         change select submit keydown keypress keyup error".split /\s+/
  do (name) ->
    jQuery.fn["$"+name] = (data, fn) ->
      if (arguments.length == 1)
        @$bind(name, data)
      else @$bind(name, data, fn)

#fat toggle
jQuery.fn.$toggle = -> jQuery.fn.toggle.apply(@,wrapAll(arguments))
	
