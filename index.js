 const app = require("./app")

const PORT = 5000;

app.listen(PORT, ()=>{
    console.log(` is running on http://localhost:${PORT}; ` )
});