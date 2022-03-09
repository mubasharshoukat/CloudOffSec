import ACTIONS from './index'
import axios from 'axios'

export const sendDetails = async (details) => {
    

    if (!details){
        return {
            type: ACTIONS.FORM_SEND_FAILURE,
        }
    }
    
    const body = {
        filename: details.filename,
        version: details.version,
        files: details.files
    }
    try{
        const res = await axios.post('/uploadFile', body);
        return {
            type: ACTIONS.FORM_SEND_SUCCESS,
            payload: res
        }
    }catch(e){
        return {
            type: ACTIONS.FORM_SEND_FAILURE,
            payload: e
        }
    }

    return res

}
