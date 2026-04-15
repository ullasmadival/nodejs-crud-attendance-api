import express from "express"

const app = express();

app.use(express.json());

let userInfo = [];
let currentUserId = 0;

app.route("/attendance").post((req, res) => {
     const username = req.body.username;
    const email = req.body.email;

    if (username && email) {
        const user = {
            userId: ++currentUserId,
            username,
            email
        }
        userInfo.push(user);
        return res.status(200).json({ message: "Attendance Marked!!!!" });
    } else {
        return res.status(401).json({ message: "Username and email are required" });
    }    
}).get((req, res) => {
    return res.status(200).json(userInfo);
}).put((req, res) => {
    const newUsername = req.body.username;
    const userId = req.body.userId;
    if (userId && newUsername) {
        userInfo = userInfo.map((item) => {
            if (item.userId === userId) {
                return { ...item, username: newUsername };
            } else {
                return item;
            }
        })
        return res.status(200).json({ message: "Username updated !!!!" });
    } else {
        return res.status(401).json({ message: "userId and username are required!!!!!" });
    }    
}).delete((req, res) => {
    const userId = req.body.userId;

    if (userId) {
        userInfo = userInfo.filter((item) => item.userId !== userId);
        return res.status(200).json({
            message: "user got deleted!!!!!!!!!!"
        });
    } else {
        return res.status(401).json({
            message: "UserId required!!!!!!!!!!"
        });
    }    
})

app.listen(8282, () => {
    console.log("Server is running on port: 8282");
})