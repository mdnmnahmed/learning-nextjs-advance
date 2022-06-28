import { dbConnect } from "../../../lib/dbConnect";
import UserModal from "../../../modals/UserModal";
import { errorHandler } from "../../../utils/errorHandler";
import { responseHandler } from "../../../utils/responseHandler";
import { validateInputFields } from "../../../utils/validateInputFields";

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        errorHandler('Invalid Request', res);
        return;
    }

    try {
        const { name, email, password } = req.body;
        validateInputFields({ name, email, password });

        await dbConnect();
        const user = new UserModal(req.body);
        const savedUser = await user.save();
        if (savedUser) {
            responseHandler(savedUser, res, 'Signup Success');
        }
    } catch (error) {
        errorHandler(error, res, 'Failed to Signup, please try again');
    }
} 