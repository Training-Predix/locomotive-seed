Px-Simple-Line-Chart
-----------------------------------------------

## Overview

Px-Simple-Line-Chart is a Predix Experience ('Px') component.

- <a href="http://pxc-demos.grc-apps.svc.ice.ge.com/bower_components/px-simple-line-chart/demo.html" target="_blank">Demo</a>
- <a href="http://pxc-demos.grc-apps.svc.ice.ge.com/bower_components/px-simple-line-chart/index.html" target="_blank">API Docs</a>

Use the Px-Simple-Line-Chart component to visualize a series of numeric values as a line chart. The series is represented by a thin blue line connecting a sequence of points, the position of each proportionally point representing a single coordinate value.

Optionally, a `threshold` value may be defined to draw a thin orange line horizontally at the y-axis point representing the value. By default a threshold label will be drawn in an axis bar on the left side of the chart. If a custom threshold label is necessary a string may also be passed to the component as `threshold-label`.

In addition, a `min` and `max` may be configured in order to scope the chart to a specific range of y values. By default these will also be represented by labels in an axis bar on the left side of the chart. If custom labels are necessary they can be passed as strings to the component as `min-label` and `max-label`.

The `width` and `height` of the component are also configurable as well as the vertical columns and horizontal rows drawn in the background of the coordinate space.

We recommend viewing the <a href="http://pxc-demos.grc-apps.svc.ice.ge.com/bower_components/px-simple-line-chart/demo.html" target="_blank">Demo</a> page to become aware of the configuration possibilities. We also recommend using the default settings as they are designed for proper performance.

<hr />
## Usage

Install the component to your project using bower

```
bower install https://github.com/PredixDev/px-simple-line-chart.git --save
```

Include the component in your page as you would any other Polymer element by importing it in application's head:

```html
<link rel="import" href="bower_components/px-simple-line-chart.html" />
```

<hr />

### Options

Options are passed into the component as attributes on the element tag.


##### line-data

Send your data to the component via the `line-data` attribute which defines the series data to be charted. It needs to be passed in as a multi-dimensional array containing one or more arrays of numeric value pairs.

```html
<px-simple-line-chart
    line-data="[ [1,2], [2,3], [3,4] ]">
</px-simple-line-chart>
```


##### threshold

Use the `threshold` attribute to define a threshold value and draw a thin orange line across the chart at the y-axis position representing the threshold point.

```html
<px-simple-line-chart
    threshold="1.5">
</px-simple-line-chart>
```


##### threshold-label

Use the `threshold-label` attribute to define custom text for your threshold label. Pass in the value as a string. Set the value to 'false' to remove the threshold label.

```html
<px-simple-line-chart
    ...
    threshold-label="Custom Label">
</px-simple-line-chart>

<px-simple-line-chart
    ...
    threshold-label="false">
</px-simple-line-chart>

```


##### min and/or max

Use the `min` and/or `max` attribute to define a the upper and lower bounds of your

```html
<px-simple-line-chart
    ...
    min="1"
    max="2">
</px-simple-line-chart>
```


##### min-label and/or max-label

By default the values of your min and max will be used to render text labels to the axis bar on the left side of the chart. Pass in strings to the `min-label` and/or `max-label` attributes to define custom text for a chart's min and max labels. Set the value to 'false' to remove the either of the labels from the axis bar.

```html
<px-simple-line-chart
    ...
    threshold-label="Custom Label">
</px-simple-line-chart>

<px-simple-line-chart
    ...
    threshold-label="false">
</px-simple-line-chart>

```

##### columns and rows

Set the `columns` and/or `rows` attributes to define the grid lines to be drawn in the background of the chart.

```html
<px-simple-line-chart
    ...
    columns="25"
    rows="10">
</px-simple-line-chart>
```


##### width and height

Set the `width` and `height` attributes to define the target pixel width and height of the chart component. The default settings are 283 by 150.

```html
<px-simple-line-chart
    ...
    width="370"
    height="230">
</px-simple-line-chart>
```

###### Automatic width and height for responsive layouts

Set the `width` and `height` attributes to "auto" and the chart will expand to fill it's containing element. *Note: The containing element must be a block-level element.*

```html
<px-simple-line-chart
    ...
    width="auto"
    height="auto">
</px-simple-line-chart>
```



### Function calls

There are no external function calls for this component.

### Extending styles

There are no external CSS extension points.

### Extending behavior

See Polymer composition patterns


## Getting Started

From the component's directory...

```
$ npm install
$ bower install
$ grunt sass
```

### API and examples

From the component's directory run:

```
$ grunt depserve
```

Starts a local server. Navigate to the root of that server (e.g. http://localhost:8080/) in a browser to open the API documentation page, with link to the "Demo" / working examples.

### Local Development

Local development is enabled by running `grunt devmode` (see below)

### LiveReload

By default grunt watch is configured to enable LiveReload and will be watching for modifications in your root directory as well as `/css`.

Your browser will also need to have the LiveReload extension installed and enabled. For instructions on how to do this please refer to: [livereload.com/extensions/](http://livereload.com/extensions/).

This is an example watch configuration:

```javascript
watch: {
    sass: {
        files: ['sass/**/*.scss'],
        tasks: ['sass', 'autoprefixer'],
        options: {
            interrupt: true,
            livereload: true
        }
    },
    htmljs: {
        files: ['*.html', '*.js'],
        options: {
            interrupt: true,
            livereload: true
        }
    }
},
```

Disable LiveReload by removing the `livereload` key from the configuration object or explicitly setting it to false.

### DevMode

From the component's directory run:

```
$ grunt devmode
```

Starts a local server exactly the same as if you had run `grunt depserve` however in addition it also runs `grunt watch` concurrently which will execute commands on file change according to the specified matching patterns.

This is an example `grunt watch` configuration which watches for changes to SASS files, then on changes executes SASS compilation and automatic prefixing:

```javascript
watch: {
    sass: {
        files: ['sass/**/*.scss'],
        tasks: ['sass', 'autoprefixer'],
        options: {
            interrupt: true
        }
    }
}
```

**We hope `grunt devmode` puts your development into *#beastmode*.**

<img src="http://imgc.allpostersimages.com/images/P-488-488-90/71/7108/JJUV100Z/posters/teen-wolf-beast-mode.jpg" alt="Slam Dunks for Days" width=
"250" />


### GE Coding Style Guide
---------------------

[GE JS Developer's Guide](https://github.com/GeneralElectric/javascript)


### Known Issues
