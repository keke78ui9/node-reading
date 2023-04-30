## node-reading

TypeScript Library to providing functions to get estimated times of the article, and provide Speak function to read the content.

# Features
- provide article reading time.
- auto speak the content

## Get Started
```sh
npx @keke78ui9/node-reading
```
or
```sh
npm install @keke78ui9/node-reading
```

## Basic Usage

Get Reading Time by Content
```js
import { getTime } from '@keke78ui9/node-reading';

const readingTime = getTime({
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  });
```

Get Reading Time by HTML String
```js
import { getTime } from '@keke78ui9/node-reading';

const readingTime = getTime({
    html: '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>',
  });
```

Get Reading Time by Selector
```js
import { getTime } from '@keke78ui9/node-reading';

const readingTime = getTime({
    selector: 'article',
  });
```

Speak by Content
```js
import { speak } from '@keke78ui9/node-reading';

speak({
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  });
```

Speak by Content from HTML String
```js
import { speak } from '@keke78ui9/node-reading';

speak({
    html: '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>',
  });
```

Speak by Content from Selector
```js
import { speak } from '@keke78ui9/node-reading';

speak({
    selector: 'article',
  });
```

## Development

run test
```
npm run test
```



