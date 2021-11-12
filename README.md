# installation

```js

yarn add @creatrix/common

OR 

npm i @creatrix/common

```



# example


```js
import {entity} from '@creatrix/common';
const mytitle=entity(`Michek&49;s`); <!-- result: Michel's-->
```

```js
import {ArabicNumbers} from '@creatrix/common';
const mytitle=ArabicNumbers(`1`); <!-- result: ۱ -->
```

```js
import {ImageYoutube} from '@creatrix/common';
const mytitle=ImageYoutube(`Wq3vimf`); <!-- result: https://img.youtube.com/vi/Wq3vimf/hqdefault.jpg -->
```


```js
import {getYoutubeVideoID} from '@creatrix/common';
const mytitle=ArabicNumbers(`https://youtu.be/Wq3vimf`); <!-- result: Wq3vimf -->
```

```js
import {FirstCharOfEachWord} from '@creatrix/common';
const mytitle=FirstCharOfEachWord(`Hello Demo Word`); <!-- result: HDW -->
```

```js
import {FirstChar} from '@creatrix/common';
const mytitle=FirstChar(`Hello Demo Word`); <!-- result: H -->
```

```js
import {SizeMBToB} from '@creatrix/common';
const mytitle=SizeMBToB(1); <!-- result: 1,048,576 -->
```

```js
import {SizeBToMB} from '@creatrix/common';
const mytitle=SizeBToMB(1,048,576); <!-- result: 1 -->
```

```js
import {SizeKBToMB} from '@creatrix/common';
const mytitle=SizeKBToMB(1024); <!-- result: 1 -->
```

```js
import {spacetoDash} from '@creatrix/common';
const mytitle=spacetoDash("Hello Word"); <!-- result: Hello-Word -->
```

```js
import {GetValueKeyOfArray} from '@creatrix/common';
const FromArray=[{id:1,value:Hello},{id:2,value:Word}];
const fromKey='id';
const fromvalue='2';
const selectedkey='value';
const mytitle=GetValueKeyOfArray(FromArray,fromKey,fromvalue,selectedkey); <!-- result: Word -->
```

```js
import {AddKeyToObject2Steps} from '@creatrix/common';
const FromObject={pageurl:{url:'http',params:{title:'hello'}},otherdata:'demo'};

const mytitle=AddKeyToObject2Steps(FromObject,'pageurl','params',{newdata:'we are here'}); <!-- result: {pageurl:{url:'http',params:{title:'hello',newdata:'we are here' <!--data is added here--> }},otherdata:'demo'} -->
```
