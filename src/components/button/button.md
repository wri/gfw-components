#### Default
```js
<Button>Global Forest Watch</Button>
```

#### Light
```js
<Button theme="theme-button-light">Global Forest Watch</Button>
```

#### With tooltip

You can add a react tippy tooltip to any button with the `tooltip` prop. It accepts an object with any of the props listed in the lib: https://github.com/tvkhoa/react-tippy.

```js
<Button theme="theme-button-light" tooltip={{ text: 'Thanks for hovering' }}>Global Forest Watch</Button>
```

#### Themes
There are themes for buttons available also. You can chain themes inside the theme prop to access these
```js
<Button theme="theme-button-medium">Global Forest Watch</Button>
<br />
<Button theme="theme-button-small">Global Forest Watch</Button>
<br />
<Button theme="theme-button-grey">Global Forest Watch</Button>
<br />
<Button theme="theme-button-small theme-button-grey">Global Forest Watch</Button>
<br />
<Button theme="theme-button-tiny">Global Forest Watch</Button>
<br />
<Button theme="theme-button-xsmall">Global Forest Watch</Button>
<br />
<Button theme="theme-button-medium square">$</Button>
<br />

```