const path = require("path");
const Data = require("../models/cricketermodel");

exports.getIndex = (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
}

exports.postData = async (req, res, next) => {
    const cricketerName = req.body.cricketerName;
    const dob = req.body.dob;
    const pUrl = req.body.pUrl;
    const birthPlace = req.body.birthPlace;
    const carrer = req.body.carrer;
    const NOM = req.body.NOM;
    const score = req.body.score;
    const Fifties = req.body.Fifties;
    const Centuries = req.body.Centuries;
    const Wickets = req.body.Wickets;
    const Average = req.body.Average;
    try {
        await Data.create({
            cricketerName: cricketerName,
            dob: dob,
            pUrl: pUrl,
            birthPlace: birthPlace,
            carrer: carrer,
            NOM: NOM,
            score: score,
            Fifties: Fifties,
            Centuries: Centuries,
            Wickets: Wickets,
            Average: Average
        })
        res.redirect("/")
    }
    catch (err) {
        console.log(err)
    }
}
exports.getData = async (req, res, next) => {
    try {
        const cricketername = req.params.cricketername;
        const results = await Data.findAll({
            where: {
                cricketerName: cricketername
            }
        });
        res.json(results);
    } catch (err) {
        console.log(err);
    }
};

exports.updateData = async (req, res, next) => {
    const id = parseInt(req.params.id);
    const cricketerName = req.body.cricketerName;
    const dob = req.body.dob;
    const pUrl = req.body.pUrl;
    const birthPlace = req.body.birthPlace;
    const carrer = req.body.carrer;
    const NOM = req.body.NOM;
    const score = req.body.score;
    const Fifties = req.body.Fifties;
    const Centuries = req.body.Centuries;
    const Wickets = req.body.Wickets;
    const Average = req.body.Average;
    try {
        const result = await Data.findByPk(id);
        result.cricketerName = cricketerName;
        result.dob = dob;
        result.pUrl = pUrl;
        result.birthPlace = birthPlace;
        result.carrer = carrer;
        result.NOM = NOM;
        result.score = score;
        result.Fifties = Fifties;
        result.Centuries = Centuries;
        result.Wickets = Wickets;
        result.Average = Average;
        await result.save();
        res.redirect('/');
    }
    catch (err) {
        console.log(err)
    }

}

exports.deleteData = async (req, res, next) => {
    const id = req.body.id;
    try {
        await Data.destroy({ where: { id } });
    }
    catch (err) {
        console.log(err);
    }
}

