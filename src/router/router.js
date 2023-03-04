import { Router } from "express";
export const router = Router();
import { studentCreation } from "../controller/student/studentCreation";
import { schoolCreation } from "../controller/school/schoolCreation";
import { classCreation } from "../controller/class/classCreation";
import { mentorCreation } from "../controller/mentor/mentorCreation";
import { subjectCreation } from "../controller/subject/subjectCreation";
import { getSchool } from "../controller/school/getSchool";
import { getClass } from "../controller/class/getClass";
import { getMentor } from "../controller/mentor/getMentor";
import { getAllSubject } from "../controller/subject/getAllSubject";
import { getAllStudent } from "../controller/student/getAllStudent";
import { getAllSchool } from "../controller/school/getAllSchool";
import { searchStudent } from "../controller/student/searchStudent";
import { deleteStudent } from "../controller/student/deleteStudent";
import { updateClass } from "../controller/class/updateClass";
import { deleteClass } from "../controller/class/deleteClass";
import { deleteMentor } from "../controller/mentor/deleteMentor";
import { updateMentor } from "../controller/mentor/updateMentor";
import { getAllMentor } from "../controller/mentor/getAllMentor";
import { updateSchool } from "../controller/school/updateSchool";
import { deleteSchool } from "../controller/school/deleteSchool";
import { getAllClass } from "../controller/class/getAllClass";
import { updateStudent } from "../controller/student/updateStudent";
import { getStudent } from "../controller/student/getStudent";
import { updateSubject } from "../controller/subject/updateSubject";
import { getSubject } from "../controller/subject/getSubject";
import { deleteSubject } from "../controller/subject/deleteSubject";


router.post("/api/v1/create-class", classCreation);
router.delete("/api/v1/delete-class/:id", deleteClass);
router.patch("/api/v1/update-class/:id", updateClass);
router.get("/api/v1/get-class/:id", getClass);
router.get("/api/v1/all-class/", getAllClass);

router.post("/api/v1/create-mentor", mentorCreation);
router.delete("/api/v1/delete-mentor/:id", deleteMentor);
router.patch("/api/v1/update-mentor/:id", updateMentor);
router.get("/api/v1/all-mentor", getAllMentor);
router.get("/api/v1/get-mentor/:id", getMentor);

router.post("/api/v1/create-school", schoolCreation);
router.get("/api/v1/all-school", getAllSchool);
router.patch("/api/v1/update-school/:id", updateSchool);
router.delete("/api/v1/delete-school/:id", deleteSchool);
router.get("/api/v1/get-school/:id", getSchool);

router.post("/api/v1/create-student", studentCreation);
router.delete("/api/v1/delete-student/:id", deleteStudent);
router.get("/api/v1/all-student", getAllStudent);
router.get("/api/v1/search-student", searchStudent);
router.patch("/api/v1/update-student/:id", updateStudent);
router.get("/api/v1/get-student/:id",getStudent)

router.post("/api/v1/create-subject", subjectCreation);
router.patch("/api/v1/update-subject/:id", updateSubject);
router.get("/api/v1/all-subject", getAllSubject);
router.get("/api/v1/get-subject/:id", getSubject);
router.delete("/api/v1/delete-subject/:id", deleteSubject);