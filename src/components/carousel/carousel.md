A wrapper component for react-slick lib with standardized styles.

```js
  <Carousel
    className="partners-slide"
    settings={{
      slidesToShow: 2,
      slidesToScroll: 1,
      lazyLoad: true
    }}
  >
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '250px', backgroundColor: '#f7f7f7', color: '#555' }}>
        Slide 1
      </div>
    </div>
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '250px', backgroundColor: '#f7f7f7', color: '#555' }}>
        Slide 2
      </div>
    </div>
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '250px', backgroundColor: '#f7f7f7', color: '#555' }}>
        Slide 3
      </div>
    </div>
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '250px', backgroundColor: '#f7f7f7', color: '#555' }}>
        Slide 4
      </div>
    </div>
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '250px', backgroundColor: '#f7f7f7', color: '#555' }}>
        Slide 5
      </div>
    </div>
  </Carousel>
```