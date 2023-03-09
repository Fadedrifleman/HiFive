import express from "express";

import { getHome } from "../controllers/home.js";
import { getData, addParams } from '../controllers/earthquake.js';
import { getFaker, getFakeDetail } from '../controllers/faker.js';
import { getPage, getNameDetail } from '../controllers/behindTheName.js';
import { getWeatherPage, getWeatherDetail } from '../controllers/openWeatherMap.js';
import { getRickAndMortyPage, getCharacterDetail } from '../controllers/rickAndMorty.js';


const router = express.Router();


router.route("/").get(getHome);
router.route("/earthquake").get(getData).post(addParams);
router.route("/faker").get(getFaker).post(getFakeDetail);
router.route("/behindTheName").get(getPage).post(getNameDetail);
router.route("/openWeatherMap").get(getWeatherPage).post(getWeatherDetail);
router.route("/rickAndMorty").get(getRickAndMortyPage).post(getCharacterDetail);

export default router;