# musii-passport
Authentication middleware in express

```javascript
const { authentication } = require('musii-passport')

authentication()
```
```javascript
const { passport } = require('musii-passport')

server.get(`/me`, passport, async (req, res) => {
 ...
 ```
 
