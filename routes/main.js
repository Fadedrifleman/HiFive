import express from "express";

import { getHome } from "../controllers/home.js";
import { getData, addParams } from '../controllers/earthquake.js';
import { getFaker, getFakeDetail } from '../controllers/faker.js';
import { getPage, getNameDetail } from '../controllers/behindTheName.js';

const router = express.Router();


router.route("/").get(getHome);
router.route("/earthquake").get(getData).post(addParams);
router.route("/faker").get(getFaker).post(getFakeDetail);
router.route("/behindTheName").get(getPage).post(getNameDetail);

export default router;