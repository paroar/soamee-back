import { Router } from "express"
import Phone from "./../models/Phone.js"

const router = Router();

router.get("/", async (req, res) => {
    try {
        const phones = await Phone.find()
        res.json(phones);
    } catch (error) {
        res.json({ message: error })
    }
});

router.get("/:phoneId", async (req, res) => {
    try {
        const phone = await Phone.findById(req.params.phoneId)
        res.json(phone);
    } catch (error) {
        res.json({ message: error })
    }
});

router.post("/", async (req, res) => {
    const phone = new Phone({
        title: req.body.title,
        price: req.body.price,
        company: req.body.company,
        info: req.body.info,
        img: req.body.img,
    })

    try {
        const savedPhone = await phone.save()
        res.json(savedPhone)
    } catch (error) {
        res.json({ message: error })
    }
})

router.patch("/:phoneId", async (req, res) => {
    console.log(req.body)
    try {
        const updatedPhone = await Phone.updateOne(
            { _id: req.params.phoneId },
            {
                $set: {
                    title: req.body.title,
                    price: req.body.price,
                    company: req.body.company,
                    info: req.body.info,
                    img: req.body.img,
                }
            })
        res.json(updatedPhone)
    } catch (error) {
        res.json({ message: error })
    }
})

router.delete("/:phoneId", async (req, res) => {
    console.log(req.params.phoneId)
    try {
        const removedPhone = await Phone.deleteOne({ _id: req.params.phoneId })
        res.json(removedPhone);
    } catch (error) {
        res.json({ message: error })
    }
})

export default router
