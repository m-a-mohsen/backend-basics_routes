import { server, PORT } from "./server.js";

server.listen(PORT, () => {
    console.log(`Listining to PORT ${PORT}`)
})
