import '../styles/index.css';

import Moment from 'react-moment';

Moment.globalLocale = "es";
Moment.globalFormat = "llll";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
