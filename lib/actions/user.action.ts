"use server";
import { revalidatePath } from "next/cache";
import User from "../database/models/user.model";
import { connectDatabase } from "../database/mongoose";
import { handleError } from "../utils";
import { CreateUserParams,UpdateUserParams } from "../../types";

export async function createUser(user: CreateUserParams) {
    try {
        await connectDatabase();
        
        const newUser = await User.create(user);
        console.log(newUser);
        return JSON.parse(JSON.stringify(newUser));
    } catch (error) {
        handleError(error)
    }
}

export async function getUserByID(userId: String) {
    try {
        await connectDatabase();

        const user = await User.findOne({ clerkId: userId })
        if (!user) throw new Error("User not found");
        return JSON.parse(JSON.stringify(user));
    } catch (error) {
        handleError(error);
    }
}
export async function updateUser(clerkId: string, user: UpdateUserParams) {
    try {
        await connectDatabase();

        const updatedUser = await User.findOneAndUpdate({ clerkId }, user, { new: true })
        if (!updatedUser) throw new Error("User update failed");
        return JSON.parse(JSON.stringify(updatedUser));
    } catch (error) {
        handleError(error);
    }
}
export async function deleteUser(clerkId: string) {
    try {
        await connectDatabase();

        // Find user to delete
        const userToDelete = await User.findOne({ clerkId });

        if (!userToDelete) {
            throw new Error("User not found");
        }

        // Delete user
        const deletedUser = await User.findByIdAndDelete(userToDelete._id);
        revalidatePath("/");

        return deletedUser ? JSON.parse(JSON.stringify(deletedUser)) : null;
    } catch (error) {
        handleError(error);
    }
}

export async function updateCredits(userId: string, creditFee: number) {
    try {
        await connectDatabase();

        const updatedUserCredits = await User.findOneAndUpdate(
            { _id: userId },
            { $inc: { creditBalance: creditFee } },
            { new: true }
        )

        if (!updatedUserCredits) throw new Error("User credits update failed");

        return JSON.parse(JSON.stringify(updatedUserCredits));
    } catch (error) {
        handleError(error);
    }
}