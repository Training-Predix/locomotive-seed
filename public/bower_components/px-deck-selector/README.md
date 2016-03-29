# Px-Deck-Selector

Px-Deck-Selector displays a drop-down of decks and returns the url for the selected deck.

## Overview

Use the Px-Deck-Selector element to enable your users to choose a deck from a drop-down list. Set the decks using an array of objects with `name` and `url` properties. When a user selects a new deck, the `selected-deck-url` will be updated.

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
bower install https://github.com/PredixDev/px-deck-selector.git --save
```

Second, import the component to your application with the following tag in your head.

```html
<link rel="import" href="/bower_components/px-deck-selector/px-deck-selector.html"/>
```

Finally, use the component in your application:

```html
<px-deck-selector></px-deck-selector>
```

<br />
<hr />

## Attributes

decks | Array
selectedDeckUrl | String
isDecks | Boolean
isDropdownOpen | Boolean
  selectedDeckUrl-changed

#### decks

*Type:* **Array** - (*Required*) - *Default:* None

Assign an array of objects to be displayed in the drop-down. Each object needs a `name` and `url` property.

```html
<px-deck-selector
	...
	decks='[
        {"name": "First Deck", "url": "/deck1"},
        {"name": "Second Deck", "url": "/deck2"},
        {"name": "Third Deck", "url": "/deck3"}                    
    ]'>
</px-deck-selector>
```

#### selected-deck-url

*Type:* **String** - (*Read-only*) - *Default:* None

Use the selected-deck-url to bind to the value of the url of the currently selected deck. This is a read-only attribute. The first deck in the list of decks will be selected intially.

```html
<px-deck-selector
	...
	selected-deck-url="{{url}}">
</px-deck-selector>

<div>The selected deck url is: <span>{{url}}</span></div>
```

<br />
<hr />

##Events

### `selected-deck-url-changed`

Event fired on change to `selected-deck-url` value. Listeners will receive an event object whose `e.detail.value` attribute has the changing property's new value. *Note: The value will be automatically updated if you are using data-binding, making event listeners unnecessary.*

Add a listener using the `on-selected-deck-url-changed` annotated event listener syntax as follows:

```html
<px-deck-selector on-selected-deck-url-changed="selectedDeckURLChangedHandler">
</px-deck-selector>
```
```javascript
var selectedDeckURLChangedHandler = function(e) {
	// do something on range-changed
};
```

Attach an event listener using `addEventListener` like this:

```html
<px-deck-selector id="my-deck-selector"></px-deck-selector>
```
```javascript
var el = document.querySelector("#my-deck-selector");
el.addEventListener("selected-deck-url-changed", function(e) {
	// do something on range-changed
    console.log(e.detail.value);
});
```

## Using Events

Events follow the [Polymer data-binding standards](https://www.polymer-project.org/1.0/docs/devguide/data-binding.html).

You can can attach listeners by using one of the methods below:

1. Polymer Event listener
2. "on-x" annotated event listener
3. addEventListener Javascript method
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


### DevMode
Devmode runs `grunt depserve` and `grunt watch` concurrently so that when you make a change to your source files and save them, your preview will be updated in any browsers you have opened and turned on LiveReload.
From the component's directory run:

```
$ grunt devmode
```

### GE Coding Style Guide
[GE JS Developer's Guide](https://github.com/GeneralElectric/javascript)

<br />
<hr />

## Known Issues

Please use [Github Issues](https://github.com/PredixDev/COMPONENT/issues) to submit any bugs you might find.
