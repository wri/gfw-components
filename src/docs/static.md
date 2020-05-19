
You can install the core GFW components (`<GlobalStyles />`, `<Header />`, `<Footer />`, `<ContactUsModal />`) as a static script.

Add the following tags and font to the head of your app.

```html
<script type="text/javascript" src="https://gfw-assets.s3.amazonaws.com/static/gfw-assets.latest.js" preconnect></script>
<link href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&display=swap" rel="stylesheet">
```

And then place inside the html docment tags with the following ids:

```html
<!-- place where you want the header -->
<div id="headerGfw"></div>
<!-- place where you want the footer -->
<div id="footerGfw"></div>
<!-- place at the bottom of your html document -->
<div id="contactGfw"></div>
```