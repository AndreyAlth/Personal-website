const router = require('express').Router()

router.get('/blogs', (req, res)=>{
    res.render('blogs')
})

module.exports = router