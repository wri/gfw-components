A wrapper component for react-slick lib with standardized styles. This includes handling the responsive setting params react slick offers when imported by an SSR application.

```js
  <Carousel
    className="partners-slide"
    settings={{
      slidesToShow: 2,
      slidesToScroll: 1,
      lazyLoad: true
    }}
  >
    {[1, 2, 3, 4, 5, 6].map(i => (
      <div key={i}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '250px', backgroundColor: '#f7f7f7', color: '#555' }}>
          Slide {i}
        </div>
      </div>
    ))}
  </Carousel>
```