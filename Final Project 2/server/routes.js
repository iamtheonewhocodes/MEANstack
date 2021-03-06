/**
 * Main application routes
 */

'use strict';

import errors from './components/errors';
import path from 'path';

export default function(app) {
  // Insert routes below
  app.use('/api/seatbookingendpoints', require('./api/seatbookingendpoint'));
  app.use('/api/bookingendpoints', require('./api/bookingendpoint'));
  app.use('/api/userendpoints', require('./api/userendpoint'));
  app.use('/api/seatbookings', require('./api/seatbooking'));
  app.use('/api/theatresendpoints', require('./api/theatresendpoint'));
  app.use('/api/mappingendpoints', require('./api/mappingendpoint'));
  app.use('/api/searchmoviesendpoints', require('./api/searchmoviesendpoint'));
  app.use('/api/homeendpoints', require('./api/homeendpoint'));
  app.use('/api/things', require('./api/thing'));
  app.use('/api/users', require('./api/user'));

  app.use('/auth', require('./auth').default);

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get((req, res) => {
      res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
    });
}
