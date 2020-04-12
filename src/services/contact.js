import { apiRequest } from 'utils/request';

export default formData => apiRequest.post('/form/contact-us', { ...formData });
