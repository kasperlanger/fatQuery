# fatQuery #

jQuery plugin making CoffeeScript integration even sweeter.

```coffeescript
$("div").$click -> @hide()
```

The name is inspired by the fat arrow (=>) syntax in CoffeeScript.

## Motivation ##

When jQuery invokes an event handler, "this" is bound to a raw DOM element.

If you want to use jQuery to modify the DOM element you must first wrap
it up with a call to the jQuery function. 

For instance if you want to toggle an element (#foo) on clicks

```coffeescript 
$("#foo").click -> $(this).toggle()
```
  
or

```coffeescript
$("#foo").click -> $(@).toggle()
```

but with fatQuery you can simply write

```coffeescript
$("#foo").$click -> @toggle()
```
    
Toggling between different colors

```coffeescript
$.fn.bg = (color) -> @css "background-color": color
$("#foo").$toggle(
 -> @bg "blue"
 -> @bg "white"
 -> @bg "red")
```

or even

```coffeescript
bg = (c) -> -> @css "background-color": c
$("#foo").$toggle(
  bg "blue"
  bg "white"
  bg "red")
```

higher order functions FTW!

## Usage ##
WARNING: very early beta code - API is subject to change.

After including jquery, include fatquery.js

```
<script type="text/javascript" src="http://code.jquery.com/jquery-1.6.4.min.js"></script>
<script type="text/javascript" src="https://raw.github.com/kasperlanger/fatQuery/master/fatquery.js"></script>
```

## Provided functions so far ##

$bind, $toggle, $blur, $focus, $focusin, $focusout, $load, $resize, $scroll, 
$unload, $click, $dblclick, $mousedown, $mouseup, $mousemove, $mouseover, 
$mouseout, $mouseenter, $mouseleave, $change, $select, $submit, $keydown,
$keypress, $keyup, $error

