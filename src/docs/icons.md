<br />
All icons you see present in the above examples can be imported as react components directly from the library. They are packaged with [svgr](https://github.com/gregberge/svgr) and any props present in the documentation can be passed directly.

<br />

```jsx padded
import {
  ArrowIcon,
  CloseIcon,
  MenuIcon,
  MoreIcon,
  SearchIcon,
  MyGFWIcon,
  DownloadIcon,
  LinkIcon,
  InfoIcon,
  DeveloperIcon,
  BlogIcon,
  ForumIcon,
  HowToIcon,
  OpenDataIcon,
  FacebookIcon,
  TwitterIcon,
  GoogleIcon,
  InstagramIcon,
  YouTubeIcon
} from 'gfw-components';

const iconStyle = {
  width: '30px',
  height: '30px',
  margin: '0 20px 20px 0',
  fill: '#333'
};

<div style={{ display: 'flex', flexWrap: 'wrap', width: '100%', marginTop: '20px' }}>
  <ArrowIcon style={iconStyle} />
  <CloseIcon style={iconStyle} />
  <MenuIcon style={iconStyle} />
  <MoreIcon style={iconStyle} />
  <SearchIcon style={iconStyle} />
  <MyGFWIcon style={iconStyle} />
  <DownloadIcon style={iconStyle} />
  <LinkIcon style={iconStyle} />
  <InfoIcon style={iconStyle} />
  <DeveloperIcon style={iconStyle} />
  <BlogIcon style={iconStyle} />
  <ForumIcon style={iconStyle} />
  <HowToIcon style={iconStyle} />
  <FacebookIcon style={iconStyle} />
  <TwitterIcon style={iconStyle} />
  <GoogleIcon style={iconStyle} />
  <InstagramIcon style={iconStyle} />
  <YouTubeIcon style={iconStyle} />
</div>
```
<br />