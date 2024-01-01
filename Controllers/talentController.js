import Talent from "../Models/talent.js";



export function addTalent(req, res) {


    const talent = new Talent({
        titrepro: req.body.titrepro,
        teamtalent: req.body.teamtalent,
        email: req.body.email,
        cartepro: req.body.cartepro,
        typetalent: req.body.typetalent,
        besoinmaterielle: req.body.besoinmaterielle,
        affiche: req.body.affiche
    })
    talent.save()
        .then(u => {
            res.status(201).send({
                message: "Talent added successfuly !"
            })
        }).catch(err => {
            res.status(500).send({ error: err })
        }
        )


}
export async function getAllTalents(req, res) {
    Talent.find().then(talents => {
        res.status(200).send(talents)
    }).catch(err => {
        res.status(500).send(err)
    })
}

export function updateTalent(req, res) {

    var affiche = ""
    if (req.file) {
        affiche = `${req.protocol}://${req.get('host')}/img/${req.file.filename}`
    }
    const talentid = req.params._id

    Talent.findOneAndUpdate({ _id: talentid }, {
        titrepro: req.body.titrepro,
        teamtalent: req.body.teamtalent,
        email: req.body.email,
        cartepro: req.body.cartepro,
        typetalent: req.body.typetalent,
        besoinmaterielle: req.body.besoinmaterielle,
        affiche: affiche
    })
        .then(t => {
            res.status(200).json({ message: "Talent updated successfuly !" })
        })
        .catch(err => {
            res.status(500).json(err)
        })





}


export function getOneTalent(req, res) {
    Talent
        .findOne({ "_id": req.params._id })
        .then(val =>
            res.status(200).json(val))
        .catch(err => {
            res.status(500).json({ error: err })
        })
}


export function deleteTalent(req, res) {
    Talent
        .findOneAndDelete({ "_id": req.params._id })
        .then(val =>
            res.status(200).json({ message: "Talent deleted successfuly !" }))
        .catch(err => {
            res.status(500).json({ error: err })
        })
}
