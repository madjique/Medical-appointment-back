const { Router } = require("express")
const { addTrait, deleteTrait, getTraits, getAllTraits } = require('../controllers/traitmentController')

const router = Router()

router.post('/add', addTrait)
router.delete('/:id', deleteTrait)
router.get('/all', getAllTraits)
router.get('/:id', getTraits)

module.exports = router;