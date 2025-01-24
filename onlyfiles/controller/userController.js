const AddUser = async(req,res) => {
    const userDetails = req.body;
    console.log(userDetails);
    const newUser = new userData(userDetails);
    newUser.save()
    .then((result) => {
        res.status(201).json({user: result, response: 'user added'})
    }).catch((err) => {
        res.status(500).json({error: er})
    });
}

const GetUser = (req,res) => {
    const user = {
        userName : "Aditya",
        userRoll : "1234",
    }
    res.status(201).json({"userData": user});
}

exports.AddUser = AddUser;
exports.GetUser = GetUser;