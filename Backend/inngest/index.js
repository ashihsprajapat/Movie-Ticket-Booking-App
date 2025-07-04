

import { Inngest } from "inngest";
import { User } from "../Models/user.model.js";

export const inngest = new Inngest({ id: "movie-ticket-booking" });

//inngest function to save yser data to a database
const syncUserCreation = inngest.createFunction(
    { id: 'sync-user-from-clerk' },
    { event: 'clerk/user.created' },
    async ({ event }) => {
        const { id, first_name, image_url, last_name, email_addresses } = event.data;
        const userData = {
            _id: id,
            email: email_addresses[0].email_address,
            image: image_url,
            name: first_name + " " + last_name
        }
        await User.create(userData)
    },
)

//inngest function to delete user from database
const syncUserDeletion = inngest.createFunction(
    { id: "delete-user-with-clerk" },
    { event: 'clerk/user.deleted' },
    async ({ event }) => {
        const { id } = event.data;
        await User.findByIdAndDelete(id);

    }
)

//inngest function to update user from database
const syncUserUpdation = inngest.createFunction(
    { id: "update-user-from-clerk" },
    { event: 'clerk/user.updated' },
    async ({ event }) => {
        const { id, first_name, image_url, last_name, email_addresses } = event.data;
        const userData = {
            _id: id,
            email: email_addresses[0].email_address,
            image: image_url,
            name: first_name + " " + last_name
        }
        await User.findByIdAndUpdate(id, userData)

    }
)


export const functions = [
    syncUserCreation,
    syncUserDeletion,
    syncUserUpdation
];