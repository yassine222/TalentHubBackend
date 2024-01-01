import express from 'express'
import { addTalent, deleteTalent, getAllTalents, getOneTalent, updateTalent } from '../Controllers/talentController.js';
import multer from '../Middlewares/multer-config.js';

const router = express.Router()

router.route('/')
    .post(multer('affiche'), addTalent)
    .get(getAllTalents)


router.route('/:_id')
    .get(getOneTalent)
    .delete(deleteTalent)
    .put(multer('affiche'), updateTalent)


export default router