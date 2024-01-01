import mongoose from "mongoose";
const { Schema, model } = mongoose

const talent = new Schema(
    {
        titrepro: {
            type: String,
            required: true
        },
        teamtalent: {
            type: String,
            enum: ['Solo', 'Squad'],
            required: true
        },

        email: {
            type: String,
            required: true,
        },
        cartepro: {
            type: Number,
            required: true,
        },
        affiche: {
            type: String,
        },
        typetalent: {
            type: String,
            enum: ['Sport', 'Art'],
            required: true,
        },
        besoinmaterielle: {
            type: String,
        },


    }
)

export default model("Talent", talent)