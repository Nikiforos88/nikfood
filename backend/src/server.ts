import express from "express";
import cors from "cors"
import { sample_foods, sample_tags } from "./data";
const port = 5000;
const app = express();

app.use(cors({
    credentials: true,
    origin: ["http://localhost:4200"]
}));

app.get("/api/foods", (req, res)=> {
    res.send(sample_foods);
})

app.get("/api/foods/search/:searchTerm", (req, res) => {
    const searchTerm = req.params.searchTerm;
    const foods = sample_foods
    .filter(food => food.name.toLowerCase()
    .includes(searchTerm.toLowerCase()))
    res.send(foods)
})

app.get("/api/foods/tags", (req, res) => {
    res.send(sample_tags)
})

app.get("/api/foods/tags/:tagName", (req, res) => {
    const tagName = req.params.tagName;
    const foods = sample_foods
    .filter(food => food.tags?.includes(tagName));
    res.send(foods)
})

app.get("/api/foods/:foodId", (req, res) => {
    const foodId = req.params.foodId;
    const food = sample_foods.find(food => food.id == foodId) 
    res.send(food)
})

app.listen(port, ()=> {
    console.log(`Server is listening on http://localhost:${port}`)
})