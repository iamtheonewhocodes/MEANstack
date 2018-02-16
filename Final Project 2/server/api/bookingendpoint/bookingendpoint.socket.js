/**
 * Broadcast updates to client when the model changes
 */

'use strict';

import BookingendpointEvents from './bookingendpoint.events';
var events = ['save', 'remove'];
export function register(socket) {
  for (var i = 0, eventsLength = events.length; i < eventsLength; i++) {
    var event = events[i];
    var listener = createListener('bookingendpoint:' + event, socket);

    BookingendpointEvents.on(event, listener);
    socket.on('disconnect', removeListener(event, listener));
  }
}


function createListener(event, socket) {
  return function(doc) {
    socket.emit(event, doc);
  };
}

function removeListener(event, listener) {
  return function() {
    BookingendpointEvents.removeListener(event, listener);
  };
}
