# musii-passport
Authentication middleware in express

```javascript
const { authentication } = require('musii-passport')

const model = Model from mongoose

authentication(model)
```
```javascript
const { passport } = require('musii-passport')

server.get(`/me`, passport, async (req, res) => {
 ...
 ```
 
