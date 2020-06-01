import app from "./app";

const PORT = 4050;
const handleListening = () =>
  console.log(`LISTENLING : http://localhost:${PORT}`);

app.listen(PORT, handleListening);
