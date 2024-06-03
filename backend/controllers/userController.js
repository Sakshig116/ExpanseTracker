const userModel = require("../models/userModel");

// login callback
const loginController = (req, res) => {
    const { email, password } = req.body;
    userModel.findOne({ email, password })
        .then(user => {
            if (!user) {
                return res.status(404).send("User Not Found");
            }
            res.status(200).json({
                success: true,
                user,
            });
        })
        .catch(error => {
            res.status(400).json({
                success: false,
                error,
            });
        });
};

// Register Callback
// const registerController = (req, res) => {
//     const newUser = new userModel(req.body);
//     newUser.save()
//         .then(savedUser => {
//             res.status(201).json({
//                 success: true,
//                 user: savedUser,
//             });
//         })
//         .catch(error => {
//             res.status(400).json({
//                 success: false,
//                 error,
//             });
//         });
// };
const registerController = (req, res) => {
    // Extracting data from the request body
    const { name, email, password } = req.body;

    // Validate that email is not empty or null
    if (!email) {
        return res.status(400).json({
            success: false,
            error: "Email is required",
        });
    }

    // Creating a new user object using the extracted data
    const newUser = new userModel({
        name,
        email,
        password
    });

    // Saving the user to the database
    newUser.save()
        .then(savedUser => {
            res.status(201).json({
                success: true,
                user: savedUser,
            });
        })
        .catch(error => {
            res.status(400).json({
                success: false,
                error,
            });
        });
};


module.exports = { loginController, registerController };