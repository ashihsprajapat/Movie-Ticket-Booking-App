
import { clerkClient } from "@clerk/express";

export const protectAdmin = async (req, res, next) => {
    try {
        const { userId } = req.auth()

        const user = await clerkClient.user.getUser(userId)
        if (user.privateMetaData.role !== 'admin') {
            return res.json({ success: false, message: "Not authorize" })
        }
        req.user=user;
        next()
    } catch (err) {
        res.json({success:false, message:"not authorize"})
    }
}