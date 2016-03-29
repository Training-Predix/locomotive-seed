# Px-Tooltip

## Overview

Px-Tooltip is a Predix Experience component which opens a tooltip message,
allowing the user to get a better view and or understanding of the content.

## Usage

### Prerequisites
1. node.js
2. npm
3. bower
4. [webcomponents-lite.js polyfill](https://github.com/webcomponents/webcomponentsjs)

Node, npm and bower are necessary to install the component and dependencies. webcomponents.js adds support for web components and custom elements to your application.

### Getting Started

First, install the component via bower on the command line.

```
bower install https://github.com/PredixDev/px-tooltip.git --save
```

Second, import the component to your application with the following tag in your head.

```
<link rel="import" href="/bower_components/px-tooltip/px-tooltip.html"/>
```

Finally, use the component in your application:

```
<px-tooltip tooltip-message="Hello World"></px-tooltip>
```

<br />
<hr />

## Attributes

####for
*Type:* **String** - (*Optional*) - *Default:* ""
The element to which the tooltip provides additional information.  Optional, tooltip will be attached to parent element if a 'for' id is not provided.

```
<px-tooltip
  ...
  for="exampleDiv">
</px-tooltip>
```

####orientation
*Type:* **String** - (*Optional*) - *Default:* "auto"
The position of the tooltip relative to the 'for' element. Currently supports 'top', 'bottom', 'left', 'right' and 'auto'.

```
<px-tooltip
  ...
  orientation="top">
</px-tooltip>
```

####tooltip-message
*Type:* **String** - (*Required*) - *Default:* ""
The text message that will be displayed in the tooltip. Also support HTML elements.

```
<px-tooltip
  ...
  tooltip-message="Hello World">
</px-tooltip>
```

####delay
*Type:* **Number** - (*Optional*) - *Default:* "1000"
The delay in milliseconds until the tooltip is displayed.

```
<px-tooltip
  ...
  delay="500">
</px-tooltip>
```

####smartOrientation
*Type:* **Boolean** - (*Optional*) - *Default:* "false"
If smartOrientation is turned on and the orientation is "top" or "bottom", then the tooltip will override the default orientation (top or bottom) to try to better fit on the page (example: will be on left if tooltip will go off right side of the screen)

Note: this feature is only enabled for the "top" or "bottom" orientations

```
<px-tooltip
  ...
  smartOrientation="true">
</px-tooltip>
```


<br />
<hr />


## Local Development

From the component's directory...

```
$ npm install
$ bower install
$ grunt sass
```

From the component's directory, to start a local server run:

```
$ grunt depserve
```

Navigate to the root of that server (e.g. http://localhost:8080/) in a browser to open the API documentation page, with link to the "Demo" / working examples.

### LiveReload

By default grunt watch is configured to enable LiveReload and will be watching for modifications in your root directory as well as `/css`.

Your browser will also need to have the LiveReload extension installed and enabled. For instructions on how to do this please refer to: [livereload.com/extensions/](http://livereload.com/extensions/).

Disable LiveReload by removing the `livereload` key from the configuration object or explicitly setting it to false.


### concurrent
concurrent runs `grunt depserve` and `grunt watch` concurrently so that when you make a change to your source files and save them, your preview will be updated in any browsers you have opened and turned on LiveReload.
From the component's directory run:

```
$ grunt concurrent
```

### GE Coding Style Guide
[GE JS Developer's Guide](https://github.com/GeneralElectric/javascript)

<br />
<hr />

## Known Issues

Please use [Github Issues](https://github.com/PredixDev/px-tooltip/issues) to submit any bugs you might find.
