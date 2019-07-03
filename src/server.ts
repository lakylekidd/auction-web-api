import { createKoaServer } from "routing-controllers";
import setupDb from './db';
import AdvertisementController from './controllers/advertisement.controller';
import UserController from './controllers/user.controller';
import AuthenticationController from './controllers/auth.controller';

// Define the port
const port = process.env.PORT || 4003;

// Create the koa server
const app = createKoaServer({
    controllers: [
        // ---------> All controllers go here
        AdvertisementController,
        UserController,
        AuthenticationController
    ],
    /**
     * ONLY ENABLE AUTHORIZATION IF WE IMPLEMENT IT
     */
    // authorizationChecker: (action: Action) => {
    //     // Get the header
    //     const header: string = action.request.headers.authorization;
    //     // Check if header contains bearer
    //     if (header && header.startsWith('Bearer ')) {
    //         const [, token] = header.split(' ')
    //         return !!(token && verify(token))
    //     }

    //     return false;
    // }
})

// Start Listening to the specified port
// app.listen(port, () => console.log(`Listening on port ${port}`))
setupDb()
    .then(_ => app.listen(port, () => console.log(`Listening on port ${port};`)))
    .catch(console.error);