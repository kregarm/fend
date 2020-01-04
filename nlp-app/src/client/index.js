import './js/client.js'
import './js/offlineCheck'
import './styles/base.scss';
import './styles/header.scss';
import './styles/form.scss';
import './styles/sections.scss';
import './styles/footer.scss';

import { postData, sendData } from '../client/js/client';
import { checkLive, showError } from '../client/js/offlineCheck';

export {
    sendData,
    postData,
    checkLive,
    showError
}