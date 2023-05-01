// 20 April 23

app.post("/api/savedata", async(req, res)) 



// 24/04/2023

app.get("/api/limitedstudent", async (req, res)=>{
    try{
        const sortedstudents = await STUDENT_MODEL.find().limit();
        return res.json({ success: true, data: sortedStudents });

    }  catch (error) {
        console.log(error);
        return res.status(400).json({ success: false, error: error.message });

    }
});


// 1/05/23

app.get("/api/findbyid", async (req, res)=>{
    try{
        const branch = req.body.branch
        const sortedstudents = await STUDENT_MODEL.findone();
        return res.json({ success: true, data: sortedStudents });

    }  catch (error) {
        console.log(error);
        return res.status(400).json({ success: false, error: error.message });

    }
});

// first bracket for filter and second bracket for projection (in find)


// UPDATE Operation
// By using id

// in update operation, first bracket is filter and second brackwet is the updated object
// you what



app.put("/update/:id", async (req, res) => {
    try{
        const data = await STUDENT_MODEL.findByIdAndUpdate(req.params.id{
            email: "princi@gmail.com", 
            branch: "Electrical",
            college: "MMMUT",
            gender: "F",

        });
        return res.status(200).json({
            success: false,
            
        });
    }  catch (error){
        return res.status(400).json({
            success: false,
            error: error.message,
        });
    }
});

connectDatabase();
app.listen(4000, () => {
    console.log("server is running at port 4000");
});


// DELETE Operation
// by id
app.delete("/delete/:id", async (req, res) => {
    try{
        const deletedocument = await STUDENT_MODEL.findByIdAnddelete(req.params.id{
            email: "princi@gmail.com", 
            branch: "Electrical",
            college: "MMMUT",
            gender: "F",

        });
        return res.json({success: true});
    }  catch (error){
        return res.status(400).json({
            success: false,
            error: error.message,
        });
    }
});

connectDatabase();
app.listen(4000, () => {
    console.log("server is running at port 4000");
});
