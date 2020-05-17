A wrapper component for [react-slick](https://react-slick.neostack.com/docs/get-started) with standardized styles. This includes handling the responsive setting params react slick offers when imported by an SSR application.

```js
  <div style={{ padding: '0 20px', overflowX: 'hidden' }}>
    <Carousel
      settings={{
        slidesToShow: 2,
        slidesToScroll: 1,
        lazyLoad: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
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
  </div>
```