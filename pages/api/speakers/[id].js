import { data } from '../../../SpeakerData'
import path from "path";
import fs from "fs"

const { promisify } = require("util");
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export default async function handler(req, res) {

    const method = req?.method;
    const id = parseInt(req?.query.id);
    const recordFromBody = req?.body;
    const jsonFile = path.resolve("./", "db.json");

    switch (method) {
        case "POST":
            postMethod();
            break;
        case "PUT":
            putMethod();
            break;
        case "DELETE":
            deleteMethod();
            break;
        default:
            res.status(501).send(`Method ${method} not implemented`)
            console.log(`Method ${method} not implemented`)
    }
    /**
     * used for updating already created speaker
     */
    async function putMethod() {
        try {
            const readFileData = await readFile(jsonFile);
            await delay(1000); // to simulate service delay
            const speakers = JSON.parse(readFileData).speakers;
            if (speakers) {
                // *************** update logic *************
                const newSpeakersArray = speakers.map(function (speakerData) {
                    return speakerData.id === id ? recordFromBody : speakerData
                })
                writeFile(jsonFile, JSON.stringify({ speakers: newSpeakersArray }, null, 2))
                // *************** logic end *************
                res.setHeader("Content-Type", "application/json");
                res.status(200).send(JSON.stringify(recordFromBody, null, 2));
                console.log("PUT /api/speakers status: 200");
            }
            else {
                console.log("Request failed with status 404");
            }
        }
        catch (e) {
            console.log("PUT /api/speakers error", e);
            res.status(500).send("File not found");
        }
    }

    async function postMethod() {
        try {
            const readFileData = await readFile(jsonFile);
            await delay(1000); // to simulate service delay
            const speakers = JSON.parse(readFileData).speakers;
            if (speakers) {
                // *************** insert logic *************
                const newID = speakers.reduce(function findMaxID(accumulator, speaker) {
                    const currentId = parseInt(speaker.id)
                    return currentId > accumulator ? currentId : accumulator
                }, 0) + 1
                const newSpeaker = { ...recordFromBody, id: JSON.stringify(newID) }
                writeFile(jsonFile, JSON.stringify({ speakers: [newSpeaker, ...speakers] }, null, 2))
                // *************** logic end **************
                res.setHeader("Content-Type", "application/json");
                res.status(200).send(JSON.stringify(newSpeaker, null, 2));
                console.log("POST /api/speakers status: 200");
            }
            else {
                console.log("Request failed with status 500");
            }
        }
        catch (e) {
            console.log("Post /api/speakers error", e);
            res.status(500).send("File not found");
        }
    }

    async function deleteMethod() {
        try {
            const readFileData = await readFile(jsonFile);
            await delay(1000); // to simulate service delay
            const speakers = JSON.parse(readFileData).speakers;
            if (speakers) {
                // *************** delete logic *************
                const newSpeakersArray = speakers.map(function (speakerData) {
                    return speakerData.id !== id
                })
                writeFile(jsonFile, JSON.stringify({ speakers: newSpeakersArray }, null, 2))
                // *************** logic end **************
                res.setHeader("Content-Type", "application/json");
                res.status(200).send(JSON.stringify(speakers.find(record => record.id === id), null, 2));
                console.log("DELETE /api/speakers status: 200");
            }
            else {
                console.log("Request failed with status 500");
            }
        }
        catch (e) {
            console.log("DELETE /api/speakers error", e);
            res.status(500).send("File not found");
        }
    }
}